/* English source (DLP) — Science KSSM Form 2, Chapter 5.0 Water and Solutions.
   Translation of sumber/t2b5.js.
   Run `node bina.js --en t2b5` to check it and generate bank-en-t2b5.js.
   Structure must match sumber/t2b5.js exactly. Correct answer at index 0. */

const SPI = [
"Recall knowledge and skills about water and solutions.",
"Understand water and solutions and be able to explain this understanding.",
"Apply knowledge of water and solutions and be able to carry out simple tasks.",
"Analyse knowledge about water and solutions in the context of solving problems about natural events or phenomena.",
"Evaluate knowledge about water and solutions in the context of problem solving and decision making to carry out a task.",
"Create using scientific knowledge and skills about water and solutions in the context of problem solving and decision making, or in carrying out a task in a new situation in a creative and innovative way, taking into account the social / economic / cultural values of society."];

/* ---------- attachments ---------- */

const R_MOLEKULAIR = {
  "jenis": "aliran", "mod": "turun",
  "nod": [
    { "label": "Sugar (solute)", "nota": "added" },
    "Water (solvent)",
    "Sugar water (solution)"
  ],
  "kapsyen": "Figure 1 · Sugar dissolved in water.",
  "alt": "Vertical flow diagram: sugar as the solute is added to water as the solvent, producing sugar water, which is a solution"
};


const R_JEMUR = {
  "jenis": "graf",
  "mod": "palang",
  "grid": 4,
  "yMaks": 200,
  "bar": [
    { "label": "Windy", "nilai": 60, "warna": "hijau" },
    { "label": "Calm", "nilai": 110, "warna": "kuning" },
    { "label": "Humid", "nilai": 180, "warna": "merah" }
  ],
  "xLabel": "Time for clothes to dry (minutes)",
  "kapsyen": "Figure 1 · The time taken for a towel to dry in three weather conditions.",
  "alt": "Bar graph of drying time: windy day 60 minutes, calm day 110 minutes, humid day 180 minutes"
};

const T_SEJAT =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Dish</th>'+
'<th>Condition</th><th class="n">Water left after 3 hours (ml)</th></tr></thead><tbody>'+
'<tr><td>A</td><td>Small dish, in a room, no fan</td><td class="n">42</td></tr>'+
'<tr><td>B</td><td>Wide dish, in a room, no fan</td><td class="n">30</td></tr>'+
'<tr><td>C</td><td>Wide dish, in a room, under a fan</td><td class="n">18</td></tr>'+
'<tr><td>D</td><td>Wide dish, in the sun, no wind</td><td class="n">12</td></tr>'+
'</tbody></table></div><p class="qnote">Each dish is filled with 50 ml of water at the start of the experiment. Fictional data.</p>';

const T_LARUT =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Test</th>'+
'<th class="n">Water temperature (&deg;C)</th><th>Type of sugar</th><th>Stirred?</th><th class="n">Time for 5 g of sugar to dissolve (s)</th></tr></thead><tbody>'+
'<tr><td>1</td><td class="n">30</td><td>Coarse sugar</td><td>No</td><td class="n">300</td></tr>'+
'<tr><td>2</td><td class="n">30</td><td>Coarse sugar</td><td>Yes</td><td class="n">120</td></tr>'+
'<tr><td>3</td><td class="n">60</td><td>Coarse sugar</td><td>Yes</td><td class="n">50</td></tr>'+
'<tr><td>4</td><td class="n">60</td><td>Fine sugar</td><td>Yes</td><td class="n">20</td></tr>'+
'</tbody></table></div><p class="qnote">Each test uses 100 ml of water. Fictional data.</p>';

