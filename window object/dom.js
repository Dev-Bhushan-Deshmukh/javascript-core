
//*!  Basic Level (1-10)
//*! *!  What is the DOM? Explain how the DOM works in a web page.

//*!  Select an Element – How do you select an element by its ID, class, or tag name?

// function changeContent(){

// let listItem=document.getElementById('main-list');
// console.log(listItem)

// let liItem=document.createElement('li');
// liItem.innerText='dynamic li'
// listItem.appendChild(liItem);


// ----------

// let ulItems=document.getElementsByClassName('inner-list');

// console.log(ulItems.length
// )
// -------------

// let spans=document.getElementsByTagName('span');

// console.log(spans.length)

// }






//*!  Change Text Content – Write code to change the text inside a <p> element.

// function changeText(){

// let pTag=document.querySelector('p')
// pTag.innerText='P tag text altered'


// }

//*! Modify an Attribute – How can you change the src attribute of an <img> tag dynamically?

// function changeSrc(){
//   document.querySelector('img').src=''
//   document.querySelector('img').src='https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1C3oEP.img?w=612&h=304&q=90&m=6&f=webp&x=597&y=228&u=t'

// }

//*!  Add and Remove a Class – Write JavaScript to add and remove a class from an element.
// function changeClass(){

  // document.getElementById('my-div').setAttribute('name','new-name');
  // document.getElementById('my-div').setAttribute('class','new-class');

// document.getElementById('my-div').removeAttribute('class');

// }
//*!  Create and Append an Element – Write JavaScript to create a new <li> and add it to an existing <ul>.

//*!  Remove an Element – How do you remove an element from the DOM?
// function removeItem(){
//   let li=document.getElementById('div-remove');
// li.remove()
// }
//*!  Event Listeners – Attach a click event to a button that logs "Button Clicked" when clicked.

//*!  Prevent Default Behavior – How do you prevent a form submission using JavaScript?
// function formSubmit(event){
//   event.preventDefault();
//   console.log('no reload')
// }
//*!  Find Parent, Child, and Sibling Elements – Given an element, find its parent, children, and next sibling.

// function detection(){
//   let nodeItem=document.getElementById('child-container');

// console.log(nodeItem.children)
// console.log(nodeItem.parentElement)
// console.log(nodeItem)


// }
// detection()

// Intermediate Level (11-20)
//*!  Modify CSS with JavaScript – Change the background color of a <div> when a button is clicked.
// function changeColor(){
// let div=document.getElementById('div-color');
// div.style.backgroundColor='green'


// }
//*!  Toggle an Element's Visibility – Implement a show/hide functionality for a <div>.
// function toggleVisibility(){
// let divToggle=document.getElementById('div-toggle');
// divToggle.style.visibility=divToggle.style.visibility=='visible'?'hidden':'visible';


// }
//*! Add Multiple Event Listeners – Add an event listener to multiple buttons and log their text on click.
// function addEvent(){
// let btns=document.getElementsByClassName('btn-mult');
// console.log(btns)
// for(let i in btns){

// console.log(btns[i].innerText)  
// btns[i].addEventListener('click',()=>{
//   console.log(btns[i].innerText)
// })
// }
// }
//*!  Debounce an Input Field – Implement a debounce function that delays executing a function while typing.

//*! Event Delegation – Implement event delegation to handle clicks on dynamically added elements.

//*!  Drag and Drop – Implement a simple drag-and-drop feature for a div.

//*! Stop Event Bubbling and Capturing – Demonstrate stopPropagation() and stopImmediatePropagation().

//*!  Clone an Element – Write a function to duplicate an element and append it to the DOM.
// function cloneMe(event){
//  let item= document.getElementsByClassName('duplicate-item')

//  console.log(item)
// let newNode=item[0].cloneNode(true);
// document.body.appendChild(newNode)
// }
// Create a Modal Popup – Implement a modal using JavaScript without any external library.
// function openModal(){
// document.getElementById('modal-item').style.display='block'



// }
//*!  Lazy Load Images – Implement lazy loading of images using JavaScript.

// Advanced Level (21-30)
//*! Virtual DOM vs. Real DOM – Explain how the virtual DOM differs from the real DOM.

//*!  Custom Context Menu – Replace the default right-click context menu with a custom menu.

//*! Infinite Scroll Implementation – Load more content dynamically when scrolling reaches the bottom.

//*! Build an Accordion – Create an expandable/collapsible FAQ section.

//*! Dynamic Table Sorting – Implement a sortable table when clicking on column headers.

//*! Detect Element Visibility – Write a function to check if an element is in the viewport.

//*! Build a Custom Tooltip – Show a tooltip when hovering over an element.

//*! Detect User Inactivity – Log out a user after a period of inactivity using JavaScript.

//*! Record and Replay DOM Changes – Track all changes in the DOM and replay them later.

//*!  Dark Mode Toggle – Implement a dark mode feature using JavaScript.







