<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>

    <link href="plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="plugins/icons/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="index.css" rel="stylesheet">
</head>

<body id="page">

    <div class="container d-flex justify-content-center flex-column">
                <h1 id="title">MediVent</h1>
        <div class="d-flex align-items-center justify-content-between px-5">
                <!-- Purchase a Medicine button -->
                <a href="pages/medicine_list/medicine_list.php" type="button" class="btn btn-success btn-custom">Purchase a Medicine</a>
                <!-- Vending Machine Image -->
            <img src="assets/images/vendingmachine.png" alt="Vending Machine" class="vending-machine img-fluid" />
                <!-- Beneficiary Login button -->
                <a href="pages/login/login.php" type="button" class="btn btn-primary btn-custom">Beneficiary Login</a>
        </div>
    </div>

        <script src="plugins/jquery/jquery.min.js"></script>
        <script src="plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="index.js"></script>
        <script src="plugins/jsQR/dist/jsQR.js"></script>
</body>

</html>