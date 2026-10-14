/* English source (DLP) — Science KSSM Form 3, Chapter 8.0 Radioactivity.
   Translation of sumber/t3b8.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t3b8` to check it and generate bank-en-t3b8.js.
   Structure must match sumber/t3b8.js exactly. Correct answer at index 0.
   The safe background radiation level (less than 0.2 µSv/h) is taken from
   DSKP note 8.3.4. */

const SPI = [
"Recall the knowledge and science skills about radioactivity.",
"Understand and explain about radioactivity.",
"Apply knowledge about radioactivity and able to carry out simple tasks.",
"Analyse knowledge about radioactivity in context of problem solving on events or natural phenomena.",
"Evaluate knowledge about radioactivity in context of problem solving and decision making to carry out a task.",
"Design a task using knowledge and science skills about radioactivity in a creative and innovative way in the context of problem solving and decision making or carry out a task in a new situation with regards to the social values/economy/culture of the community."];

/* ---------- attachments ---------- */

const R_TEMBUSAN = {
  "jenis": "aliran",
  "mod": "siratan",
  "nod": [
    { "id": "a", "label": "Alpha", "x": 0, "y": 0 },
    { "id": "b", "label": "Beta", "x": 1, "y": 0 },
    { "id": "g", "label": "Gamma", "x": 2, "y": 0 },
    { "id": "a2", "label": "Paper", "x": 0, "y": 1 },
    { "id": "b2", "label": "Aluminium", "x": 1, "y": 1 },
    { "id": "g2", "label": "Lead", "x": 2, "y": 1 }
  ],
  "panah": [["a", "a2"], ["b", "b2"], ["g", "g2"]],
  "kapsyen": "Figure 1 · The thinnest material that can stop each type of radiation.",
  "alt": "Three columns: alpha particles are stopped by paper, beta particles by aluminium, and gamma rays only by lead"
};

const R_ATOM = {
  "jenis": "struktur",
  "mod": "label",
  "bahagian": [
    { "bentuk": "bulat", "x": 50, "y": 50, "r": 45, "isi": "kertas2", "garis": "garis" },
    { "label": "Electron (3)", "bentuk": "bulat", "x": 50, "y": 11, "r": 3.5, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 11, "y": 69.5, "r": 3.5, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 89, "y": 69.5, "r": 3.5, "isi": "ungu", "garis": "ungu" },
    { "bentuk": "bulat", "x": 50, "y": 50, "r": 15, "isi": "kertas", "garis": "garis2" },
    { "label": "Proton (3)", "bentuk": "bulat", "x": 50, "y": 43.3, "r": 3.5, "isi": "merah", "garis": "merah" },
    { "bentuk": "bulat", "x": 43.1, "y": 53.3, "r": 3.5, "isi": "merah", "garis": "merah" },
    { "bentuk": "bulat", "x": 56.9, "y": 53.3, "r": 3.5, "isi": "merah", "garis": "merah" },
    { "label": "Neutron (4)", "bentuk": "bulat", "x": 50, "y": 56.7, "r": 3.5, "isi": "tinta3", "garis": "tinta3" },
    { "bentuk": "bulat", "x": 43.1, "y": 46.7, "r": 3.5, "isi": "tinta3", "garis": "tinta3" },
    { "bentuk": "bulat", "x": 56.9, "y": 46.7, "r": 3.5, "isi": "tinta3", "garis": "tinta3" },
    { "bentuk": "bulat", "x": 50, "y": 50, "r": 3.5, "isi": "tinta3", "garis": "tinta3" }
  ],
  "kapsyen": "Figure 1 · Model of a neutral lithium atom.",
  "alt": "Model of an atom: the nucleus contains three protons and four neutrons, surrounded by three electrons outside the nucleus"
};

const T_REPUT =
'<div class="scrollx"><table class="datatable"><thead><tr><th class="n">Time (hours)</th>'+
'<th class="n">Activity of substance X (Bq)</th></tr></thead><tbody>'+
'<tr><td class="n">0</td><td class="n">800</td></tr>'+
'<tr><td class="n">2</td><td class="n">400</td></tr>'+
'<tr><td class="n">4</td><td class="n">200</td></tr>'+
'<tr><td class="n">6</td><td class="n">100</td></tr>'+
'<tr><td class="n">8</td><td class="n">50</td></tr>'+
'</tbody></table></div><p class="qnote">1 Bq means one nucleus decays every second. Fictional data for practice.</p>';

