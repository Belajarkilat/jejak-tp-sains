/* English source (DLP) — Science KSSM Form 2, Chapter 4.0 Human Health.
   Translation of sumber/t2b4.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t2b4` to check it and generate bank-en-t2b4.js.
   Structure must match sumber/t2b4.js exactly. Correct answer at index 0. */

const SPI = [
"Recall the knowledge and science skills on human health.",
"Understand and explain human health.",
"Apply knowledge on human health and able to carry out simple tasks.",
"Analyse knowledge on human health in context of problem solving on events or natural phenomena.",
"Evaluate knowledge of human health in context of problem solving and decision making to carry out a task.",
"Design a task using knowledge and science skills on human health in a creative and innovative way in the context of problem solving and decision making or carry out a task in a new situation with regards to the social values/economy/culture of the community."];

/* ---------- attachments ---------- */

const R_TAHAN = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Skin and mucus block entry",
    "White blood cells engulf germs",
    "Antibodies destroy pathogens"
  ],
  "kapsyen": "Figure 1 · The three lines of defence of the body in order.",
  "alt": "Vertical flow diagram of three lines of defence: skin and mucus block entry, white blood cells engulf germs, antibodies destroy pathogens"
};

const R_IMUN = {
  "jenis": "aliran",
  "mod": "siratan",
  "nod": [
    { "id": "a", "label": "Active immunity", "x": 0, "y": 0 },
    { "id": "p", "label": "Passive immunity", "x": 1, "y": 0 },
    { "id": "a2", "label": "Body makes antibodies", "x": 0, "y": 1 },
    { "id": "p2", "label": "Antibodies are given", "x": 1, "y": 1 },
    { "id": "a3", "label": "Long lasting", "x": 0, "y": 2 },
    { "id": "p3", "label": "Short lasting", "x": 1, "y": 2 }
  ],
  "panah": [
    ["a", "a2"],
    ["a2", "a3"],
    ["p", "p2"],
    ["p2", "p3"]
  ],
  "kapsyen": "Figure 1 · Comparison of active immunity and passive immunity.",
  "alt": "Two columns: with active immunity the body makes its own antibodies and it is long lasting, with passive immunity antibodies are given from outside and it is short lasting"
};

const T_PENYAKIT =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Disease</th>'+
'<th>Cause</th><th>How it spreads</th></tr></thead><tbody>'+
'<tr><td>Cholera</td><td>Bacteria</td><td>Contaminated water or food</td></tr>'+
'<tr><td>Tuberculosis</td><td>Bacteria</td><td>Airborne droplets when coughing</td></tr>'+
'<tr><td>Ringworm</td><td>Fungus</td><td>Skin contact or sharing towels</td></tr>'+
'<tr><td>Dengue</td><td>Virus</td><td>Bite of the Aedes mosquito</td></tr>'+
'<tr><td>Leptospirosis</td><td>Bacteria</td><td>Water contaminated with rat urine</td></tr>'+
'<tr><td>Diabetes</td><td>Lifestyle and genetics</td><td>Not infectious</td></tr>'+
'</tbody></table></div><p class="qnote">A summary of some diseases in Malaysia.</p>';

const T_ANTIBODI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Days after the first dose</th>'+
'<th class="n">0</th><th class="n">7</th><th class="n">14</th><th class="n">28</th><th class="n">60</th><th class="n">67</th><th class="n">74</th></tr></thead><tbody>'+
'<tr><td>Antibody level (units)</td><td class="n">0</td><td class="n">5</td><td class="n">20</td><td class="n">10</td><td class="n">4</td><td class="n">60</td><td class="n">90</td></tr>'+
'</tbody></table></div><p class="qnote">The second dose (booster dose) is given on day 60. The minimum protective level is 50 units. Fictional data to show the pattern of response.</p>';

