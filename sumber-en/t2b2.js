/* English source (DLP) — Science KSSM Form 2, Chapter 2.0 Ecosystem.
   Translation of sumber/t2b2.js.
   Run `node bina.js --en t2b2` to check it and generate bank-en-t2b2.js.
   Structure must match sumber/t2b2.js exactly. Correct answer at index 0. */

const SPI = [
"Recall knowledge and skills about ecosystems.",
"Understand ecosystems and be able to explain this understanding.",
"Apply knowledge of ecosystems to explain natural events or phenomena and carry out simple tasks.",
"Analyse knowledge about ecosystems in the context of solving problems about natural events or phenomena.",
"Evaluate knowledge about ecosystems in the context of problem solving and decision making to carry out a task.",
"Create using scientific knowledge and skills about ecosystems in the context of problem solving or decision making, or in carrying out activities / tasks in new situations in a creative and innovative way, taking into account the social / economic / cultural values of society."];

/* ---------- attachments ---------- */

const R_RANTAI = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Rice plant",
    "Grasshopper",
    "Frog",
    "Snake",
    "Eagle",
    "Decomposer"
  ],
  "kapsyen": "Figure 1 · A food chain in a paddy field.",
  "alt": "Vertical food chain: the rice plant is eaten by a grasshopper, the grasshopper is eaten by a frog, the frog is eaten by a snake, the snake is eaten by an eagle, and finally everything is broken down by decomposers"
};

const R_KITARAIR = {
  "jenis": "aliran",
  "mod": "kitar",
  "nod": [
    "Water in sea & lakes",
    "Water vapour rises",
    "Clouds form",
    "Rain falls"
  ],
  "kapsyen": "Figure 1 · The water cycle.",
  "alt": "Cycle diagram of four boxes: water in the sea and lakes, evaporation and transpiration, clouds form, rain falls, then back to the sea and lakes"
};

const T_SIRATAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Organism</th>'+
'<th>Eats</th></tr></thead><tbody>'+
'<tr><td>Grasshopper</td><td>Rice plant</td></tr>'+
'<tr><td>Rat</td><td>Rice plant</td></tr>'+
'<tr><td>Frog</td><td>Grasshopper</td></tr>'+
'<tr><td>Snake</td><td>Frog, rat</td></tr>'+
'<tr><td>Eagle</td><td>Snake, rat</td></tr>'+
'</tbody></table></div><p class="qnote">A food web in a paddy field. Bacteria and fungi break down dead organisms.</p>';

const T_BURUNG =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Year</th>'+
'<th class="n">Pairs of barn owls</th><th class="n">Estimated rats per hectare</th><th class="n">Oil palm yield (tonnes per hectare)</th></tr></thead><tbody>'+
'<tr><td>2020</td><td class="n">0</td><td class="n">300</td><td class="n">18</td></tr>'+
'<tr><td>2021</td><td class="n">10</td><td class="n">220</td><td class="n">19</td></tr>'+
'<tr><td>2022</td><td class="n">25</td><td class="n">120</td><td class="n">21</td></tr>'+
'<tr><td>2023</td><td class="n">30</td><td class="n">90</td><td class="n">22</td></tr>'+
'</tbody></table></div><p class="qnote">An oil palm plantation installed nesting boxes for barn owls from 2021 and stopped using rat poison. Fictional data.</p>';