const T_TEMBUS =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Source</th>'+
'<th class="n">No barrier</th><th class="n">A sheet of paper</th>'+
'<th class="n">Aluminium 5 mm</th><th class="n">Lead 5 cm</th></tr></thead><tbody>'+
'<tr><td>P</td><td class="n">900</td><td class="n">20</td><td class="n">20</td><td class="n">20</td></tr>'+
'<tr><td>Q</td><td class="n">700</td><td class="n">690</td><td class="n">20</td><td class="n">20</td></tr>'+
'<tr><td>R</td><td class="n">500</td><td class="n">500</td><td class="n">480</td><td class="n">60</td></tr>'+
'</tbody></table></div><p class="qnote">Readings are in counts per minute. Each source emits only one type of radiation. The background reading is 20 counts per minute.</p>';

const T_DOS =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Location</th>'+
'<th class="n">Dose rate (&micro;Sv/h)</th></tr></thead><tbody>'+
'<tr><td>Classroom</td><td class="n">0.10</td></tr>'+
'<tr><td>Clinic waiting room</td><td class="n">0.12</td></tr>'+
'<tr><td>Granite rock area</td><td class="n">0.25</td></tr>'+
'<tr><td>Fence of a radioactive waste storage site</td><td class="n">0.35</td></tr>'+
'<tr><td>Aircraft cabin at a height of 11 km</td><td class="n">3.0</td></tr>'+
'</tbody></table></div><p class="qnote">The natural background dose rate is usually between 0.05 and 0.3 &micro;Sv/h, depending on the place. The additional dose limit is 1 mSv (1000 &micro;Sv) a year for the public and 20 mSv a year for radiation workers. Fictional data for practice.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Curie Laboratory", sk:"8.1 History of the discovery of radioactivity", lampiran:"tembusan",
 kadNama:"Marie Curie", kadEm:"\u{1F52C}", kadFakta:"Marie Curie was the first person to win a Nobel Prize in two different sciences, physics and chemistry.",
 bosKadNama:"X-ray", bosKadEm:"\u{1F9B4}", bosKadFakta:"Wilhelm Roentgen discovered X-rays in 1895. His first X-ray image showed the bones of his wife's hand.",
 soalan:[
 {j:"pilih",t:"The scientist who discovered X-rays was:",p:["Wilhelm Roentgen","Henri Becquerel","Marie Curie","Pierre Curie"],b:0,u:"Roentgen discovered X-rays in 1895."},
 {j:"pilih",t:"The scientist who first discovered radioactivity through uranium salts was:",p:["Henri Becquerel","Wilhelm Roentgen","John Dalton","Isaac Newton"],b:0,u:"Becquerel found that uranium salts darken a photographic plate even without light."},
 {j:"pilih",t:"The unit of radioactivity is the:",p:["Becquerel (Bq)","Joule (J)","Watt (W)","Kilowatt-hour (kWh)"],b:0,u:"The curie (Ci) is also a unit of radioactivity."},
 {j:"pilih",t:"The positively charged particle in the nucleus is the:",p:["Proton","Neutron","Electron","Photon"],b:0,u:"A neutron has no charge, and an electron is negatively charged and is found outside the nucleus."},
 {j:"pilih",t:"Based on Figure 1, the radiation with the highest penetrating power is:",p:["Gamma rays","Alpha particles","Beta particles","Radio waves"],b:0,u:"Gamma rays can only be reduced by lead or thick concrete."},
 {j:"pilih",t:"An example of a radioactive substance is:",p:["Uranium-235","Carbon-12","Oxygen-16","Sodium chloride"],b:0,u:"Carbon-12 and oxygen-16 are stable atoms."},
 {j:"banyak",t:"Choose ALL the ionising radiation.",p:["Alpha particles","Beta particles","Gamma rays","Radio waves","Visible light"],b:[0,1,2],u:"X-rays are also ionising radiation. Radio waves and visible light are non-ionising radiation."},
 {j:"pilih",t:"Half-life is the time taken for:",p:["Half of the radioactive nuclei to decay","All of the radioactive nuclei to decay","A radioactive substance to become twice as active","Half of the electrons to leave the atom"],b:0,u:"After one half-life, the activity of the sample becomes half."}],
 bos:{j:"pilih",t:"Radioactivity is:",p:["The spontaneous decay of unstable nuclei, which gives off radiation","The burning of fuel, which releases light and heat quickly","The movement of electrons in a wire, which produces a current","The reflection of sunlight by shiny metal"],b:0,u:"Spontaneous means it happens by itself without being affected by temperature or pressure."}},

