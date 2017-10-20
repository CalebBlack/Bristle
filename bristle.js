const validRenderPrimitives = ['string','boolean','number']
class Bristle {
  constructor(elementType,render){
    this.value = null;
    this.render = this.render.bind(this);
    this.appendTo = this.appendTo.bind(this);
    if (typeof elementType !=='string' || elementType.length <= 0){
      throw this.error('Invalid Element Type!');
    }
    this.element = document.createElement(elementType);
    this.type = elementType;
    if (validRenderPrimitives.includes(typeof render) || render instanceof Bristle || render === null || render === undefined) {
      this.render(render);
    } else if (typeof render === 'function') {
      this.render();
      render.bind(this)(this.render);
    } else {
      throw this.error('Invalid Render Value.');
    }
  }
  render(value){
    if (value !== null){
      this.value = value;
    }
    if (this.hasOwnProperty('parent') && validRenderPrimitives.includes(typeof this.value)){
      this.element.innerHTML = this.value;
    }
  }
  appendTo(element,rerender=true){
    if (!element instanceof HTMLElement) {
      throw this.error('Invalid DOM Element to Append To!');
    }
    this.parent = element;
    this.parent.appendChild(this.element);
    if (rerender === true) {
      this.render();
    }
  }
  remove(){

  }
  error(message){
    return new Error('BRISTLE ERROR: '+message);
  }
}
rawUpdate(bristle,value){

}
module.exports = Bristle;