const T_KAWAL =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Method</th>'+
'<th>Starting cost</th><th>Time to work</th><th>Side effects</th></tr></thead><tbody>'+
'<tr><td>Chemical insecticide</td><td>Low</td><td>Immediate, must be repeated</td><td>Kills useful insects, pollutes water</td></tr>'+
'<tr><td>Releasing natural predators</td><td>Moderate</td><td>A few months</td><td>Almost none if local species</td></tr>'+
'<tr><td>Planting flowers that attract predatory insects on the bunds</td><td>Low</td><td>One season</td><td>Increases biodiversity</td></tr>'+
'</tbody></table></div><p class="qnote">Options for controlling pests in a paddy field area.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Paddy Field", sk:"2.1 / 2.3 Components of an ecosystem", lampiran:"rantai",
 kadNama:"Decomposer", kadEm:"\u{1F344}", kadFakta:"Without decomposing bacteria and fungi, leaves and carcasses would pile up and nutrients would not return to the soil.",
 bosKadNama:"Ecosystem", bosKadEm:"\u{1F30F}", bosKadFakta:"An ecosystem consists of a community of organisms and its physical environment such as soil, water and air.",
 soalan:[
 {j:"pilih",t:"Organisms that make their own food through photosynthesis are called:",p:["Producers","Primary consumers","Decomposers","Carnivores"],b:0,u:"Green plants are producers."},
 {j:"pilih",t:"Based on Figure 1, the grasshopper that eats rice leaves is a:",p:["Primary consumer","Producer","Secondary carnivore","Decomposer"],b:0,u:"A primary consumer is a herbivore that eats producers."},
 {j:"pilih",t:"An example of a decomposer is:",p:["Fungus","Grass","Frog","Eagle"],b:0,u:"Bacteria and fungi break down organic matter."},
 {j:"pilih",t:"A group of organisms of the same species in one habitat is called a:",p:["Population","Community","Ecosystem","Biosphere"],b:0,u:"A community consists of several different populations."},
 {j:"pilih",t:"The relationship between bees and flowers is:",p:["Mutualism","Parasitism","Commensalism","Competition"],b:0,u:"The bee gets nectar, the flower is pollinated."},
 {j:"pilih",t:"A louse that sucks blood from a human head shows the relationship of:",p:["Parasitism","Mutualism","Commensalism","Predator-prey"],b:0,u:"The louse benefits, the human is harmed."},
 {j:"pilih",t:"The process by which plants release water vapour into the air in the water cycle is:",p:["Transpiration","Condensation","Precipitation","Respiration"],b:0,u:"Transpiration takes place through the stomata on leaves."},
 {j:"banyak",t:"Choose ALL the examples of competition.",p:["Trees in a forest fighting for light","Two cats fighting for food","Weeds and rice fighting for nutrients","A bee sucking nectar from a flower","A bird eating a caterpillar"],b:[0,1,2],u:"Bees and flowers show mutualism; a bird and a caterpillar show predator-prey."}],
 bos:{j:"pilih",t:"A bird's-nest fern grows on the branch of a big tree to get light without harming the tree. This relationship is:",p:["Commensalism","Parasitism","Mutualism","Competition"],b:0,u:"One party benefits, the other is not affected."}},

{n:2, tempat:"Forest Edge", sk:"2.1 / 2.2 / 2.3 Energy flow, cycles and interactions", lampiran:"kitarair",
 kadNama:"Food Chain", kadEm:"\u{1F517}", kadFakta:"Only about 10% of energy is passed from one level to the next in a food chain.",
 bosKadNama:"Carbon Cycle", bosKadEm:"\u{267B}", bosKadFakta:"Carbon moves between the air, plants, animals and soil through photosynthesis, respiration, decomposition and combustion.",
 soalan:[
 {j:"pilih",t:"Why do food chains rarely have more than five levels?",p:["Energy decreases at each level","The last predator does not need to eat","Plants can be eaten only once","Decomposers eat all the predators"],b:0,u:"Most of the energy is used for living or lost as heat."},
 {j:"pilih",t:"In the food chain rice plant → rat → snake → eagle, the eagle is a:",p:["Tertiary consumer","Primary consumer","Producer","Decomposer"],b:0,u:"The rat is a primary consumer, the snake is a secondary consumer, and the eagle that eats the snake is a tertiary consumer."},
 {j:"pilih",t:"What is the role of decomposers in the nutrient cycle?",p:["Returning nutrients to the soil","Producing oxygen for animals","Eating all living animals","Absorbing sunlight"],b:0,u:"The nutrients are then absorbed again by plants."},
 {j:"pilih",t:"Based on Figure 1, how does deforestation disturb the water cycle?",p:["Less transpiration, so less rain","More trees absorb rainwater into their roots","Rain no longer falls on the ground in the area","All the rivers become deeper and cleaner"],b:0,u:"The soil also erodes more easily and water flows quickly into rivers."},
 {j:"pilih",t:"How does burning fossil fuels disturb the carbon cycle?",p:["Adds carbon dioxide to the air","Adds the number of trees in the forest","Reduces the decay of carcasses","Changes oxygen into nitrogen"],b:0,u:"Carbon stored for millions of years is released quickly."},
 {j:"pilih",t:"A camel has long, thick eyelashes. This adaptation helps it to:",p:["Protect its eyes from sand","Store water in its body","See clearly at night","Frighten predators"],b:0,u:"Sandstorms are common in the desert."},
 {j:"pilih",t:"A polar bear has a thick layer of fat. This adaptation helps it to:",p:["Stay warm in the tundra","Swim faster in the sea","Store water for droughts","Attract mates"],b:0,u:"Fat is a good heat insulator."},
 {j:"pilih",t:"Barn owls are used in oil palm plantations to control rats. This is an example of:",p:["Biological control","Chemical control","Competition","Commensalism"],b:0,u:"Natural predators are used to control pests."}],
 bos:{j:"banyak",t:"Choose ALL the factors that can reduce the size of a population.",p:["Disease","An increase in predators","A long drought","More food","A larger habitat"],b:[0,1,2],u:"More food and a larger habitat usually increase the size of a population."}},

