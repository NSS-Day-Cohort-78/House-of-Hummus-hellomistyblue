// object for veggie, side, entree prices

export const transientState = {
    entreePrice: 0,
    vegetablePrice: 0,
    sideDishPrice: 0
}

// setter functions, one for each price - listen for change on inputs and update transient state

export const setEntreePrice = (price) => {
    transientState.entreePrice = Number(price)
}

export const setVegetablePrice = (price) => {
    transientState.vegetablePrice = Number(price)
}

export const setSideDishPrice = (price) => {
    transientState.sideDishPrice = Number(price)
}

export const savePurchase = async () => {
    if (transientState.entreePrice > 0 || transientState.vegetablePrice > 0 || transientState.sideDishPrice > 0) {

        const calculatedTotal = transientState.entreePrice + transientState.vegetablePrice + transientState.sideDishPrice 
        
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({total: calculatedTotal})
    }
    const response = await fetch("http://localhost:8088/purchases", postOptions)

    const newPurchaseEvent = new CustomEvent("newPurchaseCreated")
    document.dispatchEvent(newPurchaseEvent)

    }
    else {
        window.alert(`Please choose at least one option to submit order`)
    }
}
