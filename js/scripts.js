$(document).ready(function(){
  $("form#form-one").submit(function(){
    $("#form-one").hide();
    $(".opening").hide();
    answerOne = $("input:radio[name=question1]:checked").val();
    answerTwo = $("input:radio[name=question2]:checked").val();
    answerThree = $("input:radio[name=question3]:checked").val();
    answerFour = $("input:radio[name=question4]:checked").val();
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