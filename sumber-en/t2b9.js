/* English source (DLP) — Science KSSM Form 2, Chapter 9.0 Heat.
   Translation of sumber/t2b9.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t2b9` to check it and generate bank-en-t2b9.js.
   Structure must match sumber/t2b9.js exactly. Correct answer at index 0. */

const SPI = [
"Recall the knowledge and science skills on heat.",
"Understand and explain heat.",
"Apply knowledge on heat and able to carry out simple tasks.",
"Analyse knowledge on heat in context of problem solving on events or natural phenomena.",
"Evaluate knowledge of heat in context of problem solving and decision making to carry out a task.",
"Design a task using knowledge and science skills on heat in a creative and innovative way in the context of problem solving and decision making or carry out a task in a new situation with regards to the social values/economy/culture of the community."];

/* ---------- attachments ---------- */

const R_PINDAH = {
  "jenis": "aliran",
  "mod": "siratan",
  "nod": [
    { "id": "k", "label": "Contact", "x": 0, "y": 0 },
    { "id": "p", "label": "Currents", "x": 1, "y": 0 },
    { "id": "s", "label": "Waves", "x": 2, "y": 0 },
    { "id": "k2", "label": "Solids", "x": 0, "y": 1 },
    { "id": "p2", "label": "Liquids & gases", "x": 1, "y": 1 },
    { "id": "s2", "label": "No medium", "x": 2, "y": 1 }
  ],
  "panah": [
    ["k", "k2"],
    ["p", "p2"],
    ["s", "s2"]
  ],
  "kapsyen": "Figure 1 · Conduction (contact), convection (currents) and radiation (waves), and the material each needs.",
  "alt": "Three columns: conduction through solids, convection through liquids and gases, radiation without needing a medium"
};

const R_KEMBANG = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Metal is heated",
    "Particles vibrate more",
    "Gaps between particles increase",
    "Metal expands"
  ],
  "kapsyen": "Figure 1 · What happens to the particles when a metal is heated.",
  "alt": "Vertical flow diagram: the metal is heated, the particles vibrate more, the gaps between the particles increase, the metal expands"
};

const T_ROD =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Rod</th>'+
'<th class="n">Time for the wax-attached nail to fall (s)</th></tr></thead><tbody>'+
'<tr><td>Copper</td><td class="n">25</td></tr>'+
'<tr><td>Aluminium</td><td class="n">40</td></tr>'+
'<tr><td>Iron</td><td class="n">110</td></tr>'+
'<tr><td>Glass</td><td class="n">Did not fall after 10 minutes</td></tr>'+
'</tbody></table></div><p class="qnote">Rods of the same length and thickness are heated at one end. A nail is stuck with wax at the other end. The wax melts when the heat arrives.</p>';

const T_TIN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Can</th>'+
'<th>Outer surface</th><th class="n">Water temperature after 20 minutes in the sun (&deg;C)</th><th class="n">Water temperature 20 minutes after being moved to the shade (&deg;C)</th></tr></thead><tbody>'+
'<tr><td>J</td><td>Black and dull</td><td class="n">48</td><td class="n">36</td></tr>'+
'<tr><td>K</td><td>White</td><td class="n">37</td><td class="n">33</td></tr>'+
'<tr><td>L</td><td>Shiny silver</td><td class="n">34</td><td class="n">32</td></tr>'+
'</tbody></table></div><p class="qnote">Each can contains 200 ml of water at an initial temperature of 28 &deg;C. The temperature in the shade is 28 &deg;C. Fictional data.</p>';

