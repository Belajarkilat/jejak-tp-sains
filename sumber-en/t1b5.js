/* English source (DLP) — Science KSSM Form 1, Chapter 5.0 Matter.
   Translation of sumber/t1b5.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t1b5` to check it and generate bank-en-t1b5.js.
   Structure must match sumber/t1b5.js exactly. Correct answer at index 0. */

const SPI = [
"Recall the knowledge and science skills on matter.",
"Understand matter and able to explain their understanding.",
"Apply knowledge of matter to explain natural phenomena to accomplish simple task.",
"Analyse knowledge of matter in context of problem solving about events or natural phenomena.",
"Evaluate matter in the context of problem solving and decision making to carry out a task.",
"Design a presentation using multi media / visual / folio / poster / role play / drama; with creative and innovative use of science knowledge and skills of matter in the context of problem solving and decision making; with regards to the social values/ economy / culture of the community."];

/* ---------- attachments ---------- */

const R_PANAS_H1 = {
  "jenis": "graf",
  "setiap": 2,
  "grid": 6,
  "x": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
  ],
  "y": null,
  "yMin": -20,
  "yMaks": 100,
  "siri": [
    {
      "label": "Temperature of the substance",
      "warna": "merah",
      "y": [
        -20,
        -10,
        0,
        0,
        0,
        0,
        12,
        34,
        56,
        78,
        100,
        100,
        100,
        100,
        100
      ]
    }
  ],
  "xLabel": "Heating time (minutes)",
  "kapsyen": "Figure 1 · A piece of ice heated until it boils.",
  "alt": "Graph of temperature against time: the temperature rises from negative twenty to zero degrees, stays at zero between minute two and minute six, rises again to one hundred degrees, then stays at one hundred"
};

const R_ZARAH = {
  "jenis": "struktur", "mod": "label", "tinggiLukis": 160,
  "bahagian": [
    { "label": "Container P", "bentuk": "kotak", "x": 50, "y": 14, "l": 88, "t": 24, "bulat": 3, "isi": "kertas2", "anchorX": 93, "anchorY": 14 },
    { "bentuk": "bulat", "x": 22, "y": 9, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 38, "y": 9, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 54, "y": 9, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 70, "y": 9, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 30, "y": 19, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 46, "y": 19, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 62, "y": 19, "r": 4, "isi": "ungu", "garis": "ungu" },
    { "label": "Container Q", "bentuk": "kotak", "x": 50, "y": 50, "l": 88, "t": 24, "bulat": 3, "isi": "kertas2", "anchorX": 93, "anchorY": 50 },
    { "bentuk": "bulat", "x": 20, "y": 45, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "bentuk": "bulat", "x": 40, "y": 47, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "bentuk": "bulat", "x": 58, "y": 44, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "bentuk": "bulat", "x": 30, "y": 55, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "bentuk": "bulat", "x": 52, "y": 56, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "bentuk": "bulat", "x": 72, "y": 53, "r": 4, "isi": "hijau", "garis": "hijau" },
    { "label": "Container R", "bentuk": "kotak", "x": 50, "y": 86, "l": 88, "t": 24, "bulat": 3, "isi": "kertas2", "anchorX": 93, "anchorY": 86 },
    { "bentuk": "bulat", "x": 16, "y": 80, "r": 4, "isi": "merah", "garis": "merah" },
    { "bentuk": "bulat", "x": 48, "y": 90, "r": 4, "isi": "merah", "garis": "merah" },
    { "bentuk": "bulat", "x": 80, "y": 81, "r": 4, "isi": "merah", "garis": "merah" }
  ],
  "kapsyen": "Figure 1 · Arrangement of particles in three closed containers of the same size.",
  "alt": "Three containers of the same size: in container P the particles are packed closely and in order, in container Q the particles are close but disordered, in container R there are only three particles far apart"
};


