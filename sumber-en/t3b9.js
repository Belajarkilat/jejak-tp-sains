/* English source (DLP) — Science KSSM Form 3, Chapter 9.0 Space Weather.
   Translation of sumber/t3b9.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t3b9` to check it and generate bank-en-t3b9.js.
   Structure must match sumber/t3b9.js exactly. Correct answer at index 0. */

const SPI = [
"Recall the knowledge and science skills about space weather.",
"Understand and explain about space weather.",
"Apply knowledge about space weather and able to carry out simple tasks.",
"Analyse knowledge about space weather in context of problem solving on events or natural phenomena.",
"Evaluate knowledge about space weather in context of problem solving and decision making to carry out a task.",
"Design a task using knowledge and science skills about space weather in a creative and innovative way in the context of problem solving and decision making or carry out a task in a new situation with regards to the social values/economy/culture of the community."];

/* ---------- attachments ---------- */

const R_TOMPOK = {
  "jenis": "graf",
  "petunjuk": true,
  "grid": 4,
  "yMin": 0,
  "yMaks": 100,
  "setiap": 2,
  "x": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
  "siri": [
    {
      "label": "Number of sunspots",
      "warna": "kuning",
      "y": [98,90,70,43,19,4,4,19,43,70,90,98,90,70,43,19,4,4,19,43,70,90,98]
    }
  ],
  "xLabel": "Year",
  "kapsyen": "Figure 1 · The number of sunspots recorded over 22 years.",
  "alt": "Wave graph: the number of sunspots peaks at year zero, year 11 and year 22, with the lowest values midway between each peak"
};

const R_AURORA = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Solar wind carries charged particles",
    "Particles hit atoms of atmospheric gas",
    "The gas atoms emit light",
    "The aurora is seen in the sky"
  ],
  "kapsyen": "Figure 1 · The sequence of events that produces an aurora.",
  "alt": "Vertical flow diagram: the solar wind carries charged particles, the particles hit atoms of atmospheric gas, the gas atoms emit light, and the aurora is seen in the sky"
};

const T_LAPISAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Layer (from the inside)</th>'+
'<th>Estimated temperature (&deg;C)</th><th>Feature</th></tr></thead><tbody>'+
'<tr><td>Core</td><td>15 000 000</td><td>Nuclear fusion reactions take place</td></tr>'+
'<tr><td>Radiative zone</td><td>7 000 000 to 2 000 000</td><td>Energy is transferred by radiation</td></tr>'+
'<tr><td>Convective zone</td><td>2 000 000 to 5 500</td><td>Hot gas rises, cooler gas sinks</td></tr>'+
'<tr><td>Photosphere</td><td>5 500</td><td>The visible surface; has granules and sunspots</td></tr>'+
'<tr><td>Chromosphere</td><td>4 000 to 20 000</td><td>A thin reddish layer</td></tr>'+
'<tr><td>Corona</td><td>More than 1 000 000</td><td>The outer layer, clearly visible during a total solar eclipse</td></tr>'+
'</tbody></table></div><p class="qnote">The temperature values are rough estimates.</p>';

const T_KITARAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Year</th>'+
'<th class="n">Average number of sunspots</th><th class="n">Coronal mass ejections in the year</th>'+
'<th class="n">Reports of GPS disruption</th></tr></thead><tbody>'+
'<tr><td>2019</td><td class="n">4</td><td class="n">400</td><td class="n">3</td></tr>'+
'<tr><td>2020</td><td class="n">9</td><td class="n">500</td><td class="n">5</td></tr>'+
'<tr><td>2021</td><td class="n">30</td><td class="n">1100</td><td class="n">11</td></tr>'+
'<tr><td>2022</td><td class="n">83</td><td class="n">2200</td><td class="n">26</td></tr>'+
'<tr><td>2023</td><td class="n">125</td><td class="n">3000</td><td class="n">38</td></tr>'+
'<tr><td>2024</td><td class="n">155</td><td class="n">3500</td><td class="n">47</td></tr>'+
'</tbody></table></div><p class="qnote">Fictional data for practice, based on the real pattern of the solar cycle.</p>';

