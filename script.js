const title=document.querySelector('input[name="title"]')
const description=document.querySelector('textarea')
const submitBtn=document.querySelector('#submit')
const noteslist=document.querySelector('#displayNotes')

submitBtn.addEventListener('click',()=>{
    event.preventDefault()
    const currentTitle=title.value
    const curretdescription=description.value

    const newNote=document.createElement('div')
    newNote.className ="notes"

    const newTitle=document.createElement('h3')
    const newdesc=document.createElement('p')

    newTitle.className='title'
    newTitle.innerText=currentTitle

    newdesc.className='description'
    newdesc.innerText=curretdescription

    newNote.appendChild(newTitle)
    newNote.append(newdesc)

    noteslist.append(newNote)
    
    newNote.addEventListener('click',()=>{
        newNote.remove()
    })
})
