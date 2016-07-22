export const sendMail = (target, cc, header, body) => {
    var link = "mailto:"+target
             + cc ? "?cc="+cc : ""
             + "&subject=" + escape(header)
             + "&body=" + escape(body)
    
    window.location.href = link
}