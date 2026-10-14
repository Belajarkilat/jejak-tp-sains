/* English source (DLP) — Science KSSM Form 3, Chapter 6.0 Electricity and
   Magnetism. Translation of sumber/t3b6.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t3b6` to check it and generate bank-en-t3b6.js.
   Structure must match sumber/t3b6.js exactly. Correct answer at index 0.
   The household supply voltage is taken as 240 V as in the textbook. */

const SPI = [
"Recall the knowledge and science skills about electricity and magnetism.",
"Understand and explain about electricity and magnetism.",
"Apply knowledge about electricity and magnetism and able to carry out simple tasks.",
"Analyse knowledge about electricity and magnetism in context of problem solving on events or natural phenomena.",
"Evaluate knowledge about electricity and magnetism in context of problem solving and decision making to carry out a task.",
"Design a task using knowledge and science skills about electricity and magnetism in a creative and innovative way in the context of problem solving and decision making or carry out a task in a new situation with regards to the social values/economy/culture of the community."];

/* ---------- attachments ---------- */

const R_KWJ = {
  "jenis": "graf",
  "mod": "mendatar",
  "yMaks": 50,
  "bar": [
    { "label": "Refrigerator", "nilai": 45, "warna": "ungu" },
    { "label": "Fan", "nilai": 18, "warna": "ungu" },
    { "label": "Iron", "nilai": 9, "warna": "hijau" },
    { "label": "LED lamp", "nilai": 4, "warna": "hijau" }
  ],
  "xLabel": "Energy used in a month (kWh)",
  "kapsyen": "Figure 1 · The electrical energy used by four household appliances in a month.",
  "alt": "Bar graph: refrigerator 45, fan 18, iron 9 and LED lamp 4 kilowatt-hours a month"
};

const R_TERMAL = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Fuel is burnt",
    "Water boils into steam",
    "Steam turns the turbine",
    "Turbine turns the generator",
    "Electrical energy is generated"
  ],
  "kapsyen": "Figure 1 · The sequence of electricity generation at a thermal power station.",
  "alt": "Vertical flow diagram: fuel is burnt, water boils into steam, steam turns the turbine, the turbine turns the generator, electrical energy is generated"
};

const T_ALAT =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Appliance</th>'+
'<th class="n">Power (W)</th><th class="n">Time used per day (hours)</th></tr></thead><tbody>'+
'<tr><td>Refrigerator</td><td class="n">150</td><td class="n">24</td></tr>'+
'<tr><td>Air conditioner</td><td class="n">1000</td><td class="n">6</td></tr>'+
'<tr><td>Electric kettle</td><td class="n">2000</td><td class="n">0.5</td></tr>'+
'<tr><td>Television</td><td class="n">100</td><td class="n">5</td></tr>'+
'<tr><td>6 LED lamps (total)</td><td class="n">60</td><td class="n">5</td></tr>'+
'</tbody></table></div><p class="qnote">Supply voltage 240 V. Assume the cost of electricity is 30 sen for each kWh. Energy (kWh) = power (kW) &times; time (hours).</p>';

const T_TRANS =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Transformer</th>'+
'<th class="n">N<sub>p</sub></th><th class="n">N<sub>s</sub></th><th>Input</th><th>Output voltage</th></tr></thead><tbody>'+
'<tr><td>J</td><td class="n">100</td><td class="n">500</td><td>12 V a.c.</td><td>?</td></tr>'+
'<tr><td>K</td><td class="n">1000</td><td class="n">50</td><td>240 V a.c.</td><td>12 V</td></tr>'+
'<tr><td>L</td><td class="n">400</td><td class="n">200</td><td>240 V a.c.</td><td>?</td></tr>'+
'<tr><td>N</td><td class="n">100</td><td class="n">1000</td><td>12 V d.c. battery</td><td>0 V</td></tr>'+
'</tbody></table></div><p class="qnote">N<sub>p</sub> and N<sub>s</sub> are the number of turns of the primary and secondary coils. Formula: N<sub>p</sub>/N<sub>s</sub> = V<sub>p</sub>/V<sub>s</sub>. Assume the transformer is ideal.</p>';

