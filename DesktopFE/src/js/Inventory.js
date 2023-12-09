var rownumber               = 0;
var addButton               = document.getElementById("add");
var clearButton             = document.getElementById("clear");
var refreshBtn              = document.getElementById("refresh");

var catDropdown             = document.getElementById("catDropdown");
var wtinput                 = document.getElementById("wtinput");
var qtyinput                = document.getElementById("qtyinput");
var inventoryDate           = [];
var categoryDict            = {};

catDropdown.focus();




document.body.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        window.location.href = "../src/mainpage.html";
    }
});

addButton.addEventListener('click', async () => {
    let inventoryData = {
        Category : catDropdown.value,
        Weight: wtinput.value,
        Quantity: qtyinput.value
    };
    inventoryAddition(inventoryData);
    console.log(inventoryData);
    bridge.sendinventoryData(inventoryData);
});

clearButton.addEventListener('click', clear);

refresh.addEventListener('click', refreshFunc);



async function inventoryAddition(data){
    let wt = data.weight;
    let qty = data.qty;
    let cat = data.category;

    if(wt == "" || qty == 0 || cat == 0){
        console.error("The values are empty");
        return;
    }
    rownumber++;
    var tableBody = document.getElementById('logs');

    var newRow = document.createElement('tr');
 
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    var cell3 = document.createElement('td');
    var cell4 = document.createElement('td');
    var cell5 = document.createElement('td');

    cell1.innerText= rownumber;
    newRow.appendChild(cell1);

    let lable = document.createElement('lable');
    lable.textContent = cat;
    cell2.appendChild(lable);
    newRow.appendChild(cell2);
    
    lable = document.createElement('lable');
    lable.textContent = wt;
    cell3.appendChild(lable);
    newRow.appendChild(cell3);
    
    lable = document.createElement('lable');
    lable.textContent = qty;
    cell4.appendChild(lable);
    newRow.appendChild(cell4);

    tableBody.appendChild(newRow);

    clear();

}

function clear() {
    catDropdown.value = "";
    wtinput.value = "";
    qtyinput.value = "";
    catDropdown.focus();
}
