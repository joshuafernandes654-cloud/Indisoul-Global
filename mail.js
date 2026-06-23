// Initialize EmailJS
// Get your credentials from https://www.emailjs.com/
emailjs.init("eTCZ7W7rWtoP6V7RA"); // EmailJS public key

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const form = event.target;
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const phone = form.querySelector('[name="phone"]').value;
  const subject = form.querySelector('[name="subject"]').value;
  const message = form.querySelector('[name="message"]').value;

  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  // EmailJS parameters
  const templateParams = {
    to_email: "top1@indisoulgl​oble.com", // Your email
    from_name: name,
    from_email: email,
    phone: phone,
    subject: subject,
    message: message
  };

  // Send email
  emailjs
    .send(
      "service_lt3er43", // Your EmailJS service ID
      "template_6nllzmn", // Your EmailJS template ID
      templateParams
    )
    .then(
      function(response) {
        console.log("SUCCESS", response.status, response.text);
        alert("✅ Message sent successfully! We'll get back to you soon.");
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      },
      function(error) {
        console.log("FAILED", error);
        alert("❌ Failed to send message. Please try again or contact us directly.");
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    );
}
