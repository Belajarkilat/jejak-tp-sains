/* English source (DLP) — Science KSSM Form 2, Chapter 11.0 Stars and Galaxies
   in the Universe. Translation of sumber/t2b11.js.
   Run `node bina.js --en t2b11` to check it and generate bank-en-t2b11.js.
   Structure must match sumber/t2b11.js exactly. Correct answer at index 0.
   Temperatures and distances of stars in the attachments are rounded estimates. */

const SPI = [
"Recall knowledge and skills about stars and galaxies in the universe.",
"Understand stars and galaxies in the universe and be able to explain this understanding.",
"Apply knowledge of stars and galaxies in the universe and be able to carry out simple tasks.",
"Analyse knowledge about stars and galaxies in the universe in the context of solving problems about natural events or phenomena.",
"Evaluate knowledge about stars and galaxies in the universe in the context of problem solving and decision making to carry out a task.",
"Create using scientific knowledge and skills about stars and galaxies in the universe in the context of problem solving and decision making, or in carrying out a task in a new situation in a creative and innovative way, taking into account the social / economic / cultural values of society."];

/* ---------- attachments ---------- */

const R_SUHUBINTANG = {
  "jenis": "graf",
  "mod": "palang",
  "grid": 5,
  "yMaks": 25000,
  "bar": [
    { "label": "Red", "nilai": 3000, "warna": "merah" },
    { "label": "Yellow", "nilai": 5800, "warna": "kuning" },
    { "label": "White", "nilai": 10000, "warna": "hijau" },
    { "label": "Blue", "nilai": 25000, "warna": "ungu" }
  ],
  "xLabel": "Surface temperature (K)",
  "kapsyen": "Figure 1 · Surface temperature of stars by their colour.",
  "alt": "Bar graph of the surface temperature of stars: red 3000 kelvin, yellow 5800, white 10000, blue 25000"
};

const R_BIMASAKTI = {
  "jenis": "struktur",
  "mod": "label",
  "tinggiLukis": 150,
  "bahagian": [
    {
      "label": "Milky Way",
      "bentuk": "bulat",
      "x": 50,
      "y": 50,
      "r": 44,
      "isi": "kertas2",
      "garis": "garis2",
      "anchorX": 50,
      "anchorY": 6
    },
    {
      "label": "Galactic core",
      "bentuk": "bulat",
      "x": 50,
      "y": 50,
      "r": 11,
      "isi": "kuning",
      "garis": "kuning"
    },
    {
      "label": "Solar System",
      "bentuk": "bulat",
      "x": 34,
      "y": 76,
      "r": 4,
      "isi": "merah",
      "garis": "merah"
    }
  ],
  "kapsyen": "Figure 1 · The position of the Solar System in the Milky Way galaxy.",
  "alt": "A large circle represents the Milky Way with a bright core in the middle, and one small dot for the Solar System far from the centre, in the outer part of the galaxy"
};

const T_BINTANG =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Star</th>'+
'<th>Colour</th><th class="n">Surface temperature (&deg;C)</th><th class="n">Distance from Earth (light years)</th></tr></thead><tbody>'+
'<tr><td>Rigel</td><td>Bluish white</td><td class="n">11 000</td><td class="n">860</td></tr>'+
'<tr><td>Sirius</td><td>White</td><td class="n">9 700</td><td class="n">8.6</td></tr>'+
'<tr><td>The Sun</td><td>Yellow</td><td class="n">5 500</td><td class="n">0.000016</td></tr>'+
'<tr><td>Betelgeuse</td><td>Red</td><td class="n">3 300</td><td class="n">550</td></tr>'+
'<tr><td>Proxima Centauri</td><td>Red</td><td class="n">2 800</td><td class="n">4.2</td></tr>'+
'</tbody></table></div><p class="qnote">Rounded estimates. Sirius is the brightest star in the night sky.</p>';

const T_KITAR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Star</th>'+
'<th class="n">Mass (times the mass of the Sun)</th><th>Current stage</th></tr></thead><tbody>'+
'<tr><td>X</td><td class="n">1</td><td>Main sequence star</td></tr>'+
'<tr><td>Y</td><td class="n">15</td><td>Red supergiant</td></tr>'+
'<tr><td>Z</td><td class="n">1.2</td><td>Red giant</td></tr>'+
'</tbody></table></div><p class="qnote">A medium-sized star like the Sun: red giant &rarr; planetary nebula &rarr; white dwarf. A very massive star: red supergiant &rarr; supernova &rarr; neutron star or black hole.</p>';

