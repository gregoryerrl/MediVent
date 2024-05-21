$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const medicineName = urlParams.get("name");
  const medicinePrice = parseFloat(urlParams.get("price"));
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

  $("#proceed-gcash").click(function () {
    const totalPrice = parseFloat($("#total-price").text());
    const data = {
      amount: totalPrice,
      currency: "PHP",
      description: `Purchase of ${$("#quantity").val()} ${medicineName}(s)`,
      payment_method: "GCASH",
      redirect_url: "https://yourwebsite.com/payment_success",
      callback_url: "https://yourwebsite.com/payment_callback",
    };

    $.ajax({
      url: "https://api.codapayments.com/initiate_payment",
      type: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer YOUR_API_KEY",
      },
      data: JSON.stringify(data),
      success: function (response) {
        // Handle successful response, redirect to payment page
        window.location.href = response.payment_url;
      },
      error: function (xhr, status, error) {
        // Handle error response
        console.error("Payment initiation failed:", xhr.responseText);
      },
    });
  });

  $("#proceed-bill").click(function () {
    const totalPrice = parseFloat($("#total-price").text());
    const data = {
      amount: totalPrice,
    };

    $.ajax({
      url: "http://localhost:5000/api/bill_acceptor",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(data),
      success: function (response) {
        // Handle successful bill acceptor payment
        alert("Payment received: Php " + response.amount);
      },
      error: function (xhr, status, error) {
        // Handle error response
        console.error("Bill acceptor payment failed:", xhr.responseText);
      },
    });
  });

  $("#cancel").click(function () {
    window.history.back(); // Navigate back to the previous page
  });

  function updateTotalPrice() {
    const quantity = parseInt($("#quantity").val());
    const totalPrice = quantity * medicinePrice;
    $("#total-price").text(totalPrice.toFixed(2));
  }
});