const T_DENGGI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Week</th>'+
'<th class="n">New dengue cases</th><th>Action taken that week</th></tr></thead><tbody>'+
'<tr><td>1</td><td class="n">4</td><td>No action</td></tr>'+
'<tr><td>2</td><td class="n">12</td><td>Fogging once</td></tr>'+
'<tr><td>3</td><td class="n">10</td><td>No action</td></tr>'+
'<tr><td>4</td><td class="n">15</td><td>Community clean-up to search for and destroy breeding sites</td></tr>'+
'<tr><td>5</td><td class="n">9</td><td>Community clean-up continued every week</td></tr>'+
'<tr><td>6</td><td class="n">3</td><td>Community clean-up continued every week</td></tr>'+
'</tbody></table></div><p class="qnote">Dengue cases in a housing estate. The Aedes mosquito takes about 7 to 10 days to grow from egg to adult. Fictional data.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Health Clinic", sk:"4.1 / 4.2 Diseases and the body's defences", lampiran:"pertahanan",
 kadNama:"Vector", kadEm:"\u{1F99F}", kadFakta:"The female Aedes mosquito bites in the morning and evening, and can carry the dengue and Zika viruses.",
 bosKadNama:"Antibody", bosKadEm:"\u{1F6E1}", bosKadFakta:"Antibodies are proteins made by white blood cells to destroy a particular antigen.",
 soalan:[
 {j:"pilih",t:"A disease that can spread from one person to another is called a(n) _____ disease.",p:["Infectious","Non-infectious","Hereditary only","Nutritional deficiency"],b:0,u:"Infectious diseases are caused by pathogens."},
 {j:"pilih",t:"An example of a non-infectious disease is:",p:["Hypertension","Dengue","Tuberculosis","Influenza"],b:0,u:"Cancer, diabetes and cardiovascular disease are also non-infectious."},
 {j:"pilih",t:"Malaria is spread by:",p:["Anopheles mosquitoes","Aedes mosquitoes","Houseflies","Rats"],b:0,u:"Aedes mosquitoes carry dengue and Zika."},
 {j:"pilih",t:"An organism that carries a pathogen from one host to another is called a:",p:["Vector","Antibody","Antigen","Vaccine"],b:0,u:"Examples are mosquitoes and rats."},
 {j:"pilih",t:"A foreign substance that stimulates the body to produce antibodies is called a(n):",p:["Antigen","Antibiotic","Vitamin","Hormone"],b:0,u:"An example is a protein on the surface of a virus."},
 {j:"pilih",t:"Based on Figure 1, the first line of defence of the body is:",p:["Skin and mucus","White blood cells","Antibodies","Vaccine"],b:0,u:"It stops pathogens from entering the body."},
 {j:"pilih",t:"White blood cells destroy bacteria by engulfing them. This process is called:",p:["Phagocytosis","Digestion","Respiration","Immunisation"],b:0,u:"This is the second line of defence."},
 {j:"banyak",t:"Choose ALL the diseases that are spread through the air.",p:["Tuberculosis","Influenza","H1N1","Cholera","Ringworm"],b:[0,1,2],u:"Cholera spreads through contaminated water and ringworm through contact."}],
 bos:{j:"pilih",t:"A vaccine works by:",p:["Stimulating the production of antibodies","Killing all bacteria immediately","Replacing white blood cells","Increasing the number of red blood cells"],b:0,u:"A vaccine contains pathogens that are weakened, killed or only partial."}},

