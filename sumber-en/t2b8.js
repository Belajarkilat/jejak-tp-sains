/* English source (DLP) — Science KSSM Form 2, Chapter 8.0 Force and Motion.
   Translation of sumber/t2b8.js.
   Run `node bina.js --en t2b8` to check it and generate bank-en-t2b8.js.
   Structure must match sumber/t2b8.js exactly. Correct answer at index 0.
   g is taken as 10 N/kg. */

const SPI = [
"Recall knowledge and skills about force and motion.",
"Understand force and motion and be able to explain this understanding.",
"Apply knowledge of force and motion and be able to carry out simple tasks.",
"Analyse knowledge about force and motion in the context of solving problems about natural events or phenomena.",
"Evaluate knowledge about force and motion in the context of problem solving and decision making to carry out a task.",
"Create using scientific knowledge and skills about force and motion in the context of problem solving and decision making, or in carrying out a task in a new situation in a creative and innovative way, taking into account the social / economic / cultural values of society."];

/* ---------- attachments ---------- */

const R_BUKU = {
  "jenis": "daya",
  "mod": "objek",
  "objek": "Book",
  "daya": [
    {
      "arah": "atas",
      "label": "Normal force of table",
      "warna": "ungu"
    },
    {
      "arah": "bawah",
      "label": "Weight of book",
      "warna": "merah"
    }
  ],
  "kapsyen": "Figure 1 · Forces acting on a book at rest on a table.",
  "alt": "Force diagram: a book with an arrow for its weight pointing down and an arrow for the normal force of the table pointing up, both the same length"
};

const R_SORONG = {
  "jenis": "daya",
  "mod": "tuas",
  "fulkrum": 0.06,
  "beban": 0.45,
  "daya": 0.94,
  "kelas": 2,
  "labelBeban": "Load",
  "labelDaya": "Effort",
  "kapsyen": "Figure 1 · A wheelbarrow: the fulcrum is at the wheel, the load in the middle, the effort at the handle.",
  "alt": "Lever diagram: the fulcrum at the left end of the span, the load in the middle pressing down, and the effort applied upwards at the right end"
};

const T_TUAS =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Situation</th>'+
'<th class="n">Load (N)</th><th class="n">Distance of load from fulcrum (m)</th><th class="n">Distance of effort from fulcrum (m)</th></tr></thead><tbody>'+
'<tr><td>A: Seesaw</td><td class="n">400</td><td class="n">1.5</td><td class="n">2.0</td></tr>'+
'<tr><td>B: Wheelbarrow</td><td class="n">600</td><td class="n">0.4</td><td class="n">1.2</td></tr>'+
'<tr><td>C: Crowbar for a rock</td><td class="n">900</td><td class="n">0.2</td><td class="n">1.8</td></tr>'+
'</tbody></table></div><p class="qnote">Load &times; distance of load from fulcrum = effort &times; distance of effort from fulcrum. Ignore the weight of the lever.</p>';

const T_APUNG =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Object</th>'+
'<th class="n">Weight in air (N)</th><th class="n">Apparent weight in water (N)</th></tr></thead><tbody>'+
'<tr><td>Aluminium block</td><td class="n">5.4</td><td class="n">3.4</td></tr>'+
'<tr><td>Iron block, same size</td><td class="n">15.8</td><td class="n">13.8</td></tr>'+
'<tr><td>Stone</td><td class="n">6.0</td><td class="n">3.5</td></tr>'+
'<tr><td>Wooden block</td><td class="n">1.2</td><td class="n">0 (floats)</td></tr>'+
'</tbody></table></div><p class="qnote">Weight is measured with a spring balance. Buoyant force = weight in air &minus; apparent weight in water.</p>';

