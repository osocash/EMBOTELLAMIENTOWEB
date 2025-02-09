const post = document.querySelector('.posts')

export const info = (data) => { 
if(data.length)
{
    let html=''
    data.forEach( doc=>{
        const post = doc.data()
        console.log(post)
        const li=`
        <li class="list-group-item list-group-item-action list-group-item-dark">
        <h5>Lote: ${post.numlote}</h5>
        <p>Numero de cajas: ${post.cajas}</p>
        <p>Numero de botellas: ${post.botellas}</p>
        <p>Fecha: ${post.fecha}</p>
        </li>
        `
        html+=li;
    })

    post.innerHTML=html
}
else{
   // posts.innerHTML='<h1>Logeate primero</h1>'
}
} 