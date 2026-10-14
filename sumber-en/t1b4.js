/* English source (DLP) — Science KSSM Form 1, Chapter 4.0 Reproduction.
   Translation of sumber/t1b4.js.
   Run `node bina.js --en t1b4` to check it and generate bank-en-t1b4.js.
   Structure must match sumber/t1b4.js exactly. Correct answer at index 0.

   Content follows the textbook framing for 13-year-olds: contraception is
   mentioned in the context of married couples (DSKP 4.6.2) and only at the
   recall level. Analysis and evaluation questions focus on plant reproduction. */

const SPI = [
"Recall knowledge and skills about reproduction.",
"Understand reproduction and be able to explain this understanding.",
"Apply knowledge and skills about reproduction to carry out simple tasks.",
"Analyse knowledge about reproduction in the context of solving problems about natural events or phenomena.",
"Evaluate knowledge about reproduction in the context of problem solving and decision making to carry out a task.",
"Design a presentation using various media / visuals / a folio / a poster / role play / drama in a creative and innovative way, using scientific knowledge and skills about reproduction in the context of problem solving and decision making, taking into account the social / economic / cultural values of society."];

/* ---------- attachments ---------- */

const R_BIAK = {
  "jenis": "aliran",
  "mod": "siratan",
  "nod": [
    {
      "id": "s1",
      "label": "Sexual",
      "x": 0,
      "y": 0
    },
    {
      "id": "a1",
      "label": "Asexual",
      "x": 1,
      "y": 0
    },
    {
      "id": "s2",
      "label": "Two parents",
      "x": 0,
      "y": 1
    },
    {
      "id": "a2",
      "label": "One parent",
      "x": 1,
      "y": 1
    },
    {
      "id": "s3",
      "label": "Different young",
      "x": 0,
      "y": 2
    },
    {
      "id": "a3",
      "label": "Same as parent",
      "x": 1,
      "y": 2
    }
  ],
  "panah": [
    [
      "s1",
      "s2"
    ],
    [
      "s2",
      "s3"
    ],
    [
      "a1",
      "a2"
    ],
    [
      "a2",
      "a3"
    ]
  ],
  "kapsyen": "Figure 1 · Two ways in which organisms reproduce.",
  "alt": "Two side-by-side columns: sexual reproduction needs two parents and produces young that are different, asexual reproduction needs one parent and produces young that are the same as the parent"
};

const R_URI = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    {
      "label": "Mother's blood",
      "nota": "oxygen"
    },
    "Placenta",
    "Umbilical cord",
    "Foetus's blood"
  ],
  "kapsyen": "Figure 1 · The path of oxygen and nutrients from the mother to the foetus.",
  "alt": "Vertical flow diagram: the mother's blood, the placenta, the umbilical cord, then the foetus's blood"
};

const T_HAID =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Day of the cycle</th>'+
'<th>What happens</th></tr></thead><tbody>'+
'<tr><td>1 to 5</td><td>Menstruation: the lining of the uterus wall breaks down and leaves with blood</td></tr>'+
'<tr><td>6 to 13</td><td>The uterus wall is repaired and thickens again</td></tr>'+
'<tr><td>14</td><td>Ovulation: an ovum is released from the ovary</td></tr>'+
'<tr><td>15 to 28</td><td>The uterus wall stays thick and rich in blood vessels</td></tr>'+
'</tbody></table></div><p class="qnote">A normal menstrual cycle lasts 28 days. The length of the cycle differs slightly for each person.</p>';

const T_CAMBAH =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Tube</th>'+
'<th>Condition</th><th>Result after 4 days</th></tr></thead><tbody>'+
'<tr><td>A</td><td>Moist cotton wool, room temperature, light</td><td>Germinated</td></tr>'+
'<tr><td>B</td><td>Dry cotton wool, room temperature, light</td><td>Did not germinate</td></tr>'+
'<tr><td>C</td><td>Moist cotton wool, in a refrigerator (5 &deg;C), dark</td><td>Did not germinate</td></tr>'+
'<tr><td>D</td><td>Distilled water that has been boiled and covered with oil, room temperature</td><td>Did not germinate</td></tr>'+
'<tr><td>E</td><td>Moist cotton wool, room temperature, in a dark box</td><td>Germinated</td></tr>'+
'</tbody></table></div><p class="qnote">Each tube contains 10 green gram seeds. Boiled water loses its dissolved air, and the layer of oil stops air from dissolving again.</p>';

