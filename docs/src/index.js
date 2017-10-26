import App from './app';
import getQuery from './functions/getquery';
import isAlphaNumeric from './functions/isalphanumeric';


window.addEventListener('load',function(){
  App.appendTo(document.body);
  let query = getQuery();
  if (query.redirect){
    if (isAlphaNumeric(query.redirect)) {
      window.history.pushState(null, null, '/BristleJS/'+query.redirect);
    } else {
      console.log('invalid query',query.redirect);
      window.history.pushState(null, null, '/BristleJS/');
    }
  }
});
