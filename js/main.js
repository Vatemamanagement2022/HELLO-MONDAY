(function () {
  "use strict";

  var CONTACT_EMAIL = "facturacion@helloomonday.com";

  // Año del footer
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Menú móvil
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-menu");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  // Sombra del header al hacer scroll
  var header = document.querySelector(".site-header");
  var onScroll = function () {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Animación de aparición
  var revealTargets = document.querySelectorAll(".section-head, .service, .value, .steps li, .faq details, .form");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  // Formulario de contacto: valida y abre el cliente de correo.
  // Para enviar sin cliente de correo, conecta el formulario a un servicio
  // (Formspree, Netlify Forms, backend propio...) cambiando este handler.
  var form = document.getElementById("contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      Array.prototype.forEach.call(form.querySelectorAll("input, textarea"), function (field) {
        var ok = field.checkValidity() && field.value.trim() !== "";
        field.closest(".field").classList.toggle("has-error", !ok);
        field.setAttribute("aria-invalid", String(!ok));
        if (!ok) valid = false;
      });

      if (!valid) {
        status.textContent = "Revisa los campos marcados, por favor.";
        status.classList.add("is-error");
        return;
      }

      var data = new FormData(form);
      var subject = "Contacto web — " + data.get("nombre");
      var body = data.get("mensaje") + "\n\n— " + data.get("nombre") + " (" + data.get("email") + ")";
      window.location.href = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      status.classList.remove("is-error");
      status.textContent = "¡Gracias! Se ha abierto tu programa de correo para enviar el mensaje.";
      form.reset();
    });
  }
})();
