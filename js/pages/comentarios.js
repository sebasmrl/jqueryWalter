console.log("llamada a JSONPlaceHolder")
const d = document;
const $commentsContent = d.getElementById('commentsContent');


window.addEventListener('DOMContentLoaded', (e) =>{

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
        //console.log(data)
        data.forEach(comment =>{
            const $comment= createComment(comment);
            $commentsContent.appendChild($comment)
            //console.log(comment)
        })
        console.log("fin de la peticion")
    })

})

function createComment(data){
    //if(!data) throw new Error("No Data");
    const {postId, name, email, body} = data;
    
    $fragment = d.createDocumentFragment();
    $div = d.createElement("div");
    $div.classList.add("card")
    $div.classList.add("text-center");

    $divHeader = d.createElement("div");
    $divHeader.classList.add("card-header");
    $divHeader.textContent = email;
    
    $divBody = d.createElement("div");
    $divBody.classList.add("card-body");

    $h5Title = d.createElement("h5")
    $h5Title.classList.add("card-title");
    $h5Title.textContent = name;

    $cardText = d.createElement("p")
    $cardText.classList.add("card-text");
    $cardText.textContent = body;


    $enlaceBtn = d.createElement("a");
    $enlaceBtn.classList.add("btn");
    $enlaceBtn.classList.add("btn-primary");
    $enlaceBtn.textContent = "Me gusta";

    $divFooter = d.createElement("div");
    $divFooter.classList.add("card-footer");
    $divFooter.classList.add("text-muted");
    $divFooter.textContent = postId;
    
    $divBody.insertAdjacentElement("beforeend", $h5Title);
    $divBody.insertAdjacentElement("beforeend", $cardText);
    $divBody.insertAdjacentElement("beforeend", $enlaceBtn);

    $div.insertAdjacentElement("beforeend", $divHeader);
    $div.insertAdjacentElement("beforeend", $divBody);
    $div.insertAdjacentElement("beforeend", $divFooter); //Solo funciona con los tipo elemento
  
    $fragment.appendChild($div);
    return $fragment;
}