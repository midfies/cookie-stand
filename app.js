'use strict';
var hours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];
var allLocations = [];
var hourlyTotals = Array(hours.length).fill(0);
var grandTotal = 0;

var cookieTable = document.getElementById('cookieStoreJS');
var addLocationForm = document.getElementById('addLocationForm');

new CookieStore('First and Pike', 23, 65, 6.3);
new CookieStore('Seatac Airport', 3, 24, 1.2);
new CookieStore('Seattle Center', 11, 38, 3.7);
new CookieStore('Capitol Hill', 20, 38, 2.3);
new CookieStore('Alki', 2, 16, 4.6);
console.log(allLocations);

// new CookieStore('First and Pike', 23, 65, 6.3);
// new CookieStore('Seatac Airport', 33, 84, 1.2);
// new CookieStore('Seattle Center', 41, 278, 3.7);
// new CookieStore('Capitol Hill', 120, 188, 2.3);
// new CookieStore('Alki', 65, 116, 4.6);

function CookieStore(name, min, max, avg){
  this.name = name;
  this.nameInLower = (this.name.replace(/\s/g,'')).toLowerCase();
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.averageCookiesPerCust = avg;
  this.nameUL = '';
  this.randomCustPerHour = [];
  this.randomCookiePerHour = [];
  this.totalCookies = 0;
  this.tosserPerHour = Array(hours.length).fill(2);

  this.calculateRandomCust = function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    }
    return;
  },

  this.calculateRandomCookie = function() {
    this.calculateRandomCust();
    for (var i = 0; i < hours.length; i++){
      this.randomCookiePerHour.push(Math.ceil(this.randomCustPerHour[i] * this.averageCookiesPerCust));
    }
    return;
  },

  this.calculateTotalCookies = function() {
    this.calculateRandomCookie();
    for (var i = 0; i < hours.length; i++){
      this.totalCookies += this.randomCookiePerHour[i];
    }
    return;
  },

  this.render = function() {
    var rowElement = document.createElement('tr');
    var dataElement = document.createElement('td');
    dataElement.textContent = this.name;
    dataElement.setAttribute('class', 'locNameTable');
    rowElement.appendChild(dataElement);
    for(var i = 0; i < hours.length; i++){
      dataElement = document.createElement('td');
      dataElement.textContent = this.randomCookiePerHour[i];
      rowElement.appendChild(dataElement);
    }
    dataElement = document.createElement('td');
    dataElement.textContent = this.totalCookies;
    dataElement.setAttribute('class', 'locNameTable');
    rowElement.appendChild(dataElement);
    cookieTable.appendChild(rowElement);
  };

  this.calculaterTossers = function() {
    for (var i = 0; i < hours.length; i++){
      if (this.randomCustPerHour[i] > 40){
        var customers = this.randomCustPerHour[i] - 40;
        while (customers >= 20){
          this.tosserPerHour[i]++;
          customers -= 20;
        }
        if (customers > 0){
          this.tosserPerHour[i]++;
        }
      }
    }
    return;
  };

  this.displayTossers = function() {
    this.calculaterTossers();
    if (this.nameUL === 'newrow'){
      this.nameUL = (this.name.replace(/\s/g,'') + 'ul').toLowerCase();
      var ulElement = document.createElement('ul');
      ulElement.setAttribute('id',this.nameUL);
      var element = document.getElementById('newrow');
      element.appendChild(ulElement);
    }
    this.nameUL = this.name.replace(/\s/g,'') + 'ul';
    this.nameUL = this.nameUL.toLowerCase();
    var displayNameUL = document.getElementById(this.nameUL);
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    displayNameUL.appendChild(h2Element);
    var pElement = document.createElement('p');
    pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageCookiesPerCust;
    displayNameUL.appendChild(pElement);
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': Estimated Customers: ' + this.randomCustPerHour[i] + ' Required Workers ' + this.tosserPerHour[i];
      displayNameUL.appendChild(liElement);
    }
  };

  allLocations.push(this);
}
// END OF COOKIE STORE CONSTRUCTOR----------------------------------------------

