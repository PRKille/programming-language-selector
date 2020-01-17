$(document).ready(function(){
  $("form#form-one").submit(function(){
    $("#form-one").hide();
    $(".opening").hide();
    answerOne = $("input:radio[name=question1]:checked").val();
    console.log(answerOne);
    answerTwo = $("input:radio[name=question2]:checked").val();
    console.log(answerTwo);
    answerThree = $("input:radio[name=question3]:checked").val();
    console.log(answerThree);
    answerFour = $("input:radio[name=question4]:checked").val();
    console.log(answerFour);
    answerFive = $("input:radio[name=question5]:checked").val();
    console.log(answerFive);
    
    if (answerFive === "1" || answerFive === "2") {
      $(".one-two-stars").show();
    } else if (answerFive === "3" || answerFive === "4") {
      $(".three-four-stars").show();
      if (answerOne === "solid" && answerTwo === "new" && answerFour === "play") {
        $(".csharp").show();
      } else if (answerOne === "fun" && answerTwo === "old" && answerFour === "work") {
        $(".ruby").show();
      } else if (answerOne === "pretty" && answerTwo === "old" && answerFour === "play") {
        $(".python").show();
      } else {
        $(".javascript").show();
      }
    } else if (answerFive === "5") {
      $(".five-stars").show();
      if (answerOne === "solid" && answerTwo === "new" && answerFour === "play") {
        $(".csharp").show();
      } else if (answerOne === "fun" && answerTwo === "old" && answerFour === "work") {
        $(".ruby").show();
      } else if (answerOne === "pretty" && answerTwo === "old" && answerFour === "play") {
        $(".python").show();
      } else {
        $(".javascript").show();
      }
    } else {
      alert("You have to rate to see your answer!")
      $(".opening").show();
      $("#form-one").show();
    }
    event.preventDefault();
  });
});