const T_BERSIH =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Method</th>'+
'<th>Kills germs?</th><th>Removes salt?</th><th>Energy cost</th><th>Suitability for large amounts of water</th></tr></thead><tbody>'+
'<tr><td>Boiling</td><td>Yes</td><td>No</td><td>Moderate</td><td>Suitable for homes</td></tr>'+
'<tr><td>Sand and charcoal filtration</td><td>Not completely</td><td>No</td><td>Low</td><td>Suitable</td></tr>'+
'<tr><td>Chlorination</td><td>Yes</td><td>No</td><td>Low</td><td>Very suitable</td></tr>'+
'<tr><td>Distillation</td><td>Yes</td><td>Yes</td><td>Very high</td><td>Less suitable</td></tr>'+
'</tbody></table></div><p class="qnote">A comparison of water purification methods for a village.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Riverbank", sk:"5.1 / 5.2 Properties of water and solutions", lampiran:"molekulair",
 kadNama:"Surface Tension", kadEm:"\u{1F997}", kadFakta:"Water striders can walk on water because of the surface tension of water.",
 bosKadNama:"Universal Solvent", bosKadEm:"\u{1F4A7}", bosKadFakta:"Water is called the universal solvent because it can dissolve more substances than other solvents.",
 soalan:[
 {j:"pilih",t:"Water is made up of the elements:",p:["Hydrogen and oxygen","Carbon and oxygen","Nitrogen and hydrogen","Sodium and chlorine"],b:0,u:"The formula of water is H₂O."},
 {j:"pilih",t:"The freezing point of pure water is:",p:["0 °C","100 °C","−10 °C","37 °C"],b:0,u:"Its boiling point is 100 °C at normal pressure."},
 {j:"pilih",t:"Based on Figure 1, a substance that dissolves in a solvent is called a:",p:["Solute","Solvent","Suspension","Saturated solution"],b:0,u:"Solute + solvent = solution."},
 {j:"pilih",t:"A solution that cannot dissolve any more solute at a certain temperature is a:",p:["Saturated solution","Dilute solution","Concentrated solution","Suspension"],b:0,u:"The extra solute is left at the bottom."},
 {j:"pilih",t:"The solvent used to remove nail polish is:",p:["Acetone","Water","Kerosene","Turpentine"],b:0,u:"Nail polish does not dissolve in water."},
 {j:"pilih",t:"Milk and mayonnaise are examples of:",p:["Colloids","Saturated solutions","Solvents","Elements"],b:0,u:"They are a type of emulsion, which is fine droplets of one liquid in another liquid."},
 {j:"pilih",t:"Water rises in a fine glass tube. This phenomenon is called:",p:["Capillary action","Surface tension","Evaporation","Electrolysis"],b:0,u:"Capillary action also helps water to rise in plants."},
 {j:"banyak",t:"Choose ALL the water purification methods that kill germs.",p:["Boiling","Chlorination","Distillation","Filtering with cloth","Sedimentation"],b:[0,1,2],u:"Filtration and sedimentation remove dirt but do not completely kill germs."}],
 bos:{j:"pilih",t:"In the electrolysis of water, the volume of hydrogen gas produced compared with oxygen gas is:",p:["Double","Half","The same","Triple"],b:0,u:"The ratio of hydrogen to oxygen is 2 : 1, matching the formula H₂O."}},

{n:2, tempat:"Water Treatment Plant", sk:"5.1 / 5.2 / 5.3 Evaporation, solubility and water supply", lampiran:"jemur",
 kadNama:"Alum", kadEm:"\u{1F9C2}", kadFakta:"Alum (aluminium sulphate) is added at the water treatment plant so that dirt particles clump together and settle easily.",
 bosKadNama:"Minamata", bosKadEm:"\u{26A0}", bosKadFakta:"In Minamata, Japan, mercury waste from a factory polluted the sea and poisoned residents who ate the fish.",
 soalan:[
 {j:"pilih",t:"Salt dissolved in water causes the boiling point of the water to:",p:["Rise","Fall","Stay the same","Become 0 °C"],b:0,u:"Impurities raise the boiling point and lower the freezing point of water."},
 {j:"pilih",t:"Clothes dry quickly on a windy day because:",p:["Wind speeds up evaporation","Wind turns water into ice","Wind adds moisture to the air","Wind heats water to 100 °C"],b:0,u:"Wind carries water vapour away from the surface of the cloth."},
 {j:"pilih",t:"Based on Figure 1, clothes dry slowly on a humid day because:",p:["The air already has a lot of water vapour","The air temperature is too high","The wind blows too hard","The cloth absorbs sunlight"],b:0,u:"High humidity slows down evaporation."},
 {j:"pilih",t:"Why does fine sugar dissolve faster than sugar cubes?",p:["Its surface area is larger","It tastes sweeter","It has a bigger mass","Its temperature is lower"],b:0,u:"More sugar particles are in contact with the water."},
 {j:"pilih",t:"The stage at the water treatment plant that adds chlorine is meant to:",p:["Kill germs","Add a sweet taste","Change the colour of the water","Remove salt"],b:0,u:"Chlorination makes the water safe to drink."},
 {j:"pilih",t:"Why is fluoride added to tap water?",p:["To strengthen teeth","To kill all germs","To clear cloudy water","To add taste to the water"],b:0,u:"Fluoride helps to prevent tooth decay."},
 {j:"pilih",t:"The difference between a solution and a suspension is that a suspension:",p:["Is cloudy and its particles settle","Is clear and has no visible particles","Cannot be filtered at all","Forms only at high temperatures"],b:0,u:"An example is muddy water. Its particles are left on the filter paper."},
 {j:"pilih",t:"Mechanics use kerosene to clean grease from engine parts because:",p:["Grease dissolves in kerosene","Kerosene kills all germs","Grease dissolves quickly in water","Kerosene is not flammable"],b:0,u:"Grease is an oily substance that does not dissolve in water. Kerosene is flammable and irritates the skin, so wear gloves and wash hands with soap."}],
 bos:{j:"susun",t:"Arrange the stages of water purification at the treatment plant in order.",p:["Screening","Coagulation","Sedimentation","Filtration","Chlorination"],b:[0,1,2,3,4],u:"Coagulation makes fine dirt clump together so that it settles and is filtered; chlorine is added last to kill germs."}},

