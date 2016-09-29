import fetch from 'isomorphic-fetch'
import getUrlParam from './getUrlParam'


export const sendMail = (fields) => {
    let url = "./sendmail.php"
    let data = new FormData()
    let productName = getUrlParam("name")
    let productNumber= getUrlParam("productnumber")

    fields.textsecound = fields.textsecound || ""
    fields.usertext    = fields.usertext || ""
    fields.logocheck   = fields.logocheck ? "Ja" : "Nein"
    fields.usertext    = fields.usertext.split("\n").join("<br/>")

    data.append("productname", productName)
    data.append("productnumber", productNumber)

    Object.keys(fields).forEach( key => data.append(key, fields[key]))

    fetch(url, {method: "POST", body: data})

    // send tracking event
    parent._gaq.push(["_trackEvent", "Produktkonfigurator", "Send", productName])

}