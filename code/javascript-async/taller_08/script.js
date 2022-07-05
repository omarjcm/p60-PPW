const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'

function fechData(url_api, fn) {
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', url_api, true)
    xmlhttp.onreadystatechange = function(e) {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                fn(null, JSON.parse(xmlhttp.responseText))
            } else {
                const error = new Error('[error] - ' + url_api)
                return fn(error, null)
            }
        }
    }
    xmlhttp.send()
}

// Gestionar el asincronismo.
const invocacionSincronica = function(error, dato) {
    if (error)
        return console.log( error )
    
    console.log( dato.info.count )

    fechData( API + dato.results[0].id, function(error2, dato2) {
        if (error2)
            return console.log( error2 )
    
        console.log( dato2.id + '-' + dato2.name )

        fechData( API + dato.results[1].id, function(error3, dato3) {
            if (error3)
                return console.log( error3 )
        
            console.log( dato3.id + '-' + dato3.name )
    
            fechData( API + dato.results[2].id, function(error4, dato4) {
                if (error4)
                    return console.log( error4 )
            
                console.log( dato4.id + '-' + dato4.name )
                fechData( API + dato.results[3].id, function(error5, dato5) {
                    if (error5)
                        return console.log( error5 )
                
                    console.log( dato5.id + '-' + dato5.name )
                })
            })
        })
    })
}

// Aqui no se gestiona el asincronismo.
const invocacionAsincrona = function(error, dato) {
    if (error)
        return console.log( error )
    
    console.log( dato.info.count )

    for (let i=1; i<=10; i++) {
        fechData(API + dato.results[i].id, function(error2, dato2) {
            if (error2) {
                return console.error( error2 )
            }
            console.log( dato2.id + '-' + dato2.name )
        })
    }
}

fechData(API, invocacionSincronica)

