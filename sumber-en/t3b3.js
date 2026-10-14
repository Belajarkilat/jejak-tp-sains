/* English source (DLP) — Science KSSM Form 3, Chapter 3.0 Transportation.
   Translation of sumber/t3b3.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t3b3` to check it and generate bank-en-t3b3.js.
   Structure must match sumber/t3b3.js exactly. Correct answer at index 0. */

const SPI = [
"Recall the knowledge and science skills about transportation.",
"Understand and explain about transportation.",
"Apply knowledge about transportation and able to carry out simple tasks.",
"Analyse knowledge about transportation in context of problem solving on events or natural phenomena.",
"Evaluate knowledge about transportation in context of problem solving and decision making to carry out a task.",
"Design a task using knowledge and science skills about transportation in a creative and innovative way in the context of problem solving and decision making or carry out a task in a new situation with regards to the social values/economy/culture of the community."];

/* ---------- attachments ---------- */

const R_RUANG = {
  "jenis": "graf",
  "mod": "mendatar",
  "yMaks": 14,
  "bar": [
    { "label": "Left ventricle", "nilai": 12, "warna": "merah" },
    { "label": "Right ventricle", "nilai": 4, "warna": "merah" },
    { "label": "Right atrium", "nilai": 2, "warna": "ungu" },
    { "label": "Left atrium", "nilai": 3, "warna": "ungu" }
  ],
  "xLabel": "Thickness of muscle wall (mm)",
  "kapsyen": "Figure 1 · Thickness of the muscle wall of the four chambers of the human heart.",
  "alt": "Bar graph: left ventricle 12 mm, right ventricle 4 mm, right atrium 2 mm and left atrium 3 mm"
};

const R_SALUR = {
  "jenis": "struktur",
  "mod": "label",
  "bahagian": [
    { "label": "Artery", "bentuk": "bulat", "x": 30, "y": 16, "r": 13, "anchorX": 39.5, "isi": "merahLembut", "garis": "merah" },
    { "bentuk": "bulat", "x": 30, "y": 16, "r": 6, "isi": "kertas", "garis": "merah" },
    { "label": "Vein", "bentuk": "bulat", "x": 30, "y": 50, "r": 13, "anchorX": 41.75, "isi": "kertas2", "garis": "ungu" },
    { "bentuk": "bulat", "x": 30, "y": 50, "r": 10.5, "isi": "kertas", "garis": "ungu" },
    { "label": "Capillary", "bentuk": "bulat", "x": 30, "y": 84, "r": 6, "anchorX": 35, "isi": "kertas2", "garis": "garis2" },
    { "bentuk": "bulat", "x": 30, "y": 84, "r": 4, "isi": "kertas", "garis": "garis2" }
  ],
  "kapsyen": "Figure 1 · Cross-section of three types of blood vessels and the thickness of their walls.",
  "alt": "Cross-section: the artery has the thickest wall, the vein has a thin wall with a wide space inside, and the capillary is much smaller"
};

const T_NADI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Student</th>'+
'<th class="n">Resting pulse (min&#8315;&#185;)</th><th class="n">Right after 3 minutes of running</th>'+
'<th class="n">After 5 minutes of rest</th><th>Background</th></tr></thead><tbody>'+
'<tr><td>Farid</td><td class="n">72</td><td class="n">150</td><td class="n">78</td><td>Plays sports three times a week</td></tr>'+
'<tr><td>Gayathri</td><td class="n">88</td><td class="n">168</td><td class="n">126</td><td>Seldom exercises</td></tr>'+
'<tr><td>Hakim</td><td class="n">58</td><td class="n">140</td><td class="n">64</td><td>Member of the school athletics team</td></tr>'+
'</tbody></table></div><p class="qnote">Recovery time is the time for the pulse to return close to the resting reading. A faster recovery shows better heart fitness.</p>';

const T_DARAH =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Blood group</th><th>Antigen on red blood cells</th>'+
'<th>Antibody in plasma</th><th>Can donate to</th><th>Can receive from</th></tr></thead><tbody>'+
'<tr><td>A</td><td>A</td><td>anti-B</td><td>A, AB</td><td>A, O</td></tr>'+
'<tr><td>B</td><td>B</td><td>anti-A</td><td>B, AB</td><td>B, O</td></tr>'+
'<tr><td>AB</td><td>A and B</td><td>none</td><td>AB</td><td>A, B, AB, O</td></tr>'+
'<tr><td>O</td><td>none</td><td>anti-A and anti-B</td><td>A, B, AB, O</td><td>O</td></tr>'+
'</tbody></table></div><p class="qnote">Clumping happens when an antibody in the recipient\'s plasma meets the matching antigen on the donor\'s red blood cells.</p>';

