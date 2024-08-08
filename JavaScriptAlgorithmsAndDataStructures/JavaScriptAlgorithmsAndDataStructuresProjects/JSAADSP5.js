function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;

  const currencyValues = [
    { name: "ONE HUNDRED", value: 100.0 },
    { name: "TWENTY", value: 20.0 },
    { name: "TEN", value: 10.0 },
    { name: "FIVE", value: 5.0 },
    { name: "ONE", value: 1.0 },
    { name: "QUARTER", value: 0.25 },
    { name: "DIME", value: 0.1 },
    { name: "NICKEL", value: 0.05 },
    { name: "PENNY", value: 0.01 }
  ];

  let changeArray = [];
  let totalInDrawer = 0;

  cid.forEach(item => {
    totalInDrawer += item[1];
  });

  if (totalInDrawer === changeDue) {
    return { status: "CLOSED", change: cid };
  }

  if (totalInDrawer < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  for (let i = 0; i < currencyValues.length; i++) {
    let currencyName = currencyValues[i].name;
    let currencyValue = currencyValues[i].value;
    let amountInDrawer = cid[cid.length - 1 - i][1];
    let amountToReturn = 0;

    while (changeDue >= currencyValue && amountInDrawer >= currencyValue) {
      changeDue -= currencyValue;
      amountInDrawer -= currencyValue;
      amountToReturn += currencyValue;

      // Asegura que no haya errores de precisión con los decimales
      changeDue = Math.round(changeDue * 100) / 100;
    }

    if (amountToReturn > 0) {
      changeArray.push([currencyName, amountToReturn]);
    }
  }

  // Si después de intentar devolver el cambio, queda algo sin poder ser devuelto, no hay suficiente
  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
