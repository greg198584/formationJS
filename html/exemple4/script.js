
let data = {
    "users": [
        {
            "nom": "Dupont",
            "age": 25,
            "email": "dupont@gmail.com",
            "genre": "Homme",
            "pays": "France"
        },
        {
            "nom": "Martin",
            "age": 32,
            "email": "martin@hotmail.com",
            "genre": "Homme",
            "pays": "Canada"
        },
        {
            "nom": "Durand",
            "age": 16,
            "email": "durand@yahoo.com",
            "genre": "Femme",
            "pays": "Espagne"
        },
        {
            "nom": "Garcia",
            "age": 21,
            "email": "garcia@gmail.com",
            "genre": "Femme",
            "pays": "France"
        },
        {
            "nom": "Smith",
            "age": 28,
            "email": "smith@gmail.com",
            "genre": "Homme",
            "pays": "États-Unis"
        },
        {
            "nom": "Lee",
            "age": 23,
            "email": "lee@gmail.com",
            "genre": "Femme",
            "pays": "Corée du Sud"
        }
    ]
};

// Récupérer la table HTML
let table = document.getElementById("myTable");

// Ajouter les données du JSON dans le tableau HTML
for (let i = 0; i < data.users.length; i++) {
    let row = table.insertRow(); // Ajouter une nouvelle ligne
    let nomCell = row.insertCell(0); // Ajouter une cellule pour le nom
    let ageCell = row.insertCell(1); // Ajouter une cellule pour l'âge
    let emailCell = row.insertCell(2); // Ajouter une cellule pour l'email
    let genreCell = row.insertCell(3); // Ajouter une cellule pour le genre
    let paysCell = row.insertCell(4); // Ajouter une cellule pour le pays

    // Ajouter les données utilisateur dans chaque cellule correspondante
    nomCell.innerHTML = data.users[i].nom;
    ageCell.innerHTML = data.users[i].age;
    emailCell.innerHTML = data.users[i].email;
    genreCell.innerHTML = data.users[i].genre;
    paysCell.innerHTML = data.users[i].pays;
}

// Vérifier si l'utilisateur est majeur et mettre son nom en gras
function verifierMajeur(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; i < table.rows.length; i++) {
    let age = table.rows[i].cells[1].innerHTML; // Récupérer l'âge de l'utilisateur
    if (verifierMajeur(age)) { // Vérifier si l'utilisateur est majeur
        table.rows[i].cells[0].style.fontWeight = "bold"; // Mettre son nom en gras
    }
}

// Surligner les utilisateurs avec l'email gmail.com
for (let i = 0; i < table.rows.length; i++) {
    let email = table.rows[i].cells[2].innerHTML; // Récupérer l'email de l'utilisateur
    if (email.includes("gmail.com")) { // Vérifier si l'email contient "gmail.com"
        table.rows[i].style.backgroundColor = "yellow"; // Surligner la ligne en jaune
    }
}

// Mettre en évidence les utilisateurs masculins avec plus de 30 ans
for (let i = 0; i < table.rows.length; i++) {
    let age = table.rows[i].cells[1].innerHTML; // Récupérer l'âge de l'utilisateur
    let genre = table.rows[i].cells[3].innerHTML; // Récupérer le genre de l'utilisateur
    if (verifierMajeur(age) && age > 30 && genre === "Homme") { // Vérifier si l'utilisateur est majeur, a plus de 30 ans et est un homme
        table.rows[i].cells[0].style.color = "red"; // Mettre son nom en rouge
        table.rows[i].cells[0].style.backgroundColor = "lightgrey"; // Mettre l'arrière-plan en gris clair
     }
}

// Ajouter un bouton pour trier les utilisateurs par âge croissant ou décroissant

// Créer un bouton pour trier par ordre croissant
let buttonSortAsc = document.createElement("button");
buttonSortAsc.innerHTML = "Trier par âge (croissant)";
buttonSortAsc.addEventListener("click", function() {
    sortTable(1, true); // Appeler la fonction sortTable avec la colonne et l'ordre de tri
});

// Créer un bouton pour trier par ordre décroissant
let buttonSortDesc = document.createElement("button");
buttonSortDesc.innerHTML = "Trier par âge (décroissant)";
buttonSortDesc.addEventListener("click", function() {
    sortTable(1, false); // Appeler la fonction sortTable avec la colonne et l'ordre de tri
});

// Insérer les boutons dans le corps du document avant la table
document.body.insertBefore(buttonSortDesc, table);
document.body.insertBefore(buttonSortAsc, table);

// Fonction pour trier le tableau par colonne
function sortTable(column, ascending) {
    // Récupérer toutes les lignes de la table à partir de la deuxième ligne et les stocker dans un tableau
    let rows = Array.from(table.rows).slice(1);
    // Trier le tableau en utilisant la fonction de tri personnalisée
    rows.sort(function(row1, row2) {
        let value1 = row1.cells[column].innerHTML;
        let value2 = row2.cells[column].innerHTML;
        if (ascending) {
            return value1 - value2;
        } else {
            return value2 - value1;
        }
    });
    // Ajouter chaque ligne triée à la fin de la table
    for (let i = 0; i < rows.length; i++) {
        table.appendChild(rows[i]);
    }
}

