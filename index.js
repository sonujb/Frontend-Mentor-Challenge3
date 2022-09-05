$(".complete-message").hide();

$(".submit-button").click(function() {
  var name = $(".name-input").val();
  var no = $(".no-input").val();
  var month = $(".month-input").val();
  var year = $(".year-input").val();
  var cvv = $(".cvv-input").val();

  if(name==="" || no==="" || month==="" || year==="" || cvv===""){
    alert("Please fill all the details!");
  }else{
    $(".card-name").text(name.toUpperCase());
    $(".card-no").text(formatNo(no));
    $(".card-exp").text(month + "/" + year);
    $(".card-cvv").text(cvv);
    $(".details-form").hide();
    $(".complete-message").show();
  }
});

function formatNo(n){
  if(n.indexOf(' ')<4){
    n.trim();
    return n.substring(0,4) + " " + n.substring(4,8) + " " + n.substring(8,12) + " " + n.substring(12,16);
  }else{
    return n;
  }
}
