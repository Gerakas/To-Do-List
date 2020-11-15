
$(document).ready(function() {
    
    // Sidebar toggle
    $("#side-bar-toggle").click(function(){
        $("#side-bar").toggle(600, "linear")
        $("#main-viewport").toggleClass("col-xl-10 col-sm-9 col-xs-8");
        $("#sidebarToggle").toggleClass("fa-chevron-circle-left");
        $("#sidebarToggle").toggleClass("fa-chevron-circle-right");
    });

    // List functionality
    
    // Task Icons
    // 1. "Check" icon for completed task.
    $(".fa-check").click(function () {

        // Fades the task out in .8 seconds
        $(this).parents("li").fadeOut(500);
        
        // Adds style to text in order to show it has been completed (adds a line over it and changes its colour)
        $(this).parent().siblings().attr("style","text-decoration: line-through; color:#404e7c;")
        // and queues the task back in at the bottom of the list.
        .delay(500).queue(function() {
            $(this).siblings().children(".fa-check").remove();
            $(this).parents("li").appendTo($(this).parents("ul")).fadeIn(500); 
        });

    });

    // 2. "Times" icon tom remove task.
    $(".fa-times").click(function () {

        // Removes task from list with a 0.5s fade out.
        $(this).parents("li").fadeOut(500, function() { 
            $(this).remove(); 
        });

    });
 
    
});