const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  // Send the form data to a server-side script for processing
});
