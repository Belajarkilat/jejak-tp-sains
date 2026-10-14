/* English source (DLP) — Science KSSM Form 1, Theme/Chapter 1.0 Introduction to
   Scientific Investigation. Translation of sumber/t1b1.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t1b1` to check it and generate bank-en-t1b1.js.

   Structure must match sumber/t1b1.js exactly: question types, number and
   order of options, answer indices, numbers. bina.js checks this.
   Write the correct answer at index 0. The builder redistributes it. */

const SPI = [
"Recall the knowledge and science skills on the definition of science, science laboratory, physical quantities and units, the use of measuring instruments, density and steps in scientific investigation.",
"Understand the definition of science, science laboratory, physical quantities and units, the use of measuring instruments, density and steps in scientific investigation and able to explain their understanding.",
"Apply the definition of science, science laboratory, physical quantities and units, the use of measuring instruments, density and steps in scientific investigation to accomplish simple task.",
"Analyse the entire scientific investigation process conducted to determine the steps that can be improved, on the definition of science, science laboratory, physical quantities and units, the use of measuring instruments, density and steps in scientific investigation in context of problem solving about events or natural phenomena.",
"Evaluate the entire scientific investigation process conducted to determine the steps that can be improved, on the definition of science, science laboratory, physical quantities and units, the use of measuring instruments, density and steps in scientific investigation in the context of problem solving and decision making to carry out a task.",
"Design a presentation using multi media / visual / folio / poster / role play / drama; with creative and innovative use of science knowledge and skills of the definition of science, science laboratory, physical quantities and units, the use of measuring instruments, density and steps in scientific investigation in the context of problem solving and decision making; with regards to the social values/ economy / culture of the community."];

/* ---------- attachments ---------- */

const R_KAEDAH = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Making observations",
    "Making inferences",
    "Forming a hypothesis",
    "Conducting an experiment",
    "Collecting data",
    "Making a conclusion"
  ],
  "kapsyen": "Figure 1 · Steps in the scientific method.",
  "alt": "Vertical flow diagram of the six steps of the scientific method, from making observations to making a conclusion"
};

const R_PEMBARIS_H2 = {
  "jenis": "skala",
  "alat": "pembaris",
  "dari": 0,
  "hingga": 10,
  "langkah": 1,
  "bacaan": 6.4,
  "objek": "pencil",
  "unit": "cm",
  "kapsyen": "Figure 1 · A pencil measured with a ruler.",
  "alt": "A ruler marked from zero to ten centimetres with a pencil starting at zero and ending between six and seven"
};

const T_UKUR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Measuring instrument</th>'+
'<th>Quantity measured</th><th>Smallest division</th></tr></thead><tbody>'+
'<tr><td>Metre rule</td><td>Length</td><td>0.1 cm</td></tr>'+
'<tr><td>Vernier calliper</td><td>Length</td><td>0.01 cm</td></tr>'+
'<tr><td>Micrometer screw gauge</td><td>Length</td><td>0.01 mm</td></tr>'+
'<tr><td>Measuring cylinder</td><td>Volume of liquid</td><td>1 ml</td></tr>'+
'<tr><td>Digital stopwatch</td><td>Time</td><td>0.01 s</td></tr>'+
'</tbody></table></div><p class="qnote">The smallest division is the smallest change that can be read on the instrument. 1 cm = 10 mm, 1 m = 100 cm.</p>';

const T_BLOK =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Block</th>'+
'<th class="n">Mass (g)</th><th class="n">Volume (cm&sup3;)</th></tr></thead><tbody>'+
'<tr><td>P</td><td class="n">40</td><td class="n">50</td></tr>'+
'<tr><td>Q</td><td class="n">81</td><td class="n">30</td></tr>'+
'<tr><td>R</td><td class="n">60</td><td class="n">60</td></tr>'+
'<tr><td>S</td><td class="n">158</td><td class="n">20</td></tr>'+
'</tbody></table></div><p class="qnote">Density = mass &divide; volume. Density of water = 1 g/cm&sup3;. A block that is less dense than water will float. Fictional data.</p>';

