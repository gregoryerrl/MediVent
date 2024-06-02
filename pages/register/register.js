$(document).ready(function () {
  $("#registerBtn").click(function (event) {
    console.log("register");
    event.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();
    const fullname = $("#fullname").val();
    const contact = $("#contact").val();
    const role = "user"; // Default role for a new user
    const credits = 0; // Default credits for a new user

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (username && password && fullname && contact) {
      dbQuery
        .executeNonQuery(
          "INSERT INTO `userstable`(`username`, `password`, `role`, `fullname`, `credits`, `contact`) VALUES ('" +
            username +
            "','" +
            password +
            "','" +
            role +
            "','" +
            fullname +
            "','" +
            credits +
            "','" +
            contact +
            "')"
        )
        .then(function () {
          alert("Registration successful!");
          window.location.href = "../login/login.php"; // Redirect to login page after successful registration
        })
        .catch(function (error) {
          console.error("Error registering user: ", error);
          alert("An error occurred during registration. Please try again.");
        });
    } else {
      alert("Please fill in all the fields.");
    }
  });
});
