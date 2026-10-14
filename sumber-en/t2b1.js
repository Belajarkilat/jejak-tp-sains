/* English source (DLP) — Science KSSM Form 2, Chapter 1.0 Biodiversity.
   Translation of sumber/t2b1.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t2b1` to check it and generate bank-en-t2b1.js.
   Structure must match sumber/t2b1.js exactly. Correct answer at index 0. */

const SPI = [
"Recall the knowledge and science skills on biodiversity.",
"Understand and explain biodiversity.",
"Apply knowledge on biodiversity and able to carry out simple tasks.",
"Analyse knowledge on biodiversity in context of problem solving on events or natural phenomena.",
"Evaluate knowledge of biodiversity in context of problem solving and decision making to carry out a task.",
"Design a task using knowledge and science skills on biodiversity in a creative and innovative way in the context of problem solving and decision making or carry out a task in a new situation with regards to the social values/economy/culture of the community."];

/* ---------- attachments ---------- */

const R_VERTEBRAT = {
  "jenis": "aliran",
  "mod": "siratan",
  "nod": [
    { "id": "v", "label": "Backbone animals", "x": 1, "y": 0 },
    { "id": "m", "label": "Mammal", "x": 0, "y": 1 },
    { "id": "r", "label": "Reptile", "x": 1, "y": 1 },
    { "id": "a", "label": "Amphibian", "x": 2, "y": 1 },
    { "id": "m2", "label": "Bat", "x": 0, "y": 2 },
    { "id": "r2", "label": "Turtle", "x": 1, "y": 2 },
    { "id": "a2", "label": "Frog", "x": 2, "y": 2 }
  ],
  "panah": [
    ["v", "m"],
    ["v", "r"],
    ["v", "a"],
    ["m", "m2"],
    ["r", "r2"],
    ["a", "a2"]
  ],
  "kapsyen": "Figure 1 · Three groups of vertebrates with one example of each.",
  "alt": "Classification chart of vertebrates into mammals with a bat as an example, reptiles with a turtle as an example, and amphibians with a frog as an example"
};

const R_ANCAM = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Illegal hunting",
    "Number of species falls",
    "Food chain is broken",
    "Ecosystem loses balance"
  ],
  "kapsyen": "Figure 1 · The chain of effects of illegal hunting.",
  "alt": "Vertical flow diagram: illegal hunting causes the number of species to fall, the food chain to break, and the ecosystem to lose its balance"
};

const T_KEKUNCI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Step</th>'+
'<th>Question</th><th>Yes</th><th>No</th></tr></thead><tbody>'+
'<tr><td>1</td><td>Has a backbone?</td><td>Go to 2</td><td>Go to 4</td></tr>'+
'<tr><td>2</td><td>Has feathers?</td><td>P</td><td>Go to 3</td></tr>'+
'<tr><td>3</td><td>Feeds its young with milk?</td><td>Q</td><td>R</td></tr>'+
'<tr><td>4</td><td>Has three pairs of legs?</td><td>S</td><td>T</td></tr>'+
'</tbody></table></div><p class="qnote">A dichotomous key to identify five animals P, Q, R, S and T found during a visit to Taman Negara.</p>';

const T_SPESIES =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Area</th>'+
'<th>Type of area</th><th class="n">Bird species</th><th class="n">Tree species</th><th class="n">Average temperature (&deg;C)</th></tr></thead><tbody>'+
'<tr><td>A</td><td>Natural rainforest</td><td class="n">120</td><td class="n">210</td><td class="n">25</td></tr>'+
'<tr><td>B</td><td>Forest logged 10 years ago</td><td class="n">65</td><td class="n">90</td><td class="n">27</td></tr>'+
'<tr><td>C</td><td>Oil palm plantation</td><td class="n">18</td><td class="n">3</td><td class="n">29</td></tr>'+
'<tr><td>D</td><td>Housing area</td><td class="n">12</td><td class="n">15</td><td class="n">31</td></tr>'+
'</tbody></table></div><p class="qnote">A survey of four areas of the same size in one district. Fictional data.</p>';

