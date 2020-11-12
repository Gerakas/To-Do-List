$(document).ready(function() {
    
    // Hambuger Icon toggle
    $("#hamburger").click(function(){
        $("#side-bar").toggle();
        $("#main-viewport").toggleClass("col-xl-10 col-sm-9 col-xs-8");
    });

    
});