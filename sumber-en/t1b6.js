/* English source (DLP) — Science KSSM Form 1, Chapter 6.0 The Periodic Table.
   Translation of sumber/t1b6.js.
   Run `node bina.js --en t1b6` to check it and generate bank-en-t1b6.js.
   Structure must match sumber/t1b6.js exactly. Correct answer at index 0. */

const SPI = [
"Recall knowledge and skills about the periodic table.",
"Understand the periodic table and be able to explain this understanding.",
"Apply knowledge of the periodic table to explain natural events or phenomena and carry out simple tasks.",
"Analyse knowledge about the periodic table in the context of solving problems about natural events or phenomena.",
"Evaluate knowledge about the periodic table in the context of problem solving and decision making to carry out a task.",
"Design a presentation using various media / visuals / a folio / a poster / role play / drama in a creative and innovative way, using scientific knowledge and skills about the periodic table in the context of problem solving and decision making, taking into account the social / economic / cultural values of society."];

/* ---------- attachments ---------- */

const R_ATOM = {
  "jenis": "struktur",
  "mod": "lapisan",
  "lapisan": [
    {
      "label": "Nucleus",
      "tebal": 1.1,
      "isi": "merahLembut"
    },
    {
      "label": "First shell",
      "tebal": 1.3,
      "isi": "kertas2"
    },
    {
      "label": "Second shell",
      "tebal": 1.6,
      "isi": "kertas"
    }
  ],
  "kapsyen": "Figure 1 · Model of an atom (schematic diagram, not to scale).",
  "alt": "Concentric diagram: a nucleus in the middle, surrounded by the first shell and the second shell"
};

const R_JIRIM = {
  "jenis": "aliran",
  "mod": "siratan",
  "nod": [
    {
      "id": "j",
      "label": "Matter",
      "x": 1,
      "y": 0
    },
    {
      "id": "u",
      "label": "Element",
      "x": 0,
      "y": 1
    },
    {
      "id": "s",
      "label": "Compound",
      "x": 1,
      "y": 1
    },
    {
      "id": "c",
      "label": "Mixture",
      "x": 2,
      "y": 1
    },
    {
      "id": "u2",
      "label": "Iron",
      "x": 0,
      "y": 2
    },
    {
      "id": "s2",
      "label": "Water",
      "x": 1,
      "y": 2
    },
    {
      "id": "c2",
      "label": "Air",
      "x": 2,
      "y": 2
    }
  ],
  "panah": [
    [
      "j",
      "u"
    ],
    [
      "j",
      "s"
    ],
    [
      "j",
      "c"
    ],
    [
      "u",
      "u2"
    ],
    [
      "s",
      "s2"
    ],
    [
      "c",
      "c2"
    ]
  ],
  "kapsyen": "Figure 1 · Classification chart of matter with one example for each group.",
  "alt": "Classification chart: matter is divided into elements with iron as an example, compounds with water as an example, and mixtures with air as an example"
};

const T_UNSUR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Element</th>'+
'<th>Surface</th><th>Conducts electricity</th><th>When hit</th><th class="n">Melting point (&deg;C)</th></tr></thead><tbody>'+
'<tr><td>W</td><td>Shiny</td><td>Yes</td><td>Becomes a thin sheet</td><td class="n">1085</td></tr>'+
'<tr><td>X</td><td>Dull, yellow</td><td>No</td><td>Shatters into powder</td><td class="n">115</td></tr>'+
'<tr><td>Y</td><td>Shiny</td><td>Yes</td><td>Becomes a thin sheet</td><td class="n">660</td></tr>'+
'<tr><td>Z</td><td>Colourless gas</td><td>No</td><td>&mdash;</td><td class="n">&minus;249</td></tr>'+
'</tbody></table></div><p class="qnote">Observations of four elements in the laboratory. Z does not react with other substances.</p>';

