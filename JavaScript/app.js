'use strict';

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
  }
}

var outputSeattle = [`6am: ${seattle.cookiesperhourtaketwo()} cookies`,`7am: ${seattle.cookiesperhourtaketwo()} cookies`, `8am: ${seattle.cookiesperhourtaketwo()} cookies`, `9am: ${seattle.cookiesperhourtaketwo()} cookies`, `10am: ${seattle.cookiesperhourtaketwo()} cookies`, `11am: ${seattle.cookiesperhourtaketwo()} cookies`, `12pm: ${seattle.cookiesperhourtaketwo()} cookies`, `1pm: ${seattle.cookiesperhourtaketwo()} cookies`, `2pm: ${seattle.cookiesperhourtaketwo()} cookies`, `3pm: ${seattle.cookiesperhourtaketwo()} cookies`, `4pm: ${seattle.cookiesperhourtaketwo()} cookies`, `5pm: ${seattle.cookiesperhourtaketwo()} cookies`, `6pm: ${seattle.cookiesperhourtaketwo()} cookies`, `7pm: ${seattle.cookiesperhourtaketwo()} cookies`] //array of the times and randomly generated cookie sales

var parent = document.getElementById('seattle'); //selecting the dom

var listItem = document.createElement('li'); //attempting to create list items
listItem.textContent = outputSeattle //attempting to write to the document but failing apparently

console.log(outputSeattle)

seattle.cookiesperhourtaketwo()

//var output = [];
//function addTo(){
 // for(i=6;i<)
//};
//console.log(output)

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
  }
};

var outputTokyo = [`6am: ${tokyo.cookiesPerHourTokyo()} cookies`, `7am: ${tokyo.cookiesPerHourTokyo()} cookies`, `8am: ${tokyo.cookiesPerHourTokyo()} cookies`, `9am: ${tokyo.cookiesPerHourTokyo()} cookies`, `10am: ${tokyo.cookiesPerHourTokyo()} cookies`, `11am: ${tokyo.cookiesPerHourTokyo()} cookies`, `12pm: ${tokyo.cookiesPerHourTokyo()} cookies`, `1pm: ${tokyo.cookiesPerHourTokyo()} cookies`,`2pm: ${tokyo.cookiesPerHourTokyo()} cookies`, `3pm: ${tokyo.cookiesPerHourTokyo()} cookies`, `4pm: ${tokyo.cookiesPerHourTokyo()} cookies`, `5pm: ${tokyo.cookiesPerHourTokyo()} cookies`, `6pm: ${tokyo.cookiesPerHourTokyo()} cookies`, `7pm: ${tokyo.cookiesPerHourTokyo()} cookies` ];

console.log(outputTokyo)

tokyo.cookiesPerHourTokyo()

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
    console.log(cookiesPerHourDubai);
    return cookiesPerHourDubai;
  }
};

dubai.cookiesPerHourDubai()

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
    console.log(cookiesPerHourParis);
    return cookiesPerHourParis;
  }
};

paris.cookiesPerHourParis()

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
    console.log(cookiesPerHourLima);
    return cookiesPerHourLima;
  }

};

lima.cookiesPerHourLima()

console.log('hi')


//Location	Min / Cust	Max / Cust	Avg Cookie / Sale
//Seattle	    23	              65	           6.3
//Tokyo	      3	              24	1           .2
//Dubai	      11	             38	            3.7
//Paris	       20	          38	              2.3
//Lima	       2	          16	               4.6

