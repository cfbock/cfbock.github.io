# Christopher Bock — Career ePortfolio

A responsive, dark-themed, static portfolio built for GitHub Pages. No build tools required.

## Preview locally
Open `index.html` in Chrome, Edge, or Firefox. It works without a web server (Google Fonts may require internet).

## Before publishing — REQUIRED

1. **Photo (Week 1):** Add your approved professional headshot to `assets/` (for example `headshot.jpg`). In `index.html`, replace the `<div class="portrait-placeholder"> ... </div>` block with `<img src="assets/headshot.jpg" alt="Professional portrait of Christopher Bock" style="width:100%;height:420px;object-fit:cover;border-radius:18px">`.
2. **Week 1 bio and skills:** Check the About and Skills text against your actual Week 1 assignments and revise as necessary.
3. **Week 6 resume:** Export your finalized resume to PDF and place it at `assets/Christopher_Bock_Resume.pdf`. Then change `resumeUrl` in `config.js` to `assets/Christopher_Bock_Resume.pdf`.
4. **GitHub username and project links:** Open `config.js` and paste full HTTPS URLs for your GitHub profile, RecipeBookWebApp, Curator, and coursework. If a project is private, either leave it unlinked and revise the link label, or provide an approved demo instead.
5. **Education and credentials:** Verify the degree/training details. Add only degrees and certifications actually earned. Planned certifications are explicitly labeled as planned.
6. **Week 7 references/testimonials:** Replace the placeholder text in the References section with approved material. Get permission before publishing names, quotes, email addresses, or phone numbers. "References available upon request" is a privacy-conscious alternative, but verify it meets your instructor's requirement.
7. **Current employment:** Review the Justice Federal Credit Union description for accuracy and employer confidentiality expectations.
8. **Remove classroom notes:** Remove the visible instructional note panels and photo placeholder text before using this as a public professional portfolio.

## Publish to GitHub Pages

1. Create a **public** GitHub repository named `portfolio` (or `YOURUSERNAME.github.io`).
2. Upload the **contents** of this folder to the repository root, including `index.html`, `styles.css`, `script.js`, `config.js`, and the `assets` folder. Do not upload the ZIP alone.
3. In GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**. Choose `main` and `/ (root)`, then Save.
4. After deployment, your URL will typically be `https://YOURUSERNAME.github.io/portfolio/` (or `https://YOURUSERNAME.github.io/` for the specially named repository).
5. Open the published URL on desktop and mobile and test every navigation link and document download.
6. Paste the URL into a Word document and submit the Word document for CIS1254.

## Structure
- `index.html`: portfolio content and six required assignment sections
- `styles.css`: responsive design and visual styling
- `script.js`: mobile navigation, scroll effects, and link configuration
- `config.js`: your GitHub/project/resume URLs
- `assets/`: add your headshot, resume, and optional project screenshots here

## Notes
This website intentionally contains no invented testimonials, unverified GitHub URLs, or fabricated credentials. All illustration-like project previews are CSS mockups, not actual screenshots. The portfolio has no tracking or external JavaScript dependencies; Google Fonts is loaded from Google's font CDN.


## Resume
The resume button links to `assets/Christopher_Bock_Resume.pdf`. This portfolio edition was reconstructed from available resume information, not exported from the finalized Week 6 document. Review or replace it with your exact Week 6 resume if required.
