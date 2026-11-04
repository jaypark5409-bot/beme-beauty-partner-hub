<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the supplied home HTML and CSS as immutable presentation; attach form events in the home route so storage changes cannot redesign the page.
- Submissions use validated, rate-limited server functions and service-role-only tables; public visitors must never read leads.
- Admin data and exports require a server-verified shared password in an encrypted session; missing password configuration always denies access.
- Admin CSS is route-loaded and scoped to `.beme-admin` so it cannot change the home page.
