/* English source (DLP) — Science KSSM Form 2, Chapter 12.0 The Solar System.
   Translation of sumber/t2b12.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t2b12` to check it and generate bank-en-t2b12.js.
   Structure must match sumber/t2b12.js exactly. Correct answer at index 0.
   1 a.u. is taken as 150 million km. Planet values are rounded estimates. The
   number of moons of Jupiter and Saturn is not asked because it is often updated. */

const SPI = [
"Recall the knowledge and science skills on the solar system.",
"Understand and explain the solar system.",
"Apply knowledge on the solar system and able to carry out simple tasks.",
"Analyse knowledge on the solar system in context of problem solving on events or natural phenomena.",
"Evaluate knowledge of the solar system in context of problem solving and decision making to carry out a task.",
"Design a task using knowledge and science skills on the solar system in a creative and innovative way in the context of problem solving and decision making or carry out a task in a new situation with regards to the social values/economy/culture of the community."];

/* ---------- attachments ---------- */

const R_SUHUPLANET = {
  "jenis": "graf",
  "mod": "palang",
  "grid": 5,
  "yMaks": 500,
  "bar": [
    { "label": "Mercury", "nilai": 167, "warna": "kuning" },
    { "label": "Venus", "nilai": 464, "warna": "merah" },
    { "label": "Earth", "nilai": 15, "warna": "hijau" }
  ],
  "xLabel": "Average surface temperature (°C)",
  "kapsyen": "Figure 1 · Average surface temperature of three inner planets.",
  "alt": "Bar graph of average surface temperature: Mercury 167 degrees Celsius, Venus 464, Earth 15"
};

const R_ORBIT = {
  "jenis": "graf",
  "mod": "palang",
  "grid": 4,
  "yMaks": 2,
  "bar": [
    { "label": "Mercury", "nilai": 0.24, "warna": "kuning" },
    { "label": "Venus", "nilai": 0.62, "warna": "merah" },
    { "label": "Earth", "nilai": 1, "warna": "hijau" },
    { "label": "Mars", "nilai": 1.88, "warna": "ungu" }
  ],
  "xLabel": "Orbital period (Earth years)",
  "kapsyen": "Figure 1 · Orbital period of four inner planets, arranged by distance from the Sun.",
  "alt": "Bar graph of orbital period that gets longer with distance: Mercury 0.24 years, Venus 0.62, Earth 1, Mars 1.88"
};

const T_JARAK =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Planet</th>'+
'<th class="n">Average distance from the Sun (a.u.)</th><th class="n">Time for one orbit (Earth years)</th></tr></thead><tbody>'+
'<tr><td>Mercury</td><td class="n">0.4</td><td class="n">0.24</td></tr>'+
'<tr><td>Venus</td><td class="n">0.7</td><td class="n">0.62</td></tr>'+
'<tr><td>Earth</td><td class="n">1.0</td><td class="n">1</td></tr>'+
'<tr><td>Mars</td><td class="n">1.5</td><td class="n">1.9</td></tr>'+
'<tr><td>Jupiter</td><td class="n">5.2</td><td class="n">11.9</td></tr>'+
'<tr><td>Saturn</td><td class="n">9.5</td><td class="n">29.5</td></tr>'+
'</tbody></table></div><p class="qnote">1 a.u. (astronomical unit) is the average distance from the Earth to the Sun, about 150 million km. Light takes about 8 minutes to travel 1 a.u.</p>';

