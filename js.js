const addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', addBookToLibrary );
     
const newBookBtn = document.querySelector('#newBtn');
newBookBtn.addEventListener('click', () => popUpForm.style.display = 'block');

const popUpForm = document.getElementById('popUp');
const closePopUp = document.getElementsByTagName('span')[0];
closePopUp.addEventListener('click', () => popUpForm.style.display = 'none');

let names = document.getElementById("name").value;
let pages = document.getElementById("pages").value;
let statuss = document.getElementById("statuss");


let myLibrary = [];
let librarylength = myLibrary.length
let newBook;




class Book {
    constructor(names, pages, statuss) {
        this.names = names = document.getElementById("name").value
        this.pages = pages = document.getElementById("pages").value
        this.statuss = statuss = document.getElementById("statuss")
    }
}




function addBookToLibrary(event) {
    event.preventDefault()
    
    newBook = new Book (names, pages, statuss)
    myLibrary.push(newBook)
    setData()
    console.log(myLibrary)
    console.log(newBook.names)
    console.log(JSON.stringify(newBook))
    console.log(statuss.value)
    setData()
    render()
}



function render() {
    const display = document.getElementById('books');
    const books = document.querySelectorAll('.book');
    books.forEach(book => display.removeChild(book))

    for (let i=0; i<myLibrary.length; i++){
        gooofyahh(myLibrary[i])
    }

}

function gooofyahh(item) {
    const books = document.getElementById("books");
    const book = document.createElement("div")
    const nam = document.createElement('div');
    const pag = document.createElement('div');
    const stat = document.createElement('div');
    const del = document.createElement('button')

    book.classList.add('book');
    book.setAttribute("id", myLibrary.indexOf(item));

    nam.textContent = item.names;
    nam.classList.add('name');
    book.appendChild(nam);
    
    pag.textContent = item.pages;
    pag.classList.add('pages');
    book.appendChild(pag);


    stat.classList.add("status");
    book.appendChild(stat);
    if(item.statuss.checked == false){
        stat.textContent = 'not read';
        stat.style.backgroundColor = '#ff0000';
    } else {
        stat.textContent = 'read';
        stat.style.backgroundColor = '#63da63';
    }

    del.textContent = 'remove';
    del.setAttribute("id", 'delBtn');
    book.appendChild(del);

    books.appendChild(book);

    del.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(item),1);
        setData();
        render()
    })


    stat.addEventListener('click', () => {
        item.statuss = !item.statuss
        setData();
        render();
    })
    
    
}



function setData() {
    localStorage.setItem(myLibrary, JSON.stringify(myLibrary));
}
function restore() {
    if(!localStorage.myLibrary){
        render()
    } else {
        let objects = localStorage.getItem("myLibrary")
        objects =JSON.parse(objects)
        myLibrary = objects
        render()
    }
}
restore()