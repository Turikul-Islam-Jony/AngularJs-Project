app.service("myService", function ($http) {
    this.getAllProducts = function () {
        var response = $http.get('Product/GetAllProducts');
        return response;
    };
    this.addProduct = function (product) {
        var response = $http({
            method: 'post',
            url: 'Product/AddProducts',
            data: JSON.stringify(product)
        });
        return response;
    };
    this.updateProduct = function (product) {
        var response = $http({
            method: 'post',
            url: 'Product/UpdateProduct',
            data: JSON.stringify(product)
        });
        return response;
    };
    this.deleteProduct = function (id) {
        var response = $http({
            method: 'post',
            url: 'Product/DeleteProduct',
            params: { ProductId: JSON.stringify(id) }
        });
        return response;
    };
})