// Main.js

    document.addEventListener("DOMContentLoaded", function(event) { 
        // The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed
        // without waiting for stylesheets, images, and subframes to finish loading
        let navLinks = document.querySelectorAll('.nav-link'); // gets all elements with the class 'nav-link'

        navLinks.forEach((link) => {
            let linkUrl = link.getAttribute('href') // gets the href attribute of each link
            
            if (window.location.href.includes(linkUrl)) {
                link.classList.add('active') // adds the class 'active' to the link if its href matches the current URL
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
  
