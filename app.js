var url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=5";

window.onload = traerNoticias();

function traerNoticias(){
    const found = fetch(url)
    .then((resp)=>{
        return resp.json();
    })
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error)
    })
    return found;
}