const T_BIL =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Month</th>'+
'<th class="n">Usage (kWh)</th><th class="n">Bill (RM)</th><th>Family note</th></tr></thead><tbody>'+
'<tr><td>January</td><td class="n">420</td><td class="n">126.00</td><td>&mdash;</td></tr>'+
'<tr><td>February</td><td class="n">410</td><td class="n">123.00</td><td>&mdash;</td></tr>'+
'<tr><td>March</td><td class="n">380</td><td class="n">114.00</td><td>All bulbs changed to LEDs</td></tr>'+
'<tr><td>April</td><td class="n">470</td><td class="n">141.00</td><td>School holidays, the whole family at home</td></tr>'+
'<tr><td>May</td><td class="n">300</td><td class="n">90.00</td><td>Old air conditioner replaced with a 5-star model</td></tr>'+
'<tr><td>June</td><td class="n">310</td><td class="n">93.00</td><td>&mdash;</td></tr>'+
'</tbody></table></div><p class="qnote">Fictional data with a flat rate of 30 sen for each kWh.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Energy Sources", sk:"6.1 Generation of electrical energy", lampiran:"grafkwj",
 kadNama:"Solar Energy", kadEm:"\u{1F31E}", kadFakta:"Malaysia receives sunlight all year round, so solar energy is a renewable source that suits it well.",
 bosKadNama:"National Grid", bosKadEm:"\u{1F5FC}", bosKadFakta:"The National Grid network connects many power stations, so the supply does not stop if one station breaks down.",
 soalan:[
 {j:"pilih",t:"An example of a renewable energy source is:",p:["Solar energy","Coal","Natural gas","Diesel"],b:0,u:"Sunlight will never be used up."},
 {j:"pilih",t:"An example of a non-renewable energy source is:",p:["Natural gas","Wind energy","Biomass","Wave energy"],b:0,u:"Natural gas takes millions of years to form."},
 {j:"pilih",t:"A current that flows in one direction only is called:",p:["Direct current","Alternating current","Induced current","Earth current"],b:0,u:"Batteries and solar cells supply direct current (d.c.)."},
 {j:"pilih",t:"The device that raises or lowers the voltage of an alternating current is the:",p:["Transformer","Generator","Fuse","Circuit breaker"],b:0,u:"A step-up transformer raises the voltage, while a step-down transformer lowers it."},
 {j:"pilih",t:"In house wiring that follows the international colour code, the live wire is coloured:",p:["Brown","Blue","Green and yellow","Black"],b:0,u:"The neutral wire is blue, and the earth wire is striped green and yellow."},
 {j:"pilih",t:"Based on Figure 1, the unit of electrical energy used in an electricity bill is the:",p:["Kilowatt-hour (kWh)","Kilowatt (kW)","Joule per second (J/s)","Volt-ampere (VA)"],b:0,u:"One kWh is the energy used by a 1 kW appliance in one hour."},
 {j:"banyak",t:"Choose ALL the renewable energy sources.",p:["Hydro","Tidal","Geothermal","Nuclear","Coal"],b:[0,1,2],u:"Nuclear fuel and coal will run out if they keep being used."},
 {j:"pilih",t:"The component that cuts the circuit automatically when current leaks to the earth is the:",p:["ELCB","MCB","Fuse","Switch"],b:0,u:"An ELCB is an earth leakage circuit breaker."}],
 bos:{j:"susun",t:"Arrange the flow of electrical energy from the power station to the house.",p:["Power station","Step-up transformer","National Grid network","Step-down transformer","House wiring"],b:[0,1,2,3,4],u:"The voltage is raised for long-distance transmission, then lowered before it reaches the consumer."}},