{n:2, tempat:"Nucleus", sk:"8.2 / 8.3 Atoms, ions and types of radiation", lampiran:"atomlitium",
 kadNama:"Atom", kadEm:"\u{269B}", kadFakta:"Almost all of the mass of an atom is concentrated in the very small nucleus at its centre.",
 bosKadNama:"Ion", bosKadEm:"\u{2795}", bosKadFakta:"An atom that loses electrons becomes a positive ion, while an atom that gains electrons becomes a negative ion.",
 soalan:[
 {j:"pilih",t:"Based on Figure 1, why is the atom neutral overall?",p:["The number of protons equals the number of electrons","The number of protons equals the number of neutrons in the nucleus","Neutrons neutralise all the charge of the electrons","Electrons have no charge"],b:0,u:"The positive charge of the protons is balanced by the negative charge of the electrons."},
 {j:"pilih",t:"How is a positive ion formed?",p:["An atom loses one or more electrons","An atom gains one or more electrons from another atom","An atom loses one or more protons","An atom gains one or more neutrons"],b:0,u:"After electrons are lost, the number of protons is greater than the number of electrons."},
 {j:"pilih",t:"A chlorine atom gains one electron. What is formed?",p:["A negative ion","A positive ion","A neutral atom","A new nucleus"],b:0,u:"The electrons now outnumber the protons by one."},
 {j:"pilih",t:"Why are alpha particles and beta particles deflected in opposite directions in a magnetic field?",p:["They carry opposite charges","Both are uncharged","Alpha particles are faster than beta particles","A magnetic field pushes all particles to the left"],b:0,u:"Alpha particles are positively charged, while beta particles are negatively charged."},
 {j:"pilih",t:"Why are gamma rays not deflected in an electric field?",p:["Gamma rays have no charge","Gamma rays are too heavy","Gamma rays are positively charged","Gamma rays travel too slowly"],b:0,u:"Gamma rays are electromagnetic waves, not charged particles."},
 {j:"pilih",t:"Why do alpha particles have the highest ionising power?",p:["They are large and charged, so they collide often with atoms","They are the smallest, so they easily penetrate all materials","They are uncharged, so electrons do not attract them","They travel at the speed of light through air"],b:0,u:"Each collision ionises an atom, which is why alpha particles quickly run out of energy."},
 {j:"pilih",t:"The activity of a sample is 400 Bq. What does this mean?",p:["400 nuclei decay every second","400 atoms are formed every second","The sample has a mass of 400 grams","The sample will be used up in 400 seconds"],b:0,u:"1 becquerel is one decay per second."},
 {j:"pilih",t:"Why do pilots and cabin crew receive a higher radiation dose?",p:["Cosmic radiation is stronger at high altitude","Aircraft engines give off gamma rays","The food on flights contains uranium","The aircraft cabin is made of lead"],b:0,u:"At high altitude, the layer of atmosphere that protects against cosmic radiation is thinner."}],
 bos:{j:"pilih",t:"Why are beta particles deflected more than alpha particles in a magnetic field?",p:["Beta particles are much lighter","Beta particles are uncharged","Beta particles are bigger","Beta particles travel more slowly"],b:0,u:"Beta particles are electrons, which are much lighter than alpha particles."}},

