/* English source (DLP) — Science KSSM Form 2, Chapter 7.0 Electricity and
   Magnetism. Translation of sumber/t2b7.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t2b7` to check it and generate bank-en-t2b7.js.
   Structure must match sumber/t2b7.js exactly. Correct answer at index 0. */

const SPI = [
"Recall the knowledge and science skills on electricity and magnetism.",
"Understand and explain magnetism.",
"Apply knowledge on electricity and magnetism and able to carry out simple tasks.",
"Analyse knowledge on electricity and magnetism in context of problem solving on events or natural phenomena.",
"Evaluate knowledge of electricity and magnetism in context of problem solving and decision making to carry out a task.",
"Design a task using knowledge and science skills on electricity and magnetism in a creative and innovative way in the context of problem solving and decision making or carry out a task in a new situation with regards to the social values/economy/culture of the community."];

/* ---------- attachments ---------- */

const R_OHM = {
  "jenis": "graf",
  "titik": true,
  "grid": 5,
  "yMin": 0,
  "yMaks": 7.5,
  "x": [
    0,
    0.5,
    1,
    1.5,
    2,
    2.5
  ],
  "siri": [
    {
      "label": "Voltage (V)",
      "warna": "ungu",
      "y": [
        0,
        1.5,
        3,
        4.5,
        6,
        7.5
      ]
    }
  ],
  "xLabel": "Current through the resistor (A)",
  "kapsyen": "Figure 1 · Voltage across a resistor against the current through it.",
  "alt": "Straight-line graph through the origin: voltage rises evenly from 0 to 7.5 volts as the current rises from 0 to 2.5 amperes"
};

const R_LITAR = {
  "jenis": "aliran",
  "mod": "siratan",
  "nod": [
    { "id": "s", "label": "Series circuit", "x": 0, "y": 0 },
    { "id": "p", "label": "Parallel circuit", "x": 1, "y": 0 },
    { "id": "s2", "label": "One path only", "x": 0, "y": 1 },
    { "id": "p2", "label": "Many paths", "x": 1, "y": 1 },
    { "id": "s3", "label": "One breaks, all off", "x": 0, "y": 2 },
    { "id": "p3", "label": "One breaks, others stay on", "x": 1, "y": 2 }
  ],
  "panah": [
    ["s", "s2"],
    ["s2", "s3"],
    ["p", "p2"],
    ["p2", "p3"]
  ],
  "kapsyen": "Figure 1 · Comparison of a series circuit with a parallel circuit.",
  "alt": "Two columns: a series circuit has only one path and all bulbs go off if one breaks, a parallel circuit has many paths and the other bulbs stay on"
};

const T_LITAR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Circuit</th>'+
'<th>Arrangement</th><th class="n">Battery voltage (V)</th><th class="n">Resistance of each bulb (&Omega;)</th></tr></thead><tbody>'+
'<tr><td>X</td><td>Two bulbs in series</td><td class="n">6</td><td class="n">6</td></tr>'+
'<tr><td>Y</td><td>Two bulbs in parallel</td><td class="n">6</td><td class="n">6</td></tr>'+
'</tbody></table></div><p class="qnote">Ohm\'s law: V = IR. In a series circuit, the total resistance is the sum of the resistances. In a parallel circuit, the voltage across each branch is equal to the battery voltage. Ignore the resistance of the wires and the battery.</p>';

const T_ELEKTRO =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Test</th>'+
'<th class="n">Number of turns</th><th class="n">Current (A)</th><th>Core</th><th class="n">Paper clips lifted</th></tr></thead><tbody>'+
'<tr><td>1</td><td class="n">20</td><td class="n">1</td><td>Soft iron</td><td class="n">5</td></tr>'+
'<tr><td>2</td><td class="n">40</td><td class="n">1</td><td>Soft iron</td><td class="n">11</td></tr>'+
'<tr><td>3</td><td class="n">40</td><td class="n">2</td><td>Soft iron</td><td class="n">20</td></tr>'+
'<tr><td>4</td><td class="n">40</td><td class="n">2</td><td>None (air)</td><td class="n">2</td></tr>'+
'</tbody></table></div><p class="qnote">A simple electromagnet is made from coiled insulated copper wire. Fictional data.</p>';

