/* English source (DLP) — Science KSSM Form 2, Chapter 10.0 Sound Waves.
   Translation of sumber/t2b10.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t2b10` to check it and generate bank-en-t2b10.js.
   Structure must match sumber/t2b10.js exactly. Correct answer at index 0.
   The speed of sound in seawater is taken as 1500 m/s in the attachments. */

const SPI = [
"Recall the knowledge and science skills on sound waves.",
"Understand and explain sound waves.",
"Apply knowledge on sound waves and able to carry out simple tasks.",
"Analyse knowledge on sound waves in context of problem solving on events or natural phenomena.",
"Evaluate knowledge of sound waves in context of problem solving and decision making to carry out a task.",
"Design a task using knowledge and science skills on sound waves in a creative and innovative way in the context of problem solving and decision making or carry out a task in a new situation with regards to the social values/economy/culture of the community."];

/* ---------- attachments ---------- */

const R_AMPLITUD = {
  "jenis": "graf",
  "grid": 4,
  "yMin": -4,
  "yMaks": 4,
  "setiap": 3,
  "x": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
  ],
  "siri": [
    {
      "label": "Sound P (louder)",
      "warna": "merah",
      "y": [
        0,
        3.5,
        3.5,
        0,
        -3.5,
        -3.5,
        0,
        3.5,
        3.5,
        0,
        -3.5,
        -3.5,
        0
      ]
    },
    {
      "label": "Sound Q (softer)",
      "warna": "ungu",
      "y": [
        0,
        1.3,
        1.3,
        0,
        -1.3,
        -1.3,
        0,
        1.3,
        1.3,
        0,
        -1.3,
        -1.3,
        0
      ]
    }
  ],
  "xLabel": "Time (milliseconds)",
  "kapsyen": "Figure 1 · Two sounds of the same pitch. Sound P is louder than sound Q.",
  "alt": "Two waves with the same number of peaks, but wave P has much higher peaks than wave Q"
};

const R_GEMA = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Sound from the source",
    "Hits a hard wall",
    "Reflected back",
    "Heard again as an echo"
  ],
  "kapsyen": "Figure 1 · How an echo forms in a hall.",
  "alt": "Vertical flow diagram: sound from the source hits a hard wall, is reflected back, and is heard again as an echo"
};

const T_OSILO =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Sound</th>'+
'<th class="n">Frequency (Hz)</th><th class="n">Height of wave on the oscilloscope screen (squares)</th></tr></thead><tbody>'+
'<tr><td>P</td><td class="n">256</td><td class="n">2</td></tr>'+
'<tr><td>Q</td><td class="n">512</td><td class="n">2</td></tr>'+
'<tr><td>R</td><td class="n">256</td><td class="n">4</td></tr>'+
'<tr><td>S</td><td class="n">30 000</td><td class="n">3</td></tr>'+
'</tbody></table></div><p class="qnote">The height of the wave on the screen shows the amplitude. The range of human hearing is about 20 Hz to 20 000 Hz.</p>';

const T_SONAR =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Location</th>'+
'<th class="n">Time for the echo to return (s)</th></tr></thead><tbody>'+
'<tr><td>A: Near the shore</td><td class="n">0.02</td></tr>'+
'<tr><td>B: Strait</td><td class="n">0.08</td></tr>'+
'<tr><td>C: Deep sea</td><td class="n">2.0</td></tr>'+
'<tr><td>D: Shipwreck area</td><td class="n">0.05 and 0.08</td></tr>'+
'</tbody></table></div><p class="qnote">A ship sends a pulse of sound to the seabed. The speed of sound in seawater = 1500 m/s. Depth = (speed &times; time) &divide; 2.</p>';

