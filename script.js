//COMM644
//******************************************************************
// Jet Martin 
// FEWD 2 - Assignment 5
// NOTE: This file contains all HTML files and JavaScript files
//*****************************************************************
//Practice with Forms and the DOM Event Model (10 points)
//In this part of the assignment you will practice working with form objects and the DOM Event Model:

//1.	Add a button to a web page. Use the old school HTML attribute method to attach a click event handler to the button. That handler should call a function that displays the message “I have been clicked” out into an alert box.

//<!doctype html>
//<html>
//<head>
//    <meta charset="UTF-8">
//    <title>Assignment5</title>
//    <script src="script.js"></script>
//</head>
//<body>
//<button onclick="writeMessage()">Click Me</button>
//</body>
//</html>
//function writeMessage() {
//    window.alert("I have been clicked");
//}


//2.	Add a button to a web page and uniquely ID the button. Write a script that finds the button by its ID. Then use the DOM Element method to associate a function with the onclick event of the button. Again, display the message “I have been clicked” out into an alert box.
//<!doctype html>
//<html>
//<head>
//    <meta charset="UTF-8">
//    <title>Assignment5</title>
//
//</head>
//<body>
//<button id="myButton">Click Me</button>
//
//</body>
//</html>
//<script src="script.js"></script>
//var myButton = document.getElementById("myButton");
//window.console.log(myButton);
//myButton.onclick = function () {
//    window.alert("I have been clicked");
//};


//3.	Add a button to a web page and uniquely ID the button. Write a script that attaches an event listener to the button and listens for the click event. When it’s heard, a user-defined function should be called and the message “I have been clicked” should be displayed out into an alert box.
//<!doctype html>
//<html>
//<head>
//    <meta charset="UTF-8">
//    <title>Assignment5</title>
//
//</head>
//<body>
//<button id="myButton">Click Me</button>
//
//</body>
//</html>
//<script src="script.js"></script>
//myButton.addEventListener("click", writeMessage, false);
//function writeMessage() {
//    window.alert("I have been clicked");
//}


//4.	Modify the code within step 3 so that the code that displays an alert box is written directly within a callback function as opposed to a user-defined function.
//myButton.addEventListener("click", function () {
//    window.alert("I have been clicked");
//}, false);



//5.	Modify the code in step 4 so that you can write your script within the <head> tag of the page rather than underneath the button in the markup.
//<!doctype html>
//<html>
//<head>
//    <meta charset="UTF-8">
//    <title>Assignment5</title>
//    <script src="script.js">  
//    </script>
//
//</head>
//<body>
//<button id="myButton">Click Me</button>
//
//</body>
//</html>
//
//document.addEventListener("DOMContentLoaded", init, false);
//function init() {
//    myButton.addEventListener("click", function () {
//    window.alert("I have been clicked");
//}, false);
//}


//6.	Add a link to your web page. Add the text “Visit Google” to the link, set the ID to “redirect” and set the href attribute to http://www.google.com. Now, write a script that alerts the user that they clicked on the link but prevents the browser from also redirecting to the Google site.
//<!doctype html>
//<html>
//<head>
//    <meta charset="UTF-8">
//    <title>Assignment5</title>
//    <script src="script.js">  
//    </script>
//
//</head>
//<body>
//<!--<button id="myButton">Click Me</button>-->
//<a id="redirect" href="http://www.google.com">Visit Google</a>
//
//</body>
//</html>
//document.addEventListener("DOMContentLoaded", init, false);
//function init() {
//    redirect.addEventListener("click", function(event) {
//        event.preventDefault();
//        window.alert("You clicked on Google site but we're not taking you there..PSYCH!");
//    },false);
//}



//7.	Add a text box and a button to a web page. Add an event listener to the button. When the click event is heard, the button should be disabled, and the text that the user input into the text box should be displayed within an alert box.
//<!doctype html>
//<html>
//<head>
//    <meta charset="UTF-8">
//    <title>Assignment5</title>
//    <script src="script.js">  
//    </script>
//
//</head>
//<body>
//<!--<button id="myButton">Click Me</button>-->
//<!--<a id="redirect" href="http://www.google.com">Visit Google</a>-->
//<textarea id="text">
//
//</textarea>
//<button id="myButton">Click</button>
//</body>
//</html>