const T_CIRI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Planet</th>'+
'<th class="n">Distance (a.u.)</th><th class="n">Average temperature (&deg;C)</th><th class="n">Density (g/cm&sup3;)</th><th class="n">Gravity (Earth = 1)</th><th>Atmosphere</th></tr></thead><tbody>'+
'<tr><td>Mercury</td><td class="n">0.4</td><td class="n">167</td><td class="n">5.4</td><td class="n">0.38</td><td>Almost none</td></tr>'+
'<tr><td>Venus</td><td class="n">0.7</td><td class="n">464</td><td class="n">5.2</td><td class="n">0.9</td><td>Very thick, mostly carbon dioxide</td></tr>'+
'<tr><td>Earth</td><td class="n">1.0</td><td class="n">15</td><td class="n">5.5</td><td class="n">1.0</td><td>Nitrogen and oxygen</td></tr>'+
'<tr><td>Mars</td><td class="n">1.5</td><td class="n">&minus;65</td><td class="n">3.9</td><td class="n">0.38</td><td>Thin, mostly carbon dioxide</td></tr>'+
'<tr><td>Jupiter</td><td class="n">5.2</td><td class="n">&minus;110</td><td class="n">1.3</td><td class="n">2.5</td><td>Hydrogen and helium</td></tr>'+
'<tr><td>Saturn</td><td class="n">9.5</td><td class="n">&minus;140</td><td class="n">0.7</td><td class="n">1.1</td><td>Hydrogen and helium</td></tr>'+
'</tbody></table></div><p class="qnote">Rounded estimates. Density of water = 1 g/cm&sup3;.</p>';

const T_KOLONI =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Destination</th>'+
'<th>Travel time</th><th>Surface temperature</th><th>Water</th><th>Atmosphere</th></tr></thead><tbody>'+
'<tr><td>The Moon</td><td>About 3 days</td><td>&minus;170 &deg;C to 120 &deg;C</td><td>Ice in polar craters</td><td>None</td></tr>'+
'<tr><td>Mars</td><td>About 7 months</td><td>Average &minus;65 &deg;C</td><td>Ice under the surface</td><td>Thin, cannot be breathed</td></tr>'+
'<tr><td>Venus</td><td>About 4 months</td><td>Average 464 &deg;C</td><td>None</td><td>Very thick, acidic</td></tr>'+
'</tbody></table></div><p class="qnote">Candidate locations for the first human base outside the Earth. Estimated values.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Solar System Model", sk:"12.1 Planets and units of astronomical distance", lampiran:"suhuplanet",
 kadNama:"Astronomical Unit", kadEm:"\u{1F4CF}", kadFakta:"One astronomical unit (a.u.) is the average distance from the Earth to the Sun, about 150 million kilometres.",
 bosKadNama:"Jupiter", bosKadEm:"\u{1FA90}", bosKadFakta:"Jupiter is the biggest planet. More than 1300 Earths could fit inside it.",
 soalan:[
 {j:"pilih",t:"The planet closest to the Sun is:",p:["Mercury","Venus","Earth","Mars"],b:0,u:"Mercury is about 0.4 a.u. from the Sun."},
 {j:"pilih",t:"The biggest planet in the Solar System is:",p:["Jupiter","Saturn","Earth","Neptune"],b:0,u:"Jupiter is a gas giant."},
 {j:"pilih",t:"A light year is:",p:["The distance light travels in a year","The time light takes to reach the Earth","The period of the Earth going round the Sun","The brightness of a star in a year"],b:0,u:"About 9.5 trillion kilometres."},
 {j:"pilih",t:"The planet known as the 'red planet' is:",p:["Mars","Venus","Jupiter","Mercury"],b:0,u:"Its soil contains iron oxide."},
 {j:"pilih",t:"The planet with the most obvious rings is:",p:["Saturn","Earth","Mars","Mercury"],b:0,u:"Its rings are made of ice and rock."},
 {j:"pilih",t:"The natural satellite of the Earth is:",p:["The Moon","The Sun","Mars","A comet"],b:0,u:"Mercury and Venus have no moons."},
 {j:"pilih",t:"Based on Figure 1, the hottest planet among these three is:",p:["Venus","Mercury","Earth","Mars"],b:0,u:"Venus is hotter than Mercury even though it is farther from the Sun."},
 {j:"banyak",t:"Choose ALL the features that make the Earth suitable for life.",p:["Water in liquid form","An atmosphere containing oxygen","A suitable distance from the Sun","An average surface temperature of 464 °C","No atmosphere around it at all"],b:[0,1,2],u:"A temperature of 464 °C is the temperature of Venus."}],
 bos:{j:"susun",t:"Arrange the planets by distance from the Sun, starting with the CLOSEST.",p:["Mercury","Venus","Earth","Mars","Jupiter"],b:[0,1,2,3,4],u:"After Jupiter come Saturn, Uranus and Neptune."}},