{n:3, tempat:"Clothesline", sk:"5.1 Factors that affect the rate of evaporation", lampiran:"sejat",
 kadNama:"Refrigerator", kadEm:"\u{2744}", kadFakta:"A refrigerator cools food when the coolant liquid in its pipes evaporates and absorbs heat.",
 bosKadNama:"Humidity", bosKadEm:"\u{1F32B}", bosKadFakta:"Relative humidity in Malaysia is often above 70%, which is why sweat is slow to dry.",
 soalan:[
 {j:"nombor",t:"What is the volume of water that evaporates from dish C, in ml?",b:32,tol:0.5,suf:"ml",u:"50 − 18 = 32 ml."},
 {j:"pilih",t:"Compare dishes A and B. The factor tested is:",p:["Surface area","Temperature","Air movement","Humidity"],b:0,u:"Only the size of the dish is different."},
 {j:"pilih",t:"Compare dishes B and C. The factor tested is:",p:["Air movement","Surface area","Temperature","Volume of water"],b:0,u:"C is under a fan."},
 {j:"pilih",t:"Which dish shows the highest rate of evaporation?",p:["D","C","B","A"],b:0,u:"D lost 38 ml, the most."},
 {j:"pilih",t:"Dishes D and C are not suitable to compare for testing one factor because:",p:["Both temperature and wind are different","The starting volume of water is different","The sizes of the dishes are different","Both are inside a room"],b:0,u:"A fair test changes only one variable."},
 {j:"pilih",t:"A farmer wants to reduce evaporation of water from the soil in a vegetable garden. What is the most suitable way?",p:["Cover the soil with straw mulch","Water at the scorching noon","Remove all the shade trees in the garden","Plough the soil every day to loosen it"],b:0,u:"Mulch reduces the exposure of the soil to the sun and wind."},
 {j:"pilih",t:"Predict the water left if a wide dish is placed in the sun AND under a fan for 3 hours.",p:["Less than 12 ml","More than 30 ml","Exactly 18 ml","Exactly 42 ml"],b:0,u:"The combination of high temperature and wind speeds up evaporation even more."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["A large surface area speeds up evaporation","Air movement speeds up evaporation","Sunlight speeds up evaporation","A small dish evaporates fastest","A fan slows down evaporation"],b:[0,1,2],u:"The small dish A is the slowest to evaporate."}],
 bos:{j:"pilih",t:"A laundry shop wants to dry clothes as quickly as possible without a dryer machine. What is the most effective arrangement?",p:["Hang them spread out in a hot, windy place","Fold the clothes and leave them in a closed room","Hang them overlapping in the shade","Roll the clothes up and put them in a basket"],b:0,u:"Surface area, temperature and wind all speed up evaporation."}},

