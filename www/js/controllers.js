angular.module('starter.controllers', ['ionic'])






.controller('addco', function($scope,$http) {
      $scope.data = {};
  $scope.adda = function(){
  var title= $scope.data.title;
  var dated = $scope.data.dated;
  var description = $scope.data.description;
  $http.post('https://hannahreyes43.000webhostapp.com/add.php?title='+title+'&dated='+dated+'&description='+description)
    console.log(title+dated+description);
    $scope.data = {};
  }

})

.controller('deletedposts', function($scope,$http,$state) {
$scope.edit = function (a){
localStorage.setItem('editpost' , JSON.stringify(a));
$state.go("app.edit");
}
    done();
function done() {
      setTimeout( function()  {
      updates(); 
      done();
      }, 200);
}
function updates(){

 $http.get('https://hannahreyes43.000webhostapp.com/posts.php')
 .then(function(b){
  console.log(b.data);
  $scope.posts = b.data;
})
}
$scope.deleted = function (b){
  // alert("a"); 
   $http.get('https://hannahreyes43.000webhostapp.com/deleteposts.php?id='+b)
}

})

.controller('search', function($scope,$http) {

    console.log('whyyyyyy');


    done();
function done() {
      setTimeout( function()  {
      updates(); 
      done();
      }, 200);
}
function updates(){

 $http.get('https://hannahreyes43.000webhostapp.com/posts.php')
 .then(function(a){
  console.log(a.data);
  $scope.posts = a.data;
})
}
})




.controller('editposts', function($scope,$http) {

  var a = JSON.parse(localStorage.getItem("editpost"));
  $http.get('https://hannahreyes43.000webhostapp.com/editpostdata.php?id='+a)
  .then(function(a){
    console.log(a.data);
    document.getElementById('id').value = a.data[0]['id'];
    document.getElementById('title').value = a.data[0]['title'];
    document.getElementById('dated').value =a.data[0]['dated'];
    document.getElementById('description').value =a.data[0]['description'];

  })

 $scope.edit = function(a){
  
   $http.get('https://hannahreyes43.000webhostapp.com/editedposts.php?id='+a)
 .then(function(a){
  console.log(a.data[0]);
  document.getElementById('title').value = a.data[0]['title'];
  document.getElementById('dated').value = a.data[0]['dated'];
  document.getElementById('description').value = a.data[0]['description'];
  document.getElementById('id').value = a.data[0]['id'];

})
 }
 
 $scope.edits = function(){
  $scope.datas = {};

  var id= document.getElementById('id').value;
  var title= document.getElementById('title').value;
  var dated = document.getElementById('dated').value ;
  var description = document.getElementById('description').value;
  
  $http.post('https://hannahreyes43.000webhostapp.com/edit.php?id='+id+'&title='+title+'&dated='+dated+'&description='+description)
 document.getElementById('title').value = '';
  document.getElementById('dated').value = '';
  document.getElementById('description').value ='';
    document.getElementById('id').value = '';

   

  

 }
   done();
function done() {
      setTimeout( function()  {
      updates(); 
      done();
      }, 200);
}
function updates(){

 $http.get('https://hannahreyes43.000webhostapp.com/posts.php')
 .then(function(a){
  console.log(a.data);
  $scope.posts = a.data;
})
}




})
.controller('adminlogin', function ($scope, $http, $state, $ionicHistory) {
    $scope.changetouser = function(){
            $state.go('login');
    }

   $scope.adminloginform = function (){
    var username = $scope.username;
    var password = $scope.password;
    
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $http({
        url: 'https://hannahreyes43.000webhostapp.com/adminlogin.php',
        method: "POST",
        data: {
            'username' : username,
            'password' : password
        }
    })
    .then(function(response){
        console.log(response);
        var data = response.data[0];
        if(data != "Account Doesn't exist!"){
            $scope.username = '';
            $scope.password = '';
            $state.go('tab.feed');
            localStorage.setItem("name",data);
        }else{
            $scope.error = data;
            $scope.password = '';
        }
    },
    function(response){
        console.log('Error');
    });
   }
})

.controller('login', function ($scope, $http, $state, $ionicHistory) {
   $scope.changelogin = function(){
            $state.go('adminlogin');
    }
    $scope.loginform = function (){
    var username = $scope.username;
    var password = $scope.password;
    
    $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $http({
        url: 'https://hannahreyes43.000webhostapp.com/login.php',
        method: "POST",
        data: {
            'username' : username,
            'password' : password
        }
    })
    .then(function(response){
        console.log(response);
        var data = response.data[0];
        if(data != "Account Doesn't exist!"){
            $scope.username = '';
            $scope.password = '';
            $state.go('app.adfeed');
            localStorage.setItem("name",data);
        }else{
            $scope.error = data;
            $scope.password = '';
        }
    },
    function(response){
        console.log('Error');
    });
   }
})

.controller('search', function($scope,$http){

  $scope.say = function(title,date,description){
      $scope.text = 'Post title '+title+', date of post '+date+' content'+description;
      console.log($scope.text);
      $scope.theText = $scope.text;
//      document.addEventListener('deviceready', function () {
//     // basic usage
//     TTS
//         .speak('hello, world!', function () {
//             alert('success');
//         }, function (reason) {
//             alert(reason);
//         });
    
//     // or with more options

// }, false);

TTS
        .speak({
            text: $scope.theText,
            locale: 'en-US',
            rate: 1
        }, function () { console.log('success');
    },
    function (reason) {
    });
  }


  done();
  function done(){
    setTimeout(function(){
      updates();
      done();
    }, 200);
  }
  function updates(){
    $http.get('https://hannahreyes43.000webhostapp.com/posts.php')
    .then(function(a){
      console.log(a.data);
      $scope.posts = a.data;
    })
  }
})

.controller('setup',function($scope,$state){
  $scope.set = function(){
      var a = document.getElementById('server').value;
      console.log(a);
      if(a == ""){
          $scope.seterror = "PLease specify server";
      }else {
          localStorage.setItem('server',a);
          $state.go('login');
      }
  }
})

;