{n:3, tempat:"Farmer's Hut", sk:"2.1 Interpreting a food web", lampiran:"siratan",
 kadNama:"Food Web", kadEm:"\u{1F578}", kadFakta:"A food web consists of several food chains that are linked in one ecosystem.",
 bosKadNama:"Eagle", bosKadEm:"\u{1F985}", bosKadFakta:"Eagles are at the highest level of the food web and have no natural predators when adult.",
 soalan:[
 {j:"pilih",t:"Based on the table, the producer in this food web is:",p:["Rice plant","Grasshopper","Rat","Frog"],b:0,u:"The rice plant makes food through photosynthesis."},
 {j:"nombor",t:"How many food chains are there in this web?",b:3,tol:0.05,suf:"chains",u:"Rice plant → grasshopper → frog → snake → eagle; rice plant → rat → snake → eagle; rice plant → rat → eagle. There are 3 chains."},
 {j:"pilih",t:"Which organisms are primary consumers?",p:["Grasshopper and rat","Frog and snake","Snake and eagle","Rice plant and grasshopper"],b:0,u:"Both eat the rice plant."},
 {j:"pilih",t:"In the chain rice plant → rat → eagle, the eagle is a:",p:["Secondary consumer","Tertiary consumer","Primary consumer","Decomposer"],b:0,u:"Here the eagle eats a herbivore directly. The level of an organism depends on the chain."},
 {j:"pilih",t:"A farmer kills all the snakes. What is the earliest effect on the frog population?",p:["Increases","Decreases","Stays the same","Becomes extinct immediately"],b:0,u:"Snakes are predators of frogs."},
 {j:"pilih",t:"If all the snakes are killed, why might the rat population increase and damage the rice?",p:["Their main predator decreases","Rats eat less rice","Eagles become more numerous","Grasshoppers eat the rats"],b:0,u:"Eagles still eat rats, but the pressure of predation decreases."},
 {j:"pilih",t:"Insecticide is sprayed and kills the grasshoppers. Which organism is most directly affected?",p:["Frog","Rat","Rice plant","Eagle"],b:0,u:"The frog in this web eats only grasshoppers."},
 {j:"banyak",t:"Choose ALL the organisms that are carnivores in this web.",p:["Frog","Snake","Eagle","Rat","Grasshopper"],b:[0,1,2],u:"Rats and grasshoppers eat the rice plant, so they are herbivores."}],
 bos:{j:"pilih",t:"Why is a food web with many chains more stable?",p:["Predators have other food","All organisms eat rice","No organisms die","Decomposers are not needed"],b:0,u:"If one prey decreases, predators can still depend on other prey."}},

{n:4, tempat:"Oil Palm Plantation", sk:"2.3 Analysing changes in population", lampiran:"burung",
 kadNama:"Barn Owl", kadEm:"\u{1F989}", kadFakta:"A pair of barn owls and their young can eat thousands of rats a year.",
 bosKadNama:"Biological Control", bosKadEm:"\u{1F33E}", bosKadFakta:"Biological control uses natural predators to reduce pests without chemical poisons.",
 soalan:[
 {j:"pilih",t:"What is the relationship between the number of owls and the number of rats?",p:["Owls increase, rats decrease","Owls increase, rats increase","There is no relationship between them","Rats increase, owls decrease"],b:0,u:"Owls are predators of rats."},
 {j:"nombor",t:"What is the decrease in the number of rats per hectare from 2020 to 2023?",b:210,tol:0.5,suf:"rats",u:"300 − 90 = 210 rats per hectare."},
 {j:"pilih",t:"Why does the oil palm yield increase from 2020 to 2023?",p:["Fewer rats damage the oil palm fruit","Owls fertilise the oil palm trees","More rat poison is used","Oil palm trees are replanted every year"],b:0,u:"Rats eat oil palm fruit and damage the yield."},
 {j:"pilih",t:"Why does the number of rats not fall to zero even though the owls increase?",p:["Prey becomes hard to find","Owls do not eat rats at all","Rats become predators of owls","Rat poison is still used"],b:0,u:"When prey becomes scarce, predators find it hard to find, and the populations reach a balance."},
 {j:"pilih",t:"Why did the plantation stop using rat poison?",p:["Owls die if they eat poisoned rats","Rat poison increases the oil palm yield","Rats are not affected by poison at all","Rat poison attracts more owls"],b:0,u:"Poison moves up the food chain."},
 {j:"pilih",t:"Predict the number of owls if there are almost no rats in the plantation.",p:["Decreases","Increases quickly","Does not change at all","Doubles"],b:0,u:"The size of a predator population depends on its food supply."},
 {j:"pilih",t:"The nesting boxes were installed in 2021. What was the limiting factor before that?",p:["Nesting sites","Number of rats","Oil palm yield","Sunlight"],b:0,u:"Barn owls need suitable nesting sites to breed."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["Owls help to control rats","Fewer rats are linked to a higher oil palm yield","Biological control can replace rat poison","Owls damage oil palm trees","Rats increased after the nesting boxes were installed"],b:[0,1,2],u:"The number of rats decreased every year after 2021."}],
 bos:{j:"pilih",t:"A neighbouring plantation wants to copy this method but still wants to use rat poison. What is the most appropriate advice?",p:["Reduce the poison; it kills owls","Use more poison so it works faster","Use both without any limit","Remove the nesting boxes and use poison only"],b:0,u:"Owls that eat poisoned rats will also die."}},