{n:2, tempat:"Generator", sk:"6.1 / 6.3 Generation and safety of electricity", lampiran:"stesenterma",
 kadNama:"Generator", kadEm:"\u{1F9F2}", kadFakta:"A current is induced only when a magnetic field is cut, so a magnet that is stationary inside a coil produces no current.",
 bosKadNama:"MCB", bosKadEm:"\u{1F50C}", bosKadFakta:"A miniature circuit breaker (MCB) can be switched back on after the problem is fixed, unlike a fuse, which must be replaced.",
 soalan:[
 {j:"pilih",t:"How does a simple generator produce an electric current?",p:["A magnet is moved in a coil so that the magnetic field is cut","A magnet is left stationary inside a coil of wire for a long time","A coil of wire is heated until electrons leave it","A battery in the generator keeps charging the coil of wire"],b:0,u:"Relative movement between the magnet and the coil induces a current."},
 {j:"pilih",t:"Based on Figure 1, at a thermal power station, what is the function of the steam?",p:["To turn the turbine that is connected to the generator","To cool the generator so it does not get too hot","To clean the smoke before it is released into the air","To store electrical energy for use at night"],b:0,u:"Fuel is burnt to boil water, and high-pressure steam turns the turbine."},
 {j:"pilih",t:"Why can a solar cell be used to charge a battery directly?",p:["Both the solar cell and the battery use direct current","A solar cell produces a very strong alternating current","A battery can only be charged with sunlight","A solar cell produces a voltage that keeps changing direction"],b:0,u:"Direct current flows in one direction, just as is needed to charge a battery."},
 {j:"pilih",t:"Why does a transformer not work with a battery?",p:["A battery supplies a direct current that does not change","The voltage of a battery is too high for a transformer","A battery has no positive terminal","A transformer can only be used at power stations"],b:0,u:"A transformer needs a magnetic field that is always changing, and only an alternating current produces this."},
 {j:"pilih",t:"Why is electrical energy transmitted at a very high voltage through the National Grid network?",p:["The current is small, so less energy is lost as heat","A high voltage makes electricity travel faster to the house","High-voltage cables are cheaper because no insulation is needed","Consumers at home need a voltage that high"],b:0,u:"For the same power, a higher voltage means a smaller current in the cable."},
 {j:"pilih",t:"What is the function of the earth wire in an appliance with a metal body?",p:["To carry the current to the earth if the metal body becomes live","To supply current to the appliance when it is switched on","To save electricity when the appliance is not in use","To reduce the supply voltage to the appliance"],b:0,u:"Without an earth wire, a person who touches the metal body would become a path for the current."},
 {j:"pilih",t:"Why is a fuse connected to the live wire, not the neutral wire?",p:["A fuse that melts disconnects the appliance from the high voltage","The neutral wire is too thin to be connected with a fuse","The fuse would rust if connected to the neutral wire","The live wire carries no electric current"],b:0,u:"If the fuse were on the neutral wire, the appliance would still be connected to the high voltage even after the fuse melts."},
 {j:"pilih",t:"What is the meaning of energy efficiency?",p:["The percentage of input energy that is changed into useful energy","The amount of energy an appliance uses every hour","The price of electricity paid for each kilowatt-hour","The total time an appliance can be used without breaking down"],b:0,u:"An efficient appliance wastes less energy, for example as heat."}],
 bos:{j:"pilih",t:"Too many appliances are plugged into one socket in a house that uses an MCB. What happens?",p:["The MCB cuts the circuit because of the excess current","The MCB adds voltage so all the appliances work","The ELCB changes direct current into alternating current","There is no effect because a socket can carry anything"],b:0,u:"Excess current can heat the wires and cause a fire, so the MCB cuts the circuit."}},

