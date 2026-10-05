# J'ai crée un média

Site du média *J'ai crée un média*, consacré à l'actualité juridique et aux entretiens avec les figures du droit.

Le site est construit avec **Jekyll** et publié gratuitement par **GitHub Pages**. Vous n'avez **rien à installer** : tout se fait depuis le site web de GitHub. Chaque article est un simple fichier texte, et le site se met à jour tout seul.

---

## Sommaire

1. [Mettre le site en ligne (à faire une seule fois)](#1-mettre-le-site-en-ligne-à-faire-une-seule-fois)
2. [Ajouter des photos](#2-ajouter-des-photos)
3. [Écrire un nouvel article](#3-écrire-un-nouvel-article)
4. [Mettre en forme le texte](#4-mettre-en-forme-le-texte)
5. [Insérer des photos dans un article](#5-insérer-des-photos-dans-un-article)
6. [Modifier ou supprimer un article](#6-modifier-ou-supprimer-un-article)
7. [En cas de problème](#7-en-cas-de-problème)
8. [Pour aller plus loin](#8-pour-aller-plus-loin)

---

## 1. Mettre le site en ligne (à faire une seule fois)

1. Ouvrez le dépôt sur GitHub, puis cliquez sur l'onglet **Settings** (Paramètres), en haut à droite.
2. Dans le menu de gauche, cliquez sur **Pages**.
3. Sous **Build and deployment** :
   - **Source** : choisissez **Deploy from a branch** ;
   - **Branch** : choisissez **main** et le dossier **/ (root)**, puis cliquez sur **Save**.
4. Patientez une ou deux minutes, puis rechargez la page : l'adresse du site s'affiche en haut (par exemple `https://trip0lit.github.io/test/`).

> **Bon à savoir :** le site publié est celui de la branche **main**. Faites toujours vos modifications sur cette branche (c'est celle qui est affichée par défaut sur GitHub).

---

## 2. Ajouter des photos

Toutes les photos sont rangées dans le dossier **`assets/images`**.

1. Sur la page d'accueil du dépôt, cliquez sur le dossier **`assets`**, puis sur **`images`**.
2. En haut à droite, cliquez sur **Add file** → **Upload files**.
3. Faites glisser vos photos dans la fenêtre (ou cliquez sur **choose your files**).
4. En bas de la page, cliquez sur le bouton vert **Commit changes**.

C'est tout : les photos sont disponibles pour vos articles.

**Conseils pour les noms de fichiers** (très important) :

- pas d'espace, pas d'accent, pas d'apostrophe : écrivez `palais-de-justice.jpg` et non `Palais de Justice.jpg` ;
- les majuscules comptent : `photo.JPG` et `photo.jpg` sont deux noms différents. Le plus simple est de tout écrire en minuscules ;
- privilégiez des photos de moins de 1 Mo (un format paysage d'environ 1600 pixels de large suffit largement), pour que le site reste rapide.

> Pour renommer une photo déjà envoyée, il est plus simple de la renommer sur votre ordinateur et de l'envoyer à nouveau.

---

## 3. Écrire un nouvel article

### Étape 1 : créer le fichier

1. Sur la page d'accueil du dépôt, cliquez sur le dossier **`_posts`**.
2. Cliquez sur **Add file** → **Create new file**.
3. Dans la case du nom de fichier, tapez un nom de la forme :

   ```
   AAAA-MM-JJ-titre-court.md
   ```

   Par exemple : `2026-10-15-reforme-procedure-penale.md`

   - la date au début est **obligatoire** (année-mois-jour) ;
   - le nom se termine **obligatoirement** par `.md` ;
   - même règle que pour les photos : minuscules, tirets, ni espace ni accent. Ce titre court sert à fabriquer l'adresse de l'article.

### Étape 2 : copier le modèle

Copiez-collez le modèle ci-dessous dans la grande zone de texte, puis remplacez les textes par les vôtres :

```markdown
---
title: "Le titre de mon article"
date: 2026-10-15
image: ma-photo-de-couverture.jpg
description: "Un résumé de deux ou trois lignes, affiché sous le titre et dans la liste des articles."
rubrique: Droit pénal
auteur: Prénom Nom
---

Le premier paragraphe de l'article.

Le deuxième paragraphe, séparé du premier par une ligne vide.
```

La partie entre les deux lignes `---` s'appelle l'**en-tête**. Voici à quoi sert chaque ligne :

| Ligne | Obligatoire ? | À quoi elle sert |
|---|---|---|
| `title` | oui | Le titre de l'article. Gardez les guillemets. |
| `date` | oui | La date de publication, au format `AAAA-MM-JJ`. |
| `image` | non | Le **nom** de la photo de couverture, déposée au préalable dans `assets/images`. Sans image, de grandes initiales s'affichent à la place. |
| `description` | conseillé | Le court résumé. Gardez les guillemets. |
| `rubrique` | non | Le petit mot en couleur au-dessus du titre (ex. `Droit pénal`). |
| `auteur` | non | Le nom de l'auteur ou de l'autrice. |
| `image_legende` | non | Une légende sous la photo de couverture. |
| `image_credit` | non | Le nom du photographe, affiché après « © ». |

**Pour un entretien**, écrivez `rubrique: Entretien` : l'article apparaîtra aussi dans la section « Les entretiens » de la page d'accueil. Vous pouvez ajouter ces lignes facultatives :

```yaml
personne: Prénom Nom
fonction: Avocate au barreau de Paris
initiales: PN
bio: "**Prénom Nom** est avocate au barreau de Paris. Courte biographie affichée à la fin de l'entretien."
```

> **Attention aux guillemets :** si votre titre ou votre résumé contient lui-même des guillemets droits `"`, remplacez-les par des guillemets français `« »`.

### Étape 3 : publier

Cliquez sur le bouton vert **Commit changes…** en haut à droite, puis à nouveau sur **Commit changes** dans la fenêtre qui s'ouvre.

Au bout d'une à deux minutes, l'article apparaît :

- **à la une** sur la page d'accueil (c'est toujours l'article le plus récent) ;
- dans la page **Articles**, qui liste tout du plus récent au plus ancien ;
- sur sa propre page.

> **Un article daté dans le futur n'est pas publié.** Il apparaîtra lorsque vous modifierez le site après cette date. Pratique pour préparer des articles à l'avance, mais vérifiez la date si un article « ne s'affiche pas ».

---

## 4. Mettre en forme le texte

Le texte s'écrit en **Markdown**, une façon très simple de mettre en forme avec quelques symboles. L'article **`_posts/2026-10-02-article-exemple.md`** montre tout ce qui est possible : ouvrez-le pour vous en inspirer.

| Vous écrivez… | Vous obtenez… |
|---|---|
| Une ligne vide entre deux blocs de texte | Deux paragraphes |
| `**mots importants**` | **mots importants** (gras) |
| `*une nuance*` | *une nuance* (italique) |
| `[Légifrance](https://www.legifrance.gouv.fr)` | Un lien cliquable |
| `## Mon intertitre` | Un intertitre |
| `### Ma question ?` | Une question d'entretien (en italique rose) |
| `> « Une phrase forte »` | Une citation mise en valeur |
| `- un point` (une ligne par point) | Une liste à puces |
| `1. une étape` | Une liste numérotée |
| `---` (seul sur sa ligne, avec une ligne vide avant) | Un trait de séparation |

Le tout premier paragraphe commence automatiquement par une grande lettrine.

---

## 5. Insérer des photos dans un article

Déposez d'abord vos photos dans `assets/images` (voir [partie 2](#2-ajouter-des-photos)), puis, dans le texte de l'article, à l'endroit voulu, **sur une ligne seule**, entourée de lignes vides :

**Une photo :**

```liquid
{% include photo.html fichier="ma-photo.jpg" legende="Le texte sous la photo." credit="Nom du photographe" %}
```

- `legende` et `credit` sont facultatifs : vous pouvez les retirer ;
- ajoutez `taille="large"` pour une photo plus large que la colonne de texte :

```liquid
{% include photo.html fichier="ma-photo.jpg" legende="Une grande photo." taille="large" %}
```

**Plusieurs photos côte à côte** (deux ou trois par ligne), en séparant les noms par des virgules :

```liquid
{% include galerie.html fichiers="photo-1.jpg, photo-2.jpg, photo-3.jpg" legende="Le texte sous les photos." %}
```

Sur téléphone, les photos d'une galerie s'affichent automatiquement les unes sous les autres.

> Recopiez ces lignes **exactement** (accolades `{% %}`, guillemets droits `"`) en ne changeant que ce qui se trouve entre les guillemets.

---

## 6. Modifier ou supprimer un article

- **Modifier** : ouvrez le fichier dans `_posts`, cliquez sur l'icône **crayon** ✏️ en haut à droite du texte, faites vos changements puis **Commit changes**.
- **Supprimer** : ouvrez le fichier, cliquez sur le bouton **…** en haut à droite, puis **Delete file**, et validez avec **Commit changes**.

Les deux articles fournis sont des **exemples** (l'entretien d'Hélène Marchetti est fictif) : supprimez-les quand vous aurez publié vos propres articles. Les photos dont le nom commence par `exemple-` dans `assets/images` peuvent aussi être supprimées, à condition qu'aucun article ne les utilise encore.

**Autres réglages modifiables sans toucher au code**, dans le fichier **`_config.yml`** à la racine du dépôt (respectez simplement l'indentation, c'est-à-dire les espaces en début de ligne, et les guillemets) :

| Réglage | Ce qu'il change |
|---|---|
| `title`, `tagline`, `description` | Le nom du média, le slogan sous le grand titre, la description. |
| `logo` | Le carré en haut à gauche : le nom d'une image de `assets/images` (carrée de préférence). Laissé vide, il affiche les `initiales`. |
| `initiales` | Les lettres affichées dans le logo et sur la carte de presse. |
| `photos_collage` | Les 4 photos décoratives de la page d'accueil (le timbre, les deux photos autour du titre « Entretiens », la photo de la carte de presse), dans cet ordre. |
| `manifeste` | Le grand texte de présentation : une partie droite, une partie en italique, et un mot entouré de pointillés. |
| `valeurs` | Les quatre valeurs affichées sous la présentation. |
| `rubriques` | Les rubriques affichées sur la page d'accueil. |

---

## 7. En cas de problème

**Le site ne s'est pas mis à jour.**
Cliquez sur l'onglet **Actions** du dépôt. La dernière ligne indique l'état de la publication :

- rond jaune : en cours, patientez ;
- coche verte ✅ : c'est publié, rechargez la page du site (au besoin en vidant le cache : `Ctrl` + `F5`, ou `Cmd` + `Maj` + `R` sur Mac) ;
- croix rouge ❌ : une erreur empêche la publication. Cliquez dessus pour lire le message. Le plus souvent, il s'agit d'un guillemet oublié dans l'en-tête de l'article, ou d'une ligne `{% include … %}` mal recopiée. Corrigez le dernier fichier modifié : le site précédent reste en ligne en attendant.

**Mon article n'apparaît pas.**
Vérifiez que le fichier est bien dans `_posts`, que son nom commence par la date (`AAAA-MM-JJ-`) et se termine par `.md`, et que la date n'est pas dans le futur.

**Ma photo ne s'affiche pas.**
Vérifiez que le nom écrit dans l'article est **exactement** celui du fichier dans `assets/images` (minuscules/majuscules, extension `.jpg`, `.jpeg` ou `.png`).

---

## 8. Pour aller plus loin

Cette partie s'adresse à la personne qui maintient le code.

**Organisation des fichiers**

```
_config.yml          Réglages et textes du site
_posts/              Les articles (un fichier Markdown par article)
_layouts/            Gabarits : default.html (cadre commun), article.html (page d'article)
_includes/           Morceaux réutilisables : en-tête, pied de page, photo, galerie…
index.html           Page d'accueil
articles/index.html  Liste de tous les articles
assets/styles.css    Le design
assets/fonts/        Les polices (Instrument Serif et Archivo, licence libre SIL OFL)
assets/main.js       Date du jour, formulaire de la lettre
assets/images/       Toutes les images
```

**Nom de domaine personnalisé** : dans `_config.yml`, remplacez `url` par votre adresse (ex. `https://www.monmedia.fr`) et mettez `baseurl: ""`, puis renseignez le domaine dans **Settings → Pages → Custom domain**.

**Prévisualiser sur son ordinateur** (facultatif, nécessite Ruby) :

```bash
bundle install
bundle exec jekyll serve
```

Le site est alors visible sur <http://localhost:4000/test/>.

**Lettre d'information** : le formulaire affiche un message de confirmation mais n'enregistre encore aucune adresse. Il faut le relier à un service d'e-mailing (Brevo, Mailchimp…) en remplaçant le formulaire de `index.html` par celui fourni par le service.
