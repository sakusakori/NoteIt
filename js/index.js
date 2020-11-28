console.log('Dummy check it is working!')

//If users adds a note, add it to localStorage
showNotes();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');

    if(notes==null){
        notesObj=[];
    } else {
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = '';
    console.log(notesObj);
    showNotes();
});

function showNotes(){
    let notes = localStorage.getItem('notes');

    if(notes==null){
        notesObj=[];
    } else {
        notesObj=JSON.parse(notes);
    }
    let html='';
    notesObj.forEach(function(element,index){
        html+=`
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index+1}</h5>
                <p class="card-text">${element}</p>
                <button class="btn btn-danger" id="${index}" onclick="deleteNote(this.id)">DeleteIt</button>
            </div>
        </div>
        `
    });
    let notesElm = document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<p style="color: white; margin-top: 20px; font-size: 20px;">Hurray, All work done!</p>`;
    }

}

function deleteNote(index){
    console.log('delete', 'hi', index);
    console.log('Hi');
    let notes = localStorage.getItem("notes");
    
    console.log(notes);
    if(notes==null){
        notesObj=[];
    } else {
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
    let inputVal= search.value;
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        // console.log(element)
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt.innerText);
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        } else {
            element.style.display="none";
        }
    });
});