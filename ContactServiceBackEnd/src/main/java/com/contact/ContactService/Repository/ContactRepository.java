package com.contact.ContactService.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.contact.ContactService.Model.Contact;

@Repository("contactRepository")
public interface ContactRepository extends JpaRepository<Contact, Integer> {

	
}
