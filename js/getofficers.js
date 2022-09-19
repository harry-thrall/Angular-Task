const getData = (data_id, company) => {
 
    //Send a post request to get the list of officers at the company
    $.ajax({

        type:"POST",
        url:("./officersapi.php"),
        dataType: "json",
        data: {'dataid': data_id},
        success: function(response){
            let returnedData = response["items"];

            createModal(returnedData, data_id, company);
            
        },
        error: function(xhr, status, error){
            $('.modal-error').text("There has been an error, please try again").addClass("show");
        }
    
    });

}

//Populate the officers modal with the results
const createModal = (results, data_id, company) => {

    let title = company;
    $('#officersModal .modal-title').text(title + " - Officers");

    let number = data_id;
    $('#officersModal .modal-subtitle').html("Company Number - <span>" + number + "</span>");

    $.each(results, function(i) {

        
        $("#companyModal").modal('hide');

        //Parse returned name - remove comma and reverse so it shows first then surname
        let officer = results[i].name;
        officer = officer.replace(/,/g, "");
        officer = officer.split(" ").reverse().join(" ");
        officer = officer.toLowerCase();
        
        let html = "<div class='officers-wrapper'>" +
                    "<p class='officer-title'>" + officer + "</p>" +
                    "<p class='officer-role'>" + results[i].officer_role + "</p>"
                    "</div>"

         $('#officersModal .modal-body').append(html);
      });
    
    $("#officersModal").modal('show');
}

//When the show officers button is clicked, reset the current modal and display the new one
$(document).on('click', '.officersData', function (e) {
    e.preventDefault();
    data_id = $(this).attr("data-id");
    company = $(this).attr("data-company");
    $('.officers-wrapper').remove();
    $('.modal-error').text('');
    getData(data_id, company);
});
