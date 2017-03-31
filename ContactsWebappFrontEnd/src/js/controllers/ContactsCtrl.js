angular.module('RDash')
	.controller('contactsCtrl', ['$scope', '$uibModal', 'contactService', contactsCtrl])

	function contactsCtrl($scope, $uibModal, contactService) {

		$scope.contactsEmpty = true;
		$scope.loading = true;

		function loadContactSuccess(contacts) {
			$scope.loading = false;
			if (contacts <= 1) {
				$scope.contactsEmpty = true;
    			console.log('entro!')
				return;
			}
			$scope.contacts = contacts;
			$scope.contactsEmpty = false;
		}

		function loadContactFailure(response) {
			$scope.loading = false;
		}

		contactService
			.getAllContacts()
			.then(loadContactSuccess, loadContactFailure);

		$scope.delete = function(contact) {
		
			var modalInstance = $uibModal.open({
				animation: true,
	            templateUrl: 'templates/ModalConfirm.html',
	            backdrop: true,
	            keyboard: true,
	            controller: 'modalConfirmCtrl',
				controllerAs: '$ctrl',
	            resolve: {
	            	contact: function() {
	            		return contact;
	            	}
	            }
	    	});

	    	modalInstance.result.then(function(response) {
	    		data = {
	    			name: response.name,
	    			title: "Has eliminado satisfactoriamente este contacto "
	    		}
				$uibModal.open({
					templateUrl: 'templates/components/AlertDialogContactDeleted.html',
					backdrop: true,
			 		keyboard: true,
			 		backdropClick: true,
					animation: true,
					controller: 'modalAlertDialogController',
					controllerAs: '$ctrl',
					resolve: {
						contact: data
					}
				});
				contactService
					.getAllContacts()
					.then(loadContactSuccess, loadContactFailure);
	    	})
		}

		$scope.create = function() {
			
			var modalInstance = $uibModal.open({
				animation: true,
	            templateUrl: 'templates/ModalContactForm.html',
	            backdrop: true,
	            keyboard: true,
	            controller: 'modalContactCreateCtrl',
	            size: 'md'
	    	});

	    	modalInstance.result.then(function(response) {
	    		data = {
	    			name: response.name,
	    			title: "Has creado satisfactoriamente al contacto "
	    		}
				$uibModal.open({
					templateUrl: 'templates/components/AlertDialogContactCreated.html',
					backdrop: true,
			 		keyboard: true,
			 		backdropClick: true,
					animation: true,
					controller: 'modalAlertDialogController',
					controllerAs: '$ctrl',
					resolve: {
						contact: data
					}
				});
				contactService
					.getAllContacts()
					.then(loadContactSuccess, loadContactFailure);
	    	})
		}

		$scope.edit = function(contact) {
			
			var modalInstance = $uibModal.open({
				animation: true,
	            templateUrl: 'templates/ModalContactForm.html',
	            backdrop: true,
	            keyboard: true,
	            controller: 'modalContactEditCtrl',
	            size: 'md',
	            resolve: {
	            	contact: function() {
	            		return contact;
	            	}
	            }
	    	});

	    	modalInstance.result.then(function(response) {
	    		if (!response) {
					contactService
						.getAllContacts()
						.then(loadContactSuccess, loadContactFailure);
					return;
	    		}
	    		data = {
	    			name: response.name,
	    			title: "Has editado satisfactoriamente al contacto "
	    		}
				$uibModal.open({
					templateUrl: 'templates/components/AlertDialogContactCreated.html',
					backdrop: true,
			 		keyboard: true,
			 		backdropClick: true,
					animation: true,
					controller: 'modalAlertDialogController',
					controllerAs: '$ctrl',
					resolve: {
						contact: data
					}
				});
				contactService
					.getAllContacts()
					.then(loadContactSuccess, loadContactFailure);
	    	})
		}
	}