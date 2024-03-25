$(document).ready(function () {
    session.init().then(function () {
      dbQuery.execute('SELECT * FROM `pillstable`').then(function () {
        // Clear existing cards
        console.log("here");
  
        // Assuming dbQuery.result is a function that gets the result for a given row and column
        for (let i = 0; i < dbQuery.rows(); i++) {
          // Create card element
          console.log(dbQuery.result(i, "id"));
          var card = $('<div class="card">' +
            '<div class="card-body">' +
              '<h5 class="card-title">' + dbQuery.result(i, "brand") + '</h5>' +
              '<p class="card-text">Php' + dbQuery.result(i, "cost") + '</p>' +
            '</div>' +
          '</div>');

        // Append the card to the container
        $('.medicine_list').append(card);
        }
      });
    });
  });
  