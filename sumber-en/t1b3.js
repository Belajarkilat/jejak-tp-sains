/* English source (DLP) — Science KSSM Form 1, Chapter 3.0 Coordination and
   Response (3.1 Homeostasis in living things). Translation of sumber/t1b3.js.
   Run `node bina.js --en t1b3` to check it and generate bank-en-t1b3.js.
   Structure must match sumber/t1b3.js exactly. Correct answer at index 0. */

const SPI = [
"Recall knowledge and skills about coordination and response.",
"Understand coordination and response and be able to explain this understanding.",
"Apply knowledge and skills about coordination and response to carry out simple tasks.",
"Analyse knowledge about coordination and response in the context of solving problems about natural events or phenomena.",
"Evaluate knowledge about coordination and response in the context of problem solving and decision making to carry out a task.",
"Design a presentation using various media / visuals / a folio / a poster / role play / drama in a creative and innovative way, using scientific knowledge and skills about coordination and response in the context of problem solving and decision making, taking into account the social / economic / cultural values of society."];

/* ---------- attachments ---------- */

const R_MAKLUMBALAS = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Condition in the body changes",
    "Receptor detects the change",
    "Brain compares with normal level",
    "Effector responds",
    "Condition returns to normal"
  ],
  "kapsyen": "Figure 1 · How the body maintains its internal conditions.",
  "alt": "Vertical flow diagram of five steps: a condition in the body changes, the receptor detects it, the brain compares it with the normal level, the effector responds, the condition returns to normal"
};

const R_SUHU = {
  "jenis": "graf",
  "titik": true,
  "setiap": 2,
  "x": [
    0,
    10,
    20,
    30,
    40,
    50,
    60
  ],
  "yMin": 26,
  "yMaks": 40,
  "grid": 7,
  "siri": [
    {
      "label": "Outside air temperature",
      "y": [
        28,
        30,
        33,
        35,
        37,
        38,
        38
      ],
      "warna": "merah"
    },
    {
      "label": "Aisyah's body temperature",
      "y": [
        37,
        37,
        37.1,
        37.2,
        37.1,
        37.2,
        37.1
      ],
      "warna": "ungu"
    }
  ],
  "xLabel": "Time (minutes)",
  "kapsyen": "Figure 1 · Air temperature and Aisyah's body temperature while gardening.",
  "alt": "Line graph: the outside air temperature rises from 28 to 38 degrees Celsius in an hour, while the body temperature stays around 37 degrees"
};

const T_BADAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Situation</th>'+
'<th>Environmental temperature</th><th>Response observed in Hafiz</th></tr></thead><tbody>'+
'<tr><td>W</td><td>35 &deg;C, running on the field</td><td>Sweats a lot, face turns red</td></tr>'+
'<tr><td>X</td><td>18 &deg;C, in an air-conditioned room</td><td>Shivers, hair stands on end</td></tr>'+
'<tr><td>Y</td><td>30 &deg;C, no water for 5 hours</td><td>A little urine, dark yellow in colour</td></tr>'+
'<tr><td>Z</td><td>28 &deg;C, drinks 1 litre of water</td><td>A lot of urine, clear</td></tr>'+
'</tbody></table></div><p class="qnote">Hafiz\'s body temperature stays at about 37 &deg;C in all situations.</p>';

const T_LARIAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Time</th>'+
'<th class="n">Heart rate (beats/min)</th><th class="n">Breathing rate (breaths/min)</th><th class="n">Body temperature (&deg;C)</th></tr></thead><tbody>'+
'<tr><td>Before running (at rest)</td><td class="n">72</td><td class="n">16</td><td class="n">36.9</td></tr>'+
'<tr><td>10th minute of running</td><td class="n">150</td><td class="n">36</td><td class="n">37.6</td></tr>'+
'<tr><td>20th minute of running</td><td class="n">165</td><td class="n">40</td><td class="n">37.8</td></tr>'+
'<tr><td>10 minutes after stopping</td><td class="n">95</td><td class="n">20</td><td class="n">37.2</td></tr>'+
'</tbody></table></div><p class="qnote">Data of a student during cross-country training. Fictional data.</p>';

