# Portfolio — Tymothé Lagarde

Portfolio personnel de développement logiciel et jeux vidéo, réalisé en HTML, CSS et JavaScript sans framework ni étape de compilation.

## Direction visuelle

Une présentation discrète sur fond presque noir (`#08090b`), avec de légers accents lavande, des titres de taille modérée et une typographie système. Les textes décrivent les projets et la démarche d’apprentissage simplement. Les captures des projets constituent les principaux visuels.

## Pages

- `index.html` : présentation, sélection de projets et démarche personnelle.
- `projets.html` : quatre réalisations avec captures, descriptions techniques et galeries.
- `parcours.html` : expériences, formation et téléchargement du CV.
- `contact.html` : e-mail, téléphone, réseaux et copie des coordonnées.

La feuille de style commune est dans `css/style.css`, les interactions dans `js/script.js`. Les images et le CV sont conservés dans `assets/`.

## Utilisation locale

Ouvrir `index.html` dans un navigateur ou servir le dossier avec un serveur HTTP local, par exemple l’extension Live Server de VS Code. La copie des coordonnées utilise le presse-papier du navigateur ; elle nécessite un contexte sécurisé (HTTPS ou localhost) et affiche un message explicite si elle est indisponible.

## Accessibilité et interactions

- Navigation textuelle sur ordinateur et mobile, page active identifiée.
- Lien d’accès direct au contenu et indicateurs de focus au clavier.
- Un seul bouton « Voir les détails » sous chaque résumé, utilisable au clavier, avec état `aria-expanded` et panneau associé. Sans JavaScript, les descriptions restent visibles.
- Liens directs vers chaque projet et ouverture des détails correspondants avec JavaScript.
- Galeries horizontales accessibles au clavier, sans recadrage des captures techniques.
- Retour de copie annoncé par une zone de statut.
- Respect de la préférence de réduction des animations.

## Auteur

Tymothé Lagarde — [GitHub](https://github.com/Wuy-Bots)
