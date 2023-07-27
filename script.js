// Initialize an array to store the entered data
let userData = [];

document.getElementById("registrationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission to handle it with JavaScript
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  // Add the new data to the userData array
  userData.push({ username, email });

  // Display all the entered data below the form
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <h2>Entered Data:</h2>
    <ul>
      ${userData.map((data, index) => `
        <li>
          <strong>Entry ${index + 1}:</strong> 
          Username: ${data.username}, Email: ${data.email}
        </li>
      `).join('')}
    </ul>
  `;

  // Clear the form fields after displaying the data
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
});

