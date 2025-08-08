$(document).ready(function() {
  $('.popup-btn').click(function() { 
    var popupBlock = $('#' + $(this).data('popup'));

    if ($(this).data('popup-form')) {
      var popupV = $(this).data('popup-form');
      $('#Download_Brochure #project').val(popupV);
    }

    popupBlock.addClass('active')
      .find('.fade-out').click(function() {
        popupBlock.css('opacity', '0').find('.popup-content').css('margin-top', '350px');
        $('#Download_Brochure #project').val('');
        
        setTimeout(function() {
          jQuery("#Download_Brochure").show();
          jQuery("#popup-reg .form-w .alert").remove();
          jQuery("#form_process .alert").remove();
          $('.popup').removeClass('active');
          jQuery('#Download_Brochure #form_process').css('visibility',"hidden");
          jQuery('.popup form#Download_Brochure + .fade-out').css('visibility','hidden');
          popupBlock.css('opacity', '').find('.popup-content').css('margin-top', '');
        }, 600);
        
        setTimeout(function() {
          jQuery('#Download_Brochure')[0].reset();
        }, 1000);
      });
  });

  // Prevent default form submission and clear form
  $('#Download_Brochure').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission
    $(this)[0].reset(); // Reset the form fields
	 // Enable all form inputs
    $('#Download_Brochure :input').prop('disabled', false);
  });

  
});