const T_TAKAT =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Substance</th>'+
'<th class="n">Melting point (&deg;C)</th><th class="n">Boiling point (&deg;C)</th></tr></thead><tbody>'+
'<tr><td>P</td><td class="n">&minus;218</td><td class="n">&minus;183</td></tr>'+
'<tr><td>Q</td><td class="n">&minus;39</td><td class="n">357</td></tr>'+
'<tr><td>R</td><td class="n">80</td><td class="n">218</td></tr>'+
'<tr><td>S</td><td class="n">0</td><td class="n">100</td></tr>'+
'</tbody></table></div><p class="qnote">Room temperature is taken as 27 &deg;C. A substance is a solid below its melting point, a liquid between its melting point and boiling point, and a gas above its boiling point.</p>';

const T_PANAS =
'<div class="scrollx"><table class="datatable"><thead><tr><th class="n">Time (min)</th>'+
'<th class="n">0</th><th class="n">2</th><th class="n">4</th><th class="n">6</th><th class="n">8</th><th class="n">10</th><th class="n">12</th><th class="n">14</th></tr></thead><tbody>'+
'<tr><td>Temperature (&deg;C)</td><td class="n">&minus;10</td><td class="n">0</td><td class="n">0</td><td class="n">0</td><td class="n">40</td><td class="n">80</td><td class="n">100</td><td class="n">100</td></tr>'+
'</tbody></table></div><p class="qnote">A piece of ice is heated continuously at a constant rate in a beaker. Fictional data.</p>';

const T_RESAP =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Test</th>'+
'<th>Substance</th><th>Medium</th><th>Time to travel 5 cm</th></tr></thead><tbody>'+
'<tr><td>1</td><td>Copper(II) sulphate crystal</td><td>Water (liquid)</td><td>About 1 day</td></tr>'+
'<tr><td>2</td><td>Copper(II) sulphate crystal</td><td>Agar (solid)</td><td>About 5 days</td></tr>'+
'<tr><td>3</td><td>Perfume</td><td>Air (gas)</td><td>Less than 1 minute</td></tr>'+
'</tbody></table></div><p class="qnote">Tests 1 and 2 are carried out in closed test tubes at room temperature. Test 3 is carried out in a closed room. Fictional data.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Home Kitchen", sk:"5.1 / 5.2 Matter and the three states of matter", lampiran:"lengkung",
 kadNama:"Particle", kadEm:"\u{269B}", kadFakta:"A drop of water contains more than one sextillion (10²¹) water particles.",
 bosKadNama:"Dry Ice", bosKadEm:"\u{1F9CA}", bosKadFakta:"Dry ice is solid carbon dioxide. It changes straight into a gas without becoming a liquid.",
 soalan:[
 {j:"pilih",t:"Matter is anything that:",p:["Has mass and occupies space","Can be seen with the naked eye only","Exists only as a solid on Earth","Can produce light and heat"],b:0,u:"Air cannot be seen, but it is matter because it has mass and occupies space."},
 {j:"pilih",t:"Which of the following is NOT matter?",p:["Light","Air","Water","Stone"],b:0,u:"Light is a form of energy; it has no mass."},
 {j:"pilih",t:"All matter is made up of:",p:["Tiny discrete particles","One continuous lump","Light and heat energy","Very thick liquid"],b:0,u:"Particles are too small to be seen, but there are spaces between them."},
 {j:"pilih",t:"The state of matter that has a fixed shape and volume is:",p:["Solid","Liquid","Gas","Vapour"],b:0,u:"The particles of a solid are packed closely and only vibrate in fixed positions."},
 {j:"pilih",t:"The change of state from liquid to solid is called:",p:["Freezing","Melting","Condensation","Evaporation"],b:0,u:"Heat is released during freezing."},
 {j:"pilih",t:"Water droplets form on the outside wall of a glass of cold water. This process is called:",p:["Condensation","Evaporation","Melting","Sublimation"],b:0,u:"Water vapour in the air cools and changes into a liquid."},
 {j:"pilih",t:"Based on Figure 1, the temperature of the substance stays at 0 °C between minute 2 and minute 6. What is happening then?",p:["The ice is melting","The temperature of the kitchen is slowly falling","Heat has stopped being supplied to the substance","The water is changing completely into vapour"],b:0,u:"During melting, heat is used to move the particles apart, not to raise the temperature."},
 {j:"banyak",t:"Choose ALL the examples of matter.",p:["Air in a balloon","Water vapour","A pencil","The sound of thunder","Heat from the sun"],b:[0,1,2],u:"Sound and heat are energy, not matter."}],
 bos:{j:"pilih",t:"Mothballs in a cupboard get smaller without leaving any liquid. This process is called:",p:["Sublimation","Boiling","Melting","Condensation"],b:0,u:"A solid changes directly into a gas."}},