{n:3, tempat:"Smart House", sk:"6.3 / 6.4 Applying in wiring and costs", lampiran:"alat",
 kadNama:"Fuse", kadEm:"\u{1FA9B}", kadFakta:"A fuse contains a thin wire that melts when the current exceeds its rating, breaking the circuit.",
 bosKadNama:"Star Label", bosKadEm:"\u{2B50}", bosKadFakta:"An Energy Commission label with more stars shows a more energy-efficient appliance.",
 soalan:[
 {j:"nombor",t:"What is the current flowing through the electric kettle while it is in use? Give the answer in amperes, correct to two decimal places.",b:8.33,tol:0.01,suf:"A",u:"Current = power ÷ voltage = 2000 W ÷ 240 V = 8.33 A."},
 {j:"pilih",t:"Based on the current of the kettle, which fuse is most suitable for its plug?",p:["10 A","3 A","5 A","30 A"],b:0,u:"The fuse rating is chosen slightly higher than the normal current of the appliance."},
 {j:"nombor",t:"What is the electrical energy used by the refrigerator in a day, in kWh?",b:3.6,tol:0.01,suf:"kWh",u:"0.15 kW × 24 hours = 3.6 kWh."},
 {j:"nombor",t:"What is the cost of using the air conditioner for a day, in ringgit?",b:1.8,tol:0.01,suf:"ringgit",u:"1 kW × 6 hours = 6 kWh. 6 × 30 sen = RM1.80."},
 {j:"pilih",t:"Which appliance uses the most electrical energy in a day?",p:["Air conditioner","Refrigerator","Electric kettle","Television"],b:0,u:"The air conditioner uses 6 kWh, the refrigerator 3.6 kWh, and the kettle only 1 kWh."},
 {j:"pilih",t:"The kettle has the highest power, but is not the biggest user of energy. Why?",p:["It is used for a very short time each day","Power is not related to the energy used","The kettle produces energy while the water boils","The kettle only uses direct current from a battery"],b:0,u:"Energy depends on power and also on the time of use."},
 {j:"pilih",t:"Why must a refrigerator use a 3-pin plug?",p:["Its metal body must be earthed for safety","A refrigerator needs three times the voltage","A 2-pin plug does not fit the socket in the kitchen","The third pin supplies extra energy to the compressor"],b:0,u:"The third pin is connected to the earth wire."},
 {j:"pilih",t:"A student sees that the insulation of the kettle's cord has torn and its wires are exposed. What is the safest action?",p:["Unplug it and stop using it until the cord is replaced","Wrap it with cellophane tape and keep using it","Use the kettle with wet hands but carefully","Change the fuse to a higher rating"],b:0,u:"Exposed wires can cause an electric shock or a short circuit."}],
 bos:{j:"pilih",t:"This family wants to save electricity. Which step gives the biggest daily saving?",p:["Reduce the air conditioner from 6 hours to 4 hours","Switch off the television one hour earlier every night","Switch off all the LED lamps one hour earlier","Use the kettle for 10 minutes less every day"],b:0,u:"The air conditioner saves 2 kWh, the television 0.1 kWh, the lamps 0.06 kWh, and the kettle about 0.33 kWh."}},

