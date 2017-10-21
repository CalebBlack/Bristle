import Bristle from 'bristlejs';
import BristleRouter from 'bristlerouter';
import home from './home';
import documentation from './documentation';
import './css/content.css';

const content = new Bristle('main');

BristleRouter({'/BristleJS/':home,'/BristleJS/documentation':documentation}).appendTo(content);

export default content;