const T_KEBUN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Method</th>'+
'<th>Time until seedlings are ready to sell</th><th>Seedling same as parent?</th><th class="n">Cost per seedling (RM)</th></tr></thead><tbody>'+
'<tr><td>Seeds from cross-pollination</td><td>18 months</td><td>No, there is variation</td><td class="n">2</td></tr>'+
'<tr><td>Stem cutting (vegetative)</td><td>4 months</td><td>Yes</td><td class="n">3</td></tr>'+
'<tr><td>Tissue culture</td><td>6 months</td><td>Yes</td><td class="n">8</td></tr>'+
'</tbody></table></div><p class="qnote">Data from an orchid nursery. Tissue culture can produce thousands of seedlings from a little parent tissue. Fictional data.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Flower Garden", sk:"4.1 / 4.7 Sexual and asexual reproduction, and flowers", lampiran:"biak",
 kadNama:"Hibiscus", kadEm:"\u{1F33A}", kadFakta:"The hibiscus is the national flower of Malaysia, and each bloom has both male and female parts.",
 bosKadNama:"Hydra", bosKadEm:"\u{1F9EC}", bosKadFakta:"Hydra reproduces by budding: a small bud grows on the parent's body and breaks off to become a new individual.",
 soalan:[
 {j:"pilih",t:"Sexual reproduction involves:",p:["Male and female gametes fusing","One parent only, without gametes","One cell dividing into two","A bud growing on the parent's body"],b:0,u:"Asexual reproduction involves only one parent."},
 {j:"pilih",t:"Based on Figure 1, young that are the same as their parent are produced by:",p:["Asexual reproduction","The fusion of two gametes","Cross-pollination of flowers","Sexual reproduction of two parents"],b:0,u:"There is only one parent, so the young inherit the same characteristics."},
 {j:"pilih",t:"The part of a flower that produces pollen is the:",p:["Anther","Stigma","Ovary","Sepal"],b:0,u:"The anther is at the tip of the filament."},
 {j:"pilih",t:"The part of a flower that receives pollen is the:",p:["Stigma","Anther","Filament","Petal"],b:0,u:"The stigma is usually sticky so that pollen sticks to it."},
 {j:"pilih",t:"The function of brightly coloured petals is to:",p:["Attract insects","Produce pollen","Protect the ovary","Absorb water"],b:0,u:"Insects help to transfer pollen."},
 {j:"pilih",t:"The male reproductive organ that produces sperm is the:",p:["Testis","Ovary","Uterus","Urethra"],b:0,u:"The testis also produces male hormones."},
 {j:"pilih",t:"The female reproductive organ that produces ova is the:",p:["Ovary","Uterus","Cervix","Vagina"],b:0,u:"The ovary also produces female hormones."},
 {j:"banyak",t:"Choose ALL the examples of asexual reproduction.",p:["A cassava stem cutting grows into a new plant","Yeast forms buds","Mushrooms release spores","Fish lay eggs and the eggs are fertilised","Frogs lay eggs in the water"],b:[0,1,2],u:"Fish and frogs reproduce sexually through external fertilisation."}],
 bos:{j:"pilih",t:"The place where fertilisation takes place in the female reproductive system is the:",p:["Fallopian tube","Uterus","Ovary","Cervix"],b:0,u:"The zygote then moves to the uterus and attaches to its wall."}},

