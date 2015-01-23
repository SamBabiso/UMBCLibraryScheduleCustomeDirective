app = angular.module("App", ['ngRoute']);

app.factory("UMBCFac", function () {
    var schedule = [
        {
            day: "Wendsday",
            date: "December 3",
            openTime: "8:00am",
            closeTime: "2:00am"
        },
    {
        day: "Thursday",
        date: "December 4",
        openTime: "8:00am",
        closeTime: "2:00am"
    },
    {
        day: "Friday",
        date: "December 5",
        openTime: "8:00am",
        closeTime: "10:00pm"
    }
    ];

    var sch = {};
    sch.getSchedule = function () {
        return schedule;
    }

    return sch;

});
app.controller("UMBCCntrl", function ($scope, UMBCFac) {
    $scope.title1 = "Albin O. Kuhn Library & Gallery";
    $scope.title2 = "December 3, 2014 to January 3, 2015";
    $scope.schedule = UMBCFac.getSchedule();


});

app.directive("myDirective", function () {

    return {
        template: '<table><tr><th>Day</th><th>Date</th><th>Open Time</th><th>Close Time</th></tr><tr ng-repeat="sc in schedule"><td>{{sc.date}}</td><td>{{sc.day}}</td><td>{{sc.openTime}}</td><td>{{sc.closeTime}}</td><td>{{sc.day}}</td></tr></table>'
    }

});



app.directive("custDirective", function () {
    return {
        scope: {
            schedule: "="
        },
        restrict: 'EA',
        templateUrl: "/CustomeDirective.html"

    }

});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/view1',
            {
         //       controller: 'SimpleController',
                templateUrl: 'Partials/View1.html'
            })
        .when('/view2',
            {
         //       controller: 'SimpleController',
                templateUrl: 'Partials/View2.html'
            })
        .when('/view3',
            {
                //       controller: 'SimpleController',
                templateUrl: 'Partials/View3.html'
            })

         .otherwise({ redirectTo: '/view1' });

});
