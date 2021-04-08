import {menuToggle} from './nav-bar';
import {Student, get, erase} from './fetch';
import {setInformation, resetModalForm, saveChanges, createStudent, deleteElement} from './edit';
import {showEntries} from './table';


// Moving the functions to the global scope (Thanks parcel)
window.deleteElement = deleteElement;
window.showEntries = showEntries;
window.setInformation = setInformation;
window.resetModalForm = resetModalForm;
window.saveChanges = saveChanges;
window.createStudent = createStudent;
window.menuToggle = menuToggle;

get().then(showEntries);