const T_BUMBUNG =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Roof option</th>'+
'<th class="n">Cost (RM)</th><th class="n">Temperature inside the house at 2 pm (&deg;C)</th><th>Notes</th></tr></thead><tbody>'+
'<tr><td>Ordinary zinc</td><td class="n">8 000</td><td class="n">36</td><td>Noisy in the rain</td></tr>'+
'<tr><td>Zinc painted white</td><td class="n">9 000</td><td class="n">33</td><td>Paint must be redone every 5 years</td></tr>'+
'<tr><td>Zinc + aluminium foil insulation layer</td><td class="n">11 000</td><td class="n">31</td><td>Less noisy</td></tr>'+
'<tr><td>Clay tiles</td><td class="n">15 000</td><td class="n">30</td><td>Durable, heavier</td></tr>'+
'</tbody></table></div><p class="qnote">Roof options for a single-storey terrace house. The outside temperature is 33 &deg;C. Fictional data.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Afternoon Beach", sk:"9.1 / 9.2 Temperature, heat and the flow of heat", lampiran:"pindahhaba",
 kadNama:"Thermal Equilibrium", kadEm:"\u{2696}", kadFakta:"A cup of hot tea eventually reaches room temperature because heat flows out until the temperatures are equal.",
 bosKadNama:"Sea Breeze", bosKadEm:"\u{1F30A}", bosKadFakta:"A sea breeze blows in the daytime because the land heats up faster than the sea.",
 soalan:[
 {j:"pilih",t:"The S.I. unit of heat is the:",p:["Joule (J)","Kelvin (K)","Degree Celsius (°C)","Watt (W)"],b:0,u:"Heat is a form of energy."},
 {j:"pilih",t:"Temperature is a measure of:",p:["How hot an object is","The amount of heat energy in an object","The mass of an object","The volume of an object"],b:0,u:"Temperature is measured with a thermometer."},
 {j:"pilih",t:"Heat always flows from:",p:["A hot region to a cold region","A cold region to a hot region","A big object to a small object","A light object to a heavy object"],b:0,u:"The flow stops when the temperatures are equal."},
 {j:"pilih",t:"Based on Figure 1, the transfer of heat through a solid is called:",p:["Conduction","Convection","Radiation","Evaporation"],b:0,u:"Vibrating particles pass energy to neighbouring particles."},
 {j:"pilih",t:"The transfer of heat from the Sun to the Earth takes place through:",p:["Radiation","Conduction","Convection","Reflection"],b:0,u:"Radiation does not need a medium."},
 {j:"pilih",t:"An example of a heat insulator is:",p:["Plastic","Copper","Aluminium","Iron"],b:0,u:"Metals are good heat conductors."},
 {j:"pilih",t:"The objects that absorb heat best are those that are:",p:["Black and dull","White and shiny","Shiny silver","Transparent"],b:0,u:"Black, dull objects also give out heat best."},
 {j:"banyak",t:"Choose ALL the examples of convection.",p:["Water in a kettle heated from below","The sea breeze in the daytime","Hot air rising from a campfire","A metal spoon getting hot in soup","Sunlight heating the skin"],b:[0,1,2],u:"A metal spoon is conduction, and sunlight is radiation."}],
 bos:{j:"pilih",t:"At night, a land breeze blows because:",p:["The land cools faster than the sea","The sea cools faster than the land","The wind always blows towards the sea","The Moon pulls the air towards the sea"],b:0,u:"The air above the warmer sea rises, and cool air from the land replaces it."}},

{n:2, tempat:"Railway Station", sk:"9.2 / 9.3 / 9.4 Conductors, expansion and absorption of heat", lampiran:"kembang",
 kadNama:"Track Gaps", kadEm:"\u{1F6E4}", kadFakta:"Small gaps are left between railway tracks so that the tracks can expand on hot days without buckling.",
 bosKadNama:"Bimetallic Strip", bosKadEm:"\u{1F514}", bosKadFakta:"A bimetallic strip bends when it is hot because its two metals expand at different rates.",
 soalan:[
 {j:"pilih",t:"Based on Figure 1, why are gaps left between railway tracks?",p:["So that the tracks can expand","So that the train sounds louder","So that rainwater drains easily","So that the tracks are cheaper"],b:0,u:"Without gaps, the tracks would buckle."},
 {j:"pilih",t:"Why are electric cables hung loosely between poles?",p:["The cables contract in the cold","The cables expand in the cold","So that birds can perch","So that electricity flows faster"],b:0,u:"A cable that is too tight can snap when it contracts."},
 {j:"pilih",t:"A mercury thermometer works because mercury:",p:["Expands when heated","Contracts when heated","Changes colour when hot","Becomes solid at room temperature"],b:0,u:"The mercury level rises as the temperature rises."},
 {j:"pilih",t:"A tight metal lid on a glass jar can be opened by soaking it in hot water because:",p:["Metal expands more than glass","Glass expands more than metal","Hot water makes the lid slippery","Heat weakens the glass jar"],b:0,u:"The lid loosens a little as it expands."},
 {j:"pilih",t:"Why are the handles of frying pans made of wood or plastic?",p:["They are heat insulators","They are heat conductors","They are heavier","They absorb radiation"],b:0,u:"The hand is not burnt when holding a hot pan."},
 {j:"pilih",t:"Why are light-coloured clothes more comfortable on a hot day?",p:["Light colours absorb less heat","Light colours absorb more heat","Light colours produce wind","Light colours are heavier"],b:0,u:"Light surfaces reflect more radiation."},
 {j:"pilih",t:"A vacuum flask has a shiny inner wall. Its function is to:",p:["Reduce heat loss by radiation","Increase heat transfer by conduction","Let convection take place faster","Make the flask look nicer"],b:0,u:"The vacuum space stops conduction and convection."},
 {j:"pilih",t:"Why is one end of a steel bridge placed on rollers?",p:["So that the bridge can expand and contract","So that the bridge can be moved elsewhere","So that vehicles go faster","So that the bridge becomes lighter"],b:0,u:"Rollers allow the bridge to move slightly without cracking."}],
 bos:{j:"banyak",t:"Choose ALL the applications of the expansion and contraction of matter.",p:["Bimetallic strip in a fire alarm","Gaps in a railway track","Mercury in a thermometer","Plastic handle on a frying pan","White shirt on a hot day"],b:[0,1,2],u:"A plastic handle is an insulator, and a white shirt is related to the reflection of radiation."}},