//document.addEventListener("DOMContentLoaded", init, false);
//function init() {
//    var myButton;
//    myButton.addEventListener("click", function (event) {
//        var myButton, textBox;
//        myButton = document.getElementById("myButton");
//        myButton.disabled = true;
//        textBox = document.getElementById("text");
//        window.alert(textBox.value);
//    }, false);
//}



//8.	Create a new page called newpage.html. You will now have 2 web pages including index.html and newpage.html. Add a button to index.html. When the button is clicked, newpage.html should appear as a popup window at 300 pixels wide by 300 pixels high. As soon as newpage.html loads however, resize the window to 500 pixels wide by 300 pixels high. You will need to handle the load event on newpage.html and use a BOM method on newpage.html to accomplish this task.
//// ******************************************************************************/
//// Index.html 
// ******************************************************************************/
//<!doctype html>
//<html>
//<head>
//    <meta charset="UTF-8">
//    <title>Assignment5</title>
//    <script src="script.js"></script>
//
//</head>
//<body>
//
//<button id="popup">Display NewPage</button>
//</body>
//</html>
//// ******************************************************************************/
//// newPage.html
//// ******************************************************************************/
//<!doctype html>
//<html>
//<head>
//    <meta charset="UTF-8">
//    <title>newPage</title>
//<!--    <script src="script.js"></script>-->
//
//</head>
//<body onload="resizeWindow()">
//
//
//
//</body>
//<script>
//    function resizeWindow () {    
//        window.resizeTo(500, 300);   
//    }
//</script>
//</html>
//// ******************************************************************************/
//// script.js file associated with index.html
//// ******************************************************************************/
//document.addEventListener("DOMContentLoaded", init, false);
//function init() {
//    popup.addEventListener("click", function (event) {
//        window.open('newpage.html','gg','width=300, height=300, resizable=yes');
//    }, false);
//}



//9.	Add two buttons to a web page. Add the text Start to one button and Stop to the other button. Using the BOM .setInterval() method, figure out a way to display the text “Learning JavaScript is fun!” into the console window every 2 seconds but only when the Start button is clicked. If the user clicks on the Stop button, the console should stop logging the text immediately.

//<!doctype html>
//<html>
//<head>
//    <meta charset="UTF-8">
//    <title>Assignment5</title>
//    <script src="script.js"></script>
//
//</head>
//<body>
//
//<button id="startBtn">Start</button> <br><br>
//<button id="stopBtn">Stop</button> <br><br>
//
//
//</body>
//</html>

//document.addEventListener("DOMContentLoaded", init, false);
//function init() {
//    var id;
//    startBtn.addEventListener("click", function (event) {
//        function displayMsg() {
//            window.console.log("Learning JavaScript is fun!");
//        }
//        id = setInterval(displayMsg, 2000);      
//    }, false);
//    
//    stopBtn.addEventListener("click", function (event) {
//        clearInterval(id);
//        window.console.log("Learning Javascript has ceased to be fun");
//    }, false);        
//}


//10.	Add a drop down list to a web page. Populate the drop down list with 4 items. Add a button next to the drop down list and set the text to “Select”. When the user clicks the button, the item selected in the drop down list should appear within an alert box.
//<!doctype html>
//<html>
//<head>
//    <meta charset="UTF-8">
//    <title>Assignment5</title>
//    <script src="script.js"></script>
//
//</head>
//<body>
//
//<select id="selectOption">
//  <option value="volvo">Volvo</option>
//  <option value="saab">Saab</option>
//  <option value="mercedes">Mercedes</option>
//  <option value="audi">Audi</option>
//</select>
//
//<button id="selectBtn"s>Select</button>
//
//</body>
//</html>

//document.addEventListener("DOMContentLoaded", init, false);
//function init() {
//    var selectBtn, optionValue;
//    selectBtn.addEventListener("click", function (event) {
//        var optionValue = document.getElementById("selectOption");
//        window.alert(optionValue.value);
//    }, false);
//}