{n:2, tempat:"Immunisation Centre", sk:"4.1 / 4.2 Spread of diseases and immunity", lampiran:"imun",
 kadNama:"Immunisation", kadEm:"\u{1F489}", kadFakta:"Malaysia's national immunisation programme protects children from diseases such as tuberculosis, measles and whooping cough.",
 bosKadNama:"Breast Milk", bosKadEm:"\u{1F37C}", bosKadFakta:"Antibodies in breast milk give babies natural passive immunity in the early months of life.",
 soalan:[
 {j:"pilih",t:"The immunity obtained after receiving a vaccine is _____ immunity.",p:["Artificial active","Natural active","Natural passive","Artificial passive"],b:0,u:"The body makes its own antibodies after being stimulated by the vaccine."},
 {j:"pilih",t:"A person bitten by a venomous snake is given an anti-venom injection. This gives _____ immunity.",p:["Artificial passive","Artificial active","Natural active","Natural passive"],b:0,u:"Ready-made antibodies are given from outside and act immediately."},
 {j:"pilih",t:"Based on Figure 1, why is passive immunity not long lasting?",p:["The body does not make the antibodies itself","Antibodies from outside are too strong for the body","Passive immunity is given only to adults","The antibodies turn into new antigens"],b:0,u:"The antibodies that are given are gradually destroyed."},
 {j:"pilih",t:"Why should we wash our hands before eating?",p:["To remove pathogens on the hands","So that the hands are softer","So that the food tastes better","To add antibodies on the skin"],b:0,u:"Hands touch many surfaces that may be contaminated."},
 {j:"pilih",t:"Why are tuberculosis patients advised to wear a face mask?",p:["Reduce airborne germ droplets","Patients do not feel cold in the hospital ward","The medicine swallowed does not come out","Patients no longer need to take medicine"],b:0,u:"Tuberculosis spreads through airborne droplets when coughing and sneezing."},
 {j:"pilih",t:"How does water collecting in old tyres increase dengue cases?",p:["It becomes a place for Aedes mosquitoes to lay eggs","It produces dengue virus by itself","It makes mosquitoes bigger and stronger","It attracts rats that carry dengue"],b:0,u:"Aedes larvae grow in clean standing water."},
 {j:"pilih",t:"Natural active immunity is obtained when a person:",p:["Recovers from an infection","Receives a vaccine injection","Receives breast milk as a baby","Is given a snake anti-venom injection"],b:0,u:"The body makes its own antibodies while fighting an infection."},
 {j:"pilih",t:"Why can diseases such as whooping cough reappear in a community?",p:["Fewer children are immunised","Whooping cough bacteria have become extinct","Everyone has antibodies","The disease is not infectious"],b:0,u:"When many are not immunised, pathogens spread easily again."}],
 bos:{j:"banyak",t:"Choose ALL the practices that strengthen the body's immunity.",p:["Getting enough sleep","Eating local fruit and vegetables","Exercising regularly","Smoking to reduce stress","Sleeping late every night"],b:[0,1,2],u:"Smoking and lack of sleep weaken the body's defence system."}},

{n:3, tempat:"Epidemiology Room", sk:"4.1 Classifying diseases and how they spread", lampiran:"penyakit",
 kadNama:"Cholera", kadEm:"\u{1F4A7}", kadFakta:"Cholera causes severe diarrhoea. Boiling drinking water and keeping food clean prevent it.",
 bosKadNama:"Leptospirosis", bosKadEm:"\u{1F400}", bosKadFakta:"Leptospirosis can be caught when bathing in a river or in contaminated floodwater.",
 soalan:[
 {j:"pilih",t:"Based on the table, the disease caused by a fungus is:",p:["Ringworm","Cholera","Tuberculosis","Dengue"],b:0,u:"Tinea versicolor is also caused by a fungus."},
 {j:"pilih",t:"Which disease is caused by a virus?",p:["Dengue","Cholera","Tuberculosis","Ringworm"],b:0,u:"The dengue virus is carried by the Aedes mosquito."},
 {j:"pilih",t:"Which disease can NOT be prevented by covering the mouth when coughing?",p:["Leptospirosis","Tuberculosis","Influenza","H1N1"],b:0,u:"Leptospirosis spreads through contaminated water."},
 {j:"pilih",t:"After a flood, which diseases in the table most need to be watched?",p:["Cholera and leptospirosis","Diabetes and tuberculosis","Ringworm and diabetes","Dengue and diabetes"],b:0,u:"Both spread through contaminated water."},
 {j:"pilih",t:"Why can diabetes not be prevented with a vaccine?",p:["It is not caused by a pathogen","A diabetes vaccine is too expensive","Diabetes only affects senior citizens","Diabetes is spread by mosquitoes"],b:0,u:"A vaccine only protects against infection by certain pathogens."},
 {j:"pilih",t:"A hostel reports that several students have ringworm. What is the most effective step?",p:["Do not share towels and clothes","Boil all the hostel drinking water","Fog around the hostel","Give tuberculosis vaccine to all students"],b:0,u:"Ringworm spreads through contact and personal items."},
 {j:"pilih",t:"Why does boiling drinking water prevent cholera?",p:["Heat kills the bacteria in the water","Boiling adds minerals to the water","Hot water drives away mosquitoes","Boiling changes bacteria into viruses"],b:0,u:"Cholera bacteria die at a high temperature."},
 {j:"banyak",t:"Choose ALL the diseases in the table that are caused by bacteria.",p:["Cholera","Tuberculosis","Leptospirosis","Dengue","Ringworm"],b:[0,1,2],u:"Dengue is caused by a virus and ringworm by a fungus."}],
 bos:{j:"pilih",t:"A health officer can run only one campaign after a flood. Which campaign is the most appropriate based on the table?",p:["Clean water and avoid floodwater","Do not share towels at home","Cut down on sugary foods","Wear a face mask all the time"],b:0,u:"Cholera and leptospirosis are linked to contaminated floodwater."}},

