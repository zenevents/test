// Assemble les adresses e-mail au chargement, pour limiter leur collecte par les robots de spam.
document.querySelectorAll("a.email").forEach(function (a) {
  var addr = a.dataset.user + "@" + "debiskitchen" + ".ch";
  a.href = "mailto:" + addr;
  a.textContent = addr;
});

// Galerie : un clic sur une vignette l'ouvre en grand ; flèches ou boutons pour naviguer, Échap ou clic à côté pour fermer.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll(".gallery a.zoom"));
  if (!links.length) return;

  var box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.hidden = true;
  box.innerHTML =
    '<button class="lb-close" aria-label="Fermer">×</button>' +
    '<button class="lb-prev" aria-label="Photo précédente">‹</button>' +
    '<figure><img alt=""><figcaption></figcaption></figure>' +
    '<button class="lb-next" aria-label="Photo suivante">›</button>';
  document.body.appendChild(box);

  var img = box.querySelector("img"), cap = box.querySelector("figcaption"), current = 0, opener = null;

  function show(i) {
    current = (i + links.length) % links.length;
    var thumb = links[current].querySelector("img");
    img.src = links[current].href;
    img.alt = thumb.alt;
    cap.textContent = thumb.alt + " (" + (current + 1) + "/" + links.length + ")";
  }
  function open(i) {
    opener = document.activeElement;
    show(i);
    box.hidden = false;
    document.body.style.overflow = "hidden";
    box.querySelector(".lb-close").focus();
  }
  function close() {
    box.hidden = true;
    document.body.style.overflow = "";
    if (opener) opener.focus();
  }

  links.forEach(function (a, i) {
    a.addEventListener("click", function (e) { e.preventDefault(); open(i); });
  });
  box.querySelector(".lb-close").addEventListener("click", close);
  box.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
  box.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });
  box.addEventListener("click", function (e) { if (e.target === box) close(); });
  document.addEventListener("keydown", function (e) {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") show(current - 1);
    else if (e.key === "ArrowRight") show(current + 1);
  });

  // Glisser du doigt sur mobile
  var startX = null;
  box.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; }, { passive: true });
  box.addEventListener("touchend", function (e) {
    if (startX === null) return;
    var dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    startX = null;
  });
})();
