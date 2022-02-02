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

let elAmazonList = document.querySelector('.amazon-category')
let elAmazonInfo = document.querySelector('.amazon-info')



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
      let newBuyBtn = document.createElement('a')
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
      newBuyBtn.setAttribute('href', './about.html')
      newBuyBtn.setAttribute('target', '_blank')
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

              // let learnInfoText = "Price"

              let newLearnHeroSection = document.createElement('div')
              let newLearnCloseBtn = document.createElement('i')
              let newLearnInfoSection = document.createElement('div')
              let newLearnInfoImgSection = document.createElement('div')
              let newLearnInfoImg = document.createElement('img')
              let newLearnHeroHeading = document.createElement('h5')
              let newLearnInfoRating = document.createElement('p')
              let newLearnInfoPrice = document.createElement('p')
              let newLearnInfoDesc = document.createElement('p')

              newLearnHeroSection.setAttribute('class', 'learn-hero-section')
              newLearnCloseBtn.setAttribute('class', 'close-btn fas fa-times')
              newLearnInfoSection.setAttribute('class', 'learn-info-hero-heading')
              newLearnInfoImgSection.setAttribute('class', 'learn-info-images-section')
              newLearnInfoImg.setAttribute('class', 'learn-info-images')
              newLearnInfoImg.setAttribute('src', amazon.smallThumbnail)
              newLearnHeroHeading.setAttribute('class', 'learn-hero-heading')
              newLearnInfoRating.setAttribute('class', 'learn-info-rating')
              newLearnInfoPrice.setAttribute('class', 'learn-info-price')
              newLearnInfoDesc.setAttribute('class', 'learn-info-desc')

              newLearnHeroHeading.textContent = amazon.title
              newLearnInfoRating.textContent = amazon.imdbRating
              newLearnInfoPrice.textContent = `Price ${amazon.price}$`
              newLearnInfoDesc.textContent = amazon.summary

              newLearnCloseBtn.addEventListener('click', function(){
                elOverlay.classList.add('hidden-overlay')
                elInfo.classList.add('hidden')
            })


              elLearnInfoBtn.appendChild(newLearnCloseBtn)
              elLearnInfoBtn.appendChild(newLearnHeroSection)
              newLearnHeroSection.appendChild(newLearnInfoImgSection)
              newLearnInfoImgSection.appendChild(newLearnInfoImg)
              newLearnHeroSection.appendChild(newLearnInfoSection)
              newLearnInfoSection.appendChild(newLearnHeroHeading)
              newLearnInfoSection.appendChild(newLearnInfoRating)
              newLearnInfoSection.appendChild(newLearnInfoPrice)
              elLearnInfoBtn.appendChild(newLearnInfoDesc)
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

const renderAmazon = function(array, elements, infoMenu){
  array.forEach(arr => {
    let newAmazonItem = document.createElement('li')
    let newAmazonImg = document.createElement('img')
    let newAmazonHeroSection = document.createElement('div')
    let newAmazonWarranty = document.createElement('p')
    let newAmazonTitle = document.createElement('h5')
    let newAmazonIncludeSection = document.createElement('div')
    let newAmazonPrice = document.createElement('p')
    let newAmazonRating = document.createElement('p')
    let newAmazonbottom = document.createElement('div')
    let newAmazonCard = document.createElement('button')
    let newAmazonView = document.createElement('button')

    newAmazonItem.setAttribute('class', 'amazon-item')
    newAmazonImg.setAttribute('class', 'amazon-img')
    newAmazonImg.setAttribute('src', arr.smallThumbnail)
    newAmazonHeroSection.setAttribute('class', 'amazon-hero-section')
    newAmazonWarranty.setAttribute('class', 'amazon-warranty')
    newAmazonTitle.setAttribute('class', 'amazon-title')
    newAmazonIncludeSection.setAttribute('class', 'amazon-include-section')
    newAmazonPrice.setAttribute('class', 'amazon-price')
    newAmazonRating.setAttribute('class', 'amazon-rating')
    newAmazonbottom.setAttribute('class', 'amazon-bottom-section')
    newAmazonCard.setAttribute('class', 'amazon-btn-card btn')
    newAmazonView.setAttribute('class', 'amazon-btn-view btn')

    newAmazonWarranty.textContent = arr.garantiya
    newAmazonTitle.textContent = arr.title
    newAmazonPrice.textContent = `${arr.price}$`
    newAmazonRating.textContent = arr.imdbRating
    newAmazonCard.textContent = "Add to Card"
    newAmazonView.textContent = "Quick view"

    elements.appendChild(newAmazonItem)
    newAmazonItem.appendChild(newAmazonImg)
    newAmazonItem.appendChild(newAmazonHeroSection)
    newAmazonHeroSection.appendChild(newAmazonWarranty)
    newAmazonHeroSection.appendChild(newAmazonTitle)
    newAmazonHeroSection.appendChild(newAmazonIncludeSection)
    newAmazonIncludeSection.appendChild(newAmazonPrice)
    newAmazonIncludeSection.appendChild(newAmazonRating)
    newAmazonItem.appendChild(newAmazonbottom)
    newAmazonbottom.appendChild(newAmazonCard)
    newAmazonbottom.appendChild(newAmazonView)
  })
}
renderAmazon(amazon, elAmazonList, elAmazonInfo)


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



function searchRed(e) {
  const elSearchIcon = document.querySelector('#search-icon')
  elSearchIcon.classList.toggle("search-icon")
}

function heartRed(e) {
    const heart = document.querySelector("#heart")
    heart.classList.toggle("redStyle")
}

function ShoppingBag(e) {
    const shopping = document.querySelector("#shopping")
    shopping.classList.toggle("shopStyle")
}

// function mapColor(e) {
//   const elMap = document.querySelector("#map-icon")
//   elMap.classList.toggle('icon-map')
// }