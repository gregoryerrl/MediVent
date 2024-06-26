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
        <div class="row vh-100 justify-content-center pt-5">
            <div class="col">
                <div class="login-container">
                    <div class="text-center mb-4">
                        <h3>Login</h3>
                    </div>
                    <form id="loginForm">
                        <div id="error-message" class="text-danger mb-3" style="display: none;"></div> <!-- Error message container -->
                        <div class="form-group">
                            <label for="inputUsername">Username</label>
                            <input type="text" id="inputUsername" class="form-control" placeholder="Enter username" required autofocus>
                        </div>
                        <div class="form-group mb-5">
                            <label for="inputPassword">Password</label>
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                        </div>
                    </form>
                    
                    <a href="../../pages/register/register.php" type="button" class="btn btn-primary btn-custom mt-4">Register</a>
                </div>
            </div>
        </div>
    </div>

    <script src="../../plugins/jquery/jquery.min.js"></script>
    <script src="../../helpers/helpers.js"></script>
    <script src="../../plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="login.js"></script>
</body>

</html>
