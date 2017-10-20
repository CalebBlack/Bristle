const validRenderPrimitives = ['string','boolean','number'];
class Bristle {
  constructor(elementType,render,parent){
    this.value = null;
    this.render = this.render.bind(this);
    this.appendTo = this.appendTo.bind(this);
    this.remove.bind(this);
    this.setAttributes = this.setAttributes.bind(this);
    if (typeof elementType !== 'string' && typeof elementType !=='object'){
      throw this.error('Invalid Element Type!');
    }
    this.element = this.initialize(elementType);
    if (parent){
      this.appendTo(parent,false);
    }
    this.type = elementType;
    if (validRenderPrimitives.includes(typeof render) || render instanceof Bristle || render === null || render === undefined) {
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
      return document.createElement(value);
    } else if (typeof value === 'object') {
      if (!value.hasOwnProperty('type') || typeof value.type !=='string' || value.type.length <= 0) {
        throw this.error('Element Object missing/invalid type key');
      }
      var element = document.createElement(value.type);
      var options = Object.assign({},value);
      delete options.type;
      this.setAttributes(options);
    }
  }
  setAttributes(options){
    Object.entries(options).forEach(optionPair=>{
      this.element.setAttribute(optionPair[0],optionPair[1]);
    });
  }
  render(value){
    if (value instanceof Bristle){
      this.element.appendChild(value);
      value.parent = this.element;
    } else {
      if (value !== null) {
        this.value = value;
      }
      if (this.hasOwnProperty('parent') && validRenderPrimitives.includes(typeof this.value)){
        this.element.innerHTML = this.value;
      }
    }
  }
  appendTo(element,rerender=true){
    if (element instanceof HTMLElement) {
      this.parent = element;
    } else if (element instanceof Bristle) {
      this.parent = element.element;
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