const T_BAHAN =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Wall material</th>'+
'<th class="n">Sound absorbed (%)</th><th class="n">Cost per square metre (RM)</th><th>Fire resistant?</th></tr></thead><tbody>'+
'<tr><td>Painted cement wall</td><td class="n">2</td><td class="n">0</td><td>Yes</td></tr>'+
'<tr><td>Polyurethane foam panel</td><td class="n">70</td><td class="n">25</td><td>No</td></tr>'+
'<tr><td>Mineral fibre panel</td><td class="n">80</td><td class="n">45</td><td>Yes</td></tr>'+
'<tr><td>Paper egg tray</td><td class="n">15</td><td class="n">2</td><td>No</td></tr>'+
'</tbody></table></div><p class="qnote">Options for a school music room that echoes too much. Estimated data for medium-frequency sound.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Music Room", sk:"10.1 / 10.2 Characteristics of sound waves", lampiran:"amplitud",
 kadNama:"Vibration", kadEm:"\u{1F3B8}", kadFakta:"All sounds are produced by vibrations, whether of a guitar string, a drum skin or the vocal cords.",
 bosKadNama:"Vacuum Jar", bosKadEm:"\u{1F514}", bosKadFakta:"A bell in a vacuum jar cannot be heard even though it is still vibrating, because sound needs a medium.",
 soalan:[
 {j:"pilih",t:"Sound is produced by:",p:["Vibrations","Light","Heat","Magnets"],b:0,u:"A vibrating object makes the particles of the medium around it vibrate."},
 {j:"pilih",t:"Sound can NOT travel through:",p:["A vacuum","Air","Water","Steel"],b:0,u:"Sound needs a medium."},
 {j:"pilih",t:"The S.I. unit of frequency is the:",p:["Hertz (Hz)","Decibel (dB)","Metre (m)","Second (s)"],b:0,u:"1 Hz = one vibration per second."},
 {j:"pilih",t:"The pitch of a sound depends on its:",p:["Frequency","Amplitude","Medium","Temperature"],b:0,u:"A high frequency produces a high-pitched sound."},
 {j:"pilih",t:"Based on Figure 1, the loudness of a sound depends on its:",p:["Amplitude","Frequency","Colour","Mass"],b:0,u:"A large amplitude produces a loud sound."},
 {j:"pilih",t:"Sound travels fastest in:",p:["Steel","Water","Air","A vacuum"],b:0,u:"The particles of a solid are closest together."},
 {j:"pilih",t:"The range of human hearing is about:",p:["20 Hz to 20 000 Hz","2 Hz to 200 Hz","200 Hz to 2 000 000 Hz","0 Hz to 20 Hz"],b:0,u:"Sound above 20 000 Hz is called ultrasound."},
 {j:"banyak",t:"Choose ALL the surfaces that absorb sound well.",p:["Thick curtains","Carpet","Foam","Tiled wall","Glass mirror"],b:[0,1,2],u:"Hard, smooth surfaces reflect sound."}],
 bos:{j:"pilih",t:"Sound that is reflected back and heard again is called an:",p:["Echo","Vibration","Frequency","Resonance"],b:0,u:"An echo is clearly heard in a cave or an empty hall."}},

{n:2, tempat:"Orchestra Stage", sk:"10.2 / 10.3 Loudness, pitch and reflection of sound", lampiran:"gema",
 kadNama:"Doppler Effect", kadEm:"\u{1F691}", kadFakta:"The siren of an ambulance sounds higher as it approaches and lower after it has passed us.",
 bosKadNama:"Echolocation", bosKadEm:"\u{1F987}", bosKadFakta:"Bats produce ultrasonic sounds and listen to the echoes to detect insects in the dark.",
 soalan:[
 {j:"pilih",t:"A guitar string plucked harder produces a sound that is:",p:["Louder","Higher in pitch","Lower in pitch","Slower"],b:0,u:"The amplitude of the vibration increases."},
 {j:"pilih",t:"A shorter guitar string produces a sound that has a higher:",p:["Pitch","Loudness","Softness","Depth"],b:0,u:"A short string vibrates at a higher frequency."},
 {j:"pilih",t:"Based on Figure 1, why does an empty hall echo more than a hall full of people?",p:["Fewer soft surfaces absorb the sound","The air in an empty hall is denser","Sound travels faster in an empty hall","The walls produce their own sound"],b:0,u:"Human bodies and clothes absorb sound."},
 {j:"pilih",t:"An ambulance siren sounds higher in pitch as it approaches. This phenomenon is called the:",p:["Doppler effect","Echo","Resonance","Sonar"],b:0,u:"The frequency heard increases as the source approaches."},
 {j:"pilih",t:"Doctors use ultrasound to look at a foetus because it:",p:["Is safe and is reflected by tissues","Uses strong X-rays","Can be heard by the mother","Heats the foetus"],b:0,u:"Ultrasonic echoes form an image without harmful radiation."},
 {j:"pilih",t:"The sound of a distant train reaches you faster through a steel track than through air. Why?",p:["Sound is faster in solids","Steel changes sound into light","Sound cannot travel through air at all","The track makes its own sound"],b:0,u:"The particles in a solid are close together, so vibrations pass on faster. Never go near a track to test this."},
 {j:"pilih",t:"Elephants communicate using sound with a frequency below 20 Hz. This sound is called:",p:["Infrasound","Ultrasound","An echo","Audio frequency"],b:0,u:"Humans cannot hear it."},
 {j:"pilih",t:"A device that helps senior citizens with poor hearing is a:",p:["Hearing aid","Magnifying glass","Concave mirror","Digital thermometer"],b:0,u:"The device amplifies the sound entering the ear."}],
 bos:{j:"banyak",t:"Choose ALL the applications of the reflection of sound waves.",p:["Sonar to detect sea depth","Ultrasound to examine a foetus","Echolocation of bats","A periscope to see from a submarine","Spectacle lenses for short-sightedness"],b:[0,1,2],u:"A periscope and lenses use light, not sound."}},

