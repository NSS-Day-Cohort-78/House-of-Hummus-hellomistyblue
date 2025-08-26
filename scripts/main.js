import { Purchases } from "./Purchases.js"
import { Entrees } from "./Entrees.js"
import { Vegetables } from "./Vegetables.js"
import { SideDishes } from "./SideDishes.js"
import { PurchaseCombo } from "./PurchaseButton.js"

export const FoodTruck = async () => {
    const purchasesHTML = await Purchases()
    const entreesHTML = await Entrees()
    const vegetablesHTML = await Vegetables()
    const sidesHTML = await SideDishes()
    const purchaseComboHTML = PurchaseCombo()


    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <div class="choices">
            <section class="options">
                ${entreesHTML}
            </section>
            <section class="options">
                ${vegetablesHTML}
            </section>
            <section class="options">
                ${sidesHTML}
            </section>
        </div>
        <article>
            ${purchaseComboHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${purchasesHTML}
        </article>

    `
}


const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

document.addEventListener("newPurchaseCreated", renderAllHTML)

renderAllHTML()