{n:4, tempat:"Transformer", sk:"6.2 Transformers", lampiran:"trans",
 kadNama:"Transformer", kadEm:"\u{1F501}", kadFakta:"A phone charger contains a small step-down transformer that lowers the household supply voltage.",
 bosKadNama:"Laminated Core", bosKadEm:"\u{1F4DA}", bosKadFakta:"The iron core of a transformer is built from thin laminated sheets to reduce energy loss as heat.",
 soalan:[
 {j:"nombor",t:"What is the output voltage of transformer J?",b:60,tol:0.5,suf:"V",u:"Vs = Vp × Ns ÷ Np = 12 × 500 ÷ 100 = 60 V."},
 {j:"nombor",t:"What is the output voltage of transformer L?",b:120,tol:0.5,suf:"V",u:"Vs = 240 × 200 ÷ 400 = 120 V."},
 {j:"pilih",t:"Which transformers are step-down transformers?",p:["K and L","J and N","J and K","L and N"],b:0,u:"A step-down transformer has fewer turns on the secondary coil than on the primary coil."},
 {j:"pilih",t:"Why is the output voltage of transformer N zero?",p:["Direct current does not produce a changing magnetic field","Its number of secondary turns is too many for a battery","The 12 V voltage of the battery is too low for a transformer","Its iron core is not laminated, so no current flows"],b:0,u:"Without a changing magnetic field, no current is induced in the secondary coil."},
 {j:"nombor",t:"A phone charger lowers 240 V to 5 V. If its primary coil has 960 turns, what is the number of turns of the secondary coil?",b:20,tol:0.5,suf:"turns",u:"Ns = Np × Vs ÷ Vp = 960 × 5 ÷ 240 = 20 turns."},
 {j:"pilih",t:"A student builds a transformer like K, but its output voltage is only 10 V, not 12 V. What is the most reasonable cause?",p:["Some energy is lost as heat","Its primary coil has fewer turns than planned","The input supply is direct current from a battery","Transformer K should produce 20 V"],b:0,u:"A real transformer is not ideal. Fewer primary turns would raise the output, and a direct current would give zero output."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data of transformers J, K and L.",p:["An Ns that is bigger than Np raises the voltage","The ratio of turns decides the ratio of voltages","A step-down transformer has a smaller Ns","A transformer can raise the voltage of a direct current","The number of turns does not affect the voltage"],b:[0,1,2],u:"Transformer N shows that a transformer does not work with direct current."},
 {j:"pilih",t:"Why is housing that is too close to high-voltage pylons a discussed issue?",p:["A safety risk if a cable falls or there is a shock","Pylons produce smoke that pollutes the air","Pylons absorb all phone signals in the area","Houses near pylons cannot receive electricity"],b:0,u:"That is why there is a reserve zone under high-voltage lines."}],
 bos:{j:"pilih",t:"A workshop has a 240 V a.c. supply, but its new machine needs 480 V a.c. What is the most suitable transformer design?",p:["A step-up transformer with Ns twice Np","A step-down transformer with Ns half of Np","A step-up transformer with Np twice Ns","Not possible, because a transformer only lowers voltage"],b:0,u:"The voltage must be doubled, so the secondary coil must have twice the turns of the primary coil."}},

{n:5, tempat:"Energy Audit", sk:"6.4 Calculating the cost and saving of electricity", lampiran:"bil",
 kadNama:"Green Building", kadEm:"\u{1F3E2}", kadFakta:"Green buildings use natural light, heat insulation and solar panels to reduce the use of electricity.",
 bosKadNama:"LED Lamp", bosKadEm:"\u{1F4A1}", bosKadFakta:"An LED lamp uses far less power than a filament bulb for the same brightness.",
 soalan:[
 {j:"pilih",t:"Based on the table, which step gives the biggest saving?",p:["Changing the air conditioner to a 5-star model","Changing all the bulbs to LEDs","Both the same, because the bill falls after each step","Changing the bulbs, because lamps are used longer each day"],b:0,u:"Usage fell by about 80 kWh after the air conditioner was replaced, compared with 30 kWh after the LEDs were fitted. Long hours of use do not necessarily mean a big amount of energy if the power is small."},
 {j:"pilih",t:"Evaluate the claim: \"Changing to LEDs is useless because the April bill is higher than February's.\"",p:["Not accurate, because the April bill rose because of the holidays, not the LEDs","Accurate, because the April bill is the highest in the table","Accurate, because LEDs use more power when newly installed","Not accurate, because the rate in sen for each kWh rose in April"],b:0,u:"The note in the table shows that all the family members were at home in April. The rate in the table is a flat 30 sen, so the rise came from usage."},
 {j:"nombor",t:"What is the saving in the bill between March and June, in ringgit?",b:21,tol:0.01,suf:"ringgit",u:"RM114.00 minus RM93.00 equals RM21.00."},
 {j:"pilih",t:"This family can only afford ONE new refrigerator. Based on the Energy Commission label, what is the most appropriate choice?",p:["A 5-star refrigerator even though it costs a little more","A 2-star refrigerator because the purchase price matters most","The biggest refrigerator because empty space saves energy","The most powerful refrigerator because it cools faster"],b:0,u:"A refrigerator runs 24 hours a day, so a small saving each hour adds up to a lot. A higher power means more energy used."},
 {j:"pilih",t:"Two choices of street lights for a village far from the power lines: (P) lamps connected to the grid, (Q) solar LED lamps. What is the most appropriate decision?",p:["Q, because there is no need to lay long and expensive cables","P, because solar lamps do not work at night","P, because sunlight in Malaysia is not strong enough","Q, because solar lamps need no maintenance"],b:0,u:"Solar lamps store energy in a battery in the daytime for use at night. The panel and the battery still need maintenance."},
 {j:"pilih",t:"Evaluate the suggestion: \"Fit a 30 A fuse to the kettle so the fuse does not blow easily.\"",p:["Not appropriate, because the wires can overheat before the fuse blows","Appropriate, because a fuse that rarely blows saves cost","Appropriate, because the kettle draws a 30 A current when the water boils","Not appropriate, because a 30 A fuse lowers the voltage to the kettle"],b:0,u:"The normal current of a 2000 W kettle is about 8.3 A. A fuse does not change the voltage; it only melts when the current exceeds its rating."},
 {j:"banyak",t:"Choose ALL the building features that save electricity in Malaysia.",p:["Shaded windows for natural light","Solar panels on the roof","Heat insulation on the roof and walls","Big glass walls with no shade on the west side","An air conditioner set at 16 °C"],b:[0,1,2],u:"Unshaded glass on the west side receives the afternoon sun and adds to the load on the air conditioner. A temperature of 16 °C uses more electricity."},
 {j:"pilih",t:"A student is still stuck to a wire after receiving an electric shock. What is the most appropriate first action?",p:["Switch off the main switch first","Pull the victim away at once with bare hands","Pour water on the victim so the current flows out","Push the victim away with a long iron rod"],b:0,u:"The body, water and iron all conduct electricity, so a rescuer can become a second victim."}],
 bos:{j:"pilih",t:"The school wants to install solar panels, but its budget is only enough for half of the roof. What is the most appropriate decision?",p:["Install half first and reduce demand with LEDs","Postpone the project until the budget is enough for the whole roof","Install the panels on the shadiest part of the roof so they do not get hot","Install the panels and store the extra energy in the transformer"],b:0,u:"Savings can start straight away. Panels in the shade generate less electricity, and a transformer does not store energy."}},

{n:6, tempat:"Remote Village", sk:"6.1.4 Solving problems of electricity supply",
 kadNama:"Micro Hydro", kadEm:"\u{1F4A7}", kadFakta:"A micro-hydro system uses the flow of a small river to generate electricity for a village far from the grid.",
 bosKadNama:"Lightning Conductor", bosKadEm:"\u{1F329}", bosKadFakta:"A lightning conductor channels the current of a lightning strike straight to the earth so that the building is not damaged.",
 soalan:[
 {j:"pilih",t:"You design a power generator for a remote village beside a fast-flowing river surrounded by thick forest. What is the most suitable source?",p:["A micro-hydro turbine in that river","Solar panels under the canopy of thick forest","A wind turbine in a sheltered valley","A diesel generator because the fuel is easy to deliver"],b:0,u:"A fast river is a renewable energy that is already there. The forest canopy blocks light, a sheltered valley has little wind, and diesel is hard to deliver to the interior."},
 {j:"pilih",t:"Your turbine produces an alternating current, but the villagers want to charge lamp batteries. What is the most appropriate solution?",p:["Use a charger that changes a.c. to d.c.","Connect the battery straight to the turbine with no other device","Use a transformer alone to change a.c. to d.c.","Use a bigger fuse so the current flows in one direction"],b:0,u:"A transformer only changes voltage, not the type of current. A fuse protects the circuit and does not change the direction of the current."},
 {j:"pilih",t:"Building a small dam would flood part of the forest. What is the most appropriate approach that takes the environment into account?",p:["Use a river-current turbine without a big dam","Build the dam as high as possible for maximum power","Straighten the river so the water flows faster to the turbine","Build the dam upstream because the forest there is uninhabited"],b:0,u:"A river-current turbine generates electricity without drowning the forest. The forest upstream is still wildlife habitat and a water catchment area."},
 {j:"pilih",t:"The voltage from your generator is 1200 V, but household appliances need 240 V. The suitable ratio Np : Ns is:",p:["5 : 1","1 : 5","1200 : 1","1 : 1"],b:0,u:"Np/Ns = Vp/Vs = 1200/240 = 5. A step-down transformer has more turns on the primary."},
 {j:"pilih",t:"The villagers are not yet used to electrical safety. What is the most important step in your design?",p:["Install an ELCB and an earth wire, and train the villagers","Install a high-rated fuse so the supply rarely cuts off","Use thin wires because the current in a village is small","Install an MCB only because an MCB also detects leakage to the earth"],b:0,u:"An MCB detects excess current, while an ELCB detects current leaking to the earth. Safety devices work only if the users understand their function."},
 {j:"pilih",t:"The project budget is limited and the generator produces only a small power. What is the most creative way to meet the village's needs?",p:["Use LED lamps and schedule high-power appliances","Raise the supply voltage so more energy is produced","Buy a second generator just for daytime use","Use filament bulbs because they last longer than LEDs"],b:0,u:"Raising the voltage with a transformer does not add energy. Reducing and scheduling demand is cheaper than adding a generator."},
 {j:"pilih",t:"How would you prove that the micro-hydro system is successful after six months?",p:["Compare the hours of supply and the cost of diesel before and after","Ask the village head whether the lights look brighter","Measure the output voltage once only on the day of installation","Count the number of houses that have electric sockets"],b:0,u:"The same measurements before and after show the real change. A single reading on the first day does not show six months of performance."},
 {j:"pilih",t:"The villagers depend on river fish as a source of food. What is the most appropriate consideration in the turbine design?",p:["Make sure the fish routes are not blocked","Install the turbine across the whole width of the river for maximum power","Move the villagers away from the river while the project is carried out","Limit fish catches to make up for the loss of habitat"],b:0,u:"A turbine across the whole river blocks fish that migrate to spawn. A good solution looks after the resource that supports the community."}],
 bos:{j:"buka",
  t:"A school in the interior of Sabah gets electricity only from a diesel generator for four hours a day. Design a better electricity supply system for the school.",
  arahan:"Explain the energy source chosen and how electricity is generated, components such as transformers and safety features, the estimated energy use, and how you take into account the cost, the environment and the local residents.",
  u:"A strong TP6 answer chooses the source based on local conditions, calculates the energy needs, and plans safety and maintenance."}}
];

