// REPEATS A CODE FOR A LIMITED AMOUNT OF TIM

//for(let i=10; i >= 0; i--){
    //console.log(i);
//}
//console.log("HAPPY NEW YEAR");

//continue and break//

//for(i=1; i<=20; i++){
    
    //if(i == 10){
        //continue;
    //}

    //else{
        //console.log(i);
    //}
//}


//for(i=1; i<=20; i++){
    
    //if(i == 10){
        //break;
    //}

    //else{
        //console.log(i);
    //}
//}

const range = document.getElementById("range");
const SUB = document.getElementById("SUB");
const NEXT = document.getElementById("NEXT");

const minNUM = 1;
const maxNUM = 100;
const answer = Math.floor(Math.random() * (maxNUM - minNUM +1)) + minNUM;
console.log(answer);

let attempts =0;
let guess;

SUB.onclick = function(){
    guess = range.value;
    guess = Number(guess);

    if (isNaN(guess)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          position: 'top-end',
          timer:'2000',
          timerProgressBar:true,
          text: 'This is not a number🙅🏻‍♀️🙅🏻‍♀️.',
          toast:true,
        });

        return;
      }
      
    
   else if(guess<1 || guess>100){
    Swal.fire({
        icon: 'error',
        title: 'Mitchewwww',
        position: 'top-end',
          timer:'2000',
          timerProgressBar:true,
        text: 'I said from 1---100 genius🙅🏻‍♀️🙅🏻‍♀️.',
        toast:true,
    
      });

      return;
   }

   else{
    attempts++
   }


   if(guess<answer){
    Swal.fire({
        icon: 'error',
        title: 'CLOSE!',
        position: 'top-end',
          timer:'2000',
          timerProgressBar:true,
        text: 'TOO LOW!🙅🏻‍♀️🙅🏻‍♀️.',
        toast:true,
    
      });
    
   }

   else if(guess>answer){
    Swal.fire({
        icon: 'error',
        title: 'CLOSE',
        position: 'top-end',
          timer:'2000',
          timerProgressBar:true,
        text: 'TOO HIGH!!🙅🏻‍♀️🙅🏻‍♀️.',
        toast:true,
    
      });
   }


   else{
    Swal.fire({
        icon: 'success',
        title: 'Correct🎊',
        text: `WELL YOU FINALLY GOT IT RIGHT🎊,THE ANSWER was ${answer} AND IT TOOK YOU ${attempts} attempts`,
        showConfirmedButton:true

      });



   }









































































































































}






































