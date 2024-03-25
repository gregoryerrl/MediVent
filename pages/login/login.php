<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="login.css" rel="stylesheet">
    <link href="../../plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../../plugins/icons/font/bootstrap-icons.min.css" rel="stylesheet">
</head>

<body class="bg-light">
    <div class="container">
        <div class="row vh-100 justify-content-center align-items-center">
            <div class="col-md-6 col-lg-4">
                <div class="login-container">
                    <div class="text-center mb-4">
                        <h3>Welcome to MediVent</h3>
                    </div>
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="inputUsername">Username</label>
                            <input type="username" id="inputUsername" class="form-control" placeholder="Enter username" required autofocus>
                        </div>
                        <div class="form-group">
                            <label for="inputPassword">Password</label>
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="../../plugins/jquery/jquery.min.js"></script>
    <script src="../../helpers/helpers.js"></script>
    <script src="../../plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../../plugins/jsQR/dist/jsQr.js"></script>
    <script src="login.js"></script>

</body>

</html>