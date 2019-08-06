var react = require ("./rectangle")
 function reactFunction(a,b){
     console.log("We will count add and mul operation soon for a = " + a + " and b = "+ b)
     react(a,b, (err, rectangle) =>{
         if(err){
             console.log("Error "+err)
         }
         else{
             console.log("Addition of two number is "+ rectangle.add())
             console.log("Multiplication of two numbers is "+ rectangle.mul())
         }
     })
     console.log("will load after 2 sec interval")
 }
 reactFunction(101,10);