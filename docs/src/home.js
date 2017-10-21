import Bristle from 'bristlejs';
import arrayToList from './functions/arraytolist';
import './css/home.css';

var home = new Bristle({type:'div',class:'home'});

const pros = ['Lightweight','Less Methods, less obtrusive.'];
const cons = ['Small/new, less mature than other libraries.'];

new Bristle('h3','Pros:',home);
new Bristle('p',"What's to love about Bristle?",home);
arrayToList(pros).appendTo(home);
new Bristle('h3','Cons:',home);
new Bristle('p','Why you might not choose Bristle',home);
arrayToList(cons).appendTo(home);

export default home;
