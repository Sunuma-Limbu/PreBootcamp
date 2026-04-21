// YOUR CODE BELOW

const whosASpecial = (pets) => {
    let result ='';

    pets.forEach(pet=>{
        result += `${pet.name} the ${pet.species} is very special! `;
    })

    return result.trim()
}

