'use strict';


//create constructor function: 

function shopLocation (name,minCustomer,maxCustomer,avgCookiePerSale){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiePerSale = avgCookiePerSale;
  
};

//Location	Min / Cust	Max / Cust	Avg Cookie / Sale
//Seattle	    23	              65	           6.3
//Tokyo	      3	              24	1           .2
//Dubai	      11	             38	            3.7
//Paris	       20	          38	              2.3
//Lima	       2	          16	               4.6

var test = new shopLocation('test',3,7,2.3);
//console.log(test);

var seattleShop = new shopLocation('Seattle',23,65,6.3);

var tokyoShop = new shopLocation('Tokyo',3,24,1.2);

var dubaiShop = new shopLocation('Dubai', 11,38,3.7);

var parisShop = new shopLocation('Paris',20,38,2.3);

var limaShop = new shopLocation('Lima',2,16,4.6);



shopLocation.prototype.generateCustomerNumber = function(){
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
};

shopLocation.prototype.cookiesPerHour = function() {
  var cookiesPerHour = this.generateCustomerNumber() * this.avgCookiePerSale;
 // console.log(cookiesPerHour);
  return cookiesPerHour;
};

shopLocation.prototype.cookiesPerday = function(){
  var cookieHour = []
  var sum = 0

  for(var i=0;i<14;i++){
    var hourSale = this.cookiesPerHour()
    cookieHour.push(hourSale);
    sum += hourSale;
  }

  cookieHour.push(sum);
  return cookieHour;
};

var storeHours = ['6am: ','7am: ','8am: ', '10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm ','7pm: '];

var testhours = ['6am']

//console.log(storeHours);

var parentElement = document.getElementById('table');

var tableRow = document.createElement('tr');

for(var i = 0 ; i<testhours.length; i++){
  var tableheader = document.createElement('th');
  tableheader.textContent = testhours [i];
  tableRow.appendChild(tableheader);
}
















