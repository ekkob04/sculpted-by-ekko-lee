// SCULPTED by Ekko Lee — shared site behaviour
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // Contact form: friendly inline confirmation if the host page marks it handled.
  var form = document.querySelector('#contact-form');
  if (form) {
    // Pre-select the service someone clicked through from on the Shop page,
    // e.g. contact.html?service=Online%20Coaching
    var params = new URLSearchParams(window.location.search);
    var service = params.get('service');
    var serviceField = form.querySelector('#service');
    if (service && serviceField) {
      var match = Array.from(serviceField.options).find(function (opt) {
        return opt.value === service;
      });
      if (match) serviceField.value = service;
    }

    form.addEventListener('submit', function () {
      var btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Sending…';
        btn.disabled = true;
      }
    });
  }
});
