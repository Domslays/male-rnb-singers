const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const singers = {
    'lucky daye': {
        'age': 36,
        'birthName': 'David Debrandon Brown',
        'birthDate': 'September 25, 1985',
        'birthLocation': ' New Orleans, LA' 
    },
    'arin ray': {
        'age': 26,
        'birthName': 'Arin Blake Ray',
        'birthDate': 'September 2, 1995',
        'birthLocation': ' Cincinnati, OH' 
    },
    'miguel': {
        'age': 36,
        'birthName': 'Miguel Jontel Pimentel', 
        'birthDate': ' October 23, 1985 ',
        'birthLocation': ' San Pedro, CA'
    },
    'the weeknd': {
        'age': 32,
        'birthName': 'Abel Makkonen Tesfaye',
        'birthDate': 'February 16, 1990',
        'birthLocation': ' Toronto, Canada'
    },
    'brent faiyaz': {
        'age': 26,
        'birthName': 'Christopher Brent Wood',
        'birthDate': 'September 19, 1995',
        'birthLocation': ' Columbia, MD'
    },
    'bryson tiller': {
        'age': 29,
        'birthName': 'Bryson Djuan Tiller',
        'birthDate': 'January 2, 1993',
        'birthLocation': 'Louisville, KY'
    },
    'chris brown': {
        'age': 33,
        'birthName': 'Christopher Maurice Brown',
        'birthDate': 'May 5, 1989',
        'birthLocation': ' Tappahannock, VA'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthDate': 'unknown',
        'birthLocation': 'unknown'
    }
 }
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const singerName = request.params.name.toLowerCase()
    if( singers[singerName] ){
        response.json(singers[singerName])
    }else{
        response.json(singers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on ${PORT}!`)
})

