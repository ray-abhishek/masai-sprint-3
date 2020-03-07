var movie1 = document.getElementById('title1')
var movie2 = document.getElementById('title2')
var card1 = document.getElementById('card1')
var card2 = document.getElementById('card2')
var compare_btn = document.querySelector('.btn-danger')
compare_btn.addEventListener('click',getDataBoth)
card1.style.visibility = 'hidden'  
card2.style.visibility = 'hidden'  

function getDataBoth()
{
    if(movie1.value!="" && movie2.value != "")
    {
        getMovie1ForString(movie1.value)
        getMovie2ForString(movie2.value)
    }
    else 
    {
        console.log("NO EMPTY INPUT")
    }
    
}
function getMovie1ForString(movie1_name)
{
    var mov_obj = {}
    var xhr = new XMLHttpRequest()
    xhr.open('GET','http://www.omdbapi.com/?t='+movie1_name+'&apikey=7b8b2f1f')
    xhr.send()
    xhr.onload = function(){
        if(xhr.status == 200)
        {   
          //  console.log(JSON.parse(xhr.response))
            showCard1(JSON.parse(xhr.response))
        }
        else console.log(xhr.response)
    }
    xhr.onerror = function(){
        console.log("It broke - 1")
    }

   
}
function getMovie2ForString(movie2_name)
{
    var mov_obj = {}
    var xhr = new XMLHttpRequest()
    xhr.open('GET','http://www.omdbapi.com/?t='+movie2_name+'&apikey=7b8b2f1f')
    xhr.send()
    xhr.onload = function(){
        if(xhr.status == 200)
        {   
          //  console.log(JSON.parse(xhr.response))
            showCard2(JSON.parse(xhr.response))
        }
        else console.log(xhr.status)
    }
    xhr.onerror = function(){
        console.log("It broke - 2")
    }

   
}
function showCard1(movie1){
    var mo1_plot = document.getElementById('mo1-plot')
    card1.style.visibility = 'visible'
    if(movie1.Response == 'True')
    {
        console.log(movie1)
        var img1 = card1.querySelector('img')
        img1.setAttribute('src',movie1.Poster)
        var mo1_title = document.getElementById('mo1-title')
        var year1 = document.getElementById('year1')
        var awards1 = document.getElementById('awards1')
        var imdb1 = document.getElementById('imdb1')
        var boffice1 = document.getElementById('boffice1')
        mo1_title.textContent = movie1.Title 
        mo1_plot.textContent = movie1.Plot 
        year1.textContent = movie1.Year 
        awards1.textContent = movie1.Awards 
        imdb1.textContent = movie1.imdbRating 
        boffice1.textContent = movie1.BoxOffice
    }
    else 
    {
        mo1_plot.textContent = movie1.Error
    }
    
}
function showCard2(movie2){
    var mo2_plot = document.getElementById('mo2-plot')
    card2.style.visibility = 'visible'
    if(movie2.Response == 'True')
    {
        var img2 = card2.querySelector('img')
        img2.setAttribute('src',movie2.Poster)
        var mo2_title = document.getElementById('mo2-title')
        var year2 = document.getElementById('year2')
        var awards2 = document.getElementById('awards2')
        var imdb2 = document.getElementById('imdb2')
        var boffice2 = document.getElementById('boffice2')
        mo2_title.textContent = movie2.Title 
        mo2_plot.textContent = movie2.Plot 
        year2.textContent = movie2.Year 
        awards2.textContent = movie2.Awards 
        imdb2.textContent = movie2.imdbRating 
        boffice2.textContent = movie2.BoxOffice
    }
    else 
    {
        mo2_plot.textContent = movie2.Error
    }
    
}



