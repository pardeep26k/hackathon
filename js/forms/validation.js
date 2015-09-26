jQuery(document).ready(function($){
  
  
  $.validate({
    form:'.validate-form',
    modules : 'location, date, security, file',
    onError : function() {
      // Validation Failed
    },
    onSuccess : function() {
      // Valid Form
    }
  });
  
  
  $.validate({
    form:'.validate-form-callback',
    modules : 'location, date, security, file',
    onModulesLoaded : function() {
      $('input[name="user_country"]').suggestCountry();
    },
    onError : function() {
      // Validation Failed
      alert('Validation Callback: Validation Failed');
    },
    onSuccess : function() {
      // Valid Form
      alert('Validation Callback: Validation Successful');
    }
  });

  
});