// Week 3 Day 3 Morning Lab //
// Create a Vending Machine //

const vendingMachine = {


    snacks: {
        s1: { name: 'popcorn', price: 1.50 },
        s2: { name: 'trail mix', price: 1.75},
        s3: {name: 'doritos', price: 1}
    },

    vend(number){
        if (number === 1) {
            console.log(`You chose ${this.snacks.s1.name}...now vending`)
        } else if (number === 2) {
            console.log(`You chose ${this.snacks.s2.name}...now vending`)
        } else if (number === 3) {
            console.log(`You chose ${this.snacks.s3.name}...now vending`)
        } else {
            console.log('error: invalid selection');
        }
    },


}

vendingMachine.vend(0);