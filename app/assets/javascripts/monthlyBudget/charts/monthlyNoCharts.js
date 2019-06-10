//= require jquery
$( document ).ready(function() {
    //------------------------------------
    //     MONTHLY SUBMIT BUTTON CLICK
    //------------------------------------
    
        $(".monthly-submit-button").click(function(){
            let monthlyNet = parseFloat($("#monthlyNet").val(), 10)
            
            if ($("select.current-month").children("option:selected").hasClass("monthly-choose") == true){
                $(".monthly-title").html("")
            } else {
                $(".monthly-title").html($("select.current-month").children("option:selected").val())
            }
    
            if ($("select.monthly-freq").children("option:selected").hasClass("weekly-freq") == true){
                monthlyNet = 4 * parseFloat($("#monthlyNet").val(), 10)
    
                //NO CHARTS
                $(".monthly-net-income-total").text("$" + monthlyNet)
            } else if ($("select.monthly-freq").children("option:selected").hasClass("bi-weekly-freq") == true){
                monthlyNet = 2 * parseFloat($("#monthlyNet").val(), 10)
    
                //NO CHARTS
                $(".monthly-net-income-total").text("$" + monthlyNet)
            } else {
                monthlyNet = 1 * parseFloat($("#monthlyNet").val(), 10)
    
                //NO CHARTS
                $(".monthly-net-income-total").text("$" + monthlyNet)
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
    
            //REPAIR/maintenance
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
    
    
            //Monthly Income
            let monthlyIncomeArray = [(monthlyNet || 0)]

            let monthlyIncomeSum = 0

            for(let i = 0, len = monthlyIncomeArray.length; i < len; i++) {
                monthlyIncomeSum += monthlyIncomeArray[i]
            }
    
            //Monthly Savings
            let monthlySavingsArray = [(monthlySavings || 0), (monthlyEmergency || 0), (monthly401k || 0), (monthlyInvestments || 0), (monthlyRetirement || 0)]
            
            let monthlySavingsSum = 0

            for(let i = 0, len = monthlySavingsArray.length; i < len; i++) {
                monthlySavingsSum += monthlySavingsArray[i]
            }
            
            //Monthly Expenses (All)
    
            let monthlyExpensesArray = [(monthlyRent || 0) + (monthlyMortgage || 0), (monthlyRepair || 0), (monthlyCable || 0), (monthlyHomeInsurance || 0), (monthlyHOA || 0), (monthlyInternet || 0), (monthlyCellphone || 0), (monthlyWater || 0), (monthlyGas || 0), (monthlyElectricity || 0), (monthlyCreditCards || 0), (monthlyStudentLoans || 0), (monthlyMedicalDebt || 0), (monthlyTaxPayments || 0), (monthlyStoreCards || 0), (monthlyPersonalDebt || 0), (monthlyCarPayments || 0), (monthlyCarInsurance || 0), (monthlyCarGas || 0), (monthlyCarRepairs || 0), (monthlyParking || 0), (monthlyPublicTransit || 0), (monthlyHealthInsurance || 0), (monthlyCopays || 0), (monthlyPrescriptions || 0), (monthlyLifeInsurance || 0), (monthlySchoolSupplies || 0), (monthlyMealPlan || 0), (monthlyTuition || 0), (monthlyTextbooks || 0), (monthlyGroceries || 0), (monthlyMealsOut || 0), (monthlyClothing || 0), (monthlyEntertainment || 0), (monthlyPet || 0), (monthlyHobbies || 0), (monthlyCharitableDonations || 0), (monthlySubscriptions || 0)]

            let monthlyExpensesSum = 0

            for(let i = 0, len = monthlyExpensesArray.length; i < len; i++) {
                monthlyExpensesSum += monthlyExpensesArray[i]
            }

            //Monthly Home Expenses

            let monthlyHomeExpensesArray = [(monthlyRent || 0) + (monthlyMortgage || 0), (monthlyRepair || 0), (monthlyCable || 0), (monthlyHomeInsurance || 0), (monthlyHOA || 0), (monthlyInternet || 0), (monthlyCellphone || 0), (monthlyWater || 0), (monthlyGas || 0), (monthlyElectricity || 0)]

            let monthlyHomeExpensesSum = 0

            for(let i = 0, len = monthlyHomeExpensesArray.length; i < len; i++) {
                monthlyHomeExpensesSum += monthlyHomeExpensesArray[i]
            }

            //Monthly Debt & Loans
            let monthlyDebtArray = [(monthlyCreditCards || 0), (monthlyStudentLoans || 0), (monthlyMedicalDebt || 0), (monthlyTaxPayments || 0), (monthlyStoreCards || 0), (monthlyPersonalDebt || 0)]

            let monthlyDebtSum = 0

            for(let i = 0, len = monthlyDebtArray.length; i < len; i++) {
                monthlyDebtSum += monthlyDebtArray[i]
            }
    
            //Monthly Transportation Expenses

            let monthlyTransportationArray = [(monthlyCarPayments || 0), (monthlyCarInsurance || 0), (monthlyCarGas || 0), (monthlyCarRepairs || 0), (monthlyParking || 0), (monthlyPublicTransit || 0)]

            let monthlyTransportationSum = 0

            for(let i = 0, len = monthlyTransportationArray.length; i < len; i++) {
                monthlyTransportationSum += monthlyTransportationArray[i]
            }

            //Monthly Medical Expenses

            let monthlyMedicalArray = [(monthlyHealthInsurance || 0), (monthlyCopays || 0), (monthlyPrescriptions || 0), (monthlyLifeInsurance || 0)]

            let monthlyMedicalSum = 0

            for(let i = 0, len = monthlyMedicalArray.length; i < len; i++) {
                monthlyMedicalSum += monthlyMedicalArray[i]
            }

            //Monthly Educational Expenses

            let monthlyEducationalArray = [(monthlySchoolSupplies || 0), (monthlyMealPlan || 0), (monthlyTuition || 0), (monthlyTextbooks || 0)]

            let monthlyEducationalSum = 0

            for(let i = 0, len = monthlyEducationalArray.length; i < len; i++) {
                monthlyEducationalSum += monthlyEducationalArray[i]
            }

            //Food & Personal Expenses

            let monthlyFoodAndPersonalArray = [(monthlyGroceries || 0), (monthlyMealsOut || 0), (monthlyClothing || 0), (monthlyEntertainment || 0), (monthlyPet || 0), (monthlyHobbies || 0), (monthlyCharitableDonations || 0), (monthlySubscriptions || 0)]

            let monthlyFoodAndPersonalSum = 0

            for(let i = 0, len = monthlyFoodAndPersonalArray.length; i < len; i++) {
                monthlyFoodAndPersonalSum += monthlyFoodAndPersonalArray[i]
            }

            //ALL ARRAY SUMS
            let monthlyAllExpensesArray = [monthlyHomeExpensesSum, monthlyDebtSum, monthlyTransportationSum, monthlyMedicalSum, monthlyEducationalSum, monthlyFoodAndPersonalSum]

            let monthlyAllExpensesSum = 0

            for(let i = 0, len = monthlyAllExpensesArray.length; i < len; i++) {
                monthlyAllExpensesSum += monthlyAllExpensesArray[i]
            }
    
            let monthlyTotal = monthlyNet - (monthlyExpensesSum + monthlySavingsSum)
    
    //-------------------------------------
    //            BUDGET ALERTS
    //-------------------------------------
    
            if (monthlyTotal < 0){
                $("#monthlyAlertField").html(`                     
                <div class="alert alert-danger alert-dismissible fade show my-3 position-sticky sticky-top" role="alert">
                <strong>Oops! You're $${monthlyTotal * -1} over-budget!</strong> <u>You've spent more than your monthly income.</u>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                </div>
                `)
            } else if (monthlyTotal > 0){
                $("#monthlyAlertField").html(`                     
                <div class="alert alert-success alert-dismissible fade show my-3 position-sticky sticky-top" role="alert">
                    You're in the green! <strong>Your monthly total is $${monthlyTotal}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                </div>
                `)
            }
    
            //===================================================
            //===================================================
            //                      GRAPHS
            //---------------------------------------------------
            //===================================================
    
            //=============================
            //      PIE CHARTS GRAPH
            //-----------------------------
    
            //=============================
            //      NO CHARTS GRAPH
            //-----------------------------
            
        //--------------------------------
        //        MONTHLY TOTALS
        //--------------------------------

            // INCOME TOTAL
            $(".monthly-income-total").text("$" + (monthlyIncomeSum || 0))

            // SAVINGS TOTAL
            $(".monthly-savings-all-total").text("$" + (monthlySavingsSum || 0))

            // EXPENSES TOTAL (Excluding Savings)
            $(".monthly-expenses-total").text("$" + (monthlyExpensesSum || 0))

            // HOME EXPENSES TOTAL
            $(".monthly-home-expenses-total").text("$" + (monthlyHomeExpensesSum || 0))

            //DEBT & LOANS TOTAL
            $(".monthly-debt-total").text("$" + (monthlyDebtSum || 0))

            //TRANSPORTATION TOTAL
            $(".monthly-transportation-total").text("$" + (monthlyTransportationSum || 0))

            //MEDICAL TOTAL
            $(".monthly-medical-total").text("$" + (monthlyMedicalSum || 0))

            //EDUCATIONAL TOTAL
            $(".monthly-educational-total").text("$" + (monthlyEducationalSum || 0))

            //FOOD & PERSONAL TOTAL
            $(".monthly-food-and-personal-total").text("$" + (monthlyFoodAndPersonalSum || 0))

                //--------------------------------
                //        MONTHLY SAVINGS
                //--------------------------------
                
                // SAVINGS (GENERAL)
                $(".monthly-savings-general").text("$" + (monthlySavings || 0))
    
                // EMERGENCY
                $(".monthly-emergency-total").text("$" + (monthlyEmergency || 0))
    
                // 401K
                $(".monthly-401k-total").text("$" + (monthly401k || 0))
    
                // INVESTMENTS
                $(".monthly-investments-total").text("$" + (monthlyInvestments || 0))
    
                // RETIREMENT
                $(".monthly-retirement-total").text("$" + (monthlyRetirement || 0))
    
                //--------------------------------
                //         HOME EXPENSES
                //--------------------------------
    
                // RENT
                $(".monthly-rent-total").text("$" + (monthlyRent || 0))
    
                // MORTGAGE
                $(".monthly-mortgage-total").text("$" + (monthlyMortgage || 0))
    
                // REPAIR/maintenance
                $(".monthly-repair-total").text("$" + (monthlyRepair || 0))
    
                // CABLE/TV
                $(".monthly-cable-total").text("$" + (monthlyCable || 0))
    
                // HOME INSURANCE
                $(".monthly-home-insurance-total").text("$" + (monthlyHomeInsurance || 0))
    
                // HOA FEES
                $(".monthly-HOA-total").text("$" + (monthlyHOA || 0))
    
                // INTERNET
                $(".monthly-internet-total").text("$" + (monthlyInternet || 0))
    
                // CELLPHONE
                $(".monthly-cellphone-total").text("$" + (monthlyCellphone || 0))
    
                // WATER
                $(".monthly-water-total").text("$" + (monthlyWater || 0))
    
                // GAS (HOME)
                $(".monthly-gas-total").text("$" + (monthlyGas || 0))
    
                // ELECTRICITY
                $(".monthly-electricity-total").text("$" + (monthlyElectricity || 0))
    
                //--------------------------------
                //         DEBT & LOANS
                //--------------------------------
    
                // CREDIT CARDS
                $(".monthly-credit-cards-total").text("$" + (monthlyCreditCards || 0))
    
                // STUDENT LOANS
                $(".monthly-student-loans-total").text("$" + (monthlyStudentLoans || 0))
    
                // MEDICAL DEBT
                $(".monthly-medical-debt-total").text("$" + (monthlyMedicalDebt || 0))
    
                // TAX PAYMENTS
                $(".monthly-tax-payments-total").text("$" + (monthlyTaxPayments || 0))
    
                // STORE CARDS
                $(".monthly-store-cards-total").text("$" + (monthlyStoreCards || 0))
    
                // PERSONAL DEBT
                $(".monthly-personal-debt-total").text("$" + (monthlyPersonalDebt || 0))
    
                //--------------------------------
                //         TRANSPORTATION
                //--------------------------------
    
                // CAR PAYMENTS
                $(".monthly-car-payment-total").text("$" + (monthlyCarPayments || 0))
    
                // CAR INSURANCE
                $(".monthly-car-insurance-total").text("$" + (monthlyCarInsurance || 0))
    
                // (CAR) GAS
                $(".monthly-car-gas-total").text("$" + (monthlyCarGas || 0))
    
                // CAR REPAIRS
                $(".monthly-car-repairs-total").text("$" + (monthlyCarRepairs || 0))
    
                // PARKING & TOLLS
                $(".monthly-parking-total").text("$" + (monthlyParking || 0))
    
                // PUBLIC TRANSIT
                $(".monthly-public-transit-total").text("$" + (monthlyPublicTransit || 0))
    
                //--------------------------------
                //            MEDICAL
                //--------------------------------
    
                // HEALTH INSURANCE
                $(".monthly-health-insurance-total").text("$" + (monthlyHealthInsurance || 0))
    
                // COPAYS
                $(".monthly-copays-total").text("$" + (monthlyCopays || 0))
    
                // PRESCRIPTIONS
                $(".monthly-prescriptions-total").text("$" + (monthlyPrescriptions || 0))
    
                // LIFE INSURANCE
                $(".monthly-life-insurance-total").text("$" + (monthlyLifeInsurance || 0))
    
                //--------------------------------
                //          EDUCATIONAL
                //--------------------------------
    
                // SCHOOL SUPPLIES
                $(".monthly-school-supplies-total").text("$" + (monthlySchoolSupplies || 0))
    
                // MEAL PLAN
                $(".monthly-meal-plan-total").text("$" + (monthlyMealPlan || 0))
    
                // TUITION
                $(".monthly-tuition-total").text("$" + (monthlyTuition || 0))
    
                // TEXTBOOKS
                $(".monthly-textbooks-total").text("$" + (monthlyTextbooks || 0))
                
                //--------------------------------
                //        FOOD & PERSONAL
                //--------------------------------
    
                // GROCERIES/HOUSEHOLD PURCHASES
                $(".monthly-groceries-total").text("$" + (monthlyGroceries || 0))
                
                // MEALS OUT
                $(".monthly-meals-out-total").text("$" + (monthlyMealsOut || 0))
    
                // CLOTHING
                $(".monthly-clothing-total").text("$" + (monthlyClothing || 0))
    
                // ENTERTAINMENT
                $(".monthly-entertainment-total").text("$" + (monthlyEntertainment || 0))
    
                // PET SUPPLIES
                $(".monthly-pet-total").text("$" + (monthlyPet || 0))
    
                // HOBBIES & SPORTS
                $(".monthly-hobbies-total").text("$" + (monthlyHobbies || 0))
    
                // CHARITABLE DONATIONS
                $(".monthly-charitable-donations-total").text("$" + (monthlyCharitableDonations || 0))
    
                // SUBSCRIPTIONS
                $(".monthly-subscriptions-total").text("$" + (monthlySubscriptions || 0))
    
                //--------------------------------
                //        ONE-TIME EXPENSES
                //--------------------------------
    
                // SAVINGS TOTAL
                $(".monthly-savings-total").text("$" + monthlySavingsSum)
    
                // EXPENSES TOTAL
                $(".monthly-expenses-total").text("$" + monthlyExpensesSum)
    
                // MONTHLY TOTAL
                $(".monthly-finishing-total").text("$" + (monthlyTotal || 0))
    
    
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
    