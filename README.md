# Dee’s Online Shopping Mall

A sleek, responsive, static storefront for **Dee’s Online Shopping Mall**.  
Live preview will be auto-deployed via **GitHub Pages**.

## ✨ Features
- Responsive catalog with search, category & price filters, and sort
- Product quick view modal
- Cart with localStorage persistence
- Clean dark theme with gradient accents
- Easy to edit `products.json` (₦ pricing), simple SVG logo in `assets/`

## 🚀 Quick Start (Local)
```bash
# Optionally serve with Python for correct CORS on fetch
python -m http.server 8080
# then visit http://localhost:8080
```

## ☁️ Deploy to GitHub Pages (Automated)
> This repo includes a GitHub Actions workflow (`.github/workflows/pages.yml`) that deploys automatically on every push to **main**.

### 1) Create the repo on GitHub
- Create an empty repository (e.g., `dees-store`) **without** adding a README.

### 2) Push this project
```bash
# in the folder with these files
git init
git branch -M main
git add .
git commit -m "Initial commit for Dee’s Online Shopping Mall"
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

### 3) Enable Pages (first time only)
- Go to **Settings → Pages** in the GitHub repo
- Set **Source** to “**GitHub Actions**” (the workflow handles the rest)
- After Actions finishes, your site will be available at:
  `https://<YOUR_USERNAME>.github.io/<YOUR_REPO>/`

## 🛍️ Configure Your Store
- **Products:** Edit `products.json` (id, name, price, category, rating, image URL, badges, description)
- **Branding:** Replace `assets/logo.svg` and `favicon.svg` and edit text in `index.html`
- **Contact Info:** Update the Contact section in `index.html`

## 🔐 (Optional) Custom Domain
- Add your domain’s CNAME record to point at `username.github.io`
- Create a `CNAME` file in the repo root containing your domain, e.g.:
```
shop.yourdomain.com
```

## 💳 (Later) Real Checkout
- Integrate Paystack/Flutterwave by replacing the `checkout()` stub in `app.js`
- Add serverless functions or external order forms as needed

## 🧾 License
MIT — see `LICENSE`.
