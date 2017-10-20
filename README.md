# Bristle
Bristle is a lightweight front-end rendering solution.

## Bristles
Bristles represent DOM elements, and can chained together. Bristles are re-rendered when their parents are. Bristles are created with 3 parameters, the first for creating the DOM element, the second for the inner text value of the element, and the third for the parent node. Only the first parameter is required, which may be either a string of the element type, or an object where the type property contains a string of the element type, and any other properties represent the attributes of the element. The second parameter may be text to display, or instead can be a function which will be given the Bristle's render method as the parameter. The third parameter either accepts another Bristle object or a DOM element to append to.

## Bristle Methods

#### render
Allows you to set the value of a bristle, accepts string, boolean, number. Additionally a bristle or DOM element can be passed, which will just append it as a child.

```bristle.render('Hello World')```

#### remove
Removes the bristle from it's parent element.

```bristle.remove()```

#### appendTo
Allows you to append a bristle to another Bristle or HTMLElement object

```bristle.appendTo(element)```

#### onEvent
Allows you to add event listeners to the bristle's DOM element.

```bristle.onEvent('click',()=>{alert('clicked!')})```

#### setAttributes
Allows you to modify the attributes of the bristle's DOM element, accepts an object.

```bristle.setAttributes({style:"color:red;"})```

WARNING: You will be vulnerable to script injections if you setAttributes with data from unsafe/unsanitized sources.

## Example Calculator
```
var calc = new Bristle({type:'div',id:'calculator'},'Calculator');
var currentValue = 0;
var display = new Bristle('p',currentValue,calc);
var subtract = new Bristle('button','-',calc);
subtract.onEvent('click',()=>{
  currentValue--;
  display.render(currentValue);
});
var add = new Bristle('button','+',calc);
add.onEvent('click',()=>{
  currentValue++;
  display.render(currentValue);
});
calc.appendTo(document.body);
```
