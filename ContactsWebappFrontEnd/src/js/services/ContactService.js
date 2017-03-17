angular.module('RDash')
	.service('contactService', ['$q', '$http', contactService])

	function contactService($q, $http) {

		var urlService = 'http://localhost:9090'
		this.getAllContacts = function() {
			var getAllContactsDeferred = $q.defer();

			$http
				.get(urlService + '/api/contact')
				.then(function(response) {
					getAllContactsDeferred.resolve(response.data);
				}, getAllContactsDeferred.reject)

			return getAllContactsDeferred.promise;

		}

		this.createContact = function(contact) {
			var createContactDeferred = $q.defer();

			$http
				.post(urlService + '/api/contact', contact)
				.then(function(response) {
					createContactDeferred.resolve(response.data)
				}, createContactDeferred.reject);

			return createContactDeferred.promise
		}

		this.editContact = function(contact) {
			var editContactDeferred = $q.defer();

			$http
				.put(urlService + '/api/contact/' + contact.id, contact)
				.then(function(response) {
					editContactDeferred.resolve(response.data);
				}, editContactDeferred.reject);

			return editContactDeferred.promise;
		}

		this.deleteContact = function(id) {
			var deleteContactDeferred = $q.defer(); 

			$http
				.delete(urlService + '/api/contact/' + id)
				.then(deleteContactDeferred.resolve, deleteContactDeferred.reject);

			return deleteContactDeferred.promise;
		}
	}