import Bristle from 'bristlejs';
import BristleRouter from 'bristlerouter';
import home from './home';
import documentation from './documentation';
import './css/content.css';
import getQuery from './functions/getQuery';

const content = Bristle('main');

BristleRouter({'/BristleJS/':home,'/BristleJS/documentation':documentation}).appendTo(content);

let query = getQuery();
if (query.redirect){
  window.history.pushState(null, null, '/BristleJS/'+query.redirect);
}

export default content;
