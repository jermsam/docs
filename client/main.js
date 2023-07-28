
import  '/features.js'

document.querySelector('#app').innerHTML = `
  <div>
    <div class="flex gap-5 p-5">
        <!-- new folder -->
        <dialog-element dialog-class="bg-white w-[400px] h-[400px] relative">
            <h2 slot="title" class="font-semibold text-slate-900 ">New Folder</h2>
            <button-element
            slot="open"
            class="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
            >
              <div class="flex gap-1 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                </svg>
                <span>Folder</span>                 
              </div>              
             </button-element>
            <button-element
            class="hover:border-slate-500 hover:border-solid hover:bg-white hover:text-slate-500 group flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium p-2"
            slot="close"
            >
            Close
            </button-element>
            <div slot="content" class="relative h-[80%]">
                <input-element 
                input-placeholder="Folder name ..."
                input-class="focus:ring-2 focus:ring-slate-500 focus:outline-none
                   appearance-none w-full text-sm leading-6 text-slate-900
                   placeholder-slate-400 rounded-md  ring-1
                    ring-slate-200 shadow-sm p-2"
                    change="handleFolderChange"
                >
                </input-element>
                <div class="absolute bottom-10  right-5 left-5 flex justify-center">
                   <button-element
                  class="h-10 font-semibold rounded-md bg-slate-900 text-white w-full" 
                  type="submit"
                  click="createFolderButton"
                  >
                   Create
                  </button-element>
                </div>
            </div>
        </dialog-element>
        <!-- new book -->
        <dialog-element dialog-class="bg-white w-[400px] h-[400px] relative">
            <h2 slot="title" class="font-semibold text-slate-900 ">New Book</h2>
            <button
            slot="open"
            class="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
            >
                <div class="flex gap-1 items-center">
                     <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                     </svg>
                     <span>Book</span>
                </div>
            </button>
            
            <button-element
            class="hover:border-slate-500 hover:border-solid hover:bg-white hover:text-slate-500 group flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium p-2"
            slot="close"
            >
            Close
            </button-element>
            <div slot="content" class="relative h-[80%]">
                <input-element 
                input-placeholder="Book name ..."
                input-class="focus:ring-2 focus:ring-slate-500 focus:outline-none
                   appearance-none w-full text-sm leading-6 text-slate-900
                   placeholder-slate-400 rounded-md  ring-1
                    ring-slate-200 shadow-sm p-2"
                    change="handleBookChange"
                >
                </input-element>
                <div class="absolute bottom-10  right-5 left-5 flex justify-center">
                  <button-element
                  class="h-10 font-semibold rounded-md bg-slate-900 text-white w-full" 
                  type="submit"
                  click="createBookButton"
                  >
                   Create
                  </button-element>
                </div>
            </div>
        </dialog-element>
    </div>
   
  </div>
`





