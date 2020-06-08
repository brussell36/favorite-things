$(document).ready(function() {
  $("form#code").submit(function() {
  event.preventDefault();
    let color = $("#color").val();
    let cream = $("#ice-cream").val();
    let animal = $("#animal").val();
    let array = [color, cream, animal];
    console.log(array);
  });
});