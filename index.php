<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

    <script src="node_modules/jquery/dist/jquery.min.js"></script>
 
    <title>RiskNarrative</title>
</head>


<body>
    <div class="fold1-wrapper">
        <form action="#" id="searchbar" data-testid="form">
            <input type="text" placeholder="Company Name or Number" id="searchterm">
            <button type="submit">Search</button>
        </form>
        <p class="error-message"></p>
        <div class="spinner-border" role="status">
</div>
    </div>

    <div class="search-results">
</div>

  <!-- Modal -->
<div class="modal fade" id="officersModal" tabindex="-1" role="dialog" aria-labelledby="officersModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <div class="modal-header">
        <h5 class="modal-title" id="officersModalLabel">BBC Limited - Officers</h5>
        <p class="modal-subtitle">Company number - </p>
      </div>
      <div class="modal-body">
        <p class="modal-error"></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>  

  <!-- Modal -->
  <div class="modal fade" id="companyModal" tabindex="-1" role="dialog" aria-labelledby="companyModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <div class="modal-header">
        <h5 class="modal-title" id="companyModalLabel">BBC Limited - Officers</h5>
        <p class="modal-subtitle">Company number - </p>
      </div>
      <div class="modal-body">
        <p class="modal-error"></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>  

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>
</body>

<script src="./js/getofficers.js"></script>
<script src="./js/api/searchapi.js"></script>
<script src="./js/searchsubmit.js"></script>


</html>