const T_AMARAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Storm warning level</th><th>Expected effects</th></tr></thead><tbody>'+
'<tr><td>G1 (minor)</td><td>Small fluctuations in the power grid; aurora in polar regions</td></tr>'+
'<tr><td>G3 (strong)</td><td>GPS and high-frequency radio disruption; satellites may need corrections</td></tr>'+
'<tr><td>G5 (extreme)</td><td>The power grid may fail; radio communication is lost for days; aurora is seen down to low latitudes</td></tr>'+
'</tbody></table></div><p class="qnote">A simplified scale of geomagnetic storm warnings.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Solar Core", sk:"9.1 Structure and phenomena of the Sun", lampiran:"graftompok",
 kadNama:"Solar Core", kadEm:"\u{2600}", kadFakta:"The temperature of the Sun's core reaches about 15 million °C. There, hydrogen fuses into helium.",
 bosKadNama:"Solar Cycle", bosKadEm:"\u{1F504}", bosKadFakta:"The number of sunspots rises and falls in a cycle of about 11 years.",
 soalan:[
 {j:"pilih",t:"The innermost layer of the Sun is the:",p:["Core","Corona","Photosphere","Chromosphere"],b:0,u:"The Sun's energy is produced in the core."},
 {j:"pilih",t:"The layer of the Sun that we see as its surface is the:",p:["Photosphere","Corona","Core","Convective zone"],b:0,u:"Photo means light. The photosphere gives off the light that we see."},
 {j:"susun",t:"Arrange the layers of the Sun from the INSIDE to the OUTSIDE.",p:["Core","Radiative zone","Convective zone","Photosphere","Chromosphere","Corona"],b:[0,1,2,3,4,5],u:"The first three layers are inside the Sun, while the last three form its atmosphere."},
 {j:"pilih",t:"The darker, cooler areas on the surface of the Sun are called:",p:["Sunspots","Solar prominences","Granules","The corona"],b:0,u:"Sunspots are linked to strong magnetic fields."},
 {j:"pilih",t:"The continuous flow of charged particles from the Sun is called the:",p:["Solar wind","Sunspots","Granules","Eclipse"],b:0,u:"The solar wind blows throughout the Solar System."},
 {j:"pilih",t:"The region around the Earth that is controlled by the Earth's magnetic field is called the:",p:["Magnetosphere","Stratosphere","Chromosphere","Photosphere"],b:0,u:"The chromosphere and photosphere are layers of the Sun, and the stratosphere is a layer of the Earth's atmosphere."},
 {j:"banyak",t:"Choose ALL the phenomena that happen on the surface or in the atmosphere of the Sun.",p:["Solar flares","Solar prominences","Coronal mass ejections","Lunar eclipses","Ocean tides"],b:[0,1,2],u:"Lunar eclipses and tides involve the Earth and the Moon."},
 {j:"pilih",t:"The colourful lights seen in the sky in polar regions are called:",p:["Aurora","Rainbow","Meteor","Comet"],b:0,u:"An aurora in the northern hemisphere is called the aurora borealis."}],
 bos:{j:"pilih",t:"Based on Figure 1, the solar cycle repeats about every:",p:["11 years","1 year","100 years","28 days"],b:0,u:"Solar activity reaches a peak about once every 11 years."}},

