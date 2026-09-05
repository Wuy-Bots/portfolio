/* Keep project content readable when JavaScript is unavailable. */
const projectToggles = [...document.querySelectorAll('.project-toggle')];
function setProjectExpanded(button, expanded) {
  const panel = document.getElementById(button.getAttribute('aria-controls'));
  if (!panel) return;
  panel.hidden = !expanded;
  button.setAttribute('aria-expanded', String(expanded));
  button.querySelector('.toggle-label').textContent = expanded ? 'Masquer les détails' : 'Voir les détails';
  button.querySelector('.toggle-arrow').textContent = expanded ? '↑' : '↓';
}
projectToggles.forEach(button => {
  button.hidden = false;
  setProjectExpanded(button, false);
  button.addEventListener('click', () => {
    setProjectExpanded(button, button.getAttribute('aria-expanded') !== 'true');
  });
});
function openLinkedProject() {
  const target = document.getElementById(location.hash.slice(1));
  if (!target) return;
  const button = projectToggles.find(button =>
    button.getAttribute('aria-controls') === target.id || target.contains(button));
  if (button) setProjectExpanded(button, true);
}
openLinkedProject();
window.addEventListener('hashchange', openLinkedProject);

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    button.disabled = true;
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = 'Copié !';
      status.textContent = 'Copié dans le presse-papier.';
    } catch {
      status.textContent = 'La copie automatique est indisponible. Vous pouvez sélectionner et copier la coordonnée directement.';
    } finally {
      window.setTimeout(() => { button.textContent = 'Copier'; button.disabled = false; }, 2000);
    }
  });
});