{n:5, tempat:"Department of Agriculture", sk:"2.3 / 2.4 Evaluating pest control methods", lampiran:"kawal",
 kadNama:"Guppy", kadEm:"\u{1F41F}", kadFakta:"Guppies eat mosquito larvae and have been used to help control mosquitoes in drains.",
 bosKadNama:"Balance of Nature", bosKadEm:"\u{2696}", bosKadFakta:"An ecosystem is balanced when the population of each organism stays stable over a long period.",
 soalan:[
 {j:"pilih",t:"Which method works the fastest?",p:["Chemical poison","Natural predators","Flowers on the bunds","All work equally fast"],b:0,u:"Poison works immediately but must be repeated."},
 {j:"pilih",t:"Why must insecticide be sprayed again and again?",p:["The pests return, and their predators are also killed","Insecticide increases the number of pests immediately","Rice needs insecticide to grow","Insecticide attracts more predatory birds"],b:0,u:"Without predators, the surviving pests quickly breed again."},
 {j:"pilih",t:"A farmer wants a cheap long-term method that does not pollute the water. What is the most appropriate choice?",p:["Flowers on the bunds","Chemical insecticide","No control at all","Poison every day"],b:0,u:"The cost is low, it increases biodiversity and uses no poison."},
 {j:"pilih",t:"A pest attack is so severe that the rice will be destroyed within a week. What is the most appropriate decision?",p:["Controlled poison first, then biological control","Wait for natural predators to breed over several months","Plant flowers on the bunds and wait until next season","Burn the whole field to kill all the pests"],b:0,u:"An emergency needs quick action, but a long-term strategy still matters."},
 {j:"pilih",t:"Why must the predators that are released be local species?",p:["Alien species can become new pests","Local species cost more","Alien species do not eat anything","Local species breed more slowly"],b:0,u:"Alien species that are released can disturb the balance of the ecosystem."},
 {j:"pilih",t:"A farmer claims that biological control is weak because it takes months. Evaluate the claim.",p:["Half correct; it is slow but its effect lasts","Completely correct; poison is always the best choice","Wrong; biological control works in a day","Wrong; biological control takes no time at all"],b:0,u:"The advantage of biological control is its long-term effect and less pollution."},
 {j:"pilih",t:"Insecticide flows into a nearby river. What is the most likely effect on the river ecosystem?",p:["Fish and water insects die","Fish grow faster","The water becomes clearer","There is no effect on the river"],b:0,u:"Pollution spreads through the water cycle to other ecosystems."},
 {j:"pilih",t:"What is the fairest way to compare the effectiveness of the natural predator method with poison?",p:["Use plots of the same size and the same type of rice","Use a big plot for poison and a small one for predators","Test poison in the dry season, predators in the rainy season","Test each method in a different state"],b:0,u:"Only the control method should be different."}],
 bos:{j:"pilih",t:"The Department of Agriculture wants to help 200 farmers reduce their use of poison. What is the most effective action?",p:["Biological control training for farmers","Ban all poisons without other help","Give free poison to all farmers","Let farmers choose without information"],b:0,u:"Farmers need knowledge and support to change."}},

