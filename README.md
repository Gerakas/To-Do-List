
# LogList

## Description
An online To-Do list interface which allows users to create and “log” their own lists, in a minimal, yet aesthetically pleasing manner. The website is designed in a way that sets the user’s lists on-top of one another, mimicking the layout of a textbook and giving off the impression of a physical checklist. This coupled with the simple to navigate sidebar, will create an interface that can be used by most users with great ease.

## SITE GOALS

1. The website is *simple* in design, allowing users to be able to navigate it with ease. Users can:
    - Understand the layout effectively and with ease.
    - Start creating their own lists quickly without having to spend a long time learning the UI.

2.	The website can be *personalised*, providing a unique experience for each user. Users can:
    -	Edit the theme/ colours of the website to fit their liking.
    -	Change the name displayed on the welcoming text to their own preference.

3.	The website uses *Bootstrap* to provide responsive design that adapts to the user's screen resolution. Users can:
    -	Visit the site via mobile, tablet or desktop devices without impacting the overall visual experience.
4.	As the website develops it is anticipated that:
5.	*Search bar* will be implemented to allow the user to be able to search through their list using their list titles.
6.	More side-bar *actions* will be added to populate the side-bar and allow users to navigate lists according to certain traits, such as:
    -	Completed Lists
    -	Deleted Lists
7.	Additions to current the *themes* for more variety and potentially even texture by implementing patterns alongside block-colours.

## UX

