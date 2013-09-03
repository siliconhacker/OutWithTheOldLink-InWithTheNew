$(document).ready(function() {
$("div.test a").click(function(e) {
    $(this).hide();
    showTheMoney();
    e.preventDefault();
});
});

function showTheMoney() {
    //alert("hey");
    $("#nowLink").hide();
     if ( $("div.test a:visible").length === 0)
      //$("#wrap1").hide( );
      $("#nowLink").fadeIn(1600).html('<a href="http://www.expelling.net">Expelling Home</a>');
}