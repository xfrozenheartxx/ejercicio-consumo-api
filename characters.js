function formatCharacter(character){

    const formattedCharacter={
        image: character.image,
        name: character.name,
        nickname: character.nickname,
        id: character.character_id
    }
    return formattedCharacter
}

//display on screen 

function createCharacter (character){

    const newCharacter = document.createElement("blockcharacter")

    const text = document.createElement("p")
    const author = document.createElement("p")

    text.classList.add("text")
    author.classList.add("author")

    text.innerHTML = character.text
    author.innerHTML = character.author

    newCharacter.append(text)
    newCharacter.append(author)

    newCharacter.setAttribute("data-id", character.id)

    return newCharacter
}

//interaction setup

function setupInteraction (element){

    element.addEventListener("click",function(event){
    
        const el = event.target
        console.log(event.target.getAttribute("data-id"))
    })
}

function displayCharacter(character){

    const container =document.querySelector("#information")

    const newCharacter= createCharacter(character)
    setupInteraction(newCharacter)

    container.append(newCharacter)

}


function displayCharacters(characters){

    const formattedCharacters= characters.map(formatCharacter)

    formattedCharacters.forEach(displayCharacter)
}


function getAndDisplayCharacters(){

getData("characters", displayCharacters)
}

getAndDisplayCharacters()


console.log("Characters")

