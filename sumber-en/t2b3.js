/* English source (DLP) — Science KSSM Form 2, Chapter 3.0 Nutrition.
   Translation of sumber/t2b3.js.
   Run `node bina.js --en t2b3` to check it and generate bank-en-t2b3.js.
   Structure must match sumber/t2b3.js exactly. Correct answer at index 0.

   Calorie values in the attachments are estimates so students can calculate;
   the colour of the Millon's test precipitate is not asked because textbooks differ. */

const SPI = [
"Recall knowledge and skills about nutrition.",
"Understand nutrition and be able to explain this understanding.",
"Apply knowledge of nutrition to explain natural events or phenomena and carry out simple tasks.",
"Analyse knowledge about nutrition in the context of solving problems about natural events or phenomena.",
"Evaluate knowledge about nutrition in the context of problem solving and decision making to carry out a task.",
"Create using scientific knowledge and skills about nutrition in the context of problem solving or decision making, or in carrying out activities / tasks in new situations in a creative and innovative way, taking into account the social / economic / cultural values of society."];

/* ---------- attachments ---------- */

const R_HASILCERNA = {
  "jenis": "aliran",
  "mod": "siratan",
  "nod": [
    { "id": "k", "label": "Carbohydrate", "x": 0, "y": 0 },
    { "id": "k2", "label": "Glucose", "x": 1, "y": 0 },
    { "id": "p", "label": "Protein", "x": 0, "y": 1 },
    { "id": "p2", "label": "Amino acids", "x": 1, "y": 1 },
    { "id": "l", "label": "Fat", "x": 0, "y": 2 },
    { "id": "l2", "label": "Fatty acids & glycerol", "x": 1, "y": 2 }
  ],
  "panah": [
    ["k", "k2"],
    ["p", "p2"],
    ["l", "l2"]
  ],
  "kapsyen": "Figure 1 · End products of digestion for three classes of food.",
  "alt": "Three rows: carbohydrate becomes glucose, protein becomes amino acids, fat becomes fatty acids and glycerol"
};

const R_HEMPEDU = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Large fat droplet",
    "Bile emulsifies it",
    "Many small fat droplets",
    "Lipase enzyme acts",
    "Fatty acids and glycerol"
  ],
  "kapsyen": "Figure 1 · The role of bile in the digestion of fat.",
  "alt": "Vertical flow diagram: a large fat droplet is broken up by bile into many small droplets, then the enzyme lipase produces fatty acids and glycerol"
};

const T_UJI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Sample</th>'+
'<th>Iodine solution</th><th>Benedict\'s solution (heated)</th><th>Alcohol-emulsion test</th></tr></thead><tbody>'+
'<tr><td>W</td><td>Dark blue</td><td>Stays blue</td><td>Clear</td></tr>'+
'<tr><td>X</td><td>Brown</td><td>Brick-red precipitate</td><td>Clear</td></tr>'+
'<tr><td>Y</td><td>Brown</td><td>Stays blue</td><td>Cloudy white emulsion</td></tr>'+
'<tr><td>Z</td><td>Dark blue</td><td>Brick-red precipitate</td><td>Clear</td></tr>'+
'</tbody></table></div><p class="qnote">Results of food tests for four samples. The original colour of iodine solution is brown and of Benedict\'s solution is blue.</p>';

const T_LIUR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Tube</th>'+
'<th>Contents</th><th class="n">Temperature (&deg;C)</th><th>Iodine test after 20 minutes</th></tr></thead><tbody>'+
'<tr><td>P</td><td>Starch solution + saliva</td><td class="n">37</td><td>Brown (no starch)</td></tr>'+
'<tr><td>Q</td><td>Starch solution + distilled water</td><td class="n">37</td><td>Dark blue</td></tr>'+
'<tr><td>R</td><td>Starch solution + saliva</td><td class="n">5</td><td>Dark blue</td></tr>'+
'<tr><td>S</td><td>Starch solution + saliva that has been boiled</td><td class="n">37</td><td>Dark blue</td></tr>'+
'</tbody></table></div><p class="qnote">Saliva contains the enzyme amylase. Boiling destroys enzymes.</p>';

