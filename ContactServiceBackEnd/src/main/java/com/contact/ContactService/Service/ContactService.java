package com.contact.ContactService.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.contact.ContactService.Model.Contact;
import com.contact.ContactService.Repository.ContactRepository;

@Service("contactService")
public class ContactService {
	
	@Autowired
	ContactRepository contactRepository;
	
	public Contact addContact (Contact contact) {
		
		return contactRepository.save(contact);
	}
	
	public Contact editContact(Contact contact) {
		
		return contactRepository.save(contact);
	}
	
	public void deleteContact(Contact contact) {
		contactRepository.delete(contact);
	}
	
	public List<Contact> getAllContact() {
		return contactRepository.findAll();
	}
	
	public Contact contactById(Contact contact) {
		return contactRepository.findOne(contact.getId());
	}
}