{n:2, tempat:"Magnetosphere", sk:"9.1.2 / 9.2 The magnetosphere and space weather", lampiran:"auroraaliran",
 kadNama:"Magnetosphere", kadEm:"\u{1F9F2}", kadFakta:"The magnetosphere deflects most of the charged particles of the solar wind before they reach the Earth's surface.",
 bosKadNama:"Aurora", bosKadEm:"\u{1F30C}", bosKadFakta:"The green colour of an aurora is usually produced by oxygen atoms in the atmosphere.",
 soalan:[
 {j:"pilih",t:"Why do sunspots look dark?",p:["They are cooler than the surrounding areas","They are holes that go through the Sun","They are shadows of planets passing in front of the Sun","They are areas with no gas at all"],b:0,u:"Sunspots are still very hot, just less bright than the photosphere around them."},
 {j:"pilih",t:"Why is the magnetosphere important to life on Earth?",p:["It deflects the solar wind's charged particles","It produces the oxygen needed for breathing","It warms the Earth at night","It attracts the Moon so that it keeps orbiting the Earth"],b:0,u:"Without the magnetosphere, the solar wind could erode the atmosphere and endanger life."},
 {j:"pilih",t:"Why is the magnetosphere not perfectly round?",p:["The solar wind presses on one side and stretches the other side","The Earth spins so fast on its axis that it is distorted","The Moon pulls the magnetosphere in one direction as it orbits","The Earth's atmosphere is too thin in the north polar region"],b:0,u:"The side facing the Sun is compressed, while the night side stretches out like a tail."},
 {j:"pilih",t:"Why is an aurora seen more often in polar regions?",p:["Magnetic field lines guide charged particles to the polar regions","The polar regions are closer to the Sun than the equator","The ice at the poles reflects sunlight","The poles have night all year round"],b:0,u:"The Earth's magnetic field lines converge near the poles."},
 {j:"pilih",t:"Based on Figure 1, how is an aurora formed?",p:["Charged particles hit atoms and molecules of gas in the atmosphere","Sunlight is reflected by ice and snow in the polar regions","Thick clouds give off light at night","Lightning happens continuously in the polar regions"],b:0,u:"The atoms and molecules that are hit give off coloured light."},
 {j:"pilih",t:"Why can a coronal mass ejection disrupt GPS signals?",p:["Its charged particles disturb the atmosphere that the signals pass through","It blocks sunlight from reaching the Earth","It makes the Earth stop spinning for a moment","It changes the direction of the Earth's gravitational field for a while"],b:0,u:"GPS signals from satellites must pass through the disturbed upper atmosphere."},
 {j:"pilih",t:"What is the relationship between the number of sunspots and solar activity?",p:["More sunspots mean more frequent flares and coronal mass ejections","More sunspots make the Sun cooler and less active for ever","The number of sunspots is not related to solar activity","Sunspots appear only during a solar eclipse"],b:0,u:"Sunspots mark areas of strong magnetic fields that are the source of eruptions."},
 {j:"pilih",t:"Why must we not look at the Sun directly, even when solar activity is interesting?",p:["Strong radiation can permanently damage the retina of the eye","The Sun is too far away to be seen with the eye","Sunspots give off radioactive radiation","Human eyes can only look at the Sun safely at dusk"],b:0,u:"Retina damage happens without pain, so victims are often unaware of it."}],
 bos:{j:"banyak",t:"Choose ALL the effects of space weather on the Earth.",p:["Radio communication disruption","GPS navigation system disruption","Excess current in power lines","Earthquakes in tropical regions","Heavy rain in equatorial regions"],b:[0,1,2],u:"Earthquakes and heavy rain come from processes on the Earth, not from space weather."}},