const T_DAUN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Pot</th>'+
'<th>Condition</th><th class="n">Water lost in 6 hours (g)</th></tr></thead><tbody>'+
'<tr><td>P</td><td>In the sun, windy</td><td class="n">48</td></tr>'+
'<tr><td>Q</td><td>In the sun, no wind</td><td class="n">30</td></tr>'+
'<tr><td>R</td><td>In the shade, no wind</td><td class="n">12</td></tr>'+
'<tr><td>S</td><td>In the sun, leaves smeared with Vaseline</td><td class="n">3</td></tr>'+
'</tbody></table></div><p class="qnote">Four balsam plants of the same size. The soil of each pot is wrapped in plastic so that water is lost only through the leaves and stem. Fictional data.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Body Thermostat", sk:"3.1 The meaning of homeostasis", lampiran:"maklumbalas",
 kadNama:"Homeostasis", kadEm:"\u{2696}", kadFakta:"The body temperature of a healthy human is kept at about 37 °C even when the weather outside is hot or cold.",
 bosKadNama:"Sweat Gland", bosKadEm:"\u{1F4A7}", bosKadFakta:"Human skin has millions of sweat glands that help to cool the body when sweat evaporates.",
 soalan:[
 {j:"pilih",t:"Based on Figure 1, homeostasis is:",p:["Maintaining a stable environment inside the body","The change of body temperature with the weather outside","The growth of the body from small to big","The movement of an organism from one place to another"],b:0,u:"For example, body temperature and water content are kept at suitable levels."},
 {j:"pilih",t:"The normal body temperature of a human is about:",p:["37 °C","27 °C","42 °C","100 °C"],b:0,u:"A temperature that is too high or too low can disturb the functions of cells."},
 {j:"pilih",t:"The response of the human body when it is too hot is:",p:["Sweating","Shivering","Hair standing on end","Passing less urine"],b:0,u:"Sweat that evaporates carries heat away from the body."},
 {j:"pilih",t:"The response of the human body when it is too cold is:",p:["Shivering","Sweating","Sticking out the tongue","Drinking a lot of water"],b:0,u:"Shivering muscles produce heat."},
 {j:"pilih",t:"The main organ that controls the water content in the human body is the:",p:["Kidney","Heart","Lung","Stomach"],b:0,u:"The kidneys decide how much water is removed as urine."},
 {j:"pilih",t:"Plants lose water through the stomata on their leaves. This process is called:",p:["Transpiration","Photosynthesis","Respiration","Digestion"],b:0,u:"Transpiration helps plants to regulate their water content."},
 {j:"pilih",t:"A dog sticks out its tongue and breathes fast on a hot day. The purpose is to:",p:["Cool the body","Search for the smell of food","Scare off enemies","Take in more oxygen for running"],b:0,u:"Water evaporating from the tongue and respiratory tract carries heat away."},
 {j:"banyak",t:"Choose ALL the examples of homeostasis in humans.",p:["Sweating when exercising","Shivering in a cold room","Passing less urine when drinking less","Hair growing longer every month","Growing quickly during adolescence"],b:[0,1,2],u:"The growth of hair and the body is not an effort to maintain conditions inside the body."}],
 bos:{j:"banyak",t:"Choose ALL the body systems involved in controlling body temperature.",p:["Integumentary system (skin)","Nervous system","Circulatory system","Skeletal system","Digestive system"],b:[0,1,2],u:"Nerves detect the change, the skin sweats, and the blood vessels in the skin widen or narrow."}},