function makeHeaderRow() {
  var rowElement = document.createElement('tr');
  var headElement = document.createElement('th');
  headElement.textContent = 'Location';
  rowElement.appendChild(headElement);
  for (var i = 0; i < hours.length; i++){
    headElement = document.createElement('th');
    headElement.textContent = hours[i];
    rowElement.appendChild(headElement);
  }
  headElement = document.createElement('th');
  headElement.textContent = 'Total';
  rowElement.appendChild(headElement);
  cookieTable.appendChild(rowElement);
}

function makeTotalRow() {
  var rowElement = document.createElement('tr');
  var dataElement = document.createElement('td');
  dataElement.textContent = 'Total';
  dataElement.setAttribute('class', 'locNameTable');
  rowElement.appendChild(dataElement);
  for (var i = 0; i < hours.length; i++){
    for (var j = 0; j < allLocations.length; j++){
      hourlyTotals[i] += allLocations[j].randomCookiePerHour[i];
    }
    dataElement = document.createElement('td');
    dataElement.textContent = hourlyTotals[i];
    rowElement.appendChild(dataElement);
  }
  for (i = 0; i < allLocations.length; i++){
    grandTotal += allLocations[i].totalCookies;
  }
  dataElement = document.createElement('td');
  dataElement.textContent = grandTotal;
  dataElement.setAttribute('class', 'locNameTable');
  rowElement.appendChild(dataElement);
  cookieTable.appendChild(rowElement);
}


// Event handling for add location form ----------------------------------------
function handleAddLocation(event){
  event.preventDefault();
  if (!event.target.newLocation.value || !event.target.minimum.value || !event.target.maximum.value || !event.target.average.value){
    return alert('Must fill in all values');
  }
  if(isNaN(event.target.minimum.value) || isNaN(event.target.maximum.value) || isNaN(event.target.average.value)){
    return alert('Minimum, Maximum and Average must be a number');
  }
  if (event.target.minimum.value > event.target.maximum.value){
    return alert('Minimum must be smaller than maximum');
  }
  var alphaExp = /^[a-zA-Z]+$/;
  if (!event.target.newLocation.value[0].match(alphaExp)){
    return alert('Location must start with a letter');
  }
  var isNew = true;
  for(var i = 0; i < allLocations.length;i++){
    if (allLocations[i].nameInLower === (event.target.newLocation.value.replace(/\s/g,'').toLowerCase())){
      cookieTable.deleteRow(i + 1);
      allLocations.splice(i,1);
      isNew = false;
    }
  }
  var newLoc = event.target.newLocation.value;
  var newMin = parseInt(event.target.minimum.value);
  var newMax = parseInt(event.target.maximum.value);
  var newAvg = parseInt(event.target.average.value);

  var newLocation = new CookieStore(newLoc, newMin, newMax, newAvg);
  event.target.newLocation.value = null;
  event.target.minimum.value = null;
  event.target.maximum.value = null;
  event.target.average.value = null;

  cookieTable.deleteRow(cookieTable.rows.length - 1);
  newLocation.calculateTotalCookies();
  newLocation.render();
  hourlyTotals = Array(hours.length).fill(0);
  grandTotal = 0;
  makeTotalRow();

  if (isNew === true){
    newLocation.nameUL = 'newrow';
  }
  newLocation.displayTossers();
}
addLocationForm.addEventListener('submit', handleAddLocation);

// Code to make things Gooooooooo!!---------------------------------------------
makeHeaderRow();
for (var i = 0; i < allLocations.length; i++){
  allLocations[i].calculateTotalCookies();
  allLocations[i].render(); }
makeTotalRow();
for (var j = 0;j < allLocations.length;j++){
  allLocations[j].displayTossers();
}