const T_GULA =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Group</th>'+
'<th class="n">Water temperature (&deg;C)</th><th class="n">Volume of water (ml)</th><th>Type of sugar</th><th class="n">Time for sugar to dissolve (s)</th></tr></thead><tbody>'+
'<tr><td>1</td><td class="n">30</td><td class="n">100</td><td>Fine sugar</td><td class="n">95</td></tr>'+
'<tr><td>2</td><td class="n">50</td><td class="n">100</td><td>Fine sugar</td><td class="n">60</td></tr>'+
'<tr><td>3</td><td class="n">70</td><td class="n">100</td><td>Fine sugar</td><td class="n">35</td></tr>'+
'<tr><td>4</td><td class="n">70</td><td class="n">50</td><td>Sugar cube</td><td class="n">80</td></tr>'+
'</tbody></table></div><p class="qnote">Each group dissolves 5 g of sugar and stirs at the same rate. Each group takes one reading only. Fictional data.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Laboratory Door", sk:"1.1 / 1.2 Science and the science laboratory", lampiran:"kaedah",
 kadNama:"Scientist", kadEm:"\u{1F52C}", kadFakta:"Science is knowledge built through systematic observation and investigation of natural phenomena.",
 bosKadNama:"Hazard Symbol", bosKadEm:"\u{2623}", bosKadFakta:"Every bottle of chemicals in the laboratory carries a hazard symbol so that users know how to handle it safely.",
 soalan:[
 {j:"pilih",t:"Science is knowledge obtained through:",p:["Systematic observation and investigation","Beliefs passed down in society","The opinion of the largest number of people","Guessing without any testing"],b:0,u:"Science tests ideas through organised observation and experiments."},
 {j:"pilih",t:"The branch of science that studies plants is:",p:["Botany","Zoology","Geology","Astronomy"],b:0,u:"Zoology studies animals, geology studies rocks and the Earth, and astronomy studies celestial bodies."},
 {j:"pilih",t:"A scientist studies bacteria and viruses. Her field is:",p:["Microbiology","Oceanography","Pharmacology","Botany"],b:0,u:"Microbiology studies microorganisms."},
 {j:"pilih",t:"The apparatus used to measure the volume of a liquid fairly accurately is:",p:["Measuring cylinder","Beaker with a spout","Round-bottom flask","Test tube"],b:0,u:"Beakers and flasks only have approximate volume marks. A test tube has no scale."},
 {j:"pilih",t:"The apparatus used to heat substances in the laboratory is:",p:["Bunsen burner","Filter funnel","Measuring cylinder","Evaporating dish"],b:0,u:"A Bunsen burner provides a flame for heating."},
 {j:"pilih",t:"A hazard symbol showing a flame means that the substance is:",p:["Flammable","Corrosive","Radioactive","Toxic"],b:0,u:"Examples of flammable substances are alcohol and petrol."},
 {j:"pilih",t:"Based on Figure 1, the step carried out immediately after the hypothesis is formed is:",p:["Conducting an experiment","Making an inference from the observation","Collecting data from the experiment","Making a conclusion about the hypothesis"],b:0,u:"After a hypothesis is formed, an experiment is conducted to test whether the hypothesis is true."},
 {j:"banyak",t:"Choose ALL the correct rules in a science laboratory.",p:["Enter the laboratory only with the teacher's permission","Report any accident to the teacher immediately","Tie up long hair when using fire","Taste chemicals to identify them","Eat in the laboratory if the experiment is long"],b:[0,1,2],u:"Never taste chemicals or eat in the laboratory."}],
 bos:{j:"pilih",t:"A hazard symbol showing a skull and crossbones means that the substance is:",p:["Toxic or poisonous","Flammable","Corrosive to metals only","Safe to hold"],b:0,u:"An example of a toxic substance is mercury."}},

