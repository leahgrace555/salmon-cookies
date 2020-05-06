'use strict';
/*
var seattle = {
  minCustomer: 23 ,
  maxCustomer: 65 ,
  avgCookiePerSale: 6.3,
  randomCustomerNumber: function(minCustomer,maxCustomer){
    minCustomer = Math.ceil(minCustomer);
    maxCustomer = Math.floor(maxCustomer);
    return Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer;
  }, //generates a random number of customers per hour based on the given minimum and maximum values above
   
  cookiesperhourtaketwo: function(){
    var cookiesPerHourSeattle = seattle.randomCustomerNumber(this.minCustomer,this.maxCustomer) * this.avgCookiePerSale;
    //console.log(cookiesPerHourSeattle); 
    return cookiesPerHourSeattle //calculates the amount of cookies sold per hour based on the random number of customers generated and the cookies per sale from the given info
  },
  cookiesPerDay: function(){
    var cookieHour = []
    var sum = 0
    for(var i=0;i<14;i++){
      cookieHour.push(this.cookiesperhourtaketwo());
      sum += this.cookiesperhourtaketwo();
    }
    cookieHour.push(sum);
    return cookieHour;
  },
  render: function(){
    var parent = document.getElementById('seattle');
    var array = this.cookiesPerDay();
    var hour = ['6am: ','7am: ','8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ','6pm: ','7pm: ', 'Total: '];
    for(var i = 0;i<15;i++){
      var listItem = document.createElement('li');
      listItem.textContent = hour[i] + array[i] + ' cookies';
      parent.appendChild(listItem);
    }
  }
}

console.log(seattle.cookiesPerDay());

seattle.cookiesperhourtaketwo()
seattle.render()



var tokyo = {
  minCustomer: 3 ,
  maxCustomer: 21 ,
  avgCookiePerSale: 1.3,
  randomCustomerNumber: function(minCustomer,maxCustomer){
    minCustomer = Math.ceil(minCustomer);
    maxCustomer = Math.floor(maxCustomer);
    return Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer;
  },
  cookiesPerHourTokyo: function(){
    var cookiesPerHourTokyo = this.randomCustomerNumber(this.minCustomer,this.maxCustomer) * this.avgCookiePerSale;
    //console.log(cookiesPerHourTokyo);
    return cookiesPerHourTokyo;
  },
  cookiesPerDay: function(){
    var cookieHour = []
    var sum = 0
    for(var i=0;i<14;i++){
      cookieHour.push(this.cookiesPerHourTokyo());
      sum += this.cookiesPerHourTokyo();
    }
    cookieHour.push(sum);
    return cookieHour;
  },
  render: function(){
    var parent = document.getElementById('tokyo');
    var array = this.cookiesPerDay();
    var hour = ['6am: ','7am: ','8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ','6pm: ','7pm: ', 'Total: '];
    for(var i = 0;i<15;i++){
      var listItem = document.createElement('li');
      listItem.textContent = hour[i] + array[i] + ' cookies';
      parent.appendChild(listItem);
    }
  }
};


tokyo.cookiesPerHourTokyo()
tokyo.render()

var dubai = {
  minCustomer: 11 ,
  maxCustomer: 38 ,
  avgCookiePerSale: 3.7,
  randomCustomerNumber: function(minCustomer,maxCustomer){
    minCustomer = Math.ceil(minCustomer);
    maxCustomer = Math.floor(maxCustomer);
    return Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer;
  },
  cookiesPerHourDubai: function() {
    var cookiesPerHourDubai = this.randomCustomerNumber(this.minCustomer,this.maxCustomer) * this.avgCookiePerSale;
    //console.log(cookiesPerHourDubai);
    return cookiesPerHourDubai;
  },
  cookiesPerDay: function(){
    var cookieHour = []
    var sum = 0
    for(var i=0;i<14;i++){
      cookieHour.push(this.cookiesPerHourDubai());
      sum += this.cookiesPerHourDubai();
    }
    cookieHour.push(sum);
    return cookieHour;
  },
  render: function(){
    var parent = document.getElementById('dubai');
    var array = this.cookiesPerDay();
    var hour = ['6am: ','7am: ','8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ','6pm: ','7pm: ', 'Total: '];
    for(var i = 0;i<15;i++){
      var listItem = document.createElement('li');
      listItem.textContent = hour[i] + array[i] + ' cookies';
      parent.appendChild(listItem);
    }
  }
};


dubai.cookiesPerHourDubai()
dubai.render()

var paris = {
  minCustomer: 20 ,
  maxCustomer: 38 ,
  avgCookiePerSale: 2.3,
  randomCustomerNumber: function(minCustomer,maxCustomer){
    minCustomer = Math.ceil(minCustomer);
    maxCustomer = Math.floor(maxCustomer);
    return Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer;
  },
  cookiesPerHourParis: function() {
    var cookiesPerHourParis = this.randomCustomerNumber(this.minCustomer,this.maxCustomer) * this.avgCookiePerSale;
    //console.log(cookiesPerHourParis);
    return cookiesPerHourParis;
  },
  cookiesPerDay: function(){
    var cookieHour = []
    var sum = 0
    for(var i=0;i<14;i++){
      cookieHour.push(this.cookiesPerHourParis());
      sum += this.cookiesPerHourParis();
    }
    cookieHour.push(sum);
    return cookieHour;
  },
  render: function(){
    var parent = document.getElementById('paris');
    var array = this.cookiesPerDay();
    var hour = ['6am: ','7am: ','8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ','6pm: ','7pm: ', 'Total: '];
    for(var i = 0;i<15;i++){
      var listItem = document.createElement('li');
      listItem.textContent = hour[i] + array[i] + ' cookies';
      parent.appendChild(listItem);
    }
  }
};


paris.cookiesPerHourParis()
paris.render()

var lima = {
  minCustomer: 2 ,
  maxCustomer: 16 ,
  avgCookiePerSale: 4.6,
  randomCustomerNumber: function(minCustomer,maxCustomer){
    minCustomer = Math.ceil(minCustomer);
    maxCustomer = Math.floor(maxCustomer);
    return Math.floor(Math.random() * (maxCustomer - minCustomer + 1)) + minCustomer;
  },
  cookiesPerHourLima: function() {
    var cookiesPerHourLima = this.randomCustomerNumber(this.minCustomer,this.maxCustomer) * this.avgCookiePerSale;
    //console.log(cookiesPerHourLima);
    return cookiesPerHourLima;
  },
  cookiesPerDay: function(){
    var cookieHour = []
    var sum = 0
    for(var i=0;i<14;i++){
      cookieHour.push(this.cookiesPerHourLima());
      sum += this.cookiesPerHourLima();
    }
    cookieHour.push(sum);
    return cookieHour;
  },
  render: function(){
    var parent = document.getElementById('lima');
    var array = this.cookiesPerDay();
    var hour = ['6am: ','7am: ','8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ','2pm: ','3pm: ','4pm: ', '5pm: ','6pm: ','7pm: ', 'Total: '];
    for(var i = 0;i<15;i++){
      var listItem = document.createElement('li');
      listItem.textContent = hour[i] + array[i] + ' cookies';
      parent.appendChild(listItem);
    }
  }

};

lima.cookiesPerHourLima();
lima.render();
console.log('hi');

*/

