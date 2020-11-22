$(document).ready(function() {
    
    // Sidebar toggle
    $("#side-bar-toggle").click(function(){
        $("#side-bar").toggle(600, "linear")
        $("#main-viewport").toggleClass("col-xl-10 col-sm-9 col-xs-8");
        $("#sidebarToggle").toggleClass("fa-chevron-circle-left");
        $("#sidebarToggle").toggleClass("fa-chevron-circle-right");
    });

    function newLocalStorage() {

        let currentLists = $("#listContainerRow").html();
        localStorage.setItem("CurrentLists", currentLists);
    }


    // Nav Menuu Functionality 

    // 1. New List
    
    function createNewList() {

        // Appends the following code to the #listContainerRow div (main viewport)
        $('<div id="list0" class="col-12 justify-content-center list-block"><div class="card list-box"><div class="card-body dropleft"><h5 class="list-title">To Do List</h5><i class="far fa-star listStar not-starred"></i><button class="drop-down" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-pen"></i></button><div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownEditButton"><button class="rename dropdown-item" type="button" data-toggle="modal" data-target="#editListNameModal"><i class="fas fa-edit dropdownEditMenuIcons"></i>Rename</button><button class="del dropdown-item" type="button"><i class="fas fa-trash dropdownEditMenuIcons"></i> Delete</button></div></div><ul class="list-group list-group-flush"><!-- Add new task input --><li class="list-group-item"><div class="addList"><input type="text" class="addListInput" placeholder="Add task..."></div></li></ul></div></div>')
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

        $("#listContainerRow").children().last().attr("id", newListID);
        
        // Changes the display property from "none" to "inline-block"
        $("#listContainerRow").children().last().css("display", "inline-block");

        //Local Storage

        newLocalStorage();
        
    };

    $(".nav-link-list").on("click", createNewList);

    
    // 2. Starred 
    $(".nav-link-container").on("click", ".nav-link-starred", function () {
        
        // If there aren't any i elements with the class starred then return false
        if ($(".listStar").hasClass("starred").length < 1) {
            
            false;

        // Checks if at least one i element has class starred
        } else if ($(".listStar").hasClass("starred")) {

            showStarredLists();
        }
    });

    function showStarredLists () {

        // Toggles between the two spans in the "Starred" nav menu action.
        $(".nav-link-starred").children("span").toggle();
        
        // Assigning the the parent div of each list to a variable
        let listBlock = $(".not-starred").parents(".list-block");

        // Toggles the i elements that have the class "not-starred"
        $(listBlock).toggle();
        
        // Checks to see if there are any hidden lists. And if there are, unbinds the createNewList function from the "New List" link.
        if ($(listBlock).is(":hidden")) {
            $(".nav-link-list").off("click", createNewList);

        // Otherwise, if there aren't any hidden lists, then it rebinds the fucntion to the link.
        } else if ($(listBlock).is(":visible")) {
            $(".nav-link-list").on("click", createNewList);
        
        } else {
        
        }

    };



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

                // Local Storage
                newLocalStorage();
            });

        });
        
    
        // 2. "Times" icon tom remove task.
        $("#listContainerRow").on("click", ".fa-times",function() {

            // Removes task from list with a 0.5s fade out.
            $(this).parents("li").fadeOut(500, function() { 
                $(this).remove(); 
                
                // Local Storage
                newLocalStorage();
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

            // Local Storage
            newLocalStorage();
        }));

        // 4. "Trash" icon to delete list 
        $("#listContainerRow").on("click", ".del", function() {
             $(this).parents(".list-block").fadeOut(500, function() { 
                $(this).remove();
                
                // Local Storage
                newLocalStorage();
            });
        });

        // 5. "Edit" icon

        // 5.a Modal Save Button
        function renameList() {

            $('#editListNameModal').on('show.bs.modal', function (e) {
                delete invoker;
                invoker = $(e.relatedTarget);

                $("#editListNameSaveButton").click(function() {

                    if ($("#editListNameInput").val() != "") {
                        
                        // Retrieves the input text and assigns it to a variable
                        let newTitleName = $("#editListNameInput").val();
                        
                        $(invoker).parent().siblings("h5").text(newTitleName);
                                                
                    }

                    // Local Storage
                    newLocalStorage();

                    // Hides the modal
                    $("#editListNameModal").modal('hide');
                    
                    // Resets the input to blank
                    $("#editListNameInput").val("");

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

            $(this).toggleClass("far starred");
            $(this).toggleClass("fas not-starred");
            
            // Local Storage
            newLocalStorage();

        });
    
    
    
    // Profile Customization 

    // Edit Name
    $("#editProfileNameSaveButton").click(function() {
         
        if ($("#editProfileNameInput").val() != "") {

            let newProfileName = $("#editProfileNameInput").val();
            
            $("#username").text(newProfileName);
            $("#editProfileNameModal").modal('hide');
            $("#editProfileNameModal").val("");
        }

    })

    // Local Storage
    var getItemLS = localStorage.getItem("CurrentLists");

    if ( localStorage.getItem("CurrentLists") == null) {
        false;
    } else {
        //var stringConvHTML = getItemLS.replace(">", ">\n");
        $("#listContainerRow").html(getItemLS);
    };

});