app.controller("myController", function ($scope, myService) {
    $scope.NewProduct = {};
    $scope.clickedProduct = {};
    $scope.message = "";
    GetAllProducts();
    $scope.clearMessage = function () {
        $scope.message = "";
    }
    function GetAllProducts() {
        myService.getAllProducts().then(function (result) {
            $scope.Products = result.data;
        },
            function (result) {
                console.log(result);
            });
    };
    $scope.saveProduct = function () {
        alert($scope.NewProduct);
        myService.addProduct($scope.NewProduct).then(function (result) {
            $scope.NewProduct = {};
            $scope.message = "Saved Successfully";
        },
            function (result) {
                alert(result)
            }

        )
        GetAllProducts();
    };
    $scope.SelectedProduct = function (product) {
        $scope.clickedProduct = product;
    }
    $scope.updateProduct = function () {
        myService.updateProduct($scope.clickedProduct).then(function (result) {
            alert(result.data);
            $scope.message == "Updated Successfully";
        },
            function (result) {
                $scope.message == "Updated Failed";
            });
        GetAllProducts();
    };
    $scope.deleteProduct = function ()
    {
        myService.deleteProduct($scope.clickedProduct.ProductId).then(function () {
            $scope.message == "Deleted Successfully";
        },
            function (result) {
                $scope.message == "error occured";
            });
    };
})