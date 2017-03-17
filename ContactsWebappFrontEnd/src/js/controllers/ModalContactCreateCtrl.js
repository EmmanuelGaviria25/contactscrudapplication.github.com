angular.module('RDash')
	.controller('modalContactCreateCtrl', ['$uibModalInstance', '$scope', 'contactService', ModalContactCreateCtrl])

	function ModalContactCreateCtrl($uibModalInstance, $scope, contactService) {
		
		$scope.loadingCreation = false;
		$scope.formType = "creación";
		$scope.buttomType = "Crear";
		$scope.ok = function() {
			if (!$scope.contact.name || !$scope.contact.email || !$scope.contact.address || !$scope.contact.telephone) {
				return;
			}

			$scope.loadingCreation = true;
			contactService
				.createContact($scope.contact)
				.then(createSuccess);
		}

		function createSuccess(response) {
			$scope.loadingCreation = false;
			$uibModalInstance.close(response);
		}

		$scope.cancel = function() {
			$scope.contact = {};
			$uibModalInstance.dismiss();
		}
	}