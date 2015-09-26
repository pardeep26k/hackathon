jQuery(document).ready(function($){

  if ($('#my-awesome-dropzone').length) {
    
    Dropzone.autoDiscover = false;
    var myDropzone = new Dropzone("#my-awesome-dropzone", {
          url:'forms-upload-action.php', 
          previewsContainer: '#preview-dropzone'
        });
  
    myDropzone.on("addedfile", function(file) {
      /* Maybe display some more file information on your page */
      alert('Some custom callback upon file upload!');
    });
    
  }
  
});