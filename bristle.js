class Bristle {
  constructor(elementType,render){
    this.render = this.render.bind(this);
    if (typeof elementType !=='string' || elementType.length <= 0){
      throw this.error('Invalid Element Type!');
    }
    this.type = elementType;
    if (typeof render === 'string' || typeof render === 'number' || typeof render === 'boolean' || render instanceof Bristle || typeof render === 'null' || typeof render === 'undefined') {
      this.render(render);
    } else if (typeof render === 'function') {
      render.bind(this)(this.render);
    } else {
      throw this.error('Invalid Render Value.');
    }
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