{n:2, tempat:"Control Room", sk:"3.1 Systems involved in homeostasis", lampiran:"grafsuhu",
 kadNama:"Kidney", kadEm:"\u{1FAD8}", kadFakta:"The two kidneys filter about 180 litres of blood fluid a day, but only about 1.5 litres becomes urine.",
 bosKadNama:"Stoma", bosKadEm:"\u{1F343}", bosKadFakta:"A stoma is controlled by two guard cells. When a plant lacks water, the guard cells close the stoma.",
 soalan:[
 {j:"pilih",t:"Why does the face turn red when running on a hot day?",p:["Blood vessels in the skin widen to release heat","Less blood flows to the skin so that heat is not released","The skin is burnt by the strong sunlight","Red blood cells increase quickly in the face"],b:0,u:"More blood near the skin surface releases heat into the air."},
 {j:"pilih",t:"Why do we shiver when we are cold?",p:["Muscles contract quickly and produce heat","The skin tries to remove excess water","The heart stops for a moment to rest","Sweat is produced to warm the surface of the skin"],b:0,u:"The work of muscles produces heat as a by-product of cell respiration."},
 {j:"pilih",t:"On a very hot day, a person's urine becomes small in amount and dark. The reason is that:",p:["A lot of water is lost as sweat, so the kidneys save water","The kidneys stop working completely on hot days","All the drinking water goes straight out as sweat only","The body produces more salt on hot days"],b:0,u:"The kidneys reabsorb more water when the body lacks water."},
 {j:"pilih",t:"Why does the heart rate increase during heavy work?",p:["The muscles need more oxygen and glucose","The heart becomes hotter and beats faster","The blood becomes thinner when working hard","The lungs stop supplying oxygen to the blood"],b:0,u:"Blood pumped faster supplies the materials for cell respiration and carries carbon dioxide away."},
 {j:"pilih",t:"What happens to the stomata when a plant lacks water?",p:["The stomata close to reduce water loss","The stomata open wide to absorb rainwater","The stomata turn into root hair cells","The stomata produce more chlorophyll"],b:0,u:"Closing the stomata reduces transpiration."},
 {j:"pilih",t:"African elephants often flap their large ears. This helps them to:",p:["Release body heat","Hear sounds more clearly","Chase away predators that come close","Store water in the ears"],b:0,u:"Elephant ears have many blood vessels; flapping cools that blood."},
 {j:"pilih",t:"Based on Figure 1, why does Aisyah's body temperature hardly change even though the air temperature rises by 10 degrees?",p:["So that cells can work in suitable conditions","So that humans do not need to eat and drink","So that body temperature is always the same as room temperature","So that humans can grow faster"],b:0,u:"Chemical reactions in cells need a stable temperature and water content."},
 {j:"pilih",t:"Hair stands on end when it is cold. In animals with thick fur, this response:",p:["Traps air to insulate against heat loss","Removes body heat more quickly","Draws more sunlight onto the skin","Produces sweat between the hairs"],b:0,u:"Air is a good heat insulator."}],
 bos:{j:"susun",t:"Arrange the responses of the body when body temperature rises during exercise.",p:["Body temperature rises","The brain detects the change in temperature","Sweat glands secrete sweat","Sweat evaporates and carries heat away","Body temperature returns to normal"],b:[0,1,2,3,4],u:"This is an example of regulating body temperature through responses that correct the change."}},

{n:3, tempat:"School Field", sk:"3.1 Identifying homeostatic responses", lampiran:"badan",
 kadNama:"Urine", kadEm:"\u{1F6B0}", kadFakta:"The colour of urine is a simple indicator: pale yellow usually means the body has enough water.",
 bosKadNama:"Dehydration", bosKadEm:"\u{1F975}", bosKadFakta:"Dehydration can cause dizziness, tiredness and difficulty concentrating in class.",
 soalan:[
 {j:"pilih",t:"In situation W, which response helps Hafiz to cool his body?",p:["Sweating a lot","Shivering","Hair standing on end","Dark urine"],b:0,u:"The evaporation of sweat carries heat away from the skin."},
 {j:"pilih",t:"In situation X, why does Hafiz shiver?",p:["To produce heat","To remove excess water","Because he is very tired","Because his muscles are injured"],b:0,u:"Shivering is muscles contracting repeatedly and quickly."},
 {j:"pilih",t:"Which situation shows the kidneys saving water?",p:["Y","W","X","Z"],b:0,u:"A small amount of dark urine means more water is reabsorbed."},
 {j:"pilih",t:"In situation Z, why is Hafiz's urine plentiful and clear?",p:["The body removes excess water","Hafiz's kidneys are not working properly","Hafiz sweats too much","The room temperature is too low for sweating"],b:0,u:"The kidneys remove the extra water so that the water content of the body stays stable."},
 {j:"pilih",t:"Hafiz's body temperature stays at about 37 °C in all situations. This proves that:",p:["Homeostasis maintains body temperature","The environmental temperature does not affect the body at all","Hafiz does not do any physical activity","The thermometer used is broken"],b:0,u:"The body responds to changes in the environment to maintain its internal temperature."},
 {j:"pilih",t:"In situation W, Hafiz does not drink water after running. What is most likely to happen later?",p:["His urine becomes small in amount and dark","He starts to shiver even though the weather is hot","His urine becomes plentiful and clear","His body temperature drops to 30 °C"],b:0,u:"A lot of water is lost as sweat, so the kidneys save water."},
 {j:"pilih",t:"Hafiz's friend runs under the scorching sun until he feels dizzy and stops sweating. What is the most correct first action?",p:["Take him to a shaded place and give him water","Tell him to keep running so that his body gets used to the heat","Wrap him in thick blankets so he does not shiver","Give him a very cold fizzy drink all at once"],b:0,u:"These are signs of heat stroke. Cool the body, loosen the clothing and get help quickly."},
 {j:"banyak",t:"Choose ALL the CORRECT pairs of situation and system.",p:["W: integumentary system (skin)","Y: excretory system","X: muscular system","Z: skeletal system","W: digestive system"],b:[0,1,2],u:"Sweat comes from the skin, urine from the kidneys, and shivering is done by the muscles."}],
 bos:{j:"pilih",t:"Based on the table, what is the most suitable advice for students on a hot sports day?",p:["Drink water little by little throughout the day","Drink water only after all the events have ended","Wear thick clothes so the skin is not burnt by the sun","Avoid drinking so that there is no need to go to the toilet during events"],b:0,u:"Water lost through sweat needs to be replaced continuously."}},

