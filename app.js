'use strict';
var hours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];
var hoursOfOperation = 15;
var firstAndPike = {
  //properties
  name: '1st & Pike',
  nameUL: 'firstAndPikeUL',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  averageSalesPerHour: 6.3,
  randomCustPerHour: [],
  randomCookiePerHour: [],
  totalCookies: 0,

  //methods
  calculateRandomCust: function(min, max) {
    var custArray = [];
    for (var i = 0; i < hoursOfOperation; i++){
      min = Math.ceil(min);
      max = Math.floor(max);
      custArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return custArray;
  },
  calculateRandomCookie: function(randomCustArray, averageCookieSales) {
    var cookieArray = [];
    for (var i = 0; i < hoursOfOperation; i++){
      cookieArray.push(Math.round(randomCustArray[i] * averageCookieSales));
    }
    return cookieArray;
  },
  calculateTotalCookies: function(randomCookieArray) {
    var total = 0;
    for (var i = 0; i < randomCookieArray.length; i++){
      total += randomCookieArray[i];
    }
    return total;
  },
  displayAll: function() {
    var displayNameUL = document.getElementById(this.nameUL);
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    displayNameUL.appendChild(h2Element);
    var pElement = document.createElement('p');
    pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageSalesPerHour;
    displayNameUL.appendChild(pElement);
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.randomCookiePerHour[i];
      displayNameUL.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookies;
    displayNameUL.appendChild(liElement);
  },

  initialize: function() {
    console.log('initialize: Min: ' + this.minCustPerHour + ', Max: ' + this.maxCustPerHour + ', Average: ' + this.averageSalesPerHour);
    this.randomCustPerHour = this.calculateRandomCust(this.minCustPerHour,this.maxCustPerHour);
    this.randomCookiePerHour = this.calculateRandomCookie(this.randomCustPerHour, this.averageSalesPerHour);
    this.totalCookies = this.calculateTotalCookies(this.randomCookiePerHour);
    this.displayAll();
  },

  setMin: function(newMin) {
    this.minCustPerHour = newMin;
  },
  setMax: function(newMax) {
    this.maxCustPerHour = newMax;
  },
  setAverage : function(newAverage) {
    this.averageSalesPerHour = newAverage;
  },



};

var seatacAirport = {
  //properties
  name: 'Seatac Airport',
  nameUL: 'seatacAirportUL',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  averageSalesPerHour: 1.2,
  randomCustPerHour: [],
  randomCookiePerHour: [],
  totalCookies: 0,
  //methods
  calculateRandomCust: function(min, max) {
    var custArray = [];
    for (var i = 0; i < hoursOfOperation; i++){
      min = Math.ceil(min);
      max = Math.floor(max);
      custArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return custArray;
  },
  calculateRandomCookie: function(randomCustArray, averageCookieSales) {
    var cookieArray = [];
    for (var i = 0; i < hoursOfOperation; i++){
      cookieArray.push(Math.round(randomCustArray[i] * averageCookieSales));
    }
    return cookieArray;
  },
  calculateTotalCookies: function(randomCookieArray) {
    var total = 0;
    for (var i = 0; i < randomCookieArray.length; i++){
      total += randomCookieArray[i];
    }
    return total;
  },
  displayAll: function() {
    var displayNameUL = document.getElementById(this.nameUL);
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    displayNameUL.appendChild(h2Element);
    var pElement = document.createElement('p');
    pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageSalesPerHour;
    displayNameUL.appendChild(pElement);
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.randomCookiePerHour[i];
      displayNameUL.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookies;
    displayNameUL.appendChild(liElement);
  },
  initialize: function() {
    console.log('initialize: Min: ' + this.minCustPerHour + ', Max: ' + this.maxCustPerHour + ', Average: ' + this.averageSalesPerHour);
    this.randomCustPerHour = this.calculateRandomCust(this.minCustPerHour,this.maxCustPerHour);
    this.randomCookiePerHour = this.calculateRandomCookie(this.randomCustPerHour, this.averageSalesPerHour);
    this.totalCookies = this.calculateTotalCookies(this.randomCookiePerHour);
    this.displayAll();
  },
  setMin: function(newMin) {
    this.minCustPerHour = newMin;
  },
  setMax: function(newMax) {
    this.maxCustPerHour = newMax;
  },
  setAverage : function(newAverage) {
    this.averageSalesPerHour = newAverage;
  },
};

var seattleCenter = {
  //properties
  name: 'Seattle Center',
  nameUL: 'seattleCenterUL',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  averageSalesPerHour: 3.7,
  randomCustPerHour: [],
  randomCookiePerHour: [],
  totalCookies: 0,
  //methods
  calculateRandomCust: function(min, max) {
    var custArray = [];
    for (var i = 0; i < hoursOfOperation; i++){
      min = Math.ceil(min);
      max = Math.floor(max);
      custArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return custArray;
  },
  calculateRandomCookie: function(randomCustArray, averageCookieSales) {
    var cookieArray = [];
    for (var i = 0; i < hoursOfOperation; i++){
      cookieArray.push(Math.round(randomCustArray[i] * averageCookieSales));
    }
    return cookieArray;
  },
  calculateTotalCookies: function(randomCookieArray) {
    var total = 0;
    for (var i = 0; i < randomCookieArray.length; i++){
      total += randomCookieArray[i];
    }
    return total;
  },
  displayAll: function() {
    var displayNameUL = document.getElementById(this.nameUL);
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    displayNameUL.appendChild(h2Element);
    var pElement = document.createElement('p');
    pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageSalesPerHour;
    displayNameUL.appendChild(pElement);
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.randomCookiePerHour[i];
      displayNameUL.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookies;
    displayNameUL.appendChild(liElement);
  },
  initialize: function() {
    console.log('initialize: Min: ' + this.minCustPerHour + ', Max: ' + this.maxCustPerHour + ', Average: ' + this.averageSalesPerHour);
    this.randomCustPerHour = this.calculateRandomCust(this.minCustPerHour,this.maxCustPerHour);
    this.randomCookiePerHour = this.calculateRandomCookie(this.randomCustPerHour, this.averageSalesPerHour);
    this.totalCookies = this.calculateTotalCookies(this.randomCookiePerHour);
    this.displayAll();
  },
  setMin: function(newMin) {
    this.minCustPerHour = newMin;
  },
  setMax: function(newMax) {
    this.maxCustPerHour = newMax;
  },
  setAverage : function(newAverage) {
    this.averageSalesPerHour = newAverage;
  },
};

var capitolHill = {
  //properties
  name: 'Capitol Hill',
  nameUL: 'capitolHillUL',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  averageSalesPerHour: 2.3,
  randomCustPerHour: [],
  randomCookiePerHour: [],
  totalCookies: 0,
  //methods
  calculateRandomCust: function(min, max) {
    var custArray = [];
    for (var i = 0; i < hoursOfOperation; i++){
      min = Math.ceil(min);
      max = Math.floor(max);
      custArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return custArray;
  },
  calculateRandomCookie: function(randomCustArray, averageCookieSales) {
    var cookieArray = [];
    for (var i = 0; i < hoursOfOperation; i++){
      cookieArray.push(Math.round(randomCustArray[i] * averageCookieSales));
    }
    return cookieArray;
  },
  calculateTotalCookies: function(randomCookieArray) {
    var total = 0;
    for (var i = 0; i < randomCookieArray.length; i++){
      total += randomCookieArray[i];
    }
    return total;
  },
  displayAll: function() {
    var displayNameUL = document.getElementById(this.nameUL);
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    displayNameUL.appendChild(h2Element);
    var pElement = document.createElement('p');
    pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageSalesPerHour;
    displayNameUL.appendChild(pElement);
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.randomCookiePerHour[i];
      displayNameUL.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookies;
    displayNameUL.appendChild(liElement);
  },
  initialize: function() {
    console.log('initialize: Min: ' + this.minCustPerHour + ', Max: ' + this.maxCustPerHour + ', Average: ' + this.averageSalesPerHour);
    this.randomCustPerHour = this.calculateRandomCust(this.minCustPerHour,this.maxCustPerHour);
    this.randomCookiePerHour = this.calculateRandomCookie(this.randomCustPerHour, this.averageSalesPerHour);
    this.totalCookies = this.calculateTotalCookies(this.randomCookiePerHour);
    this.displayAll();
  },
  setMin: function(newMin) {
    this.minCustPerHour = newMin;
  },
  setMax: function(newMax) {
    this.maxCustPerHour = newMax;
  },
  setAverage : function(newAverage) {
    this.averageSalesPerHour = newAverage;
  },
};

var alki = {
  //properties
  name: 'Alki',
  nameUL: 'alkiUL',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  averageSalesPerHour: 4.6,
  randomCustPerHour: [],
  randomCookiePerHour: [],
  totalCookies: 0,
  //methods
  calculateRandomCust: function(min, max) {
    var custArray = [];
    for (var i = 0; i < hoursOfOperation; i++){
      min = Math.ceil(min);
      max = Math.floor(max);
      custArray[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return custArray;
  },
  calculateRandomCookie: function(randomCustArray, averageCookieSales) {
    var cookieArray = [];
    for (var i = 0; i < hoursOfOperation; i++){
      cookieArray.push(Math.round(randomCustArray[i] * averageCookieSales));
    }
    return cookieArray;
  },
  calculateTotalCookies: function(randomCookieArray) {
    var total = 0;
    for (var i = 0; i < randomCookieArray.length; i++){
      total += randomCookieArray[i];
    }
    return total;
  },
  displayAll: function() {
    var displayNameUL = document.getElementById(this.nameUL);
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    displayNameUL.appendChild(h2Element);
    var pElement = document.createElement('p');
    pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageSalesPerHour;
    displayNameUL.appendChild(pElement);
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.randomCookiePerHour[i];
      displayNameUL.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookies;
    displayNameUL.appendChild(liElement);
  },
  initialize: function() {
    console.log('initialize: Min: ' + this.minCustPerHour + ', Max: ' + this.maxCustPerHour + ', Average: ' + this.averageSalesPerHour);
    this.randomCustPerHour = this.calculateRandomCust(this.minCustPerHour,this.maxCustPerHour);
    this.randomCookiePerHour = this.calculateRandomCookie(this.randomCustPerHour, this.averageSalesPerHour);
    this.totalCookies = this.calculateTotalCookies(this.randomCookiePerHour);
    this.displayAll();
  },
  setMin: function(newMin) {
    this.minCustPerHour = newMin;
  },
  setMax: function(newMax) {
    this.maxCustPerHour = newMax;
  },
  setAverage : function(newAverage) {
    this.averageSalesPerHour = newAverage;
  },
};

firstAndPike.initialize();
console.log(firstAndPike);
seatacAirport.initialize();
console.log(seatacAirport);
seattleCenter.initialize();
console.log(seattleCenter);
capitolHill.initialize();
console.log(capitolHill);
alki.initialize();
console.log(alki);
