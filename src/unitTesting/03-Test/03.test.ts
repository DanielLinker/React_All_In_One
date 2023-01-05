import {StudentType} from "../02-Test/02";
import {addSkill, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
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
})


test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, 'JS')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('JS')
    expect(student.technologies[3].id).toBeDefined()
})

test("student is active", () => {
    expect(student.isActive).toBe(false)
    makeStudentActive(student)
    expect(student.isActive).toBe(true);
})