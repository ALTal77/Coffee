   // Select all navbar links
    let navLinks = document.querySelectorAll('.nav-link');
    let navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        // Close the navbar-collapse on click
        navbarCollapse.classList.remove('show');
      });
    });