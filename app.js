var films = [{
        name: "Deadpool",
        years: 2016,
        authors: "Tim Miller"
    },
    {
        name: "Spiderman",
        years: 2002,
        authors: "Sam Raimi"
    },
    {
        name: "Scream",
        years: 1996,
        authors: "Wes Craven"
    },
    {
        name: "It: chapter 1",
        years: 2019,
        authors: "Andy Muschietti"
    }
];

function loadTabledata(items) {
    let table1 = document.getElementById("tableau");
    table1.innerHTML = "";
    items.forEach(item => {
        let row = table1.insertRow();
        let name = row.insertCell(0);
        name.innerHTML = item.name;
        let years = row.insertCell(1);
        years.innerHTML = item.years;
        let authors = row.insertCell(2);
        authors.innerHTML = item.authors;
        let btnCell = row.insertCell(3);
        let btn = document.createElement("button");
        btn.type = "button";
        btn.innerHTML = "supprimer";
        btn.addEventListener("click", function () {
            console.log('supp');
            deleteRow(btn);
        });

        btnCell.append(btn);
    });
}

loadTabledata(films);

let formulaire = document.getElementById('formulaire');
var btnAjouter = document.getElementById("boutonajouter");
var popupMessage = document.getElementById('message');

btnAjouter.addEventListener('click', function () {

    var inputFilms = [{
        titre: document.getElementById('inputtitre').value,
        annee: document.getElementById('inputannee').value,
        auteur: document.getElementById('inputauteur').value
    }];

    // Manque test sur l'année
    let date = new Date().getFullYear();

    if (inputFilms[0].titre.length <= 2 && inputFilms[0].annee > 1900 && inputFilms[0].annee < date && inputFilms[0].auteur.length <= 5) {
        popupMessage.classList.add('messErreur')
        popupMessage.innerHTML = 'Erreur dans le formulaire';
    } else {
        films.push(inputFilms);
        loadTabledata(films);
        popupMessage.classList.add('messSucces')
        popupMessage.innerHTML = 'Film ajouter'; 
    }

    setTimeout(function () {
        popupMessage.style.display = 'none';
    }, 3000);

});


var filtre = document.getElementById('sort');

filtre.addEventListener('change', function(e){
    if(this.value === "nom"){
        films.sort(function(a, b) {
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
    }

    if(this.value === "annee"){
        films.sort(function (a, b) {
            return b.years - a.years;
          }); 
    }

    loadTabledata(films);
})
