$(document).ready(function(){
  var answerOne;
  var answerTwo = $("input:radio[name=question2]:checked").val();
  var answerThree = $("input:radio[name=question3]:checked").val();
  var answerFour = $("input:radio[name=question4]:checked").val();
  var answerFive = parseInt($("input:radio[name=question5]:checked").val());
  $("form#form-one").submit(function(){
    $("#form-two").show();
    $("#form-one").hide();
    event.preventDefault();
    answerOne = $("input:radio[name=question1]:checked").val();
    console.log(answerOne);
  });
  $("form#form-two").submit(function(){
    $("#form-three").show();
    $("#form-two").hide();
    event.preventDefault();
    console.log(answerTwo);
  });
  console.log(answerTwo);

  var globalString = "This is a global variable";

function sampleFunction() {
  alert(globalString);
  globalString = "This is a global variable update!!";
  console.log(globalString);
  alert(globalString);
}

alert(globalString);
sampleFunction();
alert(globalString);
});