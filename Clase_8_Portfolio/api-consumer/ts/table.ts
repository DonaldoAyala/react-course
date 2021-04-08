import {Student} from './fetch';

let counter = 0;

const showEntries = ( response: Array<Student> ) => {
    const table = document.querySelector('#students-table');
    table.innerHTML += response.map(generateEntry).join('');
}

const addEntry = ( student: Student ) => {
    const table = document.querySelector('#students-table');
    table.innerHTML += generateEntry(student);
}

const generateEntry = ({id, name, description}) => {
    return `
        <tr id="e${counter}" class="entry">
            <td class="id">${id}</td>
            <td class="name">${name}</td>
            <td class="description">
                <p>
                    ${description}
                </p>
            </td>
            <td class="actions">
                <button class="btn btn-success" data-toggle="modal" data-target="#edit-modal" onclick="setInformation('e${counter}')"><i class="fas fa-pencil-alt"></i></button>
                <button class="btn btn-danger" onclick="deleteElement('e${counter++}')"><i class="fas fa-trash-alt"></i></button>
            </td>
        </tr>
    `;
}

const getStudent = (idTable: string): Student => {
    const idText = document.querySelector(`#${idTable} > td.id`).innerText;
    const name = document.querySelector(`#${idTable} > td.name`).innerText;
    const description = document.querySelector(`#${idTable} > td.description`).innerText;
    return {id: idText, name: name, description: description};
}

const setStudent = (idTable: string, student: Student): void=> {
    console.log(idTable);
    document.querySelector(`#${idTable} > td.id`).innerText = student.id;
    document.querySelector(`#${idTable} > td.name`).innerText = student.name;
    document.querySelector(`#${idTable} > td.description`).innerText = student.description;
}

export {showEntries, getStudent, setStudent, addEntry};