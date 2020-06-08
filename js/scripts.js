$(document).ready(function() {
  $("form#code").submit(function() {
  event.preventDefault();
    let color = $("#color").val();
    let cream = $("#ice-cream").val();
    let animal = $("#animal").val();
    let array = [color, cream, animal];
    
    $("li.fave-list").append(
      "<li>" + array[0] + "</li>",
      "<li>" + array[1] + "</li>",
      "<li>" + array[2] + "</li>"
      );

    console.log(array);
    return array;
  });
});