{n:2, tempat:"Simulation Room", sk:"12.1 Relationships between the features of planets and hypothetical situations", lampiran:"tempohorbit",
 kadNama:"Venus", kadEm:"\u{1F525}", kadFakta:"The thick atmosphere of Venus traps heat, making it hot enough to melt lead.",
 bosKadNama:"Phases of the Earth", bosKadEm:"\u{1F317}", bosKadFakta:"Astronauts on the Moon see the Earth go through phases, just as we see the phases of the Moon from the Earth.",
 soalan:[
 {j:"pilih",t:"Based on Figure 1, why do planets far from the Sun have longer orbital periods?",p:["Their orbits are longer and slower","Far planets are heavier than near planets","The Sun pushes far planets backwards","Far planets spin faster on their axes"],b:0,u:"The Sun's gravitational pull is weaker at a long distance."},
 {j:"pilih",t:"Why is Venus hotter than Mercury?",p:["Its thick atmosphere traps heat","Venus is closer to the Sun","Venus only has active volcanoes","Mercury has wide oceans"],b:0,u:"An extreme greenhouse effect takes place on Venus."},
 {j:"pilih",t:"If the Earth stopped spinning on its axis, what is most likely to happen?",p:["One side has a very long day","Day and night stay 12 hours each","The Earth stops going round the Sun","The Moon falls onto the Earth"],b:0,u:"Day and night happen because of the rotation of the Earth."},
 {j:"pilih",t:"From the Moon, the Earth looks:",p:["Round, with phases","Flat like a disc","Always dark","Smaller than a star"],b:0,u:"The part of the Earth lit by the Sun changes with position."},
 {j:"pilih",t:"The moons of Mars are small and irregular in shape. What is the most reasonable hypothesis about their origin?",p:["Asteroids captured by the gravity of Mars","Pieces of Earth thrown to Mars","Fragments of the Sun that have cooled","Small stars that fell into the orbit of Mars"],b:0,u:"One hypothesis is that Phobos and Deimos are asteroids captured by gravity."},
 {j:"pilih",t:"Why does the Earth have a temperature suitable for life?",p:["Its distance and atmosphere are suitable","It is the biggest planet","It has no atmosphere at all","It is the farthest planet"],b:0,u:"The Earth is in the habitable zone around the Sun."},
 {j:"pilih",t:"Venus and Uranus rotate in the opposite direction to most planets. This is considered an:",p:["Anomaly","Law of nature","Error in the data","Solar eclipse"],b:0,u:"An anomaly is a feature that does not follow the general pattern."},
 {j:"pilih",t:"Why can humans not yet move to another planet if the Earth's resources run out?",p:["No other suitable planet exists yet","All the other planets are smaller than the Moon","Other planets have no gravity at all","All the other planets are too close to the Sun"],b:0,u:"Looking after the Earth and reducing our ecological footprint is the most sensible option."}],
 bos:{j:"banyak",t:"Choose ALL the gas giant planets.",p:["Jupiter","Saturn","Neptune","Mars","Mercury"],b:[0,1,2],u:"Mars and Mercury are rocky planets. Uranus is also a gas giant."}},

