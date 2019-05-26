//--------------------------------------
//         MONTHLY EXPENSES TAB
//--------------------------------------

//Universal "back"
$( ".backDisplay1" ).on( "click", function() {
    $(".monthly-finance-button").removeClass("active")
    $(".monthly-finance-button").attr("aria-selected", "false")
    $(".monthly-finance-display").removeClass("active show")
    $(".monthly-finance-display").attr("style", "")
    $("#tab1Content").addClass("active show")
})