{n:3, tempat:"Oscilloscope Lab", sk:"10.2 Interpreting frequency and amplitude", lampiran:"osilo",
 kadNama:"Oscilloscope", kadEm:"\u{1F4FA}", kadFakta:"An oscilloscope displays sound as a wave so that its frequency and amplitude can be compared.",
 bosKadNama:"Ultrasound", bosKadEm:"\u{1F415}", bosKadFakta:"A dog whistle produces ultrasound that dogs can hear but humans cannot.",
 soalan:[
 {j:"pilih",t:"Which sound is the loudest?",p:["R","P","Q","S"],b:0,u:"R has the largest amplitude, 4 squares."},
 {j:"pilih",t:"Which sound has the highest pitch among those humans can hear?",p:["Q","P","R","S"],b:0,u:"Q is 512 Hz; S cannot be heard."},
 {j:"pilih",t:"Sounds P and R have the same frequency. What difference is heard?",p:["R is louder","R is higher in pitch","P is louder","No difference at all"],b:0,u:"The pitch is the same, but the amplitude of R is larger."},
 {j:"pilih",t:"Sounds P and Q have the same amplitude. What difference is heard?",p:["Q is higher in pitch","Q is louder","P is higher in pitch","No difference at all"],b:0,u:"Q has twice the frequency of P."},
 {j:"pilih",t:"Why can sound S not be heard by humans?",p:["Its frequency is above 20 000 Hz","Its amplitude is too small","It does not vibrate at all","It travels in a vacuum"],b:0,u:"S is ultrasound."},
 {j:"pilih",t:"Which animal is most likely able to hear sound S?",p:["Bat","Elephant","Goldfish","Snail"],b:0,u:"Bats use ultrasound for echolocation."},
 {j:"nombor",t:"How many times is the frequency of Q compared with P?",b:2,tol:0.05,suf:"times",u:"512 ÷ 256 = 2."},
 {j:"banyak",t:"Choose ALL the CORRECT statements based on the table.",p:["P and R have the same pitch","P and Q have the same loudness","S is ultrasound","R has a higher pitch than P","Q is the loudest"],b:[0,1,2],u:"R has the same pitch as P because the frequency is the same, and R is the loudest."}],
 bos:{j:"pilih",t:"A flute player blows harder without changing the fingering. The oscilloscope display will show:",p:["A higher wave","A closer wave of the same height","A lower, more spread-out wave","No wave at all"],b:0,u:"Blowing harder increases the amplitude; the position of the fingers decides the frequency."}},

