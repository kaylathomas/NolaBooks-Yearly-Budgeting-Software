
//------------------------------------
//         START TAB DISPLAY
//------------------------------------

//$(".tab-display-window").hide()
//$("#tabDisplay1").show()


//---------------------------------
//         ACTIVATE TABS
//---------------------------------

//IF THINGS STOP WORKING FOR WHATEVER REASON,
//DELETE EVERYTHING UNDER
//$(".monthly-finance-button").removeClass("active")
//IN THE $("#tab1").click(function(){

$("#tab1").click(function(){
    $(".monthly-finance-button").removeClass("active")
    $(".monthly-finance-button").attr("aria-selected", "false")
    $(".tab-pane").removeClass("active show")
    $(".monthly-finance-display").attr("style", "")
    $("#tab1Content").addClass("active show")
})

$("#tab2").click(function(){
    $(".monthly-finance-button").removeClass("active")
})

$("#tab3").click(function(){
    $(".monthly-finance-button").removeClass("active")
})

$("#tab4").click(function(){
    $(".monthly-finance-button").removeClass("active")
})