{n:2, tempat:"Mother and Child Clinic", sk:"4.2 / 4.4 / 4.5 Gametes, pregnancy and development of the foetus", lampiran:"uri",
 kadNama:"Placenta", kadEm:"\u{1F930}", kadFakta:"The mother's blood and the foetus's blood do not mix. Substances are exchanged through the placenta.",
 bosKadNama:"Breast Milk", bosKadEm:"\u{1F37C}", bosKadFakta:"Breast milk contains antibodies that help to protect the baby from infections.",
 soalan:[
 {j:"pilih",t:"A sperm has a tail. Its function is to:",p:["Swim towards the ovum","Store food","Protect the nucleus","Produce hormones"],b:0,u:"An ovum has no tail and cannot move by itself."},
 {j:"pilih",t:"The main difference between a sperm and an ovum is that:",p:["A sperm is small and moves; an ovum is large and does not move","A sperm is large and does not move, an ovum is small and has a tail","Both are the same size but different in colour","A sperm has no nucleus, an ovum has two nuclei"],b:0,u:"The ovum is larger because it contains a store of food."},
 {j:"pilih",t:"Based on Figure 1, the function of the umbilical cord is to:",p:["Connect the foetus to the placenta","Produce blood for the foetus","Filter all germs from the mother's blood","Support the weight of the uterus"],b:0,u:"The blood vessels in the umbilical cord carry substances between the foetus and the placenta."},
 {j:"pilih",t:"Why are pregnant mothers advised not to smoke?",p:["Smoke substances can reach the foetus","Cigarettes make the foetus too big to be born","Cigarette smoke only affects the mother's lungs","Cigarettes make the umbilical cord shorter"],b:0,u:"Nicotine and carbon monoxide can cause the baby to be born underweight or cause a miscarriage."},
 {j:"pilih",t:"What happens to the uterus wall if fertilisation does not take place?",p:["Its lining breaks down during menstruation","It keeps thickening for up to a year","It turns into a placenta","It produces a new ovum"],b:0,u:"A new cycle then begins."},
 {j:"pilih",t:"Why should pregnant mothers eat food rich in iron and calcium?",p:["So that the foetus's blood and bones form well","So that the foetus does not move in the uterus","So that the mother does not need to rest","So that the pregnancy period becomes shorter"],b:0,u:"Iron is needed for haemoglobin and calcium for bones and teeth."},
 {j:"pilih",t:"An advantage of breast milk over formula milk is that it:",p:["Contains antibodies","Is sweeter and thicker","Can be kept for years","Has more salt"],b:0,u:"Breast milk is also free and always at the right temperature."},
 {j:"susun",t:"Arrange the stages of development after fertilisation.",p:["Zygote","Embryo","Foetus","Baby"],b:[0,1,2,3],u:"The zygote divides to become an embryo, which develops into a foetus until birth."}],
 bos:{j:"banyak",t:"Choose ALL the physical changes that normally happen to boys during puberty.",p:["The voice becomes deeper","A moustache and beard grow","The shoulders become broader","The hips become wider","Menstruation begins"],b:[0,1,2],u:"Wider hips and menstruation are changes in girls."}},

{n:3, tempat:"Health Calendar", sk:"4.3 / 4.6 The menstrual cycle and reproductive health", lampiran:"haid",
 kadNama:"Ovulation", kadEm:"\u{1F95A}", kadFakta:"An ovum released during ovulation can be fertilised only for about one day.",
 bosKadNama:"Personal Hygiene", bosKadEm:"\u{1F9FC}", bosKadFakta:"Changing sanitary pads regularly during menstruation prevents odour and bacterial infection.",
 soalan:[
 {j:"pilih",t:"Based on the table, on which day does ovulation take place?",p:["Day 14","Day 1","Day 5","Day 28"],b:0,u:"The ovum is released in the middle of the cycle."},
 {j:"pilih",t:"The fertile period is the time when fertilisation is most likely to take place. Based on the table, the fertile period is around:",p:["Day 12 to 16","Day 1 to 5","Day 20 to 25","Day 26 to 28"],b:0,u:"The fertile period is around the day of ovulation."},
 {j:"pilih",t:"Why does the uterus wall thicken on days 6 to 13?",p:["To prepare to receive an embryo","To produce an ovum","To stop sperm from entering","To form the umbilical cord"],b:0,u:"A thick wall rich in blood vessels is suitable for the attachment of an embryo."},
 {j:"pilih",t:"A schoolgirl has a 30-day cycle. What does this mean?",p:["It is normal; the cycle is different for each person","She must have a serious and rare disease","She will never ovulate","She must stop going to school during menstruation"],b:0,u:"A cycle of about 21 to 35 days is considered normal."},
 {j:"pilih",t:"The most important hygiene practice during menstruation is to:",p:["Change sanitary pads regularly","Not bathe throughout the period","Wear the same sanitary pad all day","Avoid drinking water so as to go to the toilet less"],b:0,u:"Cleanliness prevents infection and odour."},
 {j:"pilih",t:"The method of overcoming infertility by fertilising an ovum and a sperm outside the body is called:",p:["In vitro fertilisation","Tissue culture","Cross-pollination","Budding"],b:0,u:"The embryo is then placed into the uterus."},
 {j:"pilih",t:"One cause of infertility in women is:",p:["Blocked Fallopian tubes","A deeper voice","Growth of a moustache","A high number of red blood cells"],b:0,u:"Sperm cannot meet the ovum if the Fallopian tubes are blocked."},
 {j:"pilih",t:"A method of contraception that can be practised by a married couple is:",p:["Contraceptive pills","Tissue culture","Self-pollination","Binary fission"],b:0,u:"Other methods include implants and the intrauterine contraceptive device (IUCD)."}],
 bos:{j:"pilih",t:"Your friend has severe stomach pain every time she menstruates, until she cannot go to school. What is the most appropriate advice?",p:["See a doctor for an examination","Keep quiet because it is embarrassing","Take someone else's medicine without asking","Stop eating until menstruation ends"],b:0,u:"Problems of the reproductive system need to be examined and treated quickly."}},

