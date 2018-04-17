$(document).ready(function(){
    
	console.log('Worked');

    var seconds = 0;
    var counter = 0;
    var intervalID;
    var minutes = 0;
    var hours = 0;

    function count(){
        seconds = seconds +1;
        console.log(seconds + " Seconds");
        updateClock();
    }

    function startCounting(){
        intervalID = setInterval(count, 1000);
    }

    function stopCounting(){
        clearInterval(intervalID);
    }


    $('.button').click(function(){
        startCounting();
    });

    $('.stop-button').click(function(){
        stopCounting();
    });




    function updateClock(){
        var remainder;
        var divided = (seconds%60);
        console.log("Modulus: " + divided);
        if(divided == 0){
            minutes = minutes+1;
            if(minutes < 10){
                $('#minutes').text("0"+minutes+":");
            }else {
                $('#minutes').text(minutes+":");
            }
            seconds = 0;
        }
        if(seconds < 10){
                $('#seconds').text("0"+seconds);
            }else {
                $('#seconds').text(seconds);
            }

        if(minutes == 60){
            hours = hours +1;
            if(hours < 10){
                $('#hours').text("0"+hours+":");
            }else {
                $('#hours').text(hours+":");
            }
            minutes = 0;
        }

    }




var slider = document.getElementById("myRange");

slider.oninput = function() {
    var content = this.value;
    var secondsInt = parseInt(content);
    $('#sliderValue').text(secondsInt);
    /*seconds = content*2;*/
    seconds = content;
    updateClock();
}



});