$(document).ready(function () {
  session.init().then(function () {
    dbQuery.execute("SELECT * FROM `pillstable`").then(function () {
      // Clear existing cards
      $(".medicine_list").empty();

      // Assuming dbQuery.result is a function that gets the result for a given row and column
      for (let i = 0; i < dbQuery.rows(); i++) {
        // Create card element
        var card = $(
          '<div class="col-md-6 mb-4">' +
            '<div class="card">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' +
            dbQuery.result(i, "brand") +
            "</h5>" +
            '<p class="card-text">Php' +
            dbQuery.result(i, "cost") +
            "</p>" +
            "</div>" +
            "</div>" +
            "</div>"
        );

        // Add click event to redirect to transaction page with selected medicine data
        card.click(function () {
          const medicineName = dbQuery.result(i, "brand");
          const medicinePrice = dbQuery.result(i, "cost");
          const medicineId = dbQuery.result(i, "id");
          window.location.href = `../transaction/transaction.php?name=${encodeURIComponent(
            medicineName
          )}&price=${medicinePrice}&id=${medicineId}`;
        });

        // Append the card to the container
        $(".medicine_list").append(card);
      }
    });
  });
});
