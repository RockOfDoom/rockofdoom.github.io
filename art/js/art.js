//javascript/jQuery program for manipulating and displaying the Midnight House's Art page.

//allows artdiv displays to change size when hovered over
$(".artdiv").children(":not(p)").toggleClass("norm");
$(".artdiv").hover(function() {
  $(this).toggleClass("enlarged");
  $(this).children(":not(p)").toggleClass("enlarged");
  $(this).children("p").toggleClass("phidden");
});

//allows the detailed art displays to be revealed when an artdiv is clicked on
$(".artdiv").children("#x").toggleClass("hidden");
$(".artdiv").children("p").toggleClass("phidden");
$(".artdiv").click(function(){
  $("div#output").addClass("showing");
  $("#output").html($(this).html());
  $("#output").children().removeClass("hidden");
  $("#output").children().removeClass("enlarged");
  $("#output").children().removeClass("norm");
  $("#output").children().addClass("display");
  window.scrollTo(0, 365);

  //close display
  $("#x").click(function() {
    $("div#output").removeClass("showing");
    $("#output").html("");
  });
});
