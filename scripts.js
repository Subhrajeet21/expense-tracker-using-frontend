// Select elements
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const expenseCategory = document.getElementById('expense-category');
const addExpenseButton = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-list');
const totalExpense = document.getElementById('total-expense');

// Initialize total
let total = 0;

// Function to update total expense
function updateTotal() {
    totalExpense.textContent = total.toFixed(2);
}

// Function to add a new expense
function addExpense() {
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);
    const category = expenseCategory.value;

    // Basic validation
    if (name === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter valid data!');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `${name} - $${amount} (${category}) <button class="delete-btn">Delete</button>`;
    
    // Add event listener to the delete button
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        total -= amount;
        updateTotal();
        expenseList.removeChild(li);
    });

    // Update total expense
    total += amount;
    updateTotal();

    // Append the expense to the list
    expenseList.appendChild(li);

    // Clear input fields
    expenseName.value = '';
    expenseAmount.value = '';
}

// Event listener for the add expense button
addExpenseButton.addEventListener('click', addExpense);

// Allow pressing Enter to add the expense
expenseAmount.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addExpense();
    }
});
