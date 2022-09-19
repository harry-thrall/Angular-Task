<?php 

if (isset($_POST['search'])) {
    $data = $_POST['search'];
    $data = preg_replace('/[^A-Za-z0-9\-]/', '', $data);
} else {
    $data = 'BBC';
}

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Search?Query=' .$data,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'x-api-key: VcbJ6hpHa12in3O3In9H32LOpnGcZzJd7345Vmxk'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

?>