{n:4, tempat:"Seed Laboratory", sk:"4.7 Analysing the conditions for germination", lampiran:"cambah",
 kadNama:"Radicle", kadEm:"\u{1F331}", kadFakta:"The radicle is the first part to emerge from a germinating seed and will become the root.",
 bosKadNama:"Cotyledon", bosKadEm:"\u{1FAD8}", bosKadFakta:"The cotyledon stores food for the seedling until its first leaves can photosynthesise.",
 soalan:[
 {j:"pilih",t:"Compare tubes A and B. The condition for germination being tested is:",p:["Water","Light","Temperature","Air"],b:0,u:"The only difference between A and B is moist or dry cotton wool."},
 {j:"pilih",t:"Why did the seeds in tube D not germinate?",p:["There was no oxygen","There was no light","The temperature was too low","There was too much water"],b:0,u:"Boiled water loses its dissolved air, and the oil stops air from entering."},
 {j:"pilih",t:"Compare tubes A and E. What is the most accurate conclusion?",p:["Light is not needed for germination","Light is needed for germination","Darkness stops germination","The box stops air from reaching the seeds"],b:0,u:"Both tubes germinated even though E was in the dark."},
 {j:"pilih",t:"Tube C did not germinate. A student says this is because there was no light. Why is that argument weak?",p:["Tube E was also dark but germinated","Tube C had too much light from the refrigerator lamp","Tube C had no water at all during the experiment","The seeds in tube C were already dead before the experiment"],b:0,u:"Comparing A and E shows that light is not needed, so low temperature is the factor in C."},
 {j:"banyak",t:"Choose ALL the conditions needed for germination based on the data.",p:["Water","Oxygen","A suitable temperature","Light","Soil"],b:[0,1,2],u:"No tube used soil, and E germinated in the dark."},
 {j:"pilih",t:"Why does the cotyledon of a bean shrink as the seedling grows?",p:["The food inside it is used up","It is attacked by fungus","It turns into a root","It lacks light"],b:0,u:"The cotyledon supplies food until the leaves can photosynthesise."},
 {j:"pilih",t:"If the experiment is repeated with only 3 seeds for each tube, what is the weakness?",p:["One damaged seed can change the conclusion","The seeds will germinate too quickly","The seeds will compete for water","There is no weakness because three is enough"],b:0,u:"A larger number of seeds makes the results more reliable."},
 {j:"pilih",t:"The part of the seed that becomes the shoot is the:",p:["Plumule","Radicle","Testa","Micropyle"],b:0,u:"The radicle becomes the root, the testa protects the seed and the micropyle lets water in."}],
 bos:{j:"pilih",t:"A farmer sows corn seeds in soil flooded with water for a week. The seeds do not germinate. What is the most likely cause?",p:["Waterlogged soil lacks oxygen","The seeds received too much sunlight","The soil was too dry for corn seeds","The floodwater carried too much fertiliser"],b:0,u:"The air spaces in the soil are filled with water, so the seeds do not get oxygen."}},

