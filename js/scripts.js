$(document).ready(function(){
  $("form#form-one").submit(function(){ 
    event.preventDefault(); 
    $("#form-one").hide();
    $("#form-two").show();
    answerOne = $("input:radio[name=question1]:checked").val();
    $("form#form-two").submit(function(){
      event.preventDefault();
      $("#form-two").hide();
      $("#form-three").show();
      answerTwo = $("input:radio[name=question2]:checked").val();
      $("form#form-three").submit(function(){
        event.preventDefault();
        $("#form-three").hide();
        $("#form-four").show();
        answerThree = $("input:radio[name=question3]:checked").val();
        $("form#form-four").submit(function(){
          event.preventDefault();
          $("#form-four").hide();
          $("#form-five").show();
          answerFour = $("input:radio[name=question4]:checked").val();
          $("form#form-five").submit(function(){
            event.preventDefault();
            $("#form-five").hide();
            $(".opening").hide();
            answerFive = $("input:radio[name=question5]:checked").val();
            if (answerFive === "1" || answerFive === "2") {
              $(".one-two-stars").fadeIn();
            } else if (answerFive === "3" || answerFive === "4") {
              $(".three-four-stars").slideDown();
              if (answerOne === "solid" && answerTwo === "new" && answerFour === "play") {
                $(".csharp").slideDown();
              } else if (answerOne === "fun" && answerTwo === "old" && answerFour === "work") {
                $(".ruby").slideDown();
              } else if (answerOne === "pretty" && answerTwo === "old" && answerFour === "play") {
                $(".python").slideDown();
              } else {
                $(".javascript").slideDown();
              }
            } else if (answerFive === "5") {
              $(".five-stars").slideDown();
              if (answerOne === "solid" && answerTwo === "new" && answerFour === "play") {
                $(".csharp").slideDown();
              } else if (answerOne === "fun" && answerTwo === "old" && answerFour === "work") {
                $(".ruby").slideDown();
              } else if (answerOne === "pretty" && answerTwo === "old" && answerFour === "play") {
                $(".python").slideDown();
              } else {
                $(".javascript").slideDown();
              }
            } else {
              alert("You have to rate to see your answer!")
              $(".opening").show();
              $("#form-one").show();
            }

      $("button.btn-danger").click(function(){
        $(".result").fadeOut();
        $(".opening").delay(600).fadeIn(); 
        $("#form-one").delay(600).fadeIn();
      });
      event.preventDefault();
          });
        });
      });
    });
  });
});