//The Calculator II (20 points)
//In this part of the assignment you will practice working with the DOM, DOM Events, Functions, and more to create a better version of the calculator that we built in a previous class. To complete this part, follow the steps outlined below:
//1.	Notice the markup that I’ve included for you in the web page. There is a text box that will display the value of each button click and 16 different buttons each of which represents a major key on a basic calculator. Begin adding an event listener to the window object that “listens” for the load event and when heard, calls a user-defined function called init().

// *** See item 8 below

//2.	Create the user-defined function called init().
// *** See item 8 below

//3.	Within the init() function, attach an event listener to each of the 16 buttons in the web page. You will listen for the click event and when heard, a function called enter() should be called for each of the buttons except for the equal sign. Since you are attaching an event listener to an object, you can pass in this.value as a parameter to each of the enter() function calls. 
// *** See item 8 below

//4.	For the equal button, call a function called calculate(). You will not pass any arguments into this function.
// *** See item 8 below

//5.	Create a user-defined function called enter() that accepts val as an argument. 
// *** See item 8 below

//6.	Within the enter() function get the result text box by its ID and set its value plus equal to the val parameter being passed in.
// *** See item 8 below

//7.	Create a user-defined function called calculate() that doesn’t accept any arguments. 
// *** See item 8 below

//8.	Within the calculate() function get the result text box by its ID and set its value equal to the calculation currently stored in the result text box. HINT: Use the built-in eval() function to perform the heavy lifting for you.

//document.addEventListener("DOMContentLoaded", init, false);
//function init() {
//    
//    var resultTxtBox;
//    resultTxtBox = document.getElementById("result");
//    
//    var zero, one, two, three, four, five, six, seven, eight, nine, period, add, subtract, multiply, divide, equal;
//    function enter(val) {
//        resultTxtBox.value += this.value;
//    }
//    function calculate() {
//        resultTxtBox.value = eval(resultTxtBox.value);
//    }
//    zero = document.getElementById("zero").addEventListener("click", enter, false);
//    one = document.getElementById("one").addEventListener("click", enter, false);
//    two = document.getElementById("two").addEventListener("click", enter, false);
//    three = document.getElementById("three").addEventListener("click", enter, false);
//    four = document.getElementById("four").addEventListener("click", enter, false);
//    five = document.getElementById("five").addEventListener("click", enter, false);
//    six = document.getElementById("six").addEventListener("click", enter, false);
//    seven = document.getElementById("seven").addEventListener("click", enter, false);
//    eight = document.getElementById("eight").addEventListener("click", enter, false);
//    nine = document.getElementById("nine").addEventListener("click", enter, false);
//    add = document.getElementById("add").addEventListener("click", enter, false);
//    subtract = document.getElementById("subtract").addEventListener("click", enter, false);
//    multiply = document.getElementById("multiply").addEventListener("click", enter, false);
//    divide = document.getElementById("divide").addEventListener("click", enter, false);
//    period = document.getElementById("period").addEventListener("click", enter, false);
//    equal = document.getElementById("equal").addEventListener("click", calculate, false);
//    
//}
//


////Figure out a way to simplify your code so that you don’t have to manually attach an event handler to each and every button. You should be able to programmatically attach a listener to every button on the page and attach a handler that listens for the click without having to write so much code. 
////HINT: Remember the concept of “event bubbling”. Perhaps it makes more sense to listen for an event on a parent element rather than each and every button….

//document.addEventListener("DOMContentLoaded", init, false);
//function init() {
//    var resultTxtBox;
//    resultTxtBox = document.getElementById("result");
//    var body = document.querySelector("body");
//    
//    function enter(val) {
//        resultTxtBox.value += val;
//    }
//    function calculate() {
//        resultTxtBox.value = eval(resultTxtBox.value);
//    }
//	
//	// Capture phase listeners
//	body.addEventListener("click", callback, false);
//   
//    function callback(event) {
//		var tag = event.currentTarget.tagName;
//        var id = event.target.id;
//        
//        if (event.target !== event.currentTarget) {
//            // Note: Must make sure not "result" otherwise clicking in result box will cause data to be added to result area
//            if (id !== "equal" && id !== "result") {
//                enter(event.target.value);
//            } else {
//                calculate();
//            }
//            event.stopPropagation();
//        }
//	}
//}