{n:5, tempat:"Orchid Nursery", sk:"4.1 / 4.7 Evaluating methods of plant reproduction", lampiran:"kebun",
 kadNama:"Tissue Culture", kadEm:"\u{1F9EB}", kadFakta:"Tissue culture produces many seedlings identical to the parent in sterile containers in a laboratory.",
 bosKadNama:"Cross-Pollination", bosKadEm:"\u{1F41D}", bosKadFakta:"Many new varieties of durian and orchid are produced through cross-pollination between two different parents.",
 soalan:[
 {j:"pilih",t:"The nursery wants to sell orchids that are as beautiful as their parent as quickly as possible. Which is the most suitable method?",p:["Stem cutting","Seeds from cross-pollination","Tissue culture","Seeds from self-pollination"],b:0,u:"Stem cutting is the fastest (4 months) and the young are the same as the parent."},
 {j:"pilih",t:"The nursery receives an order for 5000 seedlings identical to the parent but has only one parent plant. Which is the most suitable method?",p:["Tissue culture","Stem cutting","Cross-pollination","Waiting for seeds to fall by themselves"],b:0,u:"Tissue culture produces thousands of seedlings from a little tissue, although the cost is higher."},
 {j:"pilih",t:"The nursery wants to create a new orchid variety with a unique colour. Which method is most suitable?",p:["Cross-pollination","Stem cutting","Tissue culture","Regeneration"],b:0,u:"Only sexual reproduction produces new variations."},
 {j:"pilih",t:"All the orchids in the nursery come from one parent through tissue culture. What is the main risk?",p:["The plants may all die at the same time from one disease","The plants will flower at different times","The plants will produce unpredictable colours","The plants will not be able to photosynthesise"],b:0,u:"Without variation, if one plant is not resistant to a disease, none of them is."},
 {j:"pilih",t:"A worker claims that tissue culture is always the best choice because the results are uniform. Evaluate the claim.",p:["Not necessarily, because its cost is the highest and there is no variation","Correct, because it is the fastest method","Correct, because it is the cheapest per seedling","Wrong, because tissue culture produces a lot of variation"],b:0,u:"Tissue culture costs RM8 per seedling and takes 6 months; stem cutting is faster and cheaper."},
 {j:"nombor",t:"What is the cost of producing 200 seedlings through tissue culture, in RM?",b:1600,tol:0.5,suf:"RM",u:"200 × RM8 = RM1600."},
 {j:"pilih",t:"A durian orchard finds that many flowers fall off without turning into fruit. Bats are the main pollinators of durian. What is the most appropriate action?",p:["Keep the nearby forest as a habitat for bats","Spray insecticide all night","Cut down all the other trees around the orchard","Install bright lights in the orchard at night"],b:0,u:"Without pollinators, pollination and fertilisation do not take place, so fruit does not form."},
 {j:"pilih",t:"A papaya farmer wants bigger fruit and disease-resistant trees. What is the most appropriate choice?",p:["Cross a large-fruited tree with a disease-resistant tree","Replant seeds from the same tree only","Cut off all the flowers so the tree is stronger","Use stem cuttings from a diseased tree"],b:0,u:"Cross-pollination combines the good features of two parents."}],
 bos:{j:"pilih",t:"A village cooperative wants to start a nursery with a small capital and sell seedlings within six months. What is the most appropriate suggestion?",p:["Start with stem cuttings, which are cheap and fast","Start straight away with an expensive tissue culture laboratory","Use only cross-pollinated seeds even though it takes 18 months","Buy all the seedlings from other nurseries to resell"],b:0,u:"Stem cuttings are cheap, fast and the young are the same as the parent."}},

