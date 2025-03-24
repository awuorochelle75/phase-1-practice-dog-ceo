const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded',function(){
    
    fetch(imgUrl)
    .then(response => response.json())
    .then(data =>{
        const images = data.message
        images.forEach(imageUrl => {
            const img=document.createElement('img');
            img.src = imageUrl;
            img.alt='dog image'
            document.body.appendChild(img)

        })
})


const dogList=document.getElementById('dog-breeds')
const dropDown=document.getElementById('breed-dropdown')
let allBreeds=[];


    fetch(breedUrl)
    .then(response => response.json())
    .then(data =>{
        breeds = data.message
        allBreeds=Object.keys(breeds)
        renderBreeds(allBreeds)
       

    function renderBreeds(breedsArray){
            dogList.innerHTML=''
            breedsArray.forEach(breed => {
            const listItem=document.createElement('li')
            listItem.textContent=breed
            listItem.classList.add('breed','item')

            listItem.addEventListener('click', function(){
                listItem.style.color = 'pink'

            
               

            })
            dogList.appendChild(listItem)

        
    })

}

    dropDown.addEventListener('change',(e) =>{
        renderBreeds(allBreeds.filter(breed => breed.startsWith(dropDown.value)))
    })



})

console.log('%c HI', 'color: firebrick')

})