const T_JISIM =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Experiment</th>'+
'<th class="n">Mass before (g)</th><th class="n">Mass after (g)</th><th>Observation</th></tr></thead><tbody>'+
'<tr><td>A: Magnesium ribbon burnt in a crucible, lid slightly lifted</td><td class="n">2.4</td><td class="n">4.0</td><td>White powder formed</td></tr>'+
'<tr><td>B: Iron powder and sulphur heated in a closed tube</td><td class="n">8.8</td><td class="n">8.8</td><td>Black solid formed, not attracted to a magnet</td></tr>'+
'<tr><td>C: Ice melted in a covered beaker</td><td class="n">50.0</td><td class="n">50.0</td><td>Water formed</td></tr>'+
'</tbody></table></div><p class="qnote">Mass is measured with an electronic balance. In A, the mass does not include the crucible. Fictional data based on real values.</p>';

const T_ASING =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Mixture</th>'+
'<th>Method suggested by Group Jaya</th></tr></thead><tbody>'+
'<tr><td>1. Sand and water</td><td>Filtration</td></tr>'+
'<tr><td>2. Iron powder and sulphur powder</td><td>Distillation</td></tr>'+
'<tr><td>3. Salt dissolved in water, salt needed</td><td>Evaporation</td></tr>'+
'<tr><td>4. Several dyes in black ink</td><td>Chromatography</td></tr>'+
'<tr><td>5. Water from seawater, water needed</td><td>Filtration</td></tr>'+
'</tbody></table></div><p class="qnote">Group Jaya is given five mixtures to separate in a science club competition.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Table Wall", sk:"6.1 Atoms, molecules, elements and compounds", lampiran:"atom",
 kadNama:"Atom", kadEm:"\u{269B}", kadFakta:"Atoms are very small: about 500 000 carbon atoms lined up in a row are only as wide as a strand of hair.",
 bosKadNama:"Periodic Table", bosKadEm:"\u{1F5C2}", bosKadFakta:"Dmitri Mendeleev arranged the periodic table in 1869 and left gaps for elements that had not yet been discovered.",
 soalan:[
 {j:"pilih",t:"The sub-atomic particle that is negatively charged is the:",p:["Electron","Proton","Neutron","Nucleus"],b:0,u:"Electrons move around the nucleus."},
 {j:"pilih",t:"The sub-atomic particle that has no charge is the:",p:["Neutron","Proton","Electron","Ion"],b:0,u:"Neutrons and protons are inside the nucleus."},
 {j:"pilih",t:"A substance that is made up of only one type of atom is called a(n):",p:["Element","Compound","Mixture","Solution"],b:0,u:"Examples are iron, oxygen and carbon."},
 {j:"pilih",t:"Water (H₂O) is classified as a:",p:["Compound","Element","Mixture","Atom"],b:0,u:"Hydrogen and oxygen are chemically combined."},
 {j:"pilih",t:"Two or more atoms that are chemically combined form a:",p:["Molecule","Proton","Electron","New element"],b:0,u:"For example, an oxygen molecule (O₂) contains two oxygen atoms."},
 {j:"pilih",t:"Based on Figure 1, the electrons of an atom move in the:",p:["Shells","Nucleus in the middle of the atom","Space outside the atom","Positively charged core"],b:0,u:"Electrons move in shells that surround the nucleus."},
 {j:"pilih",t:"Most of the elements in the periodic table are:",p:["Metals","Non-metals","Noble gases","Liquids"],b:0,u:"Metals fill the left and middle parts of the table."},
 {j:"banyak",t:"Choose ALL the examples of compounds.",p:["Common salt (sodium chloride)","Carbon dioxide","Water","Gold","Oxygen"],b:[0,1,2],u:"Gold and oxygen are elements."}],
 bos:{j:"pilih",t:"The noble gas used in coloured advertising lights is:",p:["Neon","Oxygen","Nitrogen","Chlorine"],b:0,u:"Neon glows orange-red when electricity flows through it."}},

