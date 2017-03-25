//factory always return object 
// factory talk to the Server
// for talking to the server it is using $http
// $http is predefine angular service

app.factory("myfactory",function($http,$q){
	var object = {};
	object.callServer= function(){
		var defered = $q.defer();
		var url = "https://raw.githubusercontent.com/brainmentorspvtltd/hmr/master/mobile.json";
		$http.get(url).then(success,fail);
		function success(data){
		defered.resolve(data);
		}
		function fail(error){
			defered.reject(error);
		}
		return defered.promise;
		
	}
	return object;
})