import fetch from 'isomorphic-fetch'
import getUrlParam from './getUrlParam'


export const sendMail = (fields) => {
    //let url = "http://testcejde.emmos.de/static/emtools/einstickung/sendmail.php"
    let url = "./sendmail.php"
    let data = new FormData("form")
    let productName = getUrlParam("name")
    let productNumber= getUrlParam("productnumber")

    fields.textsecound = fields.textsecound || ""
    fields.usertext    = fields.usertext || ""
    fields.logocheck   = fields.logocheck ? "Ja" : "Nein"
    fields.usertext    = fields.usertext.split("\n").joint("<br/>")

    data.append("productname", productName)
    data.append("productnumber", productNumber)

    console.log(fields)
    Object.keys(fields).forEach( key => data.append(key, fields[key]))

    fetch(url, {method: "POST", body: data, mode: "no-cors"})
        .then(function(res) {
            
            return res.text();
        }).then(function(body) {
            
        });
}