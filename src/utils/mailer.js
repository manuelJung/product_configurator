import fetch from 'isomorphic-fetch'
import getUrlParam from './getUrlParam'


export const sendMail = (fields) => {
    //let url = "http://testcejde.emmos.de/static/emtools/einstickung/sendmail.php"
    let url = "./sendmail.php"
    let data = new FormData("form")
    let productName = getUrlParam("name")
    let productNumber= getUrlParam("sku")

    data.append("productname", productName)
    data.append("productnumber", productNumber)

    Object.keys(fields).forEach( key => data.append(key, fields[key]))

    fetch(url, {method: "POST", body: data, mode: "no-cors"})
        .then(function(res) {
            console.log(res)
            return res.text();
        }).then(function(body) {
            console.log(body);
        });
}