{n:4, tempat:"Drinks Stall", sk:"5.2 Analysing the factors of the rate of solubility", lampiran:"larut",
 kadNama:"Syrup Drink", kadEm:"\u{1F964}", kadFakta:"Drink sellers dissolve sugar in hot water first to make syrup quickly.",
 bosKadNama:"Fine Sugar", bosKadEm:"\u{1F370}", bosKadFakta:"Fine sugar is used in cakes because it dissolves faster in the batter.",
 soalan:[
 {j:"pilih",t:"Compare tests 1 and 2. The factor tested is:",p:["Stirring","Water temperature","Type of sugar","Volume of water"],b:0,u:"Only stirring is different."},
 {j:"pilih",t:"Compare tests 2 and 3. What is the most accurate conclusion?",p:["A high temperature makes sugar dissolve faster","A high temperature makes sugar dissolve more slowly","Stirring has no effect","Fine sugar dissolves slowest"],b:0,u:"The dissolving time falls from 120 s to 50 s."},
 {j:"pilih",t:"Compare tests 3 and 4. The factor tested is:",p:["Size of the solute","Water temperature","Stirring","Type of solvent"],b:0,u:"Fine sugar has smaller particles."},
 {j:"nombor",t:"How many times faster does the sugar dissolve in test 4 than in test 1?",b:15,tol:0.05,suf:"times",u:"300 ÷ 20 = 15 times."},
 {j:"pilih",t:"Why does a high temperature make sugar dissolve faster?",p:["Water particles move faster","Sugar becomes smaller when hot","Hot water has more particles","A high temperature changes sugar into salt"],b:0,u:"Fast water particles collide more often with sugar particles."},
 {j:"pilih",t:"A student claims that stirring is the most important factor. Evaluate the claim based on the data.",p:["Not necessarily; temperature and size matter too","Correct, because test 2 is the fastest","Correct, because stirring changes the water temperature","Wrong, because stirring has no effect"],b:0,u:"Stirring saves 180 s, but temperature and size also save a lot of time."},
 {j:"pilih",t:"The variables that are kept constant in all the tests are:",p:["Volume of water and mass of sugar","Water temperature and type of sugar","Stirring and water temperature","Type of sugar and stirring"],b:0,u:"Each test uses 100 ml of water and 5 g of sugar."},
 {j:"banyak",t:"Choose ALL the ways to make sugar dissolve faster based on the data.",p:["Use hotter water","Stir the solution","Use finer sugar","Use colder water","Use big sugar cubes"],b:[0,1,2],u:"Cold water and large lumps of sugar slow down the rate of dissolving."}],
 bos:{j:"pilih",t:"A drinks stall wants to prepare sugar syrup as quickly as possible at peak time. What is the most appropriate method?",p:["Dissolve fine sugar in hot water while stirring","Dissolve coarse sugar in cold water without stirring","Put sugar cubes into iced water","Leave coarse sugar in water overnight"],b:0,u:"Combining all three factors gives the fastest rate."}},

{n:5, tempat:"Upstream Village", sk:"5.3 Evaluating water purification and supply methods", lampiran:"bersih",
 kadNama:"Reverse Osmosis", kadEm:"\u{1F30A}", kadFakta:"Reverse osmosis pushes seawater through a fine membrane that holds back salt to produce fresh water.",
 bosKadNama:"Water Audit", bosKadEm:"\u{1F4CF}", bosKadFakta:"A water audit records how much water is used at home or at school so that wastage can be identified.",
 soalan:[
 {j:"pilih",t:"Which method removes salt from water?",p:["Distillation","Boiling","Chlorination","Filtration"],b:0,u:"Distillation collects pure water vapour and leaves the salt behind."},
 {j:"pilih",t:"Why is filtration alone not enough for drinking water?",p:["Germs are not completely killed","Filtration adds salt","Filtration needs a lot of energy","The water becomes too hot"],b:0,u:"Filtered water still needs to be boiled or chlorinated."},
 {j:"pilih",t:"A village wants to supply clean water to 300 houses from a fresh-water river. What is the most appropriate combination?",p:["Filtration and chlorination","Distillation for all the village water","Boiling in each house only","Sedimentation without chlorination"],b:0,u:"These methods are cheap, suitable for large amounts and kill germs."},
 {j:"pilih",t:"Why is distillation less suitable for that village?",p:["The energy cost is very high","It does not kill germs","It does not remove dirt","Distilled water is poisonous"],b:0,u:"Fresh river water does not need to have its salt removed."},
 {j:"pilih",t:"An island has only seawater. What is the most suitable method?",p:["Reverse osmosis","Chlorination of seawater only","Filtration through sand only","Boiling seawater only"],b:0,u:"Only desalination removes dissolved salt in large amounts."},
 {j:"pilih",t:"During a water crisis, residents are asked to boil tap water before drinking. Evaluate the instruction.",p:["Reasonable, because boiling kills germs","Not reasonable, because boiling removes salt","Not reasonable, because tap water is always clean","Reasonable, because boiling adds fluoride"],b:0,u:"Damaged pipes can let germs into the supply."},
 {j:"pilih",t:"A water audit at school shows that leaking taps waste 500 litres a day. What is the most effective action?",p:["Repair the taps and monitor the water meter","Install more taps","Drink more water every day","Close the school toilets all the time"],b:0,u:"Leaks are the easiest wastage to deal with."},
 {j:"pilih",t:"A factory upstream dumps mercury waste into the river. What is the most serious effect on residents downstream?",p:["Poisoning through the fish they eat","The river water becomes too cold","Fish grow faster","No effect because mercury sinks"],b:0,u:"As in Minamata, mercury builds up in the food chain."}],
 bos:{j:"pilih",t:"The district council can fund only one water project. Which project gives the greatest benefit to the upstream village?",p:["A small treatment plant","A big seawater distillation plant","A boil-your-water campaign without a plant","A water storage pond without treatment"],b:0,u:"The village has a fresh-water river; an efficient basic treatment is the most suitable."}},