{n:2, tempat:"Metal Workshop", sk:"6.1 / 6.2 / 6.3 Metals, non-metals, mixtures and compounds", lampiran:"kelasjirim",
 kadNama:"Copper", kadEm:"\u{1F50C}", kadFakta:"Copper is used in electrical wires because it is a good conductor and is easily drawn into fine wires.",
 bosKadNama:"Helium", bosKadEm:"\u{1F388}", bosKadFakta:"Helium is used in balloons because it is less dense than air and does not catch fire easily.",
 soalan:[
 {j:"pilih",t:"Metals can be drawn into wires. This property is called:",p:["Ductility","Malleability","Conductivity","Brittleness"],b:0,u:"Malleability is the property of being hammered into sheets."},
 {j:"pilih",t:"Why is a pot made of metal but its handle of plastic?",p:["Metal is a heat conductor, plastic is a heat insulator","Metal is a heat insulator, plastic is a heat conductor","Plastic is shinier than metal","Metal is lighter than plastic"],b:0,u:"Heat reaches the food quickly but the hand is not burnt."},
 {j:"pilih",t:"Why are noble gases used in light bulbs?",p:["They are unreactive","They are very heavy","They catch fire easily","They are brightly coloured"],b:0,u:"Argon does not react with the hot filament."},
 {j:"pilih",t:"Based on Figure 1, air is in the same group as substances that:",p:["Can be separated by physical methods","Are formed through chemical reactions","Have a fixed composition","Produce new substances"],b:0,u:"Compounds can be separated only by chemical methods."},
 {j:"pilih",t:"Iron powder and sulphur powder are mixed without heating. How can the iron be separated?",p:["Use a magnet","Filtration","Distillation","Chromatography"],b:0,u:"In a mixture, the iron is still magnetic."},
 {j:"pilih",t:"The most suitable method for separating the dyes in ink is:",p:["Chromatography","Filtration","Sedimentation","Magnetic separation"],b:0,u:"The dyes move at different rates on filter paper."},
 {j:"pilih",t:"Why is the rusting of iron classified as a chemical change?",p:["A new substance is formed","The shape of the iron changes","The iron becomes lighter","The colour can be washed off"],b:0,u:"Rust is iron oxide, a substance different from iron."},
 {j:"pilih",t:"Water can be broken down into hydrogen and oxygen through:",p:["Electrolysis","Filtration","Evaporation","Magnetic separation"],b:0,u:"Compounds can be separated only by chemical methods such as electrolysis."}],
 bos:{j:"banyak",t:"Choose ALL the properties of metals.",p:["Shiny surface","Good electrical conductor","Can be hammered into sheets","Brittle and easily shattered","Good heat insulator"],b:[0,1,2],u:"Being brittle and an insulator are properties of non-metals."}},

{n:3, tempat:"Element Lab", sk:"6.1 Classifying elements by their properties", lampiran:"unsur",
 kadNama:"Sulphur", kadEm:"\u{1F7E1}", kadFakta:"Sulphur is a yellow non-metal that is often found around volcanoes.",
 bosKadNama:"Hydrogen", bosKadEm:"\u{1F4A7}", bosKadFakta:"Hydrogen is the lightest element. Although it is on the left side of the periodic table, it is not a metal.",
 soalan:[
 {j:"pilih",t:"Based on the table, which elements are metals?",p:["W and Y","X and Z","W and X","Y and Z"],b:0,u:"W and Y are shiny, conduct electricity and can be hammered."},
 {j:"pilih",t:"Element X is most likely:",p:["Sulphur","Copper","Aluminium","Neon"],b:0,u:"Sulphur is yellow, brittle and does not conduct electricity."},
 {j:"pilih",t:"Element Z does not react with other substances. Z is most likely a:",p:["Noble gas","Metal","Sulphur","Compound"],b:0,u:"Noble gases are very unreactive."},
 {j:"pilih",t:"Element W is most suitable for use in:",p:["Electrical wires","Pot handles","Floating balloons","Medicine powder"],b:0,u:"W is a metal that conducts electricity; its melting point of 1085 °C matches copper."},
 {j:"pilih",t:"Why does X shatter when hit?",p:["Non-metals are brittle","X has a high melting point","X is a mixture","X conducts electricity"],b:0,u:"Solid non-metals are usually brittle."},
 {j:"pilih",t:"Element Y has a melting point of 660 °C. Y is most likely:",p:["Aluminium","Mercury","Oxygen","Carbon"],b:0,u:"Aluminium is a light, shiny metal."},
 {j:"pilih",t:"Where is element X located in the periodic table?",p:["On the right, with the non-metals","On the left, with the reactive metals","In the middle, with the transition metals","In the last column, with the noble gases"],b:0,u:"Non-metals are located on the right of the periodic table."},
 {j:"banyak",t:"Choose ALL the CORRECT statements based on the table.",p:["W and Y can be hammered","X does not conduct electricity","Z is a gas at room temperature","W has the lowest melting point","Y is a non-metal"],b:[0,1,2],u:"Z has the lowest melting point, and Y is a metal."}],
 bos:{j:"pilih",t:"A cook wants a pot that heats up quickly, is light and does not rust. Which element is most suitable?",p:["Y","W","X","Z"],b:0,u:"Y (aluminium) is light, conducts heat and does not rust like iron."}},

