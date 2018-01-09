$(document).ready(function() {

  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello</li>");
    $("ul#page").prepend("<li>What do you want?</li");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#page").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Okay bye</li>");
    $("ul#page").prepend("<li>Good riddance</li");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Why are you so mean?</li>");
    $("ul#page").prepend("<li>I was programmed this way</li");
  });

});
