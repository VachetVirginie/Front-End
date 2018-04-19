$(function() {
    $(".expand").on( "click", function() {
      $(this).next().slideToggle(200);
      $expand = $(this).find(">:first-child");
      
      if($expand.text() == "+") {
        $expand.text("-");
      } else {
        $expand.text("+");
      }
    });
  });