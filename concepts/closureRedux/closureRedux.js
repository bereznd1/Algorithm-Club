// Type:   < node closureRedux > to start server 

//For more information go to: https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8




function createCounter() {
    let counter = 0
    const myFunction = function() {
         counter = counter + 1
         return counter
       }
       return myFunction
    }
   const increment = createCounter()
   const c1 = increment()
   const c2 = increment()
   const c3 = increment()
   
   console.log('example increment', c1, c2, c3)  // 1,2,3


  //  Lines 1–8. We create a new variable createCounter in the global execution context and it get’s assigned function definition. Same as above.
  //  Line 9. We declare a new variable named increment in the global execution context. Same as above.
  //  Line 9 again. We need call the createCounter function and assign its returned value to the increment variable. Same as above.
  //  Lines 1–8 . Calling the function. Creating new local execution context. Same as above.
  //  Line 2. Within the local execution context, declare a new variable named counter. Number 0 is assigned to counter. Same as above.
  //  Line 3–6. Declaring new variable named myFunction. The variable is declared in the local execution context. The content of the variable is yet another function definition. As defined in lines 4 and 5. Now we also create a closure and include it as part of the function definition. The closure contains the variables that are in scope, in this case the variable counter (with the value of 0).
  //  Line 7. Returning the content of the myFunction variable. Local execution context is deleted. myFunction and counter no longer exist. Control is returned to the calling context. So we are returning the function definition and its closure, the backpack with the variables that were in scope when it was created.
  //  Line 9. In the calling context, the global execution context, the value returned by createCounter is assigned to increment. The variable increment now contains a function definition (and closure). The function definition that was returned by createCounter. It is no longer labeled myFunction, but it is the same definition. Within the global context, it is called increment.
  //  Line 10. Declare a new variable (c1).
  //  Line 10 (continued). Look up the variable increment, it’s a function, call it. It contains the function definition returned from earlier, as defined in lines 4–5. (and it also has a backpack with variables)
  //  Create a new execution context. There are no parameters. Start execution the function.
  //  Line 4. counter = counter + 1. We need to look for the variable counter. Before we look in the local or global execution context, let’s look in our backpack. Let’s check the closure. Lo and behold, the closure contains a variable named counter, its value is 0. After the expression on line 4, its value is set to 1. And it is stored in the backpack again. The closure now contains the variable counter with a value of 1.
  //  Line 5. We return the content of counter, or the number 1. We destroy the local execution context.
  //  Back to line 10. The returned value (1) gets assigned to c1.
  //  Line 11. We repeat steps 10–14. This time, when we look at our closure, we see that the counter variable has a value of 1. It was set in step 12 or line 4 of the program. Its value gets incremented and stored as 2 in the closure of the increment function. And c2 gets assigned 2.
  //  Line 12. We repeat steps 10–14, c3 gets assigned 3.
  //  Line 13. We log the content of variables c1, c2 and c3.



  // SERVER
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080



