var membreCount = 1; // Variable globale pour suivre le nombre de membres


function insererMembres(nom, matricule, fonction, image) {
    // Création de la carte Bootstrap
    var card = document.createElement('div');
    card.className = 'col-3 text-justify p-3 rounded-4 ombre mb-3';
  
    // Image de la personne
    var img = document.createElement('img');
    img.className = 'rounded-circle align-items-lg-center mb-2 img-fluid w-75';
    img.src = image ? image : 'homme-inconnu.png';
    card.appendChild(img);
  
    // Nom de la personne
    var nomElement = document.createElement('p');
    nomElement.className = 'fw-bold text-dark';
    nomElement.textContent = nom;
    card.appendChild(nomElement);
  
    // Matricule
    var matriculeElement = document.createElement('p');
    matriculeElement.innerHTML = 'Matricule: <span class="fw-bold matricule"> ' + matricule + '</span';
    card.appendChild(matriculeElement);
  
    // Fonction
    var fonctionElement = document.createElement('p');
    fonctionElement.textContent = fonction;
    card.appendChild(fonctionElement);
  
    // Insertion de la carte dans la section container
    var container = document.querySelector('.containeur');
    var row = document.createElement('div');
    row.className = 'row g-4';
    row.appendChild(card);
  
    // Vérification si une ligne complète est atteinte
    var previousRow = container.querySelector('.row.g-4:last-child');
    if (previousRow && previousRow.children.length < 4) {
      previousRow.appendChild(card);
    } else {
      container.appendChild(row);
    }
  
    // Ajout d'un hr après chaque ligne complète
    if (row.children.length === 4) {
      var hr = document.createElement('hr');
      container.appendChild(hr);
    }
  }
  
  // Exemples d'insertion de membres
  insererMembres('Sékou Doumbouya', '21720', 'Membre du groupe', 'membres/sekou.jpg');
  insererMembres('Mamadou Mariame Djouldé Barry', '226025692150', 'Membre du groupe', 'membres/djoulde_.jpg');
  insererMembres('Sékou Condé ', '226080852102', 'Membre du groupe', 'membres/conde.jpg');
  insererMembres('Kaba Amara', '226074782161', 'Membre du groupe', 'membres/amaea.jpg');
  insererMembres('Mohamed kade Camara', '226024032134', 'Membre du groupe', 'membres/mohamed.jpg');
  insererMembres('Mohamed Gnandan Kourouma', '226019592117', 'Membre du groupe', 'membres/kourouma.jpg');
  insererMembres('Kadé Sacko', '226033102112', 'Membre du groupe', 'membres/kade.jpg');
  insererMembres('Aïssatou lamarana Barry', '226023162108', 'Membre du groupe', 'membres/lamarana.jpg');
  insererMembres('Mamadama Bangoura' , '226098192148', 'Membre du groupe', 'membres/mawa.jpg');
  insererMembres('Fatoumata Camara', '226067692109', 'Membre du groupe', 'membres/fatoumata.jpg');
  insererMembres('Ahmed Sidibé', '226054892166', 'Membre du groupe', 'membres/sidibe.jpg');
  insererMembres('Kourouma Alamako', '220019492182', 'Membre du groupe', 'membres/alamako.jpg');
  insererMembres('Mohamed kazali cherif', '2---------', 'Membre du groupe', 'membres/kazali.jpg');




// Sélectionnez toutes les images des membres
var imagesMembres = document.querySelectorAll('.col-3.text-justify img');

// Parcourez toutes les images et appliquez les styles CSS
imagesMembres.forEach(function(image) {
  // Définissez la classe Bootstrap "img-fluid" pour une taille d'image réactive
  image.classList.add('img-fluid');
  
  // Définissez la classe Bootstrap "rounded-circle" pour une forme d'image arrondie
  image.classList.add('rounded-circle');
  
  // Définissez la hauteur et la largeur de l'image en pixels pour une résolution uniforme
  image.style.width = '200px'; // Remplacez la valeur par la taille souhaitée en pixels
  image.style.height = '195px'; // Remplacez la valeur par la taille souhaitée en pixels
});


function ajouterFondSurvol(element, couleurFond, couleurTexte) {
    element.addEventListener('mouseover', function() {
      element.style.backgroundColor = couleurFond;
      var matricule = element.querySelector('.matricule');
      matricule.style.color = couleurTexte;
    });
  
    element.addEventListener('mouseout', function() {
      element.style.backgroundColor = '';
      var matricule = element.querySelector('.matricule');
      matricule.style.color = '';
    });
  }
  
  var membres = document.querySelectorAll('.col-3.text-justify');
  
  membres.forEach(function(membre) {
    ajouterFondSurvol(membre, '#ebc76b1f ', '#270957c5'); // Remplacez #6f40ba27 par votre couleur hexadécimale souhaitée pour le fond sur survol
  });
  