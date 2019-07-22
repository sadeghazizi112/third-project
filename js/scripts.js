var zero = ['0'];
var one =['1'];

$('#outputdata').toggle();

$(document).ready(function() {
  $("#formOne").submit(function(event) {
event.preventDefault()
  var sentence = parseInt($("#words").val());

  for (x = 0; x <= sentence; x++) {
    if ((x % 3 == 0) && (x != 0)) {
      $("#outputdata").append("I'm sorry, Dave.<br>");
    }
    else if (x.toString().includes("1") == true) {
      $("#outputdata").append("boop<br>");
    }
    else if (x.toString().includes("0") == true) {
        $("#outputdata").append("beep<br>");
    }
    else {
        $("#outputdata").append(x+"<br>");
    }
  }

$("#outputdata").show();

});
});
