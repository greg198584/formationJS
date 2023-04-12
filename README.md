# Projet démonstration de formation JavaScript

Ce projet est le code de démonstration de ma formation JavaScript disponible sur ma chaîne YouTube. Le projet utilise Docker Compose avec Nginx et un volume pour le dossier HTML.

Le dossier HTML contient trois sous-dossiers, chacun contenant un fichier index.html :
- exemple1
- exemple2
- exemple3

## Exemple d'utilisation
Après avoir cloné le dépôt sur votre ordinateur, vous pouvez lancer le projet en utilisant la commande suivante :

```
docker-compose up
```

Vous pouvez ensuite accéder aux exemples en utilisant les URLs suivantes :
- http://localhost:8080/exemple1
- http://localhost:8080/exemple2
- http://localhost:8080/exemple3

# Les balises HTML

Les balises HTML sont les éléments de base de la structure d'une page Web. Elles permettent d'encadrer le contenu de la page, et d'indiquer sa signification pour les navigateurs et les moteurs de recherche. Voici quelques-unes des balises HTML les plus courantes :

## Balises de texte

| Balise           | Description                                                 | Exemple                                 |
|------------------|-------------------------------------------------------------|-----------------------------------------|
| `<h1>` à `<h6>`  | Balises de titre, utilisées pour les titres et sous-titres de la page. | `<h1>Titre principal</h1>`<br>`<h2>Sous-titre</h2>` |
| `<p>`            | Balise de paragraphe, utilisée pour le texte courant.       | `<p>Ce paragraphe contient du texte.</p>` |
| `<strong>`       | Balise pour mettre en gras du texte.                        | `<p>Le texte en <strong>gras</strong>.</p>` |
| `<em>`           | Balise pour mettre en italique du texte.                    | `<p>Le texte en <em>italique</em>.</p>` |


## Balises d'images et de multimédia

| Balise     | Description                            | Exemple                                                      |
|------------|----------------------------------------|--------------------------------------------------------------|
| `<img>`    | Balise pour afficher une image.        | `<img src="image.jpg" alt="Image">`                      |
| `<video>`  | Balise pour afficher une vidéo.        | `<video src="video.mp4" controls></video>`                    |
| `<audio>`  | Balise pour afficher un fichier audio. | `<audio src="audio.mp3" controls></audio>`                    |


## Balises de liens

| Balise | Description                                                                                               | Exemple                                               |
|--------|-----------------------------------------------------------------------------------------------------------|-------------------------------------------------------|
| `<a>`  | Balise pour créer un lien hypertexte vers une autre page Web ou un autre emplacement de la même page. | `<a href="https://www.example.com/">Lien vers Example</a>` |


## Balises de liste

| Balise | Description                                            | Exemple                                              |
|--------|--------------------------------------------------------|------------------------------------------------------|
| `<ul>` | Balise pour créer une liste à puces.                   | `<ul><li>Item 1</li><li>Item 2</li></ul>`             |
| `<ol>` | Balise pour créer une liste numérotée.                 | `<ol><li>Item 1</li><li>Item 2</li></ol>`             |
| `<li>` | Balise pour chaque élément de la liste (dans `<ul>` ou `<ol>`). | `<ul><li>Item 1</li><li>Item 2</li></ul>`             |


## Balises de tableaux

| Balise   | Description                                  | Exemple                                                  |
|----------|----------------------------------------------|----------------------------------------------------------|
| `<table>` | Balise pour créer un tableau.                 | `<table><tr><th>Header 1</th><th>Header 2</th></tr>`<br>`<tr><td>Donnée 1.1</td><td>Donnée 1.2</td></tr>`<br>`<tr><td>Donnée 2.1</td><td>Donnée 2.2</td></tr></table>` |
| `<th>`   | Balise pour définir une cellule d'en-tête.     | `<th>Header 1</th>`                                      |
| `<td>`   | Balise pour définir une cellule de données.    | `<td>Donnée 1.1</td>`                                    |

## Exemples d'utilisation

### Exemple de page Web simple

Voici un exemple de page Web simple qui utilise plusieurs des balises HTML présentées précédemment :

```html
<!DOCTYPE html>
<html>
<head>
	<title>Page d'exemple</title>
</head>
<body>
	<h1>Titre principal</h1>
	<p>Ceci est un exemple de page Web.</p>
	<h2>Sous-titre</h2>
	<p>Voici une image:</p>
	<img src="image.png" alt="Image">
	<p>Vous pouvez cliquer sur ce <a href="https://www.example.com/">lien</a> pour visiter Example.</p>
	<p>Voici une liste à puces :</p>
	<ul>
		<li>Item 1</li>
		<li>Item 2</li>
	</ul>
	<p>Et voici une liste numérotée :</p>
	<ol>
		<li>Item 1</li>
		<li>Item 2</li>
	</ol>
</body>
</html>
```

### Exemple de tableau

Voici un exemple de tableau HTML qui utilise les balises table, th et td :

```html
<table>
	<tr>
		<th>Produit</th>
		<th>Prix</th>
		<th>Quantité</th>
	</tr>
	<tr>
		<td>Pommes</td>
		<td>2,50 €</td>
		<td>5</td>
	</tr>
	<tr>
		<td>Bananes</td>
		<td>1,50 €</td>
		<td>3</td>
	</tr>
</table>
```

## Auteur
Greg lafitte

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.
