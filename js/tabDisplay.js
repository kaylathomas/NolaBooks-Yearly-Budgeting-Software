//--------------------------------------
//            TAB 1 CONTENT
//--------------------------------------
$(".income-collapse").load("monthlyBudget/collapses/income-collapse.html form")
$(".savings-collapse").load("monthlyBudget/collapses/savings-collapse.html #savingsCollapseDiv")


//--------------------------------------
//          MONTHLY BUDGET TABS
//--------------------------------------
//Monthly Home Expenses Display
$("#monthlyHomeDisplay").load("monthlyBudget/monthly-home-display.html .my-3")
$("#monthlyHomeButton").click(function(){
    
})
// $("#monthlyHomeDisplay").hide()
//Monthly Loan and Debt Display
$("#monthlyDebtDisplay").load("monthlyBudget/monthly-debt-display.html .my-3")
//Monthly Transportation Display
$("#monthlyTransportationDisplay").load("monthlyBudget/monthly-transportation-display.html .my-3")
//Monthly Medical Display
$("#monthlyMedicalDisplay").load("monthlyBudget/monthly-medical-display.html .my-3")
//Monthly Educational Expenses Display
$("#monthlyEducationalDisplay").load("monthlyBudget/monthly-educational-display.html .my-3")
//Monthly Food & Personal Expenses Display
$("#monthlyFoodAndPersonalDisplay").load("monthlyBudget/monthly-food-and-personal-display.html .my-3")
//Monthly One-time Expenses Display
$("#monthlyOneTimeDisplay").load("monthlyBudget/monthly-one-time-display.html .my-3")

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

