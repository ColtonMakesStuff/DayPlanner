 let currentTime = document.querySelector('.currentTime')
// let nextEvent = document.querySelector('.nextEvent')
// let currentEvent = document.querySelector('.currentEvent')


// declaring elements as var
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


 // loading all stored data on pageload
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
  moveThroughCurrentHours()
  moveThroughPastHours()
  createElementsFromData();
});


//sets day
var today = dayjs();
console.log(today.format('MMM D, YYYY'));
console.log(today.format('h:mm a'));

//sets the current time
$('.currentTime').html(today.format('h:mm a'));
hour = today.format('h');
tod = today.format('a')
//test times
//  tod = 'am'
// hour ='9'
$('.currentHour').html(hour + tod);


 var userDataArr = JSON.parse(localStorage.getItem('userData'))
 if (!Array.isArray(userDataArr)) {
  userDataArr = []; // Initialize as an empty array if not already an array
}

//saves all of the data once save button is clicked
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
  
//this is the object that gets saved to local storage
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
  //this reloads the page so the create element function is called again
  location.reload();
}

//this is a very clunky function that adds each list item to the proper pooint on the list, phind helped me do the more tedious bits of this
function createElementsFromData() {
  //this is so that they are sorted within each area by when they were created
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
// Remove 
    deleteButton.onclick = function() {
      listItem.remove(); 
      localStorage.removeItem(userData.id);
    } 

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);

    listItem.appendChild(label);
    listItem.appendChild(listItemContent);
    listItem.appendChild(actions);

   
console.log(userData)
     if (userData.hr < 9 && userData.ampm === 'AM') {
       morning.appendChild(listItem);
     }
  
     if (userData.hr == 9 && userData.ampm === 'AM') {
       nine.appendChild(listItem);
     }
    
     if (userData.hr == 10 && userData.ampm === 'AM') {
       ten.appendChild(listItem);
     }
    
     if (userData.hr == 11 && userData.ampm === 'AM') {
       eleven.appendChild(listItem);
     }

     if (userData.hr == 12 && userData.ampm === 'AM') {
       twelve.appendChild(listItem);
     }

     if (userData.hr == 1 && userData.ampm === 'PM') {
       one.appendChild(listItem);
     }

     if (userData.hr == 2 && userData.ampm === 'PM') {
       two.appendChild(listItem);
     }

     if (userData.hr == 3 && userData.ampm === 'PM') {
       three.appendChild(listItem);
     }
 
     if (userData.hr == 4 && userData.ampm === 'PM') {
       four.appendChild(listItem);
     }
     if (userData.hr > 4 && userData.ampm === 'PM') {
      afternoon.appendChild(listItem);
    }
  })
  
}

function moveThroughCurrentHours(){
  if (hour < 9 && tod === 'am' || hour == 12 && tod === 'am') {
    morning.style.backgroundColor = "yellow";
  } 
  if (hour == 9 && tod === 'am') {
    nine.style.backgroundColor = "yellow";
  } 
  if (hour == 10 && tod === 'am') {
    ten.style.backgroundColor = "yellow";
  } 
  if (hour == 11 && tod === 'am') {
    eleven.style.backgroundColor = "yellow";
  } 
  if (hour == 12 && tod === 'pm') {
    twelve.style.backgroundColor = "yellow";
  } 
  if (hour == 1 && tod === 'pm') {
    one.style.backgroundColor = "yellow";
  } 
  if (hour == 2 && tod === 'pm') {
    two.style.backgroundColor = "yellow";
  } 
  if (hour == 3 && tod === 'pm') {
    three.style.backgroundColor = "yellow";
  } 
  if (hour == 4 && tod === 'pm') {
    four.style.backgroundColor = "yellow";
  } 
  if (hour > 4 && hour < 12 && tod === 'pm') {
    afternoon.style.backgroundColor = "yellow";
  } 

}
function moveThroughPastHours(){
  if (hour > 8 && tod === 'am'  && hour != 12|| tod === 'pm') {
    morning.style.backgroundColor = "red";
  }  
  if (hour > 9 && tod === 'am'  && hour != 12|| tod === 'pm') {
    nine.style.backgroundColor = "red";

  } 
  if (hour > 10 && tod === 'am'  && hour != 12|| tod === 'pm') {
    ten.style.backgroundColor = "red";
  } 
  if (hour > 11 && tod === 'am'  && hour != 12|| tod === 'pm') {
    eleven.style.backgroundColor = "red";
  } 
  if (hour != 12 && tod === 'pm') {
    twelve.style.backgroundColor = "red";
  } 
  if (hour > 1 && hour < 12 && tod === 'pm') {
    one.style.backgroundColor = "red";
  } 
  if (hour > 2 && hour < 12 && tod === 'pm') {
    two.style.backgroundColor = "red";
  } 
  if (hour > 3 && hour < 12 && tod === 'pm') {
    three.style.backgroundColor = "red";
  } 
  if (hour > 4 && hour < 12 && tod === 'pm') {
    four.style.backgroundColor = "red";
  } 

}




  // Retrieve the array from local storage and parse it into an array


  //  function sendTo(timeOfDay, otherTimeOfDay, inputTime)
  //  if (hour === timeOfDay) 

// i need the events to be sorted by time 
// i need a function that makes the users inout into an object that contains the location, title, description, time, status, 
// i need each object to be assigned to a time sectin based on the time that it is due, 
// i need to convert the user time input into  time

