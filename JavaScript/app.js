'use strict';
//create constructor function:
var allStores = [];
console.log(allStores);
function ShopLocation (name,minCustomer,maxCustomer,avgCookiePerSale){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiePerSale = avgCookiePerSale;
  this.hourlyTotals = [];
  allStores.push(this);
}

//Location	Min / Cust	Max / Cust	Avg Cookie / Sale
//Seattle	    23	              65	           6.3
//Tokyo	      3	              24	1           .2
//Dubai	      11	             38	            3.7
//Paris	       20	          38	              2.3
//Lima	       2	          16	               4.6



var seattleShop = new ShopLocation('Seattle',23,65,6.3);

var tokyoShop = new ShopLocation('Tokyo',3,24,1.2);

var dubaiShop = new ShopLocation('Dubai', 11,38,3.7);

var parisShop = new ShopLocation('Paris',20,38,2.3);

var limaShop = new ShopLocation('Lima',2,16,4.6);



ShopLocation.prototype.generateCustomerNumber = function(){
  return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
};

ShopLocation.prototype.cookiesPerHour = function() {
  var cookiesPerHour = this.generateCustomerNumber() * this.avgCookiePerSale;
  cookiesPerHour = Math.floor(cookiesPerHour);
  // console.log(cookiesPerHour);
  return cookiesPerHour;
};

ShopLocation.prototype.cookiesPerday = function(){
  var cookieHour = [];
  var sum = 0;

  for(var i=0;i<13;i++){
    var hourSale = this.cookiesPerHour();
    cookieHour.push(hourSale);
    sum += hourSale;
  }

  cookieHour.push(sum);
  return cookieHour;
};

//failed attempt at calculating the hourly totals
/*
ShopLocation.prototype.calcHourlyTotals = function() {
  for(var i = 0; i < 14; i++){
    var hourlytotals = [];
    hourlytotals.push(this.hourlyTotals[0][i]);
    console.log(hourlytotals);
  }
};
*/

ShopLocation.prototype.render = function(){
  //create row for seattle shop output
  var output = this.cookiesPerday();
  //console.log(output);
  this.hourlyTotals.push(output);
  var tableRow = document.createElement('tr');
  var parentElement = document.getElementById('table');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = this.name;
  tableRow.appendChild(tableHeader);
  for(var i=0;i<output.length;i++){
    var tableData = document.createElement('td'); //creating the element
    tableData.textContent = output[i];
    //giving the new element content
    tableRow.appendChild(tableData);
  }


  //append to parent element
  parentElement.appendChild(tableRow);
  return output;
};


var storeHours = ['6am: ','7am: ','8am: ', '10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm ','7pm: ', 'total'];

//console.log(seattleShop.cookiesPerday())
//console.log(storeHours);

function headerRender() {


  var parentElement = document.getElementById('table');

  var tableRow = document.createElement('tr');

  var tableHeader = document.createElement('th');
  tableHeader.textContent = '';
  tableRow.appendChild(tableHeader);

  for(var i = 0 ; i<storeHours.length; i++){
    var tableheader = document.createElement('th');
    tableheader.textContent = storeHours[i];
    tableRow.appendChild(tableheader);
  }

  parentElement.appendChild(tableRow); //render shop hours as a table header
}

headerRender();

function allRender() {
  seattleShop.render();
  tokyoShop.render();
  dubaiShop.render();
  parisShop.render();
  limaShop.render();

}

allRender();

//need to push form info to new location array

var form = document.getElementById('form');

//get from element

//set up event listener

form.addEventListener('submit', handleFormSubmit);

//set up even handler

function handleFormSubmit(event){
  event.preventDefault();

  var name =  event.target.city.value;
  var minCustomer = parseInt(event.target.minCustomer.value);
  var maxCustomer = parseInt(event.target.maxCustomer.value);
  var avgCookiePerSale = parseInt(event.target.cookiesPerSale.value);

  var newStore = new ShopLocation(name,minCustomer,maxCustomer,avgCookiePerSale);
  newStore.render();
}




//lena coda review
//HOW DO I FIX THIS
function renderFooterRow(){
  var bottomRow = [];
  //access my cookies sold each hour
  for(var i=0;i<storeHours.length;i++){
    var sum = 0;
    for(var j = 0;j<allStores.length;j++){
    // console.log(allStores[i].hourlyTotals[0][j]);
      sum += allStores[j].hourlyTotals[0][i];
      
    }
    bottomRow.push(sum);
    
  } console.log(bottomRow);

  var parentElement = document.getElementById('table');

  var tableRow = document.createElement('tr');

  var tableFooter = document.createElement('th');
  tableFooter.textContent = '';
  tableRow.appendChild(tableFooter);

  for(var k = 0 ; k<storeHours.length; k++){
    var tablefooter = document.createElement('th');
    tablefooter.textContent = bottomRow[k];
    tableRow.appendChild(tablefooter);
  }

  parentElement.appendChild(tableRow); //render shop hours as a table header
}

renderFooterRow();
















