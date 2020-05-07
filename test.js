/*

//create row for seattle shop output
var seattleOutput = seattleShop.cookiesPerday();

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
var tokyoOutput = tokyoShop.cookiesPerday();

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

var dubaiOutput = dubaiShop.cookiesPerday();

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

var parisOutput = parisShop.cookiesPerday();

tableRow = document.createElement('tr');

for(var i=0;i<parisOutput.length;i++){
  var tableData = document.createElement('td'); //creating the element
  tableData.textContent = parisOutput[i];
  //giving the new element content
  tableRow.appendChild(tableData);
};

//append to parent element
parentElement.appendChild(tableRow);

var limaOutput = limaShop.cookiesPerday();

tableRow = document.createElement('tr');

for(var j=0;j<limaOutput.length;j++){
  var tableData = document.createElement('td'); //creating the element
  tableData.textContent = limaOutput[j];
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


//LENA"S CODE
//outer loop is for every hour
//inner loop: add each cookie sales at the hour

// forms

//constructor function:
//name
//story
//global array to store all object instances

//how to listen for when the form is submitted...
//function will be "handler"
//hander gets all info from the form
//use to make new objec instance
///////////////////

var allPeople = [];

function Person(name,story,freeTime){
  this.name=name;
  this.story = story;
  this.freeTime = freeTime;
  allPeople.push(this);
}

//create a listener
//select the element to listen on
//add listener to form (and add id to form)

var form = document.getElementById('form');

//set up event handler
function handleFormSubmit(event){
  event.preventDefault();

  var name = event.target.name.value;

  new Person(name);
}

//set up event listener
//elementtolisten.addEventListener('event,callbackFunction)

form.addEventListener('submit', handleFormSubmit);