{n:3, tempat:"Navigation Station", sk:"12.1 Calculating distance using a.u. and light years", lampiran:"jarak",
 kadNama:"8 Light-Minutes", kadEm:"\u{2600}", kadFakta:"If the Sun suddenly went out, we would only notice after about 8 minutes.",
 bosKadNama:"Voyager 1", bosKadEm:"\u{1F6F0}", bosKadFakta:"The Voyager 1 spacecraft, launched in 1977, is now more than 160 a.u. from the Sun.",
 soalan:[
 {j:"nombor",t:"What is the distance of Jupiter from the Sun, in million km?",b:780,tol:0.5,suf:"million km",u:"5.2 × 150 = 780 million km."},
 {j:"nombor",t:"What is the distance of Mars from the Sun, in million km?",b:225,tol:0.5,suf:"million km",u:"1.5 × 150 = 225 million km."},
 {j:"nombor",t:"About how many minutes does sunlight take to reach Saturn?",b:76,tol:0.03,suf:"minutes",u:"9.5 × 8 = 76 minutes."},
 {j:"pilih",t:"Which planets go round the Sun in less than one Earth year?",p:["Mercury and Venus","Mars and Jupiter","Jupiter and Saturn","Earth and Mars"],b:0,u:"Their orbital periods are 0.24 and 0.62 years."},
 {j:"nombor",t:"A student is 13 Earth years old. What is the age in Jupiter years?",b:1.09,tol:0.03,suf:"years",u:"13 ÷ 11.9 ≈ 1.09 Jupiter years."},
 {j:"pilih",t:"Why is the unit a.u. more suitable than the kilometre for distances in the Solar System?",p:["The numbers become smaller and easy to compare","Kilometres cannot be used in space","The unit a.u. is more accurate than the kilometre","All the planets are exactly 1 a.u. away"],b:0,u:"Writing 780 million km compared with 5.2 a.u. is more complicated."},
 {j:"pilih",t:"Why is the light year used for the distance to stars, not the a.u.?",p:["The distances to stars are too great","Stars are closer than planets","Light does not travel in space","The unit a.u. is only for the Moon"],b:0,u:"The nearest star is about 270 000 a.u. from the Sun."},
 {j:"pilih",t:"What is the distance between the orbit of the Earth and the orbit of Mars if both are on the same side of the Sun?",p:["0.5 a.u.","About 2.5 a.u.","About 1.5 a.u.","About 1.0 a.u."],b:0,u:"1.5 − 1.0 = 0.5 a.u."}],
 bos:{j:"nombor",t:"A radio signal travels at the speed of light. What is the time for a signal from the Earth to reach a spacecraft at Jupiter when the distance between them is 4.2 a.u., in minutes?",b:33.6,tol:0.03,suf:"minutes",u:"4.2 × 8 = 33.6 minutes."}},

{n:4, tempat:"Planet Comparison Lab", sk:"12.1 Analysing the relationships between planet features and anomalies", lampiran:"ciri",
 kadNama:"Saturn", kadEm:"\u{1FA90}", kadFakta:"The density of Saturn is less than that of water. If there were an ocean big enough, Saturn would float.",
 bosKadNama:"Habitable Zone", bosKadEm:"\u{1F30E}", bosKadFakta:"The habitable zone is the region around a star where the temperature allows water to exist as a liquid.",
 soalan:[
 {j:"pilih",t:"In general, what is the relationship between distance from the Sun and the temperature of a planet?",p:["The farther, the cooler","The farther, the hotter","No relationship","The closer, the cooler"],b:0,u:"Far planets receive less solar energy."},
 {j:"pilih",t:"Which planet is an anomaly in the relationship between distance and temperature?",p:["Venus","Mercury","Mars","Saturn"],b:0,u:"Venus is farther than Mercury but hotter."},
 {j:"pilih",t:"Which planet is less dense than water?",p:["Saturn","Jupiter","Mars","Earth"],b:0,u:"0.7 g/cm³, less than 1 g/cm³."},
 {j:"pilih",t:"Mercury and Mars have the same gravity even though Mars is bigger. What is the most reasonable explanation?",p:["Mercury is denser","Mars is denser","Mercury is farther away","Mars is hotter"],b:0,u:"Gravity depends on mass and size; Mercury is smaller but denser."},
 {j:"pilih",t:"The rocky planets in the table have a density that is:",p:["Higher than the gas giants","Lower than the gas giants","The same as the gas giants","Less than water"],b:0,u:"Mercury, Venus, Earth and Mars are made of rock and metal."},
 {j:"nombor",t:"An astronaut weighs 600 N on the Earth. What is the weight on Jupiter, in newtons?",b:1500,tol:0.5,suf:"N",u:"600 × 2.5 = 1500 N."},
 {j:"nombor",t:"What is the weight of the same astronaut on Mars, in newtons?",b:228,tol:0.5,suf:"N",u:"600 × 0.38 = 228 N."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["A thick atmosphere heats up a planet","Gas giants are less dense","Only the Earth has an atmosphere of nitrogen and oxygen","All the far planets are denser","The gravity of all the planets is the same as the Earth's"],b:[0,1,2],u:"The densities of Jupiter and Saturn are lower."}],
 bos:{j:"pilih",t:"A student claims that Mercury must be the hottest planet because it is the closest to the Sun. Evaluate the claim.",p:["Wrong; Venus is hotter because of its atmosphere","Correct; distance is the only factor in temperature","Correct; Mercury has the thickest atmosphere","Wrong; Saturn is the hottest of all the planets"],b:0,u:"Mercury has almost no atmosphere to trap heat."}},

