<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    
    <link href="medicine_list.css" rel="stylesheet">
    <link href="../../plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../plugins/icons/font/bootstrap-icons.min.css" rel="stylesheet">
</head>

<body class="bg-light" id="page">
<div class="container my-4">
    <div class="row">
      <div class="col-12 d-flex justify-content-end">
        <a href="../login/login.php" type="button" class="btn btn-primary btn-login">Beneficiary Login</a>
      </div>
      <div class="col-12">
        <div class="search-bar-container">
          <input type="text" class="search-bar form-control" placeholder="🔍 Search for medicine...">
        </div>
      </div>
      <div class="col-md-3 col-sm-6 mb-4 medicine_list">
      </div>
      <!-- Repeat the above col-md-3 block for each medicine item -->
      <!-- ... -->
    </div>
  </div>
            
        <script src="../../plugins/jquery/jquery.min.js"></script>
        <script src="../../helpers/helpers.js"></script>
        <script src="../../plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="medicine_list.js"></script>
</body>

</html>