/* English source (DLP) — Science KSSM Form 1, Chapter 8.0 Light and Optics.
   Translation of sumber/t1b8.js. SPI copied from the official English DSKP
   (Bahagian Pembangunan Kurikulum); only obvious typos corrected.
   Run `node bina.js --en t1b8` to check it and generate bank-en-t1b8.js.
   Structure must match sumber/t1b8.js exactly. Correct answer at index 0.

   Terms: dispersion of light = white light split by a prism; scattering of
   light = light scattered by particles in the air. */

const SPI = [
"Recall the knowledge and science skills on mirrors / characteristic of light / reflection of light / refraction of light / dispersion of light / scattering of light / addition and subtraction of light.",
"Understand mirrors / characteristic of light / reflection of light / refraction of light / dispersion of light / scattering of light / addition and subtraction of light and able to explain their understanding.",
"Apply mirrors / characteristic of light / reflection of light / refraction of light / dispersion of light / scattering of light / addition and subtraction of light through a simple task.",
"Analyse knowledge of mirrors / characteristic of light / reflection of light / refraction of light / dispersion of light / scattering of light / addition and subtraction of light in context of problem solving about events or natural phenomena.",
"Evaluate mirrors / characteristic of light / reflection of light / refraction of light / dispersion of light / scattering of light / addition and subtraction of light in the context of problem solving and decision making to carry out a task.",
"Design a presentation using multi media / visual / folio / poster / role play / drama; with creative and innovative use of science knowledge and skills of mirrors / characteristic of light / reflection of light / refraction of light / dispersion of light / scattering of light / addition and subtraction of light in the context of problem solving and decision making; with regards to the social values/ economy / culture of the community."];

/* ---------- attachments ---------- */

const R_LIHAT = {
  "jenis": "aliran",
  "mod": "turun",
  "nod": [
    "Light source",
    "Light hits the object",
    "Light is reflected",
    "Eye",
    "Brain interprets the image"
  ],
  "kapsyen": "Figure 1 · How we see an object.",
  "alt": "Vertical flow diagram: light source, light hits the object, light is reflected, eye, then the brain interprets the image"
};

const R_SINARBIAS = {
  "jenis": "sinar",
  "mod": "pembiasan",
  "sudutTuju": 50,
  "indeks": 1.5,
  "atas": "Air",
  "bawah": "Glass",
  "kapsyen": "Figure 1 · A ray of light travelling from air into glass.",
  "alt": "Ray diagram: light from air enters glass at an angle of incidence of fifty degrees and is refracted at a smaller angle, closer to the normal line"
};

const T_PANTUL =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Trial</th>'+
'<th class="n">Angle of incidence, i (&deg;)</th><th class="n">Angle of reflection, r (&deg;)</th></tr></thead><tbody>'+
'<tr><td>1</td><td class="n">20</td><td class="n">20</td></tr>'+
'<tr><td>2</td><td class="n">35</td><td class="n">35</td></tr>'+
'<tr><td>3</td><td class="n">50</td><td class="n">50</td></tr>'+
'<tr><td>4</td><td class="n">65</td><td class="n">?</td></tr>'+
'</tbody></table></div><p class="qnote">A ray of light from a ray box is directed at a plane mirror. Angles are measured from the normal.</p>';

const T_BIAS =
'<div class="scrollx"><table class="datatable"><thead><tr><th class="n">Angle of incidence in air (&deg;)</th>'+
'<th class="n">Angle of refraction in water (&deg;)</th><th class="n">Angle of refraction in glass (&deg;)</th></tr></thead><tbody>'+
'<tr><td class="n">0</td><td class="n">0</td><td class="n">0</td></tr>'+
'<tr><td class="n">30</td><td class="n">22</td><td class="n">19</td></tr>'+
'<tr><td class="n">45</td><td class="n">32</td><td class="n">28</td></tr>'+
'<tr><td class="n">60</td><td class="n">41</td><td class="n">35</td></tr>'+
'</tbody></table></div><p class="qnote">A ray of light travels from air into water and into a glass block. Values are rounded to the nearest degree.</p>';

