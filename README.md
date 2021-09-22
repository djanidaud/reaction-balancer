# Reaction Balancer
A simple and efficient balancer of chemical equations. 

Takes a chemical reaction and balances it. Each chemical reaction is inputted as an `{reactants: string[], products: string[]}` object.
<hr>

# Example Usages
### Balancing H<sub>2</sub> + O<sub>2</sub> = H<sub>2</sub>O 
```js
const balance = require("reaction-balancer");

// H2 + O2 -> H2O
const reaction = {
    reactants: ["H2", "O2"],
    products: ["H2O"],
};
const coeffs = balance(reaction); // Map {"H2" => 2, "O2" => 1, "H2O" => 2}
```
Therefore, the balanced equation is: <b>`2`H<sub>2</sub> + O<sub>2</sub> = `2`H<sub>2</sub>O</b>
<hr>

### Balancing Fe<sub>2</sub>O<sub>3</sub> + H<sub>2</sub>O = Fe(OH)<sub>3</sub>
```js
const balance = require("reaction-balancer");

// Fe2O3 + H2O = Fe(OH)3
const reaction = {
    reactants: ["Fe2O3", "H2O"],
    products: ["Fe(OH)3"],
};
const coeffs = balance(reaction); // Map {"Fe2O3" => 1, "H2O" => 3, "Fe(OH)3" => 2}
```
In this case, the balanced equation is: <b>Fe<sub>2</sub>O<sub>3</sub> + `3`H<sub>2</sub>O = `2`Fe(OH)<sub>3</sub> </b>

# Installation
You can use the package by installing it with [npm](https://www.npmjs.com/package/reaction-balancer) `npm i reaction-balancer`