const T_TRANSPIRASI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Condition</th>'+
'<th class="n">Temperature (&deg;C)</th><th class="n">Humidity (%)</th><th>Wind</th>'+
'<th class="n">Rate of transpiration (mm h&#8315;&#185;)</th></tr></thead><tbody>'+
'<tr><td>Control</td><td class="n">28</td><td class="n">70</td><td>None</td><td class="n">12</td></tr>'+
'<tr><td>Set A</td><td class="n">28</td><td class="n">70</td><td>Fan switched on</td><td class="n">21</td></tr>'+
'<tr><td>Set B</td><td class="n">35</td><td class="n">70</td><td>None</td><td class="n">19</td></tr>'+
'<tr><td>Set C</td><td class="n">28</td><td class="n">95</td><td>None</td><td class="n">5</td></tr>'+
'</tbody></table></div><p class="qnote">Leafy shoots of the same size are used for each set, measured with a potometer for one hour.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Heart", sk:"3.1 / 3.2 The transport system and the heart", lampiran:"ruangjantung",
 kadNama:"Left Ventricle", kadEm:"\u{1FAC0}", kadFakta:"The wall of the left ventricle is about three times thicker than that of the right ventricle, because it pumps blood to the whole body.",
 bosKadNama:"Heart Valve", bosKadEm:"\u{1F6AA}", bosKadFakta:"The lub-dub sound heard through a stethoscope is the sound of the heart valves closing, not the sound of the muscle contracting.",
 soalan:[
 {j:"pilih",t:"What is the main function of the transport system in an organism?",p:["To carry nutrients, gases and waste to and from every cell","To produce the energy needed for all muscle movement","To protect the internal organs from injury and infection","To control body temperature by releasing sweat through the skin"],b:0,u:"Cells far from the surface of the body cannot depend on diffusion alone."},
 {j:"pilih",t:"Based on Figure 1, the heart chamber with the thickest muscle wall is the:",p:["Left ventricle","Right ventricle","Left atrium","Right atrium"],b:0,u:"It must generate enough pressure to send blood around the whole body."},
 {j:"pilih",t:"The blood component that transports oxygen is the:",p:["Red blood cells","White blood cells","Platelets","Plasma"],b:0,u:"The haemoglobin in red blood cells binds oxygen."},
 {j:"susun",t:"Arrange the path of blood in pulmonary circulation in the correct order.",p:["Right ventricle","Pulmonary artery","Capillaries in the lungs","Pulmonary vein","Left atrium"],b:[0,1,2,3,4],u:"Pulmonary circulation carries blood to the lungs and back to the heart again."},
 {j:"pilih",t:"The blood vessel that carries blood out of the heart is the:",p:["Artery","Vein","Capillary","Lymph vessel"],b:0,u:"Arteries go out, veins come in, whatever their oxygen content."},
 {j:"pilih",t:"The transport vessel that carries water and minerals from the roots to the leaves is the:",p:["Xylem","Phloem","Cuticle","Stoma"],b:0,u:"Xylem also supports the stem because its walls contain lignin."},
 {j:"pilih",t:"The blood component that helps blood to clot is the:",p:["Platelets","Red blood cells","Plasma","Haemoglobin"],b:0,u:"Platelets gather at a wound and start the clotting process."},
 {j:"pilih",t:"What is the function of valves in the heart and veins?",p:["To make sure that blood flows in one direction only","To filter waste out of the blood before it goes to the kidney","To increase blood pressure so it reaches the ends of the body","To change deoxygenated blood into oxygenated blood"],b:0,u:"Without valves, blood would flow backwards when the pressure falls."}],
 bos:{j:"banyak",t:"Choose ALL the substances that are transported by human blood.",p:["Oxygen from the lungs","Digested nutrients","Hormones from glands","Waste such as urea","Sunlight from the skin","Sound waves from the ears"],b:[0,1,2,3],u:"Blood is the body's delivery system for substances, not for light or sound energy."}},