{n:4, tempat:"Crucible", sk:"6.3 Analysing mass during chemical and physical changes", lampiran:"jisim",
 kadNama:"Magnesium", kadEm:"\u{2728}", kadFakta:"Magnesium burns with a very bright white flame. Do not look straight at it.",
 bosKadNama:"Lavoisier", bosKadEm:"\u{2696}", bosKadFakta:"Antoine Lavoisier showed that mass is conserved in chemical reactions by weighing substances in a closed container.",
 soalan:[
 {j:"pilih",t:"In Experiment A, why does the mass increase?",p:["Oxygen from the air combines with the magnesium","The magnesium absorbs heat from the burner","The white powder is denser than magnesium","The crucible becomes heavier"],b:0,u:"Magnesium + oxygen → magnesium oxide."},
 {j:"nombor",t:"What is the mass of oxygen that combined with the magnesium in Experiment A, in grams?",b:1.6,tol:0.01,suf:"g",u:"4.0 − 2.4 = 1.6 g."},
 {j:"pilih",t:"In Experiment B, why does the mass not change?",p:["The tube is closed; nothing enters or leaves","No chemical reaction takes place","Iron and sulphur have no mass","The balance is not working"],b:0,u:"Mass is conserved during a chemical change in a closed system."},
 {j:"pilih",t:"The black solid in Experiment B is not attracted to a magnet. This shows that:",p:["A new compound is formed","The iron has disappeared","Sulphur is magnetic","The mixture is still there"],b:0,u:"Iron(II) sulphide has properties different from iron."},
 {j:"pilih",t:"Which experiment shows a physical change?",p:["C","A","B","A and B"],b:0,u:"Melting ice does not form a new substance."},
 {j:"pilih",t:"A student claims that Experiment A proves mass is not conserved. Why is the claim wrong?",p:["The crucible is open, so the oxygen from the air is also weighed","Magnesium creates new mass when it burns","Mass is conserved only in physical changes","An electronic balance always gives a high reading"],b:0,u:"If the oxygen that combined is taken into account, the total mass stays the same."},
 {j:"pilih",t:"Why is the lid of the crucible lifted slightly while the magnesium is burnt?",p:["So that oxygen enters without letting the white smoke escape","So that the magnesium cools quickly","So that the bright light can be seen","So that the mass of the crucible decreases"],b:0,u:"If magnesium oxide smoke escapes, the mass recorded becomes lower."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["Magnesium combines with oxygen","Mass stays the same in a closed system","A chemical change produces new substances","Mass always increases during a physical change","Ice changes into a new compound"],b:[0,1,2],u:"Experiment C shows that mass stays the same during a physical change, and water is not a new substance."}],
 bos:{j:"pilih",t:"If Experiment A is carried out in a tightly closed container filled with air, what is the total mass of the container and its contents after burning?",p:["The same as before","Increases by 1.6 g","Decreases by 1.6 g","Becomes zero"],b:0,u:"The oxygen that combines is already inside the container."}},

