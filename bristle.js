const validRenderPrimitives = ['string','boolean','number'];
class Bristle {
  constructor(elementType,render,parent){
    this.value = null;
    this.render = this.render.bind(this);
    this.appendTo = this.appendTo.bind(this);
    this.remove.bind(this);
    if (typeof elementType !=='string' || elementType.length <= 0){
      throw this.error('Invalid Element Type!');
    }
    this.element = document.createElement(elementType);
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