{n:2, tempat:"Particle Lab", sk:"5.2 Kinetic theory and changes in the state of matter", lampiran:"zarah",
 kadNama:"Kinetic Theory", kadEm:"\u{1F3C3}", kadFakta:"According to the kinetic theory, the particles of matter are always moving. The higher the temperature, the faster they move.",
 bosKadNama:"Boiling Point", bosKadEm:"\u{2668}", bosKadFakta:"At the top of Mount Kinabalu, water boils below 100 °C because the air pressure is lower.",
 soalan:[
 {j:"pilih",t:"Why is a gas easily compressed?",p:["Particles are far apart","Its particles are very heavy","Its particles do not move","Its particles are packed closely"],b:0,u:"Gas particles can be pushed closer together."},
 {j:"pilih",t:"Why does a liquid take the shape of its container?",p:["Its particles can slide past one another","Its particles are arranged in fixed, orderly positions","Its particles are far apart and move freely in all directions","Its particles have no attraction at all"],b:0,u:"Liquid particles are close together but not in fixed positions."},
 {j:"pilih",t:"What happens to the particles when ice melts?",p:["The particles absorb heat and move more freely","The particles release heat and become closer","The particles become bigger when heated","The particles gradually disappear into the air"],b:0,u:"Heat gives the particles the energy to leave their fixed positions."},
 {j:"pilih",t:"Why does the temperature of water stay at 100 °C while boiling even though it is still being heated?",p:["Heat is used to overcome the attraction between the particles","The thermometer cannot read temperatures above 100 °C","The water loses heat to the air as fast as it receives heat","The burner automatically reduces its flame"],b:0,u:"Heat energy is used to change the state, not to raise the temperature."},
 {j:"pilih",t:"The main difference between evaporation and boiling is that evaporation:",p:["Takes place at any temperature at the surface of a liquid","Takes place only at 100 °C","Takes place throughout the liquid with bubbles","Releases heat to the surroundings"],b:0,u:"Boiling takes place at the boiling point throughout the liquid."},
 {j:"pilih",t:"A piece of ice with a mass of 50 g melts completely. What is the mass of the water produced?",p:["50 g","Less than 50 g","More than 50 g","Cannot be determined"],b:0,u:"Mass stays the same during a physical change."},
 {j:"pilih",t:"Why does washing hung out to dry dry quickly on a hot, windy day?",p:["Evaporation takes place faster","The water in the cloth boils at 100 °C","The wind changes the water into a solid","Sunlight destroys the water"],b:0,u:"A high temperature and wind speed up evaporation."},
 {j:"susun",t:"Based on Figure 1, arrange the containers by the distance between the particles, starting with the CLOSEST.",p:["Container P","Container Q","Container R"],b:[0,1,2],u:"The particles in P are packed closely and in order, in Q they are close but free to move, in R they are the farthest apart."}],
 bos:{j:"banyak",t:"Choose ALL the changes of state that ABSORB heat.",p:["Melting","Boiling","Evaporation","Freezing","Condensation"],b:[0,1,2],u:"Freezing and condensation release heat."}},

