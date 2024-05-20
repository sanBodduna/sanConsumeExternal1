using northwind from './external/northwind';
 
service NorthwindAPI @(
    path    : '/NorthwindAPI',
    requires: 'any'
) {
    entity Products as projection on northwind.Products;
 
    type Prod {
        ProductID   : Integer;
        ProductName : String;
    }
 
    function getProducts() returns array of Prod;
}