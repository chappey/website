# Portfolio

A responsive, multi-page portfolio site built with **Bootstrap 5.3**, hosted as a subdirectory on GitHub Pages.

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section with CTA |
| About | `about.html` | Bio, photo, and skills |
| Experience | `experience.html` | Career timeline |
| Projects | `projects.html` | Portfolio card grid |
| Contact | `contact.html` | Contact form & socials |

## Local Development

Serve from the **repository root** (one level above this folder):

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then open `http://localhost:8080/portfolio/` in your browser.

## Deployment

This site is deployed automatically via **GitHub Pages** — just push to the branch that Pages is configured to serve. No CI/CD pipeline needed.

## Customisation

- **Colors & typography** — edit `css/custom.css` CSS custom properties (`:root` block).
- **Content** — edit the HTML files directly. Skills, experience, and projects are all inline.
- **Resume** — place your PDF at `assets/docs/resume.pdf`.
- **Headshot** — replace the placeholder in `about.html` with an `<img>` pointing to `assets/images/`.