{n:3, tempat:"Chemical Shop", sk:"5.1 / 5.2 Classifying substances by melting point and boiling point", lampiran:"takat",
 kadNama:"Mercury", kadEm:"\u{1F321}", kadFakta:"Mercury is the only metal that is a liquid at room temperature.",
 bosKadNama:"Naphthalene", bosKadEm:"\u{1F9F4}", bosKadFakta:"Naphthalene is the substance in mothballs. Its melting point is 80 °C.",
 soalan:[
 {j:"pilih",t:"At room temperature (27 °C), substance P is in the state of:",p:["Gas","Solid","Liquid","Semi-solid"],b:0,u:"27 °C is higher than the boiling point of P (−183 °C)."},
 {j:"pilih",t:"At room temperature, substance Q is in the state of:",p:["Liquid","Solid","Gas","Plasma"],b:0,u:"27 °C is between −39 °C and 357 °C."},
 {j:"pilih",t:"At room temperature, substance R is in the state of:",p:["Solid","Liquid","Gas","Vapour"],b:0,u:"27 °C is lower than the melting point of R (80 °C)."},
 {j:"pilih",t:"Which substance is most likely water?",p:["S","P","Q","R"],b:0,u:"Water melts at 0 °C and boils at 100 °C."},
 {j:"pilih",t:"Substance R is heated to 150 °C. Its state is:",p:["Liquid","Solid","Gas","Solid and gas"],b:0,u:"150 °C is between 80 °C and 218 °C."},
 {j:"pilih",t:"Which substances will be solid in a freezer (−18 °C)?",p:["S and R","P and Q","Q only","P only"],b:0,u:"S freezes at 0 °C and R at 80 °C. Q freezes only below −39 °C."},
 {j:"pilih",t:"Which substance exists as a liquid over the widest range of temperatures?",p:["Q","S","R","P"],b:0,u:"Q is a liquid from −39 °C to 357 °C, which is a range of 396 °C."},
 {j:"banyak",t:"Choose ALL the physical properties of matter.",p:["Melting point","Solubility in water","Heat conductivity","Rusting","Flammability"],b:[0,1,2],u:"Rusting and flammability are chemical properties."}],
 bos:{j:"pilih",t:"A thermometer needs to measure temperatures from −20 °C to 110 °C. Which substance is suitable as the liquid inside it?",p:["Q","S","R","P"],b:0,u:"Only Q stays a liquid over that whole range. S freezes at 0 °C."}},

{n:4, tempat:"Boiling Pot", sk:"5.2 Analysing heating data", lampiran:"panas",
 kadNama:"Melting Point", kadEm:"\u{1F9CA}", kadFakta:"Pure ice melts at 0 °C. Salt sprinkled on snowy roads lowers the melting point of ice.",
 bosKadNama:"Hot Steam", bosKadEm:"\u{1F4A8}", bosKadFakta:"A scald from hot steam is worse than one from boiling water because steam releases extra heat when it condenses on the skin.",
 soalan:[
 {j:"pilih",t:"From minute 2 to minute 6, the temperature stays at 0 °C. What is happening?",p:["The ice is melting","The water is boiling","The water is freezing","The ice is subliming"],b:0,u:"The temperature stays constant during melting."},
 {j:"pilih",t:"At minutes 12 and 14, the temperature stays at 100 °C. What is happening?",p:["The water is boiling","The ice is melting","The water is condensing","The thermometer is broken"],b:0,u:"100 °C is the boiling point of water."},
 {j:"pilih",t:"At minute 4, the state of the substance in the beaker is:",p:["Ice and water","Ice only","Water only","Water and vapour"],b:0,u:"During melting, solid and liquid exist together."},
 {j:"nombor",t:"What is the rise in temperature from minute 6 to minute 10, in °C?",b:80,tol:0.5,suf:"°C",u:"80 − 0 = 80 °C."},
 {j:"pilih",t:"Why does the temperature rise between minute 6 and minute 12?",p:["All the ice has melted, so heat warms the water","Heat has stopped being supplied to the beaker","The water starts to freeze again","The water particles move more slowly"],b:0,u:"There is no more ice to be melted."},
 {j:"pilih",t:"If heating continues until minute 20, what is the most likely temperature reading?",p:["100 °C","140 °C","0 °C","200 °C"],b:0,u:"The temperature stays at the boiling point as long as there is still water boiling."},
 {j:"pilih",t:"If the amount of ice is doubled, what is most likely to change?",p:["The temperature stays at 0 °C for a longer time","The melting point rises to 10 °C","The boiling point falls to 50 °C","The starting temperature becomes −20 °C"],b:0,u:"More ice needs more heat to melt, but the melting point does not change."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["The temperature stays constant during melting","The temperature stays constant during boiling","The melting point of ice is 0 °C","The temperature rises while the ice is melting","Water boils at 80 °C"],b:[0,1,2],u:"The temperature stays at 0 °C during melting, and water boils at 100 °C."}],
 bos:{j:"pilih",t:"A student claims that heat is 'lost' during minute 2 to minute 6 because the temperature does not rise. Evaluate the claim.",p:["Wrong; the heat is used to change the state","Correct; the heat escapes into the air during that time","Correct; the burner goes out for a while during that time","Wrong; the heat is used to cool the ice"],b:0,u:"Heat gives the particles the energy to leave their fixed positions."}},

