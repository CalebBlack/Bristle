import Bristle from 'bristlejs';
import BristleRouter from 'bristlerouter';
import home from './home';
import documentation from './documentation';
import './css/content.css';
import getQuery from './functions/getQuery';
import isAlphaNumeric from './functions/isalphanumeric';

const content = Bristle('main');

BristleRouter({'/BristleJS/':home,'/BristleJS/documentation':documentation}).appendTo(content);

let query = getQuery();
if (query.redirect){
  if (isAlphaNumeric(query.redirect)) {
    window.history.pushState(null, null, '/BristleJS/'+query.redirect);
  } else {
    window.history.pushState(null, null, '/BristleJS/');
  }
}

export default content;