{n:3, tempat:"Cloud Chamber", sk:"8.1 / 8.4 Half-life and uses of radiation", lampiran:"reput",
 kadNama:"Carbon-14", kadEm:"\u{1F3FA}", kadFakta:"Carbon-14 has a half-life of about 5730 years, so it is suitable for finding the age of ancient materials.",
 bosKadNama:"Smoke Detector", bosKadEm:"\u{1F6A8}", bosKadFakta:"Most smoke detectors contain a little americium-241, which emits alpha particles.",
 soalan:[
 {j:"nombor",t:"Based on the table, what is the half-life of substance X, in hours?",b:2,tol:0.05,suf:"hours",u:"The activity falls from 800 Bq to 400 Bq in 2 hours."},
 {j:"nombor",t:"What is the activity of substance X after 10 hours, in Bq?",b:25,tol:0.5,suf:"Bq",u:"After 8 hours its activity is 50 Bq. One more half-life makes it 25 Bq."},
 {j:"pilih",t:"How long does it take for the activity to fall from 800 Bq to 100 Bq?",p:["6 hours","3 hours","8 hours","4 hours"],b:0,u:"800 → 400 → 200 → 100, which is three half-lives."},
 {j:"pilih",t:"Carbon-14 is used to find the age of ancient bones. The concept used is:",p:["Half-life","Ionisation","Refraction","Conduction"],b:0,u:"The carbon-14 left in the bone shows how many half-lives have passed."},
 {j:"pilih",t:"A smoke detector at home uses an alpha source. Why is alpha chosen and not gamma?",p:["Alpha is easily absorbed, so it does not escape from the detector","Alpha penetrates the walls and roof of a house the most","Alpha does not ionise air at all","Alpha is cheaper because it never decays"],b:0,u:"Alpha ionises the air inside the detector but is stopped by the casing of the detector itself."},
 {j:"pilih",t:"A factory controls the thickness of sheets of paper using a beta source. Why is beta suitable?",p:["Beta partly penetrates paper","Beta cannot penetrate paper even if it is thin","Beta easily penetrates thick lead","Beta does not ionise materials at all"],b:0,u:"Alpha is stopped completely by paper, and gamma is hardly affected, so only beta is sensitive to the thickness."},
 {j:"pilih",t:"Gamma rays are used to preserve spices and food. How?",p:["Gamma rays kill the microorganisms in the food","Gamma rays cook the food with high heat","Gamma rays make the food radioactive","Gamma rays add vitamins to the food"],b:0,u:"Food that has been irradiated does not become radioactive."},
 {j:"pilih",t:"Doctors use gamma rays from cobalt-60 to:",p:["Kill cancer cells","Measure blood pressure","Test eyesight","Detect broken bones"],b:0,u:"Broken bones are detected with X-rays, not cobalt-60 gamma rays."}],
 bos:{j:"pilih",t:"A student says substance X will have completely decayed after 4 hours because its half-life is 2 hours. Correct the statement.",p:["After 4 hours, one quarter of the original activity is still left","The statement is correct because two half-lives equal one","After 4 hours, the activity becomes twice as much","The sample has completely decayed after 2 hours only"],b:0,u:"Each half-life halves the activity that is left: ½ × ½ = ¼."}},

