myApp.service('dataService', function () {
        var data = {};

        this.save = function (stuff) {

            data = stuff;

            return data;
        }
    });

