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

    //--------------------------------
    //  INCOME & ONE-TIME CONTAINERS
    //--------------------------------

    //MONTHLY NEW INCOME CONTAINER
    if (localStorage.getItem("monthlyNewIncomeContainer") !== null){
        $(".monthly-new-income-container").html(localStorage.getItem("monthlyNewIncomeContainer")) 
    }

    //ONE-TIME EXPENSE CONTAINER
    if (localStorage.getItem("monthlyOneTimeExpenseContainer") !== null){
        $(".monthly-one-time-expense-container").html(localStorage.getItem("monthlyOneTimeExpenseContainer")) 
    }

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

    //=====================================================
    //--------------------------------------------------
    //  UNIMPLEMENTED - MONTHLY FREQUENCY OF PAY DATES
    //--------------------------------------------------
    //=====================================================

    // $(".monthly-pay-date1").show()
    // $(".monthly-pay-date2").show()
    // $(".monthly-pay-date3").hide()
    // $(".monthly-pay-date4").hide()

    // $("select.monthly-freq").change(function(){
    //     if ($("select.monthly-freq").children("option:selected").hasClass("weekly-freq") == true){

    //         $(".monthly-pay-date1").show()
    //         $(".monthly-pay-date2").show()
    //         $(".monthly-pay-date3").show()
    //         $(".monthly-pay-date4").show()

    //     } else if ($("select.monthly-freq").children("option:selected").hasClass("bi-weekly-freq") == true){

    //         $(".monthly-pay-date1").show()
    //         $(".monthly-pay-date2").show()
    //         $(".monthly-pay-date3").hide()
    //         $(".monthly-pay-date4").hide()
            
    //     } else {

    //         $(".monthly-pay-date1").show()
    //         $(".monthly-pay-date2").hide()
    //         $(".monthly-pay-date3").hide()
    //         $(".monthly-pay-date4").hide()
            
    //     }
    // })

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
            let monthlyNewIncomeContainer = $(".monthly-new-income-container").html()
            //LOCALSTORAGE
            localStorage.setItem("monthlyNewIncomeContainer", monthlyNewIncomeContainer)

            //---------------------------------------
            //   ONE-TIME EXPENSE CONTAINER SETTER 
            //---------------------------------------
            let monthlyOneTimeExpenseContainer = $(".monthly-one-time-expense-container").html()
            //LOCALSTORAGE
            localStorage.setItem("monthlyOneTimeExpenseContainer", monthlyOneTimeExpenseContainer)


            //========================================
            //  3a.) FREQUENCY OF PAY DROPDOWN LOGIC
            //========================================
            if ($("select.monthly-freq").children("option:selected").hasClass("weekly-freq") == true){
                monthlyNet = 4 * parseFloat($(".monthly-net-income-input").val(), 10)

                //NO CHARTS
                $(".monthly-net-income").text("$" + monthlyNet)
            } else if ($("select.monthly-freq").children("option:selected").hasClass("bi-weekly-freq") == true){
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

        //-------------------------
        //     MONTHLY SAVINGS
        //-------------------------
    
            // SAVINGS (GENERAL)
            let monthlySavingsGeneral = parseFloat($(".monthly-savings-general-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlySavingsGeneral", monthlySavingsGeneral)  
    
            // EMERGENCY FUND
            let monthlyEmergency = parseFloat($(".monthly-emergency-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyEmergency", monthlyEmergency)  
    
            //401K
            let monthly401k = parseFloat($(".monthly-401k-input").val(), 10)
            //localStorage
            localStorage.setItem("monthly401k", monthly401k)  
    
            // INVESTMENTS
            let monthlyInvestments = parseFloat($(".monthly-investments-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyInvestments", monthlyInvestments)  
    
            // RETIREMENT
            let monthlyRetirement = parseFloat($(".monthly-retirement-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyRetirement", monthlyRetirement)  
            
        //---------------------------------------
        //            MONTHLY EXPENSES
        //---------------------------------------
    
            //----------------------
            // MONTHLY HOME DISPLAY
            //----------------------
            
            //RENT
            let monthlyRent = parseFloat($(".monthly-rent-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyRent", monthlyRent)  
    
            //MORTGAGE
            let monthlyMortgage = parseFloat($(".monthly-mortgage-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyMortgage", monthlyMortgage) 
    
            //REPAIR/MAINTENANCE
            let monthlyRepair = parseFloat($(".monthly-repair-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyRepair", monthlyRepair) 
    
            //CABLE/TV
            let monthlyCable = parseFloat($(".monthly-cable-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCable", monthlyCable) 
    
            //HOME INSURANCE
            let monthlyHomeInsurance = parseFloat($(".monthly-home-insurance-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyHomeInsurance", monthlyHomeInsurance) 
    
            //HOA FEES
            let monthlyHOA = parseFloat($(".monthly-HOA-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyHOA", monthlyHOA) 
    
            //INTERNET
            let monthlyInternet = parseFloat($(".monthly-internet-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyInternet", monthlyInternet) 
    
            //CELLPHONE
            let monthlyCellphone = parseFloat($(".monthly-cellphone-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCellphone", monthlyCellphone) 
    
            //WATER
            let monthlyWater = parseFloat($(".monthly-water-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyWater", monthlyWater) 
    
            //GAS (HOME)
            let monthlyGas = parseFloat($(".monthly-gas-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyGas", monthlyGas) 
    
            //ELECTRICITY
            let monthlyElectricity = parseFloat($(".monthly-electricity-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyElectricity", monthlyElectricity) 
    
            //----------------------
            //     DEBT DISPLAY
            //----------------------
    
            //CREDIT CARDS
            let monthlyCreditCards = parseFloat($(".monthly-credit-cards-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCreditCards", monthlyCreditCards) 
    
            //STUDENT LOANS
            let monthlyStudentLoans = parseFloat($(".monthly-student-loans-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyStudentLoans", monthlyStudentLoans) 
    
            //MEDICAL DEBT
            let monthlyMedicalDebt = parseFloat($(".monthly-medical-debt-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyMedicalDebt", monthlyMedicalDebt) 
    
            //TAX PAYMENTS
            let monthlyTaxPayments = parseFloat($(".monthly-tax-payments-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyTaxPayments", monthlyTaxPayments) 
    
            //STORE CARDS
            let monthlyStoreCards = parseFloat($(".monthly-store-cards-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyStoreCards", monthlyStoreCards) 
    
            //PERSONAL DEBT
            let monthlyPersonalDebt = parseFloat($(".monthly-personal-debt-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyPersonalDebt", monthlyPersonalDebt) 
    
            //--------------------------------
            //     TRANSPORTATION DISPLAY
            //--------------------------------
    
            //CAR PAYMENT
            let monthlyCarPayments = parseFloat($(".monthly-car-payment-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCarPayments", monthlyCarPayments) 
    
            //CAR INSURANCE
            let monthlyCarInsurance = parseFloat($(".monthly-car-insurance-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCarInsurance", monthlyCarInsurance) 
    
            //(CAR) GAS
            let monthlyCarGas = parseFloat($(".monthly-car-gas-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCarGas", monthlyCarGas) 
    
            //CAR REPAIRS
            let monthlyCarRepairs = parseFloat($(".monthly-car-repairs-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCarRepairs", monthlyCarRepairs) 
    
            //PARKING & TOLLS
            let monthlyParking = parseFloat($(".monthly-parking-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyParking", monthlyParking) 
    
            //PUBLIC TRANSIT
            let monthlyPublicTransit = parseFloat($(".monthly-public-transit-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyPublicTransit", monthlyPublicTransit) 
    
            //-------------------------
            //     MEDICAL DISPLAY
            //-------------------------
    
            //HEALTH INSURANCE
            let monthlyHealthInsurance = parseFloat($(".monthly-health-insurance-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyHealthInsurance", monthlyHealthInsurance) 
    
            //COPAYS
            let monthlyCopays = parseFloat($(".monthly-copays-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCopays", monthlyCopays) 
    
            //PRESCRIPTIONS
            let monthlyPrescriptions = parseFloat($(".monthly-prescriptions-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyPrescriptions", monthlyPrescriptions) 
    
            //LIFE INSURANCE
            let monthlyLifeInsurance = parseFloat($(".monthly-life-insurance-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyLifeInsurance", monthlyLifeInsurance) 
    
    
            //------------------------------
            //     EDUCATIONAL DISPLAY
            //------------------------------
    
            //SCHOOL SUPPLIES
            let monthlySchoolSupplies = parseFloat($(".monthly-school-supplies-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlySchoolSupplies", monthlySchoolSupplies) 
    
            //MEAL PLAN
            let monthlyMealPlan = parseFloat($(".monthly-meal-plan-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyMealPlan", monthlyMealPlan) 
    
            //TUITION
            let monthlyTuition = parseFloat($(".monthly-tuition-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyTuition", monthlyTuition) 
    
            //TEXTBOOKS
            let monthlyTextbooks = parseFloat($(".monthly-textbooks-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyTextbooks", monthlyTextbooks) 
    
            //---------------------------------
            //     FOOD & PERSONAL DISPLAY
            //---------------------------------
    
            //GROCERIES/HOUSEHOLD PURCHASES
            let monthlyGroceries = parseFloat($(".monthly-groceries-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyGroceries", monthlyGroceries) 
    
            //MEALS OUT
            let monthlyMealsOut = parseFloat($(".monthly-meals-out-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyMealsOut", monthlyMealsOut) 
    
            //CLOTHING
            let monthlyClothing = parseFloat($(".monthly-clothing-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyClothing", monthlyClothing) 
    
            //ENTERTAINMENT
            let monthlyEntertainment = parseFloat($(".monthly-entertainment-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyEntertainment", monthlyEntertainment) 
    
            //PET SUPPLIES
            let monthlyPet = parseFloat($(".monthly-pet-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyPet", monthlyPet) 
    
            //HOBBIES & SPORTS
            let monthlyHobbies = parseFloat($(".monthly-hobbies-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyHobbies", monthlyHobbies) 
    
            //CHARITABLE DONATIONS
            let monthlyCharitable = parseFloat($(".monthly-charitable-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlyCharitable", monthlyCharitable) 
    
            //SUBSCRIPTIONS
            let monthlySubscriptions = parseFloat($(".monthly-subscriptions-input").val(), 10)
            //localStorage
            localStorage.setItem("monthlySubscriptions", monthlySubscriptions) 
    
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

            let monthlyExpensesExclusiveArray = [(monthlyRent || 0) + (monthlyMortgage || 0), (monthlyRepair || 0), (monthlyCable || 0), (monthlyHomeInsurance || 0), (monthlyHOA || 0), (monthlyInternet || 0), (monthlyCellphone || 0), (monthlyWater || 0), (monthlyGas || 0), (monthlyElectricity || 0), (monthlyCreditCards || 0), (monthlyStudentLoans || 0), (monthlyMedicalDebt || 0), (monthlyTaxPayments || 0), (monthlyStoreCards || 0), (monthlyPersonalDebt || 0), (monthlyCarPayments || 0), (monthlyCarInsurance || 0), (monthlyCarGas || 0), (monthlyCarRepairs || 0), (monthlyParking || 0), (monthlyPublicTransit || 0), (monthlyHealthInsurance || 0), (monthlyCopays || 0), (monthlyPrescriptions || 0), (monthlyLifeInsurance || 0), (monthlySchoolSupplies || 0), (monthlyMealPlan || 0), (monthlyTuition || 0), (monthlyTextbooks || 0), (monthlyGroceries || 0), (monthlyMealsOut || 0), (monthlyClothing || 0), (monthlyEntertainment || 0), (monthlyPet || 0), (monthlyHobbies || 0), (monthlyCharitable || 0), (monthlySubscriptions || 0)]

            let monthlyExpensesExclusiveSum = 0

            for(let i = 0, len = monthlyExpensesExclusiveArray.length; i < len; i++) {
                monthlyExpensesExclusiveSum += monthlyExpensesExclusiveArray[i]
            }

            //Monthly Expenses Inclusive

            let monthlyExpensesInclusiveArray = [(monthlySavingsGeneral || 0), (monthlyEmergency || 0), (monthly401k || 0), (monthlyInvestments || 0), (monthlyRetirement || 0) + (monthlyRent || 0) + (monthlyMortgage || 0), (monthlyRepair || 0), (monthlyCable || 0), (monthlyHomeInsurance || 0), (monthlyHOA || 0), (monthlyInternet || 0), (monthlyCellphone || 0), (monthlyWater || 0), (monthlyGas || 0), (monthlyElectricity || 0), (monthlyCreditCards || 0), (monthlyStudentLoans || 0), (monthlyMedicalDebt || 0), (monthlyTaxPayments || 0), (monthlyStoreCards || 0), (monthlyPersonalDebt || 0), (monthlyCarPayments || 0), (monthlyCarInsurance || 0), (monthlyCarGas || 0), (monthlyCarRepairs || 0), (monthlyParking || 0), (monthlyPublicTransit || 0), (monthlyHealthInsurance || 0), (monthlyCopays || 0), (monthlyPrescriptions || 0), (monthlyLifeInsurance || 0), (monthlySchoolSupplies || 0), (monthlyMealPlan || 0), (monthlyTuition || 0), (monthlyTextbooks || 0), (monthlyGroceries || 0), (monthlyMealsOut || 0), (monthlyClothing || 0), (monthlyEntertainment || 0), (monthlyPet || 0), (monthlyHobbies || 0), (monthlyCharitable || 0), (monthlySubscriptions || 0)]

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
    $(".monthly-car-payment").text("$" + (monthlyCarPayments || 0))
        
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

        let monthlyPersonalDeepSummary = document.getElementById("monthlyPersonalDeepSummary").getContext("2d")

        let getMonthlyPersonalDeepSummary = new Chart(monthlyPersonalDeepSummary, {
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

    //EMERGENCY FUND
    $(".monthly-emergency-input").val(localStorage.getItem("monthlyEmergency"))

    //401k
    $(".monthly-401k-input").val(localStorage.getItem("monthly401k"))

    //INVESTMENTS
    $(".monthly-investments-input").val(localStorage.getItem("monthlyInvestments"))

    //RETIREMENT
    $(".monthly-retirement-input").val(localStorage.getItem("monthlyRetirement"))

    //-----------------------------
    //    MONTHLY HOME EXPENSES
    //-----------------------------

    //RENT
    $(".monthly-rent-input").val(localStorage.getItem("monthlyRent"))

    //MORTGAGE
    $(".monthly-mortgage-input").val(localStorage.getItem("monthlyMortage"))

    //REPAIR/MAINTENANCE
    $(".monthly-repair-input").val(localStorage.getItem("monthlyRepair"))

    //CABLE/TV
    $(".monthly-cable-input").val(localStorage.getItem("monthlyCable"))

    //HOME INSURANCE
    $(".monthly-home-insurance-input").val(localStorage.getItem("monthlyHomeInsurance"))

    //HOA FEES
    $(".monthly-HOA-input").val(localStorage.getItem("monthlyHOA"))

    //INTERNET
    $(".monthly-internet-input").val(localStorage.getItem("monthlyInternet"))

    //CELLPHONE
    $(".monthly-cellphone-input").val(localStorage.getItem("monthlyCellphone"))

    //WATER
    $(".monthly-water-input").val(localStorage.getItem("monthlyWater"))

    //GAS
    $(".monthly-gas-input").val(localStorage.getItem("monthlyGas"))

    //ELECTRICITY
    $(".monthly-electricity-input").val(localStorage.getItem("monthlyElectricity"))
    
    //-----------------------------
    //    MONTHLY DEBT & LOANS
    //-----------------------------

    //CREDIT CARDS
    $(".monthly-credit-cards-input").val(localStorage.getItem("monthlyCreditCards"))

    //STUDENT LOANS
    $(".monthly-student-loans-input").val(localStorage.getItem("monthlyStudentLoans"))

    //MEDICAL DEBT
    $(".monthly-medical-debt-input").val(localStorage.getItem("monthlyMedicalDebt"))

    //TAX PAYMENTS
    $(".monthly-tax-payments-input").val(localStorage.getItem("monthlyTaxPayments"))

    //STORE CARDS
    $(".monthly-store-cards-input").val(localStorage.getItem("monthlyStoreCards"))

    //PERSONAL DEBT
    $(".monthly-personal-debt-input").val(localStorage.getItem("monthlyPersonalDebt"))

    //-----------------------------
    //    MONTHLY TRANSPORTATION
    //-----------------------------

    //CAR PAYMENT
    $(".monthly-car-payment-input").val(localStorage.getItem("monthlyCarPayment"))

    //CAR INSURANCE
    $(".monthly-car-insurance-input").val(localStorage.getItem("monthlyCarInsurance"))

    //GAS (CAR)
    $(".monthly-car-gas-input").val(localStorage.getItem("monthlyCarGas"))

    //CAR REPAIRS
    $(".monthly-car-repairs-input").val(localStorage.getItem("monthlyCarRepairs"))

    //PARKING & TOLLS
    $(".monthly-parking-input").val(localStorage.getItem("monthlyParking"))

    //PUBLIC TRANSIT
    $(".monthly-public-transit-input").val(localStorage.getItem("monthlyPublicTransit"))

    //-----------------------------
    //       MONTHLY MEDICAL
    //-----------------------------

    //HEALTH INSURANCE
    $(".monthly-health-insurance-input").val(localStorage.getItem("monthlyHealthInsurance"))

    //COPAYS
    $(".monthly-copays-input").val(localStorage.getItem("monthlyCopays"))

    //PRESCRIPTIONS
    $(".monthly-prescriptions-input").val(localStorage.getItem("monthlyPrescriptions"))

    //LIFE INSURANCE
    $(".monthly-life-insurance-input").val(localStorage.getItem("monthlyLifeInsurance"))

    //-----------------------------
    //     MONTHLY EDUCATIONAL
    //-----------------------------

    //SCHOOL SUPPLIES
    $(".monthly-school-supplies-input").val(localStorage.getItem("monthlySchoolSupplies"))

    //MEAL PLAN
    $(".monthly-meal-plan-input").val(localStorage.getItem("monthlyMealPlan"))

    //TUITION
    $(".monthly-tuition-input").val(localStorage.getItem("monthlyTuition"))

    //TEXTBOOKS
    $(".monthly-textbooks-input").val(localStorage.getItem("monthlyTextbooks"))

    //-----------------------------
    //   MONTHLY FOOD & PERSONAL
    //-----------------------------

    //GROCERIES/HOUSEHOLD PURCHASES
    $(".monthly-groceries-input").val(localStorage.getItem("monthlyGroceries"))

    //MEALS OUT
    $(".monthly-meals-out-input").val(localStorage.getItem("monthlyMealsOut"))

    //CLOTHING
    $(".monthly-clothing-input").val(localStorage.getItem("monthlyClothing"))

    //ENTERTAINMENT
    $(".monthly-entertainment-input").val(localStorage.getItem("monthlyEntertainment"))

    //PET SUPPLIES
    $(".monthly-pet-input").val(localStorage.getItem("monthlyPet"))

    //HOBBIES & SPORTS
    $(".monthly-hobbies-input").val(localStorage.getItem("monthlyHobbies"))

    //CHARITABLE DONATIONS
    $(".monthly-charitable-input").val(localStorage.getItem("monthlyCharitable"))

    //SUBSCRIPTIONS
    $(".monthly-subscriptions-input").val(localStorage.getItem("monthlySubscriptions"))
    
})