import React, { useState } from 'react';

function Calculator() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [budgetOutput, setBudgetOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const savings = income - expenses;
    setBudgetOutput(`
      <h2>Budget Summary</h2>
      <p>Monthly Income: ${income}</p>
      <p>Monthly Expenses: ${expenses}</p>
      <p>Savings: ${savings}</p>
    `);
  };

  return (
    <div>
      <h1>Budget Calculator</h1>
      <form id="budget-form" onSubmit={handleSubmit}>
        <label htmlFor="income">Monthly Income:</label>
        <input type="number" id="income" value={income} onChange={(e) => setIncome(e.target.value)} required />
        <label htmlFor="expenses">Monthly Expenses:</label>
        <input type="number" id="expenses" value={expenses} onChange={(e) => setExpenses(e.target.value)} required />
        <button type="submit">Calculate</button>
      </form>
      <div id="budget-output" dangerouslySetInnerHTML={{ __html: budgetOutput }}></div>
    </div>
  );
}

export default Calculator;
