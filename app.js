'use strict';
var hours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM'];

var firstAndPike = {
  //properties
  name: 'First and Pike',
  nameUL: '',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  averageCookiesPerCust: 6.3,
  randomCustPerHour: [],
  randomCookiePerHour: [],
  totalCookies: 0,
  //methods
  calculateRandomCust: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    }
    return;
  },
  calculateRandomCookie: function() {
    this.calculateRandomCust();
    for (var i = 0; i < hours.length; i++){
      this.randomCookiePerHour.push(Math.ceil(this.randomCustPerHour[i] * this.averageCookiesPerCust));
    }
    return;
  },
  calculateTotalCookies: function() {
    this.calculateRandomCookie();
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      this.totalCookies += this.randomCookiePerHour[i];
    }
    return;
  },
  displayAll: function() {
    this.calculateTotalCookies();
    this.nameUL = this.name.replace(/\s/g,'') + 'UL';
    console.log(this);
    var displayNameUL = document.getElementById(this.nameUL);
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    displayNameUL.appendChild(h2Element);
    var pElement = document.createElement('p');
    pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageCookiesPerCust;
    displayNameUL.appendChild(pElement);
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.randomCookiePerHour[i] + ' cookies';
      displayNameUL.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookies + ' cookies';
    displayNameUL.appendChild(liElement);
  },
  setMin: function(newMin) {
    this.minCustPerHour = newMin;
  },
  setMax: function(newMax) {
    this.maxCustPerHour = newMax;
  },
  setAverage : function(newAverage) {
    this.averageCookiesPerCust = newAverage;
  },
};
var seatacAirport = {
  //properties
  name: 'Seatac Airport',
  nameUL: '',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  averageCookiesPerCust: 1.2,
  randomCustPerHour: [],
  randomCookiePerHour: [],
  totalCookies: 0,
  //methods
  calculateRandomCust: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    }
    return;
  },
  calculateRandomCookie: function() {
    this.calculateRandomCust();
    for (var i = 0; i < hours.length; i++){
      this.randomCookiePerHour.push(Math.ceil(this.randomCustPerHour[i] * this.averageCookiesPerCust));
    }
    return;
  },
  calculateTotalCookies: function() {
    this.calculateRandomCookie();
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      this.totalCookies += this.randomCookiePerHour[i];
    }
    return;
  },
  displayAll: function() {
    this.calculateTotalCookies();
    this.nameUL = this.name.replace(/\s/g,'') + 'UL';
    console.log(this);
    var displayNameUL = document.getElementById(this.nameUL);
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    displayNameUL.appendChild(h2Element);
    var pElement = document.createElement('p');
    pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageCookiesPerCust;
    displayNameUL.appendChild(pElement);
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.randomCookiePerHour[i] + ' cookies';
      displayNameUL.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookies + ' cookies';
    displayNameUL.appendChild(liElement);
  },
  setMin: function(newMin) {
    this.minCustPerHour = newMin;
  },
  setMax: function(newMax) {
    this.maxCustPerHour = newMax;
  },
  setAverage : function(newAverage) {
    this.averageCookiesPerCust = newAverage;
  },
};
var seattleCenter = {
  //properties
  name: 'Seattle Center',
  nameUL: '',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  averageCookiesPerCust: 3.7,
  randomCustPerHour: [],
  randomCookiePerHour: [],
  totalCookies: 0,
  //methods
  calculateRandomCust: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    }
    return;
  },
  calculateRandomCookie: function() {
    this.calculateRandomCust();
    for (var i = 0; i < hours.length; i++){
      this.randomCookiePerHour.push(Math.ceil(this.randomCustPerHour[i] * this.averageCookiesPerCust));
    }
    return;
  },
  calculateTotalCookies: function() {
    this.calculateRandomCookie();
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      this.totalCookies += this.randomCookiePerHour[i];
    }
    return;
  },
  displayAll: function() {
    this.calculateTotalCookies();
    this.nameUL = this.name.replace(/\s/g,'') + 'UL';
    console.log(this);
    var displayNameUL = document.getElementById(this.nameUL);
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    displayNameUL.appendChild(h2Element);
    var pElement = document.createElement('p');
    pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageCookiesPerCust;
    displayNameUL.appendChild(pElement);
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.randomCookiePerHour[i] + ' cookies';
      displayNameUL.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookies + ' cookies';
    displayNameUL.appendChild(liElement);
  },
  setMin: function(newMin) {
    this.minCustPerHour = newMin;
  },
  setMax: function(newMax) {
    this.maxCustPerHour = newMax;
  },
  setAverage : function(newAverage) {
    this.averageCookiesPerCust = newAverage;
  },
};