const T_WARNA =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Shirt</th>'+
'<th>Under white light</th><th>Under red light</th><th>Under blue light</th></tr></thead><tbody>'+
'<tr><td>1</td><td>White</td><td>Red</td><td>Blue</td></tr>'+
'<tr><td>2</td><td>Red</td><td>Red</td><td>Black</td></tr>'+
'<tr><td>3</td><td>Blue</td><td>Black</td><td>Blue</td></tr>'+
'<tr><td>4</td><td>Yellow</td><td>Red</td><td>Black</td></tr>'+
'</tbody></table></div><p class="qnote">The colours of shirts seen on stage under lights of different colours. A yellow object reflects red and green light.</p>';

/* ---------- stops ---------- */

const ARAS = [

{n:1, tempat:"Mirror Room", sk:"8.1 / 8.2 Mirrors and the characteristics of light", lampiran:"lihat",
 kadNama:"Speed of Light", kadEm:"\u{26A1}", kadFakta:"Light travels about 300 000 km every second, enough to go around the Earth more than 7 times in one second.",
 bosKadNama:"Convex Mirror", bosKadEm:"\u{1F697}", bosKadFakta:"The mirror at a sharp bend is a convex mirror because it gives a wider view.",
 soalan:[
 {j:"pilih",t:"Light travels in:",p:["Straight lines","Zigzag lines","Circles","Curves only"],b:0,u:"That is why shadows form when an opaque object blocks light."},
 {j:"pilih",t:"Based on Figure 1, why can we not see anything in a pitch-dark room?",p:["No light is reflected to the eyes","The human eye stops working in the dark","The brain cannot interpret images at night","The objects in the room stop reflecting light"],b:0,u:"Without a light source, no light can be reflected by objects into the eyes."},
 {j:"pilih",t:"An image that can be formed on a screen is called a:",p:["Real image","Virtual image","Upright image","Laterally inverted image"],b:0,u:"A virtual image cannot be caught on a screen."},
 {j:"pilih",t:"The mirror that magnifies the image of a near object is the:",p:["Concave mirror","Convex mirror","Plane mirror","Coloured mirror"],b:0,u:"Make-up mirrors and dentist's mirrors are concave mirrors."},
 {j:"pilih",t:"Vehicle side mirrors are convex mirrors because they:",p:["Give a wide view","Magnify the image","Produce a real image","Absorb light"],b:0,u:"The image is smaller but the area seen is wider."},
 {j:"pilih",t:"The characteristics of an image in a plane mirror are:",p:["Upright, same size and laterally inverted","Inverted, bigger and real","Upright, smaller and real","Inverted, same size and virtual"],b:0,u:"The image in a plane mirror is also virtual."},
 {j:"pilih",t:"The optical device that uses two plane mirrors to see from behind a wall is a:",p:["Periscope","Kaleidoscope","Microscope","Magnifying glass"],b:0,u:"The two mirrors are arranged parallel at an angle of 45°."},
 {j:"banyak",t:"Choose ALL the uses of concave mirrors.",p:["Make-up mirror","Torch reflector","Dentist's mirror","Mirror at a sharp bend","Motorcycle side mirror"],b:[0,1,2],u:"Mirrors at sharp bends and side mirrors are convex mirrors."}],
 bos:{j:"pilih",t:"A shopkeeper puts a large curved mirror in the corner of the shop to watch customers. The mirror is a:",p:["Convex mirror","Concave mirror","Plane mirror","Two-sided mirror"],b:0,u:"A convex mirror shows a wide area in one view."}},

{n:2, tempat:"Swimming Pool", sk:"8.3 / 8.4 / 8.5 / 8.6 Reflection, refraction, dispersion and scattering", lampiran:"sinarbias",
 kadNama:"Rainbow", kadEm:"\u{1F308}", kadFakta:"A rainbow forms when raindrops disperse sunlight into seven colours.",
 bosKadNama:"Blue Sky", bosKadEm:"\u{1F30C}", bosKadFakta:"The sky looks blue because blue light is scattered more by the particles in the air than other colours.",
 soalan:[
 {j:"pilih",t:"The law of reflection states that:",p:["The angle of incidence equals the angle of reflection","The angle of incidence is twice the angle of reflection","The angle of reflection is always 90°","The angle of incidence is smaller than the angle of reflection"],b:0,u:"The incident ray, the reflected ray and the normal also lie in the same plane."},
 {j:"pilih",t:"Refraction of light happens when light:",p:["Passes through media of different densities","Hits a very smooth mirror","Travels in a vacuum","Is blocked by an opaque object"],b:0,u:"The speed of light changes when it enters another medium, so its direction changes."},
 {j:"pilih",t:"Why does the bottom of a pool look shallower than it really is?",p:["Light is refracted as it leaves the water","Water reflects all the light","The eye cannot focus in water","Light travels faster in water"],b:0,u:"Light is refracted away from the normal when it leaves water for air."},
 {j:"pilih",t:"Based on Figure 1, when light travels from air into glass, it is refracted:",p:["Towards the normal","Away from the normal","Along the normal","Back into the air"],b:0,u:"Glass is denser than air."},
 {j:"pilih",t:"Dispersion of light happens when white light:",p:["Splits into a spectrum of colours through a prism","Is reflected by a plane mirror","Is completely absorbed by a black object","Travels straight in air"],b:0,u:"The spectrum is red, orange, yellow, green, blue, indigo and violet."},
 {j:"pilih",t:"Why does the setting sun look reddish?",p:["More air scatters the blue, leaving red","The sun becomes cooler in the evening","Clouds change white light to red","The sun gives out only red light in the evening"],b:0,u:"In the evening, light travels a longer path through the atmosphere."},
 {j:"pilih",t:"Stars twinkle at night because:",p:["Their light is refracted by moving layers of air","The stars switch on and off repeatedly","Clouds block the starlight every second","Stars move very fast in space"],b:0,u:"Layers of air with different temperatures and densities refract starlight in changing ways."},
 {j:"pilih",t:"The safety jackets of road workers have strips that shine when lit by car headlights. This uses the concept of:",p:["Reflection of light","Refraction of light","Scattering of light","Absorption of light"],b:0,u:"The reflective strips reflect the light back towards the driver."}],
 bos:{j:"banyak",t:"Choose ALL the phenomena caused by refraction of light.",p:["A drinking straw looks bent in a glass of water","The bottom of a pool looks shallow","Stars twinkle","The image of your face in a plane mirror","The shadow of a tree in the evening"],b:[0,1,2],u:"Mirrors use reflection, and shadows form because light travels in straight lines."}},

{n:3, tempat:"Ray Box Lab", sk:"8.1 / 8.3 Applying reflection of light", lampiran:"pantul",
 kadNama:"Normal", kadEm:"\u{1F4D0}", kadFakta:"The normal is an imaginary line perpendicular to the surface of the mirror at the point where the ray hits it.",
 bosKadNama:"Kaleidoscope", bosKadEm:"\u{1F52E}", bosKadFakta:"A kaleidoscope uses three plane mirrors to produce beautiful repeating patterns.",
 soalan:[
 {j:"nombor",t:"Based on the table, what is the angle of reflection for trial 4, in degrees?",b:65,tol:0.5,suf:"°",u:"The angle of reflection equals the angle of incidence, which is 65°."},
 {j:"pilih",t:"What is the relationship between the angle of incidence and the angle of reflection in the table?",p:["Always equal","The angle of reflection is always larger","There is no relationship","The angle of incidence is always double"],b:0,u:"This is the Law of Reflection."},
 {j:"nombor",t:"A ray of light hits a mirror at an angle of incidence of 30°. What is the angle between the incident ray and the reflected ray, in degrees?",b:60,tol:0.5,suf:"°",u:"30° + 30° = 60°."},
 {j:"nombor",t:"Aisyah stands 2 m in front of a plane mirror. What is the distance between Aisyah and her image, in metres?",b:4,tol:0.05,suf:"m",u:"The image is 2 m behind the mirror, so the distance is 2 + 2 = 4 m."},
 {j:"pilih",t:"The word AMBULANCE on the front of an ambulance is printed back to front. The reason is that:",p:["The image in a rear-view mirror is laterally inverted","So that pedestrians can read it from behind","So that the writing looks nicer and more attractive","Because a concave mirror magnifies the writing"],b:0,u:"Drivers in front read it correctly through the rear-view mirror."},
 {j:"pilih",t:"A student moves a plane mirror 1 m away from a stationary object. What happens to the distance from the object to the image?",p:["Increases by 2 m","Increases by 1 m","Does not change","Decreases by 1 m"],b:0,u:"The distance from the object to the mirror increases by 1 m, and the distance from the mirror to the image also increases by 1 m."},
 {j:"pilih",t:"In a periscope, at what angle is each plane mirror fixed?",p:["45°","90°","30°","60°"],b:0,u:"An angle of 45° reflects light through 90° towards the second mirror."},
 {j:"pilih",t:"A warning triangle is placed behind a broken-down car at night. It works because:",p:["It reflects the light of other cars' headlights","It produces its own light without a battery","It absorbs light so it does not dazzle","It refracts light into seven colours"],b:0,u:"The reflector helps other drivers to see the broken-down car from far away."}],
 bos:{j:"pilih",t:"A ray box is aimed at a plane mirror with an angle of incidence of 0° (along the normal). Where does the reflected ray go?",p:["Back along the original path","Parallel to the surface of the mirror","At an angle of 90° from the normal","Through the mirror without being reflected"],b:0,u:"An angle of incidence of 0° gives an angle of reflection of 0°."}},

{n:4, tempat:"Optical Aquarium", sk:"8.4 Analysing refraction of light", lampiran:"bias",
 kadNama:"Glass Block", kadEm:"\u{1F9CA}", kadFakta:"Light travels at about 200 000 km/s in glass, more slowly than in air.",
 bosKadNama:"Optical Fibre", bosKadEm:"\u{1F310}", bosKadFakta:"Optical fibres carry internet data as pulses of light that are reflected again and again inside the glass fibre.",
 soalan:[
 {j:"pilih",t:"Based on the table, a ray of light entering water is refracted:",p:["Towards the normal","Away from the normal","Not at all","Back into the air"],b:0,u:"The angle of refraction is smaller than the angle of incidence."},
 {j:"pilih",t:"Which material refracts light more?",p:["Glass","Water","Both the same","Air"],b:0,u:"At the same angle of incidence, the angle of refraction in glass is smaller."},
 {j:"pilih",t:"What happens when the angle of incidence is 0°?",p:["The light does not change direction","The light is refracted the most","The light is completely reflected","The light stops moving"],b:0,u:"Light entering along the normal is not refracted, although its speed changes."},
 {j:"pilih",t:"What is the relationship between the angle of incidence and the angle of refraction in glass?",p:["As the angle of incidence increases, the angle of refraction increases","As the angle of incidence increases, the angle of refraction decreases","The angle of refraction is always equal to the angle of incidence","The angle of refraction stays at 19° whatever the angle of incidence"],b:0,u:"The angle of refraction rises from 19° to 35° as the angle of incidence rises from 30° to 60°."},
 {j:"nombor",t:"At an angle of incidence of 60°, what is the difference in the angle of refraction between water and glass, in degrees?",b:6,tol:0.05,suf:"°",u:"41° − 35° = 6°."},
 {j:"pilih",t:"If a ray of light travels from glass into air, what happens?",p:["It is refracted away from the normal","It is refracted towards the normal","It stops at the surface","It becomes slower"],b:0,u:"The light travels from a denser medium to a less dense medium."},
 {j:"pilih",t:"A fisherman throws a spear straight at a fish he sees in a river but misses. What is the most reasonable cause?",p:["The real fish is deeper than its image","The real fish is closer to the surface","Water reflects all the light from the fish","The spear moves more slowly in water"],b:0,u:"Refraction makes the fish look shallower; the fisherman should aim lower."},
 {j:"banyak",t:"Choose ALL the conclusions that are supported by the data.",p:["Light is refracted when it enters a denser medium","Glass refracts light more than water","Light along the normal is not refracted","Water is denser than glass","The angle of refraction is larger than the angle of incidence"],b:[0,1,2],u:"The angle of refraction is smaller than the angle of incidence because the light enters a denser medium."}],
 bos:{j:"pilih",t:"The teacher wants students to see the clearest effect of refraction in a demonstration. What is the most appropriate choice based on the data?",p:["Glass block with an angle of incidence of 60°","Glass block with an angle of incidence of 0°","Beaker of water with an angle of incidence of 0°","Beaker of water with an angle of incidence of 30°"],b:0,u:"The difference between the angle of incidence and the angle of refraction is greatest (25°) for glass at 60°."}},

{n:5, tempat:"Theatre Stage", sk:"8.7 Evaluating the addition and subtraction of light", lampiran:"warna",
 kadNama:"Primary Colours", kadEm:"\u{1F3A8}", kadFakta:"A phone screen produces millions of colours just by combining dots of red, green and blue light.",
 bosKadNama:"Colour Filter", bosKadEm:"\u{1F534}", bosKadFakta:"A red filter lets only red light through and absorbs the other colours.",
 soalan:[
 {j:"pilih",t:"Why does shirt 2 look black under blue light?",p:["A red shirt absorbs blue light","A red shirt reflects blue light","Blue light does not reach the stage","The shirt is really black"],b:0,u:"There is no red light to be reflected, so no light reaches the eyes."},
 {j:"pilih",t:"Why does shirt 4 look red under red light?",p:["A yellow shirt reflects red","A yellow shirt absorbs red light","Red light turns into yellow","A yellow shirt reflects blue light"],b:0,u:"A yellow object reflects red and green light."},
 {j:"pilih",t:"Which shirt can be used for a 'disappear in the dark' effect under blue light?",p:["Shirt 2 or 4","Shirt 1 or 3","Shirt 1 only","Shirt 3 only"],b:0,u:"Both look black under blue light."},
 {j:"pilih",t:"The director wants all the actors to be seen in their original colours. Which light is most suitable?",p:["White light","Red light","Blue light","Green light"],b:0,u:"White light contains all the colours to be reflected."},
 {j:"pilih",t:"The director wants shirt 1 to look yellow without changing the shirt. Which combination of lights is most suitable?",p:["Red and green","Red and blue","Blue and green","Red only"],b:0,u:"Red + green = yellow. A white shirt reflects both."},
 {j:"pilih",t:"A designer suggests shirt 3 for a scene lit with red light so the actor stands out. Evaluate the suggestion.",p:["Not suitable; a blue shirt looks black under red light","Suitable; blue is a bright primary colour","Suitable; blue reflects red light well","Not suitable; a blue shirt looks white under red light"],b:0,u:"Shirt 1 or 2 would stand out more under red light."},
 {j:"pilih",t:"What colour is produced when red, green and blue light overlap on a screen?",p:["White","Black","Yellow","Cyan"],b:0,u:"This is an example of the addition of light."},
 {j:"pilih",t:"A red filter and a blue filter are placed one behind the other in front of a white lamp. What is seen on the screen?",p:["Dark","Magenta","Red","Blue"],b:0,u:"The red filter absorbs blue, and the blue filter absorbs red, so almost no light passes through both."}],
 bos:{j:"pilih",t:"A school theatre can afford only two coloured lamps. They want to be able to produce yellow, red and green light. What is the most appropriate choice?",p:["A red lamp and a green lamp","A red lamp and a blue lamp","A blue lamp and a green lamp","Two yellow lamps"],b:0,u:"Red alone, green alone, or both together for yellow."}},

{n:6, tempat:"Optics Workshop", sk:"8.1 / 8.3 / 8.7 Designing optical devices",
 kadNama:"Periscope", kadEm:"\u{1F52D}", kadFakta:"Submarines use periscopes to see the sea surface without surfacing completely.",
 bosKadNama:"Solar Cooker", bosKadEm:"\u{2600}", bosKadFakta:"A solar cooker uses a big concave mirror to focus sunlight so that it can cook food.",
 soalan:[
 {j:"pilih",t:"You build a periscope from a milk carton to see from behind a wall. What is the correct position of the mirrors?",p:["Two parallel plane mirrors, tilted at 45°","Two convex mirrors side by side","One concave mirror in the middle","Two plane mirrors perpendicular to the carton"],b:0,u:"Each mirror reflects the light through 90°."},
 {j:"pilih",t:"A sharp bend in your village has frequent accidents. What is the most effective suggestion?",p:["Install a convex mirror at the bend","Install a concave mirror at the bend","Install a small plane mirror","Paint the road a dark colour"],b:0,u:"A convex mirror gives a wide view of vehicles coming from the opposite direction."},
 {j:"pilih",t:"You design a school bag for students who walk to school at dawn. What is the most important feature?",p:["Reflective strips","Completely black colour","Transparent fabric","A very small size"],b:0,u:"Reflective strips reflect the light of vehicle headlights so students are easy to see."},
 {j:"pilih",t:"You design a solar cooker for camping. Which shape of reflector is most effective?",p:["Concave mirror that focuses light","Convex mirror that spreads light","Small plane mirror laid flat","Black paper placed upright"],b:0,u:"A concave mirror focuses sunlight onto one point."},
 {j:"pilih",t:"You want to produce a rainbow in the school garden for an exhibition. What is the most practical way?",p:["A fine water spray with your back to the sun","A red lamp in a dark box","A convex mirror in the middle of the field","A jar of water placed in the shade"],b:0,u:"Water droplets disperse sunlight into a spectrum of colours."},
 {j:"pilih",t:"You design a school signboard that is clear at night without electricity. Which material is most suitable?",p:["Reflective stickers","Glossy black paint","Transparent paper","Black velvet cloth"],b:0,u:"Reflective stickers reflect vehicle headlights towards drivers."},
 {j:"pilih",t:"You design coloured stage lighting using torches and filters. To produce magenta, use:",p:["A red lamp and a blue lamp overlapping","One lamp with a red and a blue filter","A green lamp and a red lamp overlapping","One lamp with a green filter only"],b:0,u:"Red + blue = magenta through the addition of light. Two overlapping filters absorb almost all the light."},
 {j:"pilih",t:"How would you test whether your periscope design works well?",p:["Read letters on a card at a fixed distance from behind a wall","Measure the weight of the periscope with a balance","Ask a friend whether the colour of the periscope is attractive","Look straight at the sun through it"],b:0,u:"A test that can be repeated gives evidence of performance. Never look at the sun through an optical device."}],
 bos:{j:"buka",
  t:"A children's playground in your area is dark at dusk and has a bend that is hard to see around. Design a solution using the concepts of light and mirrors so that the playground is safer.",
  arahan:"Describe your design, the type of mirror or reflective material used and the characteristics of its image, a drawing or description of the path of the light rays, how its effectiveness is tested, and the cost and the safety of the children.",
  u:"A strong TP6 answer chooses a convex mirror or reflective material with the correct reasons about image characteristics, explains the path of light, and takes cost and safety into account."}}
];

