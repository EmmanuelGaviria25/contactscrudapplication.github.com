angular.module('RDash')
	.controller('modalContactEditCtrl', ['$uibModalInstance', '$scope', 'contact', 'contactService', ModalContactEditCtrl])

	function ModalContactEditCtrl($uibModalInstance, $scope, contact, contactService) {
		
		$scope.loadingCreation = false;
		$scope.contact = contact;
		console.log(contact)
		$scope.formType = "edición"
		$scope.buttomType = "Editar";

		$scope.ok = function() {
			if (!$scope.contact.name || !$scope.contact.email || !$scope.contact.address || !$scope.contact.telephone) {
				return;
			}

			$scope.loadingCreation = true;
			contactService
				.editContact($scope.contact)
				.then(editSuccess, editFailure);
		}

		function editSuccess(response) {
			$scope.loadingCreation = false;
			$uibModalInstance.close(response);
		}
		
		function editFailure(response) {
			$scope.loadingCreation = false;
		}

		$scope.cancel = function() {
			$scope.contact = {};
			$uibModalInstance.dismiss();
		}
	}