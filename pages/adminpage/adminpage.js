$(document).ready(function () {
  // Populate table with all medicines
  function populateTable() {
    dbQuery.execute("SELECT * FROM `pillstable`").then(function () {
      for (let i = 0; i < dbQuery.rows(); i++) {
        let id = dbQuery.result(i, "id");
        let brand = dbQuery.result(i, "brand");
        let genericName = dbQuery.result(i, "generic_name");
        let cost = dbQuery.result(i, "cost");
        let qty = dbQuery.result(i, "qty");
        let dropper = dbQuery.result(i, "dropper");

        let row = `<tr>
                  <td>${brand}</td>
                  <td>${genericName}</td>
                  <td>${cost}</td>
                  <td>${qty}</td>
                  <td>${dropper}</td>
                  <td>
                      <button class="btn btn-primary editBtn" data-id="${id}" data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                      <button class="btn btn-danger deleteBtn" data-id="${id}">Delete</button>
                  </td>
              </tr>`;
        $("#medicineTableBody").append(row);
      }
    });
  }

  // Call the function to populate the table on page load
  populateTable();

  // Event listener for opening the edit modal
  $(document).on("click", ".editBtn", function () {
    let id = $(this).data("id");
    dbQuery
      .execute("SELECT * FROM `pillstable` WHERE id = " + id)
      .then(function () {
        if (dbQuery.rows() > 0) {
          $("#editId").val(dbQuery.result(0, "id"));
          $("#editBrand").val(dbQuery.result(0, "brand"));
          $("#editGenericName").val(dbQuery.result(0, "generic_name"));
          $("#editCost").val(dbQuery.result(0, "cost"));
          $("#editQty").val(dbQuery.result(0, "qty"));
          $("#editDropper").val(dbQuery.result(0, "dropper"));
        } else {
          console.error("No data found for the selected ID");
        }
      })
      .catch(function (error) {
        console.error("Error fetching medicine details: ", error);
      });
  });

  $("#saveChangesBtn").click(function () {
    let id = $("#editId").val();
    let brand = $("#editBrand").val();
    let genericName = $("#editGenericName").val();
    let cost = $("#editCost").val();
    let qty = $("#editQty").val();
    let dropper = $("#editDropper").val();

    dbQuery
      .executeNonQuery(
        "UPDATE `pillstable` SET brand='" +
          brand +
          "', generic_name='" +
          genericName +
          "', cost='" +
          cost +
          "', qty='" +
          qty +
          "', dropper='" +
          dropper +
          "' WHERE id = " +
          id
      )
      .then(function () {
        window.location.reload();
      })
      .catch(function (error) {
        console.error("Error updating medicine: ", error);
      });
  });

  $(document).on("click", ".deleteBtn", function () {
    let id = $(this).data("id");
    dbQuery
      .executeNonQuery("DELETE FROM `pillstable` WHERE id = " + id)
      .then(function () {
        window.location.reload();
      })
      .catch(function (error) {
        console.error("Error deleting medicine: ", error);
      });
  });

  // Event listener for adding new medicine
  $("#addBtn").click(function () {
    let newBrand = $("#newBrand").val();
    let newGenericName = $("#newGenericName").val();
    let newCost = $("#newCost").val();
    let newQty = $("#newQty").val();
    let newDropper = $("#newDropper").val();

    dbQuery
      .executeNonQuery(
        "INSERT INTO `pillstable`(`brand`, `generic_name`, `cost`, `qty`, `dropper`) VALUES ('" +
          newBrand +
          "','" +
          newGenericName +
          "','" +
          newCost +
          "','" +
          newQty +
          "','" +
          newDropper +
          "')"
      )
      .then(function () {
        window.location.reload();
      });
  });
});
