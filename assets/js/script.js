const inp=document.querySelector('.inp');
const btn=document.querySelector('.btn');

btn.addEventListener('click',function(){
    const yazi=inp.value;

filmAXtar(yazi)
})
function filmAXtar(filminAdi){
    var netice=fetch("https://www.omdbapi.com/?apikey=trilogy&t="+filminAdi)

    const name=document.querySelector('.name')
    const poster=document.querySelector('.poster')
    const actors=document.querySelector('.actors')
    const about=document.querySelector('.about')
    const time=document.querySelector('.time')
    const director=document.querySelector('.director')
    const imdb=document.querySelector('.imdb')

    netice.then(function ( netice){
        return netice.json()
    }).then(function(filminMelumatlari){
        name.innerHTML=`Filmin adi:${filminMelumatlari.Title}`
        poster.src=filminMelumatlari.Poster
        actors.innerHTML=`Aktyorlar: ${filminMelumatlari.Actors}`
        time.innerHTML=`Tarix: ${filminMelumatlari.Released}`
        director.innerHTML=`Rejissor: ${filminMelumatlari.Director}`
        imdb.innerHTML=`IMdb: ${filminMelumatlari.imdbRating}`
        about.innerHTML=`Film Haqqında:${filminMelumatlari.Plot}`
    })

}