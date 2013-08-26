var cv_w = 300,
		cv_h = 300,
		cv_r = 150
		cv_color = d3.scale.category10(); 
	
	var cv_arc = d3.svg.arc().outerRadius(cv_r).innerRadius(50);
	var cv_pie = d3.layout.pie().value(function (d) { return d.value });
	var cv_svg = d3.select("#data1")
        .append("svg")
		.attr("width", cv_w)
		.attr("height", cv_h)
		.attr("style", "display:block; margin: 0 auto;")
        .append("g")
		.attr("transform", "translate(" + cv_r + "," + cv_r + ")");
			
		function cv_arcTween(a) {
			var i = d3.interpolate(this._current, a);
			this._current = i(0);
			//console.log(a);
			return function(t) {
				return cv_arc(i(t));
			};
		} 	
			
			function tests (data) {
			data = data ? data : { "slice1": Math.floor((Math.random()*10)+1), "slice2": Math.floor((Math.random()*10)+1)};
			console.log(data);
				var dataa = d3.entries(data);
				var cv_path = cv_svg.selectAll("path").data(cv_pie(dataa));
                var cv_text = cv_svg.selectAll("text").data(cv_pie(dataa));
				
				cv_path.enter()
					.append("path")
					.attr("fill", function(d, i) { return cv_color(i); } ) 
					.attr("d", cv_arc)
					.each(function(d) { this._current = d; });
                cv_text.enter()
                    .append("text")
					.attr("transform", function(d) {
						d.innerRadius = 30;
						d.outerRadius = cv_r;
						return "translate(" + cv_arc.centroid(d) + ")";
					})
					.attr("text-anchor", "middle")
					.attr("font-weight", "bold")
					.attr("fill", "#FFFFFF")
					.attr("font-size", "20px")
					.text(function(d) { return d.data.key + "(" + d.data.value + ")"; });
					
				cv_path.transition().duration(750).attrTween("d", cv_arcTween);
                cv_text.transition().duration(750).attr("transform", function(d) {
						d.innerRadius = 30;
						d.outerRadius = cv_r;
						return "translate(" + cv_arc.centroid(d) + ")";
					});
				
				cv_path.exit().remove();
                cv_text.exit().remove();
	}


//setInterval(function() { tests(); }, 2000);

/*
//another testing
// dimensions of our pie chart
var h = 500,
w = 500;

// define inner and outer radius for our chart
var oRadius = w / 2 - 100;
var iRadius = 0; // > 1 to create 'donut' chart

// arc() function helps draw SVG paths for us -- need to pass in radii
var arc = d3.svg.arc() 
.innerRadius(iRadius)
.outerRadius(oRadius);

var dataset = [123,342];
var pie = d3.layout.pie();

console.log(dataset);
console.log(pie(dataset));

var pieChart = d3.select('#data1')
.append('svg')
.attr({
	'width' : w,
	'height' : h
});

var color = d3.scale.category10();

var wedges = pieChart.selectAll('g')
				.data(pie(dataset)) // pass in our 'pie-ized' data
				.enter()
				.append('g')
				.attr({
					'class' : 'wedge',
					// we need to translate each wedge into the center
					'transform' : 'translate(' + oRadius + ', ' + oRadius + ')'
				});

	wedges.append('path')
	.attr({
		'fill' : function(d,i) {
			return color(i);
		},
			// pass in the arc generator for the 'd' attribute of the path,
			// which is the path description
			'd' : arc
		});
	
	var labels = wedges.append('text')
	.attr({
		'transform' : function(d) {
			return 'translate(' + arc.centroid(d) + ')';
		},
		'text-anchor' : 'middle'
	})
	.text(function(d){
		return d.value;
		//return 'harsh';
	});

var updatePie = function(newData) {

	wedges.data(pie(newData)) // pass in our 'pie-ized' data
	.select('path')
	.transition()
	.duration(1000)
	.attr({
		'fill' : function(d,i) {
			return color(i);
		},
		'd' : arc
	});

	//Labels
	labels.data(pie(newData))
	.transition()
	.duration(1000)
	.attr({
		'transform' : function(d) {
			return 'translate(' + arc.centroid(d) + ')';
		},
		'text-anchor' : 'middle'
	})
	.text(function(d){
		return d.value;
	});
}
*/