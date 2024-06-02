$(document).ready(function () {
  let txtUsername = $("#inputUsername");
  let txtPassword = $("#inputPassword");
  let lblErrorMessage = $("#error-message"); // Make sure this ID exists in your HTML for error messages.

  // Initialize session and check if the user is already logged in
  session.init().then(function () {
    // You might want to check if the user is already logged in here
  });

  // Handle form submission
  $("#loginForm").click(function (e) {
    e.preventDefault(); // Prevent the default form submission

    lblErrorMessage.text(""); // Clear any previous error messages
    let username = txtUsername.val().trim();
    let password = txtPassword.val().trim();

    if (username === "" || password === "") {
      lblErrorMessage.text("Please fill in all fields").show();
      return; // Stop further execution
    }

    // Perform the database query
    dbQuery
      .execute('SELECT * FROM userstable WHERE username = "' + username + '"')
      .then(function () {
        if (dbQuery.rows() > 0) {
          let user = {
            id: dbQuery.result(0, "id"),
            username: dbQuery.result(0, "username"),
            password: dbQuery.result(0, "password"),
            role: dbQuery.result(0, "role"),
            fullname: dbQuery.result(0, "fullname"),
            credits: dbQuery.result(0, "credits"),
            contact: dbQuery.result(0, "contact"),
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
              // Show user details modal
              showUserDetailsModal(user);
            }
          } else {
            lblErrorMessage.text("Invalid password").show();
          }
        } else {
          lblErrorMessage.text("Invalid username").show();
        }
      })
      .catch(function (error) {
        console.error("Error on login:", error); // Log detailed error
        lblErrorMessage.text("An error occurred during login").show();
      });
  });

  function showUserDetailsModal(user) {
    const modalHtml = `
      <div class="modal fade" id="userDetailsModal" tabindex="-1" aria-labelledby="userDetailsModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="userDetailsModalLabel">User Details</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p><strong>Full Name:</strong> ${user.fullname}</p>
              <p><strong>Username:</strong> ${user.username}</p>
              <p><strong>Contact:</strong> ${user.contact}</p>
              <p><strong>Credits:</strong> ${user.credits}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`;

    $("body").append(modalHtml);
    $("#userDetailsModal").modal("show");

    // Prevent window reload
    $("#userDetailsModal").on("hidden.bs.modal", function () {
      $("#userDetailsModal").remove();
    });
  }
});
