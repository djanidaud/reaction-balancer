import { inv, det, multiply, gcd } from "mathjs";
import parseCompound from "compound-parser";

/**
 * Takes a chemical reaction and balances it.
 * Each chemical reaction is inputted as an {reactants: string[], products: string[]} object.
 *
 * eg. the chemical reaction "H2 + O2 = H2O" is inputted as {reactants: ["H2", "O2"], products: ["H2O"]}
 * The return value would then be Map{"H2" => 2, "O2" => 1, "H2O" => 2} which translates to 2*H2 + O2 = 2*H2O
 *
 * @param   {string[]} reactants  An array of the different reactants of the chemical reaction
 * @param   {string[]} products   An array of the different products of the chemical reaction
 * @returns {Map<string, number>} A map of the different compounds and their coefficients
 */
const balance = ({ reactants, products }) => {
    const compounds = [...reactants, ...products];
    const [A, vector] = getReactionMatrix(compounds, reactants.length);
    const inverse = inv(A);
    const determinant = det(A);

    const coeffs = multiply(multiply(inverse, vector), determinant);
    coeffs.push(determinant);
    const greatestMultiplier = gcd(coeffs);

    return new Map(
        coeffs.map((coeff, i) => [compounds[i], Math.abs(coeff / greatestMultiplier)])
    );
};

/**
 * Takes a list of compounds and computes a matrix of each atom's occurrences.
 * We also use the lastCompound to compute a vector with similar semantics.
 *
 * eg. inputting ["H2","O2","H2O"] would result in the following (matrix, vector) pair:
 *
 *   [[2, 0],[0, 2]] and [2, 1]
 *
 *   the meaning of which is:
 *
 *      (a)(b)   (c)  where a, b, and c
 *   (H) 2  0     2   are the coefficients in
 *   (O) 0  2     1   a*H2 + b*O2 = c*H2O
 *
 *
 * It is now straightforward to see that:
 * [[2, 0],[0, 2]] * [a, b] = [2,1], and `c` is the determinant of [[2, 0],[0, 2]]
 *
 * @param compounds
 * @param numberOfReactants
 * @returns {[number[][], number[]]}
 */
const getReactionMatrix = (compounds, numberOfReactants) => {
    const atoms = getAtoms(compounds);
    const lastCompound = compounds.pop();
    const matrix = atoms.map((atom) =>
        compounds
            .map(countAtoms(atom))
            .map((count, i) => (i < numberOfReactants ? count : -count))
    );
    const vector = atoms.map((atom) => countAtoms(atom)(lastCompound));

    compounds.push(lastCompound);
    return [matrix, vector];
};

/**
 * Takes a list of compounds and returns an array of the different atoms that make up the compounds
 *
 * eg. inputting ["H2","O2","Fe", "NaOH"] would return ["H","O","Fe", "Na"]
 *
 * @param {string[]} compounds   A list of chemical compounds
 * @returns {string[]}           The different atoms that make up those compounds
 */
const getAtoms = (compounds) => {
    const atoms = new Set();
    compounds.forEach((compound) =>
        compound.match(/[A-Z][a-z]*/g).forEach((el) => atoms.add(el))
    );
    return Array.from(atoms);
};

/**
 * Takes an atom and a compound and returns the number of occurrences of that atom
 * eg. inputting atom="H" and compound="H2O" would return 2
 */
const countAtoms = (atom) => (compound) =>
    parseCompound(compound).get(atom) || 0;

module.exports = balance;