{n:2, tempat:"Apparatus Shelf", sk:"1.2 / 1.3 Safety, physical quantities and units", lampiran:"ukurpensel",
 kadNama:"S.I. Units", kadEm:"\u{1F4CF}", kadFakta:"S.I. units are used all over the world so that a scientist's measurements can be understood by scientists in other countries.",
 bosKadNama:"Prefixes", bosKadEm:"\u{1F522}", bosKadFakta:"The prefix kilo means one thousand times. So 1 kilometre is 1000 metres and 1 kilogram is 1000 grams.",
 soalan:[
 {j:"pilih",t:"The S.I. unit of mass is:",p:["Kilogram (kg)","Gram (g)","Newton (N)","Litre (l)"],b:0,u:"The gram is also a unit of mass, but its S.I. unit is the kilogram."},
 {j:"pilih",t:"The S.I. unit of temperature is:",p:["Kelvin (K)","Degree Celsius (°C)","Joule (J)","Ampere (A)"],b:0,u:"The degree Celsius is commonly used, but the S.I. unit of temperature is the kelvin."},
 {j:"pilih",t:"Based on Figure 1, the length of the pencil is:",p:["6.4 cm","6.0 cm","7.4 cm","64 cm"],b:0,u:"The end of the pencil is four small divisions after the 6 cm mark, and each small division is 0.1 cm."},
 {j:"pilih",t:"Why are S.I. units important in international trade?",p:["All countries measure using the same units","S.I. units make goods cheaper","S.I. units are only used by scientists","Each country can change the value of its own units"],b:0,u:"Standard measurements prevent misunderstandings when buying and selling."},
 {j:"pilih",t:"Why must we not smell a gas directly from the mouth of a test tube?",p:["The gas may be poisonous or irritating","The gas will escape faster from the tube","The nose will contaminate the gas in the tube","The smell of the gas can only be detected from far away"],b:0,u:"Gently waft the gas towards your nose with your hand."},
 {j:"pilih",t:"Why is a test tube pointed away from yourself and your friends when it is heated?",p:["Hot liquid may splash out","So that the flame is bigger","So that the liquid boils faster","The test tube will break if it is pointed towards us"],b:0,u:"Splashes of hot liquid can injure the face and eyes."},
 {j:"pilih",t:"Your friend spills acid on their hand. The most correct first action is to:",p:["Wash with plenty of tap water","Wipe with tissue paper until dry","Apply cream to the skin touched by the acid","Wait until the acid dries by itself"],b:0,u:"Plenty of water dilutes and washes away the acid. Then report to the teacher."},
 {j:"banyak",t:"Choose ALL the base quantities learned in this chapter.",p:["Length","Mass","Time","Electric current","Volume","Speed"],b:[0,1,2,3],u:"Temperature is also a base quantity. Volume and speed are derived quantities because they are calculated from base quantities."}],
 bos:{j:"pilih",t:"The prefix that means one millionth is:",p:["Micro (μ)","Milli (m)","Nano (n)","Mega (M)"],b:0,u:"Micro = 0.000 001. Nano is even smaller, which is one billionth."}},

{n:3, tempat:"Measuring Table", sk:"1.3 / 1.4 Converting units and using measuring instruments", lampiran:"ukur",
 kadNama:"Vernier Calliper", kadEm:"\u{1F527}", kadFakta:"A vernier calliper can measure the outside and inside diameter of an object such as a tube or a ring.",
 bosKadNama:"Parallax", bosKadEm:"\u{1F441}", bosKadFakta:"Parallax error occurs when the eye is not directly above the scale when reading a measuring instrument.",
 soalan:[
 {j:"nombor",t:"A pencil is 15 cm long. What is its length in millimetres?",b:150,tol:0.5,suf:"mm",u:"1 cm = 10 mm, so 15 × 10 = 150 mm."},
 {j:"nombor",t:"A packet of flour has a mass of 2500 g. What is its mass in kilograms?",b:2.5,tol:0.01,suf:"kg",u:"2500 ÷ 1000 = 2.5 kg."},
 {j:"nombor",t:"A football match lasts 90 minutes. What is its duration in hours?",b:1.5,tol:0.01,suf:"hours",u:"90 ÷ 60 = 1.5 hours."},
 {j:"pilih",t:"Based on the table, which instrument is the most suitable for measuring the thickness of a sheet of paper?",p:["Micrometer screw gauge","Metre rule","Vernier calliper","Measuring cylinder"],b:0,u:"Paper is very thin. A micrometer can read up to 0.01 mm."},
 {j:"pilih",t:"Based on the table, which instrument is the most suitable for measuring the inside diameter of a pipe?",p:["Vernier calliper","Micrometer screw gauge","Metre rule","Digital stopwatch"],b:0,u:"A vernier calliper has inside jaws for measuring inside diameters."},
 {j:"pilih",t:"When reading a measuring cylinder, the correct position of the eye is:",p:["Level with the bottom of the meniscus","Above the cylinder, looking down","Level with the top of the water meniscus","Below the cylinder, looking up"],b:0,u:"Reading at eye level avoids parallax error."},
 {j:"pilih",t:"The needle of an ammeter shows 0.2 A even though no current is flowing. This error is called:",p:["Zero error","Parallax error","Random error","Estimation error"],b:0,u:"Zero error is a systematic error. Subtract 0.2 A from every reading or adjust the needle to zero."},
 {j:"pilih",t:"A student measures the time for a 100 m run three times and calculates the average. The purpose is to:",p:["Reduce random error","Eliminate the zero error of the stopwatch","Make the run faster","Change the unit of time to minutes"],b:0,u:"Taking the average of several readings reduces the effect of random error."}],
 bos:{j:"nombor",t:"A bottle contains 1.5 litres of water. What is its volume in millilitres?",b:1500,tol:0.5,suf:"ml",u:"1 litre = 1000 ml, so 1.5 × 1000 = 1500 ml."}},

