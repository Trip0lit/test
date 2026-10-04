// Date du jour dans le bandeau et année du pied de page
(function () {
  var now = new Date();

  var today = document.querySelector('[data-today]');
  if (today) {
    var label = now.toLocaleDateString('fr-FR', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
    today.textContent = label.charAt(0).toUpperCase() + label.slice(1);
  }

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = now.getFullYear();
  });

  // Inscription à la lettre (aucun envoi : à brancher sur un service d'e-mailing)
  var form = document.querySelector('[data-newsletter]');
  var note = document.querySelector('[data-form-note]');
  if (form && note) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      if (!input.checkValidity() || !input.value) {
        note.textContent = 'Merci d’indiquer une adresse e-mail valide.';
        input.focus();
        return;
      }
      note.textContent = 'Merci ! Votre inscription est bien prise en compte.';
      form.reset();
    });
  }
})();
