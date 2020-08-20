const FirstLetterUpperCase: string = (el: string) =>
    el.substr(0, 1).toUpperCase() + el.substr(1)

function ConstructURL({ manufacturer, color, page }) {
    let urlParams = '?'
    if (manufacturer) {
        urlParams += `manufacturer=${manufacturer}&`
    }
    if (color) {
        urlParams += `color=${color}&`
    }
    if (page) {
        urlParams += `page=${page}`
    } else {
        urlParams += `page=${1}`
    }
    return urlParams === '?' ? '' : urlParams
}

export { FirstLetterUpperCase, ConstructURL }
