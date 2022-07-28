const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const countBtn = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')


// funkcja która sprawdza poprawność wszystkich danych
// 1. Wywołwana podczas kliknięcia na nasz przycisk countBtn
// 2. Sprawdza czy inputy i select zwracaja wartość 0 
const showBill = () => {
	if (price.value == '' || people.value == '' || tip.value == 0) {
		error.textContent = 'Uzupełnij wszystkie pola!'
        costInfo.style.display = 'none'
	} else {
        error.textContent = ''
		countBill()
	}
}

const countBill = () => {
	const newPrice = parseFloat(price.value) // zamiana stringa na number przez parseFloat
	const newPeople = parseInt(people.value) // parseInt zwraca liczbe całkowitą
	const newTip = parseFloat(tip.value)

	const sum = (newPrice + newPrice * newTip) / newPeople

	costInfo.style.display = 'block'
    cost.textContent = sum.toFixed(2) // wynik do 2 liczb po przecinku
}

countBtn.addEventListener('click', showBill)