const T_PULIHARA =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Option</th>'+
'<th class="n">Cost per year (RM million)</th><th>Effect on tigers</th><th>Effect on residents</th></tr></thead><tbody>'+
'<tr><td>1. Anti-poaching patrols</td><td class="n">3</td><td>Fewer snares and less hunting</td><td>Job opportunities as rangers</td></tr>'+
'<tr><td>2. Forest corridor between two forest reserves</td><td class="n">5</td><td>Larger roaming area</td><td>Some land must be acquired</td></tr>'+
'<tr><td>3. Captive breeding centre</td><td class="n">4</td><td>Numbers increase at the centre only</td><td>Tourist attraction</td></tr>'+
'<tr><td>4. Electric fence around the village</td><td class="n">1</td><td>Less conflict with humans</td><td>Livestock are safer</td></tr>'+
'</tbody></table></div><p class="qnote">Options for conserving the Malayan Tiger in a state. The Malayan Tiger is listed as critically endangered. Fictional cost data.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Taman Negara Gate", sk:"1.1 / 1.2 Biodiversity and groups of organisms", lampiran:"vertebrat",
 kadNama:"Megadiversity", kadEm:"\u{1F33F}", kadFakta:"Malaysia is one of the 12 megadiverse countries in the world.",
 bosKadNama:"Rafflesia", bosKadEm:"\u{1F33A}", bosKadFakta:"Rafflesia has the largest flower in the world and can be found in the forests of Sabah, Sarawak and Peninsular Malaysia.",
 soalan:[
 {j:"pilih",t:"Biodiversity means:",p:["The variety of living organisms","The number of people in an area","The types of rock in the Earth's crust","The weather conditions in a place"],b:0,u:"Biodiversity includes the variety of species, genes and ecosystems."},
 {j:"pilih",t:"The main feature that distinguishes mammals from other groups of animals is that they:",p:["Feed their young with milk","Lay eggs","Have scales","Breathe through gills"],b:0,u:"Mammals also have hair or fur."},
 {j:"pilih",t:"The animals that have moist skin and lay eggs in water are:",p:["Amphibians","Reptiles","Birds","Mammals"],b:0,u:"An example is the frog."},
 {j:"pilih",t:"Plants that have parallel leaf veins and fibrous roots are:",p:["Monocotyledons","Dicotyledons","Ferns","Mosses"],b:0,u:"Examples are rice, maize and grass."},
 {j:"pilih",t:"Ferns are classified as plants that are:",p:["Non-flowering","Flowering","Monocotyledons","Dicotyledons"],b:0,u:"Ferns reproduce through spores."},
 {j:"pilih",t:"Mushrooms are not classified as plants because they:",p:["Have no chlorophyll","Have no cells","Move freely","Have a backbone"],b:0,u:"Fungi get their food from organic matter."},
 {j:"pilih",t:"Based on Figure 1, a bat belongs to the group of:",p:["Mammals","Reptiles","Amphibians","Birds"],b:0,u:"The chart shows the bat under mammals because it feeds its young with milk."},
 {j:"banyak",t:"Choose ALL the importance of biodiversity to humans.",p:["Source of food","Source of medicines","Tourist attraction","Cause of flash floods","Source of haze"],b:[0,1,2],u:"Diverse forests actually help to reduce flooding."}],
 bos:{j:"pilih",t:"A species that is found naturally in only one particular area is called an _____ species.",p:["Endemic","Invasive","Extinct","Domesticated"],b:0,u:"An example is the proboscis monkey, which is endemic to Borneo."}},