{n:4, tempat:"Cross-Country Track", sk:"3.1 Analysing data on the body's responses", lampiran:"larian",
 kadNama:"Pulse", kadEm:"\u{2764}", kadFakta:"Heart rate can be measured by feeling the pulse at the wrist and counting the beats in 1 minute.",
 bosKadNama:"Fitness", bosKadEm:"\u{1F3C3}", bosKadFakta:"A fit person usually has a lower resting heart rate and recovers faster after exercise.",
 soalan:[
 {j:"nombor",t:"What is the increase in heart rate from rest to the 20th minute, in beats/min?",b:93,tol:0.5,suf:"beats/min",u:"165 − 72 = 93 beats/min."},
 {j:"pilih",t:"Why does the breathing rate increase when running?",p:["To take in more oxygen and remove carbon dioxide","Because the air on the track is thinner than in the classroom","To cool the lungs which have become too hot","Because the chest muscles are tired and cannot expand"],b:0,u:"Active muscles carry out more cell respiration."},
 {j:"pilih",t:"Body temperature rises by only 0.9 °C even though the student runs for 20 minutes. What is the most reasonable reason?",p:["Sweat and the blood vessels in the skin release heat","The muscles stop producing heat while running","The wind prevents the body from becoming hot at all","The heart pumps cooler blood to the whole body"],b:0,u:"Homeostatic mechanisms limit the rise in body temperature."},
 {j:"pilih",t:"What does the data 10 minutes after stopping show?",p:["The body is returning to its normal state","The student is still running slowly","The student is having a fever","The heart stops working for a moment"],b:0,u:"All the readings are approaching the resting values."},
 {j:"pilih",t:"Heart rate and breathing rate increase together. What is the best explanation?",p:["Both help to supply oxygen to the muscles","Both are controlled by the kidneys during exercise","The lungs pump blood directly to the whole body","It is just a coincidence because the two are not related"],b:0,u:"The lungs take in oxygen, and the heart transports it to the muscles."},
 {j:"nombor",t:"What is the decrease in breathing rate from the 20th minute to 10 minutes after stopping, in breaths/min?",b:20,tol:0.5,suf:"breaths/min",u:"40 − 20 = 20 breaths/min."},
 {j:"pilih",t:"Student B, who is fitter, runs together with them. What is the most reasonable prediction for Student B?",p:["Their heart rate recovers faster","Their heart rate rises higher, to 200 beats/min","Their body temperature drops below 36 °C while running","They do not sweat at all during the run"],b:0,u:"A trained heart and lungs are more efficient."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["Exercise increases heart rate","Exercise increases breathing rate","The body begins to recover after exercise is stopped","Body temperature rises above 40 °C while running","Breathing rate stays the same throughout the run"],b:[0,1,2],u:"The maximum body temperature is 37.8 °C, and the breathing rate changes from 16 to 40."}],
 bos:{j:"pilih",t:"A student claims that sweating means the body is not healthy. Based on the data and the concept of homeostasis, the claim is:",p:["Wrong, sweating is how the body controls its temperature","Correct, because healthy people never sweat","Correct, because sweat shows that body temperature is out of control","Wrong, because sweat only comes out when a person is sleeping"],b:0,u:"Sweating during exercise is a sign that homeostasis is working."}},

