import {data} from "./data-source.js";

export function addPage(element) {
    const createPage = (count) => {

    }

}

export function addFolder() {
    const addFolderButton = document.querySelector('#add-folder')
    const folderDialog = document.createElement('dialog');
    folderDialog.classList.add("bg-white", "w-[400px]", "h-[400px]", "relative");
    const inputField = document.createElement('input')

    folderDialog.innerHTML = `<div class="flex items-center justify-between w-full mb-4">
<h2 class="font-semibold text-slate-900 ">New Folder</h2>
            <button
            type="button"
            id="close-folder-dialog"
            class="hover:border-slate-500 hover:border-solid hover:bg-white hover:text-slate-500 group flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium p-2"
            >
            Close
            </button>
</div>
<div class="absolute bottom-10  right-5 left-5 flex justify-center">
  <button
  id="create-folder-button"
  class="h-10 px-6 font-semibold rounded-md bg-slate-900 text-white w-full" type="submit"
  >
          Create
  </button>
</div>
`
    inputField.classList.add(
        'focus:ring-2', 'focus:ring-slate-500', 'focus:outline-none',
        'appearance-none', 'w-full', 'text-sm', 'leading-6', 'text-slate-900',
        'placeholder-slate-400', 'rounded-md', 'py-2', 'pl-10', 'ring-1',
        'ring-slate-200', 'shadow-sm'
    )
    inputField.placeholder = 'Folder Name ...';
    folderDialog.appendChild(inputField);
    document.querySelector('#app').appendChild(folderDialog)
    addFolderButton.addEventListener('click', () => {
        folderDialog.showModal();
        console.log('clicked')
    })
    document.querySelector('#close-folder-dialog').addEventListener('click', () => {
        folderDialog.close()
    })
    document.querySelector('#create-folder-button').addEventListener('click', () => {
        console.log(inputField.value)
        if (inputField.value) {
            inputField.value = ''
            folderDialog.close()
        } else {
            alert("Folder name missing");
        }

    })
}


export function addBook() {
    const addFolderButton = document.querySelector('#add-book')
    const bookDialog = document.createElement('dialog');
    bookDialog.classList.add("bg-white", "w-[400px]", "h-[400px]", "relative");
    const nameField = document.createElement('input')

    bookDialog.innerHTML = `<div class="flex items-center justify-between w-full mb-4">
<h2 class="font-semibold text-slate-900 ">New Book</h2>
            <button
            type="button"
            id="close-book-dialog"
            class="hover:border-slate-500 hover:border-solid hover:bg-white hover:text-slate-500 group flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium p-2"
            >
            Close
            </button>
</div>
<div class="absolute bottom-10  right-5 left-5 flex justify-center">
  <button
  id="create-book-button"
  class="h-10 px-6 font-semibold rounded-md bg-slate-900 text-white w-full" type="submit"
  >
          Create
  </button>
</div>
`
    nameField.classList.add(
        'focus:ring-2', 'focus:ring-slate-500', 'focus:outline-none',
        'appearance-none', 'w-full', 'text-sm', 'leading-6', 'text-slate-900',
        'placeholder-slate-400', 'rounded-md', 'py-2', 'pl-10', 'ring-1',
        'ring-slate-200', 'shadow-sm'
    )
    nameField.placeholder = 'Book Name ...';
    bookDialog.appendChild(nameField);
    document.querySelector('#app').appendChild(bookDialog)
    addFolderButton.addEventListener('click', () => {
        bookDialog.showModal();
        console.log('clicked')
    })
    document.querySelector('#close-book-dialog').addEventListener('click', () => {
        bookDialog.close()
    })
    document.querySelector('#create-book-button').addEventListener('click', () => {
        console.log(nameField.value)
        if (nameField.value) {
            nameField.value = ''
            bookDialog.close()
        } else {
            alert("Folder name missing");
        }

    })
}


const createListItem = (data) => {
    let li = document.createElement('li');
    li.classList.add('bg-white', 'rounded', 'flex', 'justify-between', 'mx-5', 'py-2', 'px-5', 'border-solid', 'border-slate-300', 'border-b-[0.5px]')
    const iconNameDiv = document.createElement('div');
    iconNameDiv.classList.add('flex', 'gap-2')

    iconNameDiv.innerHTML = data.type === 'folder' ?
        `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/>
            </svg>` :
        `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
          <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/>
         </svg>`;
    const nameElement = document.createElement('span');
    nameElement.textContent = data.name;
    iconNameDiv.appendChild(nameElement)
    const countElement = document.createElement('span')
    countElement.textContent = data.items + `${data.type === 'folder' ? ' items' : ' pages'}` ;

    li.appendChild(iconNameDiv)
    li.appendChild(countElement)

    return li;
}

export function renderFolders() {
    let folderList = document.createElement('ul');
    document.querySelector('#app').appendChild(folderList)
    data.forEach(el => {
        const li = createListItem(el)
        folderList.appendChild(li)
    })
}
