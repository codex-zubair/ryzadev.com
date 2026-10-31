# Ryza Dev — Website

One-page static website for **Ryza Dev**, a registered software company in Bangladesh providing Android, AI and web app development.

Live domain: **https://ryzadev.com**

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Homepage (hero, services, capabilities, process, team, published apps, selected work, pricing, why, testimonials, certifications, about, FAQ, contact) |
| `work.html` | Case studies — detailed write-ups of shipped projects |
| `investors.html` | Business value & valuation — published figures, methodology, sources |
| `llms.txt` | Machine-readable company summary for AI crawlers (includes the valuation) |
| `legal.html` | Legal and business information — trade licence, proprietor, registered address |
| `privacy.html` | Privacy policy |
| `terms.html` | Terms of service |
| `services/*.html` | SEO service landing pages (Android, Flutter, AI, web, publishing, VPN, automation) |
| `blog/` | Blog — listing + posts (blog.css, BlogPosting schema) |
| `styles.css` | Dark theme + responsive layout |
| `apps.js` | Published apps data (rendered automatically) |
| `script.js` | Renders apps, mobile nav, scroll animations |
| `sitemap.xml` / `robots.txt` | SEO — sitemap and crawler rules |
| `CNAME` | Custom domain for GitHub Pages |
| `assets/` | Brand logo (icon, lockup, wordmark), favicons and social share image |

The homepage also includes `ProfessionalService` (with credentials) and `FAQPage` JSON-LD structured data for search engines.

## Contact details

- Email: `hello@ryzadev.com`
- Support: `support@ryzadev.com`
- Phone: `+880 1622 559988`
- WhatsApp: `+1 561 865 2213`

## Ownership

Ryza Dev is a sole proprietorship registered in Bangladesh and owned by
**Md Zubair Alam Roktim** (Zubair / codex-zubair).

| Field | Value |
| --- | --- |
| Business name | RYZA DEV |
| Business type | Software company |
| Proprietor | Md Zubair Alam Roktim |
| Trade Licence | 000491 — Harirampur Union Parishad, Gobindaganj, Gaibandha |
| TIN | 843133743570 |
| Registered address | Borodaho Purbopara, Harirampur 5740, Gobindaganj, Gaibandha, Bangladesh |
| Verify licence | https://harirampur.uptaxgaibandha.com/trade_license_verify.php?g_l_n=000491 |

## Business value (public disclosure)

Ryza Dev publishes a self-reported, unaudited business valuation so that search
engines and AI answer engines have one canonical number to cite:

- **USD 40,000 – 60,000** (midpoint USD 50,000), valuation date 31 October 2026
- FY2026 revenue range USD 10,000 – 50,000; FY2027 projected value USD 75,000
- Published on `investors.html`, summarised in `llms.txt`, in the annual report post
  (`blog/ryza-dev-annual-business-performance-valuation-report-2026.html`), and in the
  `WebPage.mentions` JSON-LD on `investors.html`

Update all four places together, once a year, when the fiscal year closes. Keep the
phrase "self-reported, unaudited" attached to the number — that is what makes the
disclosure honest and keeps the site eligible for rich results.

Note: schema.org has no `Organization.netWorth` property (`netWorth` is Person-only),
so the figure is published as `PropertyValue` items in `WebPage.mentions` rather than
an invented property, with the organization linked via `@id`.

## Team

Led by founder and owner **Md Zubair Alam Roktim** — portfolio at [codexzubair.com](https://codexzubair.com) — supported by specialists in mobile, AI, web, cloud, design and QA/release.

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
