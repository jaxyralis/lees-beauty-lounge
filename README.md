# Lee's Beauty Lounge

A beauty salon website for Lee's Beauty Lounge in Atteridgeville, offering wig installation, customisation, treatments, and make-up services.

## Tech Stack

- React + TypeScript
- React Router (multi-page navigation)
- Vite
- Tailwind CSS
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The built files are output to the `dist/` folder.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages whenever you push to the `main` branch.

### Setup steps

1. Push this project to a GitHub repository.
2. Go to **Settings > Pages** on your GitHub repo.
3. Under **Source**, select **GitHub Actions**.
4. Push to `main` — the workflow will build and deploy automatically.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Manual hosting

The `dist/` folder after building contains static files that can be hosted on any static host (Netlify, Vercel, GitHub Pages, etc.). Just upload the contents of `dist/`.

## Contact

- Phone / WhatsApp: 067 000 9252
- Instagram: @lee'sbeautylounge
- Address: 58 3rd Avenue Extension 7, Atteridgeville, 0008
