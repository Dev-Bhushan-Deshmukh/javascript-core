// function scope(){
// console.log(b);
// function innerScope(){
//     console.log(b)
// }
// innerScope()

// }
// var b=10;
// scope();

// function scope(){
//     var b=10;
    
//     function innerScope(){
//         console.log(b)
//     }
//     innerScope()
    
//     }
 
//     scope();
//     console.log(b);

var b=10;
    function scope(){
        // var b=10;
        
        function innerScope(){
            console.log(b)
        }
        innerScope()
        
        }
     
        scope();