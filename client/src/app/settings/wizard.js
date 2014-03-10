angular.module('app')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('settings', {
            url: '/settings',
            views: {
                header: {templateUrl: 'layout/headers/basic.tpl.html'},
                body: {templateUrl: 'settings/wizard.tpl.html', controller: 'WizardCtrl'}
            }
        });
    }])
    .controller('WizardCtrl', ['$scope', 'storage',
        function WizardCtrl($scope, storage) {
            $scope.save = function () {
                storage.setItem('xbmchost', JSON.stringify($scope.configuration));
                $scope.xbmc.connect($scope.configuration.host.ip, $scope.configuration.host.port);
                $scope.go('/');
            }
        }]);