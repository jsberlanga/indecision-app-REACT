// const add = (...args) => {
//   let total = 0;
//   for (let arg of args) {
//     total += arg
//   }
//   return total
// }

// console.log(add(3, 5, 6))

// const user = {
//   name: 'Julio Soto',
//   cities: ['Granada', 'London', 'Krakow'],
//   printPlacesLived() {
//     const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city)
//     return cityMessages
//   }
// }

// console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 3, 4, 5],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply());