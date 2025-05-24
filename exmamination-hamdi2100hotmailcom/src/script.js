let income=[]
let expense=[]

const desc = document.getElementById('desc');
const amount = document.getElementById('amount');
const incomeBtn = document.getElementById('incomeBtn');
const  expenseBtn = document.getElementById('expenseBtn');
const incomeList = document.getElementById(' incomeList');
const expenseList = document.getElementById('expenseList');
const transactionList = document.getElementById('transactionList');

function updateBalance(){
    const totalIncome =income.reduce((sum,trans)=>sum+ trans.amount,0);
    const totalExpenses = expenses.reduce((sum,trans)=>sum+ trans.amount,0);
    const total = totalIncome-totalExpenses;

    const balance= document.getElementById('balance');
    balance.textContent= total+" kr";

}

function addTransaction(type){
    const description = desc.value;
    const value=parseFloat(amount.value);

if(!description|| isNaN(value)){
      return; 
    }
 const transaction={description, amount: value};

 if(type==='income'){
     income.push(transaction);
        incomeList.innerHTML+=`<li>${description}: ${value} kr</li>`;  
    }  else{
        expenses.push(transaction);
        expenseList.innerHTML+=`<li>${description}: ${value} kr</li>`; 
    }

    transactionList.innerHTML+=`<li>${type.toUpperCase()}: ${description}- ${value} kr</li>`;  

    desc.value='';
    amount.value='';

    updateBalance();
}


incomeBtn.addEventListener('click', () => addTransaction('income'));
expenseBtn.addEventListener('click', () => addTransaction('expense'));
       
   
    
