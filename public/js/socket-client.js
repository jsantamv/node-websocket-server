//Comunicacion con el server del websocket

const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffLine')
const btnEnviar = document.querySelector('#btnEnviar')
const txtMensaje = document.querySelector('#txtMensaje')

const socket = io()

socket.on('connect', () => {

    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

socket.on('disconnect', () => {
    lblOffline.style.display = ''
    lblOnline.style.display = 'none'
})


socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
})


btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value
    const payload = {
        mensaje,
        id: 'adfas8asfsd9fas',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id) =>{
        console.log(id);
    })

})