import Bristle from 'bristlejs';
import './css/navbar.css';

var nav = new Bristle('nav');
var ul = new Bristle('ul',null,nav);

new Bristle({type:'a',href:'/BristleJS/'},'Home',new Bristle("li",null,ul));
new Bristle({type:'a',href:'/BristleJS/documentation'},'Documentation',new Bristle("li",null,ul));
new Bristle({type:'a',href:'https://github.com/CalebBlack/BristleJS'},'Contribute',new Bristle("li",null,ul));

export default nav;
