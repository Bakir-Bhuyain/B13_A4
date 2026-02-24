1. Selecting Elements::
      getElementById: I use this to find one specific element using its unique ID. It returns only one item.
      getElementsByClassName: I use this to find all elements that share the same class name. It returns a collection (like a list).

querySelector:: 
      I use this like a CSS selector (e.g., .myClass or #myId). It only gives me the first match it finds.

querySelectorAll:: 
      I use this to get every element that matches a CSS selector. It returns a static list of all matches.

2. Creating and Inserting Elements::
      I follow a simple three-step process to add something new to the page:

Create: 
      I use document.createElement('div') to make the tag.

Add Content: 
      I use .innerText = "Hello" to put text inside it.

Insert: 
      I find a parent element and use .appendChild(newElement) to stick it inside the DOM.

3. Event Bubbling::
      I think of this like a bubble rising in water. When I click a button, the click event doesn't just happen on that button. It travels upwards to its parent, then to the grandparent, all the way to the top of the document. Every parent "hears" the event unless I tell it to stop.

4. Event Delegation::
       I use this technique to be efficient. Instead of adding a click listener to every single child (like 100 list items), I add one single listener to the parent. Because of bubbling, I can catch the click at the parent level and check which child was actually clicked. It saves memory and works for items I add later.

5. preventDefault() vs stopPropagation()::
   preventDefault()::
       I use this to stop the browser's default behavior. For example, I stop a link from opening a new page or a form from refreshing.

stopPropagation()::
      I use this to stop the bubbling. It prevents the event from traveling up to the parent elements.
