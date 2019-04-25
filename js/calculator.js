$( document ).ready(function() {
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

});