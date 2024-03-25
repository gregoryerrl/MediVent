$(document).ready(function () {
  let txtUsername = $('#inputUsername');
  let txtPassword = $('#inputPassword');
  let lblErrorMessage = $('#error-message'); // Make sure this ID exists in your HTML for error messages.

  // Initialize session and check if the user is already logged in
  session.init().then(function () {
  });

  // Handle form submission
  $('#loginForm').submit(function (e) {
    e.preventDefault(); // Prevent the default form submission

    lblErrorMessage.text(''); // Clear any previous error messages
    let username = txtUsername.val().trim();
    let password = txtPassword.val().trim();

    if (username === "" || password === "") {
      lblErrorMessage.text("Please fill in all fields").show();
      return; // Stop further execution
    }

    // Perform the database query
    dbQuery.execute('SELECT * FROM userstable WHERE username = "' + username + '"').then(function () {
      if (dbQuery.rows() > 0) {
        let user = {
          id: dbQuery.result(0, "id"),
          username: dbQuery.result(0, "username"),
          password: dbQuery.result(0, "password"),
          role: dbQuery.result(0, "role"),
          fullname: dbQuery.result(0, "fullname")
        };

        // Check if password matches
        if (user.password === password) {
          // Set session data
          session.set("user_id", user.id);
          session.set("role", user.role);
          session.set("fullname", user.fullname);

          // Redirect based on role
          if (user.role === "admin") {
            window.location.href = "../adminpage/adminpage.php"; // Redirect to the admin page
          } else {
            window.location.href = "login.php"; // Redirect to the dashboard for other users
          }
        } else {
          lblErrorMessage.text("Invalid password").show();
        }
      } else {
        lblErrorMessage.text("Invalid username").show();
      }
    }).catch(function (error) {
      console.error('Error on login:', error);
      lblErrorMessage.text("An error occurred during login").show();
    });
  });
});
