const validRenderPrimitives = ['string','boolean','number'];
const renameAttributes = {typeattribute:'type'};
class Bristle {
  constructor(elementType,render,parent){
    this.addClass = this.addClass.bind(this);
    this.onEvent = this.onEvent.bind(this);
    this.parentRendered = this.parentRendered.bind(this);
    this.parentAppended = this.parentAppended.bind(this);
    this.children = [];
    this.value = null;
    this.render = this.render.bind(this);
    this.appendTo = this.appendTo.bind(this);
    this.remove.bind(this);
    this.setAttributes = this.setAttributes.bind(this);
    if (typeof elementType !== 'string' && typeof elementType !=='object'){
      throw this.error('Invalid Element Type!');
    }
    this.initialize.bind(this)(elementType);
    if (parent){
      this.appendTo(parent,false);
    }
    this.type = elementType;
    if (validRenderPrimitives.includes(typeof render) || render instanceof HTMLElement || render instanceof Bristle || render === null || render === undefined) {
      this.render(render);
    } else if (typeof render === 'function') {
      render.bind(this)(this.render);
    } else {
      throw this.error('Invalid Render Value.');
    }
  }
  initialize(value){
    if (typeof value === 'string') {
      if (value.length <= 0) {
        throw this.error('Element Type too short!');
      }
      this.element = document.createElement(value);
    } else if (typeof value === 'object') {
      if (!value.hasOwnProperty('type') || typeof value.type !=='string' || value.type.length <= 0) {
        throw this.error('Element Object missing/invalid type key');
      }
      this.element = document.createElement(value.type);
      var options = Object.assign({},value);
      if (options.hasOwnProperty('class')){
        options.class.split(' ').forEach(class=>{
          this.addClass(class);
        })
      }
      delete options.class;
      delete options.type;
      this.setAttributes(options);
    }
  }

  parentRendered(){
    this.render();
  }
  addClass(string){
    if (typeof string !== 'string' || string.length <= 0) {
      throw this.error('Invalid Class Name!');
    }
    if (!this.classes.includes(string)) {
      this.classes.push(string);
      this.render();
    }
  }
  setAttributes(options){
    Object.entries(options).forEach(optionPair=>{
      if (renameAttributes.hasOwnProperty(optionPair[0].toLowerCase())) {
        this.element.setAttribute(renameAttributes[optionPair[0].toLowerCase()],optionPair[1]);
      } else {
        this.element.setAttribute(optionPair[0],optionPair[1]);
      }
    });
  }
  render(value){
    var out = value || this.value
    if (Array.isArray(out)) {
      var output = [];
      out.forEach(element=>{
        if (element instanceof HTMLElement){
          this.children.push(element);
          this.element.appendChild(HTMLElement);
        } else if (validRenderPrimitives.includes(typeof element)){
          output.push(element);
        }
      });
      if (output.length > 0) {
        this.element.textContent = output.join('');
      }
    } else if (value instanceof Bristle){
      this.element.appendChild(value.element);
      value.parent = this.element;
      this.addChild(value);
    } else if (value instanceof HTMLElement){
      this.element.appendChild(element.cloneNode(true));
    } else {
      if (value !== null && value !== undefined && validRenderPrimitives.includes(typeof value)) {
        this.value = value;
      }
      if (this.hasOwnProperty('parent') && validRenderPrimitives.includes(typeof this.value)){
        this.element.textContent = this.value;
      }
    }
    this.children.forEach(child=>{
      if (child instanceof Bristle) {
        child.parentRendered();
      } else if (child instanceof HTMLElement) {
        this.element.appendChild(child);
      }
    });
    if (this.classes.length > 0) {
      this.element.className = this.classes.join(' ');
    }
  }
  appendTo(element,rerender=true){
    if (element instanceof HTMLElement) {
      this.parent = element;
    } else if (element instanceof Bristle) {
      this.parent = element.element;
      if (!element.children.includes(this)){
        element.children.push(this);
      }
    } else {
      throw this.error('Invalid Parent to Append To!');
    }
    this.parent.appendChild(this.element);
    if (rerender === true) {
      this.render();
    }
    this.children.forEach(element=>{
      if (element instanceof Bristle) {
        element.parentAppended();
      }
    });
  }
  onEvent(eventName,functionIn){
    if (typeof eventName !== 'string' || eventName.length <= 0) {
      throw this.error('Invalid Event name!');
    }
    if (typeof functionIn !=='function') {
      throw this.error('Invalid Function Input');
    }
    this.element.addEventListener(eventName,functionIn);
  }
  parentAppended(){
    this.parent.appendChild(this.element);
    this.children.forEach(child=>{
      if (child instanceof Bristle){
        child.parentAppended();
      }
    });
  }
  remove(){
    if (this.hasOwnProperty('parent')) {
      this.parent.removeChild(this.element);
    }
  }
  error(message){
    return new Error('BRISTLE ERROR: '+message);
  }
}
module.exports = Bristle;
