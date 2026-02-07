# 🎨 Portfolio Technique - Lagarde Tymothé

Ce dépôt contient le code source de mon portfolio technique personnel (2026), conçu pour présenter mes compétences en développement logiciel (C#, Unity, Python) et web.

🔗 **Live Demo** : [https://wuy-bots.github.io/portefolio/](https://wuy-bots.github.io/portefolio/)

---

## 🛠️ Stack Technique

Ce projet est construit sans framework lourd pour garantir des performances optimales et démontrer une maîtrise des fondamentaux du web :

- **HTML5** : Structure sémantique et accessibilité.
- **CSS3 (Vanilla)** :
  - Design System "Glassmorphism" personnalisé (flous, transparences, dégradés).
  - Variables CSS (`:root`) pour la gestion des thèmes.
  - Animations `keyframes` et transitions fluides (cubic-bezier).
  - Responsive Design (Mobile First & Desktop).
- **JavaScript (ES6+)** :
  - Système d'accordéon pour la timeline des projets.
  - Navigation "Sticky" intelligente (animations au scroll).
  - Gestion du presse-papier pour la page Contact.
  - Aucune dépendance externe (hors FontAwesome).
- **FontAwesome** : Icônes vectorielles.
- **Google Fonts** : Typographie "Inter" pour un rendu moderne et lisible.

---

## 📂 Structure du Projet

```bash
/
├── index.html          # Page d'accueil (Hero, Motivation, Skills)
├── projets.html        # Timeline interactive des projets détaillés
├── parcours.html       # Timeline verticale du parcours pro/études
├── contact.html        # Carte de contact unifiée avec outils de copie
├── css/
│   └── style.css       # Feuille de style unique et centralisée
├── js/
│   └── script.js       # Logique front-end (DOM, Events, Animations)
└── assets/
    └── images/         # Captures d'écran et assets graphiques
        ├── ProjetUnity/
        ├── BipBoup/
        └── ...
```

---

## ✨ Fonctionnalités Clés

### 1. Navigation Glassmorphic
Une barre de navigation flottante qui change d'aspect au défilement (réduction de taille, flou accru) pour maximiser l'espace de lecture tout en restant accessible.

### 2. Timeline Interactive (Page Projets)
- **Mode Compact** : Vue d'ensemble rapide (Date, Titre, Icône).
- **Mode Détaillé** : Au clic, la carte s'étend pour révéler :
  - Une description complète.
  - La stack technique détaillée.
  - Une galerie d'images avec défilement horizontal.
  - Des liens vers les dépôts GitHub.

### 3. Système de Copie (Page Contact)
Des boutons intuitifs permettent de copier l'email ou le téléphone en un clic, avec un feedback visuel immédiat ("Copié !").

---

## 🚀 Installation & Développement

1. **Cloner le projet**
   ```bash
   git clone https://github.com/Wuy-Bots/portefolio.git
   cd portefolio
   ```

2. **Lancer localement**
   Ouvrez simplement `index.html` dans votre navigateur ou utilisez une extension comme "Live Server" sur VS Code.

---

## 🎨 Choix de Design

- **Couleurs** : Palette "Dark Violet" (`#1a0f2e`) inspirée des IDE modernes et de l'univers Cyberpunk/Tech.
- **Typographie** : *Inter* pour sa lisibilité sur écran et son aspect neutre et professionnel.
- **Effets** : Usage intensif de `backdrop-filter: blur()` pour créer de la profondeur sans alourdir l'interface.

---

## 👤 Auteur

**Lagarde Tymothé** - Développeur Logiciel & Jeux
- 📧 [lagarde.tymothe@gmail.com](mailto:lagarde.tymothe@gmail.com)
- 🐙 [GitHub](https://github.com/Wuy-Bots)
- 💼 [LinkedIn](https://linkedin.com/in/tymothé-lagarde-95a6523ab/)

---
*© 2026 Lagarde Tymothé - Code source libre de droits pour inspiration.*
