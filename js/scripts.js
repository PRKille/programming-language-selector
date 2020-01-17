$(document).ready(function(){
  $("form#form-one").submit(function(){
    $("#form-one").hide();
    event.preventDefault();
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
  });
});