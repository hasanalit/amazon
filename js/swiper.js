"use strict";

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
let elSelectCategoryList = document.querySelector('.select-category-list')
let elSelectDesc = document.querySelector('.category-desc')
let elSelectAll = document.querySelector('.amazon-hero-desc-right')
let elBookmarkList = document.querySelector(".bookmark-list")


let elList = document.querySelector('.swiper-list')

let elOverlay = document.querySelector(".overlay")
let elInfo = document.querySelector('.hero-info')
let elBookmarkIcon = document.querySelector('.bookmark__img')




const newSelect = [
  {
    id: '1',
    img: "./images/car.png",
    title: "Automtive",
  },
  {
    id: '2',
    img: "./images/baby.png",
    title: "Baby",
  },
  {
    id: '3',
    img: "./images/beauty.png",
    title: "Beauty",
  },
  {
    id: '4',
    img: "./images/men.png",
    title: "Men",
  },
  {
    id: '5',
    img: "./images/washing.png",
    title: "Machine",
  },
  {
    id: '6',
    img: "./images/mobile-solid.svg",
    title: "Phone",
  },
  {
    id: '7',
    img: "./images/kitchen.png",
    title: "Kitchen",
  },
  {
    id: '8',
    img: "./images/television.png",
    title: "Television",
  },
  {
    id: '9',
    img: "./images/bag.png",
    title: "Bag",
  },
]



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

// BOOKMARK
let bookmarks = [];



const realRenderBookmarks = function(arr, element) {

  arr.forEach(item => {


      const newBookmarkItem = document.createElement('li');
      let newBopkmarkNameSection = document.createElement('div')
      let newBookmarkTitle = document.createElement('h5')
      let newBookmarkDesc = document.createElement('p')
      // let newBookmarkDelete = document.createElement('button')
      // let newBookmarkDeleteImg = document.createElement('img')

      newBookmarkItem.classList.add("bookmark__item");
      newBopkmarkNameSection.classList.add("bookmark__name-section")
      newBookmarkTitle.classList.add("books_hero_title")
      newBookmarkDesc.classList.add("books_hero_desc")

      // newBookmarkDelete.classList.add("bookmark__delete")
      // newBookmarkDeleteImg.classList.add("bookmark__delete-img")
      // newBookmarkDeleteImg.setAttribute("src", './images/bookmarkdelete.png')

      newBookmarkTitle.textContent = item.title
      newBookmarkDesc.textContent = item.price

      // newBookmarkDelete.textContent = "Delete"

      // newBookmarkDeleteImg.dataset.deleteBtnId = item.id;

      element.appendChild(newBookmarkItem)
      newBookmarkItem.appendChild(newBopkmarkNameSection)
      newBopkmarkNameSection.appendChild(newBookmarkTitle)
      newBopkmarkNameSection.appendChild(newBookmarkDesc)

      // newBookmarkItem.appendChild(newBookmarkDelete)
      // newBookmarkItem.appendChild(newBookmarkDeleteImg)
  })
}




const renderBookmark = function(data) {
  elAmazonList.addEventListener('click', function(evt){
    const isBookmarkBtn = evt.target.matches(".amazon-btn-card")
    // console.log(isBookmarkBtn);

    if(isBookmarkBtn){
      const realbookmarkBtnId = evt.target.dataset.realBookmarkDatasetIdData;
      // console.log(realbookmarkBtnId);

      const realFoundIndex = data.find((thing) => thing.id === realbookmarkBtnId)
      // console.log(realFoundIndex);

      if(!bookmarks.includes(realFoundIndex)){
        bookmarks.push(realFoundIndex)

        elBookmarkList.innerHTML = null;
        realRenderBookmarks(bookmarks, elBookmarkList)
      }
    }
  }
  )
}


renderBookmark(amazon)


elBookmarkList.classList.add('bookmark-hidden')
elOverlay.classList.add('hidden-overlay')

elBookmarkIcon.addEventListener('click', function() {
  elBookmarkList.classList.remove('bookmark-hidden')
  elOverlay.classList.remove('hidden-overlay')
})










