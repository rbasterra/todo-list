// primero, seleccionar todos los elementos que necesitamos manipular del html: input, boton +, ul, div-empty

const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty= document.querySelector('.empty');

// Crear una funcion para pushear los elementos a la lista

addBtn.addEventListener('click',(e)=>{
    //Cuando se trabaja con formularios, el comportamiento del formulario por defecto es que cuando se pulsa un boton o se añade un elemento al dom, el formulario emite un evento y refresca la pagina
    // eso hace que desaparezca el elemento que agregamos. Para que esto no ocurra, hay que pasar el evento por defecto del formulario a la funcion y desactivarlo
    e.preventDefault();
    
    //guardar el valor del input
    const text = input.value;

    //agregar los items de la lista cuando haya algo escrito en el input
    if (text !== ''){
        //creamos un item de la lista
        const li = document.createElement('li');

        //dentro del li ponemos un parrafo
        const p = document.createElement('p');
        
        //asignamos el texto al parrafo
        p.textContent = text;

        //Añadimos p como hijo de li y a li hijo de la lista. Añadimos tb el boton de borrar elemento
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        //resetear el valor del input para que desaparezca lo que hemos escrito
        input.value = '';

        //ocultar el mensaje de abajo
        empty.style.display= 'none';
    }
});

function addDeleteBtn(){
    //crear el boton de borrar el elemento
    const deleteBtn = document.createElement('button');

    //Añadir el texto del boton
    deleteBtn.textContent = 'X';

    //Añadir la clase de estilo
    deleteBtn.className = 'btn-delete';

    //Agregar un eventListener para borrar el elemento de la lista
    deleteBtn.addEventListener('click', (e)=>{
        //Seleccionamos el li que vamos a eliminar. Esa informacion viene en el propio evento que recibimos como parametro
        const item = e.target.parentElement;

        // eliminamos el elemento de la lista. Tambien se puede hacer directamente en el evento (e.target.parentElement.remove()) o con item.remove()
        ul.removeChild(item);

        //Una vez borrado el elemento, tenemos que volver a incluir el mensaje de empty
        //Para ello, podemos seleccionar todos los li's que quedan en el documento. Si tuviesemos mas li's en el documento, lo suyo seria añadirles una clase al li para poder seleccionarlo luego 
        //Por ejemplo, li.classList.add('liClass')
        const items = document.querySelectorAll('li');

        //si no hay items en la lista, volvemos a mostrar empty
        if (items.length === 0){
            empty.style.display = 'block';
        }
    })

    return deleteBtn;
}