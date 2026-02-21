# Job Application Tracker

Live Link: https://omar-webcloud.github.io/Job-Tracker/

## Question Answers

 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById takes id from HTML and returns one element.
- getElementsByClassName takes class name and returns all class name of same name.
- querySelector uses CSS selector and returns first matching element.
- querySelectorAll uses CSS selector and returns all matching elements.



 2. How do you create and insert a new element into the DOM?

- We use document.createElement('element tag') to create element, then set text, class, or attributes. Insert it using appendChild() or with innerHTML.



 3. What is Event Bubbling? And how does it work?

Event bubbling means event starts from target element and moves up to parent elements. It bubbles up through DOM tree until document.



 4. What is Event Delegation in JavaScript? Why is it useful?

- Event delegation means adding one event listener to parent but not to many children. It is useful because of bubbling and helps performance and dynamic elements.

 5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault() stops default browser action but event still bubbles, stopPropagation() stops event from bubbling but does not stop default action.