const renderAmazon = function(array, elements, infoMenu){
  array.forEach(arr => {
    let newAmazonItem = document.createElement('li')
    let newAmazonImgSection = document.createElement('div')
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
    newAmazonImgSection.setAttribute('class', 'amazon-img-section')
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


    // DATASET
    newAmazonCard.dataset.realBookmarkDatasetIdData = arr.id


    elInfo.classList.add('hidden')
    elOverlay.classList.add('hidden-overlay')
    elBookmarkList.classList.add('bookmark-hidden')









    newAmazonView.onclick = function() {
      elInfo.classList.remove('hidden')
      elOverlay.classList.remove('hidden-overlay')
      // elBookmarkList.classList.remove('bookmark-hidden')
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
      newLearnInfoImg.setAttribute('src', arr.smallThumbnail)
      newLearnHeroHeading.setAttribute('class', 'learn-hero-heading')
      newLearnInfoRating.setAttribute('class', 'learn-info-rating')
      newLearnInfoPrice.setAttribute('class', 'learn-info-price')
      newLearnInfoDesc.setAttribute('class', 'learn-info-desc')

      newLearnHeroHeading.textContent = arr.title
      newLearnInfoRating.textContent = arr.imdbRating
      newLearnInfoPrice.textContent = `Price ${arr.price}$`
      newLearnInfoDesc.textContent = arr.summary

      newLearnCloseBtn.addEventListener('click', function(){
        elOverlay.classList.add('hidden-overlay')
        elInfo.classList.add('hidden')
    })


      infoMenu.appendChild(newLearnCloseBtn)
      infoMenu.appendChild(newLearnHeroSection)
      newLearnHeroSection.appendChild(newLearnInfoImgSection)
      newLearnInfoImgSection.appendChild(newLearnInfoImg)
      newLearnHeroSection.appendChild(newLearnInfoSection)
      newLearnInfoSection.appendChild(newLearnHeroHeading)
      newLearnInfoSection.appendChild(newLearnInfoRating)
      newLearnInfoSection.appendChild(newLearnInfoPrice)
      infoMenu.appendChild(newLearnInfoDesc)
    }











    elements.appendChild(newAmazonItem)
    newAmazonItem.appendChild(newAmazonImgSection)
    newAmazonImgSection.appendChild(newAmazonImg)
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
renderAmazon(amazon, elAmazonList, elInfo)


elSelectAll.addEventListener('click', ()=> {
  elAmazonList.innerHTML = null;
  renderAmazon(amazon, elAmazonList, elInfo)
})

elSelectCategoryList.addEventListener('click', function(evt){
  const isBookmarkBtn = evt.target.matches(".select-category-item");
  const isBookmarkImg = evt.target.matches(".select-category-img");
  const isBookmarkDesc = evt.target.matches(".category-desc");

  if(isBookmarkBtn){
    const bookmarkBtnId = evt.target.dataset.bookmarkBtnIdData;

    const foundIndex = amazon.filter(thing => thing.categories[0] == bookmarkBtnId)

      elAmazonList.innerHTML = null

      renderAmazon(foundIndex, elAmazonList, elInfo)
  }

  if(isBookmarkImg){
    const bookmarkBtnIdImg = evt.target.dataset.bookmarkBtnIdDataImg;

    const foundIndexImg = amazon.filter(thing => thing.categories[0] == bookmarkBtnIdImg)

      elAmazonList.innerHTML = null

      renderAmazon(foundIndexImg, elAmazonList, elInfo)
  }

  if(isBookmarkDesc){
    const bookmarkBtnIdDesc = evt.target.dataset.bookmarkBtnIdDataDesc;

    const foundIndexDesc = amazon.filter(thing => thing.categories[0] == bookmarkBtnIdDesc)

      elAmazonList.innerHTML = null

      renderAmazon(foundIndexDesc, elAmazonList, elInfo)
  }


})

const renderBookmarks = function(arr, elements){
  arr.forEach(function(item) {
    const newBookmarkItem = document.createElement('li')
    const newBookmarkImg = document.createElement('img')
    const newBookmarkDesc = document.createElement('p')

    newBookmarkItem.setAttribute('class', 'select-category-item')
    newBookmarkImg.setAttribute('src', item.img)
    newBookmarkImg.setAttribute('class', 'select-category-img')
    newBookmarkImg.setAttribute('width', '55px')
    newBookmarkImg.setAttribute('height', '55px')
    newBookmarkDesc.setAttribute('class', 'category-desc')

    newBookmarkDesc.textContent = item.title

    // DATASET
    newBookmarkItem.dataset.bookmarkBtnIdData = item.title
    newBookmarkImg.dataset.bookmarkBtnIdDataImg = item.title
    newBookmarkDesc.dataset.bookmarkBtnIdDataDesc = item.title

    elements.appendChild(newBookmarkItem)
    newBookmarkItem.appendChild(newBookmarkImg)
    newBookmarkItem.appendChild(newBookmarkDesc)
  })
}



renderBookmarks(newSelect, elSelectCategoryList)




elOverlay.addEventListener('click', function(evt){
  evt.preventDefault();
  elOverlay.classList.add('hidden-overlay')
  elInfo.classList.add('hidden')
  elBookmarkList.classList.add('bookmark-hidden')
})


document.addEventListener('keydown', function(evt){
  if(evt.key === "Escape"){
    elOverlay.classList.add('hidden-overlay')
    elInfo.classList.add('hidden')
    elBookmarkList.classList.add('bookmark-hidden')
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