//create constructor function: 

function ShopLocation (name,minCustomer,maxCustomer,avgCookiePerSale){
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

var test = new ShopLocation('test',3,7,2.3);
//console.log(test);

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
  var cookieHour = []
  var sum = 0

  for(var i=0;i<13;i++){
    var hourSale = this.cookiesPerHour()
    cookieHour.push(hourSale);
    sum += hourSale;
  }

  cookieHour.push(sum);
  return cookieHour;
};

var storeHours = ['6am: ','7am: ','8am: ', '10am: ','11am: ','12pm: ','1pm: ','2pm: ','3pm: ','4pm: ','5pm: ','6pm ','7pm: ', 'total'];

//console.log(seattleShop.cookiesPerday())
//console.log(storeHours);

var parentElement = document.getElementById('table');

var tableRow = document.createElement('tr');

for(var i = 0 ; i<storeHours.length; i++){
  var tableheader = document.createElement('th');
  tableheader.textContent = storeHours[i];
  tableRow.appendChild(tableheader);
}

parentElement.appendChild(tableRow) //render shop hours as a table header


//create row for seattle shop output
var seattleOutput = seattleShop.cookiesPerday()

tableRow = document.createElement('tr');

for(var i=0;i<seattleOutput.length;i++){
  var tableData = document.createElement('td'); //creating the element
  tableData.textContent = seattleOutput[i];
  //giving the new element content
  tableRow.appendChild(tableData);
};

//append to parent element
parentElement.appendChild(tableRow);

//create row for tokyo shop
var tokyoOutput = tokyoShop.cookiesPerday()

tableRow = document.createElement('tr');

for(var i=0;i<tokyoOutput.length;i++){
  var tableData = document.createElement('td'); //creating the element
  tableData.textContent = tokyoOutput[i];
  //giving the new element content
  tableRow.appendChild(tableData);
};

//append to parent element
parentElement.appendChild(tableRow);

//create for for dubai shop:

var dubaiOutput = dubaiShop.cookiesPerday()

tableRow = document.createElement('tr');

for(var i=0;i<dubaiOutput.length;i++){
  var tableData = document.createElement('td'); //creating the element
  tableData.textContent = dubaiOutput[i];
  //giving the new element content
  tableRow.appendChild(tableData);
};

//append to parent element
parentElement.appendChild(tableRow);

//paris

var parisOutput = parisShop.cookiesPerday()

tableRow = document.createElement('tr');

for(var i=0;i<parisOutput.length;i++){
  var tableData = document.createElement('td'); //creating the element
  tableData.textContent = parisOutput[i];
  //giving the new element content
  tableRow.appendChild(tableData);
};

//append to parent element
parentElement.appendChild(tableRow);

var limaOutput = limaShop.cookiesPerday()

tableRow = document.createElement('tr');

for(var i=0;i<limaOutput.length;i++){
  var tableData = document.createElement('td'); //creating the element
  tableData.textContent = limaOutput[i];
  //giving the new element content
  tableRow.appendChild(tableData);
};

//append to parent element
parentElement.appendChild(tableRow);



//Not sure why the following did not work...

/*
ShopLocation.prototype.render = function() {
  var parentElement = document.getElementById('table');

  var tableRow = document.createElement('tr');

  var output = this.cookiesPerday();
  console.log(output)
for(var i = 0; i<output.length; i++){
  tableRow = document.createElement('td');
  tableData.textContent = output[i];
  tableRow.appendChild(tableData);
}
 parentElement.appendChild(tableRow)
}

*/
//parisShop.render()
//console.log(parisShop.render())


//for reference
/*
<table>
      <tbody id = 'table'>
        
      </tbody>
    </table>
*/















