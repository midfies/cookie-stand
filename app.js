'use strict';
var hours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];
var store = [];
var hourlyTotals = Array(hours.length).fill(0);
var grandTotal = 0;

new CookieStore('First and Pike', 23, 65, 6.3);
new CookieStore('Seatac Airport', 3, 24, 1.2);
new CookieStore('Seattle Center', 11, 38, 3.7);
new CookieStore('Capitol Hill', 20, 38, 2.3);
new CookieStore('Alki', 2, 16, 4.6);

console.log(store);
cookieTableJS();

function CookieStore(name, min, max, avg){
  this.name = name;
  this.minCustPerHour = min;
  this.maxCustPerHour = max;
  this.averageCookiesPerCust = avg;
  this.nameUL = '';
  this.randomCustPerHour = [];
  this.randomCookiePerHour = [];
  this.totalCookies = 0;

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

  this.render = function(cookieTable) {
    this.calculateTotalCookies();
    var rowElement = document.createElement('tr');
    var dataElement = document.createElement('td');
    dataElement.textContent = this.name;
    rowElement.appendChild(dataElement);
    for(var i = 0; i < hours.length; i++){
      dataElement = document.createElement('td');
      dataElement.textContent = this.randomCookiePerHour[i];
      rowElement.appendChild(dataElement);
    }
    dataElement = document.createElement('td');
    dataElement.textContent = this.totalCookies;
    rowElement.appendChild(dataElement);
    cookieTable.appendChild(rowElement);
  };

  // this.displayAll = function() {
  //   this.calculateTotalCookies();
  //   this.nameUL = this.name.replace(/\s/g,'') + 'UL';
  //   //console.log(this);
  //   var displayNameUL = document.getElementById(this.nameUL);
  //   var h2Element = document.createElement('h2');
  //   h2Element.textContent = this.name;
  //   displayNameUL.appendChild(h2Element);
  //   var pElement = document.createElement('p');
  //   pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageCookiesPerCust;
  //   displayNameUL.appendChild(pElement);
  //   for (var i = 0; i < this.randomCookiePerHour.length; i++){
  //     var liElement = document.createElement('li');
  //     liElement.textContent = hours[i] + ': ' + this.randomCookiePerHour[i] + ' cookies';
  //     displayNameUL.appendChild(liElement);
  //   }
  //   liElement = document.createElement('li');
  //   liElement.textContent = 'Total: ' + this.totalCookies + ' cookies';
  //   displayNameUL.appendChild(liElement);
  // };

  // this.setMin = function(newMin) {
  //   this.minCustPerHour = newMin;
  // };
  // this.setMax = function(newMax) {
  //   this.maxCustPerHour = newMax;
  // };
  // this.setAverage = function(newAverage) {
  //   this.averageCookiesPerCust = newAverage;
  // };
  store.push(this);
}
// END OF COOKIE STORE CONSTRUCTOR----------------------------------------------

function cookieTableJS() {
  var cookieTable = document.getElementById('cookieStoreJS');

  function makeHeaderRow() {
    var rowElement = document.createElement('tr');
    var headElement = document.createElement('th');
    headElement.textContent = 'Name';
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
    rowElement.appendChild(dataElement);
    for (var i = 0; i < hours.length; i++){
      for (var j = 0; j < store.length; j++){
        hourlyTotals[i] += store[j].randomCookiePerHour[i];
      }
      dataElement = document.createElement('td');
      dataElement.textContent = hourlyTotals[i];
      rowElement.appendChild(dataElement);
    }
    for (i = 0; i < store.length; i++){
      grandTotal += store[i].totalCookies;
    }
    dataElement = document.createElement('td');
    dataElement.textContent = grandTotal;
    rowElement.appendChild(dataElement);
    cookieTable.appendChild(rowElement);
  }

  makeHeaderRow();
  for (var i = 0; i < store.length; i++){
    store[i].render(cookieTable);
  }
  makeTotalRow();
}
