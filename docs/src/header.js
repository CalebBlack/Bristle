import Bristle from 'bristlejs';
import Nav from './navbar';
import './css/header.css';

var header = new Bristle('header');

new Bristle({type:'a',href:'/'},'BristleJS',new Bristle('h1',null,header));
Nav.appendTo(header);
export default header;
