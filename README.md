# Reaction Balancer
A simple and efficient balancer of chemical equations. 

Takes a chemical reaction and balances it. Each chemical reaction is inputted as an `{reactants: string[], products: string[]}` object.


# Example Usages
## Balancing H<sub>2</sub> + O<sub>2</sub> = H<sub>2</sub>O 
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

## Balancing Fe<sub>2</sub>O<sub>3</sub> + H<sub>2</sub>O = Fe(OH)<sub>3</sub>
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

# How it works
## Step I: Computing the Chemical-Composition Matrix
To balance a chemical reaction, we first represent it as a series of linear equations. We construct a chemical-composition matrix (A chemical-composition matrix specifies the numbers of atoms of each chemical element that make up each of the reactants and products specified in a given reaction equation.)

eg `H2 + O2 = H2O` would result in the following composition matrix:

  `[[2, 0, -2], [0, 2, -1]]`

the semantic of which is:
```
   (a)(b)(c)        where a, b, and c
(H) 2  0 -2         are the coefficients in   
(O) 0  2 -1         aH2 + bO2 - cH2O = 0
```

## Step II: Transforming the matrix into Row Echelon Form
The reduction algorithm that the package uses is based on [Rosetta Code's version](https://rosettacode.org/wiki/Reduced_row_echelon_form) which is the de facto standard of computing the row echelon form of a matrix. 

It is important to note that Gaussian Elimination 
(the way RREF is computed) is incredibly vulnerable 
to round-off errors. [Round-off errors](https://en.wikipedia.org/wiki/Round-off_error) are a pervasive problem in numerical analysis. Almost
any algorithm that requires we conduct a lot of
simple arithmetic steps is subject to this problem. Unfortunately, this applies to Gaussian Elimination too - performing Gaussian
elimination on an n by n matrix typically requires approximately O(n<sup>3</sup>) arithmetic operations (which is feasible, but still a lot!). 

<b>So how have we resolved this issue?</b> Technically, as long as we are doing a lot of arithmetic with floating-point numbers, we can't fully
prevent round-offs. For this reason, the package uses [math.js](https://mathjs.org)'s `Fractions`, 
which completely replace the need for any calculations with floating-point numbers, <b>thus preventing any round-off errors from ever occurring!</b>

## Step III: Scaling the Coefficients
After extracting the coefficients from the composition matrix, which is now in reduced row echelon form, we scale them appropriately so that they become whole numbers.

And Voilà - these 3 steps cover pretty much everything about how the algorithm works.
