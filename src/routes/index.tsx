import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { bemeCss, bemeHtml } from "@/lib/beme-page";

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
  useEffect(() => {
    document.querySelectorAll('[data-pick="artist"]').forEach((a) =>
      a.addEventListener("click", () => {
        const s = document.getElementById("f-type") as HTMLSelectElement | null;
        if (s) s.value = "artist";
      }),
    );
    const wire = (form: string, wrap: string, thanks: string) =>
      document.getElementById(form)?.addEventListener("submit", (e) => {
        e.preventDefault();
        document.getElementById(wrap)!.hidden = true;
        document.getElementById(thanks)!.hidden = false;
      });
    wire("apply-form", "apply-form-wrap", "apply-thanks");
    wire("waitlist-form", "waitlist-form-wrap", "waitlist-thanks");
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: bemeCss }} />
      <div dangerouslySetInnerHTML={{ __html: bemeHtml }} />
    </>
  );
}
