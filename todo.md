# TODO

## 2026-06-25 — Migration Cloudinary → Cloudflare R2

### Code (fait)
- [x] Remplacer `lib/cloudinary.ts` par `lib/r2.ts`
- [x] Mettre à jour `app/page.tsx` pour utiliser R2
- [x] Mettre à jour `next.config.ts` (domaine `media.karl-production.fr`)
- [x] Mettre à jour `.env.local`

### Cloudflare (à faire)
- [ ] Créer un bucket R2 dans le dashboard Cloudflare (Settings → R2)
- [ ] Activer l'accès public sur le bucket
- [ ] Connecter le domaine personnalisé `media.karl-production.fr` au bucket
- [ ] Uploader l'image `kvernufoss.jpg` dans le bucket
- [ ] Tester que `https://media.karl-production.fr/kvernufoss.jpg` est accessible
