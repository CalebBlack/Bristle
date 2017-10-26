import Bristle from 'bristlejs';
function arrayToList(array){
  var ul = Bristle('ul');
  array.forEach(value=>{
    let li = Bristle('li',null,ul);
    Bristle('p',value,li);
  });
  return ul;
}
export default arrayToList;