{n:6, tempat:"Ecosystem Lab", sk:"2.3 / 2.4 Creating a balanced ecosystem",
 kadNama:"Aquaponics", kadEm:"\u{1F96C}", kadFakta:"In aquaponics, fish waste becomes nutrients for vegetables, and the vegetable roots clean the water for the fish.",
 bosKadNama:"Mangrove Swamp", bosKadEm:"\u{1F334}", bosKadFakta:"Mangrove swamps are breeding grounds for fish and prawns, and protect the coast from erosion.",
 soalan:[
 {j:"pilih",t:"You design an aquaponics system for the school. The main relationship used is:",p:["Nutrient cycling in fish and plants","Competition between fish and plants","Parasitism between fish and vegetables","Predation of plants on fish"],b:0,u:"Fish waste is broken down into nutrients for the plants."},
 {j:"pilih",t:"You design a closed terrarium that can last a long time. What are the most important components?",p:["Plants, soil and decomposers","Plants only without soil","Large animals without plants","Dry sand and a very hot lamp"],b:0,u:"A small ecosystem needs producers, decomposers and light energy."},
 {j:"pilih",t:"Your area is plagued by mosquitoes. What is the most suitable biological control suggestion?",p:["Release guppies into the drains","Spray poison over the whole area every day","Cut down all the trees around the houses","Cover all the drains with cement"],b:0,u:"Guppies eat the larvae without poison."},
 {j:"pilih",t:"You design a campaign to conserve the mangrove swamp on your village coast. What is the strongest argument for fishermen?",p:["Mangroves breed fish and prawns","Mangroves are pretty for photographs","Mangroves are easily made into firewood","Mangroves block cold winds"],b:0,u:"Fishermen benefit economically and directly from healthy mangroves."},
 {j:"pilih",t:"You want to reduce canteen food waste while helping the school garden. What is the most suitable idea?",p:["Compost with worms","Throw the waste into the drain","Burn the food waste every evening","Bury the waste in plastic bags"],b:0,u:"Decomposers turn waste into fertiliser."},
 {j:"pilih",t:"The science club wants to move fish from the school pond to a new pond. What is the most important step?",p:["Prepare water plants and suitable water","Move all the fish at once with no preparation","Fill the new pond with tap water straight from the hose","Put as many fish as possible into a small pond"],b:0,u:"Fish need oxygen, food and clean water."},
 {j:"pilih",t:"You design a role-play about the role of humans in an ecosystem. Which character is most important for solving the conflict?",p:["An environment officer who negotiates","A developer who builds without consulting","A hunter who sells wildlife","A spectator who does nothing"],b:0,u:"Environmental issues are solved through cooperation between the authorities and the community."},
 {j:"pilih",t:"How would you test whether your aquaponics system is balanced?",p:["Monitor the fish and the growth of the vegetables","Ask a friend whether the system looks attractive","Weigh the empty tank before it is installed","Count the number of pipes used"],b:0,u:"Healthy fish and growing vegetables show that the nutrient cycle is working."}],
 bos:{j:"buka",
  t:"A river in your area is polluted and the number of fish is falling. Design a project to restore the river ecosystem.",
  arahan:"Describe the cause of the problem, the organisms and interactions involved (for example the food chain), the restoration steps suggested, the roles of the residents and government agencies, how success is measured, and the cost and effect on the local economy.",
  u:"A strong TP6 answer links pollution to the disruption of food chains, suggests realistic steps, and plans to measure populations or water quality."}}
];

module.exports = {
  id:"t2b2", tingkatan:2, kod:"2.0 Ecosystem",
  tajuk:"Ecosystem Trail",
  subtajuk:"Science Form 2 · Chapter 2 Ecosystem",
  spi:SPI,
  ulasan:{
   1:"{n} can recall producers, consumers, decomposers and the types of interactions between organisms. The next step is to explain the flow of energy in a food chain.",
   2:"{n} understands energy flow, nutrient cycles and the adaptations of organisms and can explain them. More practice is needed in interpreting food webs.",
   3:"{n} can interpret a food web and predict the effects of changes in population. Encourage explaining the reason for each prediction.",
   4:"{n} is able to analyse predator and prey population data to explain biological control. Next, practise evaluating pest control methods.",
   5:"{n} can evaluate pest control methods based on cost, time and effects on the ecosystem. Ready for a creative task.",
   6:"{n} successfully created a project that maintains or restores the balance of an ecosystem in a creative and practical way. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Ecosystem. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ rantai:R_RANTAI, kitarair:R_KITARAIR, siratan:T_SIRATAN, burung:T_BURUNG, kawal:T_KAWAL },
  aras:ARAS
};
