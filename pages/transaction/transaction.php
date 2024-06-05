<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transaction</title>

    <link href="transaction.css" rel="stylesheet">
    <link href="../../plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../plugins/icons/font/bootstrap-icons.min.css" rel="stylesheet">
</head>

<body class="bg-light" id="page">
    <div class="container my-4">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title" id="medicine-name"></h5>
                        <p class="card-text">Price: <span id="medicine-price"></span></p>
                        <div class="d-flex justify-content-center">
                            <button id="subtract" class="btn btn-danger btn-lg btn-qty">-</button>
                            <input type="text" id="quantity" value="1" class="form-control text-center mx-2" style="width: 100px;">
                            <button id="add" class="btn btn-success btn-lg btn-qty">+</button>
                        </div>
                        <p class="card-text mt-3">Total: Php <span id="total-price"></span></p>
                        <div class="d-flex justify-content-around">
                            <button id="proceed-credit" class="btn btn-primary btn-lg">Pay with Credit</button>
                            <button id="proceed-bill" class="btn btn-secondary btn-lg">Pay with Cash</button>
                        </div>
                        <button id="cancel" class="btn btn-warning btn-lg mt-3">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="../../plugins/jquery/jquery.min.js"></script>
    <script src="../../helpers/helpers.js"></script>
    <script src="../../plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="transaction.js"></script>
    
    <script src="mock.js"></script>
</body>

</html>
