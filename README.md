# Newida

Site vitrine statique prêt pour GitHub Pages.

## Développement local

```bash
npm ci
npm run dev
```

## Publication

1. Créer un dépôt GitHub et y pousser la branche `main`.
2. Dans **Settings → Pages → Build and deployment**, sélectionner **GitHub Actions**.
3. Chaque nouveau push sur `main` compile et publie automatiquement le site.

La configuration prend en charge aussi bien une adresse de projet
(`https://utilisateur.github.io/depot/`) qu'un domaine personnalisé.