{n:2, tempat:"Canopy Walkway", sk:"1.1 / 1.2 Characteristics of taxonomic groups and management of biodiversity", lampiran:"ancaman",
 kadNama:"Proboscis Monkey", kadEm:"\u{1F412}", kadFakta:"The long-nosed proboscis monkey is a species endemic to Borneo that lives in mangrove swamp forests and along rivers.",
 bosKadNama:"Dichotomous Key", bosKadEm:"\u{1F511}", bosKadFakta:"A dichotomous key identifies organisms through a series of questions, each with two possible answers.",
 soalan:[
 {j:"pilih",t:"Why are bats classified as mammals even though they can fly?",p:["They give milk and have fur","They have feathers and a beak","They lay eggs in nests in trees","They breathe with gills when young"],b:0,u:"The ability to fly is not a feature that decides the group."},
 {j:"pilih",t:"Turtles are classified as reptiles because they:",p:["Have dry scales and lay shelled eggs","Live in the sea and swim well","Breathe with gills in water","Feed their young with milk after hatching"],b:0,u:"Turtles breathe with lungs and come ashore to lay eggs."},
 {j:"pilih",t:"Why is a dichotomous key useful to scientists?",p:["It identifies organisms in an orderly way","It counts the number of organisms in a forest","It breeds endangered organisms","It changes organisms into other species"],b:0,u:"Each step removes the groups that do not match."},
 {j:"pilih",t:"Based on Figure 1, how does illegal hunting affect biodiversity?",p:["Species decline and may go extinct","New species form quickly","The forest becomes larger and lusher","There is no effect because animals breed quickly"],b:0,u:"The Malayan Tiger and the pangolin are endangered because of illegal hunting."},
 {j:"pilih",t:"Why do invasive alien species threaten local biodiversity?",p:["They outcompete local species","They help local species to breed faster","They live only in zoos and parks","They clean rivers of all rubbish"],b:0,u:"An example is the sailfin catfish, which has spread in rivers in Malaysia."},
 {j:"pilih",t:"The main purpose of a national park is to:",p:["Conserve habitats and species","Build housing areas","Open new plantations","Log timber"],b:0,u:"National parks are also used for research and eco-tourism."},
 {j:"pilih",t:"The main difference between monocotyledons and dicotyledons is the number of:",p:["Cotyledons in the seed","Coloured petals","Leaves on each branch","Roots growing from the stem"],b:0,u:"Mono = one, di = two."},
 {j:"pilih",t:"Birds and mammals are both:",p:["Warm-blooded","Egg-laying","Feathered","Scaly"],b:0,u:"The body temperature of both stays the same even when the surrounding temperature changes."}],
 bos:{j:"banyak",t:"Choose ALL the steps to conserve biodiversity.",p:["Establishing forest reserves","Enforcing wildlife protection laws","Replanting trees in neglected areas","Opening forest land for plantations","Releasing alien fish into rivers"],b:[0,1,2],u:"Clearing forests and releasing alien species threaten biodiversity."}},

{n:3, tempat:"Identification Station", sk:"1.2 Applying a dichotomous key", lampiran:"kekunci",
 kadNama:"Taxonomy", kadEm:"\u{1F4DA}", kadFakta:"Taxonomy is the science of naming and classifying organisms. Each species has a unique scientific name.",
 bosKadNama:"Insect", bosKadEm:"\u{1F41E}", bosKadFakta:"Insects are the largest group of animals in the world, with more than a million species that have been named.",
 soalan:[
 {j:"pilih",t:"Based on the key, animal P is most likely a:",p:["Hornbill","Tiger","Python","Butterfly"],b:0,u:"P has a backbone and feathers."},
 {j:"pilih",t:"Animal Q is most likely a:",p:["Elephant","Peacock","Frog","Ant"],b:0,u:"Q has a backbone, no feathers, and feeds its young with milk."},
 {j:"pilih",t:"Animal R has a backbone, no feathers and does not feed its young with milk. R may be a:",p:["Monitor lizard","Tapir","Sparrow","Moth"],b:0,u:"Reptiles, amphibians and fish will arrive at R."},
 {j:"pilih",t:"Animal S has no backbone and has three pairs of legs. S is a(n):",p:["Insect","Spider","Worm","Snail"],b:0,u:"Spiders have four pairs of legs."},
 {j:"pilih",t:"A spider would be classified as:",p:["T","S","R","Q"],b:0,u:"A spider has no backbone and has four pairs of legs."},
 {j:"pilih",t:"This key cannot tell a frog from a fish. Which extra question is most suitable after step 3?",p:["Has fins?","Lives in water?","Is green?","Lays eggs?"],b:0,u:"Both lay eggs and can live in water, but only fish have fins."},
 {j:"pilih",t:"Why is the question 'Is it beautifully coloured?' not suitable in a dichotomous key?",p:["The answer differs according to people's opinions","The question is too short for a key","Colour does not exist in wild animals","A key can only ask about legs"],b:0,u:"Questions in a key must be based on features that can be clearly observed."},
 {j:"susun",t:"Arrange the steps taken to identify a cat using the key.",p:["Step 1: has a backbone","Step 2: no feathers","Step 3: feeds young with milk","Identified as Q"],b:[0,1,2,3],u:"A cat is a mammal."}],
 bos:{j:"pilih",t:"A student finds an animal with no backbone and eight legs. According to the key, it arrives at:",p:["T","S","Q","P"],b:0,u:"The answer 'No' at step 4 leads to T."}},

