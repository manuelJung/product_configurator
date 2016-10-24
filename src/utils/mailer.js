import fetch from 'isomorphic-fetch'
import config from './config'


export const sendMail = (fields) => {
    let url = config.postUrl
    let data = new FormData()
    let productName = config.productName
    let productNumber= config.productNumber

    fields.textsecound = fields.textsecound || ""
    fields.usertext    = fields.usertext || ""
    fields.logocheck   = fields.logocheck ? "Ja" : "Nein"
    fields.usertext    = fields.usertext.split("\n").join("<br/>")
    fields.address     = fields.address || ""
    fields.city        = fields.city || ""
    fields.zipcode     = fields.zipcode || ""

    data.append("productname", productName)
    data.append("productnumber", productNumber)

    Object.keys(fields).forEach( key => data.append(key, fields[key]))

    if(__PROD__){
        fetch(url, {method: "POST", body: data})
    }else {
        console.log('send ('+url+'):', data)
        console.log('fields:', fields)
    }

    // send tracking event
    if(__PROD__){
        if(parent && parent._gaq) parent._gaq.push(["_trackEvent", "Produktkonfigurator", "Send", productName])
    }

}