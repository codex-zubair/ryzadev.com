# Ryza Dev — Website

One-page static website for **Ryza Dev**, an Android, AI and web app development studio.

Live domain: **https://ryzadev.com**

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Homepage (hero, services, capabilities, process, team, published apps, selected work, pricing, why, certifications, about, FAQ, contact) |
| `work.html` | Case studies — detailed write-ups of shipped projects |
| `styles.css` | Dark theme + responsive layout |
| `apps.js` | Published apps data (rendered automatically) |
| `script.js` | Renders apps, mobile nav, scroll animations |
| `sitemap.xml` / `robots.txt` | SEO — sitemap and crawler rules |
| `CNAME` | Custom domain for GitHub Pages |
| `assets/` | Brand logo (icon, lockup, wordmark), favicons and social share image |

The homepage also includes `ProfessionalService` (with credentials) and `FAQPage` JSON-LD structured data for search engines.

## Contact details

- Email: `im.nmzar@gmail.com`
- Phone: `+880 1622 559988`
- WhatsApp: `+1 561 865 2213`

## Team

Led by founder **Zubair Alam (codex-zubair)** — portfolio at [codexzubair.com](https://codexzubair.com) — supported by specialists in mobile, AI, web, cloud, design and QA/release.

## Adding a new published app

Open `apps.js` and append one object to the array:

```js
{
  name: "App Name",
  desc: "One line description.",
  url: "https://play.google.com/store/apps/details?id=your.package",
  icon: "https://play-lh.googleusercontent.com/....=s0-br30"
}
```

The portfolio updates automatically — no HTML editing required.

## Deploy (GitHub Pages)

1. Push the `main` branch to `git@github.com:codex-zubair/ryzadev.com.git`.
2. In the repo: **Settings → Pages**.
   - Source: `Deploy from a branch`
   - Branch: `main`, folder: `/ (root)`
3. Under **Custom domain**, enter `ryzadev.com` (the `CNAME` file already sets this).
4. At your domain registrar, add DNS records:

   **A records** (`@` → these four GitHub Pages IPs):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   **CNAME record** (`www` → `codex-zubair.github.io`)

5. Wait for DNS to propagate, then enable **Enforce HTTPS**.

## Local preview

Just open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

then visit http://localhost:8000