{n:4, tempat:"Density Tank", sk:"1.5 Density", lampiran:"blok",
 kadNama:"Density", kadEm:"\u{1F9CA}", kadFakta:"Ice floats on water because ice is less dense than water.",
 bosKadNama:"Iron Ship", bosKadEm:"\u{1F6A2}", bosKadFakta:"An iron ship floats because its hull is hollow and filled with air, so the average density of the ship is less than that of seawater.",
 soalan:[
 {j:"nombor",t:"What is the density of block Q, in g/cm³?",b:2.7,tol:0.01,suf:"g/cm³",u:"81 ÷ 30 = 2.7 g/cm³."},
 {j:"nombor",t:"What is the density of block P, in g/cm³?",b:0.8,tol:0.01,suf:"g/cm³",u:"40 ÷ 50 = 0.8 g/cm³."},
 {j:"pilih",t:"Which block will float in water?",p:["P only","P and R","Q and S","All the blocks"],b:0,u:"Only P is less dense than water. R is as dense as water, so it does not rise to the surface."},
 {j:"susun",t:"Arrange the blocks in order of density, starting with the MOST dense.",p:["S","Q","R","P"],b:[0,1,2,3],u:"S = 7.9, Q = 2.7, R = 1.0 and P = 0.8 g/cm³."},
 {j:"pilih",t:"Block S has the largest mass. Is that the main reason it sinks?",p:["No, it sinks because it is denser than water","Yes, heavy objects always sink in water","Yes, because its volume is the smallest","No, it sinks because it is a solid"],b:0,u:"A very heavy log still floats. What decides it is density, not mass."},
 {j:"pilih",t:"Block Q is cut into two equal halves. What is the density of each half?",p:["2.7 g/cm³","1.35 g/cm³","5.4 g/cm³","0.9 g/cm³"],b:0,u:"The mass and the volume both become half, so the ratio stays the same."},
 {j:"pilih",t:"Cooking oil floats on water in a pot. The correct conclusion is:",p:["Oil is less dense than water","Oil is heavier than water","Water is less dense than oil","Oil and water have the same density"],b:0,u:"A less dense liquid forms a layer on top."},
 {j:"pilih",t:"A small stone is placed into a measuring cylinder. The water level rises from 30 ml to 42 ml. The volume of the stone is:",p:["12 cm³","42 cm³","72 cm³","30 cm³"],b:0,u:"Water displacement method: 42 − 30 = 12 ml = 12 cm³."}],
 bos:{j:"pilih",t:"A hot air balloon rises into the sky. What is the most accurate explanation?",p:["The hot air inside is less dense than the air outside","The fire pushes the balloon straight up like a rocket engine","Hot air is heavier, so it pushes the balloon upwards","Gravity does not act on hot air"],b:0,u:"Air expands when heated, so its density decreases."}},

