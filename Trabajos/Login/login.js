const form1=document.querySelector('#form-1')

form1.addEventListener('submit', valForm1)
function valForm1 (e) {
    e.preventDefault();
    const con="hola";
    const pass =e.target[1].value;
    if(con != pass){
        const div =document.createElement('div');
        div.classList.add('msn')
        const h1 =document.createElement('h1');
        h1.textContent ="Error";
        div.appendChild(h1);
        document.body.appendChild(div)
        

    }

}