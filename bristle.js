const validRenderPrimitives = ['string','boolean','number'];
const renameAttributes = {typeattribute:'type'};
class Bristle {
  constructor(elementType,render,parent){
    this.parentRendered = this.parentRendered.bind(this);
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
      delete options.type;
      this.setAttributes(options);
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
  parentRendered(){
    this.render();
  }
  render(value){
    if (Array.isArray(value)) {
      var output = [];
      value.forEach(element=>{
        switch(element) {
          case element instanceof HTMLElement:
            this.element.appendChild(element.cloneNode(true));
          case element instanceof Bristle:
            this.element.appendChild(element.element);
            element.parent = this.element;
            this.addChild(element);
          case validRenderPrimitives.includes(typeof element):
            output.push(element);
        }
      });
      if (output.length > 0) {
        this.element.innerHTML = output.join('');
      }
    } else if (value instanceof Bristle){
      this.element.appendChild(value.element);
      value.parent = this.element;
      this.addChild(value);
    } else if (value instanceof HTMLElement){
      this.element.appendChild(element.cloneNode(true));
    } else {
      if (value !== null && value !== undefined) {
        this.value = value;
      }
      if (this.hasOwnProperty('parent') && validRenderPrimitives.includes(typeof this.value)){
        this.element.innerHTML = this.value;
      }
    }
    this.children.forEach(child=>{
      if (child instanceof Bristle) {
        child.parentRendered();
      }
    })
  }
  appendTo(element,rerender=true){
    if (element instanceof HTMLElement) {
      this.parent = element;
    } else if (element instanceof Bristle) {
      this.parent = element.element;
      if (!this.parent.children.includes(this)){
        this.parent.children.push(this);
      }
    } else {
      throw this.error('Invalid Parent to Append To!');
    }
    console.log('appending',this.parent,this.element);
    this.parent.appendChild(this.element);
    if (rerender === true) {
      this.render();
    }
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
