---
# ---------------------------------------------------------------
#  EN-TÊTE DE L'ARTICLE (entre les deux lignes de tirets)
#  Les lignes qui commencent par # sont des commentaires : elles
#  ne s'affichent pas sur le site.
# ---------------------------------------------------------------

# Titre de l'article (obligatoire)
title: "Article d'exemple : tout ce que vous pouvez faire dans un article"

# Date de publication au format année-mois-jour (obligatoire)
date: 2026-10-02

# Image de couverture : le nom d'un fichier rangé dans assets/images
image: exemple-couverture-palais.jpg
image_legende: "La façade d'un palais de justice (illustration d'exemple)."
image_credit: "J'ai crée un média"

# Résumé de quelques lignes, affiché sous le titre et dans les listes
description: "Cet article sert de modèle : il montre le titre, le résumé, l'image de couverture, la mise en forme du texte et l'insertion d'une ou plusieurs photos."

# Facultatif : la rubrique (petit mot en couleur) et l'auteur
rubrique: Mode d'emploi
auteur: La rédaction
---

Ce premier paragraphe commence automatiquement par une grande lettrine. Pour écrire un article, il suffit de taper du texte normalement : laissez **une ligne vide** entre deux paragraphes. Vous pouvez mettre des mots en **gras** avec deux astérisques, en *italique* avec une seule, et ajouter [un lien vers un autre site](https://www.legifrance.gouv.fr).

## Un intertitre

Un intertitre commence par deux dièses (`##`) suivis d'un espace. Il permet de découper un long article en parties.

### Une question d'entretien commence par trois dièses ?

Avec trois dièses (`###`), on obtient une ligne en gras soulignée d'un trait bordeaux sur la gauche : c'est le style idéal pour les questions d'une interview. La réponse s'écrit ensuite comme un paragraphe ordinaire.

## Une photo dans le texte

Pour insérer une photo, déposez-la d'abord dans le dossier `assets/images`, puis recopiez la ligne ci-dessous en changeant le nom du fichier, la légende et le crédit :

{% include photo.html fichier="exemple-balance.jpg" legende="La balance, symbole de la justice." credit="J'ai crée un média" %}

La légende et le crédit sont facultatifs. Une photo peut aussi être affichée **plus large** que le texte en ajoutant `taille="large"` :

{% include photo.html fichier="exemple-bibliotheque.jpg" legende="Une bibliothèque de droit (illustration d'exemple)." taille="large" %}

## Plusieurs photos côte à côte

Pour en afficher deux ou trois sur une même ligne, on sépare les noms des fichiers par des virgules :

{% include galerie.html fichiers="exemple-balance.jpg, exemple-plume.jpg" legende="Deux photos côte à côte." %}

{% include galerie.html fichiers="exemple-plume.jpg, exemple-balance.jpg, exemple-bibliotheque.jpg" legende="Trois photos côte à côte : sur téléphone, elles s'affichent les unes sous les autres." %}

## Citations et listes

Une citation mise en valeur commence par le signe `>` :

> « Une citation importante, mise en valeur au milieu de l'article. »

Et une liste commence par des tirets :

- un premier point ;
- un deuxième point ;
- un dernier point.

Pour une liste numérotée, on écrit `1.`, `2.`, `3.` en début de ligne :

1. Déposer les photos dans `assets/images`.
2. Créer le fichier de l'article dans `_posts`.
3. Enregistrer : le site se met à jour en une ou deux minutes.

---

Une ligne composée de trois tirets (`---`) trace un séparateur, comme celui ci-dessus. Tout le reste est expliqué pas à pas dans le fichier README du projet.
