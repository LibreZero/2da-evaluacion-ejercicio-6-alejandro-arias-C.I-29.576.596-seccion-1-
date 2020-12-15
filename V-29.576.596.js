function saludoNormal(mensaje){
  console.log(mensaje)
}

async function saludoAsincrono(mensaje){
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(mensaje)
      resolve();
    }, 2000);
  });
}

saludoNormal("bienvenido busque su telefono");
let promesa = saludoAsincrono("soluciones")
promesa.then(function(){
  saludoNormal("problemas a reparar del telefono")
})