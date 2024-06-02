<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link href="../../plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="register.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container">
        <div class="row vh-100 justify-content-center pt-5">
            <div class="col">
                <div class="register-container">
                    <div class="text-center mb-4">
                        <h3>Register</h3>
                    </div>
                    <form id="registerForm">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" id="username" class="form-control" placeholder="Enter username" required autofocus>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" class="form-control" placeholder="Enter password" required>
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" class="form-control" placeholder="Confirm password" required>
                        </div>
                        <div class="form-group">
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" class="form-control" placeholder="Enter full name" required>
                        </div>
                        <div class="form-group">
                            <label for="contact">Contact</label>
                            <input type="text" id="contact" class="form-control" placeholder="Enter contact number" required>
                        </div>
                        <button id="registerBtn" class="btn btn-primary btn-block mt-2">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="../../plugins/jquery/jquery.min.js"></script>
    <script src="../../helpers/helpers.js"></script>
    <script src="../../plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="register.js"></script>
</body>
</html>
