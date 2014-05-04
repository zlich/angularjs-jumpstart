(function () {

    'use strict';
    var CustomersController = function ($scope) {

        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
            {
                id: 1,
                name: 'John',
                city: 'London',
                orderTotal: '9.9539',
                joined: '2009-02-07',
                orders: [{
                    id:1,
                    product: 'Shoes',
                    total: 9.9539
                }]
            },
            {
                id: 2,
                name: 'Joe',
                city: 'NYC',
                orderTotal: '3.9539',
                joined: '2009-03-01',
                orders:[{
                    id:2,
                    product: 'Book',
                    total: 3.9539
                }]
            },
            {
                id: 3,
                name: 'Albert',
                city: 'Tokyo',
                orderTotal: '10',
                joined: '2009-04-21',
                orders :[{
                    id:3,
                    product: 'Ring',
                    total: 6
                },{
                    id:4,
                    product: 'Box',
                    total: 4
                }]
            }
        ];

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    CustomersController.$inject = ['$scope'];

    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
}());