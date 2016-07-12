var contacts = [];

$(document).ready(function() {
  
  	$('#fillForm').submit(function(){
  		newContact();
  		updateList();
  		document.getElementById('fillForm').reset();
  		return false;
  	})
  
});

var newContact = function() {
  var contact = {
  	firstName:$('.firstName').val(),
  	lastName:$('.lastName').val(),
  	phoneNumber:$('.phoneNumber').val(),
  	street:$('.street').val(),
  	city:$('.city').val(),
  	state:$('.state').val()
  };
  contacts.push(contact);
};

var updateList = function() {
	$('.contactList').html("")
	for (var index = 0; index < contacts.length; index++) {
		
		var myFunc = function(i) {
			var html = $('<li>' + contacts[i].firstName + " " + contacts[i].lastName + '</li>').click(function() {
			$('aside').show();
			$('.fullname').html(contacts[i].firstName + " " + contacts[i].lastName)
			$('.first').html(contacts[i].firstName)
			$('.last').html(contacts[i].lastName)
			$('.phone').html(contacts[i].phoneNumber)
			$('.address').html('<li>' + contacts[i].street + " " + contacts[i].city + ", " + contacts[i].state + '</li>')
			})
			return html
		}
		var html = myFunc(index)
		$('.contactList').append(html)
	}
}

