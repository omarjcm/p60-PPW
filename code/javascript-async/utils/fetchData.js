const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xmlhttp = new XMLHttpRequest()
        xmlhttp.open('GET', url_api, true)
        xmlhttp.onreadystatechange = function(e) {
            if (xmlhttp.readyState == 4) {
                (xmlhttp.status == 200) 
                    ? resolve(JSON.parse(xmlhttp.responseText)) 
                    : reject(new Error('[error] - ' + url_api))
            }
        }
        xmlhttp.send()    
    }) 
}