/* 


 //Manipulating Nodes:
node.appendChild(newNode)          // Appends a new child node.
node.insertBefore(newNode, refNode) // Inserts a new node before a reference node.
node.replaceChild(newNode, oldNode) // Replaces a child node.
node.removeChild(childNode)        // Removes a child node.
 // Checking Node Information:
node.contains(otherNode)           // Returns true if the node contains the other node.
node.hasChildNodes() 

 //*!Element Methods
  //Manipulating Attributes:
element.getAttribute(name)         // Returns the value of an attribute.
element.setAttribute(name, value)  // Sets the value of an attribute.
element.removeAttribute(name)      // Removes an attribute.
element.hasAttribute(name)         // Returns true if the attribute exists.
  //Class Manipulation
  element.classList.add(className)   // Adds a class.
element.classList.remove(className) // Removes a class.
element.classList.toggle(className, force) // Toggles a class (optional force parameter).
element.classList.contains(className) // Returns true if the class exists.

//Styles
element.style.property             // Gets or sets an inline style property.
element.setAttribute("style", "key: value;") // Sets multiple inline styles.
//Content Manipulation
element.innerHTML                  // Gets or sets the HTML content of the element.
element.textContent                // Gets or sets the text content of the element.
element.outerHTML                  // Gets or sets the HTML for the entire element.
//*!Adding and Removing Event Listeners:


element.addEventListener(event, handler, options) // Adds an event listener.
element.removeEventListener(event, handler, options) // Removes an event listener.
//*!Event Triggering:
element.dispatchEvent(event)

//*!Querying the DOM:

element.closest(selector)          // Finds the closest ancestor that matches the selector.
element.matches(selector)          // Returns true if the element matches the selector.
//*!Node Filtering
nodeList.forEach(callback)

//*!form
input.focus()                      // Focuses on the input.
input.blur()                       // Removes focus from the input.
input.select()                     // Selects the text in the input.
input.setSelectionRange(start, end) // Sets the selection range for text input.

//submision
form.submit()                      // Submits the form.
form.reset()
//*!Window and Document Interaction
//*!Scroll and Dimensions:

window.scrollTo(x, y)              // Scrolls to a specific position.
window.scrollBy(x, y)              // Scrolls by a specified amount.
document.documentElement.scrollTop // Gets or sets the vertical scroll position.
document.documentElement.scrollLeft // Gets or sets the horizontal scroll position.
//*!Focus and Selection:

window.getSelection()              // Returns the current text selection.
document.activeElement             // Returns the currently focused element.
//*!Performance Optimization
//*!Efficient DOM Updates:

document.createDocumentFragment()  // Create a document fragment for batch updates.
//*!Animation and Styles
//*!Animation:

element.animate(keyframes, options) // Creates a CSS animation.
//*!Computed Styles:

window.getComputedStyle(element)   // Gets the computed style of an element.






//*!Window Dimensions and Position
//*!Screen and Viewport Dimensions:

window.innerWidth            // Width of the viewport.
window.innerHeight           // Height of the viewport.
window.outerWidth            // Total width of the browser window, including toolbars.
window.outerHeight           // Total height of the browser window.
//*!Screen Position:

window.screenX               // X-coordinate of the window relative to the screen.
window.screenY               // Y-coordinate of the window relative to the screen.
//*!Scroll Information:

window.scrollX               // Horizontal scroll offset.
window.scrollY               // Vertical scroll offset.
window.scrollTo(x, y)        // Scrolls to specified coordinates.
window.scrollBy(x, y)        // Scrolls by specified amount.
//*!3. Dialog Boxes
Pop-up Dialogs:

window.alert(message)        // Displays an alert box.
window.confirm(message)      // Displays a confirmation box (OK/Cancel).
window.prompt(message, defaultValue) // Displays a prompt for user input.
//*!4. Timers
Setting and Clearing Timers:

window.setTimeout(callback, delay)   // Calls a function after a delay.
window.clearTimeout(id)              // Cancels a timeout.
window.setInterval(callback, delay)  // Repeatedly calls a function at intervals.
window.clearInterval(id)             // Cancels an interval.
//*!5. Location and Navigation
Navigation:

window.location                   // Provides access to the URL of the current document.
window.location.href              // Gets/sets the URL.
window.location.reload()          // Reloads the current page.
window.location.replace(url)      // Replaces the current page with a new one.
window.location.assign(url)       // Navigates to a new URL.
//*!History:

window.history                    // Provides access to the browser's history.
window.history.back()             // Goes to the previous page.
window.history.forward()          // Goes to the next page.
window.history.go(n)              // Moves forward or backward in history by n steps.
//*!6. Screen and Device Information
Screen:

window.screen                     // Provides information about the user's screen.
window.screen.width               // Total width of the screen.
window.screen.height              // Total height of the screen.
window.screen.availWidth          // Width of the screen available to the window.
window.screen.availHeight         // Height of the screen available to the window.
window.screen.colorDepth          // Color depth of the screen.
window.screen.pixelDepth          // Pixel depth of the screen.
//*!Device Pixel Ratio:

window.devicePixelRatio           // Ratio of physical pixels to device-independent pixels.
//*!7. Window Manipulation
Opening and Closing Windows:

window.open(url, target, features) // Opens a new browser window or tab.
window.close()                    // Closes the current window.
//*!Focus and Blur:

window.focus()                    // Brings the window to focus.
window.blur()                     // Removes focus from the window.
//*!. Event Handling
Event Listeners:

window.addEventListener(event, callback) // Adds an event listener.
window.removeEventListener(event, callback) // Removes an event listener.
//Global Events:

window.onload                     // Triggered when the page is fully loaded.
window.onresize                   // Triggered when the window is resized.
window.onscroll                   // Triggered when the window is scrolled.
window.onfocus                    // Triggered when the window gains focus.
window.onblur                     // Triggered when the window loses focus.
//*!Storage APIs
//*!Local Storage:

window.localStorage               // Provides access to local storage.
localStorage.setItem(key, value)  // Stores a key-value pair.
localStorage.getItem(key)         // Retrieves the value of a key.
localStorage.removeItem(key)      // Removes a key.
localStorage.clear()              // Clears all keys.
//*!Session Storage:

window.sessionStorage             // Provides access to session storage.
sessionStorage.setItem(key, value) // Stores a key-value pair.
sessionStorage.getItem(key)        // Retrieves the value of a key.
sessionStorage.removeItem(key)     // Removes a key.
sessionStorage.clear()             // Clears all keys.
//Browser Information
//*!Navigator API:

window.navigator                  // Provides information about the browser and device.
window.navigator.userAgent        // Returns the user-agent string.
window.navigator.language         // Returns the browser's language setting.
window.navigator.geolocation      // Provides access to geolocation.
window.navigator.onLine           // Returns true if the browser is online.
//*! Media and Audio/Video
//*!Media Query:

window.matchMedia(query)          // Evaluates a media query.
//*!Screen Sharing (WebRTC):

navigator.mediaDevices.getDisplayMedia() // Captures screen.
Audio/Video Streams:

navigator.mediaDevices.getUserMedia(constraints) // Captures video/audio.
//*! Other APIs
Clipboard API:

navigator.clipboard.writeText(text) // Writes text to clipboard.
navigator.clipboard.readText()      // Reads text from clipboard.
Fullscreen API:

document.documentElement.requestFullscreen() // Requests fullscreen mode.
document.exitFullscreen()                    // Exits fullscreen mode.
Fetch API:

window.fetch(url, options)          // Fetches resources over the network.
Intersection Observer:

new IntersectionObserver(callback, options) // Observes visibility of elements.
Resize Observer:

new ResizeObserver(callback)        // Observes changes in size of an element.
//*! JavaScript Execution Control
Eval and Execution Context:

window.eval(code)                  // Executes a string of JavaScript code.
Error Handling:

window.onerror                     // Captures unhandled errors.
//*! Performance and Analytics
Performance API:

window.performance                 // Provides access to performance data.
performance.now()                  // Returns a high-resolution timestamp.






*/

