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
        $("#listContainerRow").on("click", ".fa-check",function() {

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
        $("#listContainerRow").on("click", ".fa-times",function() {

            // Removes task from list with a 0.5s fade out.
            $(this).parents("li").fadeOut(500, function() { 
                $(this).remove(); 
            });

        });


        // 3. Add new task 
        $("#listContainerRow").on("keypress", ".addListInput", (function() {
            // This bit of code was kindly provided by https://howtodoinjava.com/jquery/jquery-detect-if-enter-key-is-pressed/
            var keycode = (event.keyCode ? event.keyCode : event.which);
            if(keycode == '13' && $(this).val() != ""){
            //
                $('<li class="list-group-item"><div class="row"><div class="col-8">' + $(this).val() + '</div><div class=" col-4 list-icons-container"><i class="fas fa-times list-icon"></i><i class="fas fa-check list-icon"></i></div></div></li>').prependTo($(this).parents("ul"));
                $(".addListInput").val("");
            };
        }));

        // 4. "Trash" icon to delete list 
        $("#listContainerRow").on("click", ".del", function() {
             $(this).parents(".list-block").fadeOut(500, function() { 
                $(this).attr("display", "none"); 
            });
        });

        // 5. "Edit" icon to rename list

        // 5.a Modal Save Button
        function renameList() {

            $('#editListNameModal').on('show.bs.modal', function (e) {
                delete invoker;
                invoker = $(e.relatedTarget);
                console.log(invoker);

                $("#editListNameSaveButton").click(function() {

                    if ($("#editListNameInput").val() != "") {
                        
                        // Retrieves the input text and assigns it to a variable
                        let newTitleName = $("#editListNameInput").val();
                        
                        $(invoker).parent().siblings("h5").text(newTitleName);
                        // Hides the modal
                        $("#editListNameModal").modal('hide');
                    }

                });
            });
            
        };

        $("#listContainerRow").on("click", ".fa-pen", renameList);


        // 5.b Modal Cancel Button 
        $("#editListNameCancelButton").click(function() {
            $("#editListNameInput").val("");
        });

        // 6. Star functionality 
        $("#listContainerRow").on("click", ".fa-star",function() {

            $(this).toggleClass("far");
            $(this).toggleClass("fas not-starred");

        });
    
    
    // Nav Menuu Functionality 

    // 1. New List
    
    function createNewList() {

        // Appends the following code to the #listContainerRow div (main viewport)
        $('<div id="list0" class="col-12 justify-content-center list-block"><div class="card list-box"><div class="card-body dropleft"><h5 class="list-title">To Do List<i class="far fa-star not-starred"></i></h5><button class="drop-down" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-pen"></i></button><div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownEditButton"><button class="rename dropdown-item" type="button" data-toggle="modal" data-target="#editListNameModal"><i class="fas fa-edit dropdownEditMenuIcons"></i>Rename</button><button class="del dropdown-item" type="button"><i class="fas fa-trash dropdownEditMenuIcons"></i> Delete</button></div></div><ul class="list-group list-group-flush"><!-- Add new task input --><li class="list-group-item"><div class="addList"><input type="text" class="addListInput" placeholder="Add task..."></div></li></ul></div></div>')
        .appendTo("#listContainerRow");
        
        // Retrieves the ID of the new list (which is #list0)
        let currentlistId = $("#listContainerRow").children().last().attr("id");
        
        // Vey simply calculates the number of the current list 
        let currentListIdNumber = currentlistId.charAt(currentlistId.length - 1);

        // Retrieves the number of lists that already exist in the DOM
        let numberOfLists = $("#listContainerRow").children();
        
        // Calculates the number of the newly created list 
        let newListIdNumber = currentListIdNumber + numberOfLists.length - 1;
        let newListID = "list" + newListIdNumber;
        let test = "dsdfsdf";

        $("#listContainerRow").children().last().attr("id", newListID);
        
        // Changes the display property from "none" to "inline-block"
        $("#listContainerRow").children().last().css("display", "inline-block");
        
    };

    // Once the "New List" (.nav-link-list) has been clicked, the above function gets executed.
    $(".nav-link-list").on("click", createNewList);

    
    // 2. Starred 
    $(".nav-link-container").on("click", ".nav-link-starred", function() {

        // Checks all i elements for class .not-starred
        if ( $("i").hasClass("not-starred") ) {
            
            // Assigning the the parent div of each list to a variable
            let listBlock = $(".not-starred").parents(".list-block");

            // Toggles the i elements that have the class "not-starred"
            $(listBlock).toggle();
            
            // Checks to see if there are any hidden lists. And if there, unbinds the createNewList function from the "New List" link.
            if ($(listBlock).is(":hidden")) {
                $(".nav-link-list").off("click", createNewList);

            // Otherwise, if there aren't any hidden lists, then it rebinds the fucntion to the link.
            } else if ($(listBlock).is(":visible")) {
                $(".nav-link-list").on("click", createNewList);
            
            } else {

            };
        };
    });
    



});