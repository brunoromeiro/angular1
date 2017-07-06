/*(function() {
  angular.module('primeiraApp').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  function DashboardController($http) {
    const vm = this
    vm.getSummary = function() {
      const url = 'http://localhost:3003/api/billingSummary'
      $http.get(url).then(function(response) {
        const { credit = 0, debt = 0 } = response.data
        $scope.credit = credit
        $scope.debt = debt
        $scope.total = credit - debt
      })
    }

    $scope.getSummary()
  }
})()
*/
(function() {
  angular.module('primeiraApp').controller('DashboardCtrl', [
    '$http',
    DashboardController
  ])

  function DashboardController($http) {
    const vm = this
    vm.getSummary = function() {
      const url = 'http://localhost:3003/api/billingSummary'
      $http.get(url).success(function({ credit = 0, debt = 0 }) {
        $scope.credit = credit
        $scope.debt = debt
        $scope.total = credit - debt
      })
    }

    $scope.getSummary()
  }
})()