{n:4, tempat:"Research Ship", sk:"10.3 Analysing the application of sonar", lampiran:"sonar",
 kadNama:"Sonar", kadEm:"\u{1F6A2}", kadFakta:"Sonar sends pulses of sound into the water and measures the time for the echo to return to calculate distance.",
 bosKadNama:"Modern Fisherman", bosKadEm:"\u{1F3A3}", bosKadFakta:"Fishermen use sonar fish finders to detect shoals of fish under the boat.",
 soalan:[
 {j:"nombor",t:"What is the depth of the sea at location A, in metres?",b:15,tol:0.05,suf:"m",u:"(1500 × 0.02) ÷ 2 = 15 m."},
 {j:"nombor",t:"What is the depth of the sea at location B, in metres?",b:60,tol:0.5,suf:"m",u:"(1500 × 0.08) ÷ 2 = 60 m."},
 {j:"nombor",t:"What is the depth of the sea at location C, in metres?",b:1500,tol:0.5,suf:"m",u:"(1500 × 2.0) ÷ 2 = 1500 m."},
 {j:"pilih",t:"Why must speed × time be divided by two?",p:["The sound goes to the bottom and back","Sound travels at half speed in water","The ship moves while the sound is sent","The seabed absorbs half of the sound"],b:0,u:"The time recorded is the time for the journey there and back."},
 {j:"pilih",t:"At location D, two echoes are received. What is the most reasonable explanation?",p:["An echo from the wreck, then the seabed","Both from the seabed at different times","The sound split in two because the water is too cold","The ship sent two sounds at once"],b:0,u:"A nearer object reflects the sound earlier."},
 {j:"nombor",t:"What is the depth of the shipwreck at location D, in metres?",b:37.5,tol:0.05,suf:"m",u:"(1500 × 0.05) ÷ 2 = 37.5 m."},
 {j:"pilih",t:"A submarine moves towards location C. Information from the sonar is most useful for:",p:["Avoiding collisions","Measuring the temperature of the seawater","Deciding the colour of fish","Calculating the time of sunset"],b:0,u:"Sonar measures the distance to objects and the seabed."},
 {j:"pilih",t:"If the speed of sound in water is mistakenly taken as 340 m/s, the depth calculated will be:",p:["Too small","Too big","The same","Zero"],b:0,u:"340 m/s is the speed of sound in air; sound is much faster in water."}],
 bos:{j:"pilih",t:"A port wants to make sure that a big ship that needs a depth of 20 m can dock. Which location is suitable?",p:["B","A","A and B","None"],b:0,u:"A is only 15 m; B is 60 m deep."}},

{n:5, tempat:"New Music Room", sk:"10.1 / 10.3 Evaluating sound-absorbing materials", lampiran:"bahan",
 kadNama:"Acoustics", kadEm:"\u{1F3B5}", kadFakta:"Concert halls are designed with surfaces that absorb and reflect sound in balance so that the music is heard clearly.",
 bosKadNama:"Noise Pollution", bosKadEm:"\u{1F4E2}", bosKadFakta:"Very loud sound for a long time can damage hearing permanently.",
 soalan:[
 {j:"pilih",t:"Which material absorbs the most sound?",p:["Mineral fibre panel","Polyurethane foam panel","Paper egg tray","Painted cement wall"],b:0,u:"80% of the sound is absorbed."},
 {j:"pilih",t:"Why does the music room echo with painted cement walls?",p:["Hard surfaces reflect sound","Cement produces extra sound","Paint absorbs all sound","Cement slows sound down a lot"],b:0,u:"Only 2% is absorbed."},
 {j:"pilih",t:"A teacher suggests egg trays because they are the cheapest. Evaluate the suggestion.",p:["Not suitable; low absorption, not fire resistant","Very suitable because they absorb the most sound","Suitable because they are fire resistant","Not suitable because they are too heavy"],b:0,u:"Only 15% is absorbed, and flammable materials are dangerous in schools."},
 {j:"pilih",t:"Why must polyurethane foam, although it absorbs a lot of sound, be considered carefully?",p:["It is not fire resistant","It is too expensive","It reflects sound","It has no effect"],b:0,u:"Fire safety is important in a room used by many students."},
 {j:"nombor",t:"What is the cost of installing mineral fibre panels over 40 m², in RM?",b:1800,tol:0.5,suf:"RM",u:"40 × 45 = RM1800."},
 {j:"pilih",t:"The school has a budget of RM1000 for 40 m². What is the most appropriate choice?",p:["Polyurethane foam","Mineral fibre even though it exceeds the budget","Egg trays for the whole room","No change to the walls"],b:0,u:"40 × 25 = RM1000; mineral fibre at RM1800 exceeds the budget."},
 {j:"pilih",t:"If the budget is increased to RM2000, the most appropriate choice is:",p:["Mineral fibre panels","Paper egg trays","Polyurethane foam","Repainted cement walls"],b:0,u:"It absorbs the most sound and is fire resistant."},
 {j:"pilih",t:"Besides wall panels, a cheap way to reduce echo in a music room is to:",p:["Install carpet and thick curtains","Add big mirrors on the walls","Paint the walls with gloss paint","Remove all the soft furniture"],b:0,u:"Soft surfaces absorb sound."}],
 bos:{j:"pilih",t:"The principal must choose materials for a big hall used for assemblies and concerts. What is the most appropriate decision?",p:["Mineral fibre on some of the walls","Foam on all surfaces including the floor","Cement walls with no treatment","Egg trays on all the walls"],b:0,u:"A hall needs a balance between absorption and reflection, and fire-resistant materials."}},

