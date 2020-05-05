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



//var outputSeattle = [`6am: ${seattle.cookiesperhourtaketwo()} cookies`,`7am: ${seattle.cookiesperhourtaketwo()} cookies`, `8am: ${seattle.cookiesperhourtaketwo()} cookies`, `9am: ${seattle.cookiesperhourtaketwo()} cookies`, `10am: ${seattle.cookiesperhourtaketwo()} cookies`, `11am: ${seattle.cookiesperhourtaketwo()} cookies`, `12pm: ${seattle.cookiesperhourtaketwo()} cookies`, `1pm: ${seattle.cookiesperhourtaketwo()} cookies`, `2pm: ${seattle.cookiesperhourtaketwo()} cookies`, `3pm: ${seattle.cookiesperhourtaketwo()} cookies`, `4pm: ${seattle.cookiesperhourtaketwo()} cookies`, `5pm: ${seattle.cookiesperhourtaketwo()} cookies`, `6pm: ${seattle.cookiesperhourtaketwo()} cookies`, `7pm: ${seattle.cookiesperhourtaketwo()} cookies`] //array of the times and randomly generated cookie sales

//var content = document.getElementById('seattle'); //selecting the dom

//var listItem = document.createElement('li'); //attempting to create list items
//listItem.textContent = outputSeattle //attempting to write to the document but failing apparently


//console.log(outputSeattle)

seattle.cookiesperhourtaketwo()
seattle.render()

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
    //console.log(cookiesPerHourDubai);
    return cookiesPerHourDubai;
  }
};

var outputDubai = [`6am: ${dubai.cookiesPerHourDubai()} cookies`, `7am: ${dubai.cookiesPerHourDubai()} cookies`, `8am: ${dubai.cookiesPerHourDubai()} cookies`, `9am: ${dubai.cookiesPerHourDubai()} cookies`, `10am: ${dubai.cookiesPerHourDubai()} cookies`, `11am: ${dubai.cookiesPerHourDubai()} cookies`, `12pm: ${dubai.cookiesPerHourDubai()} cookies`, `1pm: `, `2pm: ${dubai.cookiesPerHourDubai()} cookies`, `3pm: ${dubai.cookiesPerHourDubai()} cookies`, `4pm: ${dubai.cookiesPerHourDubai()} cookies`, `5pm: ${dubai.cookiesPerHourDubai()} cookies`, `6pm: ${dubai.cookiesPerHourDubai()} cookies`, `7pm: ${dubai.cookiesPerHourDubai()} cookies`]
console.log(outputDubai)
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
    //console.log(cookiesPerHourParis);
    return cookiesPerHourParis;
  }
};

var outputParis = [`6am: ${paris.cookiesPerHourParis()} cookies`, `7am: ${paris.cookiesPerHourParis()} cookies`, `8am: ${paris.cookiesPerHourParis()} cookies`, `9am: ${paris.cookiesPerHourParis()} cookies`, `10am: ${paris.cookiesPerHourParis()} cookies`, `11am: ${paris.cookiesPerHourParis()} cookies`, `12pm: ${paris.cookiesPerHourParis()} cookies`, `1pm: ${paris.cookiesPerHourParis()} cookies`, `2pm: ${paris.cookiesPerHourParis()} cookies`, `3pm: ${paris.cookiesPerHourParis()} cookies`, `4pm: ${paris.cookiesPerHourParis()} cookies`, `5pm: ${paris.cookiesPerHourParis()} cookies`, `6pm: ${paris.cookiesPerHourParis()} cookies`,'7pm: ${paris.cookiesPerHourParis()} cookies']
console.log(outputParis)
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
    //console.log(cookiesPerHourLima);
    return cookiesPerHourLima;
  }

};

var outputLima = [`6am: ${lima.cookiesPerHourLima()} cookies`, `7am: ${lima.cookiesPerHourLima()} cookies`, `8am: ${lima.cookiesPerHourLima()} cookies`,`9am: ${lima.cookiesPerHourLima()} cookies`,`10am: ${lima.cookiesPerHourLima()} cookies`,`11am: ${lima.cookiesPerHourLima()} cookies`, `12am: ${lima.cookiesPerHourLima()} cookies`, `1pm: ${lima.cookiesPerHourLima()} cookies`,`2pm: ${lima.cookiesPerHourLima()} cookies`, `3pm: ${lima.cookiesPerHourLima()} cookies`, `4pm: ${lima.cookiesPerHourLima()} cookies`, `5pm: ${lima.cookiesPerHourLima()} cookies`, `6pm: ${lima.cookiesPerHourLima()} cookies`, `7pm: ${lima.cookiesPerHourLima()} cookies`]
console.log(outputLima)
lima.cookiesPerHourLima()

console.log('hi')


//Location	Min / Cust	Max / Cust	Avg Cookie / Sale
//Seattle	    23	              65	           6.3
//Tokyo	      3	              24	1           .2
//Dubai	      11	             38	            3.7
//Paris	       20	          38	              2.3
//Lima	       2	          16	               4.6

