



// if text entered and "enter" pressed, or + button pressed, then add new line
var lineNo = 0;
var lineText = '<div class="line" id="newLine"><div class="box"><span class="material-symbols-outlined">check_box_outline_blank</span></div></div>';

$(document).on("keypress", "input", function(e){
  if(e.which == 13){
      var inputVal = $(this).val();
      $("#addLine").before(lineText);
      $("#newLine").append("<div class='text' >" + inputVal + "</div>");
      $("#newLine").attr("id", "line"+lineNo);
      lineNo++;

      // reset contents of add line
      $("#newText").val("");
  }
});

$("#add").on("click", function(){
  var inputVal = $("#newText").val();
  $("#addLine").before(lineText);
  $("#newLine").append("<div class='text' >" + inputVal + "</div>");
  $("#newLine").attr("id", "line"+lineNo);
  lineNo++;

  // reset contents of add line
  $("#newText").val("");
});

// for checked box, use <span class="material-symbols-outlined">check_box</span>
$(document).on("click", ".box", function(e){
  // alert("test");
  if ($(this).hasClass("checked")){
    $(this).find("span").replaceWith('<span class="material-symbols-outlined">check_box_outline_blank</span>');
  } else {
    $(this).find("span").replaceWith('<span class="material-symbols-outlined">check_box</span>');
    $(this).parent().find(".text").wrapInner("<s></s>");

  }
  $(this).toggleClass("checked");
});