{n:2, tempat:"Blood Vessels", sk:"3.2 The structure and function of blood vessels", lampiran:"salurdarah",
 kadNama:"Capillary", kadEm:"\u{1FA78}", kadFakta:"Capillaries are so fine that red blood cells have to move in single file to pass through.",
 bosKadNama:"Simple Organisms", bosKadEm:"\u{1F9A0}", bosKadFakta:"An amoeba has no transport system at all, because no part of its cell is far from its outer surface.",
 soalan:[
 {j:"pilih",t:"Based on Figure 1, why is the wall of an artery thicker and more muscular than a vein?",p:["Arteries withstand high pressure each time the heart contracts","Arteries carry blood that is thicker and heavier","Arteries are closer to the surface of the skin","Arteries need to store extra oxygen for emergencies"],b:0,u:"The pulse that can be felt at the wrist is that wave of pressure."},
 {j:"pilih",t:"Why do veins have valves but most arteries do not?",p:["Blood pressure in veins is low, so valves stop backflow","Blood pressure in veins is high, so valves reduce the pressure","Veins carry heavier blood because it has no oxygen","Valves in arteries would burst from the high blood pressure"],b:0,u:"The contraction of skeletal muscles around the veins helps to push blood back to the heart."},
 {j:"pilih",t:"Why is the wall of a capillary only one cell thick?",p:["So the diffusion distance is short and substances are quickly exchanged with cells","So blood flows faster without the friction of a thick wall","So capillaries burst easily to release white blood cells","So capillaries are lighter and do not burden the heart"],b:0,u:"Capillaries are the only place where exchange of substances really takes place."},
 {j:"pilih",t:"Why is the pulmonary artery considered an exception to the usual rule?",p:["It is an artery but carries deoxygenated blood","It is a vein but carries oxygenated blood","It is an artery but has no muscular wall","It is an artery but its blood flows in two directions"],b:0,u:"The real rule is that arteries carry blood away from the heart, not that arteries always carry oxygenated blood."},
 {j:"pilih",t:"What is the difference between pulmonary circulation and systemic circulation?",p:["Pulmonary is between the heart and the lungs, systemic is between the heart and the body","Pulmonary is between the heart and the body, systemic is between the heart and the lungs","Pulmonary carries only oxygenated blood, systemic only deoxygenated","Pulmonary happens at rest, systemic happens only during exercise"],b:0,u:"That is why the human heart has four chambers, which are two separate paths."},
 {j:"pilih",t:"Why do simple organisms such as the amoeba not need a transport system?",p:["The amoeba is small enough for diffusion to be sufficient","The amoeba does not need oxygen because it lives in water","The amoeba stores all the nutrients it needs in its nucleus","The amoeba moves fast enough to take in substances from its surroundings"],b:0,u:"As an organism gets bigger, the ratio of surface area to volume falls and diffusion is no longer enough."},
 {j:"pilih",t:"What is the main difference between xylem and phloem?",p:["Xylem carries water upwards, phloem carries the products of photosynthesis","Xylem carries the products of photosynthesis, phloem carries water upwards","Xylem is made of living cells, phloem is made of dead cells","Both carry water, but xylem is located farther inside"],b:0,u:"Xylem cells are dead and hollow, while phloem cells are still alive."},
 {j:"pilih",t:"Why do human red blood cells have no nucleus?",p:["The space is used to hold more haemoglobin","So the cells do not multiply uncontrollably in the blood vessels","So the cells are heavier and sink easily into capillaries","Because their nucleus is moved to the plasma to make antibodies"],b:0,u:"Their biconcave disc shape also increases the surface area for gas exchange."}],
 bos:{j:"pilih",t:"What happens if the valve between the left atrium and the left ventricle leaks?",p:["Some blood flows back into the atrium, so less blood reaches the body","Blood flows faster to the whole body because the valve is always open","The lungs receive twice as much oxygenated blood as usual","There is no effect because the valve on the right side of the heart takes over"],b:0,u:"The heart has to work harder to send the same amount of blood, and over time it tires."}},

