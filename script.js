document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
        }
    }, false);
}
    
const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');
const rejectBtn = document.getElementById('reject-cookies');
if (localStorage.getItem('cookiesAccepted') !== 'true') {
        if (banner) {
             banner.style.display = 'block';
        }
    }
    if (acceptBtn && banner) {
        acceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true'); 
            banner.style.display = 'none';
        });
    }
    if (rejectBtn && banner) {
    rejectBtn.addEventListener('click', function() {
        banner.style.display = 'none';
    });
}
});
