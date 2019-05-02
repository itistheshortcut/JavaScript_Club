let array = [];
const Save = () => {
    const expense1 = Number(document.getElementById("firstExpense").value);
    const expense2 = Number(document.getElementById("secondExpense").value);
    const expense3 = Number(document.getElementById("thirdExpense").value);
    const expense4 = Number(document.getElementById("fourthExpense").value);
    const expense5 = Number(document.getElementById("fifthExpense").value);
    array = [expense1, expense2, expense3, expense4, expense5];
    console.log(array);
}
const ShowAllExpense = () => {
    let expense = document.getElementById('answer');
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    expense.innerHTML = "Total: " + sum.reduce(reducer);
}