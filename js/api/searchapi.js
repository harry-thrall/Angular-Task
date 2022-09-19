const searchApi = (searchTerm) => {

    var term = searchTerm;

    //replace HTML characters with their string version
    term = term.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    //Send search term to search api
    //store the JSON response and load the results
    $.ajax({

        type:"POST",
        url:("./searchapi.php"),
        dataType: "json",
        data: {'search': searchTerm},
        success: function(response){
            let returnedData = response["items"];
            loadResults(returnedData);
        },
        error: function(xhr, status, error){
            $('.error-message').text("There has been an error, please try another search").addClass("show");
        }
    
    });
}

//Display Bootstrap spinner and wait 4 seconds before showing search results
function loadResults(results){
    $('.spinner-border').addClass('active');
    setTimeout(() => {
        $('.spinner-border').removeClass('active');
        displayResults(results);
    }, 4000);

}

//Create a list of the search results
const displayResults = (results) => {
    let htmlTitle = "<h2 class='search-title'>Search Results</h2>";

    $('.search-results').append(htmlTitle);

    //check if the search returned some data
    if(!results) {
        let html = "<div class='no-results'>" +
                    "<p class='results-error'>Sorry there were no companies found. Please try a different term.</p>" +
                    "</div>";
        $('.search-results').append(html);
    } else {

        //Create the HTML for each search result
        $.each(results, function(i) {
            let html = "<div class='result-wrapper'>" +
                        "<a href='#' class='companyData' data-id='" + results[i].company_number + "' data-company='" + results[i].title  +"' data-pos='"+ [i] + "'>" + results[i].title + "</a>" + 
                        "<p class='result-desc'>" + results[i].description +"</p>" +
                        "<p class='result-address'>" + results[i].address_snippet +"</p>"+    
                        "</div>";
            $('.search-results').append(html);
          });    
     
          //When a company name is clicked display their info in a Bootstrap modal
          $(document).on('click', '.companyData', function (e) {
            e.preventDefault();
            $('.company-wrapper').remove();
            let companyPos = $(this).attr("data-pos");
    
            let selectedCompany = results[companyPos];
    
            let title = selectedCompany.title;
            $('#companyModal .modal-title').text(title);
        
            let number = selectedCompany.company_number;
            $('#companyModal .modal-subtitle').html("Company Number - <span>" + number + "</span>");
        
                    var dateEst = selectedCompany.date_of_creation.split("-")
                    dateEst = new Date(dateEst[2], dateEst[1] - 1, dateEst[0])
                    dateOptions = {day:'numeric', month:'long', year:'numeric' }
                
                let html = "<div class='company-wrapper'>" +
                            "<div class='company-item'>"+
                            "<p class='company-title'>Registered office address</p>" +
                            "<p class='company-info'>" + selectedCompany.address_snippet + "</p>"+
                            "</div>"+
                            "<div class='company-item'>"+
                            "<p class='company-title'>Company status</p>" +
                            "<p class='company-info'>" + selectedCompany.company_status + "</p>"+
                            "</div>"+
                            "<div class='company-item'>"+
                            "<p class='company-title'>Company type</p>" +
                            "<p class='company-info'>" + selectedCompany.company_type + "</p>"+
                            "</div>"+
                            "<div class='company-item'>"+
                            "<p class='company-title'>Incorporated on</p>" +
                            "<p class='company-info'>" + dateEst.toLocaleDateString("en-GB", dateOptions) + "</p>"+
                            "<a href='' class='officersData' data-id='" + selectedCompany.company_number + "' data-company='" + title +"'> View list of officers</a>" +
                            "</div>"+
                            "</div>"
        
                 $('#companyModal .modal-body').append(html);
            
            $("#companyModal").modal('show');
        
        });

    }
    
}


//export load results function for testing
module.exports = loadResults;