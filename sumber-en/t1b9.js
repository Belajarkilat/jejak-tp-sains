/* English source (DLP) — Science KSSM Form 1, Chapter 9.0 The Earth.
   Translation of sumber/t1b9.js.
   Run `node bina.js --en t1b9` to check it and generate bank-en-t1b9.js.
   Structure must match sumber/t1b9.js exactly. Correct answer at index 0. */

const SPI = [
"Recall knowledge and skills about the structure of the Earth / geohazards / Earth's resources.",
"Understand the structure of the Earth / geohazards / Earth's resources and be able to explain this understanding.",
"Apply knowledge and skills about the structure of the Earth / geohazards / Earth's resources to carry out simple tasks.",
"Analyse knowledge about the structure of the Earth / geohazards / Earth's resources in the context of solving problems about natural events or phenomena.",
"Evaluate knowledge about the structure of the Earth / geohazards / Earth's resources in the context of problem solving and decision making to carry out a task.",
"Design a presentation using various media / visuals / a folio / a poster / role play / drama in a creative and innovative way, using scientific knowledge and skills about the structure of the Earth / geohazards / Earth's resources in the context of problem solving and decision making, taking into account the social / economic / cultural values of society."];

/* ---------- attachments ---------- */

const R_BUMI = {
  "jenis": "struktur",
  "mod": "lapisan",
  "lapisan": [
    {
      "label": "Inner core",
      "tebal": 1250,
      "isi": "kuningLembut"
    },
    {
      "label": "Outer core",
      "tebal": 2200,
      "isi": "merahLembut"
    },
    {
      "label": "Mantle",
      "tebal": 2900,
      "isi": "kertas2"
    },
    {
      "label": "Crust",
      "tebal": 260,
      "isi": "hijauLembut"
    }
  ],
  "kapsyen": "Figure 1 · Cross-section of the Earth. The thickness of the crust is exaggerated so that it can be seen.",
  "alt": "Cross-section of the Earth showing four layers from the centre outwards: inner core, outer core, the mantle which is the thickest, and the crust which is the thinnest"
};

const R_BATU = {
  "jenis": "aliran",
  "mod": "kitar",
  "nod": [
    "Magma",
    "Igneous rock",
    "Sedimentary rock",
    "Metamorphic rock"
  ],
  "kapsyen": "Figure 1 · The rock cycle.",
  "alt": "Cycle diagram of four boxes: magma, igneous rock, sedimentary rock, metamorphic rock, then back to magma"
};

const T_BATU =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Sample</th>'+
'<th>Crystal size</th><th>Layered?</th><th>Fossils?</th><th>Notes</th></tr></thead><tbody>'+
'<tr><td>E</td><td>Large, clearly visible</td><td>No</td><td>No</td><td>Hard, from a mountain area</td></tr>'+
'<tr><td>F</td><td>No crystals</td><td>Yes</td><td>Yes, shells</td><td>Fizzes when dilute acid is dropped on it</td></tr>'+
'<tr><td>G</td><td>Very small</td><td>No</td><td>No</td><td>Dark, from an old lava flow</td></tr>'+
'<tr><td>H</td><td>Rearranged crystals</td><td>No</td><td>No</td><td>Shiny white, formed from limestone</td></tr>'+
'</tbody></table></div><p class="qnote">Observations of four rock samples in the school laboratory.</p>';

const T_CERUN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Slope</th>'+
'<th class="n">Steepness (&deg;)</th><th>Plant cover</th><th class="n">Annual rainfall (mm)</th><th>Landslides in 10 years</th></tr></thead><tbody>'+
'<tr><td>J</td><td class="n">15</td><td>Thick forest</td><td class="n">2500</td><td>None</td></tr>'+
'<tr><td>K</td><td class="n">40</td><td>Thick forest</td><td class="n">2500</td><td>1 time</td></tr>'+
'<tr><td>L</td><td class="n">40</td><td>Cleared, no trees</td><td class="n">2500</td><td>6 times</td></tr>'+
'<tr><td>M</td><td class="n">40</td><td>Cleared, no trees</td><td class="n">1200</td><td>2 times</td></tr>'+
'</tbody></table></div><p class="qnote">Records of four slopes in a highland district. Fictional data.</p>';

