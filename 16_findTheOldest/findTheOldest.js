function getAge(person){
    let currentYear = new Date().getFullYear();
    let age = 0;
    if (!person.yearOfDeath){
        age = currentYear - person.yearOfBirth;
    }
    else{
        age = person.yearOfDeath - person.yearOfBirth;
    }
    console.log(age);
    return age;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        return getAge(person) > getAge(oldest) ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
