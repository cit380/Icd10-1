angular.module('ICD10').service('mainService', function($q, $http){
	
	this.getQuery = function(data){
		var dfd = $q.defer()
		$http({
			method: 'GET',
			url: '',
			data: data,
		}).then(function(res){
			console.log('Get Res:', res)
			dfd.resolve(res.data);
		});
		return dfd.promise;
	}
});