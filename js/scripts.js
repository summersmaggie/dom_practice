$(document).ready(function() {

  $("button#bark").click(function() {
    $("ul#dog").append("<li>Bark!</li>");
    $("ul#cat").append("<li>Meow!</li");
  });

  $("button#meow").click(function() {
    $("ul#dog").prepend("<li>I love everything!</li>");
    $("ul#cat").prepend("<li>I hate everyone!</li");
  });

  $("h3#dogsays").click(function() {
    $("ul#dog").append("<img src='img/cat_meme.jpg'>");
    $("ul#dog").children("img").click(function() {
    $(this).remove()
  });
  });

});