{n:5, tempat:"Recycling Centre", sk:"6.2 Evaluating methods of separating mixtures", lampiran:"asing",
 kadNama:"Distillation", kadEm:"\u{1F52C}", kadFakta:"Distillation separates liquids by heating the mixture and condensing the vapour that is produced.",
 bosKadNama:"Big Magnet", bosKadEm:"\u{1F9F2}", bosKadFakta:"Recycling centres use big magnets to separate steel cans from aluminium cans.",
 soalan:[
 {j:"pilih",t:"Group Jaya suggests distillation for mixture 2. Evaluate the suggestion.",p:["Distillation; a magnet is more suitable","Distillation; filtration is more suitable","Distillation; chromatography is more suitable","No mistake; distillation is suitable"],b:0,u:"Iron is magnetic but sulphur is not."},
 {j:"pilih",t:"The suggestion for mixture 5 is filtration. Evaluate the suggestion.",p:["Wrong; dissolved salt passes through the filter paper","Correct; filter paper filters out all the salt","Correct; seawater is the same as sand and water","Wrong; chromatography is most suitable"],b:0,u:"Distillation is needed to get pure water from seawater."},
 {j:"pilih",t:"Why is evaporation suitable for mixture 3?",p:["The salt is left behind when the water evaporates","The salt evaporates and the water is left behind","The salt is attracted to a magnet","The salt does not dissolve in water"],b:0,u:"The boiling point of salt is much higher than that of water."},
 {j:"pilih",t:"How many of Group Jaya's suggestions are correct?",p:["3","5","2","4"],b:0,u:"Mixtures 1, 3 and 4 are correct; mixtures 2 and 5 are wrong."},
 {j:"pilih",t:"A recycling centre receives mixed steel cans and aluminium cans. What is the most efficient method?",p:["Big magnet","Filtration","Distillation","Chromatography"],b:0,u:"Steel is attracted to a magnet, aluminium is not."},
 {j:"pilih",t:"Rice is mixed with light husks. What is the most practical separation method in a village?",p:["Floating in water","Magnetic separation","Distillation","Chromatography"],b:0,u:"The husks float while the rice sinks."},
 {j:"pilih",t:"Well water is cloudy with fine mud. What is the most appropriate first step before filtration?",p:["Let the mud settle","Boil the water until it dries","Add a magnet to the water","Freeze the water in the refrigerator"],b:0,u:"Sedimentation reduces the mud so that filtration is faster."},
 {j:"pilih",t:"A student claims that salt can be separated from seawater by filtration because salt is a solid. Evaluate the claim.",p:["Wrong; the salt is dissolved as fine particles","Correct; all solids are left on the filter paper","Correct; salt is denser than water","Wrong; salt is actually a gas"],b:0,u:"Dissolved salt particles can pass through the pores of the filter paper."}],
 bos:{j:"pilih",t:"The district council wants to supply drinking water to a small island that has only seawater. What is the most appropriate method?",p:["Distillation or desalination","Filtration with filter paper","Magnetic separation","Settling overnight"],b:0,u:"Only distillation or desalination removes dissolved salt."}},

