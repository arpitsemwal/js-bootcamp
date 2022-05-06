let myAccount = {
    name: 'Arpit',
    expenses: 0,
    income: 0
}

function addIncome(account, income) {
    account.income += income
}

function addExpense(account, amount) {
    account.expenses += amount
}

function getAccountSummary(account) {
    return `Account for ${account.name} has $${account.income} and $${account.expenses}`
}

function resetAccount(account) {
    account.income = 0
    account.expenses = 0
}

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
addExpense(myAccount, 500)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))