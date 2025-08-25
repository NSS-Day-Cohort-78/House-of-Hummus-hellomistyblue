export const Purchases = async () => {
    const purchases = await fetch("http://localhost:8088/purchases").then(res => res.json())

    let purchasesHTML = `
        <div>   
    `
    const divStringArray = purchases.map(
        (purchasesObject) => {
            return `<p>Receipt #${purchasesObject.id} - $${purchasesObject.total}</p>`
        } 
    )
    purchasesHTML += divStringArray.join("")

    purchasesHTML += `
        </div>
    `

 return purchasesHTML

}


