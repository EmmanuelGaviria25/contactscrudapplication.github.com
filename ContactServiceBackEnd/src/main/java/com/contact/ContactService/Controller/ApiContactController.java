package com.contact.ContactService.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.contact.ContactService.Model.Contact;
import com.contact.ContactService.Service.ContactService;

@RestController
@RequestMapping("/api")
public class ApiContactController {
	
	@Autowired
	ContactService contactService;
	
	@RequestMapping(value = "/contact", method = RequestMethod.GET)
	public Object getAllContact () {
		List<Contact> contacts = contactService.getAllContact();
		System.out.println(contacts.size());
		return new ResponseEntity<List<Contact>> (contacts, HttpStatus.OK); 
		
	}
	
	@RequestMapping(value = "/contact/{contact}", method = RequestMethod.GET)
	public ResponseEntity<Object> getContact (@PathVariable Contact contact) {
		return new ResponseEntity<Object> (contact, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/contact", method = RequestMethod.POST)
	public ResponseEntity<Object> newContact(@RequestBody Contact contact) {
		
		if (contact.getName() == null || contact.getEmail() == null || contact.getAddress() == null || contact.getTelephone() == null)
			return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
		
		return new ResponseEntity<Object> (contactService.addContact(contact), HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/contact/{contact}", method = RequestMethod.PUT)
	public ResponseEntity<Object> editContact(@PathVariable Contact contact, @RequestBody Contact newContact) {
		
		return new ResponseEntity<Object> (contactService.editContact(newContact), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/contact/{contact}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> deleteContact(@PathVariable Contact contact) {
		contactService.deleteContact(contact);
		return new ResponseEntity<Object> (null, HttpStatus.OK);
	}
}
