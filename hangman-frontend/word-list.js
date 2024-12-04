const wordList = {
    Insects: [
        { word: "butterfly", hint: "An insect with colorful wings and a slender body." },
        { word: "ant", hint: "A small insect known for its teamwork and building colonies." },
        { word: "bee", hint: "An insect that produces honey and pollinates flowers." },
        { word: "dragonfly", hint: "A fast-flying insect with long wings and a slender body." },
        { word: "ladybug", hint: "A small beetle with a red shell and black spots." },
        { word: "grasshopper", hint: "An insect known for its jumping ability and chirping sound." },
        { word: "mosquito", hint: "A small insect known for its bite and ability to spread diseases." },
        { word: "cockroach", hint: "A common household pest with a tough exoskeleton." },
        { word: "termite", hint: "An insect that feeds on wood and can damage buildings." },
        { word: "mantis", hint: "An insect known for its praying stance and predatory behavior." },
        { word: "locust", hint: "A type of grasshopper known for forming destructive swarms." },
        { word: "caterpillar", hint: "The larval stage of a butterfly or moth." },
        { word: "firefly", hint: "An insect that produces light through bioluminescence." },
        { word: "cricket", hint: "An insect known for its chirping sounds at night." },
        { word: "wasp", hint: "An insect with a sting, often more aggressive than bees." },
        { word: "flea", hint: "A small jumping insect that feeds on blood." },
        { word: "bedbug", hint: "A tiny insect that feeds on blood, often found in mattresses." },
        { word: "earwig", hint: "An insect with pincers at the end of its abdomen." },
        { word: "aphid", hint: "A small insect that feeds on plant sap." },
        { word: "weevil", hint: "A small beetle that infests stored grains and seeds." },
        { word: "silverfish", hint: "A wingless insect known for eating paper and fabrics." },
        { word: "beetle", hint: "An insect with a hard exoskeleton and wings." },
        { word: "gnat", hint: "A tiny flying insect often found in swarms." },
        { word: "stickbug", hint: "An insect that resembles a twig or stick." },
        { word: "cicada", hint: "An insect known for its loud, buzzing mating calls." },
        { word: "mayfly", hint: "A short-lived insect with delicate wings." },
        { word: "lacewing", hint: "An insect with delicate, lacy wings." },
        { word: "springtail", hint: "A tiny, jumping insect found in soil." }
    ],
    Music: [
        { word: "guitar", hint: "A musical instrument with strings." },
        { word: "piano", hint: "A musical instrument with keys played by pressing fingers." },
        { word: "saxophone", hint: "A brass wind instrument played in jazz and blues." },
        { word: "drum", hint: "A percussion instrument beaten with sticks." },
        { word: "trumpet", hint: "A brass instrument with a loud sound." },
        { word: "violin", hint: "A stringed instrument played with a bow." },
        { word: "cello", hint: "A large stringed instrument played sitting down." },
        { word: "flute", hint: "A woodwind instrument producing a soft sound." },
        { word: "keyboard", hint: "An electronic instrument with multiple sounds." },
        { word: "harp", hint: "A large stringed instrument plucked by hand." },
        { word: "organ", hint: "A keyboard instrument producing sound using pipes." },
        { word: "oboe", hint: "A woodwind instrument with a double reed." },
        { word: "clarinet", hint: "A woodwind instrument with a single reed." },
        { word: "tambourine", hint: "A percussion instrument with jingles." },
        { word: "triangle", hint: "A small, triangular percussion instrument." },
        { word: "banjo", hint: "A stringed instrument often played in folk music." },
        { word: "harmonica", hint: "A small wind instrument played with the mouth." },
      
    ],
    Nature: [
        { word: "mountain", hint: "A large natural elevation of the Earth's surface." },
        { word: "river", hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream." },
        { word: "sunset", hint: "The daily disappearance of the sun below the horizon." },
        { word: "canyon", hint: "A deep valley carved by a river." },
        { word: "ocean", hint: "A vast body of saltwater covering most of Earth." },
        { word: "horizon", hint: "The line where the earth's surface and sky appear to meet." }
    ],
    Science: [
        { word: "oxygen", hint: "A colorless, odorless gas essential for life." },
        { word: "galaxy", hint: "A vast system of stars, gas, and dust held together by gravity." },
        { word: "planet", hint: "A celestial body that orbits a star and does not produce light of its own." },
        { word: "gravity", hint: "A force that attracts objects toward the center of a mass." },
        { word: "atom", hint: "The basic unit of matter consisting of a nucleus and electrons." },
        { word: "microscope", hint: "An instrument used to view very small objects." }
    ],
    Food: [
        { word: "pizza", hint: "A savory dish consisting of a round, flattened base with toppings." },
        { word: "coffee", hint: "A popular caffeinated beverage made from roasted coffee beans." },
        { word: "chocolate", hint: "A sweet treat made from cocoa beans." },
        { word: "pasta", hint: "A staple Italian dish made from wheat and water." },
        { word: "burger", hint: "A sandwich made with a patty, usually beef, and various toppings." },
        { word: "sushi", hint: "A Japanese dish made with vinegared rice and seafood." }
    ],
    Sports: [
        { word: "football", hint: "A popular sport played with a spherical ball." },
        { word: "cricket", hint: "A sport played with a bat and ball on a field with wickets." },
        { word: "hockey", hint: "A sport where players use sticks to hit a puck or ball into a goal." },
        { word: "tennis", hint: "A racket sport played on a court with a net in the middle." },
        { word: "boxing", hint: "A combat sport where two competitors punch each other in a ring." },
        { word: "cycling", hint: "A competitive sport involving riding bicycles." }
    ],
    Literature: [
        { word: "novel", hint: "A long work of fiction, typically with a complex plot and characters." },
        { word: "history", hint: "The study of past events and human civilization." },
        { word: "poetry", hint: "A literary form expressing ideas with rhythm and often rhyme." },
        { word: "fable", hint: "A short story featuring animals as characters and conveying a moral." },
        { word: "epic", hint: "A long narrative poem recounting heroic deeds." },
        { word: "drama", hint: "A genre of literature meant to be performed." }
    ],
    Mystery: [
        { word: "paradox", hint: "A statement or situation that contradicts itself or defies intuition." },
        { word: "enigma", hint: "Something that is mysterious, puzzling, or difficult to understand." },
        { word: "riddle", hint: "A question or statement requiring clever thinking to solve." },
        { word: "spy", hint: "A secret agent collecting information covertly." },
        { word: "maze", hint: "A complex network of paths or passages difficult to navigate." },
        { word: "cryptic", hint: "Something that is obscure or puzzling to understand." }
    ],
    Adventure: [
        { word: "safari", hint: "An expedition or journey, typically to observe wildlife in their natural habitat." },
        { word: "vacation", hint: "A period of time devoted to pleasure, rest, or relaxation." },
        { word: "expedition", hint: "A journey with a specific purpose, often for exploration." },
        { word: "treasure", hint: "A collection of valuable items, often hidden." },
        { word: "island", hint: "A piece of land surrounded by water." },
        { word: "jungle", hint: "A dense, tropical forest teeming with wildlife." }
    ]
};


