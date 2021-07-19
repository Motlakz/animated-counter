const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = target/speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + inc); //round off the numbers
            setTimeout(updateCount, 1);
        }
    }
    updateCount();
});