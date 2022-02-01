var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
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

renderSwip(amazon, elList)