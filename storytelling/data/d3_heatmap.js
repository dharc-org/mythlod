  // set the dimensions and margins of the graph
  var margin = {top: 5, right: 25, bottom: 30, left: 100},
    width = 500 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
  var svg = d3version4.select("#heatmap")
  .append("svg")
  .attr("viewBox", `0 0 500 500`)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
  
  
  //Read the data
  d3version4.csv("data/cit_density.csv", function(data) {
  
    // Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
    var myGroups = d3version4.map(data, function(d){return d.group;}).keys()
    var myVars = d3version4.map(data, function(d){return d.variable;}).keys()
  
    // Build X scales and axis:
    var x = d3version4.scaleBand()
      .range([ 0, width ])
      .domain(myGroups)
      .padding(0.05);
    svg.append("g")
      .style("font-size", 10)
      .attr("transform", "translate(0," + height + ")")
      .call(d3version4.axisBottom(x).tickSize(0))
      .select(".domain").remove()
  
    // Build Y scales and axis:
    var y = d3version4.scaleBand()
      .range([ height, 0 ])
      .domain(myVars)
      .padding(0.05);
    svg.append("g")
      .style("font-size", 10)
      .call(d3version4.axisLeft(y).tickSize(0))
      .select(".domain").remove()
  
    // Build color scale
    var myColor = d3version4.scaleSequential()
      .interpolator(d3version4.interpolatePuBuGn)
      .domain([1,700])
  
    // create a tooltip
    var tooltip = d3version4.select("#heatmap")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("max-width", "10rem")
      .style("position", "absolute")
    .style("z-index", "10")
    .text("a simple tooltip");
  
    // Three function that change the tooltip when user hover / move / leave a cell
    var mouseover = function(d) {
      tooltip
        .style("opacity", 1)
      d3version4.select(this)
        .style("stroke", "black")
        .style("opacity", 1)
    }
    var mousemove = function(d) {
      tooltip
        .html("Aeneis lines " + d.variable + " of book " + d.group + ' has been cited in mythLOD dataset ' + d.value + " times, <br> representing the categories " + d.categories.split('@'))
        .style("left", (d3version4.mouse(this)[0]+50) + "px")
        .style("top", (d3version4.mouse(this)[1]-250) + "px")
        .style("font-size", "0.8rem")

    }
    var mouseleave = function(d) {
      tooltip
        .style("opacity", 0)
      d3version4.select(this)
        .style("stroke", "none")
        .style("opacity", 0.8)
    }
  
    // add the squares
    svg.selectAll()
      .data(data, function(d) {return d.group+':'})
      .enter()
      .append("rect")
        .attr("x", function(d) { return x(d.group) })
        .attr("y", function(d) { return y(d.variable) })
        .attr("rx", 4)
        .attr("ry", 4)
        .attr("width", x.bandwidth() )
        .attr("height", y.bandwidth() )
        .style("fill", function(d) { return myColor(d.value)} )
        .style("stroke-width", 4)
        .style("stroke", "none")
        .style("opacity", 0.8)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
  })
  
  // Add title to graph
  svg.append("text")
          .attr("x", 0)
          .attr("y", -50)
          .attr("text-anchor", "left")
          .style("font-size", "0.7rem")
          //.text("Aeneis citation distribution")
          ;
  
  // Add subtitle to graph
  svg.append("text")
          .attr("x", 0)
          .attr("y", 0)
          .attr("text-anchor", "left")
          .style("font-size", "1rem")
          .style("fill", "grey")
          .text("");
  