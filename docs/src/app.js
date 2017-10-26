import Bristle from 'bristlejs';
import header from './header';
import content from './content';
import footer from './footer';
import './css/app.css';

const App = Bristle({type:'div',id:'app'});
header.appendTo(App);
content.appendTo(App);
footer.appendTo(App);
export default App;
