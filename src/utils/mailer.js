import fetch from 'isomorphic-fetch'
import config from './config'


/** 
 * Gets an XMLHttpRequest. For Internet Explorer 6, attempts to use MSXML 6.0,
 * then falls back to MXSML 3.0.
 * Returns null if the object could not be created. 
 * @return {XMLHttpRequest or equivalent ActiveXObject} 
 */ 
function getXHR() { 
  if (window.XMLHttpRequest) {
    // Chrome, Firefox, IE7+, Opera, Safari
    return new XMLHttpRequest(); 
  } 
  // IE6
  try { 
    // The latest stable version. It has the best security, performance, 
    // reliability, and W3C conformance. Ships with Vista, and available 
    // with other OS's via downloads and updates. 
    return new ActiveXObject('MSXML2.XMLHTTP.6.0');
  } catch (e) { 
    try { 
      // The fallback.
      return new ActiveXObject('MSXML2.XMLHTTP.3.0');
    } catch (e) { 
      alert('This browser is not AJAX enabled.'); 
      return null;
    } 
  } 
}

export function sendForm(fields, url, cb){
    var xhr = getXHR()
    var message = ''

    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => cb(xhr.status, xhr.responseText)

    Object.keys(fields).forEach( key => { message += ("&"+key+"="+fields[key]) })
    message = message.slice( 1 )

    xhr.send(encodeURI(message))
}


export const sendMail = (fields, cb) => {

    fields.useragent = navigator.userAgent
    fields.logocheck = fields.logocheck ? "Ja" : "Nein"
    fields.productname = config.productName
    fields.productnumber = config.productNumber

    let url = config.postUrl

    if(!__PROD__){
      url = 'https://productkonfigurator-responseserver-manu-jung.c9users.io/sendmail.php'
    }


    sendForm(fields, url, (code, res) => {
        cb(code, res)
    })

    // send tracking event
    if(__PROD__){
        if(parent && parent._gaq) parent._gaq.push(["_trackEvent", "Produktkonfigurator", "Send", productName])
    }


}