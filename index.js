function offerOptions() {
    // selecting all the radio input inside offer cards
    const offerCardsRadios = document.querySelectorAll(".offer-card .radio")

    // return if empty
    if (offerCardsRadios.length === 0) return

    // adding change event listener to each radio input
    offerCardsRadios.forEach(radio => {
        radio.addEventListener('change', handleOfferCardRadioChange)
    })

    // defining radio input change event listener callback
    function handleOfferCardRadioChange(event) {
        document.querySelectorAll('.offer-card').forEach(offerCard => {
            // collapsing all offer card
            offerCard.classList.remove("expanded")
            // Hiding relevant elements when collapsed
            offerCard.querySelectorAll('.expanded-show').forEach(item => item.style.display = "none")
        })
        // slecting the label coontainer from inside which radio button was turned on
        const offerCard = document.querySelector(`label[for="${event.target.id}"]`);
        if (offerCard) {
            // expanding all offer card
            offerCard.classList.add('expanded');
            // Hiding relevant elements when expanded
            offerCard.querySelectorAll('.expanded-show').forEach(item => item.style.display = "initial")
        }
    }
}

offerOptions()