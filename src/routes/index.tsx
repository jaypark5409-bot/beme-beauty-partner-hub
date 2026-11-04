import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { bemeCss, bemeHtml } from "@/lib/beme-page";
import { submitPartner, submitWaitlist } from "@/lib/submissions.functions";
import { partnerSchema, waitlistSchema } from "@/lib/submission-schemas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "beme for partners" },
      { name: "description", content: "Vancouver's beauty discovery & booking platform. Join as an early partner." },
      { property: "og:title", content: "beme for partners" },
      { property: "og:description", content: "Vancouver's beauty discovery & booking platform. Join as an early partner." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const savePartner = useServerFn(submitPartner);
  const saveWaitlist = useServerFn(submitWaitlist);
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    const value = (id: string) => {
      const input = document.getElementById(id);
      return input instanceof HTMLInputElement ? input.value : "";
    };
    document.querySelectorAll('[data-pick="artist"]').forEach((a) => {
      const pick = () => {
        const input = document.getElementById("f-type");
        if (input instanceof HTMLInputElement) input.value = "artist";
      };
      a.addEventListener("click", pick);
      cleanups.push(() => a.removeEventListener("click", pick));
    });
    const wire = (id: string, wrapId: string, thanksId: string, save: () => Promise<unknown>) => {
      const form = document.getElementById(id);
      const wrap = document.getElementById(wrapId);
      const thanks = document.getElementById(thanksId);
      if (!(form instanceof HTMLFormElement) || !wrap || !thanks) return;
      let pending = false;
      let errorMessage: HTMLParagraphElement | undefined;
      const submit = async (e: Event) => {
        e.preventDefault();
        if (pending) return;
        pending = true;
        if (errorMessage) errorMessage.hidden = true;
        const button = form.querySelector('button[type="submit"]');
        if (button instanceof HTMLButtonElement) button.disabled = true;
        try {
          await save();
          wrap.hidden = true;
          thanks.hidden = false;
        } catch {
          if (!errorMessage) {
            errorMessage = document.createElement("p");
            errorMessage.setAttribute("role", "alert");
            form.insertAdjacentElement("afterend", errorMessage);
          }
          errorMessage.textContent = "Could not save. Please check your details and try again.";
          errorMessage.hidden = false;
        } finally {
          pending = false;
          if (button instanceof HTMLButtonElement) button.disabled = false;
        }
      };
      form.addEventListener("submit", submit);
      cleanups.push(() => { form.removeEventListener("submit", submit); errorMessage?.remove(); });
    };
    wire("apply-form", "apply-form-wrap", "apply-thanks", () => savePartner({ data: partnerSchema.parse({
      name: value("f-name"), business_name: value("f-biz"), email: value("f-email"),
      type: value("f-type"), instagram: value("f-ig"), phone: value("f-phone"),
    }) }));
    wire("waitlist-form", "waitlist-form-wrap", "waitlist-thanks", () => saveWaitlist({ data: waitlistSchema.parse({ email: value("w-email") }) }));
    return () => cleanups.forEach(cleanup => cleanup());
  }, [savePartner, saveWaitlist]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: bemeCss }} />
      <div dangerouslySetInnerHTML={{ __html: bemeHtml }} />
    </>
  );
}
