const cards = document.querySelectorAll('.memory_card');
let fc, sc;
let flipped = false, lb = true;

cards.forEach((card) => (card.style.order = parseInt(Math.random() * cards.length)));
function flipCard(){
    if(sc !== null && sc !== undefined || this == fc)
        return;
    this.classList.toggle('flip');
    if(flipped == true){
        sc = this;
        flipped = false;
        if(fc.dataset.id === sc.dataset.id){
            setTimeout(function(){
                sc.style.visibility = "hidden";
                fc.style.visibility = "hidden";
                sc = null, fc = null;},
                 550);
            fc.removeEventListener('click', flipCard);
            sc.removeEventListener('click', flipCard);
        }
        else{
            setTimeout(function(){
                fc.classList.toggle('flip');
                sc.classList.toggle('flip');
                sc = null, fc = null;}, 
                500);
        }
    }
    else{
        flipped = true;
        fc = this;
    }
    console.log({fc, sc, flipped} );
}
cards.forEach(card => card.addEventListener('click', flipCard));