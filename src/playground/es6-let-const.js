// Block scoping

const fullName = 'Julio Soto';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0]
  console.log(firstName)
}

console.log(firstName)
