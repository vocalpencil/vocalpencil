document.addEventListener("DOMContentLoaded", function () {
  // Get all nav items
  var navItems = document.querySelectorAll(".nav-item a");

  // Loop through all nav items
  navItems.forEach(function (navItem) {
    // Check if nav item href matches current page URL
    if (window.location.href.endsWith(navItem.getAttribute('href'))) {
      // Add active class to parent li element
      navItem.classList.add("active");
    } else {
      // Remove active class from parent li element
      navItem.classList.remove("active");
    }
  });
});


  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  