{n:3, tempat:"Observatory", sk:"9.1 Applying knowledge of the structure of the Sun", lampiran:"lapisan",
 kadNama:"Total Eclipse", kadEm:"\u{1F311}", kadFakta:"During a total solar eclipse, the corona looks like a glowing crown around the Moon.",
 bosKadNama:"Giant Sunspot", bosKadEm:"\u{1F52D}", bosKadFakta:"Some sunspots are bigger than the Earth, and their temperature is lower than that of the photosphere around them.",
 soalan:[
 {j:"pilih",t:"Based on the table, which layer is the hottest?",p:["Core","Corona","Photosphere","Chromosphere"],b:0,u:"The temperature of the core is about 15 000 000 °C."},
 {j:"pilih",t:"Why is the corona clearly visible only during a total solar eclipse?",p:["The bright light of the photosphere is blocked by the Moon","The corona exists only during an eclipse","The Moon gives off its own light onto the corona during an eclipse","The corona is located inside the Sun's core"],b:0,u:"The corona is always there, but its light is far dimmer than that of the photosphere."},
 {j:"pilih",t:"In which layer does nuclear fusion take place?",p:["Core","Corona","Chromosphere","Photosphere"],b:0,u:"The very high temperature and pressure in the core make fusion possible."},
 {j:"pilih",t:"Granules in the photosphere are the tops of convection cells. What causes them?",p:["Hot gas rises and cooler gas sinks","Small planets fall onto the surface of the Sun","The solar wind blows gas into the core","The shadow of the Earth on the surface of the Sun"],b:0,u:"The bright centre of a granule is hot gas rising."},
 {j:"pilih",t:"A student wants to observe sunspots at school. The safest method is:",p:["Project the image of the Sun from a telescope onto white paper","Look straight through ordinary binoculars without any filter","Wear ordinary sunglasses and stare at the Sun","Look at the reflection of the Sun in pond water"],b:0,u:"The projection method lets the spots be seen without looking at the Sun."},
 {j:"nombor",t:"The temperature of the core is about 15 000 000 °C and the temperature of the photosphere is about 5 500 °C. How many times hotter is the core than the photosphere? Round to a whole number.",b:2727,tol:1,suf:"times",u:"15 000 000 ÷ 5 500 ≈ 2727 times."},
 {j:"pilih",t:"A student in Kuala Lumpur has never seen an aurora. The most accurate explanation is:",p:["Malaysia is near the equator, far from the polar regions","An aurora happens only once every hundred years","An aurora is seen only at bright, hot noon","The sky in Malaysia is too cloudy all year round"],b:0,u:"An aurora is usually seen at high latitudes."},
 {j:"pilih",t:"An airline receives a solar storm warning. The most appropriate action for flights over the polar region is to:",p:["Change the route to a lower latitude","Fly higher to be closer to the aurora","Switch off all communication systems","Carry on as usual without monitoring"],b:0,u:"Polar regions receive more charged particles and radio disruption."}],
 bos:{j:"pilih",t:"A sunspot is seen moving across the surface of the Sun over a few days. The most reasonable conclusion is:",p:["The Sun rotates on its axis","The spot is falling into the core","The Earth has stopped orbiting the Sun","The spot is a spaceship"],b:0,u:"Observing sunspots helped early scientists prove that the Sun rotates."}},

