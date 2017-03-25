app.controller("myctrl",function($scope,myfactory){
	$scope.getMobile=function(){
	var promise = myfactory.callServer();
	for(var  i = 1; i<=10; i++){
		console.log("I is "+i)
	}
	promise.then(success,fail);
	function success(data){
		$scope.result = data;
	}
	function fail(error){
		$scope.err = error;
	}
	}
	
})