const T_CERAP =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Location</th>'+
'<th>Light pollution</th><th class="n">Height (m)</th><th class="n">Clear nights a year</th><th>Road access</th></tr></thead><tbody>'+
'<tr><td>P: Edge of a big city</td><td>High</td><td class="n">50</td><td class="n">90</td><td>Very easy</td></tr>'+
'<tr><td>Q: Hilltop on an island</td><td>Low</td><td class="n">700</td><td class="n">150</td><td>Winding road</td></tr>'+
'<tr><td>R: Lowland in a village</td><td>Moderate</td><td class="n">30</td><td class="n">110</td><td>Easy</td></tr>'+
'</tbody></table></div><p class="qnote">Three candidate locations for a new observatory. Fictional data.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Planetarium", sk:"11.1 Celestial objects and the characteristics of stars", lampiran:"suhubintang",
 kadNama:"Milky Way", kadEm:"\u{1F30C}", kadFakta:"The Milky Way galaxy contains more than 100 billion stars, and the Sun is just one of them.",
 bosKadNama:"Nebula", bosKadEm:"\u{2601}", bosKadFakta:"A nebula is a huge cloud of gas and dust where new stars are formed.",
 soalan:[
 {j:"pilih",t:"The star closest to the Earth is:",p:["The Sun","Sirius","Proxima Centauri","Rigel"],b:0,u:"Proxima Centauri is the nearest star after the Sun."},
 {j:"pilih",t:"A group of billions of stars, gas and dust is called a:",p:["Galaxy","Nebula","Planet","Comet"],b:0,u:"An example is the Milky Way galaxy."},
 {j:"pilih",t:"The type of the Milky Way galaxy is:",p:["Spiral","Elliptical","Irregular","Round"],b:0,u:"The Solar System is on one of its spiral arms."},
 {j:"pilih",t:"Based on Figure 1, the hottest stars are coloured:",p:["Blue","Red","Yellow","Orange"],b:0,u:"Red stars are the coolest."},
 {j:"pilih",t:"Stars produce light and heat through:",p:["Nuclear reactions","Burning wood","Reflection of light","Friction of wind"],b:0,u:"Hydrogen is fused into helium in the core of a star."},
 {j:"pilih",t:"The place where new stars are born is a:",p:["Nebula","Black hole","Planet","Moon"],b:0,u:"Gravity pulls the gas and dust in a nebula together into stars."},
 {j:"pilih",t:"The colour of the Sun is:",p:["Yellow","Blue","Red","Purple"],b:0,u:"The Sun is a medium-sized star."},
 {j:"banyak",t:"Choose ALL the features used to compare stars.",p:["Temperature","Colour","Brightness","Number of planets it has","Name given by humans"],b:[0,1,2],u:"Size and distance are also used."}],
 bos:{j:"susun",t:"Arrange in order of size, starting with the SMALLEST.",p:["Earth","The Sun","Solar System","Milky Way galaxy","Universe"],b:[0,1,2,3,4],u:"The Sun is bigger than the Earth, but the Solar System includes all the planets."}},

{n:2, tempat:"Observatory", sk:"11.1 The life cycle of stars and the position of the Solar System", lampiran:"bimasakti",
 kadNama:"Supernova", kadEm:"\u{1F4A5}", kadFakta:"A supernova is the explosion of a massive star that can shine brighter than its whole galaxy for a few weeks.",
 bosKadNama:"Light Year", bosKadEm:"\u{1F4AB}", bosKadFakta:"Light from the Sun takes about 8 minutes to reach the Earth.",
 soalan:[
 {j:"pilih",t:"Why does the Sun look much bigger and brighter than other stars?",p:["It is much closer to the Earth","It is the biggest star in the universe","It is the hottest star in the galaxy","It is the only star that shines"],b:0,u:"Many other stars are actually bigger than the Sun."},
 {j:"pilih",t:"A star like the Sun will end its life as a:",p:["White dwarf","Black hole","Supernova","Neutron star"],b:0,u:"The Sun is not massive enough to explode as a supernova."},
 {j:"pilih",t:"A very massive star can end its life as a:",p:["Black hole","White dwarf","Planetary nebula only","New planet"],b:0,u:"After a supernova, the remaining core becomes a neutron star or a black hole."},
 {j:"pilih",t:"Based on Figure 1, where is the Solar System in the Milky Way?",p:["On one of the spiral arms","Exactly at the centre of the galaxy","Completely outside the galaxy","In the middle of a black hole"],b:0,u:"About 26 000 light years from the centre of the galaxy."},
 {j:"pilih",t:"The star that looks brightest in the night sky:",p:["Is not necessarily the biggest","Is always the biggest star","Is surely the hottest star","Is certainly the farthest star"],b:0,u:"The brightness seen depends on size, temperature and distance."},
 {j:"pilih",t:"A light year is a unit of:",p:["Distance","Time","Brightness","Mass"],b:0,u:"It is the distance light travels in a year."},
 {j:"pilih",t:"Why do stars look like tiny points even though they are very large?",p:["They are very far away","Their real size is very small","The atmosphere makes them smaller","Stars appear only at night"],b:0,u:"Distant objects look small."},
 {j:"pilih",t:"The Andromeda galaxy is the nearest large spiral galaxy to the Milky Way. The light from it that we see today:",p:["Set out millions of years ago","Set out yesterday","Set out eight minutes ago","Set out exactly when we look"],b:0,u:"Andromeda is about 2.5 million light years from the Earth."}],
 bos:{j:"susun",t:"Arrange the life cycle of a Sun-sized star in order.",p:["Nebula","Main sequence star","Red giant","Planetary nebula","White dwarf"],b:[0,1,2,3,4],u:"The Sun is now at the main sequence stage."}},

