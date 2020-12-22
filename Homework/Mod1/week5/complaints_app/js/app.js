$(() => {

    // Variables //
    let myUrl = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency_name=NYPD&borough=';
    let boroughs = ["BROOKLYN", "MANHATTAN", "QUEENS", "STATEN ISLAND", "BRONX"];
    let clickedBTN;
    let filledInUrl

    
    
    
    
    // Click event handler //
    $('.btn').on('click', (event) => {
        event.preventDefault(); // Page wont refresh
        // local variables //
        clickedBTN = event.currentTarget.value; // Accesses the value of the clicked button
        filledInUrl = `${myUrl}${clickedBTN}` // finished endpoint
        let numComplaints = $("#num-complaints").val();
        console.log(numComplaints);
        console.log(clickedBTN)
        // console.log(filledInUrl)

        // Toggles the table when a button is clicked //
        $('.tm-responsive-table').slideToggle(600)


        $.ajax({
            url: filledInUrl,
            type:"GET",
            data: {
                "$limit" : numComplaints || 10
            }
        }).then((data) => {

            

            for (let i = 0; i < data.length ; i++) {

                // Data Variables //
                var complaint = data[i].descriptor;
                var response = data[i].resolution_description;
                var agency = data[i].agency_name;
                var borough = data[i].borough;
                console.log(complaint);
                console.log(agency)
                console.log(response);
                // Data Variables End //

                // Interact with table element to 
                // fill in different columns with 
                // 311 API data saved in variables
                // each iteration is a new row
                
                $('#borough-col').text(borough).css({
                    'color': 'black',
                })

                $('#complaint-col').text(complaint).css({
                    'color': 'black',
                })

                $('#agency-col').text(agency).css({
                    'color': 'black',
                })

                }

                $('#response-col-btn').on('click', (event) => {
                    alert(response);
                })
        
        })





    });


})