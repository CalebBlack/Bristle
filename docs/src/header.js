import Bristle from 'bristlejs';
import Nav from './navbar';
import './css/header.css';

var header = Bristle('header');

Bristle({type:'a',href:'/BristleJS/'},'BristleJS',Bristle('h1',null,header));
Nav.appendTo(header);
export default header;
