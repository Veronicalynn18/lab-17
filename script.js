var app = angular.module("portApp", []);

app.controller("portfolioCtrl", function($scope) {
  $scope.folioContent = [



    {
      viewUrl: "https://github.com/Veronicalynn18/MidtermProject",
      img: "images/seatapp.png",
      srcUrl: "https://github.com/Veronicalynn18/MidtermProject",
      title: "Theater seating app",
      desc: ""
    },
    {
      viewUrl: "https://github.com/Veronicalynn18/Lab13",
      img: "images/dougfunnie.png",
      srcUrl: "https://github.com/Veronicalynn18/Lab13",
      title: "Doug Funnie",
      desc: ""
    },

    {
      viewUrl: "https://github.com/Veronicalynn18/Lab15",
      img: "images/madlib.png",
      srcUrl: "https://github.com/Veronicalynn18/Lab15",
      title: "MadLib with Class",
      desc: ""
    },
  ];
});

app.directive("portfolioItem",function() {
  return {
  restrict: "C",
  replace: true,
  templateUrl: "port.html"
  };
});
