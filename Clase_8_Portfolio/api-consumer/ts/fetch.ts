// Base URL
const API_URL: string = "https://escom-frontend-course.herokuapp.com/students"

interface Student {
    id: string,
    name: string,
    description: string
};

// GET
const get = async ():Promise<Array<Student>> => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.log(error.message);
    }
}

// POST
const post = async ({name, description}) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ name, description })
        })
        const data = await response.json();
        return data.result;
    } catch (error) {
        console.log(error.message)
    }
}

// PUT
const put = async (student: Student) => {
    try {
        const response = await fetch(API_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(student)
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}

// DELETE
const erase = async (id:string) => {
    try {
        const response = await fetch(API_URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ id })
        })
        const data = await response.json()
    } catch (error) {
        console.log(error.message)
    }
}

export {Student, get, erase, put, post};