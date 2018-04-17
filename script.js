$(document).ready(function(){
    
	console.log('Worked');

	var change = false;
	var choice;

	var lineData = [{ "x": 100,   "y": 50},  { "x": 120,  "y": 70},
                 { "x": 140,  "y": 90}, { "x": 180,  "y": 110},
                 { "x": 220,  "y": 130},  { "x": 240, "y": 150}, {"x": 200, "y": 170}, 
                 {"x": 170, "y": 200}, {"x": 200, "y": 250}, {"x": 270, "y": 100}, 
                 {"x": 270, "y": 300}, {"x": 370, "y": 280}, {"x": 170, "y": 450}];


	function drawIt(){

		var s = d3.selectAll('svg');
    	s = s.remove();



    var lineFunction = d3.svg.line()
                         .x(function(d) { return d.x; })
                         .y(function(d) { return d.y; })
                         .interpolate("basis");


    var svgContainer = d3.select(".main").append("svg")
                         .attr("width", 500)
                         .attr("height", 500);

    //The line SVG Path we draw
	var lineGraph = svgContainer.append("path")
                        .attr("d", lineFunction(lineData))
                        .attr("stroke", "red")
                        .attr("stroke-width", 4)
                        .attr("fill", "none");

     }




    setInterval(drawIt, 1000);

    /*

	var svgContainer = d3.select(".main").append("svg")
                                  .attr("width", 500)
                                  .attr("height", 500);

	var scale = d3.scaleLinear()
					.domain([1,20])
					.range([4, 496]);


	var s = d3.selectAll('svg');
    s = s.remove();


    d3.select(".graph").append("svg")
              .attr("width", 800)
              .attr("height", 444.44);

    var lineGenerator = d3.line().curve(d3.curveBasis);

    var pathString = lineGenerator(data);


    d3.select('svg').append("path");

	*/


});