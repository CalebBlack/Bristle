import Bristle from 'bristlejs';
import arrayToList from './functions/arraytolist';
import './css/home.css';

var home = Bristle({type:'div',class:'home'});

const pros = ['Lightweight','Less Methods, less obtrusive.'];
const cons = ['Small/new, less mature than other libraries.'];

Bristle('h3','Pros:',home);
Bristle('p',"What's to love about Bristle?",home);
arrayToList(pros).appendTo(home);
Bristle('h3','Cons:',home);
Bristle('p','Why you might not choose Bristle',home);
arrayToList(cons).appendTo(home);

export default home;
