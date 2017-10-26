import Bristle from 'bristlejs';
import '../css/documentation/methods.css';

const standardMethods = {
  render:['Allows you to set the value of a bristle, accepts string, boolean, number. Additionally a DOM element can be passed, which will just append it as a child.',"bristle.render('Hello World')"],
  remove:["Removes the bristle from it's parent element.",'bristle.remove()'],
  appendTo:['Allows you to append a bristle to another Bristle or HTMLElement object','bristle.appendTo(element)'],
  onEvent:["Allows you to add event listeners to the bristle's DOM element.","bristle.onEvent('click',()=>{alert('clicked!')})"],
}

var methods = Bristle({type:'div',class:'methods'});
Bristle('h2','Methods',methods);
Object.entries(standardMethods).forEach(entry=>{
  standardMethod(entry[0],entry[1][0],entry[1][1]).appendTo(methods);
});
let setAttributesMethod = standardMethod('setAttributes',"Allows you to modify the attributes of the bristle's DOM element, accepts an object.",'bristle.setAttributes({style:"color:red;"})')
Bristle({type:'span',class:'warning'},'WARNING: You will be vulnerable to script injections if you setAttributes with data from unsafe/unsanitized sources.',setAttributesMethod);
setAttributesMethod.appendTo(methods);

function standardMethod(name,description,example){
  let body = Bristle({type:'div',class:'method'});
  Bristle({type:'h3',class:'name'},name,body);
  Bristle({type:'p',class:'description'},description,body);
  Bristle({type:'span',class:'code'},example,body);
  return body;
}
export default methods;