{n:3, tempat:"Capillary & Tissue", sk:"3.2 / 3.3 Applying to daily life", lampiran:"nadi",
 kadNama:"Pulse Rate", kadEm:"\u{1F493}", kadFakta:"The resting pulse of a trained athlete can be as low as 40 beats a minute, because each beat pumps more blood.",
 bosKadNama:"Blood Pressure", bosKadEm:"\u{1FA7A}", bosKadFakta:"A blood pressure reading of 120 over 80 means the pressure when the heart contracts and when the heart relaxes.",
 soalan:[
 {j:"pilih",t:"Based on the table, why does the pulse rate of all the students rise right after running?",p:["The muscles need more oxygen and carbon dioxide must be removed faster","The rise in body temperature makes the volume of blood expand quickly","The heart enlarges during exercise and has to beat more often","The blood becomes thicker, so the heart has to push more often"],b:0,u:"Pulse rate is how the body increases the rate of delivery, not the amount of blood."},
 {j:"nombor",t:"What is the rise in Gayathri's pulse rate, in beats per minute, from rest to right after running?",b:80,tol:0.5,suf:"min⁻¹",u:"168 minus 88 equals 80 beats per minute."},
 {j:"pilih",t:"Based on the table, who shows the best heart fitness?",p:["Hakim, because his resting pulse is the lowest and he recovers fastest","Gayathri, because her pulse rise after running is the highest","Farid, because all his readings are in the middle of the range","All three equally, because everyone's pulse rises after running"],b:0,u:"A low resting pulse and fast recovery are two signs of heart fitness."},
 {j:"pilih",t:"Why does a small cut on the finger stop bleeding by itself?",p:["Platelets gather at the cut and start clotting","Red blood cells stick together and form new skin","Plasma hardens by itself when it meets air","White blood cells cover the cut to stop germs getting in"],b:0,u:"Without platelets, even a small cut can be dangerous, and that is the problem of haemophilia patients."},
 {j:"pilih",t:"Why does the face turn red during hard exercise?",p:["Blood vessels in the skin widen to release excess heat","The blood runs out of oxygen and turns bright red","White blood cells gather at the skin surface to fight germs","Blood pressure pushes red blood cells out of the vessels into the skin"],b:0,u:"Small blood vessels under the skin widen so that more heat is released. The circulatory system also helps to control body temperature."},
 {j:"pilih",t:"Why can a person who stands for too long faint?",p:["Blood collects in the legs because of gravity, so less blood goes to the brain","The legs use almost all the oxygen in the blood while standing","The heart stops beating for a moment when the body does not move","The brain produces too much carbon dioxide during long standing"],b:0,u:"That is why soldiers on parade are advised to move their calf muscles little by little."},
 {j:"pilih",t:"Why do the leaves of a plant wilt at hot noon even though the soil is moist?",p:["The rate of transpiration exceeds the rate at which water is absorbed by the roots","The roots stop absorbing water when the soil is hot","The xylem is blocked by hot air entering through the stomata","The phloem drains water out of the leaves to the roots at noon"],b:0,u:"The plant usually recovers in the evening when the temperature falls."},
 {j:"pilih",t:"An anaemia patient gets tired quickly even though breathing normally. Why?",p:["Too few red blood cells or too little haemoglobin, so less oxygen reaches the cells","His lungs cannot expand fully when breathing in","His heart beats too slowly to pump blood to the brain","His blood vessels are too wide, so his blood pressure is low"],b:0,u:"The problem is not in taking in oxygen, but in transporting it."}],
 bos:{j:"nombor",t:"Farid's heart pumps about 70 ml of blood with each beat. How many litres of blood are pumped in one minute when his resting pulse is 72 beats a minute?",b:5.04,tol:0.05,suf:"L",u:"72 multiplied by 70 ml equals 5040 ml, which is 5.04 litres a minute."}},