{n:3, tempat:"Conduction Lab", sk:"9.2 Identifying heat conductors and insulators", lampiran:"rod",
 kadNama:"Copper", kadEm:"\u{1F373}", kadFakta:"Some pots have copper bases so that heat spreads quickly across the whole base.",
 bosKadNama:"Polystyrene", bosKadEm:"\u{1F4E6}", bosKadFakta:"A polystyrene box keeps cold fish colder for longer because it contains a lot of trapped air.",
 soalan:[
 {j:"pilih",t:"Based on the table, which rod is the best heat conductor?",p:["Copper","Aluminium","Iron","Glass"],b:0,u:"The nail falls fastest, in 25 s."},
 {j:"pilih",t:"Which rod is a heat insulator?",p:["Glass","Copper","Aluminium","Iron"],b:0,u:"The nail did not fall after 10 minutes."},
 {j:"susun",t:"Arrange the rods by heat conductivity, starting with the BEST.",p:["Copper","Aluminium","Iron","Glass"],b:[0,1,2,3],u:"The faster the nail falls, the better the conductor."},
 {j:"pilih",t:"Why must the rods be of the same length and thickness?",p:["So that the test is fair","So that the rods are easy to carry","So that there is more wax","So that the rods do not bend"],b:0,u:"Only the type of material should be different."},
 {j:"pilih",t:"Which material is most suitable for the base of a pot?",p:["Copper","Glass","Iron","Plastic"],b:0,u:"Copper conducts heat to the food fastest."},
 {j:"nombor",t:"How many seconds later does the nail on the iron rod fall compared with the copper rod?",b:85,tol:0.5,suf:"s",u:"110 − 25 = 85 s."},
 {j:"pilih",t:"A student wants to repeat this test with a wooden rod. What is the most reasonable prediction?",p:["The nail does not fall, or falls very slowly","The nail falls faster than with copper","The nail falls in 40 s like aluminium","The wooden rod will be the best conductor"],b:0,u:"Wood is a heat insulator."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the results of the rod test.",p:["Metals conduct heat better than glass","Copper is the best conductor in this test","Heat conductivity differs among metals","All metals conduct heat at the same speed","Glass is a good heat conductor"],b:[0,1,2],u:"The time for the nail to fall is different for copper, aluminium and iron."}],
 bos:{j:"pilih",t:"A fish seller wants a box to send cold fish 200 km. Which material is most suitable?",p:["Polystyrene","Thin aluminium","Copper","Glass"],b:0,u:"Polystyrene is a good insulator because air is trapped inside it."}},

{n:4, tempat:"Can Lab", sk:"9.4 Analysing the absorption and release of heat", lampiran:"tin",
 kadNama:"Refrigerator Fins", kadEm:"\u{1F9CA}", kadFakta:"The pipes at the back of a refrigerator are painted black so that heat is released quickly into the air.",
 bosKadNama:"Oil Tank", bosKadEm:"\u{1F6E2}", bosKadFakta:"Oil tanks at depots are painted white or silver so that they absorb less heat from the sun.",
 soalan:[
 {j:"pilih",t:"Which can absorbs heat best?",p:["J","K","L","All the same"],b:0,u:"Its temperature rose the highest, from 28 °C to 48 °C."},
 {j:"nombor",t:"What is the rise in water temperature in can J after 20 minutes in the sun, in °C?",b:20,tol:0.05,suf:"°C",u:"48 − 28 = 20 °C."},
 {j:"nombor",t:"What is the fall in water temperature in can J after being moved to the shade, in °C?",b:12,tol:0.05,suf:"°C",u:"48 − 36 = 12 °C."},
 {j:"pilih",t:"Which can releases heat the fastest?",p:["J","K","L","All the same"],b:0,u:"Its temperature fell the most, by 12 °C."},
 {j:"pilih",t:"The shiny silver can absorbs the least heat because:",p:["It reflects most of the radiation","It absorbs all the radiation","It is a poor heat conductor","It has less water inside"],b:0,u:"A shiny surface is a good reflector."},
 {j:"pilih",t:"Why is each can filled with the same volume of water and the same starting temperature?",p:["So that the comparison is fair","So that the water boils quickly","So that the cans do not tip over","So that the temperature does not change"],b:0,u:"Only the type of surface should be different."},
 {j:"pilih",t:"Predict the water temperature in can J if it is left in the shade for 3 hours.",p:["Almost 28 °C","Stays at 36 °C","Rises again to 48 °C","Falls to 10 °C"],b:0,u:"The water eventually reaches thermal equilibrium with the surroundings."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["A black dull surface is the best absorber of heat","A black dull surface is the best emitter of heat","A shiny surface is the poorest absorber of heat","A white surface absorbs heat better than black","All surfaces absorb the same amount of heat"],b:[0,1,2],u:"The white can reached only 37 °C, compared with 48 °C for the black can."}],
 bos:{j:"pilih",t:"A manufacturer wants to design a cheap solar water heater for homes. Based on the data, what is the most suitable colour for the absorber panel?",p:["Black dull","White shiny","Shiny silver","Transparent"],b:0,u:"A black dull surface absorbs the most sunlight."}},

{n:5, tempat:"Green Housing Estate", sk:"9.2 / 9.4 Evaluating choices of building materials", lampiran:"bumbung",
 kadNama:"Green Building", kadEm:"\u{1F3E1}", kadFakta:"Green buildings are designed to save energy, for example with insulated roofs and windows that let air flow.",
 bosKadNama:"Aluminium Foil", bosKadEm:"\u{2728}", bosKadFakta:"A layer of aluminium foil under the roof reflects heat radiation back upwards.",
 soalan:[
 {j:"nombor",t:"What is the difference in temperature inside the house between the ordinary zinc roof and the clay tiles, in °C?",b:6,tol:0.05,suf:"°C",u:"36 − 30 = 6 °C. Tiles are the coolest even though they cost the most."},
 {j:"pilih",t:"Why is the temperature inside the house with ordinary zinc higher than the outside temperature?",p:["Zinc absorbs and radiates heat into the house","Zinc reflects all the heat to the sky","Zinc is a very good heat insulator","Zinc produces a cool breeze"],b:0,u:"Thin metal heats up quickly and passes heat into the house."},
 {j:"pilih",t:"Why is zinc painted white cooler than ordinary zinc?",p:["A white surface reflects more radiation","White paint makes the zinc thicker","White paint produces water vapour","White is a better heat conductor"],b:0,u:"Less radiation absorbed means less heat enters."},
 {j:"nombor",t:"What is the difference in cost between zinc + insulation and clay tiles, in RM?",b:4000,tol:0.5,suf:"RM",u:"15 000 − 11 000 = RM4000."},
 {j:"pilih",t:"A middle-income family wants a cool house at an affordable cost. What is the most appropriate choice?",p:["Zinc + insulation","Ordinary zinc","Clay tiles","Zinc painted white"],b:0,u:"Only 1 °C hotter than tiles but RM4000 cheaper."},
 {j:"pilih",t:"A contractor claims that white-painted zinc is the best value. Evaluate the claim.",p:["Half correct; cheap but the paint must be redone","Completely correct; it is the coolest","Wrong; it is hotter than ordinary zinc","Wrong; white paint absorbs more heat"],b:0,u:"The long-term cost, including repainting, must be taken into account."},
 {j:"pilih",t:"Besides the roof, the cheapest way to cool a house is to:",p:["Plant shade trees","Close all the windows all day","Paint the outside walls black","Install thick dark curtains"],b:0,u:"Shade reduces radiation and airflow carries heat away."},
 {j:"pilih",t:"The temperature data were taken on one day only. The main weakness is that:",p:["The weather on other days may give different results","Too many roofs were compared","The temperature cannot be measured inside a house","Costs cannot be compared"],b:0,u:"Measurements over several days give a more accurate picture."}],
 bos:{j:"pilih",t:"A school in a hot area wants to reduce the use of air conditioning in the library. What is the most appropriate investment?",p:["Roof insulation and shade trees","Extra air conditioners","Dark glass windows with no ventilation","Extra lights on the ceiling"],b:0,u:"Reducing heat gain saves more than removing heat with electricity."}},

{n:6, tempat:"Design Studio", sk:"9.4 Creating using the concept of heat",
 kadNama:"Solar Water Heater", kadEm:"\u{2600}", kadFakta:"A solar water heater uses a black panel and pipes to heat water with free solar energy.",
 bosKadNama:"Traditional House", bosKadEm:"\u{1F3E0}", bosKadFakta:"Traditional Malay houses have high roofs and a raised floor so that hot air rises and leaves through gaps in the roof.",
 soalan:[
 {j:"pilih",t:"You design a lunch box that stays hot until recess. What is the most important feature?",p:["Double walls with air or insulation","Thin metal walls with no lid","An open transparent glass container","A black container with no lid"],b:0,u:"Insulation reduces heat loss through conduction."},
 {j:"pilih",t:"You design a solar cooker for camping. Which combination is most effective?",p:["A black pot with a silver reflector","A silver pot with a black reflector","A white pot with no reflector","A transparent pot in the shade"],b:0,u:"The reflector concentrates radiation and the black pot absorbs it."},
 {j:"pilih",t:"You design a hat for farmers in the paddy field. Which material is most suitable?",p:["Wide, light-coloured and with air holes","Small, black and made of thick plastic","Heavy shiny metal","Thick black cloth with no holes"],b:0,u:"A light colour reflects radiation and air holes allow convection."},
 {j:"pilih",t:"You design a simple fire alarm. Which main component moves when it is hot?",p:["Bimetallic strip","Glass rod","Plastic sheet","Cotton cloth"],b:0,u:"The bimetallic strip bends and closes the circuit of the alarm."},
 {j:"pilih",t:"You design a chicken coop that is not too hot at noon. What is the most effective feature?",p:["Insulated roof and mesh walls","Black zinc roof with no insulation","Tightly closed walls with no holes","Put the coop in the middle of an open field"],b:0,u:"Insulation reduces heat gain, and mesh lets air flow."},
 {j:"pilih",t:"You want to keep ice longer on sports day without electricity. What is the most effective way?",p:["Store it in a polystyrene box","Put ice in a metal bucket in the sun","Break up the ice and spread it on a table","Store ice in a black plastic bag in a hot place"],b:0,u:"Layered insulation reduces heat transfer to the ice."},
 {j:"pilih",t:"You design an energy-saving poster for homes. What is the most accurate advice related to heat?",p:["Cover the pot when cooking","Leave the refrigerator door open for a long time","Dry clothes indoors","Use old filament bulbs"],b:0,u:"A cover reduces heat loss, so food cooks faster."},
 {j:"pilih",t:"How would you test whether your lunch box design keeps heat better?",p:["Compare the fall in temperature with an ordinary box","Weigh the box before and after filling","Ask a friend whether the box looks nice","Test once only with different food"],b:0,u:"The starting temperature, volume of food and time must be the same for a fair comparison."}],
 bos:{j:"buka",
  t:"Your family wants to build a green home in a hot area so it depends less on air conditioning. Design the house using the concepts of heat.",
  arahan:"Describe the design of the house, the roof and wall materials and why (conduction, convection, radiation, surface colour), how airflow is planned, how its effectiveness is measured (for example the temperature inside the house), and the cost and suitability to local culture.",
  u:"A strong TP6 answer uses the concepts of absorption and release of heat, insulation and convection correctly, and balances cost with comfort."}}
];

module.exports = {
  id:"t2b9", tingkatan:2, kod:"9.0 Heat",
  tajuk:"Heat Trail",
  subtajuk:"Science Form 2 · Chapter 9 Heat",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the meaning of temperature and heat and the three ways heat flows. The next step is to explain phenomena such as the sea breeze and the land breeze.",
   2:"{n} understands the flow of heat, the expansion of matter and the absorption of heat by surfaces and can explain them. More practice is needed in interpreting experimental data.",
   3:"{n} can identify heat conductors and insulators from data and choose suitable materials. Encourage giving reasons based on conductivity.",
   4:"{n} is able to analyse data on the absorption and release of heat by different surfaces. Next, practise evaluating choices of building materials.",
   5:"{n} can evaluate choices of building materials based on temperature, cost and maintenance. Ready for a creative task.",
   6:"{n} successfully created a house design or device that uses the concepts of heat in a creative and practical way. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Heat. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ pindahhaba:R_PINDAH, kembang:R_KEMBANG, rod:T_ROD, tin:T_TIN, bumbung:T_BUMBUNG },
  aras:ARAS
};
