const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line



console.log(sarahName.trim())
console.log(leoSurname.trim())

let positiveLeoBalance = Math.abs(leoBalance)
let positiveSarahBalance = Math.abs(sarahBalance)
 const owed = (positiveLeoBalance + positiveSarahBalance).toFixed(2)
 const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${positiveLeoBalance.toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${positiveSarahBalance.toFixed(2)})`
 const total = "Total amount owed:"
console.log(`\n${leo}\n${sarah}\n\n${divider}\n  ${total} R ${owed.toString().slice(0, 2)} ${owed.toString().slice(2)}\n${divider}`)