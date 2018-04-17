$(document).ready(function(){

var totalSeconds = 0;

/*    
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

*/

    /*var seconds = 0;
    var counter = 0;
    var intervalID;
    var minutes = 0;
    var hours = 0;*/

var totalSeconds = 0;

    
    function count(){
        //totalSeconds = totalSeconds +1;
        //console.log(totalSeconds + " Seconds");
        //formatSeconds(totalSeconds);
        //var theValue = slider.value;
        //console.log('Slider value: ' + theValue);
        //$('#sliderValue').text(theValue);
        var theValue = slider.value;
        theValue = parseInt(theValue);
        console.log(theValue);
        slider.value = (theValue+1);
        console.log('Slider value: ' + theValue);
        $('#sliderValue').text(slider.value);
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



function formatSeconds(input){
    //console.log("some stuff "+ input);
    var total = input;
    var seconds = total % 60;
    var minutes = input / 60;
    minutes = Math.floor(minutes);
    console.log('Total Minutes: ' + minutes + ' Total Seconds: ' + seconds);
}

//formatSeconds(458);

var slider = document.getElementById("myRange");

/*var last = 0;
slider.oninput = function() {
    var content = this.value;
    var secondsInt = parseInt(content);
    secondsInt = secondsInt - last;
    console.log('secondsInt '+ secondsInt);
    totalSeconds = totalSeconds+secondsInt;
    //formatSeconds(totalSeconds + secondsInt);
    $('#sliderValue').text(secondsInt);
    last = secondsInt;
    console.log('last '+ last);
}*/

var value = 0;

slider.oninput = function(){
    value = this.value;
    value = parseInt(value);
    var thing = value;
    console.log(thing);
    formatSeconds(thing);
    $('#sliderValue').text(thing);
};


/*
$('.add-button').click(function(){
    var theValue = slider.value;
    theValue = parseInt(theValue);
    console.log(theValue);
    slider.value = (theValue+1);
    console.log('Slider value: ' + theValue);
    $('#sliderValue').text(slider.value);
});*/



});