{n:5, tempat:"School Garden", sk:"3.1 Evaluating homeostasis in plants", lampiran:"daun",
 kadNama:"Transpiration", kadEm:"\u{1F4A8}", kadFakta:"A big tree can lose hundreds of litres of water a day through transpiration.",
 bosKadNama:"Cactus", bosKadEm:"\u{1F335}", bosKadFakta:"Cactus leaves have turned into spines, so a cactus loses very little water in the desert.",
 soalan:[
 {j:"pilih",t:"Compare pots P and Q. Which factor is tested?",p:["Wind","Sunlight","Type of plant","Type of soil"],b:0,u:"The only difference between P and Q is wind."},
 {j:"pilih",t:"Compare pots Q and R. What is the most accurate conclusion?",p:["Sunlight increases transpiration","Shade increases the rate of transpiration","Wind does not affect the rate of transpiration","Balsam does not transpire at all"],b:0,u:"Q loses 30 g of water, R only 12 g."},
 {j:"pilih",t:"Why does pot S lose the least water?",p:["The Vaseline blocks the stomata","Plant S is smaller than the others","Plant S has not been watered since the start","The soil of pot S is not wrapped in plastic"],b:0,u:"Without open stomata, very little water can escape through the leaves."},
 {j:"pilih",t:"Why is the soil of each pot wrapped in plastic?",p:["So that water is lost only through the plant","So that the soil stays hot all the time","So that the roots do not absorb water","So that the plant is not blown by the wind"],b:0,u:"Water evaporating from the soil would confuse the readings."},
 {j:"pilih",t:"A student claims that this experiment proves light is the most important factor. Evaluate the claim.",p:["Not accurate yet, the effect of wind is also large and there are no repeats","Accurate, because pot R lost the least water","Accurate, because light is needed for photosynthesis","Wrong, because Vaseline is the most important factor"],b:0,u:"Wind adds 18 g and light adds 18 g. One plant for each condition is not enough for a strong conclusion."},
 {j:"pilih",t:"The flowering plants in the school corridor often wilt at noon. What is the most appropriate action?",p:["Move them to partial shade and water in the morning","Water with ice-cold water at noon","Cut off all the leaves so there is no more transpiration","Smear Vaseline on all the leaves of the plants"],b:0,u:"Reducing extreme exposure and supplying water early in the day helps plants to regulate water."},
 {j:"pilih",t:"Why do the leaves of a plant wilt at noon but become fresh again in the evening?",p:["Water is lost faster than it is absorbed, then it balances again","The plant stops photosynthesising at noon forever","The leaves die at noon and grow again in the evening","The roots stop working when it is hot and recover in the evening"],b:0,u:"When transpiration decreases in the evening, the leaf cells become firm again."},
 {j:"pilih",t:"A cactus is suited to dry areas because:",p:["Its spines reduce water loss","Its leaves are broad and have many stomata","Its roots do not absorb water at all","Its stem does not store any water"],b:0,u:"A cactus also stores water in its thick stem."}],
 bos:{j:"pilih",t:"The school wants to plant trees at the edge of a hot, windy field with a limited water supply. What is the most appropriate choice?",p:["Small, waxy-leaved trees that tolerate drought","Broad-leaved trees that need watering three times a day","Swamp trees that need the soil to be wet all the time","Flowering plants in small pots that are not watered"],b:0,u:"Small, waxy leaves reduce transpiration."}},

