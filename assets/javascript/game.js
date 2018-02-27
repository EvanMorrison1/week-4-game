    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    $( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
   
    // Appending random number to the randomNumber id in the html doc
    $('#randomNumber').text(Random);

    // Setting up random numbers for each jewel
    // Random number has to be between 1 - 12
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    //Declare variables for scores
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    //resets the game
    function reset(){
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userTotal= 0;
    $('#finalTotal').text(userTotal);
    } 
    //adds the wins to the userTotal
    function win(){
    alert("You won!");
      wins++; 
      $('#numberWins').text(wins);
      reset();
    }

    //addes the losses to the userTotal
    function lose(){
    alert ("You lose!");
      losses++;
      $('#numberLosses').text(losses);
      reset()
    }

    //sets up click for carbiners
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }
  });   
}); 