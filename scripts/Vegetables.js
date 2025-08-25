import { setVegetablePrice } from "./TransientState.js"

const handleInputChange = (changeEvent) => {
    if (changeEvent.target.name === "vegetable") {
        const convertedValueToNumber = parseFloat(changeEvent.target.value).toFixed(2)
        setVegetablePrice(convertedValueToNumber)
    }
}
export const Vegetables = async () => {
    document.addEventListener("change", handleInputChange)
    const vegetables = await fetch("http://localhost:8088/vegetables").then(res => res.json())

    let html = `
        <article>
            <h2>Vegetables</h2>
        
    `
    const divStringArray = vegetables.map(
        (vegetablesObject) => {
            return `
                <div>
                    <input 
                        type="radio" 
                        name="vegetable" 
                        value="${vegetablesObject.price}" 
                    /> 
                    ${vegetablesObject.type} - $${parseFloat(vegetablesObject.price).toFixed(2)}
                </div>
            `
        }
    )
    
    html += divStringArray.join("")

    html += `
        </article>
    `

    return html
}
