var fullname = 'Alexandre Dumas';
var obj = {
   fullname: 'Florence Nightingale',
   prop: {
      fullname: 'Nadia Comeneci',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Nadia Comeneci

var test = obj.prop.getFullname;

console.log(test()); // Alexandre Dumas


// Interestingly when I run this in node, console.log(test()) logs undefined.
// When I run it in html it logs: 'Alexandre Dumas'


//SERVER
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080
