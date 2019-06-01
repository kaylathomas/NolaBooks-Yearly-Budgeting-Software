//= require jquery
$( document ).ready(function() {
//------------------------------------
//     MONTHLY SUBMIT BUTTON CLICK
//------------------------------------

    $(".monthly-submit-button").click(function(){
        let monthlyNet = parseFloat($("#monthlyNet").val(), 10)

        if ($("select.monthly-freq").children("option:selected").hasClass("weekly-freq") == true){
            monthlyNet = 4 * parseFloat($("#monthlyNet").val(), 10)
        } else if ($("select.monthly-freq").children("option:selected").hasClass("bi-weekly-freq") == true){
            monthlyNet = 2 * parseFloat($("#monthlyNet").val(), 10)
        } else if ($("#monthlyChartSelect").children("option:selected").hasClass("monthly-freq") == true){
            monthlyNet = 1 * parseFloat($("#monthlyNet").val(), 10)
        }

    //-------------------------
    //     MONTHLY SAVINGS
    //-------------------------

        // SAVINGS (GENERAL)
        let monthlySavings = parseFloat($("#monthlySavings").val(), 10)

        // EMERGENCY FUND
        let monthlyEmergency = parseFloat($("#monthlyEmergency").val(), 10)

        //401K
        let monthly401k = parseFloat($("#monthly401k").val(), 10)

        // INVESTMENTS
        let monthlyInvestments = parseFloat($("#monthlyInvestments").val(), 10)

        // RETIREMENT
        let monthlyRetirement = parseFloat($("#monthlyRetirement").val(), 10)
        
    //---------------------------------------
    //            MONTHLY EXPENSES
    //---------------------------------------

        //----------------------
        // MONTHLY HOME DISPLAY
        //----------------------
        
        //RENT
        let monthlyRent = parseFloat($("#monthlyRent").val(), 10)

        //MORTGAGE
        let monthlyMortgage = parseFloat($("#monthlyMortgage").val(), 10)

        //REPAIR/MAINTINENCE
        let monthlyRepair = parseFloat($("#monthlyRepair").val(), 10)

        //CABLE/TV
        let monthlyCable = parseFloat($("#monthlyCable").val(), 10)

        //HOME INSURANCE
        let monthlyHomeInsurance = parseFloat($("#monthlyHomeInsurance").val(), 10)

        //HOA FEES
        let monthlyHOA = parseFloat($("#monthlyHOA").val(), 10)

        //INTERNET
        let monthlyInternet = parseFloat($("#monthlyInternet").val(), 10)

        //CELLPHONE
        let monthlyCellphone = parseFloat($("#monthlyCellphone").val(), 10)

        //WATER
        let monthlyWater = parseFloat($("#monthlyWater").val(), 10)

        //GAS (HOME)
        let monthlyGas = parseFloat($("#monthlyGas").val(), 10)

        //ELECTRICITY
        let monthlyElectricity = parseFloat($("#monthlyElectricity").val(), 10)

        //----------------------
        //     DEBT DISPLAY
        //----------------------

        //CREDIT CARDS
        let monthlyCreditCards = parseFloat($("#monthlyCreditCards").val(), 10)

        //STUDENT LOANS
        let monthlyStudentLoans = parseFloat($("#monthlyStudentLoans").val(), 10)

        //MEDICAL DEBT
        let monthlyMedicalDebt = parseFloat($("#monthlyMedicalDebt").val(), 10)

        //TAX PAYMENTS
        let monthlyTaxPayments = parseFloat($("#monthlyTaxPayments").val(), 10)

        //STORE CARDS
        let monthlyStoreCards = parseFloat($("#monthlyStoreCards").val(), 10)

        //PERSONAL DEBT
        let monthlyPersonalDebt = parseFloat($("#monthlyPersonalDebt").val(), 10)

        //--------------------------------
        //     TRANSPORTATION DISPLAY
        //--------------------------------

        //CAR PAYMENT
        let monthlyCarPayments = parseFloat($("#monthlyCarPayments").val(), 10)

        //CAR INSURANCE
        let monthlyCarInsurance = parseFloat($("#monthlyCarInsurance").val(), 10)

        //(CAR) GAS
        let monthlyCarGas = parseFloat($("#monthlyCarGas").val(), 10)

        //CAR REPAIRS
        let monthlyCarRepairs = parseFloat($("#monthlyCarRepairs").val(), 10)

        //PARKING & TOLLS
        let monthlyParking = parseFloat($("#monthlyParking").val(), 10)

        //PUBLIC TRANSIT
        let monthlyPublicTransit = parseFloat($("#monthlyPublicTransit").val(), 10)

        //-------------------------
        //     MEDICAL DISPLAY
        //-------------------------

        //HEALTH INSURANCE
        let monthlyHealthInsurance = parseFloat($("#monthlyHealthInsurance").val(), 10)

        //COPAYS
        let monthlyCopays = parseFloat($("#monthlyCopays").val(), 10)

        //PRESCRIPTIONS
        let monthlyPrescriptions = parseFloat($("#monthlyPrescriptions").val(), 10)

        //LIFE INSURANCE
        let monthlyLifeInsurance = parseFloat($("#monthlyLifeInsurance").val(), 10)


        //------------------------------
        //     EDUCATIONAL DISPLAY
        //------------------------------

        //SCHOOL SUPPLIES
        let monthlySchoolSupplies = parseFloat($("#monthlySchoolSupplies").val(), 10)

        //MEAL PLAN
        let monthlyMealPlan = parseFloat($("#monthlyMealPlan").val(), 10)

        //TUITION
        let monthlyTuition = parseFloat($("#monthlyTuition").val(), 10)

        //TEXTBOOKS
        let monthlyTextbooks = parseFloat($("#monthlyTextbooks").val(), 10)

        //---------------------------------
        //     FOOD & PERSONAL DISPLAY
        //---------------------------------

        //GROCERIES/HOUSEHOLD PURCHASES
        let monthlyGroceries = parseFloat($("#monthlyGroceries").val(), 10)

        //MEALS OUT
        let monthlyMealsOut = parseFloat($("#monthlyMealsOut").val(), 10)

        //CLOTHING
        let monthlyClothing = parseFloat($("#monthlyClothing").val(), 10)

        //ENTERTAINMENT
        let monthlyEntertainment = parseFloat($("#monthlyEntertainment").val(), 10)

        //PET SUPPLIES
        let monthlyPet = parseFloat($("#monthlyPet").val(), 10)

        //HOBBIES & SPORTS
        let monthlyHobbies = parseFloat($("#monthlyHobbies").val(), 10)

        //CHARITABLE DONATIONS
        let monthlyCharitableDonations = parseFloat($("#monthlyCharitableDonations").val(), 10)

        //SUBSCRIPTIONS
        let monthlySubscriptions = parseFloat($("#monthlySubscriptions").val(), 10)


        //--------------------------------
        //    ONE-TIME-EXPENSES DISPLAY
        //--------------------------------
  

        let monthlyExpenses = (monthlySavings || 0) + (monthlyEmergency || 0) + (monthly401k || 0) + (monthlyInvestments || 0) + (monthlyRetirement || 0) + (monthlyRent || 0) + (monthlyMortgage || 0) + (monthlyRepair || 0) + (monthlyCable || 0) + (monthlyHomeInsurance || 0) + (monthlyHOA || 0) + (monthlyInternet || 0) + (monthlyCellphone || 0) + (monthlyWater || 0) + (monthlyGas || 0) + (monthlyElectricity || 0) + (monthlyCreditCards || 0) + (monthlyStudentLoans || 0) + (monthlyMedicalDebt || 0) + (monthlyTaxPayments || 0) + (monthlyStoreCards || 0) + (monthlyPersonalDebt || 0) + (monthlyCarPayments || 0) + (monthlyCarInsurance || 0) + (monthlyCarGas || 0) + (monthlyCarRepairs || 0) + (monthlyParking || 0) + (monthlyPublicTransit || 0) + (monthlyHealthInsurance || 0) + (monthlyCopays || 0) + (monthlyPrescriptions || 0) + (monthlyLifeInsurance || 0) + (monthlySchoolSupplies || 0) + (monthlyMealPlan || 0) + (monthlyTuition || 0) + (monthlyTextbooks || 0) + (monthlyGroceries || 0) + (monthlyMealsOut || 0) + (monthlyClothing || 0) + (monthlyEntertainment || 0) + (monthlyPet || 0) + (monthlyHobbies || 0) + (monthlyCharitableDonations || 0) + (monthlySubscriptions || 0)
        
        let monthlyTotal = monthlyNet - monthlyExpenses

        if (monthlyTotal < 0){
            $("#monthlyAlertField").html(`                     
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Oops! You're $${monthlyTotal * -1} over-budget!</strong> <u>You've spent more than your monthly income.</u>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            </div>
            `)
        } else if (monthlyTotal > 0){
            $("#monthlyAlertField").html(`                     
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                You're in the green! <strong>Your monthly total is $${monthlyTotal}</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            </div>
            `)
        }
    })

//------------------------------------
//     MONTHLY SUBMIT BUTTON KEYUP
//------------------------------------
    $("input").bind("enterKey",function(e){
        e.preventDefault()
        $(".monthly-submit-button").click()
     })
     $("input").keyup(function(e){
        e.preventDefault()
         if(e.keyCode == 13)
         {
             $(this).trigger("enterKey")
         }
     })

})
