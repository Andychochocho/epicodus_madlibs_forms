$(function() {
  $("#blanks form").submit(function(event) {
    var personInput = $("input#person").val();
    var objectInput = $("input#object").val();
    var shoe_sizeInput = $("input#shoe_size").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    var submitInput = $("input#submit").val();

    $(".person").text(personInput);
    $(".object").text(objectInput);
    $(".shoe_size").text(shoe_sizeInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});
