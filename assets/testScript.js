 let currentTime = document.querySelector('.currentTime')
// let nextEvent = document.querySelector('.nextEvent')
// let currentEvent = document.querySelector('.currentEvent')



 let eventList = document.querySelector('.eventList')

 let morning = document.querySelector('.morning')
 let nine = document.querySelector('.nine')
 let ten = document.querySelector('.ten')
 let eleven = document.querySelector('.eleven')
 let twelve = document.querySelector('.twelve')
 let one = document.querySelector('.one')
 let two = document.querySelector('.two')
 let three = document.querySelector('.three')
 let four = document.querySelector('.four')
 let afternoon = document.querySelector('.afternoon')
 let currentHour = document.querySelector('.currentHour')

 $(document).ready(function() {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  const nameInput = $('#name');
  const username = localStorage.getItem('username') || '';

  nameInput.val(username);

  nameInput.on('change', function(e) {
    localStorage.setItem('username', e.target.value);
  });

  userDataArr = JSON.parse(localStorage.getItem('userData')) || [];

  if (!Array.isArray(userDataArr)) {
    userDataArr = [];
  }

  createElementsFromData();
});



var today = dayjs();
console.log(today.format('MMM D, YYYY'));
console.log(today.format('h:mm a'));

$('.currentTime').html(today.format('h:mm a'));
hourAMPM = today.format('h a');
$('.currentHour').html(hourAMPM);


 var userDataArr = JSON.parse(localStorage.getItem('userData'))
 if (!Array.isArray(userDataArr)) {
  userDataArr = []; // Initialize as an empty array if not already an array
}

function saveData() {
  event.preventDefault();
  var eventTitle = document.getElementById('event-title-input').value;
  var eventDescription = document.getElementById('event-description-input').value;
  var hour = document.getElementById('hour').value;
  var minutes = document.getElementById('minutes').value;
  var AMPM = document.getElementById('AM-PM').value;
  var eventLocation = document.getElementById('event-location-input').value;

  if (eventTitle === '' || eventDescription === '' || hour === 'hour' || minutes === 'minutes' || AMPM === 'AM/PM') {
    alert('Please fill in all the required fields.');
    return;
  }

  var userData = {
    title: eventTitle,
    description: eventDescription,
    time: hour + ':' + minutes + ' ' + AMPM,
    location: eventLocation,
    hr: hour,
    min: minutes,
    ampm: AMPM,
    createdAt: new Date().getTime(),
    done: false
  };

  userDataArr.push(userData); // Add the new object to the array

  localStorage.setItem('userData', JSON.stringify(userDataArr)); // Store the array in local storage

  console.log(userDataArr);
  document.getElementById('new-todo-form').reset();
  createElementsFromData();
}


function createElementsFromData() {
  userDataArr.sort(function(a, b) {
    return a.createdAt - b.createdAt;
  });

  userDataArr.forEach(function(userData) {
    var listItem = document.createElement('div');
    listItem.className = 'list-item';

    var label = document.createElement('label');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    var span = document.createElement('span');
    span.className = 'done';

    label.appendChild(checkbox);
    label.appendChild(span);

    var listItemContent = document.createElement('div');
    listItemContent.className = 'list-item-content';

    var titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = userData.title;
    titleInput.readOnly = true;

    var descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.value = userData.description;
    descriptionInput.readOnly = true;

    var timeInput = document.createElement('input');
    timeInput.type = 'text';
    timeInput.value = userData.time;
    timeInput.readOnly = true;

    var locationInput = document.createElement('input');
    locationInput.type = 'text';
    locationInput.value = userData.location;
    locationInput.readOnly = true;

    listItemContent.appendChild(titleInput);
    listItemContent.appendChild(descriptionInput);
    listItemContent.appendChild(timeInput);
    listItemContent.appendChild(locationInput);

    var actions = document.createElement('div');
    actions.className = 'actions';

    var editButton = document.createElement('button');
    editButton.className = 'edit';
    editButton.textContent = 'edit';

    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.textContent = 'delete';

    deleteButton.onclick = function() {
      listItem.remove(); // Remove the parent list-item div
      localStorage.removeItem(userData.id); // Remove the item from local storage using the unique identifier (assuming userData.id is the unique identifier)
    };

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    listItem.appendChild(label);
    listItem.appendChild(listItemContent);
    listItem.appendChild(actions);

    nine.appendChild(listItem);

    // if (userData.hr === 9 && userData.ampm === 'AM') {
    //   console.log('Condition met: 9 AM');
    //   nine.appendChild(listItem);
    // }
  });
}
  // Retrieve the array from local storage and parse it into an array


  //  function sendTo(timeOfDay, otherTimeOfDay, inputTime)
  //  if (hour === timeOfDay) 

// i need the events to be sorted by time 
// i need a function that makes the users inout into an object that contains the location, title, description, time, status, 
// i need each object to be assigned to a time sectin based on the time that it is due, 
// i need to convert the user time input into  time