{n:3, tempat:"Club Telescope", sk:"11.1 Comparing the characteristics of stars", lampiran:"bintang",
 kadNama:"Betelgeuse", kadEm:"\u{1F534}", kadFakta:"Betelgeuse is a red supergiant star in the constellation Orion. If it were put in the place of the Sun, its surface would go beyond the orbit of Mars.",
 bosKadNama:"Sirius", bosKadEm:"\u{2B50}", bosKadFakta:"Sirius looks the brightest in the night sky because it is fairly close and hotter than the Sun.",
 soalan:[
 {j:"pilih",t:"Based on the table, which star is the hottest?",p:["Rigel","Sirius","The Sun","Betelgeuse"],b:0,u:"11 000 °C, bluish white."},
 {j:"pilih",t:"Which star is the coolest?",p:["Proxima Centauri","Betelgeuse","The Sun","Sirius"],b:0,u:"2800 °C, red."},
 {j:"pilih",t:"What is the relationship between the colour of a star and its temperature?",p:["The bluer, the hotter","The redder, the hotter","Colour is not related to temperature","Yellow stars are the hottest"],b:0,u:"The order from hot to cool: blue, white, yellow, orange, red."},
 {j:"pilih",t:"Which star is the farthest from the Earth?",p:["Rigel","Betelgeuse","Sirius","Proxima Centauri"],b:0,u:"860 light years."},
 {j:"pilih",t:"Rigel looks bright even though it is very far away. What is the most reasonable conclusion?",p:["Rigel is actually very big and bright","Rigel is closer than Sirius","Rigel is the coolest star","Rigel reflects the light of the Sun"],b:0,u:"A distant but bright star must give out a huge amount of energy."},
 {j:"nombor",t:"How many years does the light from Sirius take to reach the Earth?",b:8.6,tol:0.01,suf:"years",u:"The distance is 8.6 light years, so the light takes 8.6 years."},
 {j:"pilih",t:"Proxima Centauri is closer than Sirius but cannot be seen with the naked eye. What is the most reasonable reason?",p:["It is small and dim","It is too hot to be seen","It is in another galaxy","It gives out no light"],b:0,u:"Proxima is a dim red dwarf star."},
 {j:"banyak",t:"Choose ALL the CORRECT statements based on the table.",p:["The Sun is hotter than Betelgeuse","The red stars in the table are the coolest","Sirius is closer than Rigel","Betelgeuse is the hottest of all the stars","Proxima Centauri is the farthest from the Earth"],b:[0,1,2],u:"Rigel is the hottest and the farthest."}],
 bos:{j:"pilih",t:"A student claims that the brightest star in the sky is the hottest star. Evaluate the claim based on the data.",p:["Not accurate; Rigel is hotter than Sirius","Accurate; Sirius is the hottest in the table","Accurate; all bright stars are red","Not accurate; bright stars are always the coolest"],b:0,u:"Brightness also depends on distance and size."}},

