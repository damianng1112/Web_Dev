"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = (subtotal, taxRate) => {
    if (subtotal<10000 && !isNaN(subtotal)){
        if (taxRate<12 && !isNaN(taxRate)){
            const tax = subtotal * (taxRate/100)
            const total = tax + subtotal
            console.log(total.toFixed(2))
            $("#sales_tax").value = tax.toFixed(2)
            $("#total").value = total.toFixed(2)
        }
    }else{
        alert("Subtotal must be valid positive number between 0 and 10000\n"
        +"Tax Rate must be valid positive number between 0 and 12");
    }
};

const clear = () => {
    $("#subtotal").value ="";
    $("#tax_rate").value ="";
    $("#sales_tax").value ="";
    $("#total").value ="";
};

const clearText = (evt) => {
    let target = evt.currentTarget;
    target.value ="";
}

document.addEventListener('DOMContentLoaded', () =>{
    $("#subtotal").focus();
    $("#calculate").addEventListener("click", () =>{
        processEntries(parseFloat($("#subtotal").value), parseFloat($("#tax_rate").value));
        $("#subtotal").focus();
    });
    $("#clear").addEventListener('click', ()=>{
        clear();
        $("#subtotal").focus();
    })
    $("#subtotal").addEventListener('click', clearText);

    //$("#subtotal").addEventListener('click', () => {
       // $("#subtotal").value ="";
    //});

});