{n:4, tempat:"Barrier", sk:"8.3 Distinguishing alpha, beta and gamma radiation", lampiran:"tembus",
 kadNama:"Lead", kadEm:"\u{1F9F1}", kadFakta:"Lead and thick concrete are used to reduce gamma rays in hospitals and nuclear plants.",
 bosKadNama:"Cloud Chamber Tracks", bosKadEm:"\u{2601}", bosKadFakta:"In a cloud chamber, alpha tracks are short and thick, while beta tracks are thin and winding.",
 soalan:[
 {j:"pilih",t:"Based on the table, source P emits:",p:["Alpha particles","Beta particles","Gamma rays","X-rays"],b:0,u:"The radiation from P is completely stopped by a sheet of paper."},
 {j:"pilih",t:"Which source emits beta particles?",p:["Q","P","R","None"],b:0,u:"The radiation from Q penetrates paper but is stopped by 5 mm of aluminium."},
 {j:"pilih",t:"Why is a reading of 20 still recorded even though the radiation from P has been stopped by paper?",p:["The detector still detects background radiation","A small fraction of the alpha particles still penetrates the paper","The paper itself emits radiation","The detector is faulty and needs to be replaced"],b:0,u:"Background radiation from the ground, rocks and space is always present."},
 {j:"pilih",t:"Why does the reading of R fall only to 60, not 20, with 5 cm of lead?",p:["Gamma rays are very penetrating, so lead only reduces them","The lead itself emits extra radiation","Source R actually emits strong alpha particles","The background reading rose during the test"],b:0,u:"Thicker lead is needed to reduce gamma rays to the background level."},
 {j:"banyak",t:"Choose ALL the conclusions supported by the data.",p:["P is stopped by a sheet of paper","Q passes through paper but not aluminium","R is the most penetrating","Q is the most penetrating of the three","Paper stops every type of radiation"],b:[0,1,2],u:"The radiation from R is still detected after passing through aluminium and lead."},
 {j:"pilih",t:"The container for storing source R in the laboratory should be made of:",p:["Thick lead","Thick paper","Thin aluminium","Transparent plastic"],b:0,u:"Only thick lead reduces gamma rays significantly."},
 {j:"pilih",t:"Which source is the most dangerous if swallowed or inhaled into the body?",p:["P, because alpha strongly ionises the cells inside","R, because gamma rays penetrate body tissue the most","Q, because beta is the heaviest","None of them is dangerous inside the body"],b:0,u:"Outside the body, alpha is stopped by the skin. Inside the body, alpha damages the surrounding cells directly."},
 {j:"pilih",t:"A student claims that source R emits nothing because its reading through paper is the same as with no barrier. Analyse the claim.",p:["Wrong, because gamma rays pass through paper without being reduced","Correct, because paper stops all the radiation from R","Correct, because the reading of 500 is the background reading","Wrong, because R actually emits alpha"],b:0,u:"A reading of 500 is far above the background of 20."}],
 bos:{j:"pilih",t:"A source gives a reading of 800 with no barrier, 790 with paper, and 20 with 5 mm of aluminium. The source emits:",p:["Beta particles","Alpha particles","Gamma rays","Microwaves"],b:0,u:"The pattern is the same as source Q."}},

