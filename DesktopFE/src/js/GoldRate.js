let rate = document.getElementById("rateinput");
let rateDisplay = document.getElementById("ratedisplay");


document.getElementById("submitbtn").addEventListener('click' ,async () => {
    rateDisplay.innerText = rate.value;
    await bridge.sendGoldRate({
        GoldRate: rate.value}
    );
    rate.value = '';

});








document.getElementById("clear").addEventListener('click', ()=>{
    rate.value = '';
});








document.body.addEventListener('keydown', function(event){
    if(event.key === "Escape"){
        window.location.href = "../src/mainpage.html";
    }
});