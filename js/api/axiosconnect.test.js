//Test for axios connection

const axios = require('axios');
jest.mock('axios');

test('Successfully connected to API', () =>{

    
const key = 'VcbJ6hpHa12in3O3In9H32LOpnGcZzJd7345Vmxk';

    //if connected use this as the response
    const mockedResponse = {data: {name:'harry', company:'TruNarrative'}}
    
    axios.get.mockResolvedValue(mockedResponse);
    
const app = require('./axiosconnect.js');

let config = {
    headers: {
        'Content-Type': 'application/json',
        "X-API-Key": key,
    }
}


    app.connectAPI;

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith('https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber=10241297', '', config);



});