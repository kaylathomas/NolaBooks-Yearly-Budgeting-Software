
$(document).ready(function() {
//------------------------------------
//         START TAB DISPLAY
//------------------------------------

$("#tabDisplay2").hide()
$("#tabDisplay3").hide()

//---------------------------------
//         ACTIVATE TABS
//---------------------------------

$("#tab1").click(function(){
    $("li .tab-heading").removeClass("active")
    $("#tab1 .tab-heading").toggleClass("active")

    $(".tab-display-window").hide()
    $("#tabDisplay1").show()
})

$("#tab2").click(function(){
    $("li .tab-heading").removeClass("active")
    $("#tab2 .tab-heading").toggleClass("active")

    $(".tab-display-window").hide()
    $("#tabDisplay2").show()
})

$("#tab3").click(function(){
    $("li .tab-heading").removeClass("active")
    $("#tab3 .tab-heading").toggleClass("active")

    $(".tab-display-window").hide()
    $("#tabDisplay3").show()
})

$("#tab4").click(function(){
    $("li .tab-heading").removeClass("active")
    $("#tab4 .tab-heading").toggleClass("active")

    $(".tab-display-window").hide()
    $("#tabDisplay4").show()
})





//----------------------------
            //ID KEY
//----------------------------
// netPay = Net Payment
// rent = Rent
// electricity = Electricity Bill
// gasBill = Gas Bill (not gas for moped)
// water = Water Bill
// wifi = Wifi Bill
// groceries = Groceries
// gas = Gas (Moped)
//monthlySubs = Monthly Subscriptions

$('#submitBtn').click(function(){
    let netPay = parseInt($('#netPay').val())
    let rent = parseInt($('#rent').val())
    let electricity = parseInt($('#electricity').val())
    let gasBill = parseInt($('#gasBill').val())
    let water = parseInt($('#water').val())
    let wifi = parseInt($('#wifi').val())
    let groceries = parseInt($('#groceries').val())
    let gas = parseInt($('#gas').val())
    let monthlySubs = parseInt($('#monthlySubs').val())

    let total = rent + electricity + gasBill + water + wifi + groceries + gas + monthlySubs
    let final = netPay - total
    $('#yourTotal').text('$' + final)
})

})