{n:4, tempat:"Solar Cycle", sk:"9.2 Interpreting space weather data", lampiran:"kitaran",
 kadNama:"Coronal Mass Ejection", kadEm:"\u{1F4A5}", kadFakta:"A coronal mass ejection throws billions of tonnes of plasma into space. Some of it reaches the Earth in one to three days.",
 bosKadNama:"Carrington Event", bosKadEm:"\u{1F4E1}", bosKadFakta:"A huge solar storm in 1859 disrupted telegraph lines in many countries.",
 soalan:[
 {j:"pilih",t:"Based on the table, what is the relationship between the average number of sunspots and coronal mass ejections?",p:["Both increase together","Ejections decrease when sunspots increase","There is no relationship between the two","Sunspots decrease when ejections increase"],b:0,u:"Both values rise every year from 2019 to 2024."},
 {j:"nombor",t:"What is the increase in reports of GPS disruption from 2019 to 2024?",b:44,tol:0.5,suf:"reports",u:"47 minus 3 equals 44 reports."},
 {j:"pilih",t:"Which year is closest to the peak of the solar cycle in this data?",p:["2024","2019","2021","2022"],b:0,u:"The number of sunspots is highest in 2024."},
 {j:"pilih",t:"Why do reports of GPS disruption increase along with sunspots?",p:["More solar activity sends more charged particles to the Earth","More people buy phones every year","GPS satellites get heavier as time goes on","Sunspots directly block radio signals from the satellites"],b:0,u:"Many sunspots mean more flares and coronal mass ejections."},
 {j:"pilih",t:"A student predicts that the number of sunspots will keep rising for ever. Analyse the prediction.",p:["Not accurate, because solar activity repeats in a cycle","Accurate, because six years of data always increase","Accurate, because the Sun gets hotter every year","Not accurate, because sunspots cannot be counted"],b:0,u:"After the peak, the number of sunspots will fall again in a cycle of about 11 years."},
 {j:"pilih",t:"Based on this pattern, when do satellite operators most need to be alert?",p:["When the number of sunspots is at the peak of the cycle","When the number of sunspots is lowest","When a total lunar eclipse happens at night","During the monsoon season in Malaysia"],b:0,u:"Solar eruptions are most frequent around the peak of the cycle."},
 {j:"banyak",t:"Choose ALL the conclusions supported by the data.",p:["Solar activity rose from 2019 to 2024","GPS disruption is linked to solar activity","Ejections were most frequent in 2024","Sunspots are the direct cause of earthquakes","GPS disruption was reported only in the year 2024"],b:[0,1,2],u:"The data does not mention earthquakes, and GPS disruption was reported every year."},
 {j:"pilih",t:"In 2019 there were still 3 reports of GPS disruption even though sunspots were very few. The most reasonable explanation is:",p:["Disruption can also have other causes","The data for 2019 must be wrong and should be thrown out","Sunspots never cause disruption","GPS satellites did not yet exist in 2019"],b:0,u:"A relationship in the data does not mean solar activity is the only cause."}],
 bos:{j:"pilih",t:"An energy company wants to schedule major maintenance of a grid transformer. Based on the data, the most appropriate time is:",p:["When solar activity is low, such as around 2019","When solar activity is highest, such as in 2024","It does not matter because space weather does not affect the grid","When the number of coronal mass ejections is highest"],b:0,u:"The grid is more easily affected during solar storms, so major work is best done when the risk is low."}},

