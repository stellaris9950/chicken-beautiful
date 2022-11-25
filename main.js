// My Contacts Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');


// Array & initalization
let Contact = loadStorage();
displayAll();


// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displayContacts();
  } else if (selection === 'add') {
    addContact();
  } else if (selection === 'remove') {
    removeContact();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-country') {
    displayByCountry();
  }
}

// MENU FUNCTIONS
function displayContacts() {
  displayAll();
}

function addContact() {
  let ContactName = prompt("Enter Contact Name:")
  let ContactEmail = prompt("Enter Contact Email:")
  let ContactPhone = prompt("Enter Contact Phone:")
  let ContactCountry = prompt("Enter Contact Country:")
  Contact.push(newContact(ContactName, ContactEmail, ContactPhone, ContactCountry));
  saveContact();
  displayAll();
}

function removeContact() {
  let index = +prompt('Enter # of Contact:');
  if (index >= 0 && index < Contact.length) {
    Contact.splice(index, 1)
    saveContact();
    displayAll();
  }
  else {
    alert('invalid Contact #')
  }
}

function displayByName() {
  let outputStr = '';
  let searchName = prompt("Enter name you want to see:");
  for (let i = 0; i < Contact.length; i++){
    if (Contact[i].name === searchName){
      outputStr += getContactHTMLStr(Contact[i], i);
    } 
  }
  outputEl.innerHTML = outputStr;
}

function displayByCountry() {
  let outputStr = '';
  let searchCountry = prompt("Enter Country you want to see:");
  for (let i = 0; i < Contact.length; i++){
    if (Contact[i].Country === searchCountry){
      outputStr += getContactHTMLStr(Contact[i], i);
    } 
  }
  outputEl.innerHTML = outputStr;
}

function displayByEmail(){
  let searchEmail = prompt("Enter Email you want to search:")
  let index = findByEmail(searchEmail);
  if (index === -1) {
    alert(`Contact with that email could not be found.`)
  } else {
    alert(`Contact with that email was found at position ${index}.`);
  }

}

function findByEmail(){
  .









  
}



// Helper Functions
// HELPER FUNCTION
// return a new Contact with completion property
function newContact(ContactName, ContactEmail, ContactPhone, ContactCountry){
  return {
    name: ContactName,
    Email: ContactEmail,
    Phone: ContactPhone,
    Country: ContactCountry
  };
}

// display all Contact
function displayAll() {
  let outputStr = '';
  for (let i = 0; i < Contact.length; i++){
    outputStr += getContactHTMLStr(Contact[i], i);
  }
  outputEl.innerHTML = outputStr;
}

// get html for givin Contact
function getContactHTMLStr(Contact, i) {
  return `
    <div class="">
      <h2>${i}: ${Contact.name}</h2>
      <p>${Contact.Email}</p>
      <p>${Contact.Phone} (${Contact.Country})</p>
    </div>
  `
}

// save global Contact to local storage
function saveContact() {
  localStorage.setItem('Contact', JSON.stringify(Contact))
}


// load Contact from local storage

function loadStorage() {
  let ContactStr = localStorage.getItem('Contact');
  return JSON.parse(ContactStr) ?? [];
}