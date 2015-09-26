jQuery(document).ready(function($){

  // Init
  if ($('#datatable-01').length) {
    $('#datatable-01').dataTable({'iDisplayLength':7});
  }
  
  if ($('#datatable-02').length) {
    $('#datatable-02').dataTable({'iDisplayLength':5});
  }
  
  if ($('#datatable-03').length) {
    $('#datatable-03').dataTable({'iDisplayLength':3});
  }

});