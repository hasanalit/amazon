var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});








let elList = document.querySelector('.swiper-list')


const renderSwip = function(arr, element){
  arr.forEach(amazon => {
      let newSection = document.createElement('div')
      let newHeroSection = document.createElement('div')
      let newHeroLeftSection = document.createElement('div')
      let newdescName = document.createElement('p')
      let newdescMainName = document.createElement('p')
      let newImg = document.createElement('img')

      newHeroSection.setAttribute('class', 'heading-hero-section')
      newSection.setAttribute('class', 'swiper-slide')
      newImg.setAttribute('src', amazon.smallThumbnail)
      newdescName.classList.add('class', 'name-desc')
      newdescMainName.setAttribute('class', 'name-main-desc')

      newImg.style.width = "417px"

      newdescName.textContent = amazon.saralash
      newdescMainName.textContent = amazon.title

      element.appendChild(newSection)
      newSection.appendChild(newHeroSection)
      newHeroSection.appendChild(newHeroLeftSection)
      newHeroLeftSection.appendChild(newdescName)
      newHeroLeftSection.appendChild(newdescMainName)
      newHeroSection.appendChild(newImg)
  })
}

renderSwip(amazon, elList)