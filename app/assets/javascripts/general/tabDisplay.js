//= require jquery
$( document ).ready(function() {
    //--------------------------------------
    //            TAB 1 CONTENT
    //--------------------------------------
    //Changes collapse + and - buttons on Monthly Budget window
    $(".collapse-heading").click(function(){
        // $(this).find('i').toggleClass('fa-minus fa-plus')
        if ($(this).children().hasClass("fa-minus") == true){
            $(this).children().removeClass("fa-minus")
            $(this).children().addClass("fa-plus")
        } else if ($(this).children().hasClass("fa-minus") == false){
            $(this).children().removeClass("fa-plus")
            $(this).children().addClass("fa-minus")
        }
    })


    $(".collapse-span").click(function(){
        if ($(this).children().hasClass("fa-minus") == true){
            $(this).children().removeClass("fa-minus")
            $(this).children().addClass("fa-plus")
        } else if ($(this).children().hasClass("fa-minus") == false){
            $(this).children().removeClass("fa-plus")
            $(this).children().addClass("fa-minus")
        }
    })

// $(document).on("click", ".monthly-submit-button", function(){
//     console.log("Ow! You clicked me!")
// })

    //--------------------------------------
    //            TAB 2 CONTENT
    //--------------------------------------
    $('#monthlyChartSelect').on('change', function (e) {
        let tabOptionSelected = $("option:selected", this);
        tabOptionSelected.tab('show')
    });

})
