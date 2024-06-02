<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link href="../../plugins/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="admin.css" rel="stylesheet">
</head>
<body>
    <a href="../medicine_list/medicine_list.php" id="outBtn" class="btn btn-danger mb-5 mt-2 mx-2">Logout</a>
    <div class="container mt-4">
        <!-- Medicine Table -->
        <div class="table-responsive">
            <table class="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Generic Name</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                        <th>Dropper</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="medicineTableBody">
                    <!-- Rows will be populated here -->
                </tbody>
            </table>
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
        <div class="form-group">
            <input type="number" id="newDropper" class="form-control mt-2" placeholder="Dropper">
        </div>
        <button id="addBtn" class="btn btn-success mt-2">Add Medicine</button>

        <!-- Top-up Credits -->
        <h3 class="mt-4">Top-up Credits</h3>
        <div class="form-group">
            <input type="text" id="topupUsername" class="form-control mt-2" placeholder="Username">
        </div>
        <div class="form-group">
            <input type="number" id="topupAmount" class="form-control mt-2" placeholder="Amount">
        </div>
        <button id="topupBtn" class="btn btn-primary mt-2">Top-up Credits</button>
    </div>

    <!-- Edit Medicine Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModalLabel">Edit Medicine</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="editId">
                    <div class="form-group">
                        <label for="editBrand">Brand Name</label>
                        <input type="text" id="editBrand" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="editGenericName">Generic Name</label>
                        <input type="text" id="editGenericName" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="editCost">Cost</label>
                        <input type="number" id="editCost" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="editQty">Quantity</label>
                        <input type="number" id="editQty" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="editDropper">Dropper</label>
                        <input type="number" id="editDropper" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="saveChangesBtn">Save changes</button>
                </div>
            </div>
        </div>
    </div>

    <script src="../../plugins/jquery/jquery.min.js"></script>
    <script src="../../helpers/helpers.js"></script>
    <script src="../../plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../../plugins/jsQR/dist/jsQr.js"></script>
    <script src="adminpage.js"></script>
</body>
</html>