{n:4, tempat:"Vaccine Lab", sk:"4.2 Analysing the response to immunisation", lampiran:"antibodi",
 kadNama:"Booster Dose", kadEm:"\u{1F4C8}", kadFakta:"A booster dose makes the body produce antibodies faster and in greater amounts than the first dose.",
 bosKadNama:"Memory Cells", bosKadEm:"\u{1F9E0}", bosKadFakta:"After immunisation, the body 'remembers' the antigen so the next response is faster.",
 soalan:[
 {j:"nombor",t:"What is the highest antibody level after the first dose, in units?",b:20,tol:0.05,suf:"units",u:"The highest level after the first dose is 20 units on day 14."},
 {j:"pilih",t:"Is the first dose alone enough to give adequate protection?",p:["No, because the antibody level does not reach 50 units","Yes, because antibodies are already made on day 7","Yes, because the antibody level never falls","No, because no antibodies are made at all"],b:0,u:"The highest level is only 20 units, below the protective level."},
 {j:"pilih",t:"What happens to the antibody level between day 14 and day 60?",p:["Falls slowly","Rises quickly","Stays the same","Becomes zero immediately"],b:0,u:"Antibodies are gradually destroyed if there is no new stimulation."},
 {j:"nombor",t:"What is the rise in antibody level in the 14 days after the booster dose, in units?",b:86,tol:0.5,suf:"units",u:"90 − 4 = 86 units."},
 {j:"pilih",t:"Compare the response after the first dose and after the booster dose.",p:["The booster dose is faster and higher","The first dose is faster and higher","Both are the same","The booster dose produces no antibodies"],b:0,u:"Within 7 days, the booster dose raises antibodies to 60 units compared with 5 units for the first dose."},
 {j:"pilih",t:"Why is the response after the booster dose faster?",p:["The body already recognises the antigen","The second vaccine contains ready-made antibodies","The second dose is given in a smaller amount","The body has lost all its white blood cells"],b:0,u:"Memory cells form after the first dose."},
 {j:"pilih",t:"On day 67, is the person protected?",p:["Yes, the antibody level is above 50 units","No, the antibody level is still below 50 units","No, antibodies have not been made","Yes, because the first dose is enough"],b:0,u:"60 units is above the protective level of 50 units."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["First dose acts slowly","Level falls without more doses","Booster dose raises protection","One dose is enough for protection","Antibodies never fall at all"],b:[0,1,2],u:"The antibody level falls from 20 to 4 units before the booster dose."}],
 bos:{j:"pilih",t:"A mother wants to skip her child's second dose because the child looks healthy. What is the most accurate advice based on the data?",p:["Go ahead with the second dose","Skip it because the child is already healthy","Wait until the child falls ill first","Give the first dose again on day 100"],b:0,u:"Without the booster dose, the antibody level does not reach the protective level."}},

