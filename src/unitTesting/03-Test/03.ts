import {StudentType} from "../02-Test/02";


const sum = (a: number, b: number) => {
    return a * b;
}

export const addSkill = (T: StudentType, skill: string) => {
    T.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(T: StudentType) {
    T.isActive = true;
}