module.exports = {
  id:"t3b6", tingkatan:3, kod:"6.0 Electricity and Magnetism",
  tajuk:"Current Trail",
  subtajuk:"Science Form 3 · Chapter 6 Electricity and Magnetism",
  spi:SPI,
  /* PBD comments by performance level. {n} is replaced with the student's first name. */
  ulasan:{
   1:"{n} can recall energy sources, the types of current and the basic components of house wiring. The next step is to explain how electricity is generated and the function of each component.",
   2:"{n} understands the generation of electricity, the function of transformers and the safety components in house wiring. More practice is needed in calculating power and energy before moving on to TP3.",
   3:"{n} can apply the formulae for power and energy to calculate current, fuse ratings and the cost of electricity use. Encourage linking calculations to energy-saving steps.",
   4:"{n} is able to analyse transformer data using the turns ratio formula and explain why a transformer does not work with direct current. Next, practise weighing evidence to make decisions.",
   5:"{n} can evaluate electricity bill data and the choice of appliances to make sound and safe energy-saving decisions. Ready for a creative task.",
   6:"{n} successfully designed a practical and safe electricity supply system for a remote area, taking cost, the environment and the community into account. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Electricity and Magnetism. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ grafkwj:R_KWJ, stesenterma:R_TERMAL, alat:T_ALAT, trans:T_TRANS, bil:T_BIL },
  aras:ARAS
};