var capitolHill = {
  //properties
  name: 'Capitol Hill',
  nameUL: '',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  averageCookiesPerCust: 2.3,
  randomCustPerHour: [],
  randomCookiePerHour: [],
  totalCookies: 0,
  //methods
  calculateRandomCust: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    }
    return;
  },
  calculateRandomCookie: function() {
    this.calculateRandomCust();
    for (var i = 0; i < hours.length; i++){
      this.randomCookiePerHour.push(Math.ceil(this.randomCustPerHour[i] * this.averageCookiesPerCust));
    }
    return;
  },
  calculateTotalCookies: function() {
    this.calculateRandomCookie();
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      this.totalCookies += this.randomCookiePerHour[i];
    }
    return;
  },
  displayAll: function() {
    this.calculateTotalCookies();
    this.nameUL = this.name.replace(/\s/g,'') + 'UL';
    console.log(this);
    var displayNameUL = document.getElementById(this.nameUL);
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    displayNameUL.appendChild(h2Element);
    var pElement = document.createElement('p');
    pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageCookiesPerCust;
    displayNameUL.appendChild(pElement);
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.randomCookiePerHour[i] + ' cookies';
      displayNameUL.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookies + ' cookies';
    displayNameUL.appendChild(liElement);
  },
  setMin: function(newMin) {
    this.minCustPerHour = newMin;
  },
  setMax: function(newMax) {
    this.maxCustPerHour = newMax;
  },
  setAverage : function(newAverage) {
    this.averageCookiesPerCust = newAverage;
  },
};

var alki = {
  //properties
  name: 'Alki',
  nameUL: '',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  averageCookiesPerCust: 4.6,
  randomCustPerHour: [],
  randomCookiePerHour: [],
  totalCookies: 0,
  //methods
  calculateRandomCust: function() {
    for (var i = 0; i < hours.length; i++){
      this.randomCustPerHour[i] = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour;
    }
    return;
  },
  calculateRandomCookie: function() {
    this.calculateRandomCust();
    for (var i = 0; i < hours.length; i++){
      this.randomCookiePerHour.push(Math.ceil(this.randomCustPerHour[i] * this.averageCookiesPerCust));
    }
    return;
  },
  calculateTotalCookies: function() {
    this.calculateRandomCookie();
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      this.totalCookies += this.randomCookiePerHour[i];
    }
    return;
  },
  displayAll: function() {
    this.calculateTotalCookies();
    this.nameUL = this.name.replace(/\s/g,'') + 'UL';
    console.log(this);
    var displayNameUL = document.getElementById(this.nameUL);
    var h2Element = document.createElement('h2');
    h2Element.textContent = this.name;
    displayNameUL.appendChild(h2Element);
    var pElement = document.createElement('p');
    pElement.textContent = 'Customer Data: Minimum:' + this.minCustPerHour + '/Maximum:' + this.maxCustPerHour + '/Average:' + this.averageCookiesPerCust;
    displayNameUL.appendChild(pElement);
    for (var i = 0; i < this.randomCookiePerHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = hours[i] + ': ' + this.randomCookiePerHour[i] + ' cookies';
      displayNameUL.appendChild(liElement);
    }
    liElement = document.createElement('li');
    liElement.textContent = 'Total: ' + this.totalCookies + ' cookies';
    displayNameUL.appendChild(liElement);
  },
  setMin: function(newMin) {
    this.minCustPerHour = newMin;
  },
  setMax: function(newMax) {
    this.maxCustPerHour = newMax;
  },
  setAverage : function(newAverage) {
    this.averageCookiesPerCust = newAverage;
  },
};

firstAndPike.displayAll();
seatacAirport.displayAll();
seattleCenter.displayAll();
capitolHill.displayAll();
alki.displayAll();