{n:6, tempat:"Water Lab", sk:"5.2 / 5.3 Creating using knowledge of water and solutions",
 kadNama:"Fog Catcher", kadEm:"\u{1F301}", kadFakta:"In dry, foggy areas, large nets are used to catch fog droplets as a source of water.",
 bosKadNama:"Greywater", bosKadEm:"\u{267B}", bosKadFakta:"Greywater is used water from sinks and washing machines that can be treated again to water plants.",
 soalan:[
 {j:"pilih",t:"You design an emergency water filter for flood victims. Which order of layers from the top is the most effective?",p:["Gravel, sand, charcoal, cotton wool","Cotton wool, charcoal, sand, gravel","Charcoal only","Fine sand only"],b:0,u:"The water must still be boiled after it is filtered."},
 {j:"pilih",t:"You design a system to recycle ablution or sink water to water school plants. What is an important step?",p:["Filter out solid waste before use","Drink the water after it is filtered","Mix the water with soap","Keep the water uncovered for weeks"],b:0,u:"Greywater is suitable for watering, not for drinking."},
 {j:"pilih",t:"You design a water-saving campaign at home. What is the most effective action?",p:["Turn off the tap while brushing teeth","Water plants at noon","Wash the car with a hose every day","Take longer showers"],b:0,u:"A tap left running wastes many litres every minute."},
 {j:"pilih",t:"You design a solar still for a small island. Which part should be black?",p:["The base of the water container","The transparent cover","The collecting channel","The pure water container"],b:0,u:"A black surface absorbs heat and speeds up evaporation."},
 {j:"pilih",t:"You make paint for a school art project using a solvent other than water. Which solvent is most suitable for oil paint?",p:["Turpentine","Distilled water","Salt","Vinegar"],b:0,u:"Oil paint dissolves in turpentine."},
 {j:"pilih",t:"You want to teach young pupils about surface tension. Which activity is most suitable?",p:["Floating a paper clip on water","Boiling water in a pan","Dissolving sugar in tea","Freezing water in a fridge"],b:0,u:"A paper clip floats because of surface tension, even though it is denser than water."},
 {j:"pilih",t:"The school wants to collect rainwater for the toilets. What is the most important feature?",p:["A covered tank with a leaf filter","An open tank with no cover","A small tank inside the classroom","An underground tank with no channel"],b:0,u:"The cover stops mosquitoes from breeding, and the filter stops leaves from blocking the pipes."},
 {j:"pilih",t:"How would you test the effectiveness of your water filter design?",p:["Compare the cloudiness of the water before and after","Drink the water straight away","Weigh the filter only","Ask a friend whether the filter looks nice"],b:0,u:"Cloudiness can be judged with an instrument or a colour scale."}],
 bos:{j:"buka",
  t:"Your school faces water rationing during the dry season. Design a system or campaign to make sure the school has an adequate and safe water supply.",
  arahan:"Describe your design, the water source and purification method used, the related science concepts (for example evaporation, filtration or chlorination), how the saving or the quality of the water is measured, and the cost and involvement of the school community.",
  u:"A strong TP6 answer chooses a purification method suitable for the water source, takes evaporation and saving into account, and plans realistic measurement."}}
];

module.exports = {
  id:"t2b5", tingkatan:2, kod:"5.0 Water and Solutions",
  tajuk:"Water Trail",
  subtajuk:"Science Form 2 · Chapter 5 Water and Solutions",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the physical properties of water, the terms for solutions and methods of purifying water. The next step is to explain the factors of evaporation and solubility.",
   2:"{n} understands the factors of evaporation, solubility and the stages of water supply and can explain them. More practice is needed in interpreting experimental data.",
   3:"{n} can identify the factors that affect the rate of evaporation from data and apply them in daily life. Encourage comparing one factor at a time.",
   4:"{n} is able to analyse solubility data to explain the effects of temperature, stirring and the size of the solute. Next, practise evaluating water purification methods.",
   5:"{n} can evaluate water purification and supply methods based on effectiveness and cost. Ready for a creative task.",
   6:"{n} successfully created a water system or campaign that is creative, safe and practical. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Water and Solutions. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ molekulair:R_MOLEKULAIR, jemur:R_JEMUR, sejat:T_SEJAT, larut:T_LARUT, bersih:T_BERSIH },
  aras:ARAS
};
