$ (document).ready(function() {
  $("#blanks form").submit(function(event) {
    var dinosaurInput = $("input#dinosaur").val();
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var verbInput = $("input#verb").val();
    var adverbInput = $("input#adverb").val();
    var adjectiveInput = $("input#adjective").val();
    var nounInput = $("input#noun").val();

    $(".dinosaur").text(dinosaurInput);
    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".verb").text(verbInput);
    $(".adverb").text(adverbInput);
    $(".adjective").text(adjectiveInput);
    $(".noun").text(nounInput);
    $("#story").show();
    event.preventDefault();
  });
});
