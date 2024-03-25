$(document).ready(function () {
    // Populate dropdown with all medicines
    function populateDropdown() {
      // Replace with AJAX call to get medicines from your database
      dbQuery.execute('SELECT id, brand FROM `pillstable`').then(function () {
        for (let i = 0; i < dbQuery.rows(); i++) {
          let brand = dbQuery.result(i, "brand");
          let id = dbQuery.result(i, "id");
          $('#medicineDropdown').append(new Option(brand, id));
        }
      });
    }
  
    // Call the function to populate the dropdown on page load
    populateDropdown();
  
    // Event listener for updating quantity
    $('#updateBtn').click(function () {
      let selectedId = $('#medicineDropdown').val();
      let newQty = $('#updateQty').val();
      dbQuery.executeNonQuery("UPDATE `pillstable` SET `id`='"+ newQty + "' WHERE id = " + selectedId).then(function() {
        window.location.reload();
    });
    });

    $('#deleteBtn').click(function () {
        let selectedId = $('#medicineDropdown').val();
        dbQuery.executeNonQuery("DELETE FROM `pillstable` WHERE  id = " + selectedId).then(function() {
            window.location.reload();
        });
      });
    
  
    // Event listener for adding new medicine
    $('#addBtn').click(function() {
      let newBrand = $('#newBrand').val();
      let newGenericName = $('#newGenericName').val();
      let newCost = $('#newCost').val();
      let newQty = $('#newQty').val();
      dbQuery.executeNonQuery("INSERT INTO `pillstable`(`brand`, `generic_name`, `cost`, `qty`) VALUES ('"+ newBrand +"','"+ newGenericName +"','"+ newCost +"','"+ newQty +"')").then(function() {
        window.location.reload();
    });
    });
  });
  