{n:4, tempat:"Forest Research Station", sk:"1.1 Analysing the effects of human activities on biodiversity", lampiran:"spesies",
 kadNama:"Tropical Rainforest", kadEm:"\u{1F333}", kadFakta:"The tropical rainforest of Malaysia is estimated to be about 130 million years old, among the oldest in the world.",
 bosKadNama:"Green Corridor", bosKadEm:"\u{1F6E4}", bosKadFakta:"Forest corridors allow animals to move between separated forests to find food and mates.",
 soalan:[
 {j:"pilih",t:"Which area has the highest biodiversity?",p:["A","B","C","D"],b:0,u:"The natural forest has 120 bird species and 210 tree species."},
 {j:"nombor",t:"What is the decrease in tree species from area A to area B?",b:120,tol:0.5,suf:"species",u:"210 − 90 = 120 species."},
 {j:"pilih",t:"Why is the number of bird species in the oil palm plantation very low?",p:["Little food and shelter","Birds do not like the colour of palm leaves","The plantation is too cold for birds","The plantation has too many types of trees"],b:0,u:"A variety of plants supports a variety of animals."},
 {j:"pilih",t:"What is the relationship between the number of tree species and the average temperature?",p:["Fewer tree species, higher temperature","Fewer tree species, lower temperature","There is no relationship","The temperature is always the same in all areas"],b:0,u:"A thick forest canopy cools the area beneath it."},
 {j:"pilih",t:"Area B still has 65 bird species. What does this mean?",p:["A forest can partly recover if left alone","Logging does not affect birds at all","A logged forest is better than a natural forest","Birds live only in logged forests"],b:0,u:"Recovery takes decades and seldom returns completely."},
 {j:"pilih",t:"Housing area D has 15 tree species but only 12 bird species. What is the most reasonable explanation?",p:["Ornamental trees offer little food for birds","Birds are afraid of the colour of houses","Birds do not need trees to live","The high temperature adds bird species"],b:0,u:"Ornamental trees that do not bear fruit or flowers support wildlife less."},
 {j:"pilih",t:"This survey was carried out on one day only. The main weakness is that:",p:["Migratory birds may be missed","Trees will move on other days","The average temperature cannot be measured","Area A will disappear the next day"],b:0,u:"Repeated surveys in different seasons give a more accurate picture."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["Logging reduces the number of species","A single-crop plantation has low biodiversity","Areas with fewer trees are hotter","The housing area has the highest biodiversity","Temperature is not related to forest cover"],b:[0,1,2],u:"Area D has the lowest number of bird species, and the temperature rises as the forest decreases."}],
 bos:{j:"pilih",t:"A developer wants to open a new plantation beside area A. What is the most appropriate suggestion based on the data?",p:["Keep a buffer zone and wildlife corridors","Clear all of area A so the plantation is bigger","Plant one kind of ornamental tree throughout the area","Take no action because birds can move away"],b:0,u:"Buffer zones and corridors reduce the loss of species."}},