const T_LAMPU =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Design</th>'+
'<th>Arrangement of 60 LED bulbs</th><th>If one bulb fails</th><th class="n">Cost (RM)</th></tr></thead><tbody>'+
'<tr><td>P</td><td>All in series</td><td>All go off</td><td class="n">15</td></tr>'+
'<tr><td>Q</td><td>All in parallel</td><td>The others stay on</td><td class="n">40</td></tr>'+
'<tr><td>R</td><td>6 parallel branches, 10 bulbs in series in each branch</td><td>Only the 10 bulbs in that branch go off</td><td class="n">25</td></tr>'+
'</tbody></table></div><p class="qnote">Three designs of festive decorative lights. Fictional costs.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Electrical Control Room", sk:"7.1 / 7.3 Charge, current and magnets", lampiran:"grafohm",
 kadNama:"Lightning", kadEm:"\u{26A1}", kadFakta:"Lightning is a very large electrostatic discharge between a cloud and the Earth or between clouds.",
 bosKadNama:"Compass", bosKadEm:"\u{1F9ED}", bosKadFakta:"A compass needle is a small magnet that points north because the Earth itself acts like a big magnet.",
 soalan:[
 {j:"pilih",t:"The S.I. unit of electric current is the:",p:["Ampere (A)","Volt (V)","Ohm (Ω)","Watt (W)"],b:0,u:"Current is measured with an ammeter."},
 {j:"pilih",t:"The S.I. unit of resistance is the:",p:["Ohm (Ω)","Ampere (A)","Volt (V)","Joule (J)"],b:0,u:"Resistance opposes the flow of current."},
 {j:"pilih",t:"The device for measuring voltage is the:",p:["Voltmeter","Ammeter","Galvanometer","Thermometer"],b:0,u:"A voltmeter is connected in parallel with the component."},
 {j:"pilih",t:"Two charges of the same type will:",p:["Repel each other","Attract each other","Not react","Become neutral"],b:0,u:"Charges of different types attract each other."},
 {j:"pilih",t:"A polythene rod rubbed with a woollen cloth becomes negatively charged because:",p:["Electrons move from the cloth to the rod","Protons move from the rod to the cloth","The rod produces new electrons","The cloth absorbs all the charge"],b:0,u:"Only electrons move during friction."},
 {j:"pilih",t:"The north pole of a magnet is brought near the north pole of another magnet. What happens?",p:["Repel","Attract","No effect","Rotate"],b:0,u:"Like poles repel, unlike poles attract."},
 {j:"pilih",t:"Magnetic field lines are closest together at the:",p:["Poles of the magnet","Middle of the magnet","Far from the magnet","Side of the magnet"],b:0,u:"The magnetic field is strongest at the poles."},
 {j:"banyak",t:"Choose ALL the uses of electromagnets.",p:["Electric bell","Scrap-iron lifting crane","Electric door lock","Scout compass","Refrigerator magnet"],b:[0,1,2],u:"A compass and a refrigerator magnet use permanent magnets."}],
 bos:{j:"pilih",t:"Based on Figure 1, Ohm's law states that:",p:["V = IR","V = I + R","I = VR","R = V + I"],b:0,u:"Voltage = current × resistance."}},

{n:2, tempat:"Smart House", sk:"7.1 / 7.2 / 7.3 Electrostatics, circuits and electromagnets", lampiran:"siriselari",
 kadNama:"Faraday Cage", kadEm:"\u{1F697}", kadFakta:"A car with a metal roof protects its passengers in a thunderstorm because charge flows over the outside surface of the car.",
 bosKadNama:"Solenoid", bosKadEm:"\u{1F300}", bosKadFakta:"A solenoid is a coil of wire that produces a magnetic field like a bar magnet when current flows.",
 soalan:[
 {j:"pilih",t:"Based on Figure 1, why does house wiring use parallel circuits?",p:["Each appliance has its own switch","Less wire is needed for the whole house","All appliances go off together if one fails","The voltage of each appliance becomes lower"],b:0,u:"Each appliance also receives the full voltage."},
 {j:"pilih",t:"In a series circuit, if one bulb burns out, the other bulbs will:",p:["Go off","Shine brighter","Shine as usual","Flicker"],b:0,u:"A series circuit has only one path for the current."},
 {j:"pilih",t:"Why do clothes made of synthetic fabric 'crackle' more often in dry weather?",p:["They collect static charge easily","They conduct electricity very well","They contain fine metal wire","They absorb moisture quickly"],b:0,u:"Dry air stops the charge from leaking away."},
 {j:"pilih",t:"Why do petrol station workers advise people not to get back into the car while refuelling?",p:["Static charge can produce a spark","Petrol will become more expensive","The car will move by itself","The petrol pump will stop working"],b:0,u:"A spark can ignite petrol vapour."},
 {j:"pilih",t:"During a thunderstorm in an open field, the safest action is to:",p:["Get into a car or a building","Shelter under a tall tree","Stand in the middle of the field","Hold a tall metal umbrella"],b:0,u:"Tall objects such as trees are more likely to be struck by lightning."},
 {j:"pilih",t:"How can the strength of an electromagnet be increased?",p:["Add more turns","Use plastic wire","Reduce the current","Remove the iron core"],b:0,u:"A bigger current and a soft iron core also strengthen it."},
 {j:"pilih",t:"Why is soft iron used as the core of an electromagnet?",p:["It loses magnetism when switched off","It is the cheapest material available","It cannot be magnetised at all","It conducts electricity better than copper"],b:0,u:"An electromagnet needs to be 'switched off', for example a crane releasing scrap iron."},
 {j:"pilih",t:"In a parallel circuit, the voltage across each branch is:",p:["The same","Halved","Zero","Doubled"],b:0,u:"The current is shared between the branches."}],
 bos:{j:"banyak",t:"Choose ALL the CORRECT statements about a series circuit.",p:["The current is the same at all points","The total resistance is the sum of the resistances","There is only one path for the current","The same voltage is across each bulb even if the resistances differ","The other bulbs stay on if one burns out"],b:[0,1,2],u:"In a series circuit, the voltage is shared according to the resistance."}},

