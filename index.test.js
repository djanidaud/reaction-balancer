const balance = require("./index");

const reactions = [
  {
    reactants: ["F2", "H2"],
    products: ["HF"],
    coeffs: [
      ["F2", 1],
      ["H2", 1],
      ["HF", 2],
    ],
  },
  {
    reactants: ["H2", "I2"],
    products: ["HI"],
    coeffs: [
      ["H2", 1],
      ["I2", 1],
      ["HI", 2],
    ],
  },
  {
    reactants: ["H2", "Br2"],
    products: ["HBr"],
    coeffs: [
      ["Br2", 1],
      ["H2", 1],
      ["HBr", 2],
    ],
  },
  {
    reactants: ["Ca", "H2"],
    products: ["CaH2"],
    coeffs: [
      ["Ca", 1],
      ["H2", 1],
      ["CaH2", 1],
    ],
  },
  {
    reactants: ["Sr", "H2"],
    products: ["SrH2"],
    coeffs: [
      ["H2", 1],
      ["Sr", 1],
      ["SrH2", 1],
    ],
  },
  {
    reactants: ["Ba", "H2"],
    products: ["BaH2"],
    coeffs: [
      ["Ba", 1],
      ["H2", 1],
      ["BaH2", 1],
    ],
  },
  {
    reactants: ["Ra", "H2"],
    products: ["RaH2"],
    coeffs: [
      ["H2", 1],
      ["Ra", 1],
      ["RaH2", 1],
    ],
  },
  {
    reactants: ["B", "H2"],
    products: ["B2H6"],
    coeffs: [
      ["B", 2],
      ["H2", 3],
      ["B2H6", 1],
    ],
  },
  {
    reactants: ["B", "H2"],
    products: ["BH3"],
    coeffs: [
      ["B", 2],
      ["H2", 3],
      ["BH3", 2],
    ],
  },
  {
    reactants: ["Al", "H2"],
    products: ["AlH3"],
    coeffs: [
      ["Al", 2],
      ["H2", 3],
      ["AlH3", 2],
    ],
  },
  {
    reactants: ["Sn", "H2"],
    products: ["SnH4"],
    coeffs: [
      ["H2", 2],
      ["Sn", 1],
      ["SnH4", 1],
    ],
  },
  {
    reactants: ["N2", "H2"],
    products: ["NH3"],
    coeffs: [
      ["H2", 3],
      ["N2", 1],
      ["NH3", 2],
    ],
  },
  {
    reactants: ["P", "H2"],
    products: ["PH3"],
    coeffs: [
      ["H2", 3],
      ["P", 2],
      ["PH3", 2],
    ],
  },
  {
    reactants: ["H2", "S"],
    products: ["H2S"],
    coeffs: [
      ["H2", 1],
      ["S", 1],
      ["H2S", 1],
    ],
  },
  {
    reactants: ["H2", "Se"],
    products: ["H2Se"],
    coeffs: [
      ["H2", 1],
      ["Se", 1],
      ["H2Se", 1],
    ],
  },
  {
    reactants: ["H2", "Te"],
    products: ["H2Te"],
    coeffs: [
      ["H2", 1],
      ["Te", 1],
      ["H2Te", 1],
    ],
  },
  {
    reactants: ["As", "H2"],
    products: ["AsH3"],
    coeffs: [
      ["As", 2],
      ["H2", 3],
      ["AsH3", 2],
    ],
  },
  {
    reactants: ["Sb", "H2"],
    products: ["SbH3"],
    coeffs: [
      ["H2", 3],
      ["Sb", 2],
      ["SbH3", 2],
    ],
  },
  {
    reactants: ["H2O", "Cl2"],
    products: ["HCl", "HClO"],
    coeffs: [
      ["Cl2", 1],
      ["H2O", 1],
      ["HCl", 1],
      ["HClO", 1],
    ],
  },
  {
    reactants: ["C", "O2"],
    products: ["CO2"],
    coeffs: [
      ["C", 1],
      ["O2", 1],
      ["CO2", 1],
    ],
  },
  {
    reactants: ["C", "O2"],
    products: ["CO"],
    coeffs: [
      ["C", 2],
      ["O2", 1],
      ["CO", 2],
    ],
  },
  {
    reactants: ["Na", "O2"],
    products: ["Na2O"],
    coeffs: [
      ["Na", 4],
      ["O2", 1],
      ["Na2O", 2],
    ],
  },
  {
    reactants: ["Na2O", "H2O"],
    products: ["NaOH"],
    coeffs: [
      ["H2O", 1],
      ["Na2O", 1],
      ["NaOH", 2],
    ],
  },
  {
    reactants: ["Fe", "O2"],
    products: ["FeO"],
    coeffs: [
      ["Fe", 2],
      ["O2", 1],
      ["FeO", 2],
    ],
  },
  {
    reactants: ["Fe", "O2"],
    products: ["Fe2O3"],
    coeffs: [
      ["Fe", 4],
      ["O2", 3],
      ["Fe2O3", 2],
    ],
  },
  {
    reactants: ["Fe2O3", "H2O"],
    products: ["Fe(OH)3"],
    coeffs: [
      ["Fe2O3", 1],
      ["H2O", 3],
      ["Fe(OH)3", 2],
    ],
  },

  {
    reactants: ["NO", "O2"],
    products: ["NO2"],
    coeffs: [
      ["NO", 2],
      ["O2", 1],
      ["NO2", 2],
    ],
  },
  {
    reactants: ["NO2", "H2O"],
    products: ["HNO3", "HNO2"],
    coeffs: [
      ["H2O", 1],
      ["NO2", 2],
      ["HNO2", 1],
      ["HNO3", 1],
    ],
  },
  {
    reactants: ["HNO3", "Zn(OH)2"],
    products: ["Zn(NO3)2", "H2O"],
    coeffs: [
      ["HNO3", 2],
      ["Zn(OH)2", 1],
      ["H2O", 2],
      ["Zn(NO3)2", 1],
    ],
  },
  {
    reactants: ["NH3", "H2O"],
    products: ["NH4OH"],
    coeffs: [
      ["H2O", 1],
      ["NH3", 1],
      ["NH4OH", 1],
    ],
  },
  {
    reactants: ["NH4OH", "HNO3"],
    products: ["NH4NO3", "H2O"],
    coeffs: [
      ["HNO3", 1],
      ["NH4OH", 1],
      ["H2O", 1],
      ["NH4NO3", 1],
    ],
  },
  {
    reactants: ["NH3", "H2SO4"],
    products: ["(NH4)2SO4"],
    coeffs: [
      ["H2SO4", 1],
      ["NH3", 2],
      ["(NH4)2SO4", 1],
    ],
  },
  {
    reactants: ["P", "O2"],
    products: ["P2O5"],
    coeffs: [
      ["O2", 5],
      ["P", 4],
      ["P2O5", 2],
    ],
  },
  {
    reactants: ["P2O5", "H2O"],
    products: ["H3PO4"],
    coeffs: [
      ["H2O", 3],
      ["P2O5", 1],
      ["H3PO4", 2],
    ],
  },
  {
    reactants: ["H3PO4", "NaOH"],
    products: ["Na3PO4", "H2O"],
    coeffs: [
      ["H3PO4", 1],
      ["NaOH", 3],
      ["H2O", 3],
      ["Na3PO4", 1],
    ],
  },
  {
    reactants: ["P2O5", "Na2O"],
    products: ["Na3PO4"],
    coeffs: [
      ["Na2O", 3],
      ["P2O5", 1],
      ["Na3PO4", 2],
    ],
  },
  {
    reactants: ["P", "Cl2"],
    products: ["PCl3"],
    coeffs: [
      ["Cl2", 3],
      ["P", 2],
      ["PCl3", 2],
    ],
  },
  {
    reactants: ["P", "Cl2"],
    products: ["PCl5"],
    coeffs: [
      ["Cl2", 5],
      ["P", 2],
      ["PCl5", 2],
    ],
  },
  {
    reactants: ["Na3PO4", "Ca(OH)2"],
    products: ["Ca3(PO4)2", "NaOH"],
    coeffs: [
      ["Ca(OH)2", 3],
      ["Na3PO4", 2],
      ["Ca3(PO4)2", 1],
      ["NaOH", 6],
    ],
  },
  {
    reactants: ["SO2", "H2O"],
    products: ["H2SO3"],
    coeffs: [
      ["H2O", 1],
      ["SO2", 1],
      ["H2SO3", 1],
    ],
  },
  {
    reactants: ["H2SO4", "BaCl2"],
    products: ["BaSO4", "HCl"],
    coeffs: [
      ["BaCl2", 1],
      ["H2SO4", 1],
      ["BaSO4", 1],
      ["HCl", 2],
    ],
  },
  {
    reactants: ["HCl", "KOH"],
    products: ["KCl", "H2O"],
    coeffs: [
      ["HCl", 1],
      ["KOH", 1],
      ["H2O", 1],
      ["KCl", 1],
    ],
  },
  {
    reactants: ["KCl", "AgNO3"],
    products: ["KNO3", "AgCl"],
    coeffs: [
      ["AgNO3", 1],
      ["KCl", 1],
      ["AgCl", 1],
      ["KNO3", 1],
    ],
  },
  {
    reactants: ["HCl", "AgNO3"],
    products: ["AgCl", "HNO3"],
    coeffs: [
      ["AgNO3", 1],
      ["HCl", 1],
      ["AgCl", 1],
      ["HNO3", 1],
    ],
  },
  {
    reactants: ["S", "O2"],
    products: ["SO2"],
    coeffs: [
      ["O2", 1],
      ["S", 1],
      ["SO2", 1],
    ],
  },
  {
    reactants: ["H2SO3", "H2O2"],
    products: ["H2SO4", "H2O"],
    coeffs: [
      ["H2O2", 1],
      ["H2SO3", 1],
      ["H2O", 1],
      ["H2SO4", 1],
    ],
  },
  {
    reactants: ["H2SO4", "Pb(NO3)2"],
    products: ["PbSO4", "HNO3"],
    coeffs: [
      ["H2SO4", 1],
      ["Pb(NO3)2", 1],
      ["HNO3", 2],
      ["PbSO4", 1],
    ],
  },
  {
    reactants: ["S", "Na"],
    products: ["Na2S"],
    coeffs: [
      ["Na", 2],
      ["S", 1],
      ["Na2S", 1],
    ],
  },
  {
    reactants: ["H2S", "NaOH"],
    products: ["Na2S", "H2O"],
    coeffs: [
      ["H2S", 1],
      ["NaOH", 2],
      ["H2O", 2],
      ["Na2S", 1],
    ],
  },
  {
    reactants: ["S", "Zn"],
    products: ["ZnS"],
    coeffs: [
      ["S", 1],
      ["Zn", 1],
      ["ZnS", 1],
    ],
  },
  {
    reactants: ["ZnS", "HCl"],
    products: ["H2S", "ZnCl2"],
    coeffs: [
      ["HCl", 2],
      ["ZnS", 1],
      ["H2S", 1],
      ["ZnCl2", 1],
    ],
  },
  {
    reactants: ["H2S", "Pb(NO3)2"],
    products: ["PbS", "HNO3"],
    coeffs: [
      ["H2S", 1],
      ["Pb(NO3)2", 1],
      ["HNO3", 2],
      ["PbS", 1],
    ],
  },
  {
    reactants: ["H2S", "Cl2"],
    products: ["HCl", "S"],
    coeffs: [
      ["Cl2", 1],
      ["H2S", 1],
      ["HCl", 2],
      ["S", 1],
    ],
  },
  {
    reactants: ["H2S", "O2"],
    products: ["H2O", "S"],
    coeffs: [
      ["H2S", 2],
      ["O2", 1],
      ["H2O", 2],
      ["S", 2],
    ],
  },

  {
    reactants: ["Al2O3", "KOH", "H2O"],
    products: ["K3(Al(OH)6)"],
    coeffs: [
      ["Al2O3", 1],
      ["H2O", 3],
      ["KOH", 6],
      ["K3(Al(OH)6)", 2],
    ],
  },
  {
    reactants: ["Al", "KOH", "H2O"],
    products: ["K3(Al(OH)6)", "H2"],
    coeffs: [
      ["Al", 2],
      ["H2O", 6],
      ["KOH", 6],
      ["H2", 3],
      ["K3(Al(OH)6)", 2],
    ],
  },
  {
    reactants: ["Mg(OH)2", "HCl"],
    products: ["MgCl2", "H2O"],
    coeffs: [
      ["HCl", 2],
      ["Mg(OH)2", 1],
      ["H2O", 2],
      ["MgCl2", 1],
    ],
  },
  {
    reactants: ["MgO", "HCl"],
    products: ["MgCl2", "H2O"],
    coeffs: [
      ["HCl", 2],
      ["MgO", 1],
      ["H2O", 1],
      ["MgCl2", 1],
    ],
  },
  {
    reactants: ["HCl", "Cu(OH)2"],
    products: ["CuCl2", "H2O"],
    coeffs: [
      ["Cu(OH)2", 1],
      ["HCl", 2],
      ["CuCl2", 1],
      ["H2O", 2],
    ],
  },
  {
    reactants: ["Cl2", "H2O"],
    products: ["HCl", "HOCl"],
    coeffs: [
      ["Cl2", 1],
      ["H2O", 1],
      ["HCl", 1],
      ["HOCl", 1],
    ],
  },
  {
    reactants: ["Fe", "Cl2"],
    products: ["FeCl3"],
    coeffs: [
      ["Cl2", 3],
      ["Fe", 2],
      ["FeCl3", 2],
    ],
  },
  {
    reactants: ["Cl2", "Cu"],
    products: ["CuCl2"],
    coeffs: [
      ["Cl2", 1],
      ["Cu", 1],
      ["CuCl2", 1],
    ],
  },
  {
    reactants: ["Fe", "S"],
    products: ["FeS"],
    coeffs: [
      ["Fe", 1],
      ["S", 1],
      ["FeS", 1],
    ],
  },
  {
    reactants: ["FeS", "O2"],
    products: ["FeO", "SO2"],
    coeffs: [
      ["FeS", 2],
      ["O2", 3],
      ["FeO", 2],
      ["SO2", 2],
    ],
  },
  {
    reactants: ["FeO", "HCl"],
    products: ["FeCl2", "H2O"],
    coeffs: [
      ["FeO", 1],
      ["HCl", 2],
      ["FeCl2", 1],
      ["H2O", 1],
    ],
  },
  {
    reactants: ["FeCl3", "NaOH"],
    products: ["Fe(OH)3", "NaCl"],
    coeffs: [
      ["FeCl3", 1],
      ["NaOH", 3],
      ["Fe(OH)3", 1],
      ["NaCl", 3],
    ],
  },
  {
    reactants: ["Fe(OH)3"],
    products: ["Fe2O3", "H2O"],
    coeffs: [
      ["Fe(OH)3", 2],
      ["Fe2O3", 1],
      ["H2O", 3],
    ],
  },
  {
    reactants: ["Fe2O3", "C"],
    products: ["Fe", "CO"],
    coeffs: [
      ["C", 3],
      ["Fe2O3", 1],
      ["CO", 3],
      ["Fe", 2],
    ],
  },
  {
    reactants: ["CuSO4", "NaOH"],
    products: ["Cu(OH)2", "Na2SO4"],
    coeffs: [
      ["CuSO4", 1],
      ["NaOH", 2],
      ["Cu(OH)2", 1],
      ["Na2SO4", 1],
    ],
  },
  {
    reactants: ["Cu(OH)2"],
    products: ["CuO", "H2O"],
    coeffs: [
      ["Cu(OH)2", 1],
      ["CuO", 1],
      ["H2O", 1],
    ],
  },
  {
    reactants: ["CuO", "HCl"],
    products: ["CuCl2", "H2O"],
    coeffs: [
      ["CuO", 1],
      ["HCl", 2],
      ["CuCl2", 1],
      ["H2O", 1],
    ],
  },
  {
    reactants: ["CuO"],
    products: ["Cu2O", "O2"],
    coeffs: [
      ["CuO", 4],
      ["Cu2O", 2],
      ["O2", 1],
    ],
  },
  {
    reactants: ["CuO", "C"],
    products: ["Cu", "CO"],
    coeffs: [
      ["C", 1],
      ["CuO", 1],
      ["CO", 1],
      ["Cu", 1],
    ],
  },
  {
    reactants: ["CuO", "H2"],
    products: ["Cu", "H2O"],
    coeffs: [
      ["CuO", 1],
      ["H2", 1],
      ["Cu", 1],
      ["H2O", 1],
    ],
  },
  {
    reactants: ["CuO", "HCl"],
    products: ["CuCl2", "H2O"],
    coeffs: [
      ["CuO", 1],
      ["HCl", 2],
      ["CuCl2", 1],
      ["H2O", 1],
    ],
  },
  {
    reactants: ["CuCl2", "NaOH"],
    products: ["Cu(OH)2", "NaCl"],
    coeffs: [
      ["CuCl2", 1],
      ["NaOH", 2],
      ["Cu(OH)2", 1],
      ["NaCl", 2],
    ],
  },
  {
    reactants: ["CuO", "H2SO4"],
    products: ["CuSO4", "H2O"],
    coeffs: [
      ["CuO", 1],
      ["H2SO4", 1],
      ["CuSO4", 1],
      ["H2O", 1],
    ],
  },
  {
    reactants: ["Cu", "HCl", "O2"],
    products: ["CuCl2", "H2O"],
    coeffs: [
      ["Cu", 2],
      ["HCl", 4],
      ["O2", 1],
      ["CuCl2", 2],
      ["H2O", 2],
    ],
  },
  {
    reactants: ["FeS", "HCl"],
    products: ["H2S", "FeCl2"],
    coeffs: [
      ["FeS", 1],
      ["HCl", 2],
      ["FeCl2", 1],
      ["H2S", 1],
    ],
  },
  {
    reactants: ["FeCl2", "Cl2"],
    products: ["FeCl3"],
    coeffs: [
      ["Cl2", 1],
      ["FeCl2", 2],
      ["FeCl3", 2],
    ],
  },
  {
    reactants: ["HgO", "Cl2"],
    products: ["HgCl2", "Cl2O"],
    coeffs: [
      ["Cl2", 2],
      ["HgO", 1],
      ["Cl2O", 1],
      ["HgCl2", 1],
    ],
  },
  {
    reactants: ["Cl2O", "H2O"],
    products: ["HClO"],
    coeffs: [
      ["Cl2O", 1],
      ["H2O", 1],
      ["HClO", 2],
    ],
  },
  {
    reactants: ["PbO", "PbS"],
    products: ["SO2", "Pb"],
    coeffs: [
      ["PbO", 2],
      ["PbS", 1],
      ["Pb", 3],
      ["SO2", 1],
    ],
  },
  {
    reactants: ["Cl2", "Pb"],
    products: ["PbCl2"],
    coeffs: [
      ["Cl2", 1],
      ["Pb", 1],
      ["PbCl2", 1],
    ],
  },
  {
    reactants: ["NaOH", "Pb"],
    products: ["H2", "Na2PbO2"],
    coeffs: [
      ["NaOH", 2],
      ["Pb", 1],
      ["H2", 1],
      ["Na2PbO2", 1],
    ],
  },
  {
    reactants: ["PbO2"],
    products: ["O2", "PbO"],
    coeffs: [
      ["PbO2", 2],
      ["O2", 1],
      ["PbO", 2],
    ],
  },
  {
    reactants: ["NaOH", "PbO"],
    products: ["H2O", "Na2PbO2"],
    coeffs: [
      ["NaOH", 2],
      ["PbO", 1],
      ["H2O", 1],
      ["Na2PbO2", 1],
    ],
  },
  {
    reactants: ["Br2", "H2O", "PbO"],
    products: ["HBr", "PbO2"],
    coeffs: [
      ["Br2", 1],
      ["H2O", 1],
      ["PbO", 1],
      ["HBr", 2],
      ["PbO2", 1],
    ],
  },
  {
    reactants: ["H2SO4", "MnSO4", "PbO2"],
    products: ["H2O", "HMnO4", "PbSO4"],
    coeffs: [
      ["H2SO4", 3],
      ["MnSO4", 2],
      ["PbO2", 5],
      ["H2O", 2],
      ["HMnO4", 2],
      ["PbSO4", 5],
    ],
  },
  {
    reactants: ["O2", "Sb"],
    products: ["Sb2O3"],
    coeffs: [
      ["O2", 3],
      ["Sb", 4],
      ["Sb2O3", 2],
    ],
  },
  {
    reactants: ["O2", "Sb2S3"],
    products: ["SO2", "Sb2O3"],
    coeffs: [
      ["O2", 9],
      ["Sb2S3", 2],
      ["SO2", 6],
      ["Sb2O3", 2],
    ],
  },
  {
    reactants: ["As", "O2"],
    products: ["As2O3"],
    coeffs: [
      ["As", 4],
      ["O2", 3],
      ["As2O3", 2],
    ],
  },
  {
    reactants: ["As2S3", "O2"],
    products: ["As2O3", "SO2"],
    coeffs: [
      ["As2S3", 2],
      ["O2", 9],
      ["As2O3", 2],
      ["SO2", 6],
    ],
  },
  {
    reactants: ["AsCl3", "H2O"],
    products: ["As2O3", "HCl"],
    coeffs: [
      ["AsCl3", 2],
      ["H2O", 3],
      ["As2O3", 1],
      ["HCl", 6],
    ],
  },
  {
    reactants: ["As2O3", "HCl"],
    products: ["AsCl3", "H2O"],
    coeffs: [
      ["As2O3", 1],
      ["HCl", 6],
      ["AsCl3", 2],
      ["H2O", 3],
    ],
  },
  {
    reactants: ["As2O3", "HF"],
    products: ["AsF3", "H2O"],
    coeffs: [
      ["As2O3", 1],
      ["HF", 6],
      ["AsF3", 2],
      ["H2O", 3],
    ],
  },

  {
    reactants: ["Al", "Cr2O3"],
    products: ["Al2O3", "Cr"],
    coeffs: [
      ["Al", 2],
      ["Cr2O3", 1],
      ["Al2O3", 1],
      ["Cr", 2],
    ],
  },
  {
    reactants: ["CO", "H2O", "PbCl2"],
    products: ["CO2", "HCl", "Pb"],
    coeffs: [
      ["CO", 1],
      ["H2O", 1],
      ["PbCl2", 1],
      ["CO2", 1],
      ["HCl", 2],
      ["Pb", 1],
    ],
  },
  {
    reactants: ["CO", "Fe"],
    products: ["Fe(CO)5"],
    coeffs: [
      ["CO", 5],
      ["Fe", 1],
      ["Fe(CO)5", 1],
    ],
  },
  {
    reactants: ["CO2", "Mg"],
    products: ["C", "MgO"],
    coeffs: [
      ["CO2", 1],
      ["Mg", 2],
      ["C", 1],
      ["MgO", 2],
    ],
  },
];

const createTest = (name, reaction, shouldOutput) =>
  test(`Testing ${name}`, () =>
    expect(Array.from(balance(reaction)).sort().toString()).toEqual(
      shouldOutput.sort().toString()
    ));

reactions.forEach(({ reactants, products, coeffs }, index) =>
  createTest(`test ${index}`, { reactants, products }, coeffs)
);
