const contactForm = document.querySelector("#contactForm");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
  const mailto = `mailto:hello@forgeclub.co?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  document.querySelector("#formStatus").textContent =
    "Your email app should open with your message ready to send.";
  window.location.href = mailto;
});