{n:4, tempat:"Astrophysics Centre", sk:"11.1 Analysing the life cycle of stars", lampiran:"kitar",
 kadNama:"White Dwarf", kadEm:"\u{26AA}", kadFakta:"A white dwarf is the core of a dead star. It is about the size of the Earth but is very dense.",
 bosKadNama:"Black Hole", bosKadEm:"\u{26AB}", bosKadFakta:"The gravity of a black hole is so strong that not even light can escape from it.",
 soalan:[
 {j:"pilih",t:"Which star is most likely to produce a supernova?",p:["Y","X","Z","All the same"],b:0,u:"Only a very massive star explodes as a supernova."},
 {j:"pilih",t:"What is the next stage for star Z?",p:["Planetary nebula","Supernova","Black hole","New nebula"],b:0,u:"Z is medium-sized and has already become a red giant."},
 {j:"pilih",t:"The most likely final stage of star X is a:",p:["White dwarf","Black hole","Neutron star","Red supergiant"],b:0,u:"X has the same mass as the Sun."},
 {j:"pilih",t:"What is the main factor that decides how a star ends its life?",p:["The mass of the star","The colour of the star at birth","The distance of the star from the Earth","The name of the star"],b:0,u:"A more massive star goes through different stages."},
 {j:"pilih",t:"Star Y is at the red supergiant stage. Predict its next stage.",p:["Supernova","White dwarf","Planetary nebula","Main sequence again"],b:0,u:"A very large red supergiant explodes as a supernova."},
 {j:"pilih",t:"Why do bigger stars live shorter lives even though they have more fuel?",p:["They burn their fuel much faster","They have less fuel","They are too cool to keep shining","They are farther from the centre of the galaxy"],b:0,u:"Strong gravity makes the core very hot, so nuclear reactions happen faster."},
 {j:"pilih",t:"Heavy elements such as gold and iron in our bodies and the Earth are believed to come from:",p:["Explosions of massive stars","Volcanoes on Earth","Reactions in the sea","Factories in ancient times"],b:0,u:"We are built from elements that formed inside stars."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the information in the table.",p:["Mass decides a star's end","X and Z become white dwarfs","Y may end as a black hole","All stars end as black holes","Star Z will explode as a supernova"],b:[0,1,2],u:"Z is too small for a supernova."}],
 bos:{j:"pilih",t:"How can astronomers study the life cycle of stars even though one cycle takes billions of years?",p:["They observe many stars at different stages","They observe one star for billions of years","They create stars in a laboratory","They guess without any observations"],b:0,u:"It is like studying many people of different ages to understand the human life cycle."}},

{n:5, tempat:"Observatory Committee", sk:"11.1 Evaluating locations for observing stars", lampiran:"cerap",
 kadNama:"Light Pollution", kadEm:"\u{1F303}", kadFakta:"Bright city lights make most stars invisible from urban areas.",
 bosKadNama:"Langkawi Observatory", bosKadEm:"\u{1F52D}", bosKadFakta:"Malaysia has observatories in several places, including Langkawi, for astronomical observations and sighting the new moon.",
 soalan:[
 {j:"pilih",t:"Which location has the least light pollution?",p:["Q","P","R","All the same"],b:0,u:"Q is on a hilltop on an island."},
 {j:"pilih",t:"Which location has the most clear nights?",p:["Q","P","R","All the same"],b:0,u:"150 nights a year."},
 {j:"pilih",t:"Why is the height of a location important for an observatory?",p:["Less hazy air above the observer","Significantly closer to the stars","The temperature is hotter for the telescope","There is less noise at high places"],b:0,u:"The air at high places is thinner and cleaner."},
 {j:"pilih",t:"The main weakness of location P is:",p:["High light pollution","Too high above sea level","No roads","Too many clear nights"],b:0,u:"City lights drown out dim stars."},
 {j:"pilih",t:"The council wants an observatory for serious research. What is the most appropriate choice?",p:["Q","P","R","Build at all three locations"],b:0,u:"The best observations even though access is harder."},
 {j:"pilih",t:"The council wants an astronomy centre for school student visits in the evening. What is the most appropriate choice?",p:["R","Q","P","None"],b:0,u:"R is easy to reach with moderate light pollution, suitable for education."},
 {j:"pilih",t:"A council member suggests location P because it is the easiest to visit. Evaluate the suggestion for research.",p:["Not suitable; city light spoils observations","Very suitable because access is the easiest","Suitable because it is the highest","Not suitable because there are too many clear nights"],b:0,u:"Ease of access does not replace the quality of the sky."},
 {j:"pilih",t:"The most effective way to reduce light pollution around the new observatory is:",p:["Street lights that point downwards","Adding brighter street lights","Installing neon lights around the observatory","Leaving the lights on all night"],b:0,u:"Shielded lights reduce the light scattered into the sky."}],
 bos:{j:"pilih",t:"The state government can afford to build only one observatory to be used by researchers and students. What is the most appropriate decision?",p:["Q, with a transport programme for students","P, because it is near city schools","R, even though observation quality is moderate","Build nothing"],b:0,u:"The quality of the sky matters most; the access problem can be solved with transport."}},

{n:6, tempat:"Space Carnival", sk:"11.1 Creating using knowledge of stars and galaxies",
 kadNama:"Constellation", kadEm:"\u{2728}", kadFakta:"A constellation is a pattern of stars seen from the Earth. Malay sailors in the past used the stars to find their direction.",
 bosKadNama:"Stellarium", bosKadEm:"\u{1F4BB}", bosKadFakta:"Free software such as Stellarium shows the positions of the stars in the sky from any location and time.",
 soalan:[
 {j:"pilih",t:"You design a model of the Milky Way galaxy for an exhibition. What is the most accurate shape?",p:["A spiral disc","A solid round ball","A colourful cube","A straight line of stars"],b:0,u:"The Milky Way is a spiral galaxy."},
 {j:"pilih",t:"You design a poster on the life cycle of stars. What is the clearest way to show two paths?",p:["A branching flow chart","One list with no order","A picture of one star only","A table of star colours only"],b:0,u:"A branching chart shows the paths of medium-sized stars and massive stars."},
 {j:"pilih",t:"You plan a star-watching night at school. What is the most suitable time?",p:["A dark night with no Moon","A bright full-moon night","A bright sunny day","A night of heavy rain"],b:0,u:"Full-moon light drowns out dim stars."},
 {j:"pilih",t:"You design a scale model of distance to show how far away the stars are. What is the most effective approach?",p:["Use a scale of the travel time of light","Put all the stars at the same distance","Use the same size for the stars","Use the same colour for all the stars"],b:0,u:"The travel time of light helps to picture very great distances."},
 {j:"pilih",t:"You suggest a way for city students to see more stars. What is the most practical suggestion?",p:["Turn off outdoor lights","Install brighter lights on the field","Observe stars at noon","Use car mirrors to see stars"],b:0,u:"Reducing local light improves the visibility of stars."},
 {j:"pilih",t:"You design a star card game. Which feature is most meaningful to compare?",p:["Temperature, colour and distance","Name and date of discovery only","Price of a telescope","Number of letters in the name"],b:0,u:"These are scientific features that can be compared."},
 {j:"pilih",t:"You want to link astronomy with local culture. What is the most suitable idea?",p:["Study how sailors in the past used stars","Copy a foreign astronomy book without change","Ignore local knowledge","Just show pictures from the internet"],b:0,u:"Malay communities in the past used the positions of the stars for sailing and planting seasons."},
 {j:"pilih",t:"How would you evaluate whether your space exhibition is successful?",p:["Test visitors' understanding before and after","Count the number of balloons used","Ask whether the exhibition is colourful","Measure the size of the exhibition hall"],b:0,u:"A change in understanding shows that the exhibition is effective."}],
 bos:{j:"buka",
  t:"Your school wants to attract students' interest in astronomy even though it is in a bright urban area. Design a project, exhibition or tool to introduce stars and galaxies.",
  arahan:"Describe your design, the concepts shown (characteristics of stars, the life cycle of stars or the position of the Solar System in the Milky Way), how to overcome light pollution or use technology, how the success of the project is measured, and the cost and links to local culture.",
  u:"A strong TP6 answer explains the characteristics and life cycle of stars correctly, overcomes the limitation of light pollution creatively, and plans realistic evaluation."}}
];

module.exports = {
  id:"t2b11", tingkatan:2, kod:"11.0 Stars and Galaxies in the Universe",
  tajuk:"Galaxy Trail",
  subtajuk:"Science Form 2 · Chapter 11 Stars and Galaxies",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the meaning of star, galaxy and nebula and the types of galaxies. The next step is to explain the life cycle of stars.",
   2:"{n} understands the life cycle of stars and the position of the Solar System in the Milky Way and can explain them. More practice is needed in comparing the characteristics of stars.",
   3:"{n} can compare stars based on temperature, colour and distance from data. Encourage linking colour to temperature.",
   4:"{n} is able to analyse information on the mass of stars to predict the final stage of their life cycle. Next, practise evaluating decisions related to observing stars.",
   5:"{n} can evaluate observatory locations based on light pollution, height and access. Ready for a creative task.",
   6:"{n} successfully created an astronomy project that is creative and practical. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Stars and Galaxies in the Universe. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ suhubintang:R_SUHUBINTANG, bimasakti:R_BIMASAKTI, bintang:T_BINTANG, kitar:T_KITAR, cerap:T_CERAP },
  aras:ARAS
};
