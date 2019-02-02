class OldSyntax {
    constructor() {
        this.name = 'Mike Smith';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi my name is ${this.name}`;
    }
}
const oldSyntax = new OldSyntax();
const getOldGreeting = oldSyntax.getGreeting;
console.log(getOldGreeting());

class NewSyntax {
    name = 'John Wrap';
    getGreeting = () => {
        return `Hi my name is ${this.name}`;
    }
}
const newSyntax = new NewSyntax();
const getNewGreeting = newSyntax.getGreeting;
console.log(getNewGreeting());