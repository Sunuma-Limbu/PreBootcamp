// YOUR CODE BELOW

const getDogBreeder = (defaultName, defaultAge) => {
    const dogBreeder = (name, age) => {
        if (name === undefined && age === undefined) {
            return { name: defaultName, age: defaultAge };
        }

        if (age === undefined) {
            if(typeof name === 'number'){
                return {name: defaultName, age: name}
            } else {
                return {name: name, age: defaultAge}
            }
        }

        return {
            name: name,
            age: age
        }
    }
    return dogBreeder;
}