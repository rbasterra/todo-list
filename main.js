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

        //Añadimos p como hijo de li y a li hijo de la lista
        li.appendChild(p);
        ul.appendChild(li);

        //resetear el valor del input para que desaparezca lo que hemos escrito
        input.value = '';

        //ocultar el mensaje de abajo
        empty.styles.display=none;
    }
})