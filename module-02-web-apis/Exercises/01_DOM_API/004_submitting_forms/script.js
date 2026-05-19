// Select the form and the output paragraph
const contactForm = document.getElementById('contact-form');
const outputParagraph = document.getElementById('output');

// Function to handle form submission
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form field values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  //   if (!name.value || !email.value || !message.value) {
  //     output.textContent = "Please fill out all fields";
  //     output.classList.remove("bg-green-500");
  //     output.classList.add("bg-red-500");

  //   } else {
  //     output.innerHTML = `<ul>
  //         <li>${name}</li>
  //         <li>${email}</li>
  //         <li>${message}</li>
  //         </ul>`;
  //     output.classList.remove("bg-red-500");
  //     output.classList.add("bg-green-500");

  //     contactForm.reset();
  //   }

  // Validate fields are not empty
  try {
    if (!name) {
      throw new Error('Name is required');
    }
    if (!email) {
      throw new Error('Email is required');
    }
    if (!message) {
      throw new Error('Message is required');
    }

    // Display the data in the paragraph
    outputParagraph.setHTML(`
      <ul>
        <li>${name}</li>
        <li>${email}</li>
        <li>${message}</li>
      </ul>`);
    outputParagraph.classList.remove('bg-red-500');
    outputParagraph.classList.add('bg-green-500');

    // Clear the form fields
    contactForm.reset();
    // e.target.reset();
  } catch (error) {
    outputParagraph.textContent = error.message;
    outputParagraph.classList.remove('bg-green-500');
    outputParagraph.classList.add('bg-red-500');
  }
});
