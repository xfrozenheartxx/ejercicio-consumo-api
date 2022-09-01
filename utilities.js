const apiUrl = "https://breakingbadapi.com/api/"

// obtain data

function getData(endpoint, displayFunction){

    //enviar solocitud a API
    const request= fetch( apiUrl + endpoint)

    request.then(function(response){
     
        response.json().then(function(data){

            displayFunction(data)
        })


    })

    console.log("request", request)
}