//JavaScript Image Rollovers (20 points)
//In this part of the assignment you will practice working with the DOM, DOM Events, Functions, and more to create an application that features a navigation bar with rollover images. To complete this part, follow the steps outlined below:
////************************************************************************
//// ******* COMPLETE SOLUTION INCLUDED BELOW ******* 
////************************************************************************

//1.	Notice the 5 images in the web page. These are the 5 images that you will be creating rollovers for. Notice that for each image, an “over” state exists for it in the same directory. Begin by creating a unique ID for each image so that you have image1, image2, image3, image4, and image5.
//2.	Now, within the script tag of your web page, create a helper function called getImage(). This function will accept one parameter. Within the function, return the result of getting an element by its ID, passing in the function’s argument as a parameter into the getElementById() method.
//3.	Create a new constructor function called Rollover that accepts two arguments including imageId and newImageURL.
//4.	Create a new object variable called target and store this within it.
//5.	Create 3 properties associated with target including newImageURL, image, and oldImageURL.
//6.	Store the value of the newImageURL parameter within the newImageURL property.
//7.	Store the return value of the getImage() function, passing in the imageID argument as a parameter within the image property.
//8.	Store this.image.src (the URL or source of the image you’re working with) within the oldImageURL property.
//9.	Create an event handler for onmouseover and one for onmouseout for each target image, or: 
//target.image.onmouseover = function() {
//
// }
//target.image.onmouseout = function() {
//
//}
//10.	In the mouseover, set the src property of the target.image to the newImageURL property.
//11.	In the mouseout, set the src property of the target.image to the oldImageURL property.
//12.	Create an event handler to handle the loading of the web page (window). 
//13.	Within the event handler function, create 5 new instances of the Rollover object, passing in the image’s ID and the rollover image path for each image as parameters within the constructor.
////************************************************************************
//// ************ Solution below was implement as embeded script
////************************************************************************
//<!DOCTYPE html>
//<html>
//<head>
//<title>Assignment 5, Part 3 - Image Rollovers</title>
//<script> 
////    document.addEventListener("DOMContentLoaded", init, false);
////    function init() {
//
//    
////02: Helper function to retrieve the ID of each image
//    function getImage(id) {
//
//        return document.getElementById(id);
//
//    };
//       
//
////03: Rollover function that performs the rollover effect on each image
//        function Rollover(imageId, newImageURL) {
////        4.	Create a new object variable called target and store this within it.
//            var target = this;
//            
//
////        05: Create 3 new properties including newImageURL, image, and oldImageURL
////    	06: Store the new image URL in a property
////    	07: Store the old image's ID in a property
////    	08: Store the old image URL in a property
//
//            target.newImageURL = newImageURL;
//            target.image = getImage(imageId);
//            target.oldImageURL = this.image.src;
//                        
////       09, 10, 11: Attach onmouseover and onmouseout event handlers to target.image property
//            
//            target.image.onmouseover = function() {
//                target.image.src = target.newImageURL;
//            };
//
//            target.image.onmouseout = function() {
//                target.image.src = target.oldImageURL;
//
//            };
//        }; 
//        
//            
////    12, 13: Event handler to create 5 new Rollover objects once the page loads
//    
//    window.onload = function () {
//        
//        <!-- 01 Programatically add image ids for each image -->
//            var idName; 
//            var imgNumber = 1;
//            var imgElements = document.getElementsByTagName("img");
//            for (var i = 0; i < imgElements.length; i += 1) {
//                idName = "image" + imgNumber.toString();
//                imgNumber += 1;                imgElements[i].setAttribute("id",idName.toString());
//            }
//        
////        12, 13: Event handler to create 5 new Rollover objects once the page loads
//        var rollover1 = new Rollover("image1", "home_over.png");
//        var rollover2 = new Rollover("image2", "aboutus_over.png");
//        var rollover3 = new Rollover("image3", "solutions_over.png");
//        var rollover4 = new Rollover("image4", "support_over.png");
//        var rollover5 = new Rollover("image5", "contactus_over.png");
//    }; 
//        
//
//    </script>
//</head>
//
//<body>
//	<!-- 01 -->
//    <img src="home.png">
//    <img src="aboutus.png">
//    <img src="solutions.png">
//    <img src="support.png">
//    <img src="contactus.png">
//
//
//</body>
//</html>