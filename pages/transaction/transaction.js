$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const medicineName = urlParams.get("name");
  const medicinePrice = parseFloat(urlParams.get("price"));
  const medicineId = urlParams.get("id"); // Assuming you have the medicine ID in the query params
  let quantity = 1;
  $("#quantity").val(1);

  $("#medicine-name").text(medicineName);
  $("#medicine-price").text("Php " + medicinePrice.toFixed(2));
  updateTotalPrice();

  $("#add").click(function () {
    quantity = parseInt($("#quantity").val());
    $("#quantity").val(quantity + 1);
    updateTotalPrice();
  });

  $("#subtract").click(function () {
    quantity = parseInt($("#quantity").val());
    if (quantity > 1) {
      $("#quantity").val(quantity - 1);
      updateTotalPrice();
    }
  });

  $("#proceed-credit").click(function () {
    showCreditModal();
  });

  $("#proceed-bill").click(function () {
    const totalPrice = parseFloat($("#total-price").text());
    showBillModal(totalPrice);
    enableBillAcceptor();
    listenForBillPayments(totalPrice);
  });

  $("#cancel").click(function () {
    disableBillAcceptor();
    window.history.back(); // Navigate back to the previous page
  });

  function updateTotalPrice() {
    const quantity = parseInt($("#quantity").val());
    const totalPrice = quantity * medicinePrice;
    $("#total-price").text(totalPrice.toFixed(2));
  }

  function showBillModal(totalPrice) {
    const modalHtml = `
      <div class="modal" tabindex="-1" id="billModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Bill Payment</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Total Price: Php ${totalPrice.toFixed(2)}</p>
              <p>Amount Paid: Php <span id="amountPaid">0.00</span></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`;
    $("body").append(modalHtml);
    $("#billModal").modal("show");

    $("#billModal").on("hidden.bs.modal", function () {
      disableBillAcceptor();
      clearInterval(billPaymentInterval); // Stop listening for bill payments
      console.log(
        "Bill modal closed, bill acceptor disabled and stopped listening for bill payments."
      );
    });
  }

  let billPaymentInterval;

  function listenForBillPayments(totalPrice) {
    billPaymentInterval = setInterval(function () {
      console.log("Listening for bill payments...");
      $.ajax({
        url: "http://localhost:5000/api/get_bill_value",
        type: "GET",
        success: function (response) {
          const amountPaid = response.total_value;
          console.log("Amount paid: Php", amountPaid.toFixed(2));
          $("#amountPaid").text(amountPaid.toFixed(2));
          if (amountPaid >= totalPrice) {
            clearInterval(billPaymentInterval);
            $("#billModal").modal("hide");
            proceedToProcess();
          }
        },
        error: function (xhr, status, error) {
          console.error("Failed to get bill value:", xhr.responseText);
        },
      });
    }, 1000); // Poll every second
  }

  function enableBillAcceptor() {
    $.ajax({
      url: "http://localhost:5000/api/enable_bill_acceptor",
      type: "POST",
      success: function (response) {
        console.log("Bill acceptor enabled:", response.message);
      },
      error: function (xhr, status, error) {
        console.error("Failed to enable bill acceptor:", xhr.responseText);
      },
    });
  }

  function disableBillAcceptor() {
    $.ajax({
      url: "http://localhost:5000/api/disable_bill_acceptor",
      type: "POST",
      success: function (response) {
        console.log("Bill acceptor disabled:", response.message);
      },
      error: function (xhr, status, error) {
        console.error("Failed to disable bill acceptor:", xhr.responseText);
      },
    });
  }

  function showCreditModal() {
    const modalHtml = `
      <div class="modal" tabindex="-1" id="creditModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Credit Payment</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="creditForm">
                <div class="mb-3">
                  <label for="username" class="form-label">Username</label>
                  <input type="text" class="form-control" id="username" required>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input type="password" class="form-control" id="password" required>
                </div>
                <button type="submit" class="btn btn-primary">Pay</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>`;
    $("body").append(modalHtml);
    $("#creditModal").modal("show");

    $("#creditForm").submit(function (event) {
      event.preventDefault();
      const username = $("#username").val();
      const password = $("#password").val();
      const totalPrice = parseFloat($("#total-price").text());

      // Query to authenticate user
      dbQuery
        .execute('SELECT * FROM userstable WHERE username = "' + username + '"')
        .then(function () {
          if (dbQuery.rows() > 0) {
            let user = {
              id: dbQuery.result(0, "id"),
              username: dbQuery.result(0, "username"),
              password: dbQuery.result(0, "password"),
              credits: dbQuery.result(0, "credits"),
            };

            // Check if password matches
            if (user.password === password) {
              if (user.credits >= totalPrice) {
                // Update user's credits

                proceedToProcess();
                dbQuery
                  .execute(
                    "UPDATE userstable SET credits = " +
                      (user.credits - totalPrice) +
                      ' WHERE username = "' +
                      username +
                      '"'
                  )
                  .then(function () {
                    $("#creditModal").modal("hide");
                    proceedToProcess();
                  })
                  .catch(function (error) {
                    console.error("Error updating credits:", error);
                  });
              } else {
                alert("Insufficient credits.");
              }
            } else {
              alert("Invalid password.");
            }
          } else {
            alert("Invalid username.");
          }
        })
        .catch(function (error) {
          console.error("Error on login:", error);
          alert("An error occurred during login.");
        });
    });
  }

  function proceedToProcess() {
    const quantity = parseInt($("#quantity").val());

    // Query to get medicine dropper info
    dbQuery
      .execute('SELECT dropper FROM pillstable WHERE id = "' + medicineId + '"')
      .then(function () {
        if (dbQuery.rows() > 0) {
          const dropper = dbQuery.result(0, "dropper");
          const steps = dropper * 31;
          console.log(
            "Proceeding to process with steps:",
            steps,
            "and quantity:",
            quantity
          );

          $.ajax({
            url: "http://localhost:5000/api/process",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ steps, qty: quantity }),
            success: function (response) {
              alert("Medicine dispensed successfully.");
              window.history.back();
            },
            error: function (xhr, status, error) {
              console.error("Failed to process:", xhr.responseText);
            },
          });
        } else {
          alert("Failed to get medicine dropper info.");
        }
      })
      .catch(function (error) {
        console.error("Error getting dropper info:", error);
      });
  }
});
