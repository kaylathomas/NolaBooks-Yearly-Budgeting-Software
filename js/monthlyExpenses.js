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

//Monthly Expenses display buttons
$("#monthlyHomeButton").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyTransportationButton").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyMedicalButton").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyEducationalButton").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyDebtButton").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyFoodAndPersonalButton").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyOneTimeButton").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

//Monthly Expenses displays
$("#monthlyHomeDisplay").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyTransportationDisplay").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyMedicalDisplay").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyEducationalDisplay").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyDebtDisplay").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyFoodAndPersonalDisplay").click(function(){
    $(".monthly-finance-display").attr("style", "")
})

$("#monthlyOneTimeDisplay").click(function(){
    $(".monthly-finance-display").attr("style", "")
})
