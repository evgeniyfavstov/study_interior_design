function initSlider()
{
    let slidesToShow = 4
    const slidesToScroll = 1
    let position = 0

    const slider = document.querySelector('.slider')
    const slidesContainer = document.querySelector('.slider__slides')
    const slides = document.querySelectorAll('.slider__slide')
    const arrowPrev = document.querySelector('.arrow_type_prev')
    const arrowNext = document.querySelector('.arrow_type_next')

    const slideWidth = slider.clientWidth / slidesToShow
    const slidesCount = slides.length
    slides.forEach(slide => {
        slide.style.minWidth = `${slideWidth}px`
    })

    const setPosition = () => {
        slidesContainer.style.transform = `translateX(${position}px)`
    }

    const checkArrows = () => {
        arrowPrev.disabled = position === 0
        arrowNext.disabled = position <= -(slidesCount - slidesToShow) * slideWidth
    }
    checkArrows()

    const movePosition = slideWidth * slidesToScroll
    arrowPrev.addEventListener('click', () => {
        const unscrolledSlidesCount = Math.abs(position) / slideWidth
        position += unscrolledSlidesCount >= slidesToScroll
            ? slidesToScroll * slideWidth
            : unscrolledSlidesCount * slideWidth
        setPosition()
        checkArrows()
    })

    arrowNext.addEventListener('click', () => {
        const unscrolledSlidesCount = slidesCount - (Math.abs(position) + slidesToShow * slideWidth) / slideWidth
        position -= unscrolledSlidesCount >= slidesToScroll
        ? slidesToScroll * slideWidth
        : unscrolledSlidesCount * slideWidth
        setPosition()
        checkArrows()
    })
}

initSlider()



const menuIconClick = document.querySelector('.menu__icon')
menuIconClick.addEventListener('click', mainMenuShow)

const logoIconClick = document.querySelector('.logo')
logoIconClick.addEventListener('click', mainMenuHide)

function mainMenuShow(event)
{
    const menuContainer = document.querySelector('.top-menu')
    menuContainer.classList.add('top-menu_visible')
}

function mainMenuHide(event)
{
    const menuContainer = document.querySelector('.top-menu')
    menuContainer.classList.remove('top-menu_visible')
}
