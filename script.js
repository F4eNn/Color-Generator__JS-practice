const red = document.querySelector('.red')
const blue = document.querySelector('.blue')
const green = document.querySelector('.green')
const color = document.querySelector('#main')

const body = document.querySelector('body')

const mainColor = () => {
	const r = red.value
	const b = blue.value
	const g = green.value

	const myColour = `rgb(${r},${g},${b})`
	color.value = myColour
	console.log(color.value)
	body.style.backgroundColor = `${color.value}`
}

const copyRgb =  () =>  {
	color.select()
	color.setSelectionRange(0, 3)
	navigator.clipboard.writeText(color.value);
}

copyRgb()



red.addEventListener('input', mainColor)
green.addEventListener('input', mainColor)
blue.addEventListener('input', mainColor)
