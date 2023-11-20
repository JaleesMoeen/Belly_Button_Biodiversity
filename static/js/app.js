


let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"


// for drop down menu
function dropDown (){
    
    let dropDownMenu = d3.select( "#selDataset" )
    
    d3.json(url).then((data) => {
    
        console.log(data.names);


        let names = data.names;



        names.forEach((sample) => {
            dropDownMenu
                .append("option")
                .text(sample)
                .property("value", sample);
        });
        demographicTable ( names[0])


});


}



dropDown ()

//Option changed 
function optionChanged( sample_id ){

demographicTable ( sample_id)


}

function demographicTable ( sample_id){
    
    let demographic_table_data  = d3.select( "#sample-metadata" )
    
    d3.json(url).then((data) => {
    
        let metadata = data.metadata;
        let metadata_Array = metadata.filter(x => x.id == sample_id) [0];
        
        console.log(metadata_Array);

        demographic_table_data.html("") 
        
        // Prints key pair values using forEach
    Object.entries(metadata_Array).forEach(entry => {
    const [key, value] = entry;
    console.log(key, value);
 
    demographic_table_data
    .append("h5")
    .text(`${key}: ${value} `)
 
});



});


}