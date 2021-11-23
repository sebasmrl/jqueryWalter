
const d = document;
const w = window;


const $btnLog = d.getElementById('log');
const $Form = d.getElementById('formulario')

$Form.addEventListener('submit', (e) => {
    e.preventDefault();
})


$btnLog.addEventListener('click', (e) =>{
    e.preventDefault();
    e.stopPropagation();

    const $email = d.getElementById('email');
    const $pass = d.getElementById('pass');
    
    fetch("http://127.0.0.1:5501/assets/db.json")
    .then(data => data.json())
    .then(dataTotal => {
        
        let flag=false
        dataTotal.forEach(data => {
        const {email, pass} = data;
            if($email.value ===email && $pass.value ===pass) {
                w.location.assign('../../index.html')
                localStorage.setItem('logueado', true)
                flag=true;
            }
        });
        if(!flag) alert('Correo y/o contraseña Incorrectos')
    });
});