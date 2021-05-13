/*
this is a header function that makes it so I don't have to copy header.html into every file
*/
$(function(){
  $("#header").load("header.html");
})



$(document).ready(function() {
  $("[href]").each(function() {
    if (this.href == window.location.href) {
      $(this).addClass("current");
    }
  });
});