{n:6, tempat:"Sound Innovation Studio", sk:"10.2 / 10.3 Creating using the concept of sound",
 kadNama:"Stethoscope", kadEm:"\u{1FA7A}", kadFakta:"A stethoscope channels the sound of the heart through tubes so that a doctor can hear it clearly.",
 bosKadNama:"Smart Cane", bosKadEm:"\u{1F9AF}", bosKadFakta:"A smart cane for the visually impaired uses ultrasonic sensors to detect obstacles ahead.",
 soalan:[
 {j:"pilih",t:"You make a musical instrument from glass bottles filled with water. How do you get a higher note when a bottle is tapped?",p:["Reduce the water in the bottle","Add water to the bottle","Use a bigger bottle","Tap the bottle harder"],b:0,u:"When the bottle is tapped, less water makes the vibration faster, so the note is higher. If the bottle is blown, the effect is the opposite. Tapping harder only adds loudness."},
 {j:"pilih",t:"You make a tin-can telephone to play with. Why must the string be taut?",p:["Vibrations travel well along a taut string","A loose string makes a louder sound","A taut string absorbs all the sound","The cans need a long string"],b:0,u:"A loose string absorbs the vibrations."},
 {j:"pilih",t:"You design a smart cane for the visually impaired. Which sensor is most suitable?",p:["An ultrasonic sensor that measures echoes","A light sensor that measures colour","A thermometer that measures temperature","A compass that measures direction"],b:0,u:"The echo time gives the distance to an obstacle."},
 {j:"pilih",t:"Your house is near a noisy main road. What is the most effective suggestion?",p:["Plant trees and put up thick curtains","Open all the windows all day","Paint the outside walls glossy white","Fit tiles on all the walls"],b:0,u:"Trees and thick cloth absorb sound."},
 {j:"pilih",t:"You make a simple stethoscope from a funnel and a tube. What is the most important feature?",p:["A tightly sealed tube","A tube with holes so fresh air comes in","A small funnel the size of a fingertip","A ten-metre-long tube"],b:0,u:"The sound is channelled directly to the ear through the air in the tube."},
 {j:"pilih",t:"You design an emergency alarm for students on a big field. Which sound is most suitable?",p:["Loud and easy to hear","Very quiet so it does not frighten","Ultrasonic so it is not noisy","Infrasonic so it shakes the ground"],b:0,u:"The sound must be in the range of hearing and loud enough."},
 {j:"pilih",t:"You make a guitar from a recycled box. How do you produce different notes on one string?",p:["Press the string at different lengths","Colour the string a different colour","Put the box in the sun","Use a heavier box"],b:0,u:"A shorter string produces a higher frequency."},
 {j:"pilih",t:"How would you test whether your sound absorber design is effective?",p:["Measure the decibels before and after","Ask a friend whether the room looks nice","Weigh the absorbing material","Measure the room temperature"],b:0,u:"A sound meter or a phone app gives readings in decibels."}],
 bos:{j:"buka",
  t:"Your classroom is beside a noisy workshop so that students find it hard to concentrate. Design a solution using knowledge of sound waves.",
  arahan:"Describe the cause of the problem, the concepts of sound used (absorption, reflection, medium), the materials chosen and why, including fire safety, how effectiveness is measured (for example decibel readings), and the cost and the effect on other classes.",
  u:"A strong TP6 answer chooses safe absorbing materials based on data, explains the reflection and absorption of sound, and plans decibel measurements."}}
];

module.exports = {
  id:"t2b10", tingkatan:2, kod:"10.0 Sound Waves",
  tajuk:"Sound Trail",
  subtajuk:"Science Form 2 · Chapter 10 Sound Waves",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the characteristics of sound waves, the unit of frequency and the range of human hearing. The next step is to explain how frequency and amplitude relate to the sound heard.",
   2:"{n} understands loudness, pitch, echoes and the Doppler effect and can explain them. More practice is needed in interpreting oscilloscope displays.",
   3:"{n} can interpret frequency and amplitude data to compare sounds. Encourage using the terms loudness and pitch accurately.",
   4:"{n} is able to analyse sonar data to calculate depth and identify objects on the seabed. Next, practise evaluating sound-absorbing materials.",
   5:"{n} can evaluate sound-absorbing materials based on effectiveness, cost and safety. Ready for a creative task.",
   6:"{n} successfully created a solution to a sound problem that is creative and practical. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Sound Waves. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ amplitud:R_AMPLITUD, gema:R_GEMA, osilo:T_OSILO, sonar:T_SONAR, bahan:T_BAHAN },
  aras:ARAS
};
