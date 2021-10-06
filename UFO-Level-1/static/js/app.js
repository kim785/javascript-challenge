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

// Complete the event handler
function runEnter() {

    // Select the user's input date
    var inputElement = d3.select("#datetime");
    console.log(inputElement);

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue); // Correctly logs the search date
    
    // Filter the table using the input value
    var matches = tableData.filter(t => (t.datetime === inputValue));
    console.log(matches); // Correctly logs the filtered value

    // Clear up the table
    tbody.html("")

    // Now add the filtered list on the table
    if (inputValue === "") {
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
        matches.forEach(
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