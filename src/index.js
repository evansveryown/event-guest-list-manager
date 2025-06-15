
const form = document.getElementById('guest-form');         // The form where users submit guest names
const input = document.getElementById('guest-name');        // The text input field for guest names
const guestList = document.getElementById('guest-list');    // The unordered list that displays all added guests



// behaviour once a guest is keyed in
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const name = input.value.trim(); // Get the entered name and remove extra whitespace

  // give warning if list has more than ten guests already
  if (guestList.children.length > 10) {
    alert("Limit reached (10 guests max)");
    return;
  }

  // Create a new list item for the guest
  const li = document.createElement('li');

  // Set the inner HTML of the list item
  li.innerHTML = `
    <span>${name} - <b class="status">Not Attending</b></span>
    <div>
      <button class="rsvp">Toggle RSVP</button>
      <button class="delete">Remove</button>
    </div>
  `;

  // RSVP button listener
  li.querySelector('.rsvp').addEventListener('click', () => {
    const status = li.querySelector('.status'); // the <b> text element that shows RSVP status
    // Toggle between "Attending" and "Not Attending"
    status.textContent = status.textContent === "Attending" ? "Not Attending" : "Attending";
  });


  // Add functionality to the Delete button
  li.querySelector('.delete').addEventListener('click', () => {
    li.remove(); // Remove the current <li> from the DOM
  });

  // Append the fully constructed <li> to the guest list
  guestList.appendChild(li);

  // Clear the input field after submission
  input.value = "";
});