{n:5, tempat:"Warning Centre", sk:"9.2 Evaluating the effects of space weather", lampiran:"amaran",
 kadNama:"Satellite", kadEm:"\u{1F6F0}", kadFakta:"A satellite can be put into safe mode during a solar storm to protect its electronic components.",
 bosKadNama:"Power Grid", bosKadEm:"\u{26A1}", bosKadFakta:"A geomagnetic storm in 1989 cut the electricity supply in Quebec, Canada, for several hours.",
 soalan:[
 {j:"pilih",t:"A G3-level warning is issued. The most appropriate decision for deep-sea fishermen who rely on GPS is to:",p:["Prepare a compass and a map as a backup","Sail further north because the aurora helps navigation","Keep relying on GPS because satellites are protected by the magnetosphere","Postpone all voyages because G3 cuts off the power grid"],b:0,u:"The table shows that G3 is expected to disrupt GPS. Power grid failure is expected only at level G5."},
 {j:"pilih",t:"Evaluate the claim: \"Space weather is not important to Malaysia because the aurora cannot be seen here.\"",p:["Not accurate, because GPS and satellites here can still be affected","Accurate, because the only effect of space weather is the aurora","Accurate, because the magnetosphere is thickest above the equator","Not accurate, because the aurora is actually often seen in Malaysia"],b:0,u:"The aurora is only one of many effects. GPS satellites and radio signals pass through the upper atmosphere above every country."},
 {j:"pilih",t:"A G5 warning is expected within 24 hours. The most appropriate action for an electricity supply company is to:",p:["Monitor the grid and prepare steps to protect the transformers","Shut down the electricity supply of the whole country for a week","Raise the grid voltage so it resists induced current better","Carry on as usual because underground cables are not affected"],b:0,u:"Geomagnetic storms induce excess current in long lines, including underground cables. Early preparation protects the transformers without stopping the supply."},
 {j:"pilih",t:"A space agency must choose between (P) launching astronauts during a G5 warning, or (Q) postponing the launch for a few days. The most appropriate decision is:",p:["Q, because astronauts outside the atmosphere are less protected","P, because rockets are too fast to be hit by charged particles","P, because the magnetosphere fully protects astronauts in orbit","Q, because solar storms weaken the Earth's gravity for a while"],b:0,u:"In orbit, astronauts have no thick layer of atmosphere to protect them. Solar storms do not change gravity."},
 {j:"pilih",t:"Evaluate the suggestion: \"The country does not need to monitor space weather because it cannot be stopped.\"",p:["Not appropriate, because early warning allows preparation","Appropriate, because solar storms happen only once every 11 years","Appropriate, because the magnetosphere already protects all technology","Not appropriate, because monitoring can weaken solar storms"],b:0,u:"The 11-year cycle is the period of rising and falling activity, not how often storms happen. Like a rain forecast, space weather cannot be stopped but its effects can be reduced."},
 {j:"pilih",t:"Your school wants to see an aurora on a science trip. The most appropriate destination and time is:",p:["Norway, during high solar activity","The east coast of Malaysia on a clear night","Any country at a bright noon","The equatorial region when sunspots are fewest"],b:0,u:"An aurora is most frequent at high latitudes and during high solar activity, and it can only be seen in the dark."},
 {j:"banyak",t:"Choose ALL the appropriate steps to protect satellites from space weather.",p:["Fit shielding to the electronic components","Monitor space weather warnings every day","Put the satellite into safe mode during a solar storm","Launch satellites only at night","Paint the satellite a dark colour so charged particles are absorbed"],b:[0,1,2],u:"The colour of the paint does not stop charged particles. The time of launch does not change the exposure of a satellite in orbit."},
 {j:"pilih",t:"A student reads that a solar storm next week will heat the Earth's surface by 10 °C. Evaluate the claim.",p:["Unfounded, because solar storms affect the upper atmosphere, not the surface","Founded, because coronal mass ejections bring heat directly to the Earth","Founded, because sunspots make the Sun much hotter","Unfounded, because solar storms never reach the Earth"],b:0,u:"Solar storms heat the upper atmosphere and disturb the magnetic field and technology, but they do not raise the surface temperature of the Earth. Sunspots are actually cooler areas."}],
 bos:{j:"pilih",t:"The government can afford only ONE project this year. The most appropriate choice to reduce the effects of space weather is:",p:["An early warning system for electricity and aviation companies","A big telescope to photograph the aurora from Malaysia","A ban on GPS use throughout the peak year of the solar cycle","A new satellite in geostationary orbit with no shielding"],b:0,u:"Early warning protects many sectors at once. The aurora is rarely seen from Malaysia, and a year-long GPS ban affects everyone unnecessarily."}},