{n:4, tempat:"Blood", sk:"3.3 Analysing blood groups", lampiran:"darah",
 kadNama:"Universal Donor", kadEm:"\u{1FA78}", kadFakta:"Group O has no antigens on its red blood cells, so those cells are not recognised as foreign by anyone.",
 bosKadNama:"Clumping", bosKadEm:"\u{26A0}", bosKadFakta:"Mismatched blood clumps within minutes and can block small capillaries in important organs.",
 soalan:[
 {j:"pilih",t:"Based on the table, which blood group is called the universal donor?",p:["O","AB","A","B"],b:0,u:"Group O can donate to all four groups because its cells have neither antigen A nor B."},
 {j:"pilih",t:"Based on the table, which blood group is called the universal recipient?",p:["AB","O","A","B"],b:0,u:"AB plasma has no anti-A or anti-B antibodies, so no donor cells are attacked."},
 {j:"banyak",t:"A patient with blood group B needs a blood transfusion. Choose ALL the groups that are safe for him.",p:["B","O","A","AB"],b:[0,1],u:"The plasma of patient B contains anti-A, so any blood that carries antigen A will clump."},
 {j:"pilih",t:"Why does clumping happen when mismatched blood is transfused?",p:["Antibodies in the recipient's plasma meet matching antigens on the donor's cells","The donor's red blood cells are too big for the recipient's capillaries","The donor's plasma clots the recipient's blood at once","Haemoglobin from the two groups mixes and hardens"],b:0,u:"Antibodies bind many cells at once until they form clumps."},
 {j:"pilih",t:"A patient with blood group A is given group B blood by mistake. What is the most direct effect?",p:["Anti-B in his plasma attacks the B blood cells and clumping occurs","Anti-A in his plasma attacks the B blood cells and clumping occurs","There is no effect because both groups are still human blood","His blood group changes to AB after a few days"],b:0,u:"The clumps that form can block small blood vessels in the kidneys and brain."},
 {j:"banyak",t:"Based on the table, choose ALL the CORRECT statements.",p:["O plasma has anti-A and anti-B","AB has no anti-A or anti-B","A can receive from O","Group O can receive from any group","Group AB can donate to group A"],b:[0,1,2],u:"Group O can only receive from O, and AB can only donate to AB."},
 {j:"pilih",t:"A hospital runs out of group AB blood. Why is this less urgent than running out of group O?",p:["AB patients can receive all groups, O patients can only receive O","AB patients can only receive O, so the O stock is enough for them","AB blood can be made again quickly in the hospital laboratory","Group AB patients rarely need transfusions during surgery"],b:0,u:"That is why blood banks worry most when the O stock runs low."},
 {j:"pilih",t:"A patient's blood pressure reading is 150 over 95 on three visits in a row. What is the most reasonable interpretation?",p:["A repeated high reading is a pattern that a doctor should investigate","The device is faulty because the reading never changes","The patient is healthy because his blood pressure reading is consistent","A reading of 95 means the patient's pulse is 95 beats a minute"],b:0,u:"One high reading can be caused by nervousness, but three repeated readings are a pattern."}],
 bos:{j:"banyak",t:"Choose ALL the reasons why a blood bank needs group O donors more than other groups.",p:["Group O blood can be given to a patient of any group in an emergency","In an emergency there is no time to determine the patient's blood group","Group O patients themselves can only receive O blood","Group O blood lasts longer in storage than other groups","Group O blood contains more haemoglobin than other groups"],b:[0,1,2],u:"Storage time and haemoglobin content do not differ by blood group."}},

