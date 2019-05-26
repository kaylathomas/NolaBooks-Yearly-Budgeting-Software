//---------------------------------
//         ACTIVATE TABS
//---------------------------------
//Load 4 tabs
$("#tab1Content").load("monthlyBudget/tabContent1.html #monthlyBudgetAccordion")
$("#tab2Content").load("tabContent2.html")
$("#tab3Content").load("tabContent3.html")
$("#tab4Content").load("tabContent4.html")

//--------------------------------------
//          MONTHLY BUDGET TABS
//--------------------------------------
//Monthly Home Expenses Display
$("#monthlyHomeDisplay").load("monthlyBudget/monthly-home-display.html")
$("#monthlyHomeDisplay").hide()
//Monthly Loan and Debt Display
$("#monthlyDebtDisplay").load("monthlyBudget/monthly-debt-display.html")
$("#monthlyDebtButton").click(function(){
    $("monthly-finance-display").hide()
    $("#monthlyBudgetAccordion").hide()
    $("#monthlyHomeDisplay").show()
})
//Monthly Transportation Display
//Monthly Medical Display
//Monthly Educational Expenses Display
//Monthly Food & Personal Expenses Display
//Monthly One-time Expenses Display

//--------------------------------------
//          YEARLY BUDGET TABS
//--------------------------------------
$("#yearlyJanuaryDisplay").load("yearlyBudget/1January/january-monthly-budget.html")
$("#yearlyFebruaryDisplay").load("yearlyBudget/2February/february-monthly-budget.html")
$("#yearlyMarchDisplay").load("yearlyBudget/3March/march-monthly-budget.html")
$("#yearlyAprilDisplay").load("yearlyBudget/4April/april-monthly-budget.html")
$("#yearlyMayDisplay").load("yearlyBudget/5May/may-monthly-budget.html")
$("#yearlyJuneDisplay").load("yearlyBudget/6June/june-monthly-budget.html")
$("#yearlyJulyDisplay").load("yearlyBudget/7July/july-monthly-budget.html")
$("#yearlyAugustDisplay").load("yearlyBudget/8August/august-monthly-budget.html")
$("#yearlySeptemberDisplay").load("yearlyBudget/9September/september-monthly-budget.html")
$("#yearlyOctoberDisplay").load("yearlyBudget/10October/october-monthly-budget.html")
$("#yearlyNovemberDisplay").load("yearlyBudget/11November/november-monthly-budget.html")
$("#yearlyDecemberDisplay").load("yearlyBudget/12December/december-monthly-budget.html")

// //IF THINGS STOP WORKING FOR WHATEVER REASON,
// //DELETE EVERYTHING UNDER
// //$(".monthly-finance-button").removeClass("active")
// //IN THE $("#tab1").click(function(){

// $("#tab1").click(function(){
//     $(".monthly-finance-button").removeClass("active")
//     $(".monthly-finance-button").attr("aria-selected", "false")
//     $(".tab-pane").removeClass("active show")
//     $(".monthly-finance-display").attr("style", "")
//     $("#tab1Content").addClass("active show")
// })

// $("#tab2").click(function(){
//     $(".monthly-finance-button").removeClass("active")
// })

// $("#tab3").click(function(){
//     $(".monthly-finance-button").removeClass("active")
// })

// $("#tab4").click(function(){
//     $(".monthly-finance-button").removeClass("active")
// })

// //----------------------------------
// //      YEARLY BUDGET MONTHS
// //----------------------------------

// $("#monthly-yearly-tab").click(function(){
//     $(".monthly-yearly-tab").removeClass("active")
//     $(".monthly-yearly-tab").removeClass("bg-orange")
//     $(this).addClass("bg-orange active")
// })