{n:6, tempat:"Innovation Lab", sk:"6.1 / 6.2 Designing using knowledge of elements and mixtures",
 kadNama:"Tin", kadEm:"\u{26CF}", kadFakta:"Malaysia was once the largest tin producer in the world, especially from the Kinta Valley in Perak.",
 bosKadNama:"Alloy", bosKadEm:"\u{1F52A}", bosKadFakta:"An alloy is a mixture of metals. Stainless steel contains iron, chromium and nickel.",
 soalan:[
 {j:"pilih",t:"You design a simple water filter for camping. Which order of layers from top to bottom is the most effective?",p:["Gravel, coarse sand, fine sand, cotton wool","Cotton wool, fine sand, coarse sand, gravel","Fine sand, cotton wool, gravel, coarse sand","Gravel only, one metre thick"],b:0,u:"Big particles are filtered first so the fine layers do not clog quickly. The water must still be boiled before drinking."},
 {j:"pilih",t:"You design a tool to collect iron screws scattered in a workshop. Which material is most suitable?",p:["Magnet on a stick","Fine cloth filter","Filter paper","Drinking straw"],b:0,u:"Iron screws are attracted to a magnet."},
 {j:"pilih",t:"You design a periodic table poster for the class. What is the most helpful way for students to remember?",p:["Different colours for metals, non-metals and noble gases","All the elements written in the same black colour","Arrange the elements alphabetically by name","Show only the expensive elements"],b:0,u:"Colour classification helps students see the pattern of the positions of the elements."},
 {j:"pilih",t:"You choose the material for a phone charger cable. Which combination is most suitable?",p:["Copper inside, plastic outside","Plastic inside, copper outside","Sulphur inside, copper outside","Copper inside and outside"],b:0,u:"Copper conducts electricity; plastic insulates for safety."},
 {j:"pilih",t:"The Science Club wants to demonstrate chromatography using kitchen items. What is the most practical choice?",p:["Coffee filter paper and an ink pen","Newspaper and oil paint","Clear plastic and cake colouring","Thick cloth and soy sauce"],b:0,u:"Coffee filter paper absorbs water and separates the dyes in ink."},
 {j:"pilih",t:"You suggest a metal for a bicycle frame that is light and does not rust. What is the most appropriate choice?",p:["Aluminium alloy","Pure iron","Lead","Pure copper"],b:0,u:"Aluminium alloy is light, strong and resistant to rust."},
 {j:"pilih",t:"Your school wants to reduce can waste in the canteen. What is the most practical suggestion?",p:["Separate bins for steel cans and aluminium cans","Burn all the cans behind the school","Bury the cans in the ground","Mix the cans with food waste"],b:0,u:"Separating at the source makes recycling easier."},
 {j:"pilih",t:"How would you test whether your water filter design works?",p:["Compare the clarity of the water before and after","Drink the water straight away without checking","Measure the weight of the filter only","Ask a friend whether the filter looks nice"],b:0,u:"Clarity can be compared by eye or with a turbidity meter."}],
 bos:{j:"buka",
  t:"A village has a lot of mixed waste such as cans, glass bottles, plastic and food waste. Design a waste separation system for the village recycling centre.",
  arahan:"Describe the separation steps suggested and the physical method used at each step (for example magnets, floating or filtering), the properties of the materials that are used, safety steps, and how the system saves cost and involves the villagers.",
  u:"A strong TP6 answer matches each separation method with the correct property of the material, arranges the steps logically, and takes cost and safety into account."}}
];

module.exports = {
  id:"t1b6", tingkatan:1, kod:"6.0 The Periodic Table",
  tajuk:"Element Trail",
  subtajuk:"Science Form 1 · Chapter 6 The Periodic Table",
  spi:SPI,
  ulasan:{
   1:"{n} can recall sub-atomic particles, the meaning of element, compound and molecule, and the positions of metals and noble gases. The next step is to explain the properties of metals and non-metals.",
   2:"{n} understands the properties of metals and non-metals and the difference between a mixture and a compound. More practice is needed in classifying elements from data.",
   3:"{n} can classify elements based on their properties and choose a suitable element for a given use. Encourage giving reasons based on properties.",
   4:"{n} is able to analyse mass data to show that mass is conserved and to tell physical changes from chemical changes. Next, practise evaluating separation methods.",
   5:"{n} can evaluate methods of separating mixtures and make sound decisions for real situations. Ready for a design task.",
   6:"{n} successfully designed a system or device using the properties of elements and separation methods in a creative and practical way. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter The Periodic Table. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ atom:R_ATOM, kelasjirim:R_JIRIM, unsur:T_UNSUR, jisim:T_JISIM, asing:T_ASING },
  aras:ARAS
};
