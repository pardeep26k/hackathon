jQuery(document).ready(function($) {

  // Hook the wizard
  var wiz = $('.wizard').wizard();

  // On change
  $('.wizard').on('change', function(e, data) {
    var wizard = $(this);
    var inner = $(wizard).parents('.panel');

    // Check if input is valid
    var error = 0;
    var step_form = $('div[data-step="' + (data.step) + '"]', '.step-content');
    
    $('input.required', step_form).each(function(i, item) {
      if ($(item).val() == '') {
        $(item).addClass('error');
        error = 1;
      }
    });

    if (error) {
      return false;
    }

    $('div[data-step="' + (data.step) + '"]', inner).hide();

    
    if (data.direction == 'next') {
      $('div[data-step="' + (data.step+1) + '"]', inner).show();
    } else {
      $('div[data-step="' + (data.step-1) + '"]', inner).show();
    }
  });

  // Finished, submit the form!

  
  // Finished, submit the form!
  $('.wizard').on('finished.fu.wizard', function() {
    var step = $(wiz).wizard('selectedItem');
    var max_steps = $('.steps>li', wiz).length;
    
    var form_data = $('#wizard-form-data').serialize();

    $('#wizard-form, .actions, .step-content').hide();
    $('.wizard-form-success').fadeIn(800);

    return false;
  });

  // Previouse Button
  $('.btn-prev', '.actions').on('click', function() {
    wiz.wizard('prev');
  });

  // Next button
  $('.btn-next', '.actions').on('click', function() {
    wiz.wizard('next');
  });

});