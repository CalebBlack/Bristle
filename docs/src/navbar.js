import Bristle from 'bristlejs';
import './css/navbar.css';

var nav = Bristle('nav');
var ul = Bristle('ul',null,nav);

Bristle({type:'a',href:'/BristleJS/'},'Home',Bristle("li",null,ul));
Bristle({type:'a',href:'/BristleJS/documentation'},'Documentation',Bristle("li",null,ul));
Bristle({type:'a',href:'https://github.com/CalebBlack/BristleJS'},'Contribute',Bristle("li",null,ul));

export default nav;
