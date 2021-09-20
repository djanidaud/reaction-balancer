const balance = require("./index");

const createTest = (name, reaction, shouldOutput) =>
  test(`Testing ${name}`, () => {
    console.log(Array.from(balance(reaction)).sort());
    console.log(shouldOutput.sort());
    expect(Array.from(balance(reaction)).sort()).toEqual(shouldOutput.sort());
  });

//
// createTest("H2 + O2 = H2O", { reactants: ["H2", "O2"], products: ["H2O"] }, [
//   ["H2", 2],
//   ["O2", 1],
//   ["H2O", 2],
// ]);
//
// createTest(
//   "Al + KOH + H2O = K3(Al(OH)6) + H2",
//   {
//     reactants: ["Al", "KOH", "H2O"],
//     products: ["K3(Al(OH)6)", "H2"],
//   },
//   [
//     ["Al", 2],
//     ["KOH", 6],
//     ["H2O", 6],
//     ["K3(Al(OH)6)", 2],
//     ["H2", 3],
//   ]
// );

createTest(
  "Na + H2O = NaOH + H2",
  { reactants: ["Na", "H2O"], products: ["NaOH", "H2"] },
  [
    ["Na", 2],
    ["H2O", 2],
    ["NaOH", 2],
    ["H2", 1],
  ]
);

createTest(
  "Cu + HCl + O2 = CuCl2 + H2O",
  { reactants: ["Cu", "HCl", "O2"], products: ["CuCl2", "H2O"] },
  [
    ["Cu", 2],
    ["HCl", 4],
    ["O2", 1],
    ["CuCl2", 2],
    ["H2O", 2],
  ]
);

createTest(
  "CoO + H2O + NaOH = Na2(Co(OH)4)",
  { reactants: ["CoO", "H2O", "NaOH"], products: ["Na2(Co(OH)4)"] },
  [
    ["CoO", 1],
    ["H2O", 1],
    ["NaOH", 2],
    ["Na2(Co(OH)4)", 1],
  ]
);

/*
  a  b  c  c`   d
Co         1
O          1
H          1
Na         1

 */
