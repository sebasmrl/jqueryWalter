const d = document;
const ls = window.localStorage

let  data = [];
const info = JSON.parse(ls.getItem('data-load'));

if(info) data = info;
console.log(data)

const $form = d.getElementById('form-principal');
const $cards = d.querySelector('#cards');

//console.log($form.children[2].firstElementChild.nextElementSibling.value )
//console.log($form.children[3].firstElementChild.nextElementSibling.value )



//Metodos genericos
const createCard = (dataCard ={}) => {

    const { title, description } = dataCard;

    $fragment = d.createDocumentFragment();
    $div = d.createElement("div");
    $div.classList.add("card")

    $img = d.createElement("img");
    $img.setAttribute("src","./assets/producto-defecto.jpg")
    $img.setAttribute("alt", "icono de una persona enn blanco y negro")
    $img.classList.add("card-img-top")
   
    $title = d.createElement("h5");
    $title.classList.add("card-title")
    $title.textContent = title;

    $description = d.createElement("p")
    $description.classList.add("card-text")
    $description.textContent = description;

    $btnCard = d.createElement("button");
    $btnCard.classList.add("btn");
    $btnCard.classList.add("btn-primary");
    $btnCard.textContent = "Comprar";


    $divB = d.createElement("div");
    $divB.setAttribute("id", "card-body");

    $divB.appendChild($title)
    $divB.appendChild($description)
    $divB.appendChild($btnCard)

    $div.appendChild($img)
    $div.appendChild($divB)

    $fragment.appendChild($div);
    return $fragment;
}


//Eventos
$form.addEventListener('submit', (e)=>{
    e.preventDefault();
    e.stopPropagation();

    const title = e.target.children[2].firstElementChild.nextElementSibling.value;
    const description = e.target.children[3].firstElementChild.nextElementSibling.value;
    
    //Guardar informacion
    const item = {
        title,
        description
    }
    data = [...data, item];
    ls.setItem('data-load', JSON.stringify(data))

    //Crear Fragamento y añadirlo
    const card = createCard(item);
    $cards.appendChild(card)

    //reset del form
    e.target.children[2].firstElementChild.nextElementSibling.value = ""
    e.target.children[3].firstElementChild.nextElementSibling.value = ""
})

window.addEventListener('DOMContentLoaded', (e)=>{
    data.forEach( producto =>{
       //const { title, description } = producto;
       const card = createCard(producto);
       $cards.appendChild(card)
    })
    
})