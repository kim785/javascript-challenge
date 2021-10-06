// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// LEVEL 1: Automatic Table
// Loop through the data to append the table on the web page
tableData.forEach(
    function(sightings) {

        // Use d3 to append one table row "tr"
        var row = tbody.append("tr");

        // Use "Object.entries" to append values
        Object.entries(sightings).forEach(
            function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            }
        );
    }
);

//tbody.html("");
// Filtering
// Select the button and form
var button = d3.select("#filter-btn");
var form = d3.select("#filters")
button.on("click", runEnter);
form.on("submit", preventSubmit);

// Set a preventSubmit function
function preventSubmit() {
    d3.event.preventDefault();
}

// Complete the runEnter function
function runEnter() {

    // Select the user's inputs
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the value property of the input elements
    var valueDate = inputDate.property("value");
    var valueCity = inputCity.property("value");
    var valueState = inputState.property("value");
    var valueCountry = inputCountry.property("value");
    var valueShape = inputShape.property("value");

    // Filter the table using the input values
    var filters = tableData.filter(t => (t.datetime === valueDate) ||
        (t.city === valueCity) ||
        (t.state === valueState) ||
        (t.country === valueCountry) ||
        (t.shape === valueShape));
    console.log(filters);

    // Clear up the table
    tbody.html("");

    // Now add the filtered list on the table
    if (filters === "") {
        tableData.forEach(
            function(sightings) {
                var row = tbody.append("tr");
                Object.entries(sightings).forEach(
                    function([key, value]) {
                        var cell = row.append("td");
                        cell.text(value);
                    }
                );
            }
        );
        
    }

    else {
        filters.forEach(
            function(sightings) {
                var row = tbody.append("tr");
                Object.entries(sightings).forEach(
                    function([key, value]) {
                        var cell = row.append("td");
                        cell.text(value);
                    }
                );
            }
        );
    }

};