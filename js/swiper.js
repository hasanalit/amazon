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
      let newImg = document.createElement('img')

      newSection.setAttribute('class', 'swiper-slide')
      newImg.setAttribute('src', amazon.smallThumbnail)


      newImg.style.width = '300px'

      newSection.textContent = amazon.title

      element.appendChild(newSection)
      newSection.appendChild(newImg)
  })
}

renderSwip(amazon, elList)