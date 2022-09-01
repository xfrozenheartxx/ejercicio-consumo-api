// test data
/*
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

    
] */


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

//interaction setup

function setupInteraction (element){

    element.addEventListener("click",function(event){
    
        const el = event.target
        console.log(event.target.getAttribute("data-id"))
    })
}

function displayQuote(quote){

    const container =document.querySelector("#information")

    const newQuote= createQuote(quote)
    setupInteraction(newQuote)

    container.append(newQuote)

}


function displayQuotes(quotes){

    const formattedQuotes= quotes.map(formatQuote)

    formattedQuotes.forEach(displayQuote)
}

function getAndDisplayQuotes(){
    getData("quotes", displayQuotes)


}

getAndDisplayQuotes()

console.log("Consumo API")