import { savePurchase } from "./TransientState.js"

const handleButtonClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        savePurchase()
    }
}

export const PurchaseCombo = () => {
    document.addEventListener("click", handleButtonClick)

    return `<button id="purchase">Purchase Combo</button>`
}