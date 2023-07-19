let currentTime = document.querySelector('.currentTime')
let nextEvent = document.querySelector('.nextEvent')
let currentEvent = document.querySelector('.currentEvent')

//event breakdown variables
let eventTitle = document.querySelector('.eventTitle')
let eventDescription = document.querySelector('.eventDescription')
let eventTime = document.querySelector('.eventTime')
let eventLocation = document.querySelector('.eventLocation')
let weather = document.querySelector('.weather')
let eventStatus = document.querySelector('.eventStatus')

//event inputs
let eventTitleInput = document.querySelector('.eventTitleInput')
let eventDescriptionInput = document.querySelector('.eventDescriptionInput')

//event time inputs
let hour = document.querySelector('.hour')
let minutes = document.querySelector('.minutes')
let AMPM = document.querySelector('.AMPM')

let eventLocationInput = document.querySelector('.eventLocationInput')

//event outputs
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


var today = dayjs();
console.log(today.format('MMM D, YYYY'));

console.log(today.format('h:mm a'));

currentTime.innerHTML = today.format('h:mm a')
hourAMPM = today.format('h a')
currentHour.innerHTML = hourAMPM

var userDataArr = []
var userDataArr = JSON.parse(localStorage.getItem('userData'))

function saveData() {
    var eventTitle = document.getElementById('eventTitleInput').value;
    var eventDescription = document.getElementById('eventDescriptionInput').value;
    var hour = document.getElementById('hour').value;
    var minutes = document.getElementById('minutes').value;
    var AMPM = document.getElementById('AMPM').value;
    var eventLocation = document.getElementById('eventLocationInput').value;
    if (eventTitle === '' || eventDescription === '' || hour === 'hour'|| minutes === 'minutes' || AMPM === 'AM/PM') {
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
      ampm: AMPM
    };
  
    userDataArr.push(userData);

    // Store the updated array in local storage
    localStorage.setItem('userData', JSON.stringify(userDataArr));
  

var storedData = JSON.parse(localStorage.getItem('userData'));

// Loop over the array and console log each user data
storedData.forEach(function(userData) {
  console.log(userData);
});
  }
  // Retrieve the array from local storage and parse it into an array


//   function sendTo(timeOfDay, otherTimeOfDay, inputTime)
//   if (hour === timeOfDay) 

// i need the events to be sorted by time 
// i need a function that makes the users inout into an object that contains the location, title, description, time, status, 
// i need each object to be assigned to a time sectin based on the time that it is due, 
// i need to convert the user time input into an actual time