{n:5, tempat:"Space Agency", sk:"12.1 Evaluating the suitability of planets for exploration", lampiran:"koloni",
 kadNama:"Mars", kadEm:"\u{1F534}", kadFakta:"Rover robots such as Perseverance are studying the soil of Mars to look for signs of ancient life.",
 bosKadNama:"Ecological Footprint", bosKadEm:"\u{1F463}", bosKadFakta:"The ecological footprint measures how much of the Earth's resources a person or a country uses.",
 soalan:[
 {j:"pilih",t:"Which destination is the closest in travel time?",p:["The Moon","Mars","Venus","All the same"],b:0,u:"About 3 days."},
 {j:"pilih",t:"Why is Venus the least suitable for a human base?",p:["Too hot and acidic","Too far from the Earth","Too cold for humans","No gravity at all"],b:0,u:"A temperature of 464 °C and an acidic atmosphere destroy equipment."},
 {j:"pilih",t:"What is the main advantage of Mars over the Moon for long-term settlement?",p:["A thin atmosphere and ice","A shorter travel time","A temperature hotter than Earth's","Air that can be breathed directly"],b:0,u:"A thin atmosphere gives a little protection, and ice is a source of water and oxygen."},
 {j:"pilih",t:"What is the main advantage of the Moon as a first step?",p:["Close and easy to help","Air that can be breathed","A temperature that is always comfortable","Flowing rivers"],b:0,u:"Help and supplies can arrive in a few days."},
 {j:"pilih",t:"An agency wants to test settlement technology before a distant mission. What is the most appropriate decision?",p:["Test on the Moon first, then go to Mars","Go straight to Venus because it is closer than Mars","Go straight to Mars with no tests","Cancel all space missions"],b:0,u:"The Moon allows tests at lower risk."},
 {j:"pilih",t:"A politician suggests settlement on Mars as the way out when the Earth is ruined. Evaluate the suggestion.",p:["Not appropriate; looking after the Earth is far more practical","Very appropriate because Mars is just like the Earth","Appropriate because everyone can move easily","Not appropriate because Mars is hotter than Venus"],b:0,u:"Mars is very cold and its air cannot be breathed; the cost of moving people is very high."},
 {j:"pilih",t:"Why is water important in choosing a base location?",p:["Water is needed for drinking and oxygen","Water makes a planet heavier","Water is needed to produce gravity","Water makes the journey faster"],b:0,u:"Electrolysis of water produces oxygen and hydrogen."},
 {j:"pilih",t:"The main problem of a base on the Moon, which has no atmosphere, is:",p:["No protection from radiation","Too much rain","Too much oxygen","Strong winds every day"],b:0,u:"A base may need to be built underground."}],
 bos:{j:"pilih",t:"Malaysia wants to join an international mission to the Moon with a limited budget. What is the most appropriate contribution?",p:["A small science instrument or a satellite","Build its own giant rocket immediately","Send astronauts without training","Do not take part at all"],b:0,u:"A specific, small-scale contribution is more realistic for a limited budget."}},

