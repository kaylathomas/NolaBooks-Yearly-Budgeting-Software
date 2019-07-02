//= require jquery
$( document ).ready(function(){
    
    //=================================================
    //----------------------------------------------
    //              TABLE OF CONTENTS
    //----------------------------------------------
    //=================================================
    //      1.) Container LocalStorage Getters
    //      2.) Select Month On-change Event
    //      3.) Monthly Submit Button Click Event
    //          3a.) Frequency of Pay Dropdown Logic
    //          3b.) Input Value Variable Initialization
    //          3c.) Monthly Sum & Array variables
    //          3d.) Set Class Values
    //          3e.) Monthly Budget Alerts
    //          3f.) Monthly Charts
    //              i.) Monthly Pie Charts
    //              ii.) Monthly Line Graphs
    //      4.) Monthly Key-up Event
    //      5.) LocalStorage Input Getters

    //=========================================
    //-------------------------------------
    //  1.) CONTAINER LOCALSTORAGE GETTERS
    //-------------------------------------
    //=========================================

    //------------------------------------------------
    //  UNIMPLEMENTED - INCOME & ONE-TIME CONTAINERS
    //------------------------------------------------

    // //MONTHLY NEW INCOME CONTAINER
    // if (localStorage.getItem("monthlyNewIncomeContainer") !== null){
    //     $(".monthly-new-income-container").html(localStorage.getItem("monthlyNewIncomeContainer")) 
    // }

    // //ONE-TIME EXPENSE CONTAINER
    // if (localStorage.getItem("monthlyOneTimeExpenseContainer") !== null){
    //     $(".monthly-one-time-expense-container").html(localStorage.getItem("monthlyOneTimeExpenseContainer")) 
    // }

    //--------------------------------
    //      MONTHLY LIGHT SUMMARY
    //--------------------------------
    
    //MONTHLY NEW INCOME TABLE CONTAINER
    if (localStorage.getItem("monthlyNewIncomeTableContainer") !== null){
        $(".monthly-new-income-table-container").html(localStorage.getItem("monthlyNewIncomeTableContainer")) 
    }

    //=========================================
    //-------------------------------------
    //  2.) SELECT MONTH ON-CHANGE EVENT
    //-------------------------------------
    //=========================================

    $("select.current-month").change(function(){
        //Select the month you are budgeting for
        if ($("select.current-month").children("option:selected").hasClass("monthly-choose") == true){
            $(".monthly-title").text("")
        } else {
            $(".monthly-title").text($("select.current-month").children("option:selected").val())
        }
    })

    // =====================================================
    // --------------------------------------------------
    //          MONTHLY FREQUENCY OF PAY DATES
    // --------------------------------------------------
    // =====================================================

    //------------------------------
    //  MONTHLY FREQUENCY OF PAY 1
    //------------------------------

    $(".monthly-income1-pay-date1").show()
    $(".monthly-income1-pay-date2").show()
    $(".monthly-income1-pay-date3").hide()
    $(".monthly-income1-pay-date4").hide()

    $("select.monthly-freq1").change(function(){
        if ($("select.monthly-freq1").children("option:selected").hasClass("weekly-freq") == true){

            $(".monthly-income1-pay-date1").show()
            $(".monthly-income1-pay-date2").show()
            $(".monthly-income1-pay-date3").show()
            $(".monthly-income1-pay-date4").show()

        } else if ($("select.monthly-freq1").children("option:selected").hasClass("bi-weekly-freq") == true){

            $(".monthly-income1-pay-date1").show()
            $(".monthly-income1-pay-date2").show()
            $(".monthly-income1-pay-date3").hide()
            $(".monthly-income1-pay-date4").hide()
            
        } else {

            $(".monthly-income1-pay-date1").show()
            $(".monthly-income1-pay-date2").hide()
            $(".monthly-income1-pay-date3").hide()
            $(".monthly-income1-pay-date4").hide()
            
        }
    })

    //------------------------------
    //  MONTHLY FREQUENCY OF PAY 2
    //------------------------------

    $(".monthly-pay-date1").show()
    $(".monthly-pay-date2").show()
    $(".monthly-pay-date3").hide()
    $(".monthly-pay-date4").hide()

    $("select.monthly-freq").change(function(){
        if ($("select.monthly-freq").children("option:selected").hasClass("weekly-freq") == true){

            $(".monthly-pay-date1").show()
            $(".monthly-pay-date2").show()
            $(".monthly-pay-date3").show()
            $(".monthly-pay-date4").show()

        } else if ($("select.monthly-freq").children("option:selected").hasClass("bi-weekly-freq") == true){

            $(".monthly-pay-date1").show()
            $(".monthly-pay-date2").show()
            $(".monthly-pay-date3").hide()
            $(".monthly-pay-date4").hide()
            
        } else {

            $(".monthly-pay-date1").show()
            $(".monthly-pay-date2").hide()
            $(".monthly-pay-date3").hide()
            $(".monthly-pay-date4").hide()
            
        }
    })

    //------------------------------
    //  MONTHLY FREQUENCY OF PAY 3
    //------------------------------

    $(".monthly-pay-date1").show()
    $(".monthly-pay-date2").show()
    $(".monthly-pay-date3").hide()
    $(".monthly-pay-date4").hide()

    $("select.monthly-freq").change(function(){
        if ($("select.monthly-freq").children("option:selected").hasClass("weekly-freq") == true){

            $(".monthly-pay-date1").show()
            $(".monthly-pay-date2").show()
            $(".monthly-pay-date3").show()
            $(".monthly-pay-date4").show()

        } else if ($("select.monthly-freq").children("option:selected").hasClass("bi-weekly-freq") == true){

            $(".monthly-pay-date1").show()
            $(".monthly-pay-date2").show()
            $(".monthly-pay-date3").hide()
            $(".monthly-pay-date4").hide()
            
        } else {

            $(".monthly-pay-date1").show()
            $(".monthly-pay-date2").hide()
            $(".monthly-pay-date3").hide()
            $(".monthly-pay-date4").hide()
            
        }
    })

    //=============================================
    //-----------------------------------------
    //   3.) MONTHLY SUBMIT BUTTON CLICK EVENT
    //-----------------------------------------
    //=============================================
    
        $(".monthly-submit-button").click(function(){
            let monthlyNet = parseFloat($(".monthly-net-income-input").val(), 10)
            //LOCALSTORAGE
            localStorage.setItem("monthlyNetIncome", monthlyNet)

            //---------------------------------------
            //      NEW INCOME CONTAINER SETTER 
            //---------------------------------------
            // let monthlyNewIncomeContainer = $(".monthly-new-income-container").html()
            // //LOCALSTORAGE
            // localStorage.setItem("monthlyNewIncomeContainer", monthlyNewIncomeContainer)

            //---------------------------------------
            //   ONE-TIME EXPENSE CONTAINER SETTER 
            //---------------------------------------
            // let monthlyOneTimeExpenseContainer = $(".monthly-one-time-expense-container").html()
            // //LOCALSTORAGE
            // localStorage.setItem("monthlyOneTimeExpenseContainer", monthlyOneTimeExpenseContainer)


            //========================================
            //  3a.) FREQUENCY OF PAY DROPDOWN LOGIC
            //========================================
            if ($("select.monthly-freq1").children("option:selected").hasClass("weekly-freq") == true){
                monthlyNet = 4 * parseFloat($(".monthly-net-income-input").val(), 10)

                //NO CHARTS
                $(".monthly-net-income").text("$" + monthlyNet)
            } else if ($("select.monthly-freq1").children("option:selected").hasClass("bi-weekly-freq") == true){
                monthlyNet = 2 * parseFloat($(".monthly-net-income-input").val(), 10)

                //NO CHARTS
                $(".monthly-net-income").text("$" + monthlyNet)
            } else {
                monthlyNet = 1 * parseFloat($(".monthly-net-income-input").val(), 10)

                //NO CHARTS
                $(".monthly-net-income").text("$" + monthlyNet)
            }
    
        //============================================
        //  3b.) INPUT VALUE VARIABLE INITIALIZATION
        //============================================
        //-------------------------
        //     CURRENT ASSETS
        //-------------------------

            // CHECKING ACCOUNT
            let monthlyCheckingAccount = parseFloat($(".monthly-checking-account-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCheckingAccount", monthlyCheckingAccount)

            // SAVINGS ACCOUNT
            let monthlySavingsAccount = parseFloat($(".monthly-savings-account-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlySavingsAccount", monthlySavingsAccount)   

            // CASH
            let monthlyCash = parseFloat($(".monthly-cash-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCash", monthlyCash)  

        //=========================
        //     MONTHLY SAVINGS
        //=========================
    
            //-------------------
            // SAVINGS (GENERAL)
            //-------------------
            let monthlySavingsGeneral = parseFloat($(".monthly-savings-general-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlySavingsGeneral", monthlySavingsGeneral)  
            //DATE
            let monthlySavingsGeneralDate = parseInt($(".monthly-savings-general-date").val())
            //localStorage
            localStorage.setItem("monthlySavingsGeneralDate", monthlySavingsGeneralDate)  
    
            //------------------
            //  EMERGENCY FUND
            //------------------
            let monthlyEmergency = parseFloat($(".monthly-emergency-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyEmergency", monthlyEmergency)
            //DATE
            let monthlyEmergencyDate = parseInt($(".monthly-emergency-date").val())
            //localStorage
            localStorage.setItem("monthlyEmergencyDate", monthlyEmergencyDate)  
    
            //------------------
            //       401K
            //------------------
            let monthly401k = parseFloat($(".monthly-401k-input").val(), 10)
            //localStorage
            localStorage.setItem("monthly401k", monthly401k)
            //DATE
            let monthly401kDate = parseInt($(".monthly-401k-date").val())
            //localStorage
            localStorage.setItem("monthly401kDate", monthly401kDate) 
            
    
            //------------------
            //   INVESTMENTS
            //------------------
            let monthlyInvestments = parseFloat($(".monthly-investments-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyInvestments", monthlyInvestments)  
            //DATE
            let monthlyInvestmentsDate = parseInt($(".monthly-investments-date").val())
            //localStorage
            localStorage.setItem("monthlyInvestmentsDate", monthlyInvestmentsDate) 
    
            //------------------
            //    RETIREMENT
            //------------------
            let monthlyRetirement = parseFloat($(".monthly-retirement-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyRetirement", monthlyRetirement)  
            //DATE
            let monthlyRetirementDate = parseInt($(".monthly-retirement-date").val())
            //localStorage
            localStorage.setItem("monthlyRetirementDate", monthlyRetirementDate) 
            
        //---------------------------------------
        //            MONTHLY EXPENSES
        //---------------------------------------
    
            //======================
            // MONTHLY HOME DISPLAY
            //======================
            
            //------------------
            //       RENT
            //------------------
            let monthlyRent = parseFloat($(".monthly-rent-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyRent", monthlyRent)  
            //DATE
            let monthlyRentDate = parseInt($(".monthly-rent-date").val())
            //localStorage
            localStorage.setItem("monthlyRentDate", monthlyRentDate) 
            
            //------------------
            //     MORTGAGE
            //------------------
            let monthlyMortgage = parseFloat($(".monthly-mortgage-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyMortgage", monthlyMortgage) 
            //DATE
            let monthlyMortgageDate = parseInt($(".monthly-mortgage-date").val())
            //localStorage
            localStorage.setItem("monthlyMortgageDate", monthlyMortgageDate) 
    
            //------------------
            //REPAIR/MAINTENANCE
            //------------------
            let monthlyRepair = parseFloat($(".monthly-repair-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyRepair", monthlyRepair) 
            //DATE
            let monthlyRepairDate = parseInt($(".monthly-repair-date").val())
            //localStorage
            localStorage.setItem("monthlyRepairDate", monthlyRepairDate) 
    
            //------------------
            //     CABLE/TV
            //------------------
            let monthlyCable = parseFloat($(".monthly-cable-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCable", monthlyCable) 
            //DATE
            let monthlyCableDate = parseInt($(".monthly-cable-date").val())
            //localStorage
            localStorage.setItem("monthlyCableDate", monthlyCableDate) 
    
            //------------------
            //  HOME INSURANCE
            //------------------
            let monthlyHomeInsurance = parseFloat($(".monthly-home-insurance-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyHomeInsurance", monthlyHomeInsurance) 
            //DATE
            let monthlyHomeInsuranceDate = parseInt($(".monthly-home-insurance-date").val())
            //localStorage
            localStorage.setItem("monthlyHomeInsuranceDate", monthlyHomeInsuranceDate) 
    
            //------------------
            //     HOA FEES
            //------------------
            let monthlyHOA = parseFloat($(".monthly-HOA-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyHOA", monthlyHOA) 
            //DATE
            let monthlyHOADate = parseInt($(".monthly-HOA-date").val())
            //localStorage
            localStorage.setItem("monthlyHOADate", monthlyHOADate) 
    
            //------------------
            //     INTERNET
            //------------------
            let monthlyInternet = parseFloat($(".monthly-internet-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyInternet", monthlyInternet) 
            //DATE
            let monthlyInternetDate = parseInt($(".monthly-internet-date").val())
            //localStorage
            localStorage.setItem("monthlyInternetDate", monthlyInternetDate) 
    
            //------------------
            //    CELLPHONE
            //------------------
            let monthlyCellphone = parseFloat($(".monthly-cellphone-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCellphone", monthlyCellphone) 
            //DATE
            let monthlyCellphoneDate = parseInt($(".monthly-cellphone-date").val())
            //localStorage
            localStorage.setItem("monthlyCellphoneDate", monthlyCellphoneDate) 
    
            //------------------
            //      WATER
            //------------------
            let monthlyWater = parseFloat($(".monthly-water-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyWater", monthlyWater) 
            //DATE
            let monthlyWaterDate = parseInt($(".monthly-water-date").val())
            //localStorage
            localStorage.setItem("monthlyWaterDate", monthlyWaterDate) 
    
            //------------------
            //    GAS (HOME)
            //------------------
            let monthlyGas = parseFloat($(".monthly-gas-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyGas", monthlyGas) 
            //DATE
            let monthlyGasDate = parseInt($(".monthly-gas-date").val())
            //localStorage
            localStorage.setItem("monthlyGasDate", monthlyGasDate) 
    
            //------------------
            //   ELECTRICITY
            //------------------
            let monthlyElectricity = parseFloat($(".monthly-electricity-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyElectricity", monthlyElectricity) 
            //DATE
            let monthlyElectricityDate = parseInt($(".monthly-electricity-date").val())
            //localStorage
            localStorage.setItem("monthlyElectricityDate", monthlyElectricityDate) 
    
            //======================
            //     DEBT DISPLAY
            //======================
    
            //------------------
            //   CREDIT CARDS
            //------------------
            let monthlyCreditCards = parseFloat($(".monthly-credit-cards-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCreditCards", monthlyCreditCards) 
            //DATE
            let monthlyCreditCardsDate = parseInt($(".monthly-credit-cards-date").val())
            //localStorage
            localStorage.setItem("monthlyCreditCardsDate", monthlyCreditCardsDate) 
    
            //------------------
            //  STUDENT LOANS
            //------------------
            let monthlyStudentLoans = parseFloat($(".monthly-student-loans-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyStudentLoans", monthlyStudentLoans) 
            //DATE
            let monthlyStudentLoansDate = parseInt($(".monthly-student-loans-date").val())
            //localStorage
            localStorage.setItem("monthlyStudentLoansDate", monthlyStudentLoansDate) 
    
            //------------------
            //   MEDICAL DEBT
            //------------------
            let monthlyMedicalDebt = parseFloat($(".monthly-medical-debt-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyMedicalDebt", monthlyMedicalDebt) 
            //DATE
            let monthlyMedicalDebtDate = parseInt($(".monthly-medical-debt-date").val())
            //localStorage
            localStorage.setItem("monthlyMedicalDebtDate", monthlyMedicalDebtDate) 
    
            //------------------
            //   TAX PAYMENTS
            //------------------
            let monthlyTaxPayments = parseFloat($(".monthly-tax-payments-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyTaxPayments", monthlyTaxPayments) 
            //DATE
            let monthlyTaxPaymentsDate = parseInt($(".monthly-tax-payments-date").val())
            //localStorage
            localStorage.setItem("monthlyTaxPaymentsDate", monthlyTaxPaymentsDate) 
    
            //------------------
            //   STORE CARDS
            //------------------
            let monthlyStoreCards = parseFloat($(".monthly-store-cards-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyStoreCards", monthlyStoreCards) 
            //DATE
            let monthlyStoreCardsDate = parseInt($(".monthly-store-cards-date").val())
            //localStorage
            localStorage.setItem("monthlyStoreCardsDate", monthlyStoreCardsDate) 
    
            //------------------
            //  PERSONAL DEBT
            //------------------
            let monthlyPersonalDebt = parseFloat($(".monthly-personal-debt-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyPersonalDebt", monthlyPersonalDebt) 
            //DATE
            let monthlyPersonalDebtDate = parseInt($(".monthly-personal-debt-date").val())
            //localStorage
            localStorage.setItem("monthlyPersonalDebtDate", monthlyPersonalDebtDate) 
    
            //--------------------------------
            //     TRANSPORTATION DISPLAY
            //--------------------------------
    
            //------------------
            //   CAR PAYMENT
            //------------------
            let monthlyCarPayment = parseFloat($(".monthly-car-payment-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCarPayment", monthlyCarPayment) 
            //DATE
            let monthlyCarPaymentDate = parseInt($(".monthly-car-payment-date").val())
            //localStorage
            localStorage.setItem("monthlyCarPaymentDate", monthlyCarPaymentDate) 
    
            //------------------
            //  CAR INSURANCE
            //------------------
            let monthlyCarInsurance = parseFloat($(".monthly-car-insurance-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCarInsurance", monthlyCarInsurance) 
            //DATE
            let monthlyCarInsuranceDate = parseInt($(".monthly-car-insurance-date").val())
            //localStorage
            localStorage.setItem("monthlyCarInsuranceDate", monthlyCarInsuranceDate) 
    
            //------------------
            //    (CAR) GAS
            //------------------
            let monthlyCarGas = parseFloat($(".monthly-car-gas-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCarGas", monthlyCarGas) 
            //DATE
            let monthlyCarGasDate = parseInt($(".monthly-car-gas-date").val())
            //localStorage
            localStorage.setItem("monthlyCarGasDate", monthlyCarGasDate) 
    
            //------------------
            //    CAR REPAIRS
            //------------------
            let monthlyCarRepairs = parseFloat($(".monthly-car-repairs-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCarRepairs", monthlyCarRepairs) 
            //DATE
            let monthlyCarRepairsDate = parseInt($(".monthly-car-repairs-date").val())
            //localStorage
            localStorage.setItem("monthlyCarRepairsDate", monthlyCarRepairsDate) 
    
            //------------------
            //  PARKING & TOLLS
            //------------------
            let monthlyParking = parseFloat($(".monthly-parking-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyParking", monthlyParking) 
            //DATE
            let monthlyParkingDate = parseInt($(".monthly-parking-date").val())
            //localStorage
            localStorage.setItem("monthlyParkingDate", monthlyParkingDate) 
    
            //PUBLIC TRANSIT
            let monthlyPublicTransit = parseFloat($(".monthly-public-transit-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyPublicTransit", monthlyPublicTransit) 
            //DATE
            let monthlyPublicTransitDate = parseInt($(".monthly-public-transit-date").val())
            //localStorage
            localStorage.setItem("monthlyPublicTransitDate", monthlyPublicTransitDate) 
    
            //=========================
            //     MEDICAL DISPLAY
            //=========================
    
            //------------------
            // HEALTH INSURANCE
            //------------------
            let monthlyHealthInsurance = parseFloat($(".monthly-health-insurance-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyHealthInsurance", monthlyHealthInsurance) 
            //DATE
            let monthlyHealthInsuranceDate = parseInt($(".monthly-health-insurance-date").val())
            //localStorage
            localStorage.setItem("monthlyHealthInsuranceDate", monthlyHealthInsuranceDate) 
    
            //------------------
            //      COPAYS
            //------------------
            let monthlyCopays = parseFloat($(".monthly-copays-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCopays", monthlyCopays) 
            //DATE
            let monthlyCopaysDate = parseInt($(".monthly-copays-date").val())
            //localStorage
            localStorage.setItem("monthlyCopaysDate", monthlyCopaysDate) 
    
            //------------------
            //  PRESCRIPTIONS
            //------------------
            let monthlyPrescriptions = parseFloat($(".monthly-prescriptions-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyPrescriptions", monthlyPrescriptions) 
            //DATE
            let monthlyPrescriptionsDate = parseInt($(".monthly-prescriptions-date").val())
            //localStorage
            localStorage.setItem("monthlyPrescriptionsDate", monthlyPrescriptionsDate) 
    
            //------------------
            //  LIFE INSURANCE
            //------------------
            let monthlyLifeInsurance = parseFloat($(".monthly-life-insurance-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyLifeInsurance", monthlyLifeInsurance) 
            //DATE
            let monthlyLifeInsuranceDate = parseInt($(".monthly-life-insurance-date").val())
            //localStorage
            localStorage.setItem("monthlyLifeInsuranceDate", monthlyLifeInsuranceDate) 
    
    
            //------------------------------
            //     EDUCATIONAL DISPLAY
            //------------------------------
    
            //------------------
            // SCHOOL SUPPLIES
            //------------------
            let monthlySchoolSupplies = parseFloat($(".monthly-school-supplies-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlySchoolSupplies", monthlySchoolSupplies) 
            //DATE
            let monthlySchoolSuppliesDate = parseInt($(".monthly-school-supplies-date").val())
            //localStorage
            localStorage.setItem("monthlySchoolSuppliesDate", monthlySchoolSuppliesDate) 
    
            //------------------
            //    MEAL PLAN
            //------------------
            let monthlyMealPlan = parseFloat($(".monthly-meal-plan-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyMealPlan", monthlyMealPlan) 
            //DATE
            let monthlyMealPlanDate = parseInt($(".monthly-meal-plan-date").val())
            //localStorage
            localStorage.setItem("monthlyMealPlanDate", monthlyMealPlanDate) 
    
            //------------------
            //      TUITION
            //------------------
            let monthlyTuition = parseFloat($(".monthly-tuition-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyTuition", monthlyTuition) 
            //DATE
            let monthlyTuitionDate = parseInt($(".monthly-tuition-date").val())
            //localStorage
            localStorage.setItem("monthlyTuitionDate", monthlyTuitionDate) 
    
            //------------------
            //     TEXTBOOKS
            //------------------
            let monthlyTextbooks = parseFloat($(".monthly-textbooks-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyTextbooks", monthlyTextbooks) 
            //DATE
            let monthlyTextbooksDate = parseInt($(".monthly-textbooks-date").val())
            //localStorage
            localStorage.setItem("monthlyTextbooksDate", monthlyTextbooksDate) 
    
            //---------------------------------
            //     FOOD & PERSONAL DISPLAY
            //---------------------------------
    
            //------------------------------
            //GROCERIES/HOUSEHOLD PURCHASES
            //------------------------------
            let monthlyGroceries = parseFloat($(".monthly-groceries-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyGroceries", monthlyGroceries) 
            //DATE
            let monthlyGroceriesDate = parseInt($(".monthly-groceries-date").val())
            //localStorage
            localStorage.setItem("monthlyGroceriesDate", monthlyGroceriesDate) 
    
            //------------------
            //     MEALS OUT
            //------------------
            let monthlyMealsOut = parseFloat($(".monthly-meals-out-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyMealsOut", monthlyMealsOut) 
            //DATE
            let monthlyMealsOutDate = parseInt($(".monthly-meals-out-date").val())
            //localStorage
            localStorage.setItem("monthlyMealsOutDate", monthlyMealsOutDate) 
    
            //------------------
            //     CLOTHING
            //------------------
            let monthlyClothing = parseFloat($(".monthly-clothing-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyClothing", monthlyClothing) 
            //DATE
            let monthlyClothingDate = parseInt($(".monthly-clothing-date").val())
            //localStorage
            localStorage.setItem("monthlyClothingDate", monthlyClothingDate) 
    
            //------------------
            //  ENTERTAINMENT
            //------------------
            let monthlyEntertainment = parseFloat($(".monthly-entertainment-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyEntertainment", monthlyEntertainment) 
            //DATE
            let monthlyEntertainmentDate = parseInt($(".monthly-entertainment-date").val())
            //localStorage
            localStorage.setItem("monthlyEntertainmentDate", monthlyEntertainmentDate) 
    
            //------------------
            //   PET SUPPLIES
            //------------------
            let monthlyPet = parseFloat($(".monthly-pet-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyPet", monthlyPet) 
            //DATE
            let monthlyPetDate = parseInt($(".monthly-pet-date").val())
            //localStorage
            localStorage.setItem("monthlyPetDate", monthlyPetDate) 
    
            //------------------
            // HOBBIES & SPORTS
            //------------------
            let monthlyHobbies = parseFloat($(".monthly-hobbies-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyHobbies", monthlyHobbies) 
            //DATE
            let monthlyHobbiesDate = parseInt($(".monthly-hobbies-date").val())
            //localStorage
            localStorage.setItem("monthlyHobbiesDate", monthlyHobbiesDate) 
    
            //---------------------
            //CHARITABLE DONATIONS
            //---------------------
            let monthlyCharitable = parseFloat($(".monthly-charitable-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCharitable", monthlyCharitable) 
            //DATE
            let monthlyCharitableDate = parseInt($(".monthly-charitable-date").val())
            //localStorage
            localStorage.setItem("monthlyCharitableDate", monthlyCharitableDate) 
    
            //------------------
            //   SUBSCRIPTIONS
            //------------------
            let monthlySubscriptions = parseFloat($(".monthly-subscriptions-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlySubscriptions", monthlySubscriptions) 
            //DATE
            let monthlySubscriptionsDate = parseInt($(".monthly-subscriptions-date").val())
            //localStorage
            localStorage.setItem("monthlySubscriptionsDate", monthlySubscriptionsDate) 
    
        //=======================================
        //------------------------------------
        //  3c.) MONTHLY SUM & ARRAY VARIABLES
        //------------------------------------
        //=======================================

            //Monthly Current Assets
            let monthlyCurrentAssetsArray = [(monthlyCheckingAccount || 0), (monthlySavingsAccount || 0), (monthlyCash || 0)]

            let monthlyCurrentAssetsSum = 0

            for(let i = 0, len = monthlyCurrentAssetsArray.length; i < len; i++) {
                monthlyCurrentAssetsSum += monthlyCurrentAssetsArray[i]
            }
            
            //Monthly Income
            let monthlyIncomeArray = [(monthlyNet || 0)]

            let monthlyIncomeSum = 0

            for(let i = 0, len = monthlyIncomeArray.length; i < len; i++) {
                monthlyIncomeSum += monthlyIncomeArray[i]
            }
    
            //Monthly Savings
            let monthlySavingsArray = [(monthlySavingsGeneral || 0), (monthlyEmergency || 0), (monthly401k || 0), (monthlyInvestments || 0), (monthlyRetirement || 0)]
            
            let monthlySavingsSum = 0

            for(let i = 0, len = monthlySavingsArray.length; i < len; i++) {
                monthlySavingsSum += monthlySavingsArray[i]
            }

            //Monthly Expenses Exclusive

            let monthlyExpensesExclusiveArray = [(monthlyRent || 0) + (monthlyMortgage || 0), (monthlyRepair || 0), (monthlyCable || 0), (monthlyHomeInsurance || 0), (monthlyHOA || 0), (monthlyInternet || 0), (monthlyCellphone || 0), (monthlyWater || 0), (monthlyGas || 0), (monthlyElectricity || 0), (monthlyCreditCards || 0), (monthlyStudentLoans || 0), (monthlyMedicalDebt || 0), (monthlyTaxPayments || 0), (monthlyStoreCards || 0), (monthlyPersonalDebt || 0), (monthlyCarPayment || 0), (monthlyCarInsurance || 0), (monthlyCarGas || 0), (monthlyCarRepairs || 0), (monthlyParking || 0), (monthlyPublicTransit || 0), (monthlyHealthInsurance || 0), (monthlyCopays || 0), (monthlyPrescriptions || 0), (monthlyLifeInsurance || 0), (monthlySchoolSupplies || 0), (monthlyMealPlan || 0), (monthlyTuition || 0), (monthlyTextbooks || 0), (monthlyGroceries || 0), (monthlyMealsOut || 0), (monthlyClothing || 0), (monthlyEntertainment || 0), (monthlyPet || 0), (monthlyHobbies || 0), (monthlyCharitable || 0), (monthlySubscriptions || 0)]

            let monthlyExpensesExclusiveSum = 0

            for(let i = 0, len = monthlyExpensesExclusiveArray.length; i < len; i++) {
                monthlyExpensesExclusiveSum += monthlyExpensesExclusiveArray[i]
            }

            //Monthly Expenses Inclusive

            let monthlyExpensesInclusiveArray = [(monthlySavingsGeneral || 0), (monthlyEmergency || 0), (monthly401k || 0), (monthlyInvestments || 0), (monthlyRetirement || 0) + (monthlyRent || 0) + (monthlyMortgage || 0), (monthlyRepair || 0), (monthlyCable || 0), (monthlyHomeInsurance || 0), (monthlyHOA || 0), (monthlyInternet || 0), (monthlyCellphone || 0), (monthlyWater || 0), (monthlyGas || 0), (monthlyElectricity || 0), (monthlyCreditCards || 0), (monthlyStudentLoans || 0), (monthlyMedicalDebt || 0), (monthlyTaxPayments || 0), (monthlyStoreCards || 0), (monthlyPersonalDebt || 0), (monthlyCarPayment || 0), (monthlyCarInsurance || 0), (monthlyCarGas || 0), (monthlyCarRepairs || 0), (monthlyParking || 0), (monthlyPublicTransit || 0), (monthlyHealthInsurance || 0), (monthlyCopays || 0), (monthlyPrescriptions || 0), (monthlyLifeInsurance || 0), (monthlySchoolSupplies || 0), (monthlyMealPlan || 0), (monthlyTuition || 0), (monthlyTextbooks || 0), (monthlyGroceries || 0), (monthlyMealsOut || 0), (monthlyClothing || 0), (monthlyEntertainment || 0), (monthlyPet || 0), (monthlyHobbies || 0), (monthlyCharitable || 0), (monthlySubscriptions || 0)]

            let monthlyExpensesInclusiveSum = 0

            for(let i = 0, len = monthlyExpensesInclusiveArray.length; i < len; i++) {
                monthlyExpensesInclusiveSum += monthlyExpensesInclusiveArray[i]
            }
            
            //Monthly Home Expenses

            let monthlyHomeArray = [(monthlyRent || 0), (monthlyMortgage || 0), (monthlyRepair || 0), (monthlyCable || 0), (monthlyHomeInsurance || 0), (monthlyHOA || 0), (monthlyInternet || 0), (monthlyCellphone || 0), (monthlyWater || 0), (monthlyGas || 0), (monthlyElectricity || 0)]

            let monthlyHomeSum = 0

            for(let i = 0, len = monthlyHomeArray.length; i < len; i++) {
                monthlyHomeSum += monthlyHomeArray[i]
            }

            //Monthly Debt & Loans
            let monthlyDebtArray = [(monthlyCreditCards || 0), (monthlyStudentLoans || 0), (monthlyMedicalDebt || 0), (monthlyTaxPayments || 0), (monthlyStoreCards || 0), (monthlyPersonalDebt || 0)]

            let monthlyDebtSum = 0

            for(let i = 0, len = monthlyDebtArray.length; i < len; i++) {
                monthlyDebtSum += monthlyDebtArray[i]
            }
    
            //Monthly Transportation Expenses

            let monthlyTransportationArray = [(monthlyCarPayment || 0), (monthlyCarInsurance || 0), (monthlyCarGas || 0), (monthlyCarRepairs || 0), (monthlyParking || 0), (monthlyPublicTransit || 0)]

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

            let monthlyPersonalArray = [(monthlyGroceries || 0), (monthlyMealsOut || 0), (monthlyClothing || 0), (monthlyEntertainment || 0), (monthlyPet || 0), (monthlyHobbies || 0), (monthlyCharitable || 0), (monthlySubscriptions || 0)]

            let monthlyPersonalSum = 0

            for(let i = 0, len = monthlyPersonalArray.length; i < len; i++) {
                monthlyPersonalSum += monthlyPersonalArray[i]
            }

            //MONTHLY EXPENSES SUMS ARRAY
            let monthlyExpensesSumsArray = [monthlyHomeSum, monthlyDebtSum, monthlyTransportationSum, monthlyMedicalSum, monthlyEducationalSum, monthlyPersonalSum]

            let monthlyExpensesSumsSum = 0

            for(let i = 0, len = monthlyExpensesSumsArray.length; i < len; i++) {
                monthlyExpensesSumsSum += monthlyExpensesSumsArray[i]
            }

            //ALL MONTHLY EXPENSES (INCLUDING SAVINGS) SUMS ARRAY
            let monthlyAllExpensesSumsArray = [monthlySavingsSum, monthlyHomeSum, monthlyDebtSum, monthlyTransportationSum, monthlyMedicalSum, monthlyEducationalSum, monthlyPersonalSum]

            let monthlyAllExpensesSumsSum = 0

            for(let i = 0, len = monthlyAllExpensesSumsArray.length; i < len; i++) {
                monthlyAllExpensesSumsSum += monthlyAllExpensesSumsArray[i]
            }

            let monthlyStart = monthlyCurrentAssetsSum + monthlyNet
            let monthlyTotal = monthlyCurrentAssetsSum + monthlyNet - (monthlyExpensesInclusiveSum)

            

    //==================================
    //--------------------------------
    //     3d.) SET CLASS VALUES
    //--------------------------------
    //==================================

    //-----------------------
    //  EXPENSE TYPE TOTALS
    //-----------------------

    // INCOME NET
    $(".monthly-income").text("$" + (monthlyIncomeSum || 0))

    // SAVINGS TOTAL
    $(".monthly-savings").text("$" + (monthlySavingsSum || 0))

    // EXPENSES EXCLUSIVE (Excluding Savings)
    $(".monthly-expenses-exclusive").text("$" + (monthlyExpensesExclusiveSum || 0))

    // EXPENSES INCLUSIVE (Including Savings)
    $(".monthly-expenses-inclusive").text("$" + monthlyExpensesInclusiveSum)

    // HOME EXPENSES TOTAL
    $(".monthly-home").text("$" + (monthlyHomeSum || 0))

    //DEBT & LOANS TOTAL
    $(".monthly-debt").text("$" + (monthlyDebtSum || 0))

    //TRANSPORTATION TOTAL
    $(".monthly-transportation").text("$" + (monthlyTransportationSum || 0))

    //MEDICAL TOTAL
    $(".monthly-medical").text("$" + (monthlyMedicalSum || 0))

    //EDUCATIONAL TOTAL
    $(".monthly-educational").text("$" + (monthlyEducationalSum || 0))

    //FOOD & PERSONAL TOTAL
    $(".monthly-personal").text("$" + (monthlyPersonalSum || 0))

    //MONTHLY TOTAL
    $(".monthly-total").text("$" + (monthlyTotal || 0))     

    //-----------------------
    //    CURRENT ASSETS
    //-----------------------

    //CHECKING ACCOUNT TOTAL
    $(".monthly-checking-account").text("$" + (monthlyCheckingAccount || 0))

    //SAVINGS ACCOUNT TOTAL
    $(".monthly-savings-account").text("$" + (monthlySavingsAccount || 0))

    //CASH TOTAL
    $(".monthly-cash").text("$" + (monthlyCash || 0))

    //-----------------------
    //        INCOME
    //-----------------------

    $(".monthly-net-income").text("$" + (monthlyNet || 0))

    //-----------------------
    //        SAVINGS
    //-----------------------

    // SAVINGS (GENERAL)
    $(".monthly-savings-general").text("$" + monthlySavingsGeneral)
        
    // EMERGENCY
    $(".monthly-emergency").text("$" + (monthlyEmergency || 0))

    // 401K
    $(".monthly-401k").text("$" + (monthly401k || 0))

    // INVESTMENTS
    $(".monthly-investments").text("$" + (monthlyInvestments || 0))

    // RETIREMENT
    $(".monthly-retirement").text("$" + (monthlyRetirement || 0))

    //-----------------------
    //     HOME EXPENSES
    //-----------------------

    // RENT
    $(".monthly-rent").text("$" + (monthlyRent || 0))
        
    // MORTGAGE
    $(".monthly-mortgage").text("$" + (monthlyMortgage || 0))

    // REPAIR/MAINTENANCE
    $(".monthly-repair").text("$" + (monthlyRepair || 0))

    // CABLE/TV
    $(".monthly-cable").text("$" + (monthlyCable || 0))

    // HOME INSURANCE
    $(".monthly-home-insurance").text("$" + (monthlyHomeInsurance || 0))

    // HOA FEES
    $(".monthly-HOA").text("$" + (monthlyHOA || 0))

    // INTERNET
    $(".monthly-internet").text("$" + (monthlyInternet || 0))

    // CELLPHONE
    $(".monthly-cellphone").text("$" + (monthlyCellphone || 0))

    // WATER
    $(".monthly-water").text("$" + (monthlyWater || 0))

    // GAS (HOME)
    $(".monthly-gas").text("$" + (monthlyGas || 0))

    // ELECTRICITY
    $(".monthly-electricity").text("$" + (monthlyElectricity || 0))

    //-----------------------
    //      DEBT & LOANS
    //-----------------------

    // CREDIT CARDS
    $(".monthly-credit-cards").text("$" + (monthlyCreditCards || 0))
        
    // STUDENT LOANS
    $(".monthly-student-loans").text("$" + (monthlyStudentLoans || 0))

    // MEDICAL DEBT
    $(".monthly-medical-debt").text("$" + (monthlyMedicalDebt || 0))

    // TAX PAYMENTS
    $(".monthly-tax-payments").text("$" + (monthlyTaxPayments || 0))

    // STORE CARDS
    $(".monthly-store-cards").text("$" + (monthlyStoreCards || 0))

    // PERSONAL DEBT
    $(".monthly-personal-debt").text("$" + (monthlyPersonalDebt || 0))

    //-----------------------
    //    TRANSPORTATION
    //-----------------------

    // CAR PAYMENTS
    $(".monthly-car-payment").text("$" + (monthlyCarPayment || 0))
        
    // CAR INSURANCE
    $(".monthly-car-insurance").text("$" + (monthlyCarInsurance || 0))

    // (CAR) GAS
    $(".monthly-car-gas").text("$" + (monthlyCarGas || 0))

    // CAR REPAIRS
    $(".monthly-car-repairs").text("$" + (monthlyCarRepairs || 0))

    // PARKING & TOLLS
    $(".monthly-parking").text("$" + (monthlyParking || 0))

    // PUBLIC TRANSIT
    $(".monthly-public-transit").text("$" + (monthlyPublicTransit || 0))

    //-----------------------
    //        MEDICAL
    //-----------------------

    // HEALTH INSURANCE
    $(".monthly-health-insurance").text("$" + (monthlyHealthInsurance || 0))
        
    // COPAYS
    $(".monthly-copays").text("$" + (monthlyCopays || 0))

    // PRESCRIPTIONS
    $(".monthly-prescriptions").text("$" + (monthlyPrescriptions || 0))

    // LIFE INSURANCE
    $(".monthly-life-insurance").text("$" + (monthlyLifeInsurance || 0))

    //-----------------------
    //      EDUCATIONAL
    //-----------------------

    // SCHOOL SUPPLIES
    $(".monthly-school-supplies").text("$" + (monthlySchoolSupplies || 0))
        
    // MEAL PLAN
    $(".monthly-meal-plan").text("$" + (monthlyMealPlan || 0))

    // TUITION
    $(".monthly-tuition").text("$" + (monthlyTuition || 0))

    // TEXTBOOKS
    $(".monthly-textbooks").text("$" + (monthlyTextbooks || 0))

    //-----------------------
    //    FOOD & PERSONAL
    //-----------------------

    // GROCERIES/HOUSEHOLD PURCHASES
    $(".monthly-groceries").text("$" + (monthlyGroceries || 0))
                    
    // MEALS OUT
    $(".monthly-meals-out").text("$" + (monthlyMealsOut || 0))

    // CLOTHING
    $(".monthly-clothing").text("$" + (monthlyClothing || 0))

    // ENTERTAINMENT
    $(".monthly-entertainment").text("$" + (monthlyEntertainment || 0))

    // PET SUPPLIES
    $(".monthly-pet").text("$" + (monthlyPet || 0))

    // HOBBIES & SPORTS
    $(".monthly-hobbies").text("$" + (monthlyHobbies || 0))

    // CHARITABLE DONATIONS
    $(".monthly-charitable").text("$" + (monthlyCharitable || 0))

    // SUBSCRIPTIONS
    $(".monthly-subscriptions").text("$" + (monthlySubscriptions || 0))
            
    //==================================
    //--------------------------------
    //  3e.) MONTHLY BUDGET ALERTS
    //--------------------------------
    //==================================
    
    if (monthlyTotal < 0){
        $("#monthlyAlertField").html(`                     
        <div class="alert alert-danger alert-dismissible fade show my-3 position-sticky sticky-top" role="alert">
        <strong>Oops! You're $${(monthlyCurrentAssetsSum + monthlyNet - (monthlyExpensesInclusiveSum)) * -1} over-budget!</strong> <u>You've spent more than your monthly income.</u>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        `)
    } else if (monthlyTotal > 0){
        $("#monthlyAlertField").html(`                     
        <div class="alert alert-success alert-dismissible fade show my-3 position-sticky sticky-top" role="alert">
            You're in the green! <strong>Your monthly total is $${monthlyCurrentAssetsSum + monthlyNet - (monthlyExpensesInclusiveSum)}</strong>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        </div>
        `)
    }

    //======================================
    //--------------------------------------
    //        3f.) MONTHLY CHARTS
    //--------------------------------------
    //======================================

    //================================
    //--------------------------------
    //     i.) MONTHLY PIE CHARTS
    //--------------------------------
    //================================

        //========================================
        //              COLOR ARRAYS
        //========================================
            
            //ALL COLOR OPTIONS
            let monthlyColorArray = ["#9EF8FF", "#9AE67B", "#A787F5", "#F28674", "rgb(4, 230, 255)", "#FCDB79", "#F5ACE8", "#C4FFA3", "#FFBC52", "#FBFFA6", "#C6D1FF", "#FFDFDE"]
            let monthlyPositiveColorArray = [] 
            let monthlyNegativeColorArray = []
            
        //========================================
        //        MONTHLY INCOME PIE CHART
        //========================================
            // $("#monthlyIncomePieChart").remove()

            let monthlyIncomePieChart = document.getElementById("monthlyIncomePieChart").getContext("2d")

            let getMonthlyIncomePieChart = new Chart(monthlyIncomePieChart, {
                type: "doughnut",
                data: {
                    labels: ["Net Income"],
                    datasets:[{
                        label: "Monthly Income",
                        data: [monthlyIncomeSum],
                backgroundColor: monthlyColorArray,
                hoverBorderWidth: 3,
                hoverBorderColor: "#000"

                    }]
                },
                options: {
                    legend: {
                        position: "left"
                    }
                }
            })

        //========================================
        //       MONTHLY EXPENSES PIE CHART
        //========================================

            // $("#monthlyExpensesPieChart").remove()

            let monthlyExpensesPieChart = document.getElementById("monthlyExpensesPieChart").getContext("2d")

            let getMonthlyExpensesPieChart = new Chart(monthlyExpensesPieChart, {
                type: "doughnut",
                data: {
                    labels: ["Savings", "Home", "Debt & Loans", "Transportation", "Medical", "Educational", "Food & Personal"],
                    datasets:[{
                        label: "Monthly Expenses",
                        data: monthlyAllExpensesSumsArray,
                        backgroundColor: monthlyColorArray,
                        hoverBorderWidth: 3,
                        hoverBorderColor: "#000"
                    }]
                },
                options: {
                    legend: {
                        position: "left"
                    }
                }
            })

    //======================================
    //--------------------------------------
    //           MONTHLY EXPENSES
    //--------------------------------------
    //======================================

        //========================================
        //       MONTHLY SAVINGS PIE CHART
        //========================================

            $(".monthly-savings-pie-chart").html('<canvas id="monthlySavingsPieChart" height="120"></canvas>')

            let monthlySavingsPieChart = document.getElementById("monthlySavingsPieChart").getContext("2d")

            let getMonthlySavingsPieChart = new Chart(monthlySavingsPieChart, {
                
                type: "doughnut",
                data: {
                    labels: ["Savings(General)", "Emergency Fund", "401k", "Investments", "Retirement"],
                    datasets:[{
                        label: "Monthly Savings",
                        data: monthlySavingsArray,
                        backgroundColor: monthlyColorArray,
                        hoverBorderWidth: 3,
                        hoverBorderColor: "#000"

                    }]
                },
                options: {
                    legend: {
                        position: "left"
                    }
                }
            })

        //========================================
        //     MONTHLY HOME EXPENSES PIE CHART
        //========================================

            $(".monthly-home-pie-chart").html('<canvas id="monthlyHomePieChart"></canvas>')

            let monthlyHomePieChart = document.getElementById("monthlyHomePieChart").getContext("2d")

            let getMonthlyHomePieChart = new Chart(monthlyHomePieChart, {
                type: "doughnut",
                data: {
                    labels: ["Rent", "Mortgage", "Repair/Maintenance", "Cable/TV", "Home Insurance", "HOA Fees", "Internet", "Cellphone", "Water", "Gas", "Electricity"],
                    datasets:[{
                        label: "Home Expenses",
                        data: monthlyHomeArray,
                        backgroundColor: monthlyColorArray,
                        hoverBorderWidth: 3,
                        hoverBorderColor: "#000"
                    }]
                },
                options: {
                    legend: {
                        position: "left"
                    }
                }
            })
            
        //========================================
        //     MONTHLY DEBT & LOANS PIE CHART
        //========================================
            
            $(".monthly-debt-pie-chart").html('<canvas id="monthlyDebtPieChart"></canvas>')

            let monthlyDebtPieChart = document.getElementById("monthlyDebtPieChart").getContext("2d")

            let getMonthlyDebtPieChart = new Chart(monthlyDebtPieChart, {
                type: "doughnut",
                data: {
                    labels: ["Credit Cards", "Student Loans", "Medical Debt", "Tax Payments", "Store Cards", "Personal Debt"],
                    datasets:[{
                        label: "Debt & Loans",
                        data: monthlyDebtArray,
                        backgroundColor: monthlyColorArray,
                        hoverBorderWidth: 3,
                        hoverBorderColor: "#000"
                    }]
                },
                options: {
                    legend: {
                        position: "left"
                    }
                }
            })

        //========================================
        //    MONTHLY TRANSPORTATION PIE CHART
        //========================================

            $(".monthly-transportation-pie-chart").html('<canvas id="monthlyTransportationPieChart"></canvas>')

            let monthlyTransportationPieChart = document.getElementById("monthlyTransportationPieChart").getContext("2d")

            //GLOBAL OPTIONS

            let getMonthlyTransportationPieChart = new Chart(monthlyTransportationPieChart, {
                type: "doughnut",
                data: {
                    labels: ["Car Payment", "Car Insurance", "Gas", "Car Repairs", "Parking & Tolls", "Public Transit"],
                    datasets:[{
                        label: "Transportation Expenses",
                        data: monthlyTransportationArray,
                        backgroundColor: monthlyColorArray,
                        hoverBorderWidth: 3,
                        hoverBorderColor: "#000"
                    }]
                },
                options: {
                    legend: {
                        position: "left"
                    }
                }
            })

        //========================================
        //       MONTHLY MEDICAL PIE CHART
        //========================================

            $(".monthly-medical-pie-chart").html('<canvas id="monthlyMedicalPieChart"></canvas>')

            let monthlyMedicalPieChart = document.getElementById("monthlyMedicalPieChart").getContext("2d")


            let getMonthlyMedicalPieChart = new Chart(monthlyMedicalPieChart, {
                type: "doughnut",
                data: {
                    labels: ["Health Insurance", "Copays", "Prescriptions", "Life Insurance"],
                    datasets:[{
                        label: "Medical Expenses",
                        data: monthlyMedicalArray,
                        backgroundColor: monthlyColorArray,
                        hoverBorderWidth: 3,
                        hoverBorderColor: "#000",

                    }]
                },
                options: {
                    legend: {
                        position: "left"
                    }
                }
            })
            
        //========================================
        //     MONTHLY EDUCATIONAL PIE CHART
        //========================================

            $(".monthly-educational-pie-chart").html('<canvas id="monthlyEducationalPieChart"></canvas>')

            let monthlyEducationalPieChart = document.getElementById("monthlyEducationalPieChart").getContext("2d")

            let getMonthlyEducationalPieChart = new Chart(monthlyEducationalPieChart, {
                type: "doughnut",
                data: {
                    labels: ["School Supplies", "Meal Plan", "Tuition", "Textbooks"],
                    datasets:[{
                        label: "Educational Expenses",
                        data: monthlyEducationalArray,
                        backgroundColor: monthlyColorArray,
                        hoverBorderWidth: 3,
                        hoverBorderColor: "#000",

                    }]
                },
                options: {
                    legend: {
                        position: "left"
                    }
                }
            })

        //========================================
        //   MONTHLY FOOD & PERSONAL PIE CHART
        //========================================
            
            $(".monthly-personal-pie-chart").html('<canvas id="monthlyPersonalPieChart"></canvas>')

            let monthlyPersonalPieChart = document.getElementById("monthlyPersonalPieChart").getContext("2d")

            let getMonthlyPersonalPieChart = new Chart(monthlyPersonalPieChart, {
                type: "doughnut",
                data: {
                    labels: ["Groceries/Household Purchases", "Meals Out", "Clothing", "Entertainment", "Pet Supplies", "Hobbies & Sports", "Charitable Donations", "Subscriptions"],
                    datasets:[{
                        label: "Food & Personal Expenses",
                        data: monthlyPersonalArray,
                        backgroundColor: monthlyColorArray,
                        hoverBorderWidth: 3,
                        hoverBorderColor: "#000",

                    }]
                },
                options: {
                    legend: {
                        position: "left"
                    }
                }
            })

    //======================================
    //--------------------------------------
    //         MONTHLY DEEP SUMMARY
    //--------------------------------------
    //======================================
        //================================
        //   MONTHLY INCOME DEEP SUMMARY
        //================================

        $(".monthly-income-deep-summary").html('<canvas id="monthlyIncomeDeepSummary" height="120"></canvas>')

        let monthlyIncomeDeepSummary = document.getElementById("monthlyIncomeDeepSummary").getContext("2d")

        let getMonthlyIncomeDeepSummary = new Chart(monthlyIncomeDeepSummary, {
            type: "doughnut",
            data: {
                labels: ["Net Income"],
                datasets:[{
                    label: "Monthly Income",
                    data: monthlyIncomeArray,
            backgroundColor: monthlyColorArray,
            hoverBorderWidth: 3,
            hoverBorderColor: "#000"

                }]
            },
            options: {
                legend: {
                    position: "left"
                }
            }
        })

        //================================
        //  MONTHLY SAVINGS DEEP SUMMARY
        //================================

        $(".monthly-savings-deep-summary").html('<canvas id="monthlySavingsDeepSummary" height="120"></canvas>')

        let monthlySavingsDeepSummary = document.getElementById("monthlySavingsDeepSummary").getContext("2d")

        let getMonthlySavingsDeepSummary = new Chart(monthlySavingsDeepSummary, {
            
            type: "doughnut",
            data: {
                labels: ["Savings(General)", "Emergency Fund", "401k", "Investments", "Retirement"],
                datasets:[{
                    label: "Monthly Savings",
                    data: monthlySavingsArray,
                    backgroundColor: monthlyColorArray,
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000"

                }]
            },
            options: {
                legend: {
                    position: "left"
                }
            }
        })

        //================================
        //   HOME EXPENSES DEEP SUMMARY
        //================================

        $(".monthly-home-deep-summary").html('<canvas id="monthlyHomeDeepSummary"></canvas>')

        let monthlyHomeDeepSummary = document.getElementById("monthlyHomeDeepSummary").getContext("2d")

        let getMonthlyHomeDeepSummary = new Chart(monthlyHomeDeepSummary, {
            type: "doughnut",
            data: {
                labels: ["Rent", "Mortgage", "Repair/Maintenance", "Cable/TV", "Home Insurance", "HOA Fees", "Internet", "Cellphone", "Water", "Gas", "Electricity"],
                datasets:[{
                    label: "Home Expenses",
                    data: monthlyHomeArray,
                    backgroundColor: monthlyColorArray,
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000"
                }]
            },
            options: {
                legend: {
                    position: "left"
                }
            }
        })

        //=================================
        //    DEBT & LOANS DEEP SUMMARY
        //=================================

        $(".monthly-debt-deep-summary").html('<canvas id="monthlyDebtDeepSummary"></canvas>')

        let monthlyDebtDeepSummary = document.getElementById("monthlyDebtDeepSummary").getContext("2d")

        let getMonthlyDebtDeepSummary = new Chart(monthlyDebtDeepSummary, {
            type: "doughnut",
            data: {
                labels: ["Credit Cards", "Student Loans", "Medical Debt", "Tax Payments", "Store Cards", "Personal Debt"],
                datasets:[{
                    label: "Debt & Loans",
                    data: monthlyDebtArray,
                    backgroundColor: monthlyColorArray,
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000"
                }]
            },
            options: {
                legend: {
                    position: "left"
                }
            }
        })

        //=================================
        //   TRANSPORTATION DEEP SUMMARY
        //=================================

        $(".monthly-transportation-deep-summary").html('<canvas id="monthlyTransportationDeepSummary"></canvas>')

        let monthlyTransportationDeepSummary = document.getElementById("monthlyTransportationDeepSummary").getContext("2d")

        //GLOBAL OPTIONS

        let getMonthlyTransportationDeepSummary = new Chart(monthlyTransportationDeepSummary, {
            type: "doughnut",
            data: {
                labels: ["Car Payment", "Car Insurance", "Gas", "Car Repairs", "Parking & Tolls", "Public Transit"],
                datasets:[{
                    label: "Transportation Expenses",
                    data: monthlyTransportationArray,
                    backgroundColor: monthlyColorArray,
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000"
                }]
            },
            options: {
                legend: {
                    position: "left"
                }
            }
        })

        //================================
        //      MEDICAL DEEP SUMMARY
        //================================

        $(".monthly-medical-deep-summary").html('<canvas id="monthlyMedicalDeepSummary"></canvas>')

        let monthlyMedicalDeepSummary = document.getElementById("monthlyMedicalDeepSummary").getContext("2d")


        let getMonthlyMedicalDeepSummary = new Chart(monthlyMedicalDeepSummary, {
            type: "doughnut",
            data: {
                labels: ["Health Insurance", "Copays", "Prescriptions", "Life Insurance"],
                datasets:[{
                    label: "Medical Expenses",
                    data: monthlyMedicalArray,
                    backgroundColor: monthlyColorArray,
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000",

                }]
            },
            options: {
                legend: {
                    position: "left"
                }
            }
        })

        //================================
        //    EDUCATIONAL DEEP SUMMARY
        //================================

        $(".monthly-educational-deep-summary").html('<canvas id="monthlyEducationalDeepSummary"></canvas>')

        let monthlyEducationalDeepSummary = document.getElementById("monthlyEducationalDeepSummary").getContext("2d")

        let getMonthlyEducationalDeepSummary = new Chart(monthlyEducationalDeepSummary, {
            type: "doughnut",
            data: {
                labels: ["School Supplies", "Meal Plan", "Tuition", "Textbooks"],
                datasets:[{
                    label: "Educational Expenses",
                    data: monthlyEducationalArray,
                    backgroundColor: monthlyColorArray,
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000",

                }]
            },
            options: {
                legend: {
                    position: "left"
                }
            }
        })

        //====================
        //   FOOD & PERSONAL
        //====================

        $(".monthly-personal-deep-summary").html('<canvas id="monthlyPersonalDeepSummary"></canvas>')

        new Chart(document.getElementById("monthlyPersonalDeepSummary"), {
            type: "doughnut",
            data: {
                labels: ["Groceries/Household Purchases", "Meals Out", "Clothing", "Entertainment", "Pet Supplies", "Hobbies & Sports", "Charitable Donations", "Subscriptions"],
                datasets:[{
                    label: "Food & Personal Expenses",
                    data: monthlyPersonalArray,
                    backgroundColor: monthlyColorArray,
                    hoverBorderWidth: 3,
                    hoverBorderColor: "#000",

                }]
            },
            options: {
                legend: {
                    position: "left"
                }
            }
        })

        //====================
        //  ONE-TIME EXPENSES
        //====================


    //================================
    //--------------------------------
    //   ii.) MONTHLY LINE GRAPHS
    //--------------------------------
    //================================
let myData = [
    {
    //STARTING POINT -- monthlyTotal
        x: 0,
        y: monthlyStart,
     }, {
    //=======================
    //    MONTHLY SAVINGS
    //=======================
    //--------------------
    //  SAVINGS (GENERAL)
    //--------------------
        x: monthlySavingsGeneralDate,
        y: monthlyStart -= monthlySavingsGeneral
     }, {
    //--------------------
    //     EMERGENCY
    //--------------------
        x: monthlyEmergencyDate,
        y: monthlyStart -= monthlyEmergency
     }, {
    //--------------------
    //       401k
    //--------------------
        x: monthly401kDate,
        y: monthlyStart -= monthly401k
     }, {
    //--------------------
    //    INVESTMENTS
    //--------------------
        x: monthlyInvestmentsDate,
        y: monthlyStart -= monthlyInvestments
     }, {
    //--------------------
    //     RETIREMENT
    //--------------------
        x: monthlyRetirementDate,
        y: monthlyStart -= monthlyRetirement
     }, {
    //=======================
    // MONTHLY HOME EXPENSES
    //=======================
    //--------------------
    //        RENT
    //--------------------
        x: monthlyRentDate,
        y: monthlyStart -= monthlyRent
     }, {
    //--------------------
    //      MORTGAGE
    //--------------------
        x: monthlyMortgageDate,
        y: monthlyStart -= monthlyMortgage
     }, {
    //--------------------
    // REPAIR/MAINTINENCE
    //--------------------
        x: monthlyRepairDate,
        y: monthlyStart -= monthlyRepair
     }, {
    //--------------------
    //     CABLE/TV
    //--------------------
        x: monthlyCableDate,
        y: monthlyStart -= monthlyCable
     }, {
    //--------------------
    //   HOME INSURANCE
    //--------------------
        x: monthlyHomeInsuranceDate,
        y: monthlyStart -= monthlyHomeInsurance
     }, {
    //--------------------
    //      HOA FEES
    //--------------------
        x: monthlyHOADate,
        y: monthlyStart -= monthlyHOA
     }, {
    //--------------------
    //      INTERNET
    //--------------------
        x: monthlyInternetDate,
        y: monthlyStart -= monthlyInternet
     }, {
    //--------------------
    //     CELLPHONE
    //--------------------
        x: monthlyCellphoneDate,
        y: monthlyStart -= monthlyCellphone
     }, {
    //--------------------
    //       WATER
    //--------------------
        x: monthlyWaterDate,
        y: monthlyStart -= monthlyWater
     }, {
    //--------------------
    //        GAS
    //--------------------
        x: monthlyGasDate,
        y: monthlyStart -= monthlyGas
     }, {
    //--------------------
    //    ELECTRICITY
    //--------------------
        x: monthlyElectricityDate,
        y: monthlyStart -= monthlyElectricity
     }, {
    //=======================
    // MONTHLY DEBT & LOANS
    //=======================
    //--------------------
    //    CREDIT CARDS
    //--------------------
        x: monthlyCreditCardsDate,
        y: monthlyStart -= monthlyCreditCards,
     }, {
    //--------------------
    //   STUDENT LOANS
    //--------------------
        x: monthlyStudentLoansDate,
        y: monthlyStart -= monthlyStudentLoans,
     }, {
    //--------------------
    //    MEDICAL DEBT
    //--------------------
        x: monthlyMedicalDebtDate,
        y: monthlyStart -= monthlyMedicalDebt,
     }, {
    //--------------------
    //    TAX PAYMENTS
    //--------------------
        x: monthlyTaxPaymentsDate,
        y: monthlyStart -= monthlyTaxPayments,
     }, {
    //--------------------
    //    STORE CARDS
    //--------------------
        x: monthlyStoreCardsDate,
        y: monthlyStart -= monthlyStoreCards,
     }, {
    //--------------------
    //   PERSONAL DEBT
    //--------------------
        x: monthlyPersonalDebtDate,
        y: monthlyStart -= monthlyPersonalDebt,
     }, {
    //=======================
    // MONTHLY TRANSPORTATION
    //=======================
    //--------------------
    //    CAR PAYMENT
    //--------------------
        x: monthlyCarPaymentDate,
        y: monthlyStart -= monthlyCarPayment,
     }, {
    //--------------------
    //   CAR INSURANCE
    //--------------------
        x: monthlyCarInsuranceDate,
        y: monthlyStart -= monthlyCarInsurance,
     }, {
    //--------------------
    //     (CAR) GAS
    //--------------------
        x: monthlyCarGasDate,
        y: monthlyStart -= monthlyCarGas,
     }, {
    //--------------------
    //    CAR REPAIRS
    //--------------------
        x: monthlyCarRepairs,
        y: monthlyStart -= monthlyCarRepairs,
     }, {
    //--------------------
    //  PARKING & TOLLS
    //--------------------
        x: monthlyParkingDate,
        y: monthlyStart -= monthlyParking,
     }, {
    //--------------------
    //   PUBLIC TRANSIT
    //--------------------
        x: monthlyPublicTransitDate,
        y: monthlyStart -= monthlyPublicTransit,
     }, {
    //=======================
    //    MONTHLY MEDICAL
    //=======================
    //--------------------
    //  HEALTH INSURANCE
    //--------------------
        x: monthlyHealthInsuranceDate,
        y: monthlyStart -= monthlyHealthInsurance,
     }, {
    //--------------------
    //       COPAYS
    //--------------------
        x: monthlyCopaysDate,
        y: monthlyStart -= monthlyCopays,
     }, {
    //--------------------
    //   PRESCRIPTIONS
    //--------------------
        x: monthlyPrescriptionsDate,
        y: monthlyStart -= monthlyPrescriptions,
     }, {
    //--------------------
    //   LIFE INSURANCE
    //--------------------
        x: monthlyLifeInsuranceDate,
        y: monthlyStart -= monthlyLifeInsurance,
     }, {
    //=======================
    //  MONTHLY EDUCATIONAL
    //=======================
    //--------------------
    //   SCHOOL SUPPLIES
    //--------------------
        x: monthlySchoolSuppliesDate,
        y: monthlyStart -= monthlySchoolSupplies,
     }, {
    //--------------------
    //      MEAL PLAN
    //--------------------
        x: monthlyMealPlanDate,
        y: monthlyStart -= monthlyMealPlan,
     }, {
    //--------------------
    //       TUITION
    //--------------------
        x: monthlyTuitionDate,
        y: monthlyStart -= monthlyTuition,
     }, {
    //--------------------
    //     TEXTBOOKS
    //--------------------
        x: monthlyTextbooksDate,
        y: monthlyStart -= monthlyTextbooks,
     }, {
    //=========================
    // MONTHLY FOOD & PERSONAL
    //=========================
    //-------------------------------
    // GROCERIES/HOUSEHOLD PURCHASES
    //-------------------------------
        x: monthlyGroceriesDate,
        y: monthlyStart -= monthlyGroceries,
     }, {
    //--------------------
    //     MEALS OUT
    //--------------------
        x: monthlyMealsOutDate,
        y: monthlyStart -= monthlyMealsOut,
     }, {
    //--------------------
    //      CLOTHING
    //--------------------
        x: monthlyClothingDate,
        y: monthlyStart -= monthlyClothing,
     }, {
    //--------------------
    //    ENTERTAINMENT
    //--------------------
        x: monthlyEntertainmentDate,
        y: monthlyStart -= monthlyEntertainment,
     }, {
    //--------------------
    //    PET SUPPLIES
    //--------------------
        x: monthlyPetDate,
        y: monthlyStart -= monthlyPet,
     }, {
    //--------------------
    //  HOBBIES & SPORTS
    //--------------------
        x: monthlyHobbiesDate,
        y: monthlyStart -= monthlyHobbies,
     }, {
    //--------------------
    //CHARITABLE DONATIONS
    //--------------------
        x: monthlyCharitableDate,
        y: monthlyStart -= monthlyCharitable,
     }, {
    //--------------------
    //    SUBSCRIPTIONS
    //--------------------
        x: monthlySubscriptionsDate,
        y: monthlyStart -= monthlySubscriptions,
     }
    ]
let monthlyLineGraphPointLabels = ["Starting Assets", "Savings(General)", "Emergency Fund", "401k", "a", "b", "c", "d", "e" ]
var monthlyDeepSummaryLineGraph = document.getElementById('monthlyDeepSummaryLineGraph').getContext('2d');
var getMonthlyDeepSummaryLineGraph = new Chart(monthlyDeepSummaryLineGraph, {
   type: 'scatter',
   data: {
      labels: monthlyLineGraphPointLabels,
      datasets: [{
         label: 'Legend',
         data: myData
      }]
   },
   options: {
    scales: {
        xAxes: [{
            position: 'bottom'
        }]
    },
      tooltips: {
         callbacks: {
            label: function(tooltipItem, data) {
               var label = data.labels[tooltipItem.index];
               return label + ': (' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
            }
         }
      }
   }
});
                        

}) // END OF CLICK EVENT
    
    //================================
    //--------------------------------
    //   4.) MONTHLY KEY-UP EVENT
    //--------------------------------
    //================================
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


    //======================================= 
    //------------------------------------
    //   5.) LOCALSTORAGE INPUT GETTERS
    //------------------------------------
    //=======================================

    //-----------------------------
    //    MONTHLY CURRENT ASSETS
    //-----------------------------

    //CHECKING ACCOUNT
    $(".monthly-checking-account-input").val(localStorage.getItem("monthlyCheckingAccount"))

    //SAVINGS ACCOUNT
    $(".monthly-savings-account-input").val(localStorage.getItem("monthlySavingsAccount"))

    //CASH
    $(".monthly-cash-input").val(localStorage.getItem("monthlyCash"))

    //-----------------------------
    //       MONTHLY INCOME
    //-----------------------------

    //NET INCOME
    $(".monthly-net-income-input").val(localStorage.getItem("monthlyNetIncome"))

    //-----------------------------
    //       MONTHLY SAVINGS
    //-----------------------------

    //SAVINGS(GENERAL)
    $(".monthly-savings-general-input").val(localStorage.getItem("monthlySavingsGeneral"))
    //date
    $(".monthly-savings-general-date").val(localStorage.getItem("monthlySavingsGeneralDate"))

    //EMERGENCY FUND
    $(".monthly-emergency-input").val(localStorage.getItem("monthlyEmergency"))
    //date
    $(".monthly-emergency-date").val(localStorage.getItem("monthlyEmergencyDate"))

    //401k
    $(".monthly-401k-input").val(localStorage.getItem("monthly401k"))
    //date
    $(".monthly-401k-date").val(localStorage.getItem("monthly401kDate"))

    //INVESTMENTS
    $(".monthly-investments-input").val(localStorage.getItem("monthlyInvestments"))
    //date
    $(".monthly-investments-date").val(localStorage.getItem("monthlyInvestmentsDate"))

    //RETIREMENT
    $(".monthly-retirement-input").val(localStorage.getItem("monthlyRetirement"))
    //date
    $(".monthly-retirement-date").val(localStorage.getItem("monthlyRetirementDate"))

    //-----------------------------
    //    MONTHLY HOME EXPENSES
    //-----------------------------

    //RENT
    $(".monthly-rent-input").val(localStorage.getItem("monthlyRent"))
    //date
    $(".monthly-rent-date").val(localStorage.getItem("monthlyRentDate"))

    //MORTGAGE
    $(".monthly-mortgage-input").val(localStorage.getItem("monthlyMortage"))
    //date
    $(".monthly-mortgage-date").val(localStorage.getItem("monthlyMortgageDate"))

    //REPAIR/MAINTENANCE
    $(".monthly-repair-input").val(localStorage.getItem("monthlyRepair"))
    //date
    $(".monthly-repair-date").val(localStorage.getItem("monthlyRepairDate"))

    //CABLE/TV
    $(".monthly-cable-input").val(localStorage.getItem("monthlyCable"))
    //date
    $(".monthly-cable-date").val(localStorage.getItem("monthlyCableDate"))

    //HOME INSURANCE
    $(".monthly-home-insurance-input").val(localStorage.getItem("monthlyHomeInsurance"))
    //date
    $(".monthly-home-insurance-date").val(localStorage.getItem("monthlyHomeInsuranceDate"))

    //HOA FEES
    $(".monthly-HOA-input").val(localStorage.getItem("monthlyHOA"))
    //date
    $(".monthly-HOA-date").val(localStorage.getItem("monthlyHOADate"))

    //INTERNET
    $(".monthly-internet-input").val(localStorage.getItem("monthlyInternet"))
    //date
    $(".monthly-internet-date").val(localStorage.getItem("monthlyInternetDate"))

    //CELLPHONE
    $(".monthly-cellphone-input").val(localStorage.getItem("monthlyCellphone"))
    //date
    $(".monthly-cellphone-date").val(localStorage.getItem("monthlyCellphoneDate"))

    //WATER
    $(".monthly-water-input").val(localStorage.getItem("monthlyWater"))
    //date
    $(".monthly-water-date").val(localStorage.getItem("monthlyWaterDate"))

    //GAS
    $(".monthly-gas-input").val(localStorage.getItem("monthlyGas"))
    //date
    $(".monthly-gas-date").val(localStorage.getItem("monthlyGasDate"))

    //ELECTRICITY
    $(".monthly-electricity-input").val(localStorage.getItem("monthlyElectricity"))
    //date
    $(".monthly-electricity-date").val(localStorage.getItem("monthlyElectricityDate"))
    
    //-----------------------------
    //    MONTHLY DEBT & LOANS
    //-----------------------------

    //CREDIT CARDS
    $(".monthly-credit-cards-input").val(localStorage.getItem("monthlyCreditCards"))
    //date
    $(".monthly-credit-cards-date").val(localStorage.getItem("monthlyCreditCardsDate"))

    //STUDENT LOANS
    $(".monthly-student-loans-input").val(localStorage.getItem("monthlyStudentLoans"))
    //date
    $(".monthly-student-loans-date").val(localStorage.getItem("monthlyStudentLoansDate"))

    //MEDICAL DEBT
    $(".monthly-medical-debt-input").val(localStorage.getItem("monthlyMedicalDebt"))
    //date
    $(".monthly-medical-debt-date").val(localStorage.getItem("monthlyMedicalDebtDate"))

    //TAX PAYMENTS
    $(".monthly-tax-payments-input").val(localStorage.getItem("monthlyTaxPayments"))
    //date
    $(".monthly-tax-payments-date").val(localStorage.getItem("monthlyTaxPaymentsDate"))

    //STORE CARDS
    $(".monthly-store-cards-input").val(localStorage.getItem("monthlyStoreCards"))
    //date
    $(".monthly-store-cards-date").val(localStorage.getItem("monthlyStoreCardsDate"))

    //PERSONAL DEBT
    $(".monthly-personal-debt-input").val(localStorage.getItem("monthlyPersonalDebt"))
    //date
    $(".monthly-personal-debt-date").val(localStorage.getItem("monthlyPersonalDebtDate"))

    //-----------------------------
    //    MONTHLY TRANSPORTATION
    //-----------------------------

    //CAR PAYMENT
    $(".monthly-car-payment-input").val(localStorage.getItem("monthlyCarPayment"))
    //date
    $(".monthly-car-payment-date").val(localStorage.getItem("monthlyCarPaymentDate"))

    //CAR INSURANCE
    $(".monthly-car-insurance-input").val(localStorage.getItem("monthlyCarInsurance"))
    //date
    $(".monthly-car-insurance-date").val(localStorage.getItem("monthlyCarInsuranceDate"))

    //GAS (CAR)
    $(".monthly-car-gas-input").val(localStorage.getItem("monthlyCarGas"))
    //date
    $(".monthly-car-gas-date").val(localStorage.getItem("monthlyCarGasDate"))

    //CAR REPAIRS
    $(".monthly-car-repairs-input").val(localStorage.getItem("monthlyCarRepairs"))
    //date
    $(".monthly-car-repairs-date").val(localStorage.getItem("monthlyCarRepairsDate"))

    //PARKING & TOLLS
    $(".monthly-parking-input").val(localStorage.getItem("monthlyParking"))
    //date
    $(".monthly-parking-date").val(localStorage.getItem("monthlyParkingDate"))

    //PUBLIC TRANSIT
    $(".monthly-public-transit-input").val(localStorage.getItem("monthlyPublicTransit"))
    //date
    $(".monthly-public-transit-date").val(localStorage.getItem("monthlyPublicTransitDate"))

    //-----------------------------
    //       MONTHLY MEDICAL
    //-----------------------------

    //HEALTH INSURANCE
    $(".monthly-health-insurance-input").val(localStorage.getItem("monthlyHealthInsurance"))
    //date
    $(".monthly-health-insurance-date").val(localStorage.getItem("monthlyHealthInsuranceDate"))

    //COPAYS
    $(".monthly-copays-input").val(localStorage.getItem("monthlyCopays"))
    //date
    $(".monthly-copays-date").val(localStorage.getItem("monthlyCopaysDate"))

    //PRESCRIPTIONS
    $(".monthly-prescriptions-input").val(localStorage.getItem("monthlyPrescriptions"))
    //date
    $(".monthly-prescriptions-date").val(localStorage.getItem("monthlyPrescriptionsDate"))

    //LIFE INSURANCE
    $(".monthly-life-insurance-input").val(localStorage.getItem("monthlyLifeInsurance"))
    //date
    $(".monthly-life-insurance-date").val(localStorage.getItem("monthlyLifeInsuranceDate"))

    //-----------------------------
    //     MONTHLY EDUCATIONAL
    //-----------------------------

    //SCHOOL SUPPLIES
    $(".monthly-school-supplies-input").val(localStorage.getItem("monthlySchoolSupplies"))
    //date
    $(".monthly-school-supplies-date").val(localStorage.getItem("monthlySchoolSuppliesDate"))

    //MEAL PLAN
    $(".monthly-meal-plan-input").val(localStorage.getItem("monthlyMealPlan"))
    //date
    $(".monthly-meal-plan-date").val(localStorage.getItem("monthlyMealPlanDate"))

    //TUITION
    $(".monthly-tuition-input").val(localStorage.getItem("monthlyTuition"))
    //date
    $(".monthly-tuition-date").val(localStorage.getItem("monthlyTuitionDate"))

    //TEXTBOOKS
    $(".monthly-textbooks-input").val(localStorage.getItem("monthlyTextbooks"))
    //date
    $(".monthly-textbooks-date").val(localStorage.getItem("monthlyTextbooksDate"))

    //-----------------------------
    //   MONTHLY FOOD & PERSONAL
    //-----------------------------

    //GROCERIES/HOUSEHOLD PURCHASES
    $(".monthly-groceries-input").val(localStorage.getItem("monthlyGroceries"))
    //date
    $(".monthly-groceries-date").val(localStorage.getItem("monthlyGroceriesDate"))

    //MEALS OUT
    $(".monthly-meals-out-input").val(localStorage.getItem("monthlyMealsOut"))
    //date
    $(".monthly-meals-out-date").val(localStorage.getItem("monthlyMealsOutDate"))

    //CLOTHING
    $(".monthly-clothing-input").val(localStorage.getItem("monthlyClothing"))
    //date
    $(".monthly-clothing-date").val(localStorage.getItem("monthlyClothingDate"))

    //ENTERTAINMENT
    $(".monthly-entertainment-input").val(localStorage.getItem("monthlyEntertainment"))
    //date
    $(".monthly-entertainment-date").val(localStorage.getItem("monthlyEntertainmentDate"))

    //PET SUPPLIES
    $(".monthly-pet-input").val(localStorage.getItem("monthlyPet"))
    //date
    $(".monthly-pet-date").val(localStorage.getItem("monthlyPetDate"))

    //HOBBIES & SPORTS
    $(".monthly-hobbies-input").val(localStorage.getItem("monthlyHobbies"))
    //date
    $(".monthly-hobbies-date").val(localStorage.getItem("monthlyHobbiesDate"))

    //CHARITABLE DONATIONS
    $(".monthly-charitable-input").val(localStorage.getItem("monthlyCharitable"))
    //date
    $(".monthly-charitable-date").val(localStorage.getItem("monthlyCharitableDate"))

    //SUBSCRIPTIONS
    $(".monthly-subscriptions-input").val(localStorage.getItem("monthlySubscriptions"))
    //date
    $(".monthly-subscriptions-date").val(localStorage.getItem("monthlySubscriptionsDate"))
    
})