const T_TAYAR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Vehicle</th>'+
'<th class="n">Weight (N)</th><th class="n">Total area of tyre contact with the ground (m&sup2;)</th><th class="n">Hire price per day (RM)</th></tr></thead><tbody>'+
'<tr><td>Ordinary tractor</td><td class="n">30 000</td><td class="n">0.3</td><td class="n">200</td></tr>'+
'<tr><td>Wide-tyre tractor</td><td class="n">32 000</td><td class="n">0.8</td><td class="n">280</td></tr>'+
'<tr><td>Tracked machine</td><td class="n">60 000</td><td class="n">3.0</td><td class="n">500</td></tr>'+
'</tbody></table></div><p class="qnote">Pressure = force &divide; surface area. Soft paddy soil can only support a pressure of about 50 000 Pa without a machine sinking. Fictional data.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Playground", sk:"8.1 Types of force and their characteristics", lampiran:"dayabuku",
 kadNama:"Newton", kadEm:"\u{1F34E}", kadFakta:"The unit of force is named after Isaac Newton. A force of 1 N is roughly the weight of a small apple.",
 bosKadNama:"Reaction Force", bosKadEm:"\u{1F680}", bosKadFakta:"A rocket goes up because gas is pushed downwards; the gas pushes the rocket upwards with a force of the same magnitude.",
 soalan:[
 {j:"pilih",t:"What is the meaning of force?",p:["A push or a pull","The mass of an object","The volume of an object","The speed of an object"],b:0,u:"A force can change the shape, position, speed and direction of an object."},
 {j:"pilih",t:"The S.I. unit of force is the:",p:["Newton (N)","Kilogram (kg)","Joule (J)","Pascal (Pa)"],b:0,u:"Force is measured with a spring balance."},
 {j:"pilih",t:"The force that opposes motion between two surfaces is called:",p:["Friction","Gravitation","Buoyancy force","Elasticity"],b:0,u:"Friction produces heat."},
 {j:"pilih",t:"The force that pushes an object upwards when it is in water is called:",p:["Buoyant force","Normal force","Gravitational force","Frictional force"],b:0,u:"Buoyant force makes an object feel lighter in water."},
 {j:"pilih",t:"The three characteristics of a force are magnitude, direction and:",p:["Point of application","Colour","Temperature","Mass"],b:0,u:"The effect of a force depends on where it is applied."},
 {j:"nombor",t:"A student has a mass of 45 kg. What is the weight, in newtons? (g = 10 N/kg)",b:450,tol:0.5,suf:"N",u:"W = mg = 45 × 10 = 450 N."},
 {j:"pilih",t:"Based on Figure 1, a book placed on a table does not fall because:",p:["The table's force balances its weight","The book has no weight at all","Gravity does not act on a table","Friction pulls the book upwards"],b:0,u:"The weight of the book (downwards) and the normal force of the table (upwards) are equal and opposite, so the net force is zero."},
 {j:"banyak",t:"Choose ALL the examples of elastic force.",p:["A stretched spring","A stretched rubber band","A pressed trampoline","An apple falling from a tree","A boat floating on a river"],b:[0,1,2],u:"An apple falls because of gravity and a boat floats because of buoyant force."}],
 bos:{j:"pilih",t:"If you push a wall with a force of 50 N, the wall pushes you with a force of:",p:["50 N in the opposite direction","0 N because the wall does not move","100 N in the same direction","25 N in the opposite direction"],b:0,u:"Every action force has a reaction force of the same magnitude but in the opposite direction."}},

{n:2, tempat:"Car Workshop", sk:"8.2 Effects of force, levers, moments and pressure", lampiran:"tuassorong",
 kadNama:"Spanner", kadEm:"\u{1F527}", kadFakta:"A long spanner makes it easier to loosen a nut because the moment of the force increases as the distance from the pivot increases.",
 bosKadNama:"Atmospheric Pressure", bosKadEm:"\u{1F3D4}", bosKadFakta:"The atmospheric pressure at the top of Mount Kinabalu is only about 60% of the pressure at sea level.",
 soalan:[
 {j:"pilih",t:"Based on Figure 1, a wheelbarrow is a lever of:",p:["Second class","First class","Third class","Fourth class"],b:0,u:"The load is between the fulcrum (wheel) and the effort."},
 {j:"pilih",t:"Food tongs are a lever of:",p:["Third class","First class","Second class","Fourth class"],b:0,u:"The effort is between the fulcrum and the load."},
 {j:"pilih",t:"Why is it easier to open a door by pushing at the part far from the hinge?",p:["The moment of the force is larger","The door becomes lighter","Friction at the hinge disappears","Gravity pulls the door"],b:0,u:"Moment of a force = force × perpendicular distance from the pivot."},
 {j:"pilih",t:"Why does a sharp knife cut more easily?",p:["Small surface area, greater pressure","A sharp knife is heavier than a blunt knife","A sharp knife reduces the force applied","Large surface area, greater pressure"],b:0,u:"Pressure = force ÷ surface area."},
 {j:"pilih",t:"Why is a bicycle tyre harder on a hot day?",p:["Air particles move faster and collide more often","The rubber of the tyre shrinks when hot","The air in the tyre becomes colder","The number of air particles decreases"],b:0,u:"The pressure of a gas increases as the temperature rises."},
 {j:"pilih",t:"Why is the wall of a dam thicker at the bottom?",p:["Water pressure increases with depth","Water at the bottom is lighter","Stone is cheaper at the bottom","So that the dam looks nice"],b:0,u:"Water at the bottom carries the weight of the water above it."},
 {j:"pilih",t:"A drink can be sucked through a drinking straw because:",p:["Atmospheric pressure pushes the drink up","The mouth pulls the drink with a magnet","The drink is lighter than air","Gravity pushes the drink up"],b:0,u:"Sucking reduces the pressure inside the straw."},
 {j:"pilih",t:"Ears feel blocked when an aeroplane climbs high because:",p:["The air pressure outside decreases","The air pressure outside increases","The cabin temperature is too high","The engine noise is too loud"],b:0,u:"Atmospheric pressure decreases as altitude increases."}],
 bos:{j:"banyak",t:"Choose ALL the examples of first-class levers.",p:["Scissors","Seesaw","Pliers","Wheelbarrow","Tongs"],b:[0,1,2],u:"A wheelbarrow is second class, tongs are third class."}},

