const featureControl1 = document.getElementById("1"),
    featureControl2 = document.getElementById("2"),
    featureControl3 = document.getElementById("3"),
    features = document.querySelectorAll(".feature")

const arrFeatures = [...features]
const controls = [featureControl1, featureControl2, featureControl3]

controls.forEach(e => {
    e.addEventListener("click", (i) => {
        let index = i.target.id

        controls.forEach(e => {
            e.classList.replace("controlActive", "controlUnactive")
        })

        e.classList.replace("controlUnactive", "controlActive")
        
        arrFeatures.forEach(e => {
            e.classList.replace("featureActive", "featureUnactive")
        })
        arrFeatures[index-1].classList.replace("featureUnactive", "featureActive")
        
    } )
})