{n:6, tempat:"National Science Centre", sk:"12.1 Creating using knowledge of the Solar System",
 kadNama:"Scale Model", kadEm:"\u{1F3D0}", kadFakta:"If the Sun were as big as a football in the middle of a field, the Earth would be only the size of a peppercorn about 25 m away.",
 bosKadNama:"Space Habitat", bosKadEm:"\u{1F3E0}", bosKadFakta:"A space habitat must recycle air and water because supplies from the Earth are very expensive.",
 soalan:[
 {j:"pilih",t:"You build a model of the Solar System on the school field. What is the hardest thing to show accurately?",p:["Size and distance on the same scale","The real colour of each planet's surface","The scientific name of each planet","The order of the planets from the Sun"],b:0,u:"The distances are huge compared with the sizes of the planets."},
 {j:"pilih",t:"You design a habitat for astronauts on Mars. What is the most important feature?",p:["Airtight walls and radiation shielding","Big glass windows with no protection","An open swimming pool outside","A flower garden on the surface with no shelter"],b:0,u:"The thin atmosphere cannot be breathed and gives little protection from radiation."},
 {j:"pilih",t:"You design a water system for a base on the Moon. What is the most practical source?",p:["Melt polar ice and recycle it","Bring all the water needed from the Earth","Wait for rain on the Moon","Take water from a river on the Moon"],b:0,u:"Bringing water from the Earth is very expensive."},
 {j:"pilih",t:"You design a board game about the Solar System. Which challenge is most suitable for the concept of gravity?",p:["Calculate players' weight on different planets","Memorise the names of all the moons","Colour the planets by favourite colour","Count the number of stars in the sky"],b:0,u:"Weight changes with the gravity of the planet."},
 {j:"pilih",t:"You suggest a campaign to reduce the ecological footprint at school. What is the most effective idea?",p:["Reduce waste and electricity","Print more paper every week","Use single-use plastic","Leave the lights on"],b:0,u:"Looking after the Earth is more important than finding a new planet."},
 {j:"pilih",t:"You design a calendar for Mars residents. What is the most important thing to take into account?",p:["A Mars year is nearly 2 Earth years","Mars has no day and night","A Mars year is the same as the Earth's","Mars does not go round the Sun"],b:0,u:"The orbital period of Mars is about 1.9 Earth years."},
 {j:"pilih",t:"You design a device to show why far planets are colder. What is the most effective demonstration?",p:["Measure the temperature at different distances","Colour balls with different paints","Weigh balls of various sizes","Spin a ball in the dark"],b:0,u:"The energy received decreases as the distance from the source increases."},
 {j:"pilih",t:"How would you evaluate your Solar System model?",p:["Check the ratios against the real data","Ask a friend whether the model is colourful","Weigh the model on a balance","Count the paint used"],b:0,u:"The accuracy of the scale is a measure of the quality of a science model."}],
 bos:{j:"buka",
  t:"The national science centre wants an interactive exhibition that shows why the Earth is the most suitable planet for life. Design the exhibition.",
  arahan:"Describe the design of the exhibition, the planet data used (distance, temperature, atmosphere, gravity or density), how visitors interact with it, how the scale of distance or size is shown clearly, how visitors' understanding is measured, and the cost and the message about sustainable living.",
  u:"A strong TP6 answer uses planet data correctly to compare with the Earth, shows scale creatively, and links the exhibition to the sustainability of the Earth."}}
];

module.exports = {
  id:"t2b12", tingkatan:2, kod:"12.0 The Solar System",
  tajuk:"Planet Trail",
  subtajuk:"Science Form 2 · Chapter 12 The Solar System",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the order of the planets, the units a.u. and light year, and the features of the Earth that suit life. The next step is to explain the relationships between the features of planets.",
   2:"{n} understands the relationships between the features of planets and can explain hypothetical situations in the Solar System. More practice is needed in converting units of distance.",
   3:"{n} can convert distances in a.u. to kilometres and calculate the travel time of light. Encourage showing the steps of the calculation.",
   4:"{n} is able to analyse planet data to identify patterns and anomalies such as Venus and Saturn. Next, practise evaluating the suitability of planets for exploration.",
   5:"{n} can evaluate exploration locations based on data and make sound decisions. Ready for a creative task.",
   6:"{n} successfully created an accurate, creative and meaningful Solar System exhibition or design. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter The Solar System. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ suhuplanet:R_SUHUPLANET, tempohorbit:R_ORBIT, jarak:T_JARAK, ciri:T_CIRI, koloni:T_KOLONI },
  aras:ARAS
};