const T_AIR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Water source</th>'+
'<th class="n">Installation cost (RM thousand)</th><th>Supply in the dry season</th><th>Main risk</th></tr></thead><tbody>'+
'<tr><td>Nearby river</td><td class="n">80</td><td>Drops greatly</td><td>Polluted by farms and factories upstream</td></tr>'+
'<tr><td>Tube well to an aquifer</td><td class="n">150</td><td>Stable</td><td>Land sinks if pumped too much</td></tr>'+
'<tr><td>Rainwater harvesting tank</td><td class="n">40</td><td>Almost dry</td><td>Mosquitoes breed if not covered</td></tr>'+
'</tbody></table></div><p class="qnote">Choices of water source for a new village of 500 people. Water from all the sources must be treated before drinking. Fictional data.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Mountain Peak", sk:"9.1 / 9.2 The Earth system, the structure of the Earth and rocks", lampiran:"strukturbumi",
 kadNama:"Earth's Core", kadEm:"\u{1F30D}", kadFakta:"The temperature of the Earth's inner core is estimated to be above 5000 °C, almost as hot as the surface of the Sun.",
 bosKadNama:"Granite", bosKadEm:"\u{1FAA8}", bosKadFakta:"Many hills in Peninsular Malaysia, including the Titiwangsa Range, are made of granite rock.",
 soalan:[
 {j:"pilih",t:"The component of the Earth system that covers all the water on Earth is the:",p:["Hydrosphere","Atmosphere","Biosphere","Geosphere"],b:0,u:"The hydrosphere includes oceans, rivers, glaciers, clouds and groundwater."},
 {j:"pilih",t:"Based on Figure 1, the thinnest layer of the Earth is the:",p:["Crust","Mantle","Outer core","Inner core"],b:0,u:"The crust is the outer layer where we live."},
 {j:"pilih",t:"The thickest layer of the Earth is the:",p:["Mantle","Crust","Inner core","Outer core"],b:0,u:"The mantle is about 2900 km thick."},
 {j:"pilih",t:"The rock that forms when magma or lava cools and solidifies is:",p:["Igneous rock","Sedimentary rock","Metamorphic rock","Limestone"],b:0,u:"Examples are granite and basalt."},
 {j:"pilih",t:"The layer of the atmosphere that contains the ozone layer is the:",p:["Stratosphere","Troposphere","Mesosphere","Thermosphere"],b:0,u:"Ozone absorbs harmful ultraviolet radiation."},
 {j:"pilih",t:"The layer of the atmosphere where weather takes place is the:",p:["Troposphere","Stratosphere","Mesosphere","Thermosphere"],b:0,u:"Almost all the water vapour and clouds are in the troposphere."},
 {j:"pilih",t:"The age of the Earth is estimated to be about:",p:["4.6 billion years","4600 years","46 million years","460 billion years"],b:0,u:"This age is determined by radioactive dating of rocks and meteorites."},
 {j:"banyak",t:"Choose ALL the examples of geohazards.",p:["Earthquake","Tsunami","Landslide","Lunar eclipse","Rainbow"],b:[0,1,2],u:"Eclipses and rainbows are not disasters."}],
 bos:{j:"pilih",t:"Most fossils are found in:",p:["Sedimentary rock","Igneous rock","Metamorphic rock","Lava"],b:0,u:"Sedimentary rock forms slowly from layers of sediment that can bury the remains of organisms."}},

