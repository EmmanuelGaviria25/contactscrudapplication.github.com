angular.module('RDash')
	.controller('modalAlertDialogController', ['$uibModalInstance', 'contact', ModalAlertDialogController])

	function ModalAlertDialogController($uibModalInstance, contact) {

		var $ctrl = this;
		$ctrl.contact = contact;

		$ctrl.close = function () {
			$uibModalInstance.close();
		};

	}