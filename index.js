const parseCompound = require("compound-parser");
const { create, all } = require("mathjs");
const mathjs = create(all);
mathjs.config({
  number: "Fraction",
});
const {
  fraction: frac,
  add,
  multiply,
  divide,
  abs,
  subtract,
  equal,
  gcd,
  min,
  number,
} = mathjs;

/**
 * Takes a chemical reaction and balances it.
 * Each chemical reaction is inputted as an {reactants: string[], products: string[]} object.
 *
 * eg. the chemical reaction "H2 + O2 = H2O" would be inputted as {reactants: ["H2", "O2"], products: ["H2O"]}
 * The return value would then be Map{"H2" => 2, "O2" => 1, "H2O" => 2} which translates to 2*H2 + O2 = 2*H2O
 *
 * @param   {string[]} reactants  An array of the different reactants of the chemical reaction
 * @param   {string[]} products   An array of the different products of the chemical reaction
 * @returns {Map<string, number>} A map of the different compounds and their coefficients
 */
const balance = ({ reactants, products }) => {
  const compounds = [...reactants, ...products];
  const reduced = rref(getCompositionMatrix(compounds, reactants.length));
  const wholeCoeffs = scaleFractions(coefficients(reduced));

  return new Map(compounds.map((compound, i) => [
    compound,
    {
      coefficient: wholeCoeffs[i], //adds a reactant and product type to the output, for simple referencing of the map. This is based off of the input. 
      type: i < reactants.length ? "reactant" : "product",
    },
  ]));
};

const coefficients = (reducedMatrix) => {
  const rows = reducedMatrix.length;
  const columns = reducedMatrix[0].length;
  const coeffs = reducedMatrix
    .map((row, i) =>
      row.filter((_, j) => j > i).reduce((acc, v) => add(acc, frac(v)), frac(0))
    )
    .map((val) => (equal(val, 0) ? frac(1) : val));
  coeffs.push(...Array(Math.max(0, columns - rows)).fill(frac(1)));
  return coeffs;
};

/** Takes a list of fractions and scales them evenly so that they become whole numbers*/
const scaleFractions = (fractions) => {
  const smallest = min(abs(fractions));
  const scaled = divide(fractions, smallest);
  const scalar = multiply(...scaled.map((val) => val.d || 1));
  const wholeNumbers = number(multiply(scaled, scalar));
  const greatestDivisor = gcd(...wholeNumbers);
  return wholeNumbers.map((num) => number(abs(divide(num, greatestDivisor))));
};

/** Takes a matrix and returns its reduced row echelon form */
const rref = (matrix) => {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let lead = 0;
  matrix = frac(matrix);

  for (let r = 0; r < rows; r++) {
    if (columns <= lead) return matrix;

    let i = r;
    while (equal(matrix[i][lead], 0)) {
      i++;
      if (rows === i) {
        i = r;
        lead++;
        if (columns === lead) return matrix;
      }
    }

    if (i !== r) {
      const tmp = matrix[i].map(({ s, d, n }) => frac({ s, d, n }));
      matrix[i] = matrix[r];
      matrix[r] = tmp;
    }

    let val = matrix[r][lead];
    matrix[r] = divide(matrix[r], val);

    for (let I = 0; I < rows; I++) {
      if (I === r) continue;
      val = matrix[I][lead];
      matrix[I] = subtract(matrix[I], multiply(val, matrix[r]));
    }
    lead++;
  }
  return matrix;
};

/**
 * Takes a list of compounds and computes its chemical-composition matrix.
 * A chemical-composition matrix specifies the numbers of atoms of each compound that participates in a given reaction.
 *
 * eg. inputting ["H2","O2","H2O"] would result in the following composition matrix:
 *
 *   [[2, 0, -2], [0, 2, -1]]
 *
 *   the semantics of which is:
 *
 *      (a)(b)(c)  where a, b, and c
 *   (H) 2  0 -2   are the coefficients in
 *   (O) 0  2 -1   a*H2 + b*O2 - c*H2O = 0
 *
 * @param compounds
 * @param numberOfReactants
 * @returns {[number[][], number[]]}
 */
const getCompositionMatrix = (compounds, numberOfReactants) =>
  getAtoms(compounds).map((atom) =>
    compounds
      .map(countAtoms(atom))
      .map((count, i) => (i < numberOfReactants ? count : -count))
  );

/**
 * Takes a list of compounds and returns an array of the different atoms that make up the compounds
 *
 * eg. inputting ["H2","O2","Fe","NaOH"] would return ["H","O","Fe","Na"]
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
