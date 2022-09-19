
//Get the search bars value and pass that to the API
const submitForm = (e) => {
    
     e.preventDefault();

    let searchTerm = $('#searchterm').val();

    if(searchTerm != ''){
        $('.result-wrapper').remove();
        $('.search-title').remove();
        $('.no-results').remove();
        $('.error-message').text('').removeClass('show');

        searchApi(searchTerm);
    } else {
        $('.error-message').text('Please enter a valid search term').addClass("show");
    }
}

$('#searchbar').on('submit', submitForm);