{n:3, tempat:"Circuit Lab", sk:"7.1 / 7.2 Applying Ohm's law", lampiran:"litar",
 kadNama:"Ammeter", kadEm:"\u{1F4DF}", kadFakta:"An ammeter is connected in series so that all the current passes through it.",
 bosKadNama:"Ohm's Law", bosKadEm:"\u{1F4D0}", bosKadFakta:"Georg Ohm, a German physicist, showed that the current is directly proportional to the voltage if the resistance is constant.",
 soalan:[
 {j:"nombor",t:"What is the total resistance in circuit X, in ohms?",b:12,tol:0.05,suf:"Ω",u:"6 + 6 = 12 Ω."},
 {j:"nombor",t:"What is the current flowing in circuit X, in amperes?",b:0.5,tol:0.01,suf:"A",u:"I = V ÷ R = 6 ÷ 12 = 0.5 A."},
 {j:"nombor",t:"What is the voltage across one bulb in circuit X, in volts?",b:3,tol:0.05,suf:"V",u:"V = IR = 0.5 × 6 = 3 V. The battery voltage is divided in two."},
 {j:"nombor",t:"What is the current flowing through one bulb in circuit Y, in amperes?",b:1,tol:0.01,suf:"A",u:"Each bulb gets 6 V: I = 6 ÷ 6 = 1 A."},
 {j:"nombor",t:"What is the total current from the battery in circuit Y, in amperes?",b:2,tol:0.01,suf:"A",u:"1 A + 1 A = 2 A."},
 {j:"pilih",t:"The bulbs in which circuit shine brighter?",p:["Y","X","Equally bright","They do not light"],b:0,u:"Each bulb in Y receives 6 V and 1 A."},
 {j:"pilih",t:"How should an ammeter be connected to measure the current in circuit X?",p:["In series","In parallel","Across the battery","With no connection"],b:0,u:"All the current must pass through the ammeter."},
 {j:"pilih",t:"One bulb in circuit Y is removed. What happens to the remaining bulb?",p:["It keeps shining as usual","It goes off immediately","It becomes twice as bright","It becomes dim"],b:0,u:"The other branch still receives 6 V."}],
 bos:{j:"nombor",t:"A 10 Ω resistor is connected to a 3 V battery. What is the current, in amperes?",b:0.3,tol:0.01,suf:"A",u:"I = 3 ÷ 10 = 0.3 A."}},

