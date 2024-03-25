<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link href="../../plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <a href="../medicine_list/medicine_list.php" id="outBtn" class="btn btn-danger mb-5 mt-2 mx-2">Logout</a>
    <div class="container mt-4">
        <!-- Medicine Selection -->
        <div class="form-group">
            <label for="medicineDropdown">Select Medicine:</label>
            <select id="medicineDropdown" class="form-control"></select>
        </div>

        <!-- Update Quantity -->
        <div class="form-group">
            <input type="number" id="updateQty" class="form-control mt-2" placeholder="New Quantity">
            <button id="updateBtn" class="btn btn-primary mt-2">Update Quantity</button>
            <button id="deleteBtn" class="btn btn-danger mt-2">Delete Medicine</button>
        </div>

        <!-- Add New Medicine -->
        <h3 class="mt-4">Add New Medicine</h3>
        <div class="form-group">
            <input type="text" id="newBrand" class="form-control mt-2" placeholder="Brand Name">
        </div>
        <div class="form-group">
            <input type="text" id="newGenericName" class="form-control mt-2" placeholder="Generic Name">
        </div>
        <div class="form-group">
            <input type="number" id="newCost" class="form-control mt-2" placeholder="Cost">
        </div>
        <div class="form-group">
            <input type="number" id="newQty" class="form-control mt-2" placeholder="Quantity">
        </div>
        <button id="addBtn" class="btn btn-success mt-2">Add Medicine</button>
    </div>

    <script src="../../plugins/jquery/jquery.min.js"></script>
    <script src="../../helpers/helpers.js"></script>
    <script src="../../plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../../plugins/jsQR/dist/jsQr.js"></script>
    <script src="adminpage.js"></script>
</body>
</html>
