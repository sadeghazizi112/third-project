var zero = ['0'];
var one =['1'];

// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
// event.preventDefault()
//   var sentence = $("#words").val();
//   var splitsentence = sentence.split("");
//
//   for (x = 0; x < splitsentence.length; x++) {
//     for (i = 0; i < zero.length; i++) {
//       if(splitsentence[x] == zero[i]) {
//         console.log(splitsentence[x] + " " + zero[i]);
//         splitsentence[x] = "beep"
//       }
//     }
//   }
//   for (y = 0; y < splitsentence.length; y++) {
//     for (i = 0; i < one.length; i++) {
//       if(splitsentence[y] == one[i]) {
//         console.log(splitsentence[x] + " " + one[i]);
//         splitsentence[y] = "boop"
//       }
//     }
//   }
//   console.log(splitsentence)
//   console.log(splitsentence.join(' '));
// });
// });


$(document).ready(function() {
  $("#formOne").submit(function(event) {
event.preventDefault()
  var sentence = parseInt($("#words").val());

  for (x = 0; x <= sentence; x++) {
    if ((x % 3 == 0) && (x != 0)) {
      console.log("I'm sorry, Dave.")
    }
    else if (x.toString().includes("1") == true) {
      console.log("boop")
    }
    else if (x.toString().includes("0") == true) {
      console.log("beep")
    }
    else {
      console.log(x)
    }
  }

});
});

// if 1 is first, it takes presidence.
