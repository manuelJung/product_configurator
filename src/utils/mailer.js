import fetch from 'isomorphic-fetch'
import config from './config'


export const sendMail = (fields) => {
    let url = config.postUrl

    if(typeof FormData !== 'undefined'){

        let data = new FormData()
        let productName = config.productName
        let productNumber= config.productNumber

        fields.textsecound = fields.textsecound || ""
        fields.usertext    = fields.usertext || ""
        fields.logocheck   = fields.logocheck ? "Ja" : "Nein"
        fields.usertext    = fields.usertext
            ? fields.usertext.split("\n").join("<br/>")
            : ''
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

    // shitty ie8/9
    else {
        var $form = document.createElement('form')
            $form.name      = 'form'
            $form.method    = 'POST'
            $form.action    = url

        var $productnumber = document.createElement('input')
            $productnumber.type     = 'text'
            $productnumber.name     = 'productnumber'
            $productnumber.value    = config.productNumber
            $form.appendChild($productnumber)

        var $productname = document.createElement('input')
            $productname.type     = 'text'
            $productname.name     = 'productname'
            $productname.value    = config.productName
            $form.appendChild($productname)

        var $textfirst = document.createElement('input')
            $textfirst.type     = 'text'
            $textfirst.name     = 'textfirst'
            $textfirst.value    = fields.textfirst || ''
            $form.appendChild($textfirst)

        var $textsecound = document.createElement('input')
            $textsecound.type     = 'text'
            $textsecound.name     = 'textsecound'
            $textsecound.value    = fields.textsecound || ''
            $form.appendChild($textsecound)

        var $position = document.createElement('input')
            $position.type     = 'text'
            $position.name     = 'position'
            $position.value    = fields.position || ''
            $form.appendChild($position)

        var $font = document.createElement('input')
            $font.type     = 'text'
            $font.name     = 'font'
            $font.value    = fields.font || ''
            $form.appendChild($font)

        var $color = document.createElement('input')
            $color.type     = 'text'
            $color.name     = 'color'
            $color.value    = fields.color || ''
            $form.appendChild($color)

        var $fontsize = document.createElement('input')
            $fontsize.type     = 'text'
            $fontsize.name     = 'fontsize'
            $fontsize.value    = fields.fontsize || ''
            $form.appendChild($fontsize)

        var $firm = document.createElement('input')
            $firm.type     = 'text'
            $firm.name     = 'firm'
            $firm.value    = fields.firm || ''
            $form.appendChild($firm)

        var $name = document.createElement('input')
            $name.type     = 'text'
            $name.name     = 'name'
            $name.value    = fields.name || ''
            $form.appendChild($name)

        var $telefon = document.createElement('input')
            $telefon.type     = 'text'
            $telefon.name     = 'telefon'
            $telefon.value    = fields.telefon || ''
            $form.appendChild($telefon)

        var $email = document.createElement('input')
            $email.type     = 'text'
            $email.name     = 'email'
            $email.value    = fields.email || ''
            $form.appendChild($email)

        var $address = document.createElement('input')
            $address.type     = 'text'
            $address.name     = 'address'
            $address.value    = fields.address || ''
            $form.appendChild($address)

        var $zipcode = document.createElement('input')
            $zipcode.type     = 'text'
            $zipcode.name     = 'zipcode'
            $zipcode.value    = fields.zipcode || ''
            $form.appendChild($zipcode)

        var $city = document.createElement('input')
            $city.type     = 'text'
            $city.name     = 'city'
            $city.value    = fields.city || ''
            $form.appendChild($city)

        var $usertext = document.createElement('input')
            $usertext.type     = 'text'
            $usertext.name     = 'usertext'
            $usertext.value    = fields.usertext 
                ? fields.usertext.split("\n").join("<br/>") || ''
                : ''
            $form.appendChild($usertext)

        var $logocheck = document.createElement('input')
            $logocheck.type     = 'text'
            $logocheck.name     = 'logocheck'
            $logocheck.value    = fields.logocheck ? "Ja" : "Nein"
            $form.appendChild($logocheck)

        document.body.appendChild($form)
        $form.submit()

        // send tracking event
        if(__PROD__){
            if(parent && parent._gaq) parent._gaq.push(["_trackEvent", "Produktkonfigurator", "Send", productName])
        }
    }


}