const account = {
    name: "Arpit Semwal",
    income: [],
    expense: [],
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function(description, amount) {
        this.expense.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalIncome = 0
        this.income.forEach(item => totalIncome += item.amount)
        let totalExpense = 0
        this.expense.forEach(item => totalExpense += item.amount)
        console.log(`Name: ${this.name}\nBalance: $${totalIncome - totalExpense}\nIncome: $${totalIncome}\nExpenses: $${totalExpense}`)
    }
}

account.addIncome('Salary', 1000)
account.addExpense('Rent', 450)
account.addExpense('Breakfast', 10)
account.addExpense('Lunch', 12.5)
account.addExpense('Dinner', 15.27)
account.getAccountSummary()