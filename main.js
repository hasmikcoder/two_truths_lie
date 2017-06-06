$(document).ready(function() {
 $("button").on("click",function() {

    if($(this).hasClass("true")) {

    console.log("The answer is a truth");
    $(this).css("border", "2px solid red");
    $("h1").text("Wrong.Try again");
    $("h1").css({"display": "flex", "justify-content": "center", "color": "red"});

  } else if($(this).hasClass("wrong")){
    $(this).css("border", "2px solid #56A589");
    $("h1").text("Correct");
    $("h1").css({"display": "flex", "justify-content": "center", "color": "green"});
    console.log("Sorry,the answer is a lie");
   $("#next").css({"display" : "block"});

      }

    });
});