{n:4, tempat:"Electromagnet Workshop", sk:"7.3 Analysing the strength of an electromagnet", lampiran:"elektro",
 kadNama:"Magnet Crane", kadEm:"\u{1F3D7}", kadFakta:"An electromagnet crane at a scrapyard can lift tonnes of weight and release it simply by cutting the current.",
 bosKadNama:"Electric Bell", bosKadEm:"\u{1F514}", bosKadFakta:"An electric bell rings because its electromagnet attracts and releases the hammer again and again, very quickly.",
 soalan:[
 {j:"pilih",t:"Compare tests 1 and 2. The factor tested is:",p:["Number of turns","Current","Type of core","Type of wire"],b:0,u:"Only the number of turns is different."},
 {j:"pilih",t:"Compare tests 2 and 3. What is the most accurate conclusion?",p:["Larger current gives a stronger magnet","A larger current weakens the electromagnet","Current has no effect","Fewer turns strengthen the electromagnet"],b:0,u:"The paper clips lifted rise from 11 to 20."},
 {j:"pilih",t:"Compare tests 3 and 4. What is the role of the soft iron core?",p:["Strengthens the magnetic field","Weakens the magnetic field","Reduces the current","Insulates the wire"],b:0,u:"Without the core, only 2 clips are lifted."},
 {j:"nombor",t:"What is the increase in clips lifted when the current is doubled from test 2 to test 3?",b:9,tol:0.05,suf:"clips",u:"20 − 11 = 9 clips."},
 {j:"pilih",t:"Predict the clips lifted if 80 turns, 2 A and a soft iron core are used.",p:["More than 20","Less than 5","Exactly 11","No clips"],b:0,u:"The turns and the current both increase the strength."},
 {j:"pilih",t:"Why must the wire used be insulated?",p:["So that current passes through every turn","So that the wire becomes heavier","So that the wire never rusts","So that the electromagnet becomes permanent"],b:0,u:"Without insulation, the current takes a shortcut between turns that touch."},
 {j:"pilih",t:"Test 4 still lifts 2 clips even without a core. This shows that:",p:["A coil carrying current is also magnetic","The paper clips are electrostatically charged","Air is a permanent magnet","Soft iron is still inside the coil"],b:0,u:"Current in a solenoid produces a magnetic field even without a core."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["More turns, a stronger electromagnet","A larger current, a stronger electromagnet","A soft iron core strengthens the electromagnet","An air core is better than soft iron","Current does not affect the strength"],b:[0,1,2],u:"Test 4 with an air core is the weakest."}],
 bos:{j:"pilih",t:"A student increases the current to 10 A to get the strongest electromagnet. Evaluate the action.",p:["Risky; the wire may become too hot","Safe, because a high current is always better","It has no effect on the strength","It will weaken the electromagnet"],b:0,u:"A large current heats the wire and can damage the insulation or the battery."}},

{n:5, tempat:"Festive Night Market", sk:"7.2 Evaluating circuit designs", lampiran:"lampu",
 kadNama:"LED Bulb", kadEm:"\u{1F4A1}", kadFakta:"LED bulbs use much less electrical energy than filament bulbs for the same brightness.",
 bosKadNama:"Fuse", bosKadEm:"\u{1F9EF}", bosKadFakta:"A fuse contains a thin wire that melts when the current is too large, breaking the circuit.",
 soalan:[
 {j:"pilih",t:"Which design is the cheapest?",p:["P","Q","R","All the same"],b:0,u:"RM15."},
 {j:"pilih",t:"Which design is the easiest to repair if one bulb fails?",p:["Q","P","R","All the same"],b:0,u:"Only the faulty bulb goes off."},
 {j:"pilih",t:"The main weakness of design P is that:",p:["One bulb fails, and all go off","Its cost is the highest","Too much wire is used","The bulbs are too bright"],b:0,u:"Finding one faulty bulb among 60 takes time."},
 {j:"pilih",t:"Why is design R considered a good compromise?",p:["Cheap and only partly goes off","The cheapest of the three designs","No bulbs will go off at all","All the bulbs are in series like P"],b:0,u:"RM25 compared with RM40, and only 10 bulbs are affected."},
 {j:"pilih",t:"A trader wants lights that last for the whole festive month without monitoring. What is the most appropriate choice?",p:["Q","P","R","No lights"],b:0,u:"If a bulb fails, the others still stay on."},
 {j:"pilih",t:"Students want decorations for a one-day exhibition with the lowest budget. What is the most appropriate choice?",p:["P","Q","R","No lights"],b:0,u:"The risk of failure in one day is low, and it costs the least."},
 {j:"pilih",t:"A trader wants to connect 20 sets of Q lights to one socket using multi-plug adaptors. Evaluate the action.",p:["Dangerous; excess current can overheat the wires","Safe, because LED lights use no electricity","Safe, because parallel circuits have no limit","No effect because the voltage stays the same"],b:0,u:"The total current in a parallel circuit rises with every load."},
 {j:"pilih",t:"Why is a fuse fitted in the plug of decorative lights?",p:["Breaks the circuit if current is too high","Increases the brightness of all the lights","Changes current into voltage","Stores electrical energy"],b:0,u:"A fuse prevents the wires from overheating and causing a fire."}],
 bos:{j:"pilih",t:"The village mosque wants to install decorative lights on a tower that is hard to reach for repairs. What is the most appropriate choice?",p:["Q, the other bulbs stay on","P, because it costs the least","R, because it uses the least wire","P, because all the bulbs are easy to see"],b:0,u:"A higher cost is worth it if repairs are hard and expensive."}},