{n:2, tempat:"Limestone Cave", sk:"9.2 / 9.3 / 9.4 / 9.6 Earth processes, geohazards and Earth's resources", lampiran:"kitarbatu",
 kadNama:"Limestone Cave", kadEm:"\u{1F987}", kadFakta:"Limestone caves such as Niah Cave and Gua Tempurung formed when acidic rainwater dissolved limestone over thousands of years.",
 bosKadNama:"Hot Spring", bosKadEm:"\u{2668}", bosKadFakta:"The Poring hot springs in Sabah are heated by hot rocks under the ground.",
 soalan:[
 {j:"pilih",t:"Weathering and erosion are classified as:",p:["Exogenic processes","Endogenic processes","Metamorphic processes","Magma processes"],b:0,u:"Exogenic processes take place on the surface of the Earth."},
 {j:"pilih",t:"The movement of pieces of the Earth's crust is known as:",p:["Plate tectonics","Chemical weathering","Sedimentation","Mass wasting"],b:0,u:"This is an endogenic process driven by convection in the mantle."},
 {j:"pilih",t:"Based on Figure 1, how is metamorphic rock formed?",p:["Existing rock is changed by high heat and pressure","Magma cools quickly on the surface of the Earth","Layers of sand and mud are compressed at the bottom of a river","Plant remains are buried in a swamp"],b:0,u:"For example, limestone changes into marble."},
 {j:"pilih",t:"A tsunami is usually caused by:",p:["An earthquake on the seabed","Strong wind on the coast","Continuous heavy rain","The monthly high tide"],b:0,u:"An earthquake pushes a very large amount of seawater."},
 {j:"pilih",t:"Petroleum is formed from:",p:["Buried remains of marine organisms","Lava that cools on the seabed","Rainwater that seeps into rock","Limestone dissolved by acid"],b:0,u:"Heat and pressure change the remains into oil and gas."},
 {j:"pilih",t:"Why do sinkholes often occur in limestone areas?",p:["Limestone dissolves in acidic water","Limestone is the hardest rock on Earth","Limestone areas never receive rain","Limestone expands when hot"],b:0,u:"Underground cavities can suddenly collapse."},
 {j:"pilih",t:"What is an aquifer?",p:["A layer of rock that stores water","The ozone layer in the stratosphere","A shallow sandy area of water by the coast","A thick cloud that brings rain"],b:0,u:"Water from an aquifer can be pumped through a tube well."},
 {j:"pilih",t:"The economic mineral that is the ore of tin is:",p:["Cassiterite","Haematite","Bauxite","Kaolin"],b:0,u:"Haematite is an iron ore, bauxite is an aluminium ore, and kaolin is white clay."}],
 bos:{j:"banyak",t:"Choose ALL the technologies that help humans cope with geohazards.",p:["Seismographs for earthquakes","Tsunami warning systems","Slope movement sensors","Telescopes for viewing planets","Microscopes for viewing cells"],b:[0,1,2],u:"Telescopes and microscopes are not related to geohazards."}},

{n:3, tempat:"Geology Museum", sk:"9.2 / 9.5 Identifying rocks and fossils", lampiran:"batu",
 kadNama:"Marble", kadEm:"\u{1F3DB}", kadFakta:"Marble is a metamorphic rock formed from limestone. It is used for floors and statues.",
 bosKadNama:"Ammonite Fossil", bosKadEm:"\u{1F41A}", bosKadFakta:"Ammonites were marine animals with shells that died out along with the dinosaurs about 66 million years ago.",
 soalan:[
 {j:"pilih",t:"Which sample is a sedimentary rock?",p:["F","E","G","H"],b:0,u:"F is layered and contains fossils."},
 {j:"pilih",t:"Sample E has large crystals. This shows that the magma cooled:",p:["Slowly inside the Earth","Quickly on the surface of the Earth","In cold seawater","Without any heat"],b:0,u:"Crystals have time to grow when cooling is slow. E is most likely granite."},
 {j:"pilih",t:"Sample G has very small crystals and comes from lava. G is most likely:",p:["Basalt","Granite","Marble","Sandstone"],b:0,u:"Lava cools quickly on the surface, so the crystals do not have time to grow."},
 {j:"pilih",t:"Sample H is a(n) _____ rock.",p:["Metamorphic","Igneous","Sedimentary","Lava"],b:0,u:"Limestone subjected to heat and pressure becomes marble."},
 {j:"pilih",t:"Sample F fizzes when acid is dropped on it. F is most likely:",p:["Limestone","Granite","Basalt","Quartz"],b:0,u:"Limestone reacts with acid and releases carbon dioxide."},
 {j:"pilih",t:"Shell fossils like those in sample F are found at the top of a hill. What is the most reasonable conclusion?",p:["The area used to be a seabed","Someone left the shells there","The shells formed inside magma","Birds carried the shells to the top of the hill"],b:0,u:"Movements of the Earth's crust can raise a seabed to become land."},
 {j:"pilih",t:"Which sample is most durable for use as building steps in an area of acid rain?",p:["E","F","H","All are equally durable"],b:0,u:"Granite is hard and does not react with acid like limestone and marble."},
 {j:"susun",t:"Arrange the events in the formation of sample F in order.",p:["Marine organisms die and sink","Sediment buries the remains of the organisms","The layers of sediment are compressed","Sedimentary rock with fossils is formed"],b:[0,1,2,3],u:"This process takes millions of years."}],
 bos:{j:"pilih",t:"In an undisturbed sequence of sedimentary rock, which layer is the oldest?",p:["The bottom layer","The top layer","The middle layer","All are the same age"],b:0,u:"New layers settle on top of older layers."}},

