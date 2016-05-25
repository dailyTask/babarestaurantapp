/**
 * Created by Sufiyan on 4/12/2016.
 */

app.controller('signupController', function ($scope) {







});
var ref = new Firebase("https://babaauth.firebaseio.com");
app.controller('signinController', function ($scope,$state) {
  $scope.onClick= function () {
    ref.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $state.go('home')
      }
    });

  };








});
app.controller('homeController', function ($scope) {

});