{n:5, tempat:"Scent Fair", sk:"5.2 Evaluating the rate of diffusion in the three states of matter", lampiran:"resap",
 kadNama:"Diffusion", kadEm:"\u{1F338}", kadFakta:"The smell of durian can reach the whole house because gas particles diffuse quickly through the air.",
 bosKadNama:"Air Freshener", bosKadEm:"\u{1F32C}", bosKadFakta:"A gel air freshener releases its scent slowly because its particles diffuse out of a soft solid.",
 soalan:[
 {j:"susun",t:"Arrange the media by rate of diffusion, starting with the FASTEST.",p:["Air (gas)","Water (liquid)","Agar (solid)"],b:[0,1,2],u:"The space between particles and the speed of the particles are greatest in a gas."},
 {j:"pilih",t:"Why is diffusion in agar the slowest?",p:["Solid particles are packed closely","Copper(II) sulphate does not dissolve","The agar is too cold","The agar has no particles"],b:0,u:"Copper(II) sulphate particles find it hard to move between closely packed particles."},
 {j:"pilih",t:"A student claims that Test 3 proves perfume diffuses faster than copper(II) sulphate. Evaluate the claim.",p:["Not fair; both the substance and the medium are different","Fair, because the distance measured is the same, 5 cm","Fair, because all the tests are carried out at room temperature","Not fair, because perfume is more expensive"],b:0,u:"To compare the media, the substance that diffuses must be the same."},
 {j:"pilih",t:"Why must the test tubes in Tests 1 and 2 be closed?",p:["So that the water does not evaporate and there is no outside disturbance","So that the copper(II) sulphate does not change colour","So that light does not enter the tube","So that the temperature rises faster"],b:0,u:"Air movement and evaporation can affect the results."},
 {j:"pilih",t:"What is the best way to test the effect of temperature on the rate of diffusion?",p:["Repeat Test 1 in water at different temperatures","Repeat Test 3 with various types of perfume","Compare Test 1 with Test 3 only","Use agar of different colours"],b:0,u:"Only the temperature should change; the substance and the medium are kept the same."},
 {j:"pilih",t:"A shop wants a long-lasting air freshener for cars. What is the most appropriate choice based on the data?",p:["Gel freshener","Scent spray","Open perfume","Open scented powder"],b:0,u:"Slow diffusion from a soft solid makes the scent last longer."},
 {j:"pilih",t:"Why does the smell of food from the kitchen reach you faster when the food is hot?",p:["Particles move faster at a high temperature","Hot food has more particles","Hot air stops the smell from escaping","The nose is more sensitive at a high temperature"],b:0,u:"The kinetic energy of the particles increases with temperature."},
 {j:"pilih",t:"Cooking gas leaks and smells at home. What is the safest action based on the concept of diffusion?",p:["Open the windows and doors, and do not switch on any electrical switch","Close all the windows so that the gas does not diffuse out","Switch on a fan to spread the gas","Light a match to find the cause of the leak"],b:0,u:"The gas needs to diffuse out. A spark from a switch can cause an explosion."}],
 bos:{j:"pilih",t:"The teacher wants to show diffusion within one class period (40 minutes). What is the most practical choice?",p:["Drop food colouring into hot water","Put a copper(II) sulphate crystal in agar","Put a copper(II) sulphate crystal in cold water","Bury salt crystals in dry sand"],b:0,u:"Diffusion in a hot liquid is fast enough to be observed in one class period."}},