{n:4, tempat:"Highland Slope", sk:"9.4 Analysing the factors of geohazards", lampiran:"cerun",
 kadNama:"Landslide", kadEm:"\u{26F0}", kadFakta:"Tree roots bind the soil on a slope and help rainwater to seep in slowly.",
 bosKadNama:"Retaining Wall", bosKadEm:"\u{1F9F1}", bosKadFakta:"Retaining walls and drainage systems help to stabilise slopes beside highways.",
 soalan:[
 {j:"pilih",t:"Compare slopes J and K. The factor tested is:",p:["Steepness","Plant cover","Annual rainfall","Type of soil"],b:0,u:"J and K differ only in steepness."},
 {j:"pilih",t:"Compare slopes K and L. What is the most accurate conclusion?",p:["Clearing trees increases the risk","Steepness does not affect landslides","Rain does not affect landslides","Forest increases the risk of landslides"],b:0,u:"L, which was cleared, had 6 landslides compared with 1 for K."},
 {j:"pilih",t:"Compare slopes L and M. The factor tested is:",p:["Annual rainfall","Steepness","Plant cover","Position of the slope"],b:0,u:"L and M are equally steep and both cleared."},
 {j:"pilih",t:"Which slope is the most at risk?",p:["L","J","K","M"],b:0,u:"L is steep, has no trees and receives heavy rain."},
 {j:"pilih",t:"Why is a slope without trees more likely to collapse?",p:["There are no roots to bind the soil","The soil becomes too dry","The soil becomes lighter","Trees attract rain to the slope"],b:0,u:"Rainwater also flows and erodes the soil faster."},
 {j:"pilih",t:"Landslides most often happen after:",p:["Prolonged heavy rain","A long dry season","Overcast weather without wind","A small forest fire"],b:0,u:"Water makes the soil heavy and slippery."},
 {j:"pilih",t:"A developer wants to build houses on slope L. Based on the data, what is the most appropriate advice?",p:["Stabilise the slope and replant trees first","Build straight away because the slope is already clear of trees","Build on slope M because there is no risk at all","Add more houses to press down the soil"],b:0,u:"Slope L has the most landslides. Slope M still had 2 landslides."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["Steep slopes have more landslides","Clearing trees increases landslides","More rain increases landslides","Thick forest removes all risk","A steepness of 15° is more dangerous than 40°"],b:[0,1,2],u:"Slope K with thick forest still had one landslide, so the risk is not removed completely."}],
 bos:{j:"pilih",t:"The early warning sign that residents at the foot of a slope should report is:",p:["New cracks in the ground and the walls of houses","Birds singing more loudly in the morning","Grass growing faster after rain","A red sky at dusk"],b:0,u:"Cracks, leaning trees and muddy water flowing from the slope are signs that the ground is moving."}},