const T_MENU =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Food or drink</th>'+
'<th class="n">Energy (kcal)</th><th>Main content</th></tr></thead><tbody>'+
'<tr><td>Plain nasi lemak</td><td class="n">400</td><td>Carbohydrate, fat</td></tr>'+
'<tr><td>Roti canai, 2 pieces</td><td class="n">600</td><td>Carbohydrate, fat</td></tr>'+
'<tr><td>White rice, grilled fish and vegetables</td><td class="n">550</td><td>Carbohydrate, protein, fibre</td></tr>'+
'<tr><td>Teh tarik</td><td class="n">150</td><td>Sugar, fat</td></tr>'+
'<tr><td>Plain water</td><td class="n">0</td><td>Water</td></tr>'+
'<tr><td>One banana</td><td class="n">100</td><td>Carbohydrate, fibre, potassium</td></tr>'+
'</tbody></table></div><p class="qnote">Estimated values. The daily energy requirement of an active 14-year-old is about 2000 to 2400 kcal.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Farmers' Market", sk:"3.1 / 3.3 Classes of food and the digestive system", lampiran:"hasilcerna",
 kadNama:"Seven Food Classes", kadEm:"\u{1F957}", kadFakta:"The seven classes of food are carbohydrates, proteins, fats, vitamins, minerals, roughage and water.",
 bosKadNama:"Enzyme", bosKadEm:"\u{2702}", bosKadFakta:"Enzymes speed up the breakdown of food without being changed after the reaction.",
 soalan:[
 {j:"pilih",t:"The class of food that is the main source of energy for the body is:",p:["Carbohydrates","Vitamins","Minerals","Roughage"],b:0,u:"Examples are rice, bread and tubers."},
 {j:"pilih",t:"The class of food needed for growth and repair of cells is:",p:["Protein","Fat","Water","Roughage"],b:0,u:"Sources are fish, eggs, meat and beans."},
 {j:"pilih",t:"A lack of vitamin C can cause:",p:["Scurvy","Rickets","Goitre","Anaemia"],b:0,u:"Bleeding gums are a sign of scurvy."},
 {j:"pilih",t:"The mineral needed to form haemoglobin is:",p:["Iron","Iodine","Sodium","Potassium"],b:0,u:"A lack of iron causes anaemia."},
 {j:"pilih",t:"The solution used to test for the presence of glucose is:",p:["Benedict's solution","Iodine solution","Millon's reagent","Alcohol"],b:0,u:"A brick-red precipitate forms after heating."},
 {j:"pilih",t:"The organ that produces bile is the:",p:["Liver","Pancreas","Stomach","Gall bladder"],b:0,u:"Bile is stored in the gall bladder and emulsifies fats."},
 {j:"pilih",t:"The main place where digested food is absorbed is the:",p:["Small intestine","Stomach","Large intestine","Oesophagus"],b:0,u:"Villi on the wall of the small intestine increase the surface area."},
 {j:"banyak",t:"Based on Figure 1, choose ALL the end products of digestion.",p:["Glucose","Amino acids","Fatty acids and glycerol","Starch","Protein"],b:[0,1,2],u:"Starch and protein are large molecules that must be digested first."}],
 bos:{j:"pilih",t:"The enzyme amylase in saliva digests:",p:["Starch","Protein","Fat","Vitamins"],b:0,u:"Starch is broken down into maltose."}},