{n:5, tempat:"Nuclear Centre", sk:"8.3 / 8.4 Managing radiation risks", lampiran:"dos",
 kadNama:"Dose Badge", kadEm:"\u{1FAAA}", kadFakta:"Workers who handle radioactive substances wear a dose badge to record the amount of radiation they receive.",
 bosKadNama:"Radiotherapy", bosKadEm:"\u{1F3E5}", bosKadFakta:"Gamma rays from cobalt-60 are used to destroy cancer cells.",
 soalan:[
 {j:"pilih",t:"Based on the table, which location has the highest dose rate, and what is the cause?",p:["The aircraft cabin, because cosmic radiation is stronger at high altitude","The edge of the waste site, because the waste emits the strongest radiation","The granite area, because granite rock emits X-rays","The aircraft cabin, because aircraft engines give off gamma rays"],b:0,u:"At high altitude, the layer of atmosphere that protects against cosmic radiation is thinner. The rate at the fence of the waste site is far lower than in the cabin."},
 {j:"pilih",t:"A cabin crew member flies 800 hours a year at the rate in the table. What is their estimated additional dose, and what is the most appropriate decision?",p:["About 2.4 mSv; monitor the crew's dose and limit flying hours","About 2.4 mSv; stop all flights for that crew at once","About 0.24 mSv; no monitoring is needed","About 24 mSv; that crew has already exceeded the limit for radiation workers"],b:0,u:"800 hours × 3.0 µSv/h = 2400 µSv = 2.4 mSv. It is below the worker limit of 20 mSv but above the public limit, so the crew are monitored like radiation workers."},
 {j:"nombor",t:"What dose does a passenger receive on a 5-hour flight, in µSv?",b:15,tol:0.05,suf:"µSv",u:"3.0 µSv/h × 5 hours = 15 µSv, which is only a small part of the yearly limit for the public."},
 {j:"pilih",t:"Evaluate the claim: \"A granite area is not safe to live in at all.\"",p:["Not accurate, because 0.25 µSv/h is still within the natural background range","Accurate, because the rate is higher than in a classroom","Accurate, because all ionising radiation is dangerous even in small amounts","Not accurate, because granite emits no radiation at all"],b:0,u:"Granite does emit a little radiation and radon gas, but the rate is within the natural range. Good ventilation reduces radon inside the house."},
 {j:"pilih",t:"A company wants to build a radioactive waste storage site. The most appropriate location is:",p:["A geologically stable area far from water sources and residents","A riverbank so the waste is easy to transport and is always cooled","Near a hospital because hospitals are used to handling radiation","A swamp because the water there stops radiation from escaping"],b:0,u:"Radioactive waste can stay active for a very long time. Groundwater and rivers can carry radioactive material far from the site."},
 {j:"pilih",t:"A hospital wants to buy a cobalt-60 radiotherapy machine. The most important condition to require is:",p:["A room with thick concrete walls and workers wearing dose badges","A room with aluminium walls because aluminium stops gamma rays","Workers standing close to the source so the treatment is more accurate","The source stored in a thick plastic container after use"],b:0,u:"Gamma rays are only reduced significantly by thick concrete or lead. A long distance reduces the workers' dose."},
 {j:"banyak",t:"Choose ALL the appropriate steps for workers who handle radioactive substances.",p:["Use tongs with long handles","Wear a dose badge to monitor exposure","Keep the source in a lead container","Wear rubber gloves to stop gamma rays","Work more slowly so as not to make mistakes"],b:[0,1,2],u:"Distance, shielding and a short time of exposure reduce the dose. Rubber gloves do not stop gamma rays."},
 {j:"pilih",t:"Some consumers reject food preserved with gamma rays because they fear it is radioactive. Evaluate this concern.",p:["Unfounded, because the food does not become radioactive","Founded, because the gamma rays stay stored inside the food","Founded, because the food emits radiation after being irradiated","Unfounded, because gamma rays cannot penetrate food"],b:0,u:"Gamma rays pass through the food and kill microorganisms, but they do not stay in it. They penetrate food, which is why they are effective."}],
 bos:{j:"pilih",t:"A country is considering building a nuclear power plant to reduce the burning of coal. The most appropriate consideration before a decision is made is:",p:["Weigh the net energy against the risks of accidents and waste","Build it immediately because nuclear plants produce no waste","Reject it because nuclear plants release more carbon dioxide","Build it on the coast in an earthquake zone because seawater cools the reactor"],b:0,u:"Nuclear plants release almost no carbon dioxide, but produce radioactive waste. Fukushima showed the danger of a site in an earthquake and tsunami zone."}},

