$(document).ready(function() {
    
    // Hambuger Icon toggle
    $("#side-bar-toggle").click(function(){
        $("#side-bar").toggle();
        $("#main-viewport").toggleClass("col-xl-10 col-sm-9 col-xs-8");
    });

    
});