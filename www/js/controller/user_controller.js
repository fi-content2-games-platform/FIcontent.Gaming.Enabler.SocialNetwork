app.controller('UserController', function($scope, $routeParams, $location) {
  $scope.showMenu = false;


  if ($routeParams.task == 'logout') {
    hello().logout();
    $scope.user.logout();
    //$scope.$apply;

  }

  hello.init({
    facebook: '758204300873538',
    fiware: '21',
    google: '971631219298.apps.googleusercontent.com',
    github: 'c6f5cd8c081419b33623'
  }, {
    redirect_uri: 'index.html'
  });

  hello.on('auth.login', function(auth) {;
    // call user information, for the given network
    hello(auth.network).api('/me').success(function(r) {

      var userdata = {
        id: auth.network + '_' + r.id,
        name: r.name,
        provider: auth.network
      };
      $scope.user.login(userdata);
    });
  });

});