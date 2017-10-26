import Bristle from 'bristlejs';
import methods from './documentation/methods';

var docs = Bristle({type:'div',class:'documentation'});
Bristle({type:'h1',class:'title'},'Documentation',docs);
methods.appendTo(docs);

export default docs;
