import {getStudent, setStudent, addEntry} from './table.ts';
import {put, post, erase} from './fetch';

const setInformation = (id) => {
    // Get values
    const student = getStudent(id);
    // const idText = document.querySelector(`#${id} > td.id`).innerText;
    // const name = document.querySelector(`#${id} > td.name`).innerText;
    // const description = document.querySelector(`#${id} > td.description`).innerText;

    // Set modal form values
    document.querySelector(`#element-id`).value = id;
    document.querySelector(`#id-edit`).value = student.id;
    document.querySelector(`#name-edit`).value = student.name;
    document.querySelector(`#description-edit`).value = student.description;
}

const resetModalForm = () => {
    document.querySelector(`#element-id`).value = '';
    document.querySelector(`#id-edit`).value = '';
    document.querySelector(`#name-edit`).value = '';
    document.querySelector(`#description-edit`).value = '';
    document.querySelector(`#name-create`).value = '';
    document.querySelector(`#description-create`).value = '';
}

const saveChanges = () => {
    const idTable = document.querySelector(`#element-id`).value;
    const idStudent = document.querySelector(`#id-edit`).value;
    const name = document.querySelector(`#name-edit`).value;
    const description = document.querySelector(`#description-edit`).value;
    const student = {id: idStudent, name: name, description: description};
    put(student);
    setStudent(idTable, student);
}

const createStudent = () => {
    const name = document.querySelector(`#name-create`).value;
    const description = document.querySelector(`#description-create`).value;
    const student = {id: null, name: name, description: description};
    post(student).then(addEntry);
}

const deleteElement = (idText) => {
    const id = document.querySelector(`#${idText} > td.id`).innerText;
    const row = document.getElementById(idText);
    row.parentNode.removeChild(row);
    erase(id);
}

export {setInformation, resetModalForm, saveChanges, createStudent, deleteElement};