{n:6, tempat:"Agriculture Fair", sk:"4.7 Designing using knowledge of reproduction",
 kadNama:"Stingless Bee", kadEm:"\u{1F41D}", kadFakta:"Stingless bees do not sting and are often kept in orchards to help pollination and produce honey.",
 bosKadNama:"Seed Bank", bosKadEm:"\u{1F3E6}", bosKadFakta:"A seed bank stores seeds in dry, cold conditions so that they stay alive for years.",
 soalan:[
 {j:"pilih",t:"You design a pollinator garden at school. Which plants are most suitable?",p:["A variety of flowers that bloom all year","Grass only so that it is easy to maintain","Plastic plants that always look nice","One kind of flower that blooms once a year"],b:0,u:"Continuous flowers supply pollen and nectar to insects."},
 {j:"pilih",t:"You want to keep rice seeds for the next season. What is the best storage condition?",p:["Dry and cool","Damp and hot","Soaked in water","In the sun"],b:0,u:"Without water, the seeds do not germinate while stored."},
 {j:"pilih",t:"You design a seedling pack for primary school pupils. What is the most important instruction?",p:["Moist but not waterlogged soil, at room temperature","Put the pack in the refrigerator to keep the seeds fresh","Seal the pack tightly with plastic so no air gets in","Put the pack in a dark cupboard without water"],b:0,u:"Seeds need water, oxygen and a suitable temperature to germinate."},
 {j:"pilih",t:"You design a nutrition poster for pregnant mothers at a village clinic. Which content is most accurate?",p:["Food rich in iron, calcium and protein","Eat for two, so double all food","Avoid all fatty foods completely","Drink strong coffee every day to have energy"],b:0,u:"A balanced diet helps the development of the foetus."},
 {j:"pilih",t:"Your greenhouse garden has no insects. What is the most practical way to make sure tomato plants bear fruit?",p:["Transfer pollen with a small brush","Add more chemical fertiliser","Water the plants more often","Install lights at night"],b:0,u:"Hand pollination replaces the work of insects."},
 {j:"pilih",t:"You suggest a way to propagate disease-resistant banana plants on a large scale for a plantation. Which is the most suitable choice?",p:["Tissue culture of a disease-resistant parent plant","Plant banana seeds bought at the market","Leaf cuttings from a diseased plant","Self-pollination between the same flowers"],b:0,u:"Tissue culture produces many seedlings identical to the disease-resistant parent."},
 {j:"pilih",t:"How would you test whether your invented fertiliser speeds up the germination of green gram seeds?",p:["A group with fertiliser and a control group without fertiliser","Sprinkle fertiliser on all the seeds and see the results","Use different types of seeds for each group","Put the fertilised group in the sun and the other in the dark"],b:0,u:"A control group without fertiliser is needed for a fair comparison."},
 {j:"pilih",t:"Your club wants to raise funds by selling seedlings. What is the most practical choice?",p:["Stem cuttings of bougainvillea, which are easy to grow","Tissue culture in the school science laboratory","Durian seeds, which take years","Seedlings bought and resold without profit"],b:0,u:"Stem cuttings are cheap, fast and easy for students to look after."}],
 bos:{j:"buka",
  t:"Your village has a falling fruit harvest because of too few pollinators. Design a community project to increase pollination and the harvest from the orchards.",
  arahan:"Describe the design of the project, the related processes of pollination and fertilisation, the plants or animals used, how success is measured, and the cost, safety and involvement of the villagers.",
  u:"A strong TP6 answer links pollination to fruit formation, chooses a suitable pollinating agent, and plans how to measure success and cost."}}
];

module.exports = {
  id:"t1b4", tingkatan:1, kod:"4.0 Reproduction",
  tajuk:"Seed Trail",
  subtajuk:"Science Form 1 · Chapter 4 Reproduction",
  spi:SPI,
  ulasan:{
   1:"{n} can recall sexual and asexual reproduction, the parts of a flower and the human reproductive organs. The next step is to explain the function of each structure.",
   2:"{n} understands gametes, fertilisation, the development of the foetus and the factors that affect it. More practice is needed in linking knowledge to real situations.",
   3:"{n} can interpret the menstrual cycle and apply knowledge of reproductive health in simple situations. Encourage using scientific terms accurately.",
   4:"{n} is able to analyse seed germination experiments and identify the conditions needed. Next, practise evaluating methods of plant reproduction.",
   5:"{n} can evaluate methods of plant reproduction based on time, cost and variation, and make sound decisions. Ready for a design task.",
   6:"{n} successfully designed a project using knowledge of pollination and reproduction in a creative and practical way. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Reproduction. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ biak:R_BIAK, uri:R_URI, haid:T_HAID, cambah:T_CAMBAH, kebun:T_KEBUN },
  aras:ARAS
};
