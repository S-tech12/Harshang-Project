function contact_num_valid(evt) {
    var theEvent = evt || window.event;
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var count = (evt.target.value.match(/\+/g) || []).length;
    if (count < 2 && key == '+') {
        evt.target.value = evt.target.value.replace(/\+/g, "");
        evt.target.value = '+' + evt.target.value;
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
        return false;
    }
    var regex = /[+0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
jQuery("#Sales_Inquiry").submit(function(e) {
jQuery(this).find('input[type="password"],input[type="text"],input[type="number"],input[type="tel"],input[type="email"],textarea').each(function(){jQuery(this).val($.trim(jQuery(this).val()));})
function valid_contact()
{	
	var name=document.querySelector('#Sales_Inquiry #name');
    var occupation=document.querySelector('#Sales_Inquiry #occupation');
	var contact_no=document.querySelector('#Sales_Inquiry #contact_no');
    var project=document.querySelector('#Sales_Inquiry #project');
	var email=document.querySelector('#Sales_Inquiry #email');
	if(name.value=='')
	{
		document.querySelector('#Sales_Inquiry #error_data').innerHTML = '* Please Enter Name.';
		name.style.borderColor="red";
		name.focus();
		return false;
	}
	else{name.style.borderColor=""}
	var digit = name.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Sales_Inquiry #error_data').innerHTML = '* Invalid Name: ' + name.value;
		name.style.borderColor="red";		
		name.value = '';
		name.focus();
		return false;
	}
	else{name.style.borderColor=""}
    	
	if(!document.querySelector('input[name="occupation"]:checked'))
	{
		document.querySelector('#Sales_Inquiry #error_data').innerHTML = '* Please Select Occupation.';
		// document.querySelector('input[name="occupation"]').style.borderColor="red";
		// occupation.focus();
		return false;
	}
	// else{occupation.style.borderColor=""}
    
	if(contact_no.value=='')
	{
		document.querySelector('#Sales_Inquiry #error_data').innerHTML = '* Please Enter Contact No.';
	
		contact_no.style.borderColor="red";
		contact_no.focus();
		return false;
	}else{contact_no.style.borderColor=""}
	var c_mobile = contact_no.value.replace(/\+/g,'');
	var c_pattern = /^(?!(\d)\1+\b|1234567890)\d{10,}$/;
	if (!c_pattern.test(c_mobile)) {
		document.querySelector('#Sales_Inquiry #error_data').innerHTML = '* Invalid Contact No.: ' + contact_no.value;
		contact_no.style.borderColor="red";
		contact_no.value = '';
        contact_no.focus();
		return false;
	}else{contact_no.style.borderColor=""}
    	
	if(!document.querySelector('input[name="project"]:checked'))
	{
		document.querySelector('#Sales_Inquiry #error_data').innerHTML = '* Please Select Interested Project.';
		// project.style.borderColor="red";
		// project.focus();
		return false;
	}
	// else{project.style.borderColor=""}
    
	if(email.value=='')
	{
		document.querySelector('#Sales_Inquiry #error_data').innerHTML = '* Please Enter Email ID.';
		email.style.borderColor="red";
		email.focus();
		return false;
	}else{email.style.borderColor=""}
	var c_reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var c_address = email.value;
	if(c_reg.test(c_address) == false) {
		document.querySelector('#Sales_Inquiry #error_data').innerHTML = '* Invalid Email ID: ' + email.value;
		email.style.borderColor="red";
		email.value = '';
		email.focus();
		return false;
	}
	else{email.style.borderColor=""}
    
    var convenient_time=document.querySelector('#Sales_Inquiry #convenient_time');
    if(!document.querySelector('input[name="convenient_time"]:checked'))
	{
		document.querySelector('#Sales_Inquiry #error_data').innerHTML = '* Please Enter Convenient Time.';
		// convenient_time.style.borderColor="red";
		// convenient_time.focus();
		return false;
	}
	// else{convenient_time.style.borderColor=""}
	document.querySelector('#Sales_Inquiry #error_data').innerHTML = '';
	return true;
}
	if(valid_contact()==true){document.querySelector('#Sales_Inquiry #form_process').style.visibility="visible";jQuery(this).find('[type="submit"]').prop('disabled', true);//.fadeOut('slow');
		var form_url = jQuery("#Sales_Inquiry").attr('action'); // the script where you handle the form input.	
		$.ajax({
			   type: "POST",
			   url: form_url,
			   data: jQuery("#Sales_Inquiry").serialize(), // serializes the form's elements.
			   success: function(data)
			   {
				   jQuery("#Sales_Inquiry").empty();
				   jQuery("#Sales_Inquiry").html(data); // show response from the php script.
			   },
			   error: function(data)
			   {
				   jQuery("#Sales_Inquiry").empty();
				   jQuery("#Sales_Inquiry").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
			   }
			 });
	
			e.preventDefault();
	}
	else{e.preventDefault();}
});