{n:5, tempat:"Conservation Centre", sk:"1.1 Evaluating the management of biodiversity", lampiran:"pulihara",
 kadNama:"Malayan Tiger", kadEm:"\u{1F405}", kadFakta:"The number of Malayan Tigers in the forests is estimated to be fewer than 150, far fewer than a few decades ago.",
 bosKadNama:"Ranger", bosKadEm:"\u{1F46E}", bosKadFakta:"Forest rangers patrol to remove snares and detect poachers.",
 soalan:[
 {j:"pilih",t:"Which option is the cheapest?",p:["Electric fence","Patrols","Forest corridor","Breeding centre"],b:0,u:"RM1 million a year."},
 {j:"pilih",t:"Which option deals with the main cause of tigers being killed in the forest?",p:["Anti-poaching patrols","Electric fence around the village","Captive breeding centre","Forest corridor between forest reserves"],b:0,u:"Snares and illegal hunting kill many tigers in their natural habitat."},
 {j:"pilih",t:"Evaluate the breeding centre as the only conservation measure.",p:["Not enough; tigers need a wild habitat","Enough, because the number of tigers will increase","Enough, because it attracts more tourists","Not needed at all, because tigers are not endangered"],b:0,u:"Without habitat and protection, released tigers will face the same threats."},
 {j:"pilih",t:"The state government has only RM8 million a year. What is the most appropriate combination?",p:["Patrols and forest corridor","Breeding centre and fence","Breeding centre only","Electric fence only"],b:0,u:"RM3 million + RM5 million protects tigers in their original habitat and widens their roaming area."},
 {j:"pilih",t:"Option 2 requires some land to be acquired. What is the fairest action towards the residents?",p:["Involve the residents and give compensation","Take the land without telling the residents","Cancel all conservation efforts","Move the tigers to another country"],b:0,u:"Conservation succeeds when the local community also benefits."},
 {j:"pilih",t:"Why does an electric fence also help the tigers, not just the residents?",p:["Fewer tigers are killed in retaliation","The fence provides extra food for the tigers","Tigers like to live near electric fences","The fence warms the forest for the tigers"],b:0,u:"Human-tiger conflict often ends with the tiger being killed."},
 {j:"pilih",t:"A council member claims that tiger conservation wastes money because tigers give no benefit. Evaluate the claim.",p:["Wrong; tigers keep the forest in balance","Correct; tigers only endanger villagers","Correct; the money is better used to open new plantations","Wrong; tigers produce valuable timber"],b:0,u:"Without predators, the populations of wild boar and deer can rise and damage the forest and crops."},
 {j:"pilih",t:"What is the best way to measure the success of this programme after five years?",p:["Count tigers using camera traps","Count the number of posters printed","Ask tourists whether they saw tigers","Measure the length of fence built"],b:0,u:"Camera traps give a population estimate that can be compared from year to year."}],
 bos:{j:"pilih",t:"A company offers funds if its name is used on a forest corridor. What is the most appropriate decision?",p:["Accept if the conservation conditions are followed","Reject because companies must not be involved","Accept and allow the company to log","Accept but cancel the patrols"],b:0,u:"Private cooperation can help if the conservation goal is not sacrificed."}},

