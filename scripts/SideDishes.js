import { setSideDishPrice } from "./TransientState.js"

const handleInputChange = (changeEvent) => {
    if (changeEvent.target.name === "sideDish") {
        const convertedValueToNumber = parseFloat(changeEvent.target.value).toFixed(2)
        setSideDishPrice(convertedValueToNumber)
    }
}
export const SideDishes = async () => {
    document.addEventListener("change", handleInputChange)
    const sideDishes = await fetch("http://localhost:8088/sides").then(res => res.json())

    let html = `
        <article>
            <h2>Side Dishes</h2>
        
    `
    const divStringArray = sideDishes.map(
        (sidesObject) => {
            return `
                <div>
                    <input 
                        type="radio" 
                        name="sideDish" 
                        value="${sidesObject.price}" 
                    /> 
                    ${sidesObject.title} - $${parseFloat(sidesObject.price).toFixed(2)}
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