I decided early on that I would like to make the experience of each user more personalised than just their own lists. This was accomplished by giving them a choice of being able to edit the theme of the website, and therefore the overall feel, by picking from a number of pre-defined palettes. These palettes were picked using [Coolors](https://coolors.co/), which allowed me to generate a variety of different colour schemes that blend in well with one another. To further the personalised experience, I was trying to achieve. I decided to add a welcoming text to the top right-hand side of the page, which reads *“Welcome, User!”*. The user then has the choice of changing part of this text (“*User*”) to their own username or whatever other text they wish to change it to. 

The logo itself is just a simple h1 header with the “Pacifico” font-style applied to it. A very simple approach which binds well with the overall minimalistic style of the website and adopts the colours scheme of whatever theme currently in use.

The links and buttons utilise certain effects when hovered over or when clicked on. These effects are:
-	Change in background-colour when hovering over or clicking the element (side-bar actions, edit-list actions, edit-profile actions)
-	Font-size scale when hovering over element (edit-list icon, theme icon)
-	Fade-out and Fade-in (task actions; check and delete icons, side-bar toggle button)

## USER STORIES

This website is for users wanting to create quick and simple To-Do lists on the web.

#### As a user:
-	I want to create a new list.
-	I want to rename or completely delete the newly created list.
-	I want to add a task to the list.
-	I want to check a completed task or delete a task from a list.
-	I want to mark a list as important or prioritise it.
-	I want to only view my important lists.
-	I want to view all my lists.
-	I want to change the background colour of the site to my liking.
-	I want to change the welcoming text.
-	I want to hide the sidebar for a wider view of the lists.

#### As the owner of the website:
-	I want users to be able to create new lists easily.
-	I want users to be able to edit the components in their lists.
-	I want users to be able to find their lists with ease.
-	I want users to be able to customise the website to make it feel more personal and unique.
-	I want users to be able to access the website through a variety of devices with various screen resolutions without it affecting their visual experience.

## Wireframes

![deskot-wireframe](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/wireframes.jpg)

## Features

### Existing Features

1. *Sidebar*: The sidebar can be broken down into 4 distinguishable sections.
    -	The sidebar *toggle button*: The main and only purpose of this button is to toggle on and off between hiding and showing the sidebar on the screen. This allows for a wider screen area/ viewport for the user to view their lists on and to make the main viewport even less populated.
        ![sidebar-button](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/sidebar-button.png)
    
    -	The *Logo*: The purpose of adding a logo to the website is to create a recognisable symbol that represents the brand and creates visual association for long-lasting recognition.
        ![sidebar-logo](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/sidebar-logo.png)
    
    -	*Navigation Menu*: A set of links that allow the user to take certain actions that take affect on the lists in the main viewport. These actions consist of:
        -	Creating a *new list*. Where a user can create as many or as little lists as they like. Apart from when the user decides to only view the “starred” lists, which disables this feature entirely until the user clicks on “all” which shows all the created lists once again.
        -	*“Starred”* lists. This feature allows users to toggle through their “starred” lists and “all” lists. Essentially making it easier for them to find or sort through their pre-selected “starred”/ important list with more ease and efficiency, in case they have a great number of lists to go through.
        ![sidebar-nav](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/sidebar-nav.png)
        
        
    -   The sidebar *modal button*: This button is only visible on screens that have a width of 700px or lower. It replaces the navigation menu above, with a hamburger button which once its clicked, calls a modal that has the navigation menu packed within it.
    ![sidebar-modal](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/sidebar-modal.png)

2.	*Personal* section: This section addresses the personalisation experience I wanted to incorporate within the website. There are 2 main features that can be found within this section.


    -	The “*Edit username*” button: 
    
        ![personal- change username](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/personal-edit-username.png)

        By clicking on this button, the user can edit the welcoming text to say “Hello” to a name of their choosing.

    -	The “*Change Theme*” button:

        ![personal-change theme](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/personal-change%20theme.png)
    
        By clicking on this button, the user can edit the colour palette of the whole website, which involves the background colour of the page and certain elements (such as links and buttons) and the colour of the icons and hovered text.
        
        ![theme-palette](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/theme-palettes.png)

3.	*Lists*: These elements are the core components behind this project. Making their functionality work seamlessly with every new feature added on, an absolute necessity. Each list spans across the whole width of the screen, underlining the textbook layout that is trying to be achieved. 
Each list can be broken down into 4 sections, with each section being made up of 1-2 core features. These include:
    
    -	The *title* section. 
        ![list-title](https://github.com/Gerakas/To-Do-List/blob/master/READme%20images/list-title.png?raw=true)
    
        This section primarily acts as a visual identifier for each list and secondly as a sort of “control panel”. It is made up of:

        -   The *h5 header*:
        ![list-star](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/list-title.png)
        
        -	The *star* icon: 
            ![list-star](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/list-star.png)

            Toggles the list into a “starred” or “non-starred” state. As a result, toggling its visibility in the “starred” view mode accordingly.
        
        -	The *edit* icon:
            ![list-edit](https://github.com/Gerakas/To-Do-List/blob/master/READme%20images/list-edit.png?raw=true)
             Presents a dropdown menu that offers the user 2 actions: 
            -	*Rename* button: When clicked, prompts an input modal to appear, which can be used to edit the lists title.
            -	*Delete* button: When clicked, deletes the list from the screen and completely removes the element from the DOM tree.
            
            
    -	The “*Add task…*” section. 
    
        ![list-add task](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/list-add-task.png)
    
        This section is an input field for users to type in tasks and add them to their lists. The user can achieve this by typing out a preferred number of characters and pressing enter on the keyboard/ return on the mobile and tablet keypad.
    
    -	The *active task* section:
        ![list-active task](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/list-task.png)
        This section is where all the tasks that the user adds will appear. There are two actions that can be made within each task:
        -	*Complete* a task by clicking on the “check” icon.
        -	*Remove* a task by clicking on the “times” icon.
    
    -	The *completed task* section:
        ![list-completed task](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/list-completed.png)
        The last section where all the completed tasks appear, with a line through the text of the task to signify it has been completed. Similarly to the active task section, a user has the option of removing the task completely, by clicking on the “times” icon.

### Features Left to Implement

One of the biggest obstacles I came up against during the development of this project was time. As I had originally starting developing a different idea for my Interactive Frontend Development Milestone Project, which can be found [here](https://github.com/Gerakas/Tiger-King-Chess) I found myself short on time on both accounts. This had an impact on the amount of features I was able to accommodate within the project’s final version and the quality and quantity of the site’s functionality.

Future implementations to be include are:
1.	A “*Completed*” Nav Menu button that only shows only the lists that have been completed by the user. This can be a way of re-visiting old lists for a number of reasons. Such as adding more tasks onto the previously thought completed list, remembering certain information the list may hold etc.
2.	A “*Bin*” Nav Menu button that only shows the lists and/or tasks the user removed from the main-viewport.

3.	A “S*earch Bar*” input that allows the user to be able to search for certain lists. Making it easier to search through a large number of lists.

![potential website](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/potential.PNG)

## Technologies Used

I used the following languages, frameworks and libraries to build this website:

-	HTML5 - To create the content of the website.
-	CSS3 - To style the content.
-	Javascript – To add interactivity
-	[JQuery](https://jquery.com/) – To simplify and assist me in DOM tree traversal and manipulation.
-	[Bootstrap](https://getbootstrap.com/) – To simplify page layout, add modals and dropdowns.
-	[FontAwesome](https://fontawesome.com/) - To insert all the icons into the page. 
-	[Google Fonts](https://fonts.google.com/) - To style the text and logo.
-	[FavIcon](https://www.favicon-generator.org/) - To create the small favicon icon that appears in the page’s tab.
-	[Hover.css](https://ianlunn.github.io/Hover/) – To add a hover effect on image elements.
-	[Figma](https://www.figma.com) To create web-page wireframes.
-   [Coolors](https://coolors.co/)
-	[Gitpod](https://www.gitpod.io/) To create and edit code.
-	Adobe Photoshop: To create the background image palette thumbnails.
-	[Pingdom](https://tools.pingdom.com/) To test the website's speed.
-	[W3C Validator](https://validator.w3.org/) To validate HTML code.
-	[W3C CSS Validator](https://jigsaw.w3.org/css-validator/) To validate CSS code.
-	[JSHint](https://jshint.com/) To validate JS code.

## Testing

The site has been tested using various platforms to ensure proper display and responsiveness.
[W3C Markup Validation Service](https://validator.w3.org/) validated all the HTML. [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) validated the CSS, [JSHint](https://jshint.com/) validated the JavaScript. [Pingdom](https://tools.pingdom.com/) tested the website's speed.

-   W3C HTML Validator's results came back with 4 warnings.
    ![html validator](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/html-validator-before.PNG)
    
    With 1 warning regarding the script tag being outside both the head and body elements. Another warning regarding a modals aria-labelleby value not pointing to the right element. And the other two insignificant warnings regarding comment syntax.

    After addressing these warnings, the second test results are as follow:
    ![html validator](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/html-validator.PNG)


-	W3C CSS Validator's results came back with 3 errors.
    ![css validator](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/css%20validator-before.PNG)

    With 2 errors regaridng the statement that the backdrop-filter's property value doesnt exist (blur) and the last error regarding the "linear-gradient" values from the "background-image" property in the root/ html element.

    After addressing these errors. I found that the linear-gradient values show up as an error due to the root colour variables. The results of the second test are as follow:
    ![css validator](https://github.com/Gerakas/To-Do-List/blob/master/READme%20images/css%20validator.PNG?raw=true)

- JSHint's results came back with 42 warnings. The majority of warnings were about the use of 'let' variables in the code, and the rest were about missing or unnecessary semicolons.
    
    ![js validator](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/js%20validator-before.PNG)

    
    After addressing these warnings, the second test results are as follow:
    ![js validator](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/js%20validator.PNG)
    
    With all 23 warnings being about the use of the "let" variable. This can be ignored according to [this](https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const) page.

- Pingdom results cambe back as "Performance Grade: B 81"

    ![pingdom results](https://raw.githubusercontent.com/Gerakas/To-Do-List/master/READme%20images/pingdom.PNG)

## Deployment

The project was developed in its entirety using GitPod and hosted on GitHub pages. The live site can be found here (https://gerakas.github.io/To-Do-List/).

## Credits

### Acknowledgements
-  JS ENTER key press event: https://howtodoinjava.com/jquery/jquery-detect-if-enter-key-is-pressed/
-  JS Changing CSS root colour variables event: https://stackoverflow.com/questions/37801882/how-to-change-css-root-color-variables-in-javascript


- Many thanks to Felipe Alarcon for his insightful feedback and advice.
- Many thanks to Code Institute and the slack community for their unmatched support.