{n:5, tempat:"Experiment Room", sk:"1.6 / 1.7 Evaluating scientific investigations", lampiran:"gula",
 kadNama:"Fair Test", kadEm:"\u{2696}", kadFakta:"In a fair test, only one variable is changed at a time and the others are kept constant.",
 bosKadNama:"Honest with Data", bosKadEm:"\u{1F4CB}", bosKadFakta:"Scientists report the real data even when the results do not match their hypothesis.",
 soalan:[
 {j:"pilih",t:"Groups 1, 2 and 3 tested the effect of temperature of water. What is the manipulated variable?",p:["Temperature of water","Time for sugar to dissolve","Type of sugar","Volume of water"],b:0,u:"Temperature is the thing that the students deliberately change."},
 {j:"pilih",t:"What is the responding variable for Groups 1, 2 and 3?",p:["Time for sugar to dissolve","Temperature of water","Mass of sugar","Rate of stirring"],b:0,u:"The dissolving time changes as a result of the change in temperature."},
 {j:"pilih",t:"Which hypothesis is supported by the data of Groups 1, 2 and 3?",p:["The higher the temperature of the water, the faster the sugar dissolves","The higher the temperature of the water, the slower the sugar dissolves","The temperature of the water does not affect the time for sugar to dissolve","The more water there is, the faster the sugar dissolves"],b:0,u:"The dissolving time drops from 95 s to 35 s as the temperature rises."},
 {j:"pilih",t:"Group 4 claims that sugar cubes dissolve more slowly than fine sugar. Evaluate this claim.",p:["Not valid yet, because the volume of water is also different","Valid, because Group 4 took the longest time","Valid, because Group 4 had the highest water temperature","Not valid yet, because its water temperature is too low"],b:0,u:"Group 4 changed two variables at the same time, which are the type of sugar and the volume of water. The test is not fair."},
 {j:"pilih",t:"How should Group 4 improve their experiment?",p:["Use 100 ml of water at 70 °C with sugar cubes","Use 50 ml of water at 30 °C with fine sugar","Stir faster so the sugar cubes dissolve quickly","Change to salt so the results are clearer"],b:0,u:"Only the type of sugar should be different from Group 3."},
 {j:"pilih",t:"All the groups took one reading only. The main weakness is that:",p:["The results are less reliable","There is too much data to analyse","The sugar will dissolve faster on the second reading","The temperature of the water cannot be measured correctly"],b:0,u:"Repeating at least three times helps to detect unusual readings."},
 {j:"pilih",t:"The result of Group 2 is different from their prediction. What is the most ethical action?",p:["Report the real data and try to explain it","Change the data so it matches the prediction","Remove the data from the report","Copy the nicer data of another group"],b:0,u:"Being honest and accurate when recording data is the most important scientific attitude."},
 {j:"banyak",t:"Choose ALL the fixed variables for Groups 1, 2 and 3.",p:["Mass of sugar","Volume of water","Type of sugar","Rate of stirring","Temperature of water","Time to dissolve"],b:[0,1,2,3],u:"The water temperature is changed and the dissolving time is measured. The others are kept the same."}],
 bos:{j:"susun",t:"Arrange the steps of a scientific investigation in the correct order.",p:["Identify the problem","Form a hypothesis","Plan and control the variables","Conduct the experiment","Interpret the data","Make a conclusion and report"],b:[0,1,2,3,4,5],u:"This order follows the steps of the scientific method in the DSKP."}},

