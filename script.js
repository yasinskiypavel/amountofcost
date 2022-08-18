let numberOfFloors = 30; // Задаём количество этажей // N
let priceIncreaseNumberOfFloors = 10; // Задаём за какое количество этажей происходит повышение цены // M
let apartmentPrice = 10000; // Задаём стоимость квартиры на первом этаже // X
let numberOfDifferentApartmentPrices = Math.ceil(numberOfFloors / priceIncreaseNumberOfFloors); // Считаем количество различных цен на квартиры
let floorCheckNumber = 0; // Задаём номер проверки M этажей (первые, вторые, третьи M этажей)
let amountOfCost = 0;

while (floorCheckNumber < numberOfDifferentApartmentPrices)
{
	floorCheckNumber = floorCheckNumber + 1;
	amountOfCostN = priceIncreaseNumberOfFloors * apartmentPrice;
	amountOfCost = amountOfCost + amountOfCostN;
if (floorCheckNumber < numberOfDifferentApartmentPrices)
{
	apartmentPrice = apartmentPrice + 1000;
}
}

let modulo = numberOfFloors % priceIncreaseNumberOfFloors // Задаём остаток от деления
if (modulo != 0)
{
	amountOfCostModulo = (priceIncreaseNumberOfFloors - modulo) * apartmentPrice;
	amountOfCost = amountOfCost - amountOfCostModulo;
}

document.write('<br>Сумма стоимости всех квартир равна ' + amountOfCost);