{n:5, tempat:"Housing Estate", sk:"4.1 Evaluating measures to control the spread of dengue", lampiran:"denggi",
 kadNama:"Search and Destroy", kadEm:"\u{1F50D}", kadFakta:"Search-and-destroy activities remove containers that hold water so that Aedes mosquitoes have nowhere to lay eggs.",
 bosKadNama:"Wolbachia", bosKadEm:"\u{1F9EC}", bosKadFakta:"Aedes mosquitoes that carry Wolbachia bacteria are less able to spread the dengue virus.",
 soalan:[
 {j:"pilih",t:"Dengue cases fell only slightly after the fogging in week 2. What is the most reasonable reason?",p:["Fogging does not kill larvae","Fogging increases the number of Aedes mosquitoes in the area","Dengue cases are not related to mosquitoes","The fogging was too strong and killed the virus"],b:0,u:"The larvae go on growing into new adult mosquitoes."},
 {j:"pilih",t:"Why were cases still high in week 4 even though the community clean-up had started?",p:["The existing mosquitoes were still there","The clean-up increases larvae","The dengue virus spreads through water","Fogging continued every day"],b:0,u:"The effect of removing breeding sites is seen only after one mosquito life cycle."},
 {j:"nombor",t:"What is the decrease in cases from week 4 to week 6?",b:12,tol:0.5,suf:"cases",u:"15 − 3 = 12 cases."},
 {j:"pilih",t:"Evaluate the effectiveness of the search-and-destroy community clean-up based on the data.",p:["Effective if done continuously","Not effective because cases rose in week 4","As effective as fogging once","Effective in one day only"],b:0,u:"Cases fell from 15 to 3 after the clean-up continued every week."},
 {j:"pilih",t:"Residents suggest fogging every day instead of the community clean-up. Evaluate the suggestion.",p:["Not appropriate; it does not destroy breeding sites","Appropriate, because fogging kills all the larvae","Appropriate, because the data show fogging is the most effective","Not appropriate, because mosquitoes like the smell of the spray"],b:0,u:"Too much fogging also pollutes the air and kills other insects."},
 {j:"pilih",t:"Why is the data for week 3 important even though no action was taken?",p:["One round of fogging is not enough","It shows that dengue goes away by itself","It shows that the clean-up failed","It is not useful at all"],b:0,u:"Cases are almost the same as in week 2, so the effect of the fogging is small."},
 {j:"pilih",t:"The municipal council wants to repeat this success in other estates. What is the most appropriate decision?",p:["Weekly clean-ups, fogging during outbreaks","Fogging only every week","Wait until cases exceed 50 before acting","Close the housing estate completely"],b:0,u:"Preventing breeding is the main step; fogging helps during an outbreak."},
 {j:"pilih",t:"The main weakness of this data for drawing a strong conclusion is that:",p:["Other factors such as rain were not recorded","Too many weeks were recorded","Dengue cases were counted accurately","Data from one estate is too much"],b:0,u:"Rain affects the number of places where water collects."}],
 bos:{j:"pilih",t:"The school in the estate wants to contribute. What is the most effective action for students?",p:["Remove standing-water containers every week","Spray mosquito spray in classrooms every day","Close all the classroom windows all the time","Bring all the larvae to the laboratory"],b:0,u:"Students can help to destroy breeding sites regularly."}},

