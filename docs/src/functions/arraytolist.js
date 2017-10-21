import Bristle from 'bristlejs';
function arrayToList(array){
  var ul = new Bristle('ul');
  array.forEach(value=>{
    let li = new Bristle('li',null,ul);
    new Bristle('p',value,li);
  });
  return ul;
}
export default arrayToList;
