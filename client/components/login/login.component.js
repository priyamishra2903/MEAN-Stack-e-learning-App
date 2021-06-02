function LoginCtrl( $scope, mainService, AuthFactory) {
let vm = this;
 //user login
 $scope.LoginUser=function() {  console.log('iside f login');

 let user = {           
     email:$scope.email,
     password:$scope.password
  }
   console.log('user',user);
   value = 'user/login'
   mainService.add(value, user).then(function(response) {   
    vm.token = response.data.token;  
    AuthFactory.getToken(vm.token); 
    if(response.data.token!=undefined){
        document.getElementById("loginmsg").innerHTML = 'Login Successfull';  //handling user login 
        $scope.a = true;
    }
    else{
    $scope.a = false;   
    document.getElementById("loginmsg").innerHTML = 'Invalid email id or password';  //handling error
    }     
   })  
  clearData();
}

$scope.check = function(event){
    document.getElementById("loginmsg").innerHTML += 'hi';
}

function clearData() {        
 $scope.name='';
 $scope.email='';
 $scope.password='';
 $scope.password2='';
} 

}

 app.component('login',{
     templateUrl: 'components/login/login.html',
     controller: LoginCtrl,
     controllerAs: 'vm',
 })
 


 
 