{n:6, tempat:"Electrical Innovation Lab", sk:"7.1 / 7.2 / 7.3 Creating using electricity and magnets",
 kadNama:"Van de Graaff", kadEm:"\u{1F9D1}\u{200D}\u{1F52C}", kadFakta:"A Van de Graaff generator collects so much charge that the hair of the person touching it stands on end.",
 bosKadNama:"Maglev Train", bosKadEm:"\u{1F684}", bosKadFakta:"A maglev train floats above its track using magnetic force, so there is almost no friction.",
 soalan:[
 {j:"pilih",t:"You design a simple door alarm using a bell and a battery. What is the most effective arrangement?",p:["A switch that closes when the door opens","The bell connected directly with no switch","Two batteries connected to the bell with no wire","A switch that is always open"],b:0,u:"The circuit is complete only when the door is opened."},
 {j:"pilih",t:"You design a metal waste separator for the school recycling centre. What is the main component?",p:["Electromagnet over a conveyor belt","A permanent magnet that cannot be switched off","A strong fan","A water filter"],b:0,u:"An electromagnet can be switched off to release the steel cans into the bin."},
 {j:"pilih",t:"You design a night light for your sibling with two bulbs that can be switched on separately. Which arrangement is most suitable?",p:["Bulbs in parallel, each with a switch","Two bulbs in series with one switch","One bulb with no switch","Two bulbs in series with no switch"],b:0,u:"A parallel circuit lets each bulb be controlled separately."},
 {j:"pilih",t:"Your class often gets static shocks when touching the door handle. What is the most practical suggestion?",p:["Touch the wall first to discharge","Wear more synthetic clothes","Dry the air with an air conditioner","Rub shoes on the carpet before entering"],b:0,u:"Touching an earthed object lets the charge flow away slowly."},
 {j:"pilih",t:"You make an emergency compass from a sewing needle. What is the correct step?",p:["Stroke with a magnet, then float it","Heat the needle in a candle flame until red","Hit the needle again and again with a hammer","Soak the needle in salt water overnight"],b:0,u:"A magnetised needle points north-south when floated."},
 {j:"pilih",t:"You suggest a way to save the school's electricity bill. What is the most effective suggestion?",p:["Change old bulbs to LEDs","Install more bulbs","Leave the fans on","Use multi-plug adaptors"],b:0,u:"LEDs use less energy for the same brightness."},
 {j:"pilih",t:"You design a magnetic pick-up tool to collect nails on a building site. What is the most effective way to increase its strength?",p:["Add turns and use a soft iron core","Use plastic wire with no copper at all","Remove the iron core to make it light","Reduce the number of batteries"],b:0,u:"The number of turns and a soft iron core strengthen the electromagnet."},
 {j:"pilih",t:"How would you fairly test the effectiveness of your electromagnet design?",p:["Use the same current and paper clips","Lift different objects every time","Test once only and draw a conclusion","Ask a friend whether it looks strong"],b:0,u:"Only one variable is changed at a time."}],
 bos:{j:"buka",
  t:"A surau in your village wants a lighting and bell system that saves electricity and is safe. Design a system using knowledge of electric circuits and electromagnets.",
  arahan:"Sketch or describe the arrangement of the circuit (series or parallel) and why, safety components such as fuses and switches, how an electromagnet is used (for example a bell), a simple calculation using V = IR, and the cost and the comfort of the congregation.",
  u:"A strong TP6 answer chooses a parallel circuit for separate control, uses a fuse and Ohm's law correctly, and takes cost and safety into account."}}
];

module.exports = {
  id:"t2b7", tingkatan:2, kod:"7.0 Electricity and Magnetism",
  tajuk:"Electro Trail",
  subtajuk:"Science Form 2 · Chapter 7 Electricity and Magnetism",
  spi:SPI,
  ulasan:{
   1:"{n} can recall electrostatic charge, the units of current, voltage and resistance, and the features of magnets. The next step is to explain series and parallel circuits.",
   2:"{n} understands electrostatics, series and parallel circuits and electromagnets and can explain them. More practice is needed in using Ohm's law.",
   3:"{n} can use Ohm's law to calculate current, voltage and resistance in series and parallel circuits. Encourage writing the unit in every step.",
   4:"{n} is able to analyse experimental data to determine the factors that affect the strength of an electromagnet. Next, practise evaluating circuit designs.",
   5:"{n} can evaluate circuit designs based on cost, safety and reliability. Ready for a creative task.",
   6:"{n} successfully created an electrical or electromagnet system that is safe and practical. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Electricity and Magnetism. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ grafohm:R_OHM, siriselari:R_LITAR, litar:T_LITAR, elektro:T_ELEKTRO, lampu:T_LAMPU },
  aras:ARAS
};