{n:3, tempat:"Lever Park", sk:"8.2 Solving problems of levers and moments of force", lampiran:"tuas",
 kadNama:"Archimedes", kadEm:"\u{1F30D}", kadFakta:"Archimedes is said to have declared: 'Give me a lever long enough, and I will move the world.'",
 bosKadNama:"Body Levers", bosKadEm:"\u{1F4AA}", bosKadFakta:"The human forearm acts as a third-class lever, with the elbow as the fulcrum.",
 soalan:[
 {j:"nombor",t:"What is the effort needed in situation A, in newtons?",b:300,tol:0.5,suf:"N",u:"400 × 1.5 = F × 2.0, so F = 300 N."},
 {j:"nombor",t:"What is the effort needed to lift the wheelbarrow in situation B, in newtons?",b:200,tol:0.5,suf:"N",u:"600 × 0.4 = F × 1.2, so F = 200 N."},
 {j:"nombor",t:"What is the effort needed to lever the rock in situation C, in newtons?",b:100,tol:0.5,suf:"N",u:"900 × 0.2 = F × 1.8, so F = 100 N."},
 {j:"pilih",t:"Which situation gives the greatest advantage, that is, the smallest effort compared with the load?",p:["C","A","B","All the same"],b:0,u:"C lifts 900 N with only 100 N."},
 {j:"pilih",t:"In situation B, how can the effort be reduced even more?",p:["Place the load closer to the wheel","Place the load closer to the handle","Shorten the handles of the wheelbarrow","Add more load"],b:0,u:"A smaller distance of the load from the fulcrum reduces the moment of the load."},
 {j:"nombor",t:"A mechanic applies a force of 40 N to a spanner 0.25 m long. What is the moment of the force, in N m?",b:10,tol:0.05,suf:"N m",u:"Moment = 40 × 0.25 = 10 N m."},
 {j:"pilih",t:"A nut is too tight to loosen with a 0.25 m spanner. What is the most effective action?",p:["Use a longer spanner","Use a shorter spanner","Push closer to the nut","Apply glue to the nut"],b:0,u:"A longer distance gives a larger moment with the same force."},
 {j:"pilih",t:"In situation A, if a 400 N child sits 2.0 m from the fulcrum, where must a 500 N child sit to balance it?",p:["1.6 m from the fulcrum","2.5 m from the fulcrum","2.0 m from the fulcrum","1.0 m from the fulcrum"],b:0,u:"400 × 2.0 = 500 × d, so d = 1.6 m."}],
 bos:{j:"susun",t:"Arrange the levers by class, starting with FIRST class.",p:["Scissors","Bottle opener","Broom"],b:[0,1,2],u:"Scissors are first class, a bottle opener is second class, a broom is third class."}},

