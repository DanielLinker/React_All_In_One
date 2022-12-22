type LocalCityType = {
    cityTitle: string
    countryTitle: string
}

type Techtype = {
    id: number
    title: string
}

type AdresseType = {
    streetTitle: string
    city: LocalCityType
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adresse: AdresseType
    technologies: Array<Techtype>
}

const student: StudentType = {
    id: 1,
    name: 'Daniel',
    age: 37,
    isActive: false,
    adresse: {
        streetTitle: 'Staigstr.4',
        city: {
            cityTitle: 'Pforzheim',
            countryTitle: 'Germany'
        }
    },
    technologies: [
        {id: 1, title: 'HTML'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'REACT'},
    ]
}


console.log(student.adresse.city.countryTitle)