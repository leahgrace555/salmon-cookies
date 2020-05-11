
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

lima.cookiesPerHourLima()
lima.render()
console.log('hi')
