angular.module('RDash')
	.controller('modalConfirmCtrl', ['$uibModalInstance', 'contact', 'contactService', ModalConfirmCtrl])

	function ModalConfirmCtrl($uibModalInstance, contact, contactService) {

		var $ctrl = this;
		$ctrl.contact = contact;

		$ctrl.ok = function() {
			contactService
				.deleteContact(contact.id)
				.then(success);
		}

		function success(response) {
			$uibModalInstance.close(response);
		}

		$ctrl.cancel = function() {
			$uibModalInstance.dismiss();
		}			
	}