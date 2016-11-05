app.factory('UserService', function($http){

  return {

    create: function(user){
      return $http.post('/api/users', user)
      .then(function(result){
        return result.data;
      });
    },

    findById: function(id){
    	return $http.get('/api/users/' + id)
    	.then(function(result){
    		return result.data;
    	});
    },

    update: function(userInfo){
      return  $http.put('/api/users/' + userInfo.id, userInfo)
        .then(function(result){
          return result.data;
        });
    }

  };
});