{n:6, tempat:"Space Station", sk:"9.2 Creating solutions for space weather",
 kadNama:"CubeSat", kadEm:"\u{1F4E6}", kadFakta:"A CubeSat is a small cube-shaped satellite with sides of about 10 cm that university students can build.",
 bosKadNama:"Astronaut", bosKadEm:"\u{1F680}", bosKadFakta:"During a strong solar storm, astronauts on the space station shelter in the more protected parts.",
 soalan:[
 {j:"pilih",t:"You design a space weather warning app for fishermen. The most important feature is:",p:["A short warning in simple language, with actions to take","A warning based only on the number of sunspots that day","A warning sent after GPS disruption is confirmed to have happened","A warning sent only in the peak year of the solar cycle"],b:0,u:"A warning is useful if it is understood and comes before the disruption. Solar storms can happen at any time in the cycle, not only in the peak year."},
 {j:"pilih",t:"You design a model to show the Earth's magnetic field lines. The most suitable material is:",p:["A bar magnet and iron filings","A plastic ball painted with coloured stripes","A compass placed on a globe","A balloon blown by a fan from one direction"],b:0,u:"Iron filings arrange themselves along the magnetic field lines. A single compass shows direction at one point only."},
 {j:"pilih",t:"You design shielding for the school's small satellite (CubeSat). The most important consideration is:",p:["Shielding that is effective but light enough to launch","Shielding as thick as possible regardless of mass","Lead shielding because lead stops all particles","No shielding because the magnetosphere fully protects low orbit"],b:0,u:"Every extra gram raises the launch cost. The magnetosphere reduces, but does not remove, charged particles in low orbit."},
 {j:"pilih",t:"You want to record solar activity every day at school. The safest and most meaningful method is:",p:["Project the image of the Sun onto paper and count the sunspots","Look at the Sun through sunglasses every morning","Record the number of auroras seen from the school","Measure the noon air temperature as a measure of solar activity"],b:0,u:"The daily count of sunspots is real space weather data. Sunglasses do not protect the retina, and air temperature is affected by the Earth's weather."},
 {j:"pilih",t:"How would you test whether your warning app really helps fishermen?",p:["Compare what fishermen do before and after the app","Count the number of times the app is downloaded in a month","Ask classmates whether the design of the app is attractive","Test the app on your own phone only"],b:0,u:"Success is measured by the change in real users' actions, not the number of downloads."},
 {j:"pilih",t:"The fishing community is not very skilled at using smartphones. The most appropriate modification is:",p:["Send warnings by SMS and community radio","Add more features so the app is more complete","Ask fishermen to check the agency's website every day","Send warnings through GPS because fishermen always use it"],b:0,u:"A GPS receiver only receives position signals and cannot receive messages. It is also affected during solar storms."},
 {j:"pilih",t:"You propose a sunspot observation project for schools across the state. The most effective way to collect reliable data is:",p:["Use the same method and record form in all schools","Let each school choose its own method","Collect data once a year during the peak of the cycle","Only schools with an expensive telescope take part"],b:0,u:"A uniform method allows the data to be compared. Data once a year misses the daily changes."},
 {j:"pilih",t:"Your poster about space weather will be displayed in a village. The most appropriate approach is:",p:["Link it to daily life, such as GPS and phones","Use English only so the terms are accurate","Fill the poster with complete physics formulae","Focus on pictures of the aurora because it is the most attractive"],b:0,u:"People care more when they see a link to their own lives. The aurora is attractive, but it is rarely seen from Malaysia."}],
 bos:{j:"buka",
  t:"The state government wants to protect the fishing community and GPS users from space weather disruption. Design a warning and education system suited to the communities in your state.",
  arahan:"Explain the solar phenomena that are monitored and their effects on the Earth, how warnings are delivered, the actions users should take, and how you take into account the cost, the language and the technology available to the community.",
  u:"A strong TP6 answer links solar activity to real effects, plans a warning channel that suits the community, and is realistic in terms of cost."}}
];

module.exports = {
  id:"t3b9", tingkatan:3, kod:"9.0 Space Weather",
  tajuk:"Solar Trail",
  subtajuk:"Science Form 3 · Chapter 9 Space Weather",
  spi:SPI,
  /* PBD comments by performance level. {n} is replaced with the student's first name. */
  ulasan:{
   1:"{n} can recall the structure of the Sun, the phenomena on its surface and the meaning of the magnetosphere. The next step is to explain the link between solar activity and its effects on the Earth.",
   2:"{n} understands the importance of the magnetosphere and the formation of auroras and disruption caused by space weather. More practice interpreting solar activity data is needed before moving on to TP3.",
   3:"{n} can apply knowledge of the structure of the Sun and space weather to explain phenomena and choose safe methods of observation. Encourage linking data to explanations.",
   4:"{n} is able to analyse solar cycle data to identify the relationship between sunspots, coronal mass ejections and technology disruption. Next, practise weighing evidence to make decisions.",
   5:"{n} can evaluate space weather warning levels and make sound decisions to protect people and technology. Ready for an invention task.",
   6:"{n} successfully designed a practical space weather warning and education system suited to the community. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Space Weather. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ graftompok:R_TOMPOK, auroraaliran:R_AURORA, lapisan:T_LAPISAN, kitaran:T_KITARAN, amaran:T_AMARAN },
  aras:ARAS
};
