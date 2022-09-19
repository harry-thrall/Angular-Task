//Unused purely for testing purposes to check the function works

const submitForm = () => {

    let searchTerm = 'test';

    if(searchTerm != ''){
        console.log(searchTerm);

            var term = searchTerm;
            console.log("The received data is: " + term);
        
            $.ajax({
        
                type:"POST",
                url:("./searchapi.php"),
                dataType: "json",
                data: {'search': searchTerm},
                success: function(response){
                    let returnedData = response["items"];
                    console.log(returnedData);
                    $.each(returnedData, function(i) {
                        console.log(returnedData[i].name);
                        i++;
                      });
                },
                error: function(xhr, status, error){
                    console.log(xhr.responseText);
                }
            
            });
    }

    

}



submitForm('test');

module.exports = submitForm;
