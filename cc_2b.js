// Coding Challenge 2b
const itemName = "Sushi Roll"
let unitCost = 20
let currentStock = 100
let reorderLevel = 40
let targetStock = 150
let weeklyDemand = 100
let supplierLeadTimeWeeks = 1

let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit = Math.max(0, targetStock - currentStock)
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0
let estimatedReorderCost = reorderQuantity * unitCost
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks

console.log("Item Name:" , itemName)
console.log("Weeks of Cover:", weeksOfCover.toFixed(2))
console.log("Reorder Now?:", reorderNow)
console.log("Recommended Reorder Quantity:" , reorderQuantity)
console.log("Estimated Reorder Cost: $" + estimatedReorderCost.toFixed(2))
// Code goes here