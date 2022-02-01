var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});




let elList = document.querySelector('.swiper-list')

let elOverlay = document.querySelector(".overlay")
let elInfo = document.querySelector('.hero-info')

const renderSwip = function(arr, element, elLearnInfoBtn){
  arr.forEach(amazon => {


      let newSection = document.createElement('div')
      let newHeroSection = document.createElement('div')
      let newHeroLeftSection = document.createElement('div')
      let newdescName = document.createElement('p')
      let newdescMainName = document.createElement('p')
      let newInfoDesc = document.createElement('p')
      let newImg = document.createElement('img')
      let newHeroBuyBtnSection = document.createElement('div')
      let newBuyBtn = document.createElement('button')
      let newLearnBtn = document.createElement('button')

      newSection.setAttribute('class', 'swiper-slide')
      newHeroSection.setAttribute('class', "hero-section")
      newHeroLeftSection.setAttribute('class', 'hero-left-section')
      newImg.setAttribute('src', amazon.smallThumbnail)
      newImg.setAttribute('class', 'hero-img')
      newdescName.classList.add('class', 'name-desc')
      newdescMainName.setAttribute('class', 'name-main-desc')
      newInfoDesc.setAttribute('class', 'info-desc')
      newHeroBuyBtnSection.setAttribute('class', 'hero-buy-section')
      newBuyBtn.setAttribute('class', 'hero-buy-btn btn')
      newLearnBtn.setAttribute('class', 'hero-learn-btn btn')

      newdescName.textContent = amazon.saralash
      newdescMainName.textContent = amazon.title
      newInfoDesc.textContent = amazon.summary
      newBuyBtn.textContent = "Buy now"
      newLearnBtn.textContent = "Learn More"

            elInfo.classList.add('hidden')
            elOverlay.classList.add('hidden-overlay')

            newLearnBtn.onclick = function() {
              elInfo.classList.remove('hidden')
              elOverlay.classList.remove('hidden-overlay')
              elInfo.innerHTML = null


              let newLearnHeroSection = document.createElement('div')
              let newLearnCloseBtn = document.createElement('i')
              let newLearnHeroHeading = document.createElement('h5')

              newLearnHeroSection.setAttribute('class', 'learn-hero-section')
              newLearnCloseBtn.setAttribute('class', 'close-btn')
              newLearnCloseBtn.setAttribute('class', 'close-btn fas fa-times')
              newLearnHeroHeading.setAttribute('class', 'learn-hero-heading')

              newLearnHeroHeading.textContent = amazon.title

              newLearnCloseBtn.addEventListener('click', function(){
                elOverlay.classList.add('hidden-overlay')
                elInfo.classList.add('hidden')
            })

            elLearnInfoBtn.appendChild(newLearnCloseBtn)
              elLearnInfoBtn.appendChild(newLearnHeroSection)
              newLearnHeroSection.appendChild(newLearnHeroHeading)
            }

      element.appendChild(newSection)
      newSection.appendChild(newHeroSection)
      newHeroSection.appendChild(newHeroLeftSection)
      newHeroLeftSection.appendChild(newdescName)
      newHeroLeftSection.appendChild(newdescMainName)
      newHeroLeftSection.appendChild(newInfoDesc)
      newHeroLeftSection.appendChild(newHeroBuyBtnSection)
      newHeroBuyBtnSection.append(newBuyBtn)
      newHeroBuyBtnSection.append(newLearnBtn)
      newHeroSection.appendChild(newImg)
  })
}

renderSwip(amazon, elList, elInfo)


elOverlay.addEventListener('click', function(evt){
  evt.preventDefault();
  elOverlay.classList.add('hidden-overlay')
  elInfo.classList.add('hidden')
})


document.addEventListener('keydown', function(evt){
  if(evt.key === "Escape"){
    elOverlay.classList.add('hidden-overlay')
    elInfo.classList.add('hidden')
  }
})





function heartRed(e) {
    const heart = document.querySelector("#heart")
    heart.classList.toggle("redStyle")
}

function ShoppingBag(e) {
    const shopping = document.querySelector("#shopping")
    shopping.classList.toggle("shopStyle")
}