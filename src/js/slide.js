export const wrapper = document.getElementById("wrapper");
export const slideItems = document.getElementsByClassName("slide-item");

export const maxSlideNum = slideItems.length - 1
export let activeNum = 0
export const intervalTime = 3000
export const fadeOutTime = 1000


export function slideShow() {


    setTimeout(function () {
        slideItems[0].classList.add('active', 'zoom')
    }, 0)


    setInterval(function () {
        const currentNum = activeNum
        slideItems[activeNum].classList.remove('active')
        activeNum = activeNum == maxSlideNum ? 0 : activeNum + 1
        slideItems[activeNum].classList.add('active', 'zoom')

        setTimeout(function () {
            slideItems[currentNum].classList.remove('zoom')
        }, fadeOutTime)

    }, intervalTime)
}