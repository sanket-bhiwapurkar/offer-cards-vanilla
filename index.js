// selecting all the radio button input inside offer cards
const offerCardsRadios = document.querySelectorAll(".offer-card .radio")

// adding change event listener to each radio input
offerCardsRadios.forEach(radio => {
    radio.addEventListener('change', handleOfferCardRadioChange)
})

// defining the callback for radio input change event listener
function handleOfferCardRadioChange(event) {
    document.querySelectorAll('.offer-card').forEach(offerCard => {
        // turning all the offer-card off when a radio input is changed and hiding all the relevant elements
        offerCard.classList.remove("active")
        offerCard.querySelectorAll('.active-show').forEach(item => item.style.display = "none")
    })
    // slecting the label coontainer from inside which radio button was turned on
    const offerCard = document.querySelector(`label[for="${event.target.id}"]`);
    if (offerCard) {
        // turning the offer-card on when the current radio input is Checked and showing all the relevant elements inside it
        offerCard.classList.add('active');
        offerCard.querySelectorAll('.active-show').forEach(item => item.style.display = "initial")
    }
}