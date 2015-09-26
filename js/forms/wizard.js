jQuery(document).ready(function($){

  // Form Validation
  $.validate({
    form:'#wizard-form',
    modules : 'location, date, security, file',
    onError : function() {
      // Validation Failed
      return false;
    },
    onSuccess : function() {
      // Valid Form
      return false;
    }
  });
  
  // Actual Wizard
  var current_fs, next_fs, previous_fs; //fieldsets
  var left, opacity, scale; //fieldset properties which we will animate
  var animating; //flag to prevent quick multi-click glitches

  $(".next").on('click',function(){  
      var form = $(this).parents('form');
      var validate = $(form).data('validate');
      current_fs = $(this).parent();
      next_fs = $(this).parent().next();
  
      if (validate != '' && typeof validate !== 'undefined') {
        var section_valid = false;
        var valid = $(form).isValid();
        if (!valid) {
          if ($('section:visible .controls.has-error',form).length > 0) {
            return false;
          } else {
            $('section .controls',form).removeClass('has-error');
            $('section .controls input',form).removeAttr('style');
            $('section .controls .form-error',form).remove();
          }
        }
      }
  
      //activate next step on progressbar using the index of next_fs
      $(".wizard-form-progress li").eq($("section").index(next_fs)).addClass("active");
      
      // Show next section
      current_fs.fadeOut(500, function(){
        next_fs.fadeIn(500); 
      });
      
  });

  $(".previous").on('click', function(){
      current_fs = $(this).parent();
      previous_fs = $(this).parent().prev();
  
      //de-activate current step on progressbar
      $(".wizard-form-progress li").eq($("section").index(current_fs)).removeClass("active");
  
      current_fs.fadeOut(500, function(){
        previous_fs.fadeIn(500); 
      });
  
      /*//show the previous fieldset
      previous_fs.show(); 
    
      //hide the current fieldset with style
      current_fs.animate({opacity: 0}, {
        step: function(now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale previous_fs from 80% to 100%
          scale = 0.8 + (1 - now) * 0.2;
          //2. take current_fs to the right(50%) - from 0%
          left = ((1-now) * 50)+"%";
          //3. increase opacity of previous_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({'left': left});
          previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
        }, 
        duration: 800, 
        complete: function(){
          current_fs.hide();
          animating = false;
        }, 
        //this comes from the custom easing plugin
        easing: 'easeInOutBack'
      });*/
  });

  $(".submit").click(function(){
    return false;
  });
  
});