{n:5, tempat:"Xylem & Phloem", sk:"3.4 / 3.5 Evaluating transport in plants", lampiran:"transpirasi",
 kadNama:"Transpiration", kadEm:"\u{1F4A7}", kadFakta:"A big tree can lose more than three hundred litres of water a day through transpiration on a hot day.",
 bosKadNama:"Guttation", bosKadEm:"\u{1F343}", bosKadFakta:"Water droplets at the tips of grass leaves in the morning are often guttation, not dew.",
 soalan:[
 {j:"pilih",t:"A student concludes that wind is the most important factor in all conditions because Set A recorded the biggest rise. Evaluate the conclusion.",p:["Not strong yet, because the fan strength, temperature and humidity chosen are not equivalent","Strong, because 21 is the highest reading in the table","Strong, because wind always has a bigger effect than temperature","Not strong yet, because humidity does not affect transpiration at all"],b:0,u:"If the fan were slowed down or the temperature raised further, the order might change. Set C shows that humidity has a big effect."},
 {j:"banyak",t:"Choose ALL the things kept constant in this experiment so that the comparison is fair.",p:["The size of the leafy shoot used","The measurement period of one hour","The instrument used to measure","The air temperature for Set B","The rate of transpiration for each set"],b:[0,1,2],u:"The temperature of Set B is deliberately changed, so it is the manipulated variable. The rate of transpiration is the responding variable."},
 {j:"pilih",t:"A gardener claims that spraying water on the leaves at noon reduces water loss. Evaluate the claim based on Set C.",p:["There is some basis, but the water evaporates quickly, so the effect is short","Wrong, because humid air speeds up transpiration","Correct, because water on the leaves is absorbed directly through the stomata into the xylem","Wrong, because Set C shows humidity does not change the rate"],b:0,u:"Set C shows that humid air reduces transpiration. Water on the leaves is not absorbed into the xylem; water is absorbed by the roots."},
 {j:"pilih",t:"Each set in the table was carried out once only. Evaluate the reliability of these findings.",p:["Not strong yet, because each set must be repeated to detect odd readings","Already strong, because the differences between the sets are very big","Already strong, because a potometer is a very accurate instrument","Not strong yet, because the leafy shoot must be changed for every reading"],b:0,u:"Even a big difference can come from a single error. An accurate instrument does not replace repeats, and changing shoots adds a new variable."},
 {j:"pilih",t:"A farmer wants to reduce water loss in newly transplanted seedlings. What is the most appropriate step based on the data?",p:["Provide shade and a windbreak","Water the seedling leaves more often at noon","Cut off some roots so less water is absorbed by the seedling","Add fertiliser so the seedling grows quickly and absorbs more water"],b:0,u:"The data show wind and high temperature raise transpiration the most. Cutting off roots reduces water uptake, not water loss."},
 {j:"pilih",t:"A tree has the bark cut all round the trunk until the phloem is severed but the xylem is still intact. What is the most reasonable prediction?",p:["The leaves stay fresh, but the roots slowly die","The tree dies at once because water can no longer rise to the leaves","There is no effect because the xylem fully takes over the work of the phloem","The leaves wilt at once because the products of photosynthesis cannot get out"],b:0,u:"Xylem carries water upwards, so the leaves stay fresh for a while. A severed phloem stops sugars reaching the roots, so the roots slowly die."},
 {j:"pilih",t:"A flower shop keeps cut flowers in a cold, humid room. Evaluate this practice.",p:["Reasonable, because a low temperature and humid air reduce transpiration","Not reasonable, because flowers need wind to keep absorbing water","Reasonable, because a low temperature stops photosynthesis so flowers do not wilt","Not reasonable, because humid air speeds up water loss from the leaves"],b:0,u:"Cut flowers have no roots, so reducing water loss matters most. Wilting is caused by water loss, not by photosynthesis."},
 {j:"pilih",t:"An athlete claims that his resting pulse of 48 beats a minute shows that his heart is weak. Evaluate the claim.",p:["Not accurate, because a fit heart pumps more blood with each beat","Accurate, because a normal resting pulse must be over 60 beats a minute","Accurate, because a low pulse means less oxygen reaches the muscles","Not accurate, because pulse rate is not related to the work of the heart"],b:0,u:"Like Hakim in the pulse data, athletes have a low resting pulse because each beat sends more blood."}],
 bos:{j:"pilih",t:"The school can run only ONE heart health programme this year. What is the most appropriate choice?",p:["A regular exercise programme for all students","A one-off blood pressure screening for all students","A one-day talk on the structure of the heart by a hospital specialist","Iron supplements for all students to prevent heart disease"],b:0,u:"Heart health is built from daily habits. Iron helps anaemia patients make haemoglobin, but does not prevent heart disease."}},