{n:6, tempat:"Design Workshop", sk:"5.1 / 5.2 Designing using knowledge of matter",
 kadNama:"Clay Pot Cooler", kadEm:"\u{1F3FA}", kadFakta:"A clay pot cooler (zeer pot) cools food without electricity through the evaporation of water from wet sand.",
 bosKadNama:"Solar Still", bosKadEm:"\u{2600}", bosKadFakta:"A solar still uses the sun's heat to evaporate dirty water, then condenses the vapour into clean water.",
 soalan:[
 {j:"pilih",t:"You design a container to cool drinks without electricity at a night market. Which principle is most suitable?",p:["Wrap the container with a wet cloth","Put the container in the sun","Wrap the container with black plastic","Fill the container with dry sand"],b:0,u:"The evaporation of water from the cloth absorbs heat from the container."},
 {j:"pilih",t:"You design a device to get drinking water from seawater on an island. Which processes must take place?",p:["Evaporation, then condensation","Freezing, then melting","Melting, then sublimation","Condensation, then evaporation"],b:0,u:"Salt is left behind when water evaporates; the water vapour is then condensed."},
 {j:"pilih",t:"In a solar still, which surface needs to be cool so that water vapour turns into droplets?",p:["The transparent cover on top","The black base of the dirty water container","The seawater inside the container","The sand around the device"],b:0,u:"Water vapour touches the cooler cover and condenses."},
 {j:"pilih",t:"You want to make ice cream without a refrigerator for entrepreneurship day. What is the most effective way?",p:["Put the container of mixture in ice mixed with salt","Put the mixture under a fan only","Cover the mixture with a thick cloth in a room","Stir the mixture quickly in the sunlight"],b:0,u:"Salted ice reaches a temperature below 0 °C, so the mixture freezes."},
 {j:"pilih",t:"You design a clay pot cooler for vegetables in a village. Where should it be placed?",p:["A shaded, windy place","A closed, damp room","Under the scorching sun","In a sealed plastic container"],b:0,u:"Wind speeds up evaporation; a damp place slows it down."},
 {j:"pilih",t:"Your clothes dryer design dries clothes slowly. Which modification is most effective?",p:["Increase airflow and spread out the clothes","Fold the clothes so they are more compact","Cover the dryer with plastic","Put the dryer inside a cupboard"],b:0,u:"Surface area and airflow speed up evaporation."},
 {j:"pilih",t:"Your factory wants to transport a large amount of cooking gas. What is the most suitable way based on the kinetic theory?",p:["Compress the gas into a steel cylinder","Heat the gas so the particles are closer","Keep the gas in an open plastic bag","Cool the gas until it becomes a solid"],b:0,u:"A gas is easily compressed because the space between its particles is large."},
 {j:"pilih",t:"How would you test whether your clay pot cooler really cools?",p:["Compare the temperature inside the pot with that of an ordinary container","Taste the vegetables in the pot after a day","Ask a neighbour whether the pot looks cool","Measure the weight of the pot before and after filling"],b:0,u:"A thermometer gives data that can be compared."}],
 bos:{j:"buka",
  t:"A remote village has no electricity supply and no refrigerators. Design a device that uses changes in the state of matter to help the villagers store food or get clean water.",
  arahan:"Describe the design of the device, the changes of state used with an explanation using the kinetic theory, materials that are easy to get, how its effectiveness is tested, and the cost and suitability to the villagers' way of life.",
  u:"A strong TP6 answer explains evaporation or condensation in terms of particle movement and heat, chooses cheap local materials, and plans a test of temperature or volume of water."}}
];

module.exports = {
  id:"t1b5", tingkatan:1, kod:"5.0 Matter",
  tajuk:"Particle Trail",
  subtajuk:"Science Form 1 · Chapter 5 Matter",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the meaning of matter, the three states of matter and the names of the changes of state. The next step is to explain these changes using the kinetic theory.",
   2:"{n} understands the arrangement and movement of particles in solids, liquids and gases and can explain changes in the state of matter. More practice is needed in interpreting melting points and boiling points.",
   3:"{n} can determine the state of a substance at a given temperature based on its melting point and boiling point. Encourage showing the steps of comparing temperatures clearly.",
   4:"{n} is able to analyse heating data and explain why the temperature stays constant during melting and boiling. Next, practise evaluating experimental designs.",
   5:"{n} can evaluate a diffusion experiment and make sound decisions based on the rate of diffusion. Ready for a design task.",
   6:"{n} successfully designed a device that uses changes in the state of matter in a creative and practical way. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Matter. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ lengkung:R_PANAS_H1, zarah:R_ZARAH, takat:T_TAKAT, panas:T_PANAS, resap:T_RESAP },
  aras:ARAS
};