{n:4, tempat:"Test Pool", sk:"8.2 Analysing buoyant force", lampiran:"apung",
 kadNama:"Plimsoll Line", kadEm:"\u{1F6A2}", kadFakta:"The Plimsoll line on a ship's hull shows the safe loading limit for different types and temperatures of water.",
 bosKadNama:"Submarine", bosKadEm:"\u{1F988}", bosKadFakta:"A submarine sinks by filling its tanks with seawater and rises by pushing the water out using compressed air.",
 soalan:[
 {j:"nombor",t:"What is the buoyant force on the aluminium block, in newtons?",b:2,tol:0.05,suf:"N",u:"5.4 − 3.4 = 2.0 N."},
 {j:"nombor",t:"What is the buoyant force on the stone, in newtons?",b:2.5,tol:0.05,suf:"N",u:"6.0 − 3.5 = 2.5 N."},
 {j:"pilih",t:"The aluminium block and the iron block of the same size get the same buoyant force. Why?",p:["The volume of water displaced is the same","The masses of both blocks are the same","Both are made of metal","Buoyant force does not depend on water"],b:0,u:"Buoyant force depends on the volume of liquid displaced."},
 {j:"pilih",t:"Why does the wooden block float?",p:["The buoyant force balances its weight","Wood has no weight at all","Water pulls the wood upwards","Gravity does not act on wood"],b:0,u:"Wood is less dense than water."},
 {j:"nombor",t:"What is the buoyant force on the floating wooden block, in newtons?",b:1.2,tol:0.05,suf:"N",u:"A floating object: buoyant force = its weight = 1.2 N."},
 {j:"pilih",t:"If the aluminium block is immersed in denser seawater, its apparent weight will:",p:["Decrease","Increase","Stay at 3.4 N","Become 5.4 N"],b:0,u:"Denser seawater gives a larger buoyant force."},
 {j:"pilih",t:"A cargo ship sails from the sea into a fresh-water river. What happens?",p:["The ship sinks deeper","The ship rises higher","There is no change","The ship sinks completely"],b:0,u:"Fresh water is less dense, so more water must be displaced."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["All objects experience buoyant force in water","Objects of the same size displace the same water","An object floats when the buoyant force equals its weight","A heavy object experiences no buoyant force","The buoyant force on iron is bigger because it is heavy"],b:[0,1,2],u:"Iron and aluminium blocks of the same size get the same buoyant force, 2.0 N."}],
 bos:{j:"pilih",t:"On the hull of a ship, the Plimsoll line for fresh water is higher than the line for seawater. The reason is that:",p:["Fresh water is less dense, so the ship sinks deeper","Fresh water is denser and pushes the ship up","The ship is lighter in fresh water","Plimsoll lines are only for decoration"],b:0,u:"The weight of the ship is the same, but fresh water is less dense. The ship displaces more water, so it sinks deeper."}},

{n:5, tempat:"Paddy Field", sk:"8.2 Evaluating applications of pressure", lampiran:"tayar",
 kadNama:"Pascal", kadEm:"\u{1F4CF}", kadFakta:"The unit of pressure is the pascal (Pa). 1 Pa is a force of 1 N acting on an area of 1 m².",
 bosKadNama:"Snowshoes", bosKadEm:"\u{1F97E}", bosKadFakta:"Wide snowshoes spread out the weight of the body so that the wearer does not sink into the snow.",
 soalan:[
 {j:"nombor",t:"What is the pressure of the ordinary tractor on the ground, in pascals?",b:100000,tol:0.5,suf:"Pa",u:"30 000 ÷ 0.3 = 100 000 Pa."},
 {j:"nombor",t:"What is the pressure of the wide-tyre tractor on the ground, in pascals?",b:40000,tol:0.5,suf:"Pa",u:"32 000 ÷ 0.8 = 40 000 Pa."},
 {j:"nombor",t:"What is the pressure of the tracked machine on the ground, in pascals?",b:20000,tol:0.5,suf:"Pa",u:"60 000 ÷ 3.0 = 20 000 Pa."},
 {j:"pilih",t:"Which vehicle will sink in the paddy soil?",p:["Ordinary tractor","Wide-tyre tractor","Tracked machine","None will sink"],b:0,u:"100 000 Pa exceeds the limit of 50 000 Pa."},
 {j:"pilih",t:"The tracked machine is the heaviest but has the lowest pressure. Why?",p:["Its contact area is the largest","Its weight is ignored in paddy fields","Its tracks float on water","The soil becomes harder"],b:0,u:"Pressure depends on force and surface area."},
 {j:"pilih",t:"A farmer wants a vehicle that does not sink at the lowest hire cost. What is the most appropriate choice?",p:["Wide-tyre tractor","Ordinary tractor","Tracked machine","Hire both tractors"],b:0,u:"Its pressure is below the limit, and RM280 is cheaper than RM500."},
 {j:"pilih",t:"A worker suggests the ordinary tractor because it is the cheapest. Evaluate the suggestion.",p:["Not appropriate; it sinks and adds to the cost of work","Appropriate, because the hire price matters most","Appropriate, because the ordinary tractor is the lightest","Not appropriate, because the ordinary tractor is the heaviest"],b:0,u:"The cost of pulling out a sunken tractor and the delayed work is higher."},
 {j:"pilih",t:"In the dry season, the paddy soil can support 150 000 Pa. What is the most economical choice then?",p:["Ordinary tractor","Wide-tyre tractor","Tracked machine","No vehicle"],b:0,u:"All the pressures are below the limit, so choose the cheapest."}],
 bos:{j:"pilih",t:"A factory wants to design a new rice harvester for soft paddy fields. What is the most appropriate design priority?",p:["Large contact area so pressure is low","Small tyres so the machine is light","Added weight so the machine is stable","Narrow tyres so it is easy to drive"],b:0,u:"Low pressure stops the machine from sinking."}},

