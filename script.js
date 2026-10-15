document.querySelectorAll('[data-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
const messageForm = document.querySelector('#message-form');
if (messageForm) {
  messageForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!messageForm.reportValidity()) return;
    const data = new FormData(messageForm);
    const subject = `Portfolio enquiry from ${data.get('name').trim()}`;
    const body = `${data.get('message').trim()}\n\nFrom: ${data.get('name').trim()}\nEmail: ${data.get('email').trim()}`;
    window.location.href = `mailto:lily.sainteclaire87@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-status').textContent = 'Your email app will open with your draft. Send it there to get in touch, or use the email link on this page.';
  });
}
