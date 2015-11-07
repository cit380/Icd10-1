angular.module('ICD10').service('mainService', function($q, $http){
	
	this.getQuery = function(data){
		console.log("running")
		var dfd = $q.defer()
		$http({
			method: 'GET',
			url: 'https://api.aquahost.com/codes/icd10/2013/a92-30.json',
			data: data,
		}).then(function(res){
			console.log('Get Res:', res)
			dfd.resolve(res.data);
		});
		return dfd.promise;
	}
});