{n:6, tempat:"Design Lab", sk:"8.1 / 8.2 Creating using the concept of force",
 kadNama:"Siphon", kadEm:"\u{1F6B0}", kadFakta:"A siphon moves liquid from a high container to a low container through a tube without a pump, helped by atmospheric pressure.",
 bosKadNama:"Floating Boat", bosKadEm:"\u{1F6F6}", bosKadFakta:"A boat with a wide hull displaces more water and can carry more load.",
 soalan:[
 {j:"pilih",t:"You design a boat from aluminium foil to carry as many marbles as possible. What is the most effective shape?",p:["Wide with low walls","A solid ball","Narrow and tall","A flat sheet with no walls"],b:0,u:"A wide hull displaces more water."},
 {j:"pilih",t:"You design a device to lift gas cylinders for senior citizens. What is the most suitable principle?",p:["A lever with a long effort distance","A lever with a short effort distance","A rope with no pulley","Lifting directly with no help"],b:0,u:"A long effort distance reduces the effort needed."},
 {j:"pilih",t:"You design shoes for walking on soft sandy beaches. What is the most important feature?",p:["A wide sole","A high, thin heel","A narrow, pointed sole","Spikes under the sole"],b:0,u:"A wide sole reduces pressure."},
 {j:"pilih",t:"You want to empty an aquarium without lifting it. What is the most effective way?",p:["Use a siphon into a lower bucket","Put the bucket higher than the aquarium","Use a short drinking straw","Blow air into the aquarium"],b:0,u:"A siphon works if the outlet end is lower than the water level."},
 {j:"pilih",t:"You design a wall bookshelf that is not easily pulled off. Where should the screws be fixed?",p:["Far apart from each other","Close together in the middle of the shelf only","One screw only at the heavy end of the shelf","Under the shelf only"],b:0,u:"A bigger distance between the screws reduces the force each screw must bear."},
 {j:"pilih",t:"You design a drinking-water bottle for mountain climbers. What problem must be taken into account?",p:["The bottle expands because of low outside pressure","The water freezes instantly on reaching the summit","The bottle becomes heavier at the summit","The water boils at 150 °C at the summit"],b:0,u:"Atmospheric pressure decreases with altitude."},
 {j:"pilih",t:"You suggest a way to reduce friction on the classroom sliding door. What is the most effective suggestion?",p:["Apply grease to the track","Add sand to the track","Fit weights to the door","Push the door harder"],b:0,u:"A lubricant reduces friction between surfaces."},
 {j:"pilih",t:"How would you fairly test your aluminium foil boat design?",p:["Same size of foil and type of marbles","Use different sizes of foil for each boat","Test in seawater and tap water","Add marbles all at once without counting"],b:0,u:"Only the shape of the boat should be different."}],
 bos:{j:"buka",
  t:"Your village is often hit by floods and residents need to move belongings quickly. Design a device or a raft that uses the concepts of force, levers and buoyancy.",
  arahan:"Describe your design, the forces involved (weight, buoyant force or lever force), simple calculations such as buoyant force or load × distance = effort × distance, the materials used, how to test it safely, and the cost and suitability for the residents.",
  u:"A strong TP6 answer uses the concepts of buoyancy and levers with correct calculations, chooses suitable local materials, and plans safety tests."}}
];

module.exports = {
  id:"t2b8", tingkatan:2, kod:"8.0 Force and Motion",
  tajuk:"Force Trail",
  subtajuk:"Science Form 2 · Chapter 8 Force and Motion",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the types of force, the unit of force and the characteristics of a force. The next step is to explain the effects of force and examples of levers.",
   2:"{n} understands the effects of force, the classes of levers, moments of force and pressure and can explain them. More practice is needed in using formulae.",
   3:"{n} can solve problems of levers and moments of force using formulae. Encourage writing the unit in every step of the calculation.",
   4:"{n} is able to analyse apparent weight data to determine buoyant force and explain buoyancy. Next, practise evaluating applications of pressure.",
   5:"{n} can evaluate choices of vehicles and designs based on pressure and cost. Ready for a creative task.",
   6:"{n} successfully created a device that uses the concepts of force, levers and buoyancy in a creative and practical way. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Force and Motion. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ dayabuku:R_BUKU, tuassorong:R_SORONG, tuas:T_TUAS, apung:T_APUNG, tayar:T_TAYAR },
  aras:ARAS
};
