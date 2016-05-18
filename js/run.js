$(document).ready(function(){


	$('form').submit(function(e){
		e.preventDefault(); // stops page from refreshing
		
		//objects
		var contact = {
			firstName: $('input[name=firstName]').val(), //sets variables on the object
			lastName: $('input[name=lastName]').val(),
			phoneNumber: $('input[name=phoneNumber]').val(),
			street: $('input[name=street]').val(),
			city: $('input[name=city]').val(),
			state: $('select[name=state]').val() //no semi colon due to "object"
		};

		$('form').trigger('reset');
		addContact(contact); //calls function
		
	});

	$('.listContacts').on('click', 'li', function(){
		var contact = $(this).data('contact'); //gets contact
		showContact(contact);
	})

	function addContact(contact){
		//creates list of contacts and clickable firstname
		var element = $('<li>').data('contact', contact).text(contact.firstName + ' ' + contact.lastName); 
		//addContact to contact list
		$('.listContacts').append(element);
	}

	function showContact(contact){
		 var template =
		     '<p>First Name: {firstName}</p>'
		   + '<p>Last Name: {lastName}</p>'
		   + '<p>Phone Number: {phoneNumber}</p>'
		   + '<p>Street: {street}</p>'
		   + '<p>City: {city}</p>'
		   + '<p>State: {state}</p>';
		   
		 var output = template
		    .replace('{firstName}', contact.firstName)
		    .replace('{lastName}', contact.lastName)
		    .replace('{phoneNumber}', contact.phoneNumber)
		    .replace('{street}', contact.street)
		    .replace('{city}', contact.city)
		    .replace('{state}', contact.state);
		    
		  $('.info').html(output);
	}
})