{n:2, tempat:"School Kitchen", sk:"3.2 / 3.3 / 3.4 Balanced diet, digestion and egestion", lampiran:"hempedu",
 kadNama:"Healthy Plate", kadEm:"\u{1F37D}", kadFakta:"The Malaysian Healthy Plate: half vegetables and fruit, a quarter rice or carbohydrates, a quarter protein.",
 bosKadNama:"Fibre", bosKadEm:"\u{1F966}", bosKadFakta:"Fibre is not digested, but it helps faeces to move smoothly through the large intestine.",
 soalan:[
 {j:"pilih",t:"Why is roughage important even though it is not digested?",p:["It prevents constipation","It is the main source of energy","It builds muscle","It forms haemoglobin"],b:0,u:"Roughage adds bulk to faeces and stimulates movement of the intestine."},
 {j:"pilih",t:"The difference between physical digestion and chemical digestion is that physical digestion:",p:["Breaks up food without enzymes","Breaks down big molecules with the help of enzymes","Takes place only in the small intestine","Produces glucose from starch directly"],b:0,u:"Examples are teeth chewing and the stomach churning food."},
 {j:"pilih",t:"Based on Figure 1, why does bile help the digestion of fat?",p:["It breaks fat into small droplets","It is an enzyme that breaks fat down into glucose","It changes fat into protein","It absorbs fat into the blood"],b:0,u:"Small droplets have a larger surface area for lipase to act on."},
 {j:"pilih",t:"The main function of the large intestine is to:",p:["Reabsorb water","Digest protein","Produce bile","Absorb glucose"],b:0,u:"The remaining food becomes faeces and is removed through the anus."},
 {j:"pilih",t:"Why does a construction worker need more energy than a clerk?",p:["The work is more physically active","He is taller than the clerk","He works inside a building","A clerk's work needs more protein"],b:0,u:"Occupation is one of the factors that affect a balanced diet."},
 {j:"pilih",t:"The products of digestion are transported around the body by the:",p:["Circulatory system","Skeletal system","Respiratory system","Muscular system"],b:0,u:"Glucose is then used in cell respiration with oxygen from the lungs."},
 {j:"pilih",t:"Why can eating too much fatty and sugary food cause obesity?",p:["Excess energy is stored as fat","Fat and sugar stop the digestion of protein","The food has no energy at all","The food is removed straight away as faeces"],b:0,u:"Obesity increases the risk of diabetes and heart disease."},
 {j:"pilih",t:"A lack of iodine in food can cause:",p:["Goitre","Scurvy","Rickets","Night blindness"],b:0,u:"Iodised salt helps to prevent goitre."}],
 bos:{j:"susun",t:"Arrange the organs in the order food passes through the digestive tract.",p:["Mouth","Oesophagus","Stomach","Small intestine","Large intestine","Anus"],b:[0,1,2,3,4,5],u:"The liver, pancreas and gall bladder help but food does not pass through them."}},

{n:3, tempat:"Food Test Lab", sk:"3.1 Applying food tests", lampiran:"uji",
 kadNama:"Benedict's Solution", kadEm:"\u{1F9EA}", kadFakta:"Blue Benedict's solution turns into a brick-red precipitate when heated with glucose.",
 bosKadNama:"Emulsion", bosKadEm:"\u{1F95B}", bosKadFakta:"In the alcohol-emulsion test, fat forms a cloudy white emulsion when the alcohol solution is poured into water.",
 soalan:[
 {j:"pilih",t:"Sample W contains:",p:["Starch only","Glucose only","Fat only","Starch and glucose"],b:0,u:"Iodine turns dark blue; the other tests are negative."},
 {j:"pilih",t:"Sample X contains:",p:["Glucose","Starch","Fat","Starch and fat"],b:0,u:"Benedict's solution forms a brick-red precipitate."},
 {j:"pilih",t:"Sample Y is most likely:",p:["Cooking oil","Sugar water","Starch solution","Plain water"],b:0,u:"Only the alcohol-emulsion test is positive."},
 {j:"pilih",t:"Which sample contains more than one class of food that was tested?",p:["Z","W","X","Y"],b:0,u:"Z is positive for starch and glucose."},
 {j:"pilih",t:"Sample Z is most likely:",p:["Ripe banana","Cooking oil","Sugar water","Butter"],b:0,u:"A banana contains starch and sugar."},
 {j:"pilih",t:"Why must the tube containing Benedict's solution be heated in a water bath?",p:["So that the reaction takes place","So that the colour of the iodine disappears","So that starch turns into fat","So that the solution becomes cold"],b:0,u:"Without heating, the colour change does not happen."},
 {j:"pilih",t:"The reagent used to test for protein is:",p:["Millon's reagent","Benedict's solution","Iodine solution","Alcohol"],b:0,u:"Millon's reagent is heated with the sample."},
 {j:"banyak",t:"Choose ALL the CORRECT statements based on the table.",p:["W and Z contain starch","X and Z contain glucose","Only Y contains fat","W contains glucose","All the samples contain fat"],b:[0,1,2],u:"W contains only starch, and only Y forms an emulsion."}],
 bos:{j:"pilih",t:"A student tests sugarcane juice and gets a brick-red precipitate. What is the most accurate conclusion?",p:["Sugarcane juice contains a reducing sugar","Sugarcane juice contains a lot of starch","Sugarcane juice contains fat","Sugarcane juice contains no sugar"],b:0,u:"Benedict's solution detects glucose and other reducing sugars."}},

