function calculateCOCOMO() {
  var kloc = parseFloat(document.getElementById("KDSI").value);
  var rely = parseFloat(document.getElementById("rely").value);
  var data = parseFloat(document.getElementById("data").value);
  var cplx = parseFloat(document.getElementById("cplx").value);
  
  var developmentMode = document.getElementById("developmentMode").value;
  
  // Basic COCOMO II formula for effort calculation
  var effort = Math.pow(kloc, 1.05) * rely * data * cplx;
  
  // Basic COCOMO II formula for cost calculation
  var cost;
  switch (developmentMode) {
    case "organic":
      cost = 2.4 * Math.pow(effort, 1.05);
      break;
    case "semidetached":
      cost = 3.0 * Math.pow(effort, 1.12);
      break;
    case "embedded":
      cost = 3.6 * Math.pow(effort, 1.20);
      break;
    default:
      cost = 0;
  }
  
  // Display the results
  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "<h3>Results</h3>" +
    "<p>Effort: " + effort.toFixed(2) + " person-months</p>" +
    "<p>Cost: $" + cost.toFixed(2) + " USD</p>";
}
