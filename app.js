let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

window.alert("WARNING!! Food is so delicious you will become addicted!");

Menu = {
    Drinks: {
        Price: "$2.88",
        url: 'https://www.acouplecooks.com/wp-content/uploads/2021/05/Strawberry-Mojito-008-1.jpg',
        text: 'All Flavor Lemonades'
    },
    Appetizers: {
        Price: "$24.99",
        url: 'https://themccallumsshamrockpatch.com/wp-content/uploads/2021/01/Cajun-Fried-Gator-tail-500x375.jpg',
        text: 'Fried Gator'
    },
    Seafood: {
        Price: "$12.99",
        url: 'https://lotus-seafood.com/wp-content/uploads/2021/10/BEST-SEAFOOD.jpg',
        text: 'Try our seafood platters starting at $12.99'
    },
    Desert: {
        Price: "$11.99",
        url: 'http://foodisafourletterword.com/wp-content/uploads/2020/02/Instant_Pot_KING_Cake_Cheesecake_Recipe_wholeside.jpg',
        text: 'Try our new King Cake Cheesecake!'
    },
}


const changeDrinks = ()=>{

    let firstpic = document.querySelector('.Img')
    firstpic.setAttribute('src', menu.drinks.url )
   
    let blue = document.querySelector('.priceContainer')
    
    blue.innerHTML = menu.drinks.price

   
    let green = document.querySelector('.text')

    
    green.innerHTML = menu.drinks.text

}