{n:6, tempat:"Science Exhibition", sk:"8.4 Creating for the well-being of life",
 kadNama:"Mutant Rice", kadEm:"\u{1F33E}", kadFakta:"The Malaysian Nuclear Agency uses radiation mutation techniques to develop new rice varieties.",
 bosKadNama:"Radon", bosKadEm:"\u{1F3E0}", bosKadFakta:"Radon is a natural radioactive gas from soil and rocks. Good ventilation reduces it inside the house.",
 soalan:[
 {j:"pilih",t:"You design a poster to educate residents about radon gas in homes. The most accurate message is:",p:["Open the windows for ventilation and test the radon level if worried","Move house at once if you live in a rocky area","Close the windows tightly so radon cannot get in","Plant trees around the house because trees absorb radon"],b:0,u:"Radon comes from the soil under the house, so closing the windows traps it inside. Ventilation reduces it."},
 {j:"pilih",t:"You build a model cloud chamber for the exhibition. What can it show?",p:["The tracks produced by radiation","The exact half-life of a radioactive source","How to stop radiation from escaping into the class","The difference between gamma rays and X-rays"],b:0,u:"Radiation cannot be seen, but its tracks in a cloud chamber can. Alpha tracks are short and thick, and beta tracks are thin and winding."},
 {j:"pilih",t:"Your exhibition will be visited by children. The most important safety step is:",p:["Use pictures, models and simulations, not real sources","Use alpha sources only because alpha does not penetrate skin","Put the gamma source behind a thick sheet of paper","Let children hold the source if they wear gloves"],b:0,u:"Alpha is very dangerous if swallowed or inhaled. Paper does not stop gamma rays, and gloves do not protect against gamma rays."},
 {j:"pilih",t:"You design a campaign about the uses of radioisotopes in agriculture. The most accurate example is:",p:["Producing new rice varieties through mutation","Irradiating rice every day so it grows faster","Preserving fruit with gamma rays until the fruit is radioactive","Replacing fertiliser with a cheaper radioactive substance"],b:0,u:"Radiation changes the genetic material of seeds and produces varieties that can be selected. Fruit preserved with gamma rays does not become radioactive."},
 {j:"pilih",t:"You want to show the concept of half-life without radioactive substances. The most accurate simulation is:",p:["Toss 100 coins again and again and remove those that show heads","Toss one coin 100 times and record each result","Remove 10 coins in each round until none are left","Time how long 100 ice cubes take to melt completely"],b:0,u:"About half of the remaining coins are removed each round, just like half of the remaining nuclei decay in each half-life. Removing 10 each time is a fixed decrease, not a half-life."},
 {j:"pilih",t:"How would you evaluate whether the exhibition succeeded in improving visitors' understanding?",p:["Give a short quiz before and after the visit","Count the number of photos taken by visitors","Ask visitors whether the exhibition was interesting","Count how long visitors stand at each poster"],b:0,u:"Comparing before and after shows a change in understanding, not just interest."},
 {j:"pilih",t:"Residents near a rare earth factory are worried about radioactive waste. The most appropriate way to communicate is:",p:["Share the monitoring data openly","Keep the data secret so residents do not panic","Share the data only when the readings are low","Tell residents that all radiation is harmless"],b:0,u:"Transparency builds trust. Sharing only the good data, or denying all risks, destroys that trust."},
 {j:"pilih",t:"You want to explain ionising radiation to senior citizens who are not familiar with scientific terms. The most suitable way is:",p:["Use simple analogies and examples such as X-rays at the clinic","Use technical terms only so the explanation is accurate","Stress that all radiation can be deadly","Avoid the topic so they do not worry"],b:0,u:"A good message is accurate and suited to the listeners. Frightening people is as misleading as denying the risks."}],
 bos:{j:"buka",
  t:"Your village is near the proposed site of a facility that uses radioactive materials. Residents are confused between true information and rumours. Design a programme to help the residents make decisions based on facts.",
  arahan:"Explain the science concepts the residents need to understand (types of radiation, safe doses and half-life), the activities or materials to be used, the safety measures that should be demanded from the operator, and how you take into account the culture, language and concerns of the community.",
  u:"A strong TP6 answer uses accurate facts about radiation, plans activities suited to the residents, and stresses transparency and safety."}}
];

module.exports = {
  id:"t3b8", tingkatan:3, kod:"8.0 Radioactivity",
  tajuk:"Radiation Trail",
  subtajuk:"Science Form 3 · Chapter 8 Radioactivity",
  spi:SPI,
  /* PBD comments by performance level. {n} is replaced with the student's first name. */
  ulasan:{
   1:"{n} can recall the scientists who discovered radioactivity, the structure of the atom and the types of ionising radiation. The next step is to explain the differences in the properties of alpha, beta and gamma radiation.",
   2:"{n} understands the formation of ions and the differences in the ionising and penetrating power of alpha, beta and gamma radiation. More practice interpreting decay data is needed before moving on to TP3.",
   3:"{n} can apply the concept of half-life to interpret decay data and explain the uses of radiation in medicine, industry and food preservation. Encourage linking each type of radiation to its use.",
   4:"{n} is able to analyse penetration data to identify types of radiation and choose suitable barriers. Next, practise weighing evidence to make decisions.",
   5:"{n} can evaluate the risk of radiation exposure from dose rate data and make sound decisions about handling radioactive materials and waste. Ready for an invention task.",
   6:"{n} successfully designed a programme or educational material about radioactivity that is accurate, safe and suited to the community. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Radioactivity. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ tembusan:R_TEMBUSAN, atomlitium:R_ATOM, reput:T_REPUT, tembus:T_TEMBUS, dos:T_DOS },
  aras:ARAS
};
