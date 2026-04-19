// YOUR CODE BELOW

const cloneMachine = (animal) => {
    let clone = {
        name : animal.name + 'Clone',
        species : animal.species,
        offspring : []
    }

    animal.offspring.push(clone.name)

    return clone;
}

let dolly = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
}

cloneMachine(dolly)