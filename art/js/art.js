//javascript/jQuery program for manipulating and displaying the Midnight House's Art page.

//allows artdiv displays to change size when hovered over
$(".artdiv").children().toggleClass("norm");
$(".artdiv").hover(function() {
  $(this).toggleClass("enlarged");
  $(this).children().toggleClass("enlarged");
});

//allows the detailed art displays to be revealed when an artdiv is clicked on
$(".bigdisplay").children().toggleClass("hidden");
$(".artdiv").click(function(){
  $("div#output").addClass("showing");
  $("#output").html($(this).children(".bigdisplay").html());
  $("#output").children().toggleClass("hidden");
  $("#output").children().toggleClass("display");
  window.scrollTo(0, 365);

  //close display
  $("#x").click(function() {
    $("div#output").removeClass("showing");
    $("#output").html("");
  });
});
