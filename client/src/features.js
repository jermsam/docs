// import {swarm} from "./swarm.js";
import './components/input-element';
import './components/button-element';
import './components/dialog-element';

// const createListItem = (data) => {
//     let li = document.createElement('li');
//     li.classList.add('bg-white', 'rounded', 'flex', 'justify-between', 'mx-5', 'py-2', 'px-5', 'border-solid', 'border-slate-300', 'border-b-[0.5px]')
//     const iconNameDiv = document.createElement('div');
//     iconNameDiv.classList.add('flex', 'gap-2')
//
//     iconNameDiv.innerHTML = data.type === 'folder' ?
//         `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
//                 <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"/>
//             </svg>` :
//         `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
//           <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/>
//          </svg>`;
//     const nameElement = document.createElement('span');
//     nameElement.textContent = data.name;
//     iconNameDiv.appendChild(nameElement)
//     const countElement = document.createElement('span')
//     countElement.textContent = data.items + `${data.type === 'folder' ? ' items' : ' pages'}`;
//
//     li.appendChild(iconNameDiv)
//     li.appendChild(countElement)
//
//     return li;
// }
//
// export async function renderFolders() {
//     let folderList = document.createElement('ul');
//     document.querySelector('#app').appendChild(folderList)
//     // Iterate through data as it's loaded (streaming)
//     /* Some loop
//     {
//     const li = createListItem(el)
//     folderList.appendChild(li)
//
//      */
// }

document.addEventListener('DOMContentLoaded', () => {
    console.log('content ready')
    window.handleFolderChange = function handleFolderChange(event) {
        console.log(event.target.value);
    }

    window.createFolderButton = async function createFolderButton() {
        alert('clicked')
    }


    window.handleBookChange = function handleBookChange(event) {
        console.log(event.target.value);
    }

    window.createBookButton = async function createBookButton() {
        alert('clicked')
    }
})