{n:6, tempat:"Whole Organism", sk:"3.3 / 3.5 Creating solutions",
 kadNama:"Blood Donation", kadEm:"\u{1F3E5}", kadFakta:"One unit of donated blood can be separated into three components and help three different patients.",
 bosKadNama:"Irrigation System", bosKadEm:"\u{1F331}", bosKadFakta:"Drip irrigation sends water straight to the roots and can save up to half the water compared with ordinary watering.",
 soalan:[
 {j:"pilih",t:"You design a simple irrigation system for the school garden. Which feature most decides whether it really saves water?",p:["Water goes straight to the base of the roots, in the morning or evening","Water is sprayed on the leaves because leaves absorb water through the stomata","Water is poured at noon so the hot soil cools quickly","The tank is placed as high as possible so water comes out as fast as possible"],b:0,u:"Roots absorb water, and water poured at noon mostly evaporates before it reaches the roots."},
 {j:"pilih",t:"You want to show the class that water rises through the xylem. What is the most accurate demonstration design?",p:["Put a celery stem in coloured water, then cut across the stem","Put the celery in coloured water in a dark place so the xylem can rest","Smear dye on the leaves and see whether the colour goes down to the roots","Remove all the celery leaves so the coloured water rises faster"],b:0,u:"The cross-section shows coloured dots exactly at the xylem. Without leaves, transpiration stops and water rises more slowly."},
 {j:"pilih",t:"You want to prove that your system really saves water. What is the most convincing way?",p:["Compare the water used on two similar plots, one without the system","Ask club members whether they feel water use has fallen","Compare with another school garden with a different type of soil","Measure the water used by the system in the first week only"],b:0,u:"A similar control plot in the same weather separates the effect of your system from other factors."},
 {j:"pilih",t:"Your class wants to organise a blood donation campaign. What is the most appropriate first step?",p:["Contact the National Blood Centre about donor criteria","Collect the names of all the third-year students as donor candidates","Look for group O donors only because only O blood is needed","Ask donors to fast before donating so the blood is cleaner"],b:0,u:"Third-year students are 15 years old, whereas donors must be at least 17 with written parental consent. All blood groups are needed, and donors should eat before donating."},
 {j:"pilih",t:"You design a poster for a blood donation campaign. Which message is the most accurate scientifically?",p:["One bag of blood can help three different patients","Group O is accepted by everyone, so only O donors are needed","Donating blood permanently reduces a person's blood volume","The body stops making red blood cells after a person donates"],b:0,u:"Blood is separated into red blood cells, plasma and platelets. Plasma is replaced within a day or two and red blood cells within a few weeks. Patients of other groups also need blood of their own group."},
 {j:"pilih",t:"The dripper in your system is often blocked by algae from the tank. What is the most suitable modification?",p:["Cover the tank so algae get no light","Add salt to the tank so the algae die","Enlarge the dripper hole so the water flows fast","Put the tank in a hot place so hot water kills the algae"],b:0,u:"Algae need light for photosynthesis. Salty water makes vegetable roots lose water by osmosis."},
 {j:"pilih",t:"The school's neighbour complains that water from your system overflows onto their path. What is the most appropriate approach?",p:["Discuss with the neighbour, move the dripper and add a small drain","Add more water so the soil becomes saturated and stops absorbing water","Stop the system completely and water by hand every day","Carry on as usual because water only overflows in heavy rain"],b:0,u:"Saturated soil adds to the overflow, not reduces it. A good solution fixes the cause while respecting the neighbour."},
 {j:"pilih",t:"The garden must be watered during a week-long holiday with no electricity. What is the most suitable method?",p:["A cloth wick or an upturned bottle that feeds water slowly to the roots","Water as much as possible once before the holiday starts","Cover every plant tightly with plastic so transpiration stops","Move the plants into full sun so they make water themselves"],b:0,u:"Excess water poured all at once drains out of the soil. Tight plastic traps heat, and plants do not make water for themselves."}],
 bos:{j:"buka",
  t:"Your school's vegetable garden wilts every school holiday because no one waters it for a week. Design a water transport solution that your school can really carry out.",
  arahan:"Explain how it works in terms of the transport of water in plants, the materials needed, who installs and maintains it, and how you take into account the cost and the school's situation during the holidays.",
  u:"A strong TP6 answer combines the science of transpiration and root uptake, real costs, and who will look after it."}}
];

module.exports = {
  id:"t3b3", tingkatan:3, kod:"3.0 Transportation",
  tajuk:"Blood Trail",
  subtajuk:"Science Form 3 · Chapter 3 Transportation",
  spi:SPI,
  /* PBD comments by performance level. {n} is replaced with the student's first name. */
  ulasan:{
   1:"{n} can recall the structure of the heart, the blood vessels and the components of blood and the basic terms of the transport system. The next step is to explain the function of each structure, not just name it.",
   2:"{n} understands the structural and functional differences of arteries, veins and capillaries and pulmonary and systemic circulation. More practice is needed in interpreting pulse rate data before moving on to TP3.",
   3:"{n} can apply knowledge of the transport system to explain everyday phenomena such as the rise in pulse rate after exercise and wilting plants. Encourage reading tables and linking variables.",
   4:"{n} is able to analyse blood group compatibility and clinical readings to identify the cause of a problem. Next, practise weighing evidence to make decisions.",
   5:"{n} can evaluate the validity of a transpiration experiment and make sound decisions about heart health and blood donation, supported by evidence from data. Ready for a creative task.",
   6:"{n} successfully created a practical water transport solution for the school garden, complete with consideration of cost and who will look after it. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Transportation. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ ruangjantung:R_RUANG, salurdarah:R_SALUR, nadi:T_NADI, darah:T_DARAH, transpirasi:T_TRANSPIRASI },
  aras:ARAS
};
