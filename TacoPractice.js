
let listOfIngredients = [
    ['al pastor', 'Mexico'],
    ['salsa', 'Mexico'],
    ['tortilla', 'Mexico'],
    ['cebolla', 'Mexico'],
    ['limon', 'Mexico']
];                    

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
        
         for (let i = 0; i < listOfIngredients.length; i++) {
            let [ingredientName, countryOrigin] =  listOfIngredients[i];
            let message = `Your order has the ingredient ${ingredientName} and it's from ${countryOrigin}!`;
            let node = document.createElement("div");
            node.appendChild(document.createTextNode(message)); //html should have message from 
            document.getElementById("myLog").appendChild(node);

     }
    } else {
        x.style.display = "none";
        let parent = document.getElementById("myLog");
        let childNodes = parent.childNodes;
        for (let i = 0; i <= childNodes.length; i++){

            parent.removeChild(childNodes[i]);
        }
    }
}