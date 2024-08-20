const counterEl = document.querySelectorAll(".counter");

counterEl.forEach(counterEl =>{
    counterEl.innerText = "0";
    incrementCounter();
    function incrementCounter()
    {   
        let currentNum = +counterEl.innerText;
        const dataciel =  counterEl.getAttribute("data-ceil");
        console.log(dataciel);
        const increment = dataciel / 15;
        currentNum = Math.floor(currentNum + increment);
        
        if(currentNum < dataciel)
        {
            counterEl.innerText = currentNum;
            setTimeout(incrementCounter,50);
        }
        else
        {
            counterEl.innerText = dataciel
        }
    }
})