//*! Accessing the Document
//?document.getElementById(id)  
// let lists=document.getElementById('main-list');
// console.log(lists.children[0].innerHTML)
// lists.childNodes

// console.log('dom execution started...')

//?document.getElementsByClassName(className)
// let innerList=document.getElementsByClassName('inner-list');
// console.log(innerList[innerList.length-1].innerHTML)


//?document.getElementsByTagName(tagName) // Returns a live HTMLCollection of elements with the given tag name.

// let byTag=document.getElementsByTagName('li');
// console.log(byTag,'byTag')

//?document.querySelector(selector) 
// let queySelect=document.querySelector('li');
// console.log('queySelect',queySelect)
//?document.querySelectorAll(selector) 
// let queySelectall=document.querySelectorAll('li');
// console.log('queySelect-all',queySelectall)


//*! Creating and Modifying Elements:
//?document.createElement(tagName)
// let myP=document.createElement('p');
//?document.createTextNode(text)   
// let myT=document.createTextNode('this is paragraph');
// myP.appendChild(myT)
// document.body.append(myP)
//?document.createDocumentFragment()



 //*! Page Metadata:

//? document.title     
document.title='billionaire bvd'

 //?document.URL  

 console.log( document.URL)
 //?document.referrer 

 //*! Navigating Nodes
 //?node.childNodes    
 let list_=document.getElementById('main-list');
//  console.log(list_.childNodes())

 //?node.firstChild    
    //   console.log(list_.firstChild) 
             
 //?node.lastChild
//  console.log(list_.lastChild) 
//  ?node.nextSibling  
//  console.log(list_.nextSibling)                  
 //?node.previousSibling    
//  console.log(list_.previousSibling)              
//  ?node.parentNode       
//  console.log(list_.parentNode)    

// ? node.children  
// console.log(list_.children)

//  node.firstElementChild             
//  node.lastElementChild             
//  node.nextElementSibling          
//  node.previousElementSibling   
// navigator.mediaDevices.getDisplayMedia()