{n:6, tempat:"Eco-Innovation Lab", sk:"1.1 / 1.2 Creating using knowledge of biodiversity",
 kadNama:"Butterfly Park", kadEm:"\u{1F98B}", kadFakta:"The Rajah Brooke's Birdwing is the national butterfly of Malaysia, named after the Rajah of Sarawak.",
 bosKadNama:"Citizen Science", bosKadEm:"\u{1F4F7}", bosKadFakta:"The public can help scientists by recording wildlife observations through phone apps.",
 soalan:[
 {j:"pilih",t:"You design a small biodiversity garden at school. What is the most important feature to attract a variety of animals?",p:["A variety of local plants and a small pond","Artificial grass that is always green with no watering","One kind of imported ornamental flower that is very pretty","A concrete floor so the garden is always clean"],b:0,u:"A variety of habitats supports a variety of species."},
 {j:"pilih",t:"You design a dichotomous key app to identify trees at school. What is the most suitable first question?",p:["Are its leaves parallel-veined?","Is this tree pretty?","Is this tree expensive?","Does this tree grow fast?"],b:0,u:"A feature that can be clearly observed separates monocotyledons from dicotyledons."},
 {j:"pilih",t:"You plan a campaign against buying illegal wildlife products. What is the most effective message?",p:["Buying encourages illegal hunting","Wildlife products are very expensive in the market","Wild animals are not pretty enough to be ornaments","Only foreign tourists buy these products"],b:0,u:"Buyers' demand drives illegal hunting."},
 {j:"pilih",t:"Your village wants to earn income from the forest without destroying it. What is the most sustainable idea?",p:["Guided eco-tourism run by local residents","Selling timber on a large scale","Opening a factory in the middle of the forest","Selling wild baby birds to tourists"],b:0,u:"Eco-tourism gives an incentive to look after the forest."},
 {j:"pilih",t:"You design a bird-monitoring project at school. What is the best method of collecting data?",p:["Count birds at the same time and place","Count birds once on a sunny day only","Ask a friend how many birds they remember","Photograph only the prettiest birds"],b:0,u:"Consistent repeated observations allow comparison."},
 {j:"pilih",t:"The river in your area is full of sailfin catfish. What is the most appropriate suggestion?",p:["Catch and remove the sailfin catfish regularly","Release more alien fish to eat them","Poison the whole river so all the fish die","Leave it alone because the fish are pretty"],b:0,u:"Controlling invasive species helps local fish to recover."},
 {j:"pilih",t:"You design a poster about local medicinal plants. What is the most responsible advice?",p:["Get expert advice first","Pick all the medicinal plants from the forest","Use medicinal plants to replace all doctors' medicines","Sell seeds of medicinal plants without labels"],b:0,u:"Biodiversity is a source of medicines, but use must be safe and sustainable."},
 {j:"pilih",t:"How would you evaluate whether the school biodiversity garden is successful?",p:["Compare species counts before and after","Count the number of students who visit the garden each day","Measure only the cost of building the garden","Ask the teacher whether the garden is pretty"],b:0,u:"An increase in species shows that the garden supports biodiversity."}],
 bos:{j:"buka",
  t:"Your school has a vacant plot of land behind the building. Design a project to turn it into a biodiversity area that can be used for learning.",
  arahan:"Describe the design of the area, the local plant species chosen and why, the animals expected to be attracted, how students classify organisms there (for example with a dichotomous key), how the success of the project is measured, and the cost and community involvement.",
  u:"A strong TP6 answer chooses diverse local species, links habitat to the variety of animals, and plans realistic measurement of the number of species and cost."}}
];

module.exports = {
  id:"t2b1", tingkatan:2, kod:"1.0 Biodiversity",
  tajuk:"Rainforest Trail",
  subtajuk:"Science Form 2 · Chapter 1 Biodiversity",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the meaning of biodiversity, its importance and the features of the main groups of organisms. The next step is to explain the basis of classifying organisms.",
   2:"{n} understands the features of taxonomic groups and the effects of human activities on biodiversity. More practice is needed in using a dichotomous key.",
   3:"{n} can use a dichotomous key to identify organisms and suggest extra questions. Encourage choosing features that can be clearly observed.",
   4:"{n} is able to analyse species survey data to explain the effects of logging and agriculture on biodiversity. Next, practise evaluating conservation options.",
   5:"{n} can evaluate conservation options based on cost, effects on species and the community. Ready for a creative task.",
   6:"{n} successfully created a biodiversity project that is creative, practical and takes the community into account. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Biodiversity. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ vertebrat:R_VERTEBRAT, ancaman:R_ANCAM, kekunci:T_KEKUNCI, spesies:T_SPESIES, pulihara:T_PULIHARA },
  aras:ARAS
};
