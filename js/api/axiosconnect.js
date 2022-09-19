//Unused for demonstration purposes only

const axios = require('axios');

const key = 'VcbJ6hpHa12in3O3In9H32LOpnGcZzJd7345Vmxk';

let connectAPI = () => {

    let config = {
        headers: {
            'Content-Type': 'application/json',
            "X-API-Key": key,
        }
    }

    //create global key
    axios.defaults.headers.common = {
        "X-API-Key": key,
      };

    //connect to API and console log response
    axios.get('https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber=10241297', '', config)
    .then((response) => {
        console.log(response.data);   
    }
    )
    .catch(error => console.log(error.message));

}

connectAPI();

module.exports = connectAPI;