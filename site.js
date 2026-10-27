// Assemble les adresses e-mail au chargement, pour limiter leur collecte par les robots de spam.
document.querySelectorAll("a.email").forEach(function (a) {
  var addr = a.dataset.user + "@" + "debiskitchen" + ".ch";
  a.href = "mailto:" + addr;
  a.textContent = addr;
});