{n:4, tempat:"Enzyme Lab", sk:"3.3 / 3.4 Analysing the action of enzymes and absorption", lampiran:"liur",
 kadNama:"Amylase", kadEm:"\u{1F444}", kadFakta:"Rice that is chewed for a long time tastes sweet because the amylase in saliva breaks starch down into sugar.",
 bosKadNama:"Visking Tubing", bosKadEm:"\u{1F9EA}", bosKadFakta:"Visking tubing acts like the wall of the small intestine: small molecules can pass through it but big molecules cannot.",
 soalan:[
 {j:"pilih",t:"Why does tube P no longer contain starch?",p:["Amylase digests the starch","Starch evaporates at 37 °C","Iodine destroys starch","Saliva changes starch into fat"],b:0,u:"Starch is broken down into maltose."},
 {j:"pilih",t:"What is the function of tube Q in this experiment?",p:["As a control","To add starch","To heat the saliva","To measure body temperature"],b:0,u:"Q shows that starch does not disappear without saliva."},
 {j:"pilih",t:"Compare tubes P and R. What is the most accurate conclusion?",p:["Amylase is less active at a low temperature","Amylase is most active at 5 °C","Temperature does not affect enzymes","Starch does not dissolve at 5 °C"],b:0,u:"At 5 °C, starch is still present after 20 minutes."},
 {j:"pilih",t:"Why is there still starch in tube S?",p:["The enzyme was destroyed when boiled","Boiled saliva contains more starch","A temperature of 37 °C is too hot for the enzyme","Iodine does not work with saliva"],b:0,u:"Heating to a high temperature destroys enzymes."},
 {j:"pilih",t:"Why is a temperature of 37 °C chosen for tube P?",p:["It is human body temperature","It is the temperature of boiling water","It is normal room temperature","It is the temperature of a refrigerator"],b:0,u:"Human enzymes are most active at body temperature."},
 {j:"pilih",t:"In an experiment, Visking tubing contains a solution of starch and glucose, and the water outside the tubing is tested after 30 minutes. What result is expected?",p:["Glucose is detected, starch is not","Starch is detected, glucose is not","Both are detected","Nothing is detected"],b:0,u:"Small glucose molecules can diffuse out; starch molecules are too big."},
 {j:"pilih",t:"The result of the Visking tubing experiment helps to explain why:",p:["Starch must be digested before it is absorbed","Glucose is not needed by the body","The large intestine absorbs all the starch","Protein does not need to be digested"],b:0,u:"Only small molecules can pass through the wall of the small intestine into the blood."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["Saliva digests starch","Low temperatures slow down the action of enzymes","A boiled enzyme no longer works","Distilled water digests starch","Enzymes are most active at 5 °C"],b:[0,1,2],u:"Tube Q shows that distilled water does not digest starch."}],
 bos:{j:"pilih",t:"A student suggests testing tube P after only 2 minutes to save time. Evaluate the suggestion.",p:["Not suitable; digestion is not complete yet","Suitable, because enzymes act immediately","Suitable, because temperature is not important","Not suitable, because the saliva will boil"],b:0,u:"A time that is too short can give a misleading result."}},