{n:6, tempat:"Innovation Fair", sk:"1.1 / 1.5 / 1.6 Create using the scientific method",
 kadNama:"Innovation", kadEm:"\u{1F4A1}", kadFakta:"Digital thermometers, digital balances and laser distance meters are innovations that make measuring faster and more accurate.",
 bosKadNama:"Layered Drink", bosKadEm:"\u{1F964}", bosKadFakta:"A layered drink is made by pouring the sweetest liquid first because it is the densest.",
 soalan:[
 {j:"pilih",t:"You want to make a three-layer drink to sell on entrepreneurship day. What is the most effective method?",p:["Pour the thickest syrup first, followed by the less sweet liquids","Pour the ice first so that each layer freezes quickly","Stir all the liquids together so the colour and taste are even","Pour the thinnest liquid first so that it becomes the bottom layer"],b:0,u:"A liquid with more sugar is denser, so it stays at the bottom."},
 {j:"pilih",t:"You design a float from plastic bottles for the school pond. What is the most important feature?",p:["The bottle is tightly closed so that the air stays inside","The bottle is filled with sand to make it more stable","The bottle is cut in half to make it light","The bottle is filled with water so that the wind does not blow it away easily"],b:0,u:"The air inside the bottle makes the average density of the float lower than that of water."},
 {j:"pilih",t:"You need to measure the thickness of one sheet of paper but you only have a ruler. What is the smartest way?",p:["Measure a stack of 100 sheets, then divide by 100","Measure one sheet of paper with the ruler many times","Estimate the thickness by looking from the side","Fold the paper once and measure the fold"],b:0,u:"Measuring many sheets together reduces the error for each sheet."},
 {j:"pilih",t:"You design a laboratory safety poster for new Form 1 students. What is the most useful content?",p:["Hazard symbols, examples of substances and emergency actions","An alphabetical list of the names of all the apparatus in the laboratory","The history of how the school science laboratory was established","Pictures of famous world scientists and their life stories"],b:0,u:"A safety poster should help students act correctly."},
 {j:"pilih",t:"The Science Club wants to test whether a metal bottle cap or a plastic bottle cap heats up faster in the sun. Which is the fairest design?",p:["Use caps of the same size and colour, placed in the same spot","Place the metal cap in the sun and the plastic cap under a tree","Use a large metal cap and a small plastic cap","Measure the temperature of the metal cap in the morning and the plastic cap in the evening"],b:0,u:"Only the type of material should be different. Everything else must be the same."},
 {j:"pilih",t:"Your village sells honey but some sellers mix it with water. What is the most scientific simple test idea?",p:["Compare its density with pure honey","Taste the honey and guess whether it is pure","Look at the colour of the honey under a lamp","Ask the seller whether the honey is pure"],b:0,u:"Water is less dense than honey, so honey mixed with water has a lower density."},
 {j:"pilih",t:"You suggest a science career to a friend who loves the sea and the creatures in it. What is the most suitable choice?",p:["Oceanographer","Geologist","Pharmacologist","Astronomer"],b:0,u:"Oceanography studies the oceans, including their living things."},
 {j:"pilih",t:"Your invention failed in its first test. What is the most appropriate scientific attitude?",p:["Identify the cause and try again","Switch to a friend's invention that has already succeeded","Report that the invention was successful","Stop because the first test has failed"],b:0,u:"Perseverance and honesty are important attitudes in an investigation."}],
 bos:{j:"buka",
  t:"Your class must sell one food or drink product on the school entrepreneurship day, using the concept of density. Design the product.",
  arahan:"Describe the product, its ingredients and measurements, how the concept of density is used, a simple experiment to test the product before it is sold (state the variables), food safety steps, and an estimate of the cost and selling price.",
  u:"A strong TP6 answer uses density correctly, plans a fair test with clear variables, and takes hygiene, cost and customers into account."}}
];

module.exports = {
  id:"t1b1", tingkatan:1, kod:"1.0 Introduction to Scientific Investigation",
  tajuk:"Laboratory Trail",
  subtajuk:"Science Form 1 · Chapter 1 Introduction to Scientific Investigation",
  spi:SPI,
  /* PBD comments by performance level. {n} is replaced with the student's first name. */
  ulasan:{
   1:"{n} can recall the meaning of science, the branches of science, laboratory apparatus, hazard symbols and S.I. units. The next step is to explain the reason for each laboratory rule.",
   2:"{n} understands laboratory safety rules, base quantities and prefixes and can explain them. More practice is needed in converting units and reading measuring instruments.",
   3:"{n} can convert units, choose a suitable measuring instrument and avoid errors when measuring. Encourage writing the unit correctly in every answer.",
   4:"{n} is able to analyse mass and volume data to calculate density and predict whether an object floats or sinks. Next, practise evaluating experimental designs.",
   5:"{n} can evaluate a scientific investigation, identify an unfair test and suggest improvements. Ready for a creative task.",
   6:"{n} successfully created a product or device using the concept of density and the scientific method, taking safety and cost into account. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Introduction to Scientific Investigation. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ kaedah:R_KAEDAH, ukurpensel:R_PEMBARIS_H2, ukur:T_UKUR, blok:T_BLOK, gula:T_GULA },
  aras:ARAS
};