{n:6, tempat:"Health Campaign", sk:"4.1 / 4.2 Creating measures to prevent disease",
 kadNama:"Face Mask", kadEm:"\u{1F637}", kadFakta:"Face masks reduce the spread of airborne droplets that carry influenza viruses and other respiratory diseases.",
 bosKadNama:"Hand Washing", bosKadEm:"\u{1F9FC}", bosKadFakta:"Washing hands with soap for at least 20 seconds removes most germs.",
 soalan:[
 {j:"pilih",t:"You design a hand-washing station for the canteen. What is the most important feature?",p:["Soap and running water","A cloth towel shared by all students","A basin of water not changed all day","Water only with no soap to save money"],b:0,u:"Shared towels and water can spread germs."},
 {j:"pilih",t:"You design an immunisation campaign poster for parents. What is the most effective message?",p:["Vaccines protect children and the community","Vaccines make children taller","Vaccines need to be given only once in a lifetime","Vaccines replace the need to eat vegetables"],b:0,u:"When many are immunised, disease finds it hard to spread to those who are vulnerable."},
 {j:"pilih",t:"You design a mosquito egg trap (ovitrap) from recycled materials. Which design is most suitable?",p:["A dark container with water and a wooden paddle","A transparent container with no water in the sun","A container with poison left open","A big container with dry sand"],b:0,u:"The eggs that collect are destroyed every week before they hatch."},
 {j:"pilih",t:"Your area often floods. Which post-flood health pack is the most useful?",p:["Clean water, soap and rubber boots","Sugary drinks and snacks","Mosquito coils only","Thick clothes for winter"],b:0,u:"This helps to prevent cholera and leptospirosis."},
 {j:"pilih",t:"You design an app to remind parents about their children's immunisation. What is the most important feature?",p:["Reminders of the next dose date","Video games for children","A list of children's songs","Lots of cartoon pictures"],b:0,u:"Doses given on time make sure that protection is adequate."},
 {j:"pilih",t:"You suggest ways to reduce non-infectious diseases in the family. What is the most appropriate suggestion?",p:["Less sugar and salt, and exercise","Take a vaccine every year for diabetes","Avoid contact with people with diabetes","Take antibiotics every week"],b:0,u:"Non-infectious diseases are closely linked to lifestyle."},
 {j:"pilih",t:"Your class wants to reduce the spread of influenza. What is the most practical step?",p:["Sick students wear masks, windows are opened","Close all the windows so the class is warm","Share water bottles to save money","Tell sick students to come to school anyway"],b:0,u:"Ventilation and masks reduce airborne germ droplets."},
 {j:"pilih",t:"How would you evaluate the effectiveness of the hand-washing station at school?",p:["Compare diarrhoea cases before and after","Count the soap bought in total","Ask the principal whether the station is pretty","Measure the size of the sink installed"],b:0,u:"A reduction in disease shows the real effect."}],
 bos:{j:"buka",
  t:"The area around your school has recorded high numbers of dengue and influenza cases. Design a campaign or a device to reduce the spread of infectious diseases at school.",
  arahan:"Describe the disease targeted, its cause and how it spreads, how your design breaks the chain of infection or strengthens immunity, how its effectiveness is measured, and the cost and involvement of students, teachers and residents.",
  u:"A strong TP6 answer links how the disease spreads to the right preventive measure, uses the concept of immunity correctly, and plans realistic measurement."}}
];

module.exports = {
  id:"t2b4", tingkatan:2, kod:"4.0 Human Health",
  tajuk:"Immunity Trail",
  subtajuk:"Science Form 2 · Chapter 4 Human Health",
  spi:SPI,
  ulasan:{
   1:"{n} can recall examples of infectious and non-infectious diseases and the meaning of antigen and antibody. The next step is to explain how diseases spread.",
   2:"{n} understands how diseases spread and the types of immunity and can explain them. More practice is needed in classifying diseases by cause.",
   3:"{n} can classify diseases by cause and how they spread and suggest suitable preventive measures. Encourage linking the measure to the way the disease spreads.",
   4:"{n} is able to analyse antibody level data to explain the importance of the booster dose. Next, practise evaluating disease control measures.",
   5:"{n} can evaluate measures to control dengue based on data and make sound decisions. Ready for a creative task.",
   6:"{n} successfully created a disease prevention campaign or device that is creative and practical. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Human Health. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ pertahanan:R_TAHAN, imun:R_IMUN, penyakit:T_PENYAKIT, antibodi:T_ANTIBODI, denggi:T_DENGGI },
  aras:ARAS
};