{n:5, tempat:"Healthy Canteen", sk:"3.2 Evaluating a balanced diet", lampiran:"menu",
 kadNama:"Calorie", kadEm:"\u{1F525}", kadFakta:"A calorie is a measure of the energy in food. 1 kcal is equal to about 4.2 kJ.",
 bosKadNama:"Hidden Sugar", bosKadEm:"\u{1F9CB}", bosKadFakta:"A glass of teh tarik can contain several teaspoons of sugar.",
 soalan:[
 {j:"nombor",t:"Aiman has plain nasi lemak and teh tarik for breakfast. What is the total energy he takes in, in kcal?",b:550,tol:0.5,suf:"kcal",u:"400 + 150 = 550 kcal."},
 {j:"nombor",t:"Mei Ling eats 2 pieces of roti canai and teh tarik. What is her total energy, in kcal?",b:750,tol:0.5,suf:"kcal",u:"600 + 150 = 750 kcal."},
 {j:"pilih",t:"Which lunch is the most balanced?",p:["White rice, grilled fish and vegetables","Roti canai, 2 pieces, and teh tarik","Plain nasi lemak with teh tarik","Teh tarik and a banana"],b:0,u:"It contains carbohydrate, protein and fibre."},
 {j:"pilih",t:"Which drink is the most suitable for a student who wants to reduce sugar?",p:["Plain water","Teh tarik","Syrup drink","Canned fizzy drink"],b:0,u:"Plain water has no sugar and no calories."},
 {j:"pilih",t:"The canteen wants to reduce student obesity. What is the most effective suggestion based on the table?",p:["Cut back roti canai, add rice, fish, vegetables","Sell more teh tarik because students like it","Ban all carbohydrate foods","Close the canteen so students do not eat"],b:0,u:"A balanced menu with less fat and sugar helps."},
 {j:"pilih",t:"A student claims that roti canai is suitable for breakfast because it gives the most energy. Evaluate the claim.",p:["Not necessarily; high in fat, low in fibre","Correct; more energy is always better","Correct; roti canai contains all the classes of food","Wrong; roti canai has no energy at all"],b:0,u:"The nutrient content, not just the amount of energy, decides a balanced meal."},
 {j:"pilih",t:"The school football player trains for two hours a day. His energy requirement compared with an ordinary student is:",p:["Higher","Lower","The same","Not needed"],b:0,u:"Physical activity increases the energy requirement."},
 {j:"pilih",t:"Why is a banana a better snack than teh tarik for recess?",p:["It has fibre and potassium, and less added sugar","It has more fat than teh tarik","It has no energy at all","It contains more protein than fish"],b:0,u:"A banana gives energy together with other nutrients."}],
 bos:{j:"pilih",t:"A teacher wants to plan a week's canteen menu for students. What is the most appropriate approach?",p:["Use the Healthy Plate concept","Choose only the cheapest food","Serve the same menu every day","Ask students for their favourite food only"],b:0,u:"Variety makes sure all the classes of food are obtained."}},