{n:5, tempat:"New Village", sk:"9.6 Evaluating surface water and groundwater sources", lampiran:"air",
 kadNama:"Fresh Water", kadEm:"\u{1F4A7}", kadFakta:"About 97% of the water on Earth is seawater. Most fresh water is trapped in glaciers and ice.",
 bosKadNama:"Tube Well", bosKadEm:"\u{1F6B0}", bosKadFakta:"A tube well is pumped from an aquifer underground and is less affected by short droughts.",
 soalan:[
 {j:"pilih",t:"Which source is the most stable in the dry season?",p:["Tube well to an aquifer","Nearby river","Rainwater harvesting tank","All are equally stable"],b:0,u:"Groundwater is less affected by short-term weather."},
 {j:"pilih",t:"Which source is the cheapest to install?",p:["Rainwater tank","Tube well","River","All are the same"],b:0,u:"RM40 thousand, but its supply is almost dry during droughts."},
 {j:"pilih",t:"Why is river water at risk of being polluted?",p:["Substances from farms and factories upstream","River water is always flowing","The river is too close to the village","River water is saltier than seawater"],b:0,u:"Fertilisers, pesticides and factory waste can flow into the river."},
 {j:"pilih",t:"Why can pumping groundwater too much cause the land to sink?",p:["The aquifer empties and the ground above lowers","Groundwater becomes too hot","The pump pulls soil along with the water","The aquifer turns into igneous rock"],b:0,u:"Land subsidence can crack buildings and roads."},
 {j:"pilih",t:"The village head wants only one source because the budget is limited to RM100 thousand. Evaluate the best choice.",p:["The river, with water treatment","The tube well, even though it exceeds the budget","The rainwater tank alone for 500 people","Do not build any water source"],b:0,u:"The tube well exceeds the budget, and rainwater harvesting is not enough during the dry season."},
 {j:"pilih",t:"If the budget is increased, what is the most appropriate combination for a supply throughout the year?",p:["Tube well and rainwater harvesting tank","Two rainwater harvesting tanks","The river alone without treatment","Three tube wells pumped fully"],b:0,u:"The tube well is stable, and rainwater harvesting reduces over-pumping."},
 {j:"pilih",t:"How can the risk of mosquitoes in a rainwater tank be reduced?",p:["Cover the tank with fine mesh","Leave the tank open so the water is fresh","Add cooking oil to the tank","Empty the tank every day"],b:0,u:"The mesh stops mosquitoes from laying eggs in the water."},
 {j:"pilih",t:"Residents claim that tube well water is safe to drink straight away because it comes from underground. Evaluate the claim.",p:["Not necessarily; groundwater can also be polluted","Correct; the soil filters out all pollutants","Correct; groundwater is always sterile","Wrong; groundwater cannot be drunk at all"],b:0,u:"Groundwater can be polluted by septic tanks, fertilisers or landfills."}],
 bos:{j:"pilih",t:"A new factory is planned upstream of the village's river. What is the most appropriate decision by the district council?",p:["Require an environmental study and waste treatment","Approve it straight away because the factory brings jobs","Reject any development in the district","Move all the villagers to the city"],b:0,u:"Development can go ahead if the risk of pollution is properly controlled."}},

