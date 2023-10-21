function setActiveLink() {
    // Récupérer le nom de la page actuelle
    var currentPage = window.location.pathname.split("/").pop();
  
    // Sélectionner tous les liens de la barre de navigation
    var navLinks = document.querySelectorAll(".navbar-nav li a");
  
    // Parcourir tous les liens
    for (var i = 0; i < navLinks.length; i++) {
      var link = navLinks[i];
      var href = link.getAttribute("href");
  
      // Comparer le nom de la page actuelle avec le nom du lien
      if (href === currentPage) {
        // Ajouter la classe active au lien correspondant
        link.classList.add("active");
      }
    }
  } 
  // Appeler la fonction pour initialiser la classe active
  setActiveLink();



  function showSpinner() {
    // Désactiver le bouton de recherche
    var searchButton = document.getElementById("searchButton");
    searchButton.disabled = true;
  
    // Ajouter la classe du spinner Bootstrap au bouton
    searchButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Searching...';
  
    // Réactiver le bouton et réinitialiser le texte après 5 secondes
    setTimeout(function() {
      searchButton.disabled = false;
      searchButton.innerHTML = 'chargement';
    }, 5000);
  }
  










  