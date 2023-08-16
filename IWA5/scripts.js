FREE_WARNING = 'Free shipping only applies to single customer orders'
BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
NONE_SELECTED = '0'

const shipping_cost_RSA = 400;
const shipping_cost_NAM = 600;
const shipping_cost_other = 800;
const free_shipping_threshold_RSA_NAM_cost = 1000;

const totalwithshipping = totalCostWithoutshipping + shipping;
const isBanned = location === 'NK';
const totalCost = calculateTotalCost(location, totalCostWithoutshipping);
const totalCostWithoutshipping = Object.values(items).reduce((total,itemcost) => total + itemcost, 0);

calculateTotalCost(location,totalCostWithoutshipping, FREE_WARNING, BANNED_WARNING);
const isFree = (location === 'RSA' || Location === 'NAM') &&
totalCostWithoutshipping >= free_shipping_threshold_RSA_NAM_cost &&
customers === 1;


const customers = 1;
const location = 'RSA';
const items = {
    shoes: 300,
    toys: 100 * 5,
    shirts: 150 * NONE_SELECTED,
    batteries: 35 * 2,
    pens: 5 * NONE_SELECTED
}

let currency = 'R';
let shipping = 0;

function calculateShippingCost(location,costWithoutShipping){
    if (location === 'RSA') {
        return costWithoutShipping >= free_shipping_threshold_RSA_NAM ? 0 : shipping_cost_RSA;
    } else if (location === 'NAM'){
        return costWithoutShipping >= free_shipping_threshold_RSA_NAM ? 0 : shipping_cost_NAM;
    } else {
        return shipping_cost_other;
    }
}

function calculateShippingCost1(location, costWithoutShipping){
    const shipingcost = calculateShippingCost(location,costWithoutShipping);
    return costWithoutShipping + shipingcost;
}

if(location === 'RSA'){
    currency = 'R'
    shipping = shipping_cost_RSA;
} else if (location === 'NAM'){
    currency = '$';
    shipping = shipping_cost_RSA;
} else {
    currency = '$';
    shipping = shipping_cost_other;
}

if(isBanned) {
    console.log(BANNED_WARNING);
} else {
    if (isFree) {
        console.log('price: free');
    } else {
        console.log('price:', currency + totalCost);
    }
}



