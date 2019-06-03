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
                $("#netIncomeCell").text("$" + monthlyNet)
            } else if ($("select.monthly-freq").children("option:selected").hasClass("bi-weekly-freq") == true){
                monthlyNet = 2 * parseFloat($("#monthlyNet").val(), 10)
    
                //NO CHARTS
                $("#netIncomeCell").text("$" + monthlyNet)
            } else {
                monthlyNet = 1 * parseFloat($("#monthlyNet").val(), 10)
    
                //NO CHARTS
                $("#netIncomeCell").text("$" + monthlyNet)
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

            //MONTHLY EXPENSES SUMS ARRAY
            let monthlyExpensesSumsArray = [monthlyHomeExpensesSum, monthlyDebtSum, monthlyTransportationSum, monthlyMedicalSum, monthlyEducationalSum, monthlyFoodAndPersonalSum]

            let monthlyExpensesSumsSum = 0

            for(let i = 0, len = monthlyExpensesSumsArray.length; i < len; i++) {
                monthlyExpensesSumsSum += monthlyExpensesSumsArray[i]
            }

            //ALL MONTHLY EXPENSES (INCLUDING SAVINGS) SUMS ARRAY
            let monthlyAllExpensesSumsArray = [monthlySavingsSum, monthlyHomeExpensesSum, monthlyDebtSum, monthlyTransportationSum, monthlyMedicalSum, monthlyEducationalSum, monthlyFoodAndPersonalSum]

            let monthlyAllExpensesSumsSum = 0

            for(let i = 0, len = monthlyAllExpensesSumsArray.length; i < len; i++) {
                monthlyAllExpensesSumsSum += monthlyAllExpensesSumsArray[i]
            }

            let monthlyTotal = monthlyNet - (monthlyExpensesSum + monthlySavingsSum)
    

            //======================================
            //--------------------------------------
            //              PIE CHARTS
            //--------------------------------------
            //======================================
            
            let monthlyColorArray = ["#9EF8FF", "#9AE67B", "#A787F5", "#F28674", "rgb(4, 230, 255)", "#FCDB79", "#F5ACE8", "#C4FFA3", "#FFBC52", "#FBFFA6", "#C6D1FF", "#FFDFDE"]
            let monthlyPositiveColorArray = [] 
            let monthlyNegativeColorArray = []
            //-------------------------
            //     MONTHLY INCOME
            //-------------------------
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
            })

            //-------------------------
            //     MONTHLY EXPENSES
            //-------------------------

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
            })

            //======================================
            //--------------------------------------
            //           MONTHLY EXPENSES
            //--------------------------------------
            //======================================
    
            //-------------------------------
            //        MONTHLY SAVINGS
            //-------------------------------

            $(".monthly-savings-pie-chart-container").html('<canvas id="monthlySavingsPieChart" height="120"></canvas>')

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

            })

            //-------------------------------
            //     MONTHLY HOME EXPENSES
            //-------------------------------

            $(".monthly-home-expenses-pie-chart-container").html('<canvas id="monthlyHomeExpensesPieChart"></canvas>')

            let monthlyHomeExpensesPieChart = document.getElementById("monthlyHomeExpensesPieChart").getContext("2d")

            let getMonthlyHomeExpensesPieChart = new Chart(monthlyHomeExpensesPieChart, {
                type: "doughnut",
                data: {
                    labels: ["Rent", "Mortgage", "Repair/Maintinence", "Cable/TV", "Home Insurance", "HOA Fees", "Internet", "Cellphone", "Water", "Gas", "Electricity"],
                    datasets:[{
                        label: "Home Expenses",
                        data: monthlyHomeExpensesArray,
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
            
            //-------------------------------
            //     MONTHLY DEBT & LOANS
            //-------------------------------
            
            $(".monthly-debt-pie-chart-container").html('<canvas id="monthlyDebtPieChart"></canvas>')

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

            //-------------------------------
            //     MONTHLY TRANSPORTATION
            //-------------------------------

            $(".monthly-transportation-pie-chart-container").html('<canvas id="monthlyTransportationPieChart"></canvas>')

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

            //-------------------------------
            //        MONTHLY MEDICAL
            //-------------------------------

            $(".monthly-medical-pie-chart-container").html('<canvas id="monthlyMedicalPieChart"></canvas>')

            let monthlyMedicalPieChart = document.getElementById("monthlyMedicalPieChart").getContext("2d")


            let getMonthlyMedicalPieChart = new Chart(monthlyMedicalPieChart, {
                type: "doughnut",
                data: {
                    labels: ["Health Insurance", "Copays", "Prescriptions", "Life Insurance"],
                    datasets:[{
                        label: "Medical Expenses",
                        data: monthlyHomeExpensesArray,
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
            
            //-----------------------------------
            //        MONTHLY EDUCATIONAL
            //-----------------------------------

            $(".monthly-educational-pie-chart-container").html('<canvas id="monthlyEducationalPieChart"></canvas>')

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

            //--------------------------------------
            //        MONTHLY FOOD & PERSONAL
            //--------------------------------------
            
            $(".monthly-food-and-personal-pie-chart-container").html('<canvas id="monthlyFoodAndPersonalPieChart"></canvas>')

            let monthlyFoodAndPersonalPieChart = document.getElementById("monthlyFoodAndPersonalPieChart").getContext("2d")

            let getMonthlyFoodAndPersonalPieChart = new Chart(monthlyFoodAndPersonalPieChart, {
                type: "doughnut",
                data: {
                    labels: ["Groceries/Household Purchases", "Meals Out", "Clothing", "Entertainment", "Pet Supplies", "Hobbies & Sports", "Charitable Donations", "Subscriptions"],
                    datasets:[{
                        label: "Food & Personal Expenses",
                        data: monthlyFoodAndPersonalArray,
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


        }) // END OF CLICK EVENT
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