//import "./firebase-app.js";
import { fireStore,addDoc, collection, getDocs } from "./firebase-app.js";

function updateUI(data, id){
  const itemId = doc.id;
  const itemData = data;

  // Generate HTML for each item
  const itemHtml = `
    <div class="registry-item">
      <!-- ... existing code ... -->
      <input type="checkbox" id="${id}" onclick="toggleCompleted('${id}')">
    </div>
  `;

  // Append the HTML to the registry-list section
  document.querySelector('.registry-list').innerHTML += itemHtml;

  // Mark item as completed if needed
  if (itemData.completed) {
    const itemDescription = document.getElementById(itemId).nextElementSibling;
    itemDescription.classList.add('completed');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.item-checkbox');

  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
          const item = this.closest('.registry-item');
          if (this.checked) {
              item.classList.add('fade-out');
          } else {
              item.classList.remove('fade-out');
          }
      });
  });
});


document.getElementById('rsvp-form').addEventListener('submit', function (e) {
    e.preventDefault();

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;
    const guests = document.getElementById('guests').value;
    const phone = document.getElementById('phone').value;
    const advice = document.getElementById('advice').value;

    const colRef = collection(fireStore, 'rsvps');
    addDoc(colRef,{
        name: name,
        email: email,
        attendance: attendance,
        phone: phone,
        guests: guests,
        advice: advice
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('form-messages').innerHTML = 
        'Thanks for filling out the form. We are pleased to hear from you';

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        document.getElementById('form-messages').innerHTML = 'Oops! Something went wrong. Please try again.';
    });
    
    document.getElementById('rsvp-form').reset();
});