{n:6, tempat:"Innovation Kitchen", sk:"3.2 / 3.4 Creating a balanced diet",
 kadNama:"Local Food", kadEm:"\u{1F35B}", kadFakta:"Local ulam such as pegaga and ulam raja are rich in fibre and vitamins.",
 bosKadNama:"Nutrition Label", bosKadEm:"\u{1F3F7}", bosKadFakta:"The nutrition information label on packaging shows the energy, fat, sugar and salt in each serving.",
 soalan:[
 {j:"pilih",t:"You design a cheap breakfast menu for hostel students. Which combination is the most balanced?",p:["Wholemeal bread, boiled egg, banana and milk","Instant noodles, crackers and fizzy drink","Sweet bread, fried cakes and sweet tea","Two packets of nasi lemak and syrup"],b:0,u:"It has carbohydrate, protein, vitamins, minerals and fibre."},
 {j:"pilih",t:"You design a poster to prevent constipation. What is the most accurate advice?",p:["Eat vegetables, fruit and drink water","Eat more red meat every day","Drink less water so faeces are hard","Avoid all fibrous foods"],b:0,u:"Fibre and water make faeces move easily."},
 {j:"pilih",t:"You design a healthier drink product for entrepreneurship day. Which idea is the most suitable?",p:["Local fruit juice with no added sugar","Fizzy drink with high sugar","Creamy drink with syrup","Caffeinated energy drink"],b:0,u:"Local fruit gives vitamins without too much sugar."},
 {j:"pilih",t:"You plan an obesity study at school. Which data is most useful to collect?",p:["Weight, eating habits and physical activity","Each student's favourite colour of school shirt","The number of books in the library","The distance from each student's home to the supermarket"],b:0,u:"Data on diet and lifestyle help to identify the causes."},
 {j:"pilih",t:"You design a 'Cut Down on Sugar' campaign in the canteen. What is the most practical step?",p:["Provide less sweet options","Ban all drinks in the canteen","Raise the price of plain water","Sell sugar in big packets"],b:0,u:"Easy options that cost no more encourage change."},
 {j:"pilih",t:"You design a model of the digestive system for upper primary school pupils. Which material is most suitable to represent the long small intestine?",p:["A long rubber tube","A small plastic container","A pencil","A ping-pong ball"],b:0,u:"The small intestine is very long and coiled inside the abdomen."},
 {j:"pilih",t:"Your family wants to eat healthier on a limited budget. What is the most practical suggestion?",p:["Use local seasonal ingredients","Buy expensive imported food","Eat at fast-food restaurants","Eat fewer vegetables because they are expensive"],b:0,u:"Local seasonal ingredients are cheaper and fresher."},
 {j:"pilih",t:"How would you evaluate whether a healthy-eating campaign at school is successful?",p:["Compare sales of healthy menu items","Count the number of posters put up","Ask the canteen operator whether they like the campaign","Measure the size of the canteen"],b:0,u:"A change in food choices shows the effect of the campaign."}],
 bos:{j:"buka",
  t:"The rate of obesity among students at your school is rising. Design a programme or a product to help students practise a balanced diet.",
  arahan:"Describe your programme or product, the classes of food and estimated calorie values involved, how it takes into account factors such as age and physical activity, how its success is measured, and the cost and suitability to students' eating culture.",
  u:"A strong TP6 answer uses the concepts of a balanced diet and calorie values correctly, takes individual factors into account, and plans realistic measurement."}}
];

module.exports = {
  id:"t2b3", tingkatan:2, kod:"3.0 Nutrition",
  tajuk:"Nutrition Trail",
  subtajuk:"Science Form 2 · Chapter 3 Nutrition",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the classes of food, their functions and the organs of the digestive system. The next step is to explain the processes of digestion and absorption.",
   2:"{n} understands a balanced diet, digestion and egestion and can explain them. More practice is needed in interpreting food test results.",
   3:"{n} can identify the content of food based on the results of the iodine, Benedict's and alcohol-emulsion tests. Encourage stating colour changes accurately.",
   4:"{n} is able to analyse enzyme and Visking tubing experiments to explain digestion and absorption. Next, practise evaluating food menus.",
   5:"{n} can evaluate menus based on calorie values and nutrient content and make sound decisions. Ready for a creative task.",
   6:"{n} successfully created a healthy eating programme or product that is creative and practical. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Nutrition. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ hasilcerna:R_HASILCERNA, hempedu:R_HEMPEDU, uji:T_UJI, liur:T_LIUR, menu:T_MENU },
  aras:ARAS
};
