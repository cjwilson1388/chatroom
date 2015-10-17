var app = angular.module('chatroom');

app.service('parseService', function($http, $q){
  
  this.postData = function(message){
    return $http({
      method: 'POST',
      url: 'https://api.parse.com/1/classes/chat',
      params: {sort: 'ascending'},
      data: {'text': message}
    })
  };
  //getData method here
  this.getData = function(){
    return $http({
      'method': 'get',
      'url': "https://api.parse.com/1/classes/chat?order=-createdAt"
    }).then(function(res){
      return res.data.results
    }) 
  }
});


