import Bristle from 'bristlejs';
import methods from './documentation/methods';

var docs = new Bristle({type:'div',class:'documentation'});
new Bristle({type:'h1',class:'title'},'Documentation',docs);
methods.appendTo(docs);

export default docs;
