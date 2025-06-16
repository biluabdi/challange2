// Get references to DOM elements
const form = document.getElementById('guest-form');
const input = document.getElementById('guest-name');

const guestList = document.createElement('ul');
document.body.appendChild(guestList); // ✅ Add the list to the page

// initiate limit
let guestCount = 0;
const maxGuests = 10;

form.addEventListener('submit', function(event) {
  event.preventDefault(); // stop form from reloading page

  // removing errors
  const name = input.value.trim();
  if (name === '') return; // ignore empty input
  if (guestCount >= maxGuests) {
    alert('Guest list is full');
    return;
  }

  // after input create a list
  const li = document.createElement('li');
  li.textContent = `${name} — Not Attending `;

  // Create RSVP toggle button
  const rsvpBtn = document.createElement('button');
  rsvpBtn.textContent = 'Toggle RSVP';
  li.appendChild(rsvpBtn);

  // Create remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  li.appendChild(removeBtn);

  guestList.appendChild(li);
  guestCount++;
  input.value = ''; // clear input

  // RSVP button event handler
  rsvpBtn.addEventListener('click', function() {
    if (li.textContent.includes('Not Attending')) {
      li.firstChild.textContent = `${name} — Attending `;
    } else {
      li.firstChild.textContent = `${name} — Not Attending `;
    }

    // Append buttons back since textContent resets content
    li.appendChild(rsvpBtn);
    li.appendChild(removeBtn);
  });

  // Remove button event handler
  removeBtn.addEventListener('click', function() {
    guestList.removeChild(li);
  });
});
