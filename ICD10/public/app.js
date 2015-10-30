var app = angular.module('ICD10', ['ngMaterial', 'ui.router']);

	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/main')
		
		$stateProvider
			.state('main', {
				url: '/main',
				templateUrl: 'view/main.html',
				controller: 'mainCtrl',
				controllerAs: 'main'
			})
	});