{n:6, tempat:"Disaster Preparedness Centre", sk:"9.4 / 9.6 Designing solutions for geohazards and Earth's resources",
 kadNama:"Seismograph", kadEm:"\u{1F4C8}", kadFakta:"A seismograph records ground vibrations as a wavy line. The bigger the waves, the stronger the earthquake.",
 bosKadNama:"Rare Earths", bosKadEm:"\u{1F4F1}", bosKadFakta:"Rare earth elements are used in small strong magnets for smartphones and wind turbines.",
 soalan:[
 {j:"pilih",t:"You design an earthquake preparedness poster for a school in Ranau, Sabah. What is the most important instruction during shaking?",p:["Take cover under a sturdy table","Run out using the lift","Stand beside a glass window","Go up the stairs to the upper floor"],b:0,u:"Protect your head from falling objects; avoid lifts and glass."},
 {j:"pilih",t:"You design a cheap landslide warning system for a village at the foot of a hill. Which component is most useful?",p:["Rain gauge sensor with a siren","A beautiful camera at the top of the hill","Decorative lights along the road","The village name signboard"],b:0,u:"Prolonged heavy rain is the main trigger of landslides."},
 {j:"pilih",t:"Your coastal area is at risk of tsunami. What is the most practical suggestion?",p:["Evacuation routes to high ground","Build houses right at the edge of the beach","Cut down all the mangrove trees on the coast","Wait for the sea to recede to see the fish"],b:0,u:"Mangroves help to weaken waves; the sea suddenly receding is a tsunami warning sign."},
 {j:"pilih",t:"You make a 3D model of the layers of the Earth for an exhibition. Which ratio of thickness is most accurate?",p:["The crust is very thin, the mantle is the thickest","The crust is the thickest, the core is very thin","All the layers are equally thick","The outer core is the thinnest, the crust is the thickest"],b:0,u:"The crust is only tens of kilometres, while the mantle is about 2900 km."},
 {j:"pilih",t:"Your village has a natural hot spring. What is the most sustainable economic suggestion?",p:["Guided eco-tourism","Cover the pool with concrete","Dump waste in the pool","Build a factory beside the pool"],b:0,u:"Hydrothermal features can bring in income without destroying the area."},
 {j:"pilih",t:"You want to reduce the waste of old phones that contain rare earth elements. What is the most appropriate suggestion?",p:["An old-phone recycling programme","Throw old phones in the bin","Bury old phones behind the house","Burn old phones to take the metal"],b:0,u:"Recycling reduces the need to mine new resources."},
 {j:"pilih",t:"You design an earthquake simulation in class to test model buildings. Which method is most suitable?",p:["Shake a tray of models with the same force","Push each model with a finger at a different force","Drop the models from the table to the floor","Blow on the models with a big fan"],b:0,u:"The same shaking for each model makes the comparison fair."},
 {j:"pilih",t:"How would you evaluate the effectiveness of an earthquake drill at school?",p:["Record the time students take to reach the assembly point","Count the number of posters put up","Ask students whether they like the drill","Measure the height of the school building"],b:0,u:"The recorded times can be compared between drills to see improvements."}],
 bos:{j:"buka",
  t:"A village at the foot of a hill near a river often has landslides and a shortage of clean water during droughts. Design a plan for the village using knowledge of geohazards and Earth's resources.",
  arahan:"Describe the causes of landslides and how to reduce the risk, the water source suggested with its advantages and risks, the technology or warning system used, how the effectiveness of the plan is measured, and the cost and involvement of the villagers.",
  u:"A strong TP6 answer links plant cover, steepness and rainfall to landslides, chooses a water source with consideration of risks, and plans realistically."}}
];

module.exports = {
  id:"t1b9", tingkatan:1, kod:"9.0 The Earth",
  tajuk:"Earth Trail",
  subtajuk:"Science Form 1 · Chapter 9 The Earth",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the Earth system, the layers of the Earth, the types of rocks and examples of geohazards. The next step is to explain the processes that form rocks.",
   2:"{n} understands exogenic and endogenic processes, geohazards and the formation of Earth's resources, and can explain them. More practice is needed in identifying rocks from observations.",
   3:"{n} can classify rocks based on crystals, layers and fossils and interpret the history of the Earth. Encourage giving evidence from observations.",
   4:"{n} is able to analyse slope data to identify the factors of landslides. Next, practise evaluating choices of Earth's resources.",
   5:"{n} can evaluate surface water and groundwater sources and make decisions that take cost and risk into account. Ready for a design task.",
   6:"{n} successfully designed a plan to face geohazards and manage Earth's resources in a creative and practical way. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter The Earth. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ strukturbumi:R_BUMI, kitarbatu:R_BATU, batu:T_BATU, cerun:T_CERUN, air:T_AIR },
  aras:ARAS
};
