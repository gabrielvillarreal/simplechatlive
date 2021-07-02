const mensajes = document.getElementById('mensajes');
const msgForm = document.getElementById('msgForm');

const socket = io('http://localhost:3000');

socket.on('message', data =>{
    //console.log(data);
    agregarMensaje(data);
})

msgForm.addEventListener('submit', e=>{
    e.preventDefault();
    socket.emit('chatmsg', msgForm.msg.value);
    msgForm.value = '';
})

function agregarMensaje(mensaje){
    const html = `<div class ="form-control col-md-4">${mensaje}</div>`;
    mensajes.innerHTML += html;

}