{n:6, tempat:"Youth Health Centre", sk:"3.1 Designing using the concept of homeostasis",
 kadNama:"Smart Water Bottle", kadEm:"\u{1F964}", kadFakta:"Some smart water bottles light up to remind users to drink water regularly.",
 bosKadNama:"Malay House", bosKadEm:"\u{1F3E0}", bosKadFakta:"Traditional Malay houses are built on tall stilts with many windows so that air flows and the house stays cool.",
 soalan:[
 {j:"pilih",t:"You design a 'Drink Enough Water' poster for students. Which indicator is the easiest for students to understand?",p:["A colour chart of urine from pale to dark","A table of the mineral content in bottled water","A picture of the kidney with labels in Latin","A graph of the sweat rate of Olympic athletes"],b:0,u:"Students can check the colour of their own urine every day."},
 {j:"pilih",t:"You design sports clothing for hot weather. Which feature is most suitable?",p:["Thin fabric that lets sweat evaporate","Thick dark-coloured fabric","Waterproof plastic fabric","Loose, many-layered clothes"],b:0,u:"Sweat needs to evaporate to cool the body."},
 {j:"pilih",t:"Your classroom is hot in the afternoon. What is the most practical and cheap suggestion?",p:["Open the opposite windows and plant shade trees","Close all the windows so that outside heat cannot come in","Paint the outside walls of the building black","Put thick dark curtains on all the windows"],b:0,u:"Airflow and shade help the body to release heat more easily."},
 {j:"pilih",t:"You are planning a training session for the school football team. What is the most suitable time?",p:["When it is overcast, with regular drinking breaks","At noon so that students get used to the hot weather quickly","Without breaks so that students become stronger and tougher","Right after a heavy lunch"],b:0,u:"Avoiding the scorching sun and drinking regularly reduce the risk of heat stroke."},
 {j:"pilih",t:"You design an automatic watering system for the school garden. What is the most efficient watering time?",p:["Early morning","Noon","Every hour throughout the day","Midnight only"],b:0,u:"In the early morning, less water evaporates and the plants are ready for the hot day."},
 {j:"pilih",t:"Your grandfather drinks too little water because he does not want to go to the toilet often. What is the most suitable advice?",p:["Drink a little but often throughout the day","Drink only when he feels very thirsty","Replace plain water with sugary drinks","Drink a lot all at once at night"],b:0,u:"Drinking regularly maintains the water content of the body without overloading the kidneys all at once."},
 {j:"pilih",t:"You design a hutch for the rabbits of the environment club. What is the most important feature for the rabbits' homeostasis?",p:["Shade, good ventilation and clean water","A closed metal hutch placed in the sun","A very small hutch so the rabbits do not move much","A smooth plastic floor with no air holes"],b:0,u:"Rabbits overheat easily; shade, air and water help control their body temperature."},
 {j:"pilih",t:"How would you test whether your water bottle design really helps students to drink more?",p:["Compare the water drunk with and without the bottle","Ask one friend whether they like the colour of the bottle","Measure the size of the bottle and compare it with a normal bottle in a shop","Sell the bottle and see how many are sold"],b:0,u:"Comparing real data over several days shows whether the design is effective."}],
 bos:{j:"buka",
  t:"Your school wants to reduce the number of students who feel dizzy and tired because of hot weather during assembly and recess. Design a campaign or a device that uses the concept of homeostasis.",
  arahan:"Describe your design, the related homeostatic responses of the body (body temperature and water content), the materials or media used, how its effectiveness is tested, and the cost and suitability for students, teachers and the canteen.",
  u:"A strong TP6 answer links sweating, the blood vessels in the skin and the kidneys to the design, plans how to measure effectiveness, and is realistic in terms of cost."}}
];

module.exports = {
  id:"t1b3", tingkatan:1, kod:"3.0 Coordination and Response",
  tajuk:"Balance Trail",
  subtajuk:"Science Form 1 · Chapter 3 Coordination and Response",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the meaning of homeostasis and examples of responses such as sweating, shivering and transpiration. The next step is to explain how each response happens.",
   2:"{n} understands the systems involved in homeostasis in humans, animals and plants and can explain them. More practice is needed in linking responses to real situations.",
   3:"{n} can identify homeostatic responses in everyday situations and give simple advice about water intake. Encourage naming the body systems involved.",
   4:"{n} is able to analyse data on heart rate, breathing and body temperature to explain homeostasis during exercise. Next, practise evaluating experiments and claims.",
   5:"{n} can evaluate a transpiration experiment and make sound decisions about caring for plants. Ready for a design task.",
   6:"{n} successfully designed a campaign or device that uses the concept of homeostasis in a creative and practical way. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Coordination and Response. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ maklumbalas:R_MAKLUMBALAS, grafsuhu:R_SUHU, badan:T_BADAN, larian:T_LARIAN, daun:T_DAUN },
  aras:ARAS
};
