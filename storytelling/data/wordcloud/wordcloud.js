function WordCloud(options) {
  var margin = {top: 70, right: 100, bottom: 0, left: 100},
           w = 800 - margin.left - margin.right,
           h = 400 - margin.top - margin.bottom;

  // create the svg
  var svg = d3version4.select(options.container).append("svg")
            .attr("viewBox", `0 30 600 400`)


  // set the ranges for the scales
  var xScale = d3version4.scaleLinear().range([10, 100]);

  var focus = svg.append('g')
                 .attr("transform", "translate(" + [w/2, h/2+margin.top] + ")")

  var colorMap = ["#67a9cf","#014636"];

  // seeded random number generator
  var arng = new alea('hello.');

  var data;
  d3version4.json(options.data, function(error, d) {
    if (error) throw error;
    data = d;
    var word_entries = d3version4.entries(data['count']);
    xScale.domain(d3version4.extent(word_entries, function(d) {return d.value;}));

    makeCloud();

    function makeCloud() {
      d3version4.layout.cloud().size([w, h])
               .timeInterval(20)
               .words(word_entries)
               .fontSize(function(d) { return xScale(+d.value); })
               .text(function(d) { return d.key; })
               .font("Trebuchet MS")
               .random(arng)
               .on("end", function(output) {
                 // sometimes the word cloud can't fit all the words- then redraw
                 // https://github.com/jasondavies/d3version4-cloud/issues/36
                 if (word_entries.length !== output.length) {
                   console.log("not all words included- recreating");
                   makeCloud();
                   return undefined;
                 } else { draw(output); }
               })
               .start();
    }

    d3version4.layout.cloud().stop();

  });

  function draw(words) {
    focus.selectAll("text")
         .data(words)
         .enter().append("text")
         .style("font-size", function(d) { return xScale(d.value) + "px"; })
         .style("font-family", "Trebuchet MS")
         .style("fill", function(d, i) { return colorMap[~~(arng() *2)]; })
         .attr("text-anchor", "middle")
         .attr("transform", function(d) {
           return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
         })
         .text(function(d) { return d.key; })
         .on('mouseover', handleMouseOver)
         .on('mouseout', handleMouseOut);
  }

  function handleMouseOver(d) {
    var group = focus.append('g')
                     .attr('id', 'story-titles');
     var base = d.y - d.size;

    group.selectAll('text')
         .data(d.key)
         .enter().append('text')
         .attr('x', d.x)
         .attr('y', base)
         .attr('text-anchor', 'middle')
         .text(d.key + ', ' + d.value + ' occurrences');

    var bbox = group.node().getBBox();
    var bboxPadding = 10;

    // place a white background to see text more clearly
    var rect = group.insert('rect', ':first-child')
                  .attr('x', bbox.x)
                  .attr('y', bbox.y)
                  .attr('width', bbox.width + bboxPadding)
                  .attr('height', bbox.height + bboxPadding)
                  .attr('rx', 10)
                  .attr('ry', 10)
                  .attr('class', 'label-background-strong');
  }

  function handleMouseOut(d) {
    d3version4.select('#story-titles').remove();
  }
}