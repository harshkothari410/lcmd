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
	//.select('path')
	.transition()
	.duration(1000)
	.attrTween("d", arcTween);
/*
	.attr({
		'fill' : function(d,i) {
			return color(i);
		},
		'd' : arc
	});
*/
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

function arcTween(a) {
	console.log(1);
  var i = d3.interpolate(this._current, a);
  	console.log(2);

  this._current = i(0);
  	console.log(2);

  return function(t) {
    return arc(i(t));
  };
}