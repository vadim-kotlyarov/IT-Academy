interface User {

    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number

}

interface Admin {

    name: string,
    age: number,
    role: string

}

interface Manipulator {

    set(key: string, value: any): {},
    get(key: string): any,
    delete(key: string): {},
    getObject(): {}

}

export { User, Admin, Manipulator }