module.exports = {
  id:"t1b8", tingkatan:1, kod:"8.0 Light and Optics",
  tajuk:"Light Trail",
  subtajuk:"Science Form 1 · Chapter 8 Light and Optics",
  spi:SPI,
  ulasan:{
   1:"{n} can recall the characteristics of light, the types of mirrors and the characteristics of images in a plane mirror. The next step is to explain reflection and refraction of light.",
   2:"{n} understands reflection, refraction, dispersion and scattering of light and can explain everyday phenomena. More practice is needed in drawing ray diagrams.",
   3:"{n} can apply the Law of Reflection to calculate angles and image distances in a plane mirror. Encourage sketching ray diagrams with the normal drawn correctly.",
   4:"{n} is able to analyse refraction data to compare media and predict the direction of refraction. Next, practise evaluating the use of coloured light.",
   5:"{n} can evaluate the addition and subtraction of light to make sound lighting decisions. Ready for a design task.",
   6:"{n} successfully designed a safe and practical optical device or solution. Excellent achievement for this chapter.",
   tiada:"{n} has not yet shown enough evidence of mastery for the chapter Light and Optics. Suggestion: repeat the first stop activities with guidance from a peer."
  },
  lampiran:{ lihat:R_LIHAT, sinarbias:R_SINARBIAS, pantul:T_PANTUL, bias:T_BIAS, warna:T_WARNA },
  aras:ARAS
};
