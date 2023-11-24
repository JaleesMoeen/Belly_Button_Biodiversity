let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// No. 1 Defines the function to create the Dashboard activities
function initDashboard() {
    
    var dropdown = d3.select("#selDataset")
    
    d3.json(url).then(data => {

        var patientIDs = data.names;
        patientIDs.forEach(patientID => {
            dropdown.append("option").text(patientID).property("value", patientID)
        });
        // Calling the function to populate Demographic Info
        populateDemoInfo(patientIDs[0]);
    });
}

// Callling the function for Dashboard
initDashboard();



// No. 2 Defines he function to populate Demographic Info
function populateDemoInfo(patientID){
    var demographicInfoBox = d3.select("#sample-metadata");

    d3.json(url).then(data =>{
        var metadata = data.metadata
        var filteredMetadata = metadata.filter( bacteriaInfo => bacteriaInfo.id == patientID)[0]
        console.log(filteredMetadata)
    
    // Clear the previous data
    demographicInfoBox.html("");
     Object.entries(filteredMetadata).forEach(([key, value]) => {
        demographicInfoBox.append("p").text(`${key}: ${value}`)
    })
});
}



// No. 3 Defines the function for OptionChaged 
function optionChanged(patientID) {
    console.log(patientID);
    // buildBarChart(patientID);
    // buildBubbleChart(patientID);
    // buildGuageChart(patientID);

    populateDemoInfo(patientID);
}
