import { Invoice } from './classes/Invoices.js';
import { Payment } from './classes/Payment.js';
import { ListTamplate } from './classes/ListTamplate.js';
const nome = "Érica";
// const invOne = new Invoice("Mario", "Work on the Mario web site", 250);
// const invTwo = new Invoice("Érica", "Work on the Érica e-book", 250);
// //console.log(invOne,invTwo);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// //console.log(invoices);
// //criando uma função que mostra os nossos dados do jeito que treinamos na classe
// invoices.forEach(inv => {
//     console.log("client: "+inv.client+",", "amount: "+inv.amount+",", "text: "+inv.format());
// })
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list tamplate
const ul = document.querySelector('ul');
const list = new ListTamplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //Criei uma variável que só aceita objs do tipo HasFormatter
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
