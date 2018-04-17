$(document).ready(function(){


// Written to cause pause/play button icon to change when clicked, pause counter. 
// Uses the startCounting and stopCounting functions

var paused = false;

$('.pp-button').click(function(){
    if(paused){
        $('#pause').css('display', 'none');
        $('.play').css('display', 'inline-block');
        startCounting();
        paused = false;
    }else {
        $('#pause').css('display', 'inline-block');
        $('.play').css('display', 'none');
        stopCounting();
        paused = true;
    }
});


// startCounting, stopCounting, and count functions

var totalSeconds = 0;
var intervalID;
var seconds = 0;
var minutes = 0;
var hours = 0;
var countAway = true;


// Function to start playing the counter when the page loads 

startCounting();


    function startCounting(){
            intervalID = setInterval(count, 1000);
    }

    function stopCounting(){
        clearInterval(intervalID);
    }
    
    function count(){
        if(countAway){
            var theValue = slider.value;
            theValue = parseInt(theValue);
            slider.value = (theValue+1);
            $('#sliderValue').text(slider.value);
            formatSeconds(slider.value);
            
            // DRAW MAP HERE 
            
            drawLine(theValue+1);
        }
    }


// Slider that can be used to adjust the time in the chase

var slider = document.getElementById("myRange");

var value = 0;

slider.oninput = function(){
    value = this.value;
    value = parseInt(value);
    var thing = value;
    formatSeconds(thing);
    drawLine(thing);
    //$('#sliderValue').text(thing);
};


// Function that formats the total number of seconds into a time format for the clock

var subtract = 0;

function formatSeconds(input){
    var total = input;
    var seconds = total % 60;
    var minutes = total / 60;
    var hours = total / 3600;
    hours = Math.floor(hours);
    minutes = Math.floor(minutes);

        // Check to see length of minutes
        if(minutes < 10){
            $('#minutes').text("0"+minutes+":");
        }else {
            $('#minutes').text(minutes+":");
        }

        // Check to see length of seconds
        if(seconds < 10){
            $('#seconds').text("0"+seconds);
        }else {
            $('#seconds').text(seconds);
        }

        if(hours < 1){
            $('#hours').text("00:");
        }
        else if(hours < 10){
            $('#hours').text("0"+hours+":");
        }else {
            $('#hours').text(hours+":");
        }
}


// d3 data in array of objects 

var line1 = [{"x": 0, "y": 10}, { "x": 10,   "y": 10},  { "x": 60,  "y": 20},
             { "x": 30,  "y": 100}, { "x": 40,  "y": 40},
             { "x": 50,  "y": 50},  { "x": 100, "y": 60}, {"x": 70, "y": 70}, 
             {"x": 80, "y": 80}, {"x": 90, "y": 90}, {"x": 100, "y": 180}, 
             {"x": 110, "y": 110}, {"x": 120, "y": 60}, {"x": 130, "y": 130}, 
             {"x": 230, "y": 150}, {"x": 260, "y": 180}, {"x": 280, "y": 200},
             {"x": 300, "y": 180}, {"x": 340, "y": 230}, {"x": 320, "y": 200},
             {"x": 140, "y": 190}, {"x": 300, "y": 250}, {"x": 320, "y": 260},
             {"x": 320, "y": 300}, {"x": 200, "y": 250}, {"x": 230, "y": 180}];


// d3 drawing function

function drawLine(input){


    // Remove the existing svgs 

    var s = d3.selectAll('svg');
        s = s.remove();

    var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("linear");


    var svgContainer = d3.select(".vector-container").append("svg")
                         .attr("width", 500)
                         .attr("height", 500);


    // Drawing the line with the sub-array                 

    var theInput = input;
    //var arrayLength = line1.length;
    //console.log(line1.slice(0, theInput));
    arrayDraw = line1.slice(0, theInput);

    svgContainer.append("path")
        .attr("d", lineFunction(arrayDraw))
        .attr("stroke", "#ed4047")
        .attr("stroke-width", 2.5)
        .attr("fill", "none");
}



// Makes the pause and play button fade in and out when clicked

function fadeBack(){
    console.log('fadeback');
    $('.pp-button').css('opacity', '1');
}

$('.pp-button').click(function(){

    $(this).css('opacity', '0.5');
    setTimeout(fadeBack, 175);
});





});


/*function holdIt(){
    countAway = false;
    console.log('holding it');
}

function goAhead(){
    countAway = true;
    console.log('play away!');
}*/
