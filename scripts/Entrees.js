import { setEntreePrice } from "./TransientState.js"

const handleInputChange = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        const convertedValueToNumber = parseFloat(changeEvent.target.value).toFixed(2)
        setEntreePrice(convertedValueToNumber)
    }
}

export const Entrees = async () => {
    document.addEventListener("change", handleInputChange)
    const entrees = await fetch("http://localhost:8088/entrees").then(res => res.json())

    let html = `
        <article>
            <h2>Entrées</h2>
        
    `
    const divStringArray = entrees.map(
        (entreesObject) => {
            return `
                <div>
                    <input 
                        type="radio" 
                        name="entree" 
                        value="${entreesObject.price}" 
                    /> 
                    ${entreesObject.name} - $${parseFloat(entreesObject.price).toFixed(2)}
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

