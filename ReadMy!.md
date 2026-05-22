# 💻 CompMedic — Premium PC Repair HTML Template

Thank you for purchasing **CompMedic**! This is a clean, lightweight, responsive, and conversion-optimized 3-page HTML5/CSS3/JS template designed specifically for local computer repair businesses, IT support providers, and tech professionals.

This project is fully structured, thoroughly tested for high performance, and contains specific behavioral fixes for mobile WebKit engines (iOS Safari).

---

## 📂 Project Structure

Inside this package, you will find the following core files:
* `index.html` — The homepage featuring transformation hooks, step-by-step working logic, and client reviews.
* `services.html` — Clean pricing sheets divided by hardware and software maintenance categories.
* `contacts.html` — Dedicated placement for operating hours, maps, and an on-site scheduling form.
* `style.css` — Standardized layout style sheets built using modern CSS Variables (`:root`).
* `script.js` — Core functional behaviors (Mobile burger layout, smooth navigation scrolling, input processing, and the direct-dial modal box).

---

## 🚀 Quick Start & Customization

The code is clean, fully documented, and ready to edit. You don't need compilation tools like npm, Webpack, or Tailwind compilers.

### 1. Changing the Branding & Colors
To match your client's brand identity, open `style.css` and adjust the custom properties under the `:root` pseudo-class:
```css
:root {
    --primary: #2563eb;       /* Main accent brand color (Buttons, active states) */
    --primary-hover: #1d4ed8; /* Color when hovering over buttons */
    --dark: #0f172a;          /* Headers and dark backgrounds */
    --text: #334155;          /* Main body text color */
}

2. Updating Contact Numbers & Action Targets
  To ensure that mobile devices trigger the system dialer correctly upon a touch click, search for the global dummy phone string tel:+15550192834 across the layout pages and change it to your client's active direct lane.

  Example: <a href="tel:+1XXXXXXXXXX">+1 (XXX) XXX-XXXX</a>

3. Forms Setup
  The current forms contain static frontend processing powered by native JavaScript. They check form validity and execute an instant reset loop (form.reset();) to clear inputs after successful validation.

  To plug this into a production database, swap out the static <form> markers to reference your custom API endpoint or integrate microservices like Formspree or Netlify Forms:
 <form action="https://formspree.io/f/your_id" method="POST">

🛡️ Architectural & Mobile Upgrades Included
  his template contains premium code adjustments that make it stand out from generic templates:

  Prevented Screen Distortion on iOS: Input text forms are structurally set to 16px on viewport reductions to disable native Safari browser auto-zoom overlays.

  No Framework Bloat: Designed via raw CSS layout containers. Keeps network load low, bringing optimal server evaluation speeds.

  Dynamic Interactive Call Box: Includes a conversion-focused JavaScript modal popup that locks background navigation scroll while active.

📄 License & Usage
  Purchasing this product gives you a Commercial License. You are allowed to:

  Use this template to build a client's website.

  Modify and customize the code for personal or commercial projects.

  Note: You are strictly prohibited from reselling or distributing this source template bundle as a standalone theme or digital layout product on Gumroad, ThemeForest, or any other digital marketplace.

  Need support or have questions? Contact the developer via the email listed on your Gumroad receipt.