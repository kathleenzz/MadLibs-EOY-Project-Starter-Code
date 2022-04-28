let storiesCreated;
$(".submit").click(function(){
    let questionOne = $(".name-input").val();
    console.log(`q1: ${questionOne}`);
    
    let questionTwo = $(".transport-input").val();
    console.log(`q2: ${questionTwo}`);
    
    let questionThree = $(".adjective-input").val();
    console.log(`q3: ${questionThree}`);

	let questionFour = $(".number-input").val();
    console.log(`q3: ${questionFour}`);

    
    let calculation = (365 * questionThree) * (2050 - 2024);
    let img = "https://media.giphy.com/media/5aY6weoALCAu1qHXpq/giphy.gif";
    
    $(".story").append("One day my friend " + questionOne +" and I decided to take a trip to the beach, so we packed our bags and took" +questionTwo +" It was a " + questionThree + "day at the beach!  We ended up staying for " + questionFour + " hours!" );
  
});