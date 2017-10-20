class Bristle {
  constructor(elementType,render){
    if (typeof elementType !=='string' || elementType.length <= 0){
      throw this.error('Invalid Element Type!');
    }
    console.log(render);
    if (typeof render === 'string' || typeof render === 'number' || typeof render === 'boolean') {
      this.render(render);
    } else if (typeof render === 'function') {
      this.renderMethod = render;
      this.renderMethod.bind(this);
      this.value = null;
    } else if (typeof render === 'null' || typeof render === 'undefined'){
      this.value = undefined;
    } else if (render instanceof Bristle){
      this.render(render);
      this.value = null;
    } else {
      throw this.error('Invalid Render Type');
    }
    this.type = elementType;
    this.render = this.render.bind(this);
  }
  render(value){
    if (value){

    }
  }
  error(message){
    return new Error('BRISTLE ERROR: '+message);
  }
}

module.exports = Bristle;
