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
jQuery("#Redevelopment_Form").submit(function(e) {
jQuery(this).find('input[type="password"],input[type="text"],input[type="number"],input[type="tel"],input[type="email"],textarea').each(function(){jQuery(this).val($.trim(jQuery(this).val()));})
function valid_contact()
{	
	var name=document.querySelector('#Redevelopment_Form #name');
	var email=document.querySelector('#Redevelopment_Form #email');
	var contact_no=document.querySelector('#Redevelopment_Form #contact_no');
    var society_name=document.querySelector('#Redevelopment_Form #society_name');
    var Society_location=document.querySelector('#Redevelopment_Form #Society_location');
//    var Plot_area=document.querySelector('#Redevelopment_Form #Plot_area');
//    var TP_scheme_no=document.querySelector('#Redevelopment_Form #TP_scheme_no');
//    var Final_plot_no=document.querySelector('#Redevelopment_Form #Final_plot_no');
//    var Society_type=document.querySelector('#Redevelopment_Form #Society_type');
//    var Number_of_units=document.querySelector('#Redevelopment_Form #Number_of_units');
//    var Year_establishment=document.querySelector('#Redevelopment_Form #Year_establishment');
//    var document1=document.querySelector('#Redevelopment_Form #document1');

//    var message=document.querySelector('#Redevelopment_Form #message');

	if(name.value=='')
	{
		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Enter Name.';
		name.style.borderColor="red";
		name.focus();
		return false;
	}
	else{name.style.borderColor=""}
	var digit = name.value;
	var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])+(\s{0,1}[a-zA-Z-, ])*$/;
	if(!alpha.test(digit)) {
		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Invalid Name: ' + name.value;
		name.style.borderColor="red";		
		name.value = '';
		name.focus();
		return false;
	}
	else{name.style.borderColor=""}
	
	if(contact_no.value=='')
	{
		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Enter Contact No.';
		contact_no.style.borderColor="red";
		contact_no.focus();
		return false;
	}else{contact_no.style.borderColor=""}
	var c_mobile = contact_no.value.replace(/\+/g,'');
	var c_pattern = /^(?!(\d)\1+\b|1234567890)\d{10,}$/;
	if (!c_pattern.test(c_mobile)) {
		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Invalid Contact No.: ' + contact_no.value;
		contact_no.style.borderColor="red";
		contact_no.value = '';
        contact_no.focus();
		return false;
	}else{contact_no.style.borderColor=""}
    
    if(email.value=='')
	{
		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Enter Email ID.';
		email.style.borderColor="red";
		email.focus();
		return false;
	}else{email.style.borderColor=""}
	var c_reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var c_address = email.value;
	if(c_reg.test(c_address) == false) {
		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Invalid Email ID: ' + email.value;
		email.style.borderColor="red";
		email.value = '';
		email.focus();
		return false;
	}
	else{email.style.borderColor=""}
    
    
    
	var society_name=document.querySelector('#Redevelopment_Form #society_name');	
	if(society_name.value == '')
	{
		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Enter society Name you are inquiring for';
		society_name.style.borderColor="red";
		society_name.focus();
		return false;
	}
	else{society_name.style.borderColor=""}
	
    
    
    var Society_location=document.querySelector('#Redevelopment_Form #Society_location');	
	if(Society_location.value=='')
	{
		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Enter Society location you are inquiring for';
		Society_location.style.borderColor="red";
		Society_location.focus();
		return false;
	}else{Society_location.style.borderColor=""}
	
    
//     var Plot_area=document.querySelector('#Redevelopment_Form #Plot_area');	
//	if(Plot_area.value=='')
//	{
//		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Enter Plot area you are inquiring for';
//		Plot_area.style.borderColor="red";
//		Plot_area.focus();
//		return false;
//	}else{Plot_area.style.borderColor=""}
//	
//    
//    var TP_scheme_no=document.querySelector('#Redevelopment_Form #TP_scheme_no');	
//	if(TP_scheme_no.value=='')
//	{
//		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Enter TP scheme no you are inquiring for';
//		TP_scheme_no.style.borderColor="red";
//		TP_scheme_no.focus();
//		return false;
//	}else{TP_scheme_no.style.borderColor=""}
//	
//   var Final_plot_no=document.querySelector('#Redevelopment_Form #Final_plot_no');	
//	if(Final_plot_no.value=='')
//	{
//		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Enter Final plot no you are inquiring for';
//		Final_plot_no.style.borderColor="red";
//		Final_plot_no.focus();
//		return false;
//	}else{Final_plot_no.style.borderColor=""}
//	
//	var Society_type=document.querySelector('#Redevelopment_Form #Society_type');	
//	if(Society_type.value=='')
//	{
//		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Select Society type you are inquiring for';
//		Society_type.style.borderColor="red";
//		Society_type.focus();
//		return false;
//	}else{Society_type.style.borderColor=""}
//	
//     
//    var Number_of_units=document.querySelector('#Redevelopment_Form #Number_of_units');	
//	if(Number_of_units.value=='')
//	{
//		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Enter Number of units you are inquiring for';
//		Number_of_units.style.borderColor="red";
//		Number_of_units.focus();
//		return false;
//	}else{Number_of_units.style.borderColor=""}
//	
//     var Year_establishment=document.querySelector('#Redevelopment_Form #Year_establishment');	
//	if(Year_establishment.value=='')
//	{
//		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Enter Year establishment you are inquiring for';
//		Year_establishment.style.borderColor="red";
//		Year_establishment.focus();
//		return false;
//	}else{Year_establishment.style.borderColor=""}
//    
//    var document1=document.querySelector('#Redevelopment_Form #document1');	
//	if(document1.value=='')
//	{
//		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Upload your Document.';
//		document1.style.borderColor="red";
//		document1.focus();
//		return false;
//	}else{contact_no.style.borderColor=""}	
//	var b=/([a-zA-Z0-9\s_\\.\-:])+(.doc|.docx|.pdf)$/;
//	if(!b.test(document1.value))
//	{
//		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Upload Document only In doc | docx | pdf Format!';
//		document1.style.borderColor="red";
//		document1.focus();
//		return false;
//	}else{contact_no.style.borderColor=""}
//    
//   var message=document.querySelector('#Redevelopment_Form #message');	
//	if(message.value=='')
//	{
//		document.querySelector('#Redevelopment_Form #error_data').innerHTML = '* Please Enter message you are inquiring for';
//		message.style.borderColor="red";
//		message.focus();
//		return false;
//	}else{message.style.borderColor=""}
	
    document.querySelector('#Redevelopment_Form #error_data').innerHTML = '';
    return true;
    
    
}
	if(valid_contact()==true){document.querySelector('#Redevelopment_Form #form_process').style.visibility="visible";jQuery(this).find('[type="submit"]').prop('disabled', true);//.fadeOut('slow');
		var form_url = jQuery("#Redevelopment_Form").attr('action'); // the script where you handle the form input.	
		$.ajax({
			   type: "POST",
			   url: form_url,
			   enctype: 'multipart/form-data',
			   data: new FormData(this),
            contentType: false,
            cache: false,
            processData:false,
			   success: function(data)
			   {
				   jQuery("#Redevelopment_Form").empty();
				   jQuery("#Redevelopment_Form").html(data); // show response from the php script.
			   },
			   error: function(data)
			   {
				   jQuery("#Redevelopment_Form").empty();
				   jQuery("#Redevelopment_Form").html("<div class='alert alert-danger'>Sorry! Some Technical issue occured. Please try again after sometime.</div>"); // show response from the php script.
			   }
			 });
	
			e.preventDefault();
	}
	else{e.preventDefault();}
});