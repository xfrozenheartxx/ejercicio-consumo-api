// test data
const fakeData=[
    {
        quote_id: 1,
        quote:"Do elit fugiat cupidatat dolor.",
        author: "Nombre de autor/a 1"
    },
    {
        quote_id: 2,
        quote:"Duis sint officia aliquip aute occaecat nulla cupidatat fugiat velit est pariatur amet.",
        author: "Nombre de autor/a 2"
    },
    {
        quote_id: 3,
        quote:"Laboris eu anim elit id proident enim incididunt reprehenderit duis.",
        author: "Nombre de autor/a 3"
    },
    {
        quote_id: 4,
        quote:"Ad enim est occaecat eu culpa eiusmod amet laborum proident dolore irure.",
        author: "Nombre de autor/a 4"
    },
    {
        quote_id: 5,
        quote:"Pariatur anim qui tempor ea occaecat irure et consectetur ullamco aliqua dolor.",
        author: "Nombre de autor/a 5"
    },
]

// obtain data

function getData(displayFunction){

    //enviar solocitud a API
    const request= fetch("https://breakingbadapi.com/api/quotes")

    request.then(function(response){
     
        response.json().then(function(data){

            console.log("data", data)
            displayFunction(data)
        })


    })

    console.log("request", request)
}

// format data

function formatQuote(quote){

    const formattedQuote={
        text: quote.quote,
        author: quote.author,
        id: quote.quote_id
    }
    return formattedQuote
}

//display on screen 

function createQuote (quote){

    const newQuote = document.createElement("blockquote")

    const text = document.createElement("p")
    const author = document.createElement("p")

    text.classList.add("text")
    author.classList.add("author")

    text.innerHTML = quote.text
    author.innerHTML = quote.author

    newQuote.append(text)
    newQuote.append(author)

    newQuote.setAttribute("data-id", quote.id)

    return newQuote
}

function displayQuote(quote){

    const container =document.querySelector("#information")

    const newQuote= createQuote(quote)

    container.append(newQuote)

}


function displayQuotes(quotes){

    const formattedQuotes= quotes.map(formatQuote)

    formattedQuotes.forEach(displayQuote)
}

function getAndDisplayQuotes(){
    getData(displayQuotes)


}

getAndDisplayQuotes()

console.log("Consumo API")