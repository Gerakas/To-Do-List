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
        $(".list-group").on("click", ".fa-check",function() {

            // Fades the task out in .8 seconds
            $(this).parents("li").fadeOut(500);
            
            // Adds style to text in order to show it has been completed (adds a line over it and changes its colour)
            $(this).parent().siblings().attr("style","text-decoration: line-through; color:#404e7c;")
            // and queues the task back in at the bottom of the list.
            .delay(500).queue(function() {
                // Removes the "check" icon
                $(this).siblings().children(".fa-check").remove();
                
                // Changes tasks background
                $(this).parents("li").attr("style","background-color:#F3F6F7;");

                // Fades the task back into the list
                $(this).parents("li").appendTo($(this).parents(".list-group")).fadeIn(500); 
            });

        });
        
    
        // 2. "Times" icon tom remove task.
        $(".list-group").on("click", ".fa-times",function() {

            // Removes task from list with a 0.5s fade out.
            $(this).parents("li").fadeOut(500, function() { 
                $(this).remove(); 
            });

        });


        // 3. Add new task 
        $(".addListInput").keypress(function() {
            // This bit of code was kindly provided by https://howtodoinjava.com/jquery/jquery-detect-if-enter-key-is-pressed/
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13' && $(this).val() != ""){

                $('<li class="list-group-item"><div class="row"><div class="col-8">' + $(this).val() + '</div><div class=" col-4 list-icons-container"><i class="fas fa-times list-icon"></i><i class="fas fa-check list-icon"></i></div></div></li>').prependTo($(this).parents("ul"));
                $(".addListInput").val("");
            };
        });
    
    // Nav Menuu Functionality 

    // New List
    $("#side-bar-menu").on("click", ".nav-link-list", function () {
        $('<div class="col-xl-6 col-sm-12 d-flex justify-content-center list-block"><div class="card list-box"><div class="card-body dropleft"><h5 class="list-title">Card title</h5><button class="drop-down" type="button" id="dropdownEditButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i id="edit-icon" class="fas fa-pen"></i></button><div class="dropdown-menu dropdown-menu-right" id="dropdownEditMenu" aria-labelledby="dropdownEditButton"><button class="dropdown-item" type="button"><i class="fas fa-edit dropdownEditMenuIcons"></i>Rename</button><button class="dropdown-item" type="button"><i class="fas fa-trash dropdownEditMenuIcons"></i> Delete</button></div></div><ul class="list-group list-group-flush"><!-- Add new task input --><li class="list-group-item"></li><div class="addList"><input type="text" class="addListInput" placeholder="Add task..."></div></li></ul></div></div>')
        .appendTo("#listContainerRow");
    });
 
    
});