// Contact page: build a mailto draft from the form, and copy the email address.
(function () {
  const form = document.getElementById('brief');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const needs = data.getAll('need');
      const detail = (data.get('detail') || '').trim();

      const subject = needs.length ? needs.join(', ') : 'Hello from steveaq.dev';
      const body = ['Hi Stephen,', '', detail, '', 'Thanks,']
        .filter((line, i, all) => line !== '' || all[i - 1] !== '').join('\n');

      window.location.href = 'mailto:' + form.dataset.email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = 'Copied';
      } catch (e) {
        button.textContent = 'Press ⌘C';
        const link = document.querySelector('[data-email]');
        if (link) window.getSelection().selectAllChildren(link);
      }
      setTimeout(() => { button.textContent = 'Copy'; }, 2000);
    });
  });
})();
