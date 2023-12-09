let orn                     = [];
let netTotal                = [];
let wt                      = [];
let gr                      = 5600;
let mc                      = [];
let cgst                    = [];
let sgst                    = [];
var newsalerow              = 1;
let custName                = document.getElementById("Name")
let custPhno                = document.getElementById("PhNo")
let custadhr                = document.getElementById("Aadhar")
let custaddr                = document.getElementById("addr")
var tableBody               = document.getElementById('newSale');
var newRowAdded             = [];
let orn1                    = document.getElementById("orna1");
let netTotal1               = document.getElementById("net1");
let wt1                     = document.getElementById("wei1");
let mc1                     = document.getElementById("mc1");
let cgst1                   = document.getElementById("cgst1");
let sgst1                   = document.getElementById("sgst1");
const payableinput          = document.getElementById("TotalPayableinput");
const rateInput             = document.getElementById("rate");
var adddropdowns            = [];
var addNetTotal             = [];
var categoryType            = {};
let productWt               = [];
orn.push(orn1);
wt.push(wt1);
mc.push(mc1);
cgst.push(cgst1);
sgst.push(sgst1);
netTotal.push(netTotal1);

adddropdowns.push(document.getElementById("addodeduct1"));
adddropdowns.push(document.getElementById("addodeduct2"));
adddropdowns.push(document.getElementById("addodeduct3"));

addNetTotal.push(document.getElementById("addNetTotal1"));
addNetTotal.push(document.getElementById("addNetTotal2"));
addNetTotal.push(document.getElementById("addNetTotal3"));



document.body.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        window.location.href = "../src/mainpage.html";
    }
});



var callingmainmethod = async () => {
    var apiData = {
        Items: [],
        AddCharges : [],
        PaymentMode: '',
        TotalAmount: 0
    };

    let custdata = {
        CustName: custName.value,
        PhoneNo: custPhno.value,
        Pan: custadhr.value,
        Address: custaddr.value
    }

    for(let i=0; i<netTotal.length; i++){
        if(orn[i].value === "" || wt[i].value === "" 
            || mc[i].value === "" || cgst[i].value === "" || sgst[i].value === "" || netTotal[i].value === ""){
                break;
        }
        apiData.Items.push({
            OrnamentType:orn[i].value,
            Weight:wt[i].value,
            MackingCharge:mc[i].value,
            Sgst:cgst[i].value,
            Cgst:sgst[i].value,
            Amount:netTotal[i].value
        });
    }

    for(let i=0; i<addNetTotal.length; i++){
        apiData.AddCharges.push({
            ChargeType : adddropdowns[i].value,
            ChargeAmount  : addNetTotal[i].value
        });
    }
    apiData.PaymentMode = document.getElementById("mode").value
    apiData.TotalAmount = payableinput.value;

    await bridge.SendData(custdata, apiData);
 }


 document.getElementById("saveBill").addEventListener("click", () => {
    let flag = true;
    if(custName.value === "" || custPhno.value === "" || custadhr.value === "" || custaddr.value === ""){
        // return;
        flag = false;
    }
    if(flag)
        callingmainmethod();
});

function calculate(){
    let focusedelementId = document.activeElement.id;
    if(!focusedelementId.includes("net")){
        return;
    }
    var oprid = parseInt((focusedelementId)[focusedelementId.length-1]) - 1;
    
    // getTabNumber(focusedelement.id);
    var wgt = wt[oprid].value;
    var amt = netTotal[oprid].value;
    if(wgt == '' && amt == ''){
        console.error("Enter value in required fields");
        return;
    }
    wgt = parseInt(wgt);
    amt = parseInt(amt);
    if(oprid == orn.length - 1)
        createNewSaleInputs();
    orn[oprid+1].focus();
}

document.body.addEventListener('keydown', async function(event){
    if(event.key === "Enter"){
        calculate();
    }
})

function createNewSaleInputs(){
    newsalerow++;
    var newRow = document.createElement('tr');

    
    var cell1 = document.createElement('td');
    var cell2 = document.createElement('td');
    var cell3 = document.createElement('td');
    var cell4 = document.createElement('td');
    var cell5 = document.createElement('td');
    var cell6 = document.createElement('td');
    var cell7 = document.createElement('td');   

    cell1.innerText= newsalerow;
    cell1.id = "sino";
    newRow.appendChild(cell1);

    let ornaDropdown = document.createElement('input');
    ornaDropdown.id = "orna" + String(newsalerow);
    cell2.appendChild(ornaDropdown);
    newRow.appendChild(cell2);
    orn.push(ornaDropdown);
    
    input = document.createElement('input');
    input.type = 'number';
    input.id = "wei" + String(newsalerow);
    cell3.appendChild(input);
    newRow.appendChild(cell3);
    wt.push(input);
    
    input = document.createElement('input');
    input.type = 'number';
    input.id = "mc" + String(newsalerow);
    cell4.appendChild(input);
    newRow.appendChild(cell4);
    mc.push(input);
    
    input = document.createElement('input');
    input.type = 'number';
    input.id = "sgst" + String(newsalerow);
    cell5.appendChild(input);
    newRow.appendChild(cell5);
    sgst.push(input);
    
    input = document.createElement('input');
    input.type = 'number';
    input.id = "cgst" + String(newsalerow);
    cell6.appendChild(input);
    newRow.appendChild(cell6);
    cgst.push(input);

    input = document.createElement('input');
    input.type = 'number';
    input.id = "net" + String(newsalerow);
    cell7.appendChild(input);
    newRow.appendChild(cell7);
    netTotal.push(input);

    tableBody.appendChild(newRow);
    newRowAdded.push(newRow);

}
