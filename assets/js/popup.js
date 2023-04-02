(function(){
    var container = document.querySelector(".meme-container");
    var delete1 = document.querySelector("#delete1");
    var delete2 = document.querySelector("#delete2");
    let  text0 = document.querySelector("#text0")
    let  text1 = document.querySelector("#text1")

    
    function download(url, name){
        let a = document.createElement("a");
        a.setAttribute("href", url);
        a.setAttribute("download", name);
        a.click();
    }


    async  function fetchMeme(id,text0,text1){
        let params = new URLSearchParams();
        params.append('username', 'TechhJork');
        params.append('password','pankaj123');
        params.append('template_id', id);
        params.append('text0', text0);
        params.append('text1', text1);
        params.append('max_font_size', '20px');
        params.append('boxes', '');

        const url = 'https://api.imgflip.com/caption_image?' + params.toString();
        console.log(url);
        try{
            let res =  await fetch(url);
            let data = await res.json();

            let memeImg = document.querySelector(".selected-meme-img")
            
            editButton.innerHTML = `Edit`
            editButton.disabled = false;
            editButton.style.cursor = "pointer";
            editButton.classList.remove('disabled:opacity-75')

            

            document.querySelector("#text0").value = "";
            document.querySelector("#text1").value = "";
            

            if( data.data?.url != undefined){
                memeImg.src = data.data.url;
            }else{
                alert("Something went wrong");
            }
            console.log(data);
        }catch(err){ 
            console.log(err);
        }

    }
    // fetchMeme('181913649');

    let editButton = document.querySelector("#edit-button");
    
    editButton.addEventListener("click", function(){
        editButton.innerHTML = `<svg class="animate-spin ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"  viewBox="0 0 24 24">
                                   <circle class="opacity-25" cx="12" cy="12" r="10" stroke="#fff" stroke-width="4" ></circle>
                                   <path class="opacity-75" fill="#fff" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg> Loading...`
        editButton.disabled = true;
        editButton.style.cursor = "not-allowed";
        editButton.classList.add('disabled:opacity-75')

        text0 = document.querySelector("#text0").value;
        text1 = document.querySelector("#text1").value;
        let id = document.querySelector("#meme-id").value;
        fetchMeme(id,text0,text1);
    })


  

    delete1.addEventListener("click", function(){
        document.querySelector("#text0").value = "";
    })

    delete2.addEventListener("click", function(){
        document.querySelector("#text1").value = "";
    })


var templates = [
    {
        "id": "181913649",
        "name": "Drake Hotline Bling",
        "alternate": [
            "drakeposting",
            "drakepost",
            "drake hotline approves",
            "drake no yes",
            "drake like dislike",
            "drake faces"
        ],
        "img": "https://i.imgflip.com/4/30b1gx.jpg"
    },
    {
        "id": "112126428",
        "name": "Distracted Boyfriend",
        "alternate": [
            "distracted bf",
            "guy checking out another girl",
            "man looking at other woman",
            "jealous girlfriend",
            "guy looking back",
            "cheater temptation",
            "wandering eyes",
            "disloyal boyfriend"
        ],
        "img": "https://i.imgflip.com/4/1ur9b0.jpg"
    },
    {
        "id": "87743020",
        "name": "Two Buttons",
        "alternate": [
            "2 red buttons",
            "choice button",
            "which button",
            "daily struggle",
            "hard choice to make"
        ],
        "img": "https://i.imgflip.com/4/1g8my4.jpg"
    },
    {
        "id": "438680",
        "name": "Batman Slapping Robin",
        "img": "https://i.imgflip.com/4/9ehk.jpg"
    },
    {
        "id": "129242436",
        "name": "Change My Mind",
        "alternate": [
            "Steven Crowder's sign",
            "prove me wrong"
        ],
        "img": "https://i.imgflip.com/4/2gytch.jpg"
    },
    {
        "id": "124822590",
        "name": "Left Exit 12 Off Ramp",
        "alternate": [
            "car drifts off highway",
            "sharp turn on road"
        ],
        "img": "https://i.imgflip.com/4/22bdq6.jpg"
    },
    {
        "id": "217743513",
        "name": "UNO Draw 25 Cards",
        "alternate": [
            "do something you don’t like or draw 25 cards",
            "uno dilemma",
            "uno or draw 25",
            "draw 25"
        ],
        "img": "https://i.imgflip.com/4/3lmzyx.jpg"
    },
    {
        "id": "131087935",
        "name": "Running Away Balloon",
        "alternate": [
            "big yellow ball and pink guy",
            "me vs my hopes and dreams"
        ],
        "img": "https://i.imgflip.com/4/261o3j.jpg"
    },
    {
        "id": "61579",
        "name": "One Does Not Simply",
        "alternate": [
            "one does not simply walk into morder",
            "lord of the rings boromir"
        ],
        "img": "https://i.imgflip.com/4/1bij.jpg"
    },
    {
        "id": "93895088",
        "name": "Expanding Brain",
        "img": "https://i.imgflip.com/4/1jwhww.jpg"
    },
    {
        "id": "102156234",
        "name": "Mocking Spongebob",
        "alternate": [
            "spongebob mock",
            "spongebob chicken",
            "retarded spongebob",
            "sarcastic spongebob",
            "spongebob stupid",
            "spongebob derp",
            "spongebob bird",
            "spongebob mocking face"
        ],
        "img": "https://i.imgflip.com/4/1otk96.jpg"
    },
    {
        "id": "4087833",
        "name": "Waiting Skeleton",
        "alternate": [
            "skeleton waiting on bench in the park"
        ],
        "img": "https://i.imgflip.com/4/2fm6x.jpg"
    },
    {
        "id": "1035805",
        "name": "Boardroom Meeting Suggestion",
        "alternate": [
            "throw a guy out the boardroom window"
        ],
        "img": "https://i.imgflip.com/4/m78d.jpg"
    },
    {
        "id": "101470",
        "name": "Ancient Aliens",
        "alternate": [
            "Giorgio Tsoukalos",
            "History Channel Guy"
        ],
        "img": "https://i.imgflip.com/4/26am.jpg"
    },
    {
        "id": "188390779",
        "name": "Woman Yelling At Cat",
        "alternate": [
            "Women yelling",
            "confused cat",
            "girl screaming at cat",
            "angry woman yelling at cat at dinner table",
            "lady screams at cat",
            "woman pointing at cat",
            "smudge the cat"
        ],
        "img": "https://i.imgflip.com/4/345v97.jpg"
    },
    {
        "id": "91538330",
        "name": "X, X Everywhere",
        "alternate": [
            "woody and buzz lightyear pointing",
            "toy story",
            "dicks everywhere",
            "toystory everywhere"
        ],
        "img": "https://i.imgflip.com/4/1ihzfe.jpg"
    },
    {
        "id": "247375501",
        "name": "Buff Doge vs. Cheems",
        "alternate": [
            "swole doge vs cheems",
            "strong doge weak doge",
            "big doge small doge",
            "then vs. now",
            "buff doge vs. crying cheems"
        ],
        "img": "https://i.imgflip.com/4/43a45p.jpg"
    },
    {
        "id": "97984",
        "name": "Disaster Girl",
        "img": "https://i.imgflip.com/4/23ls.jpg"
    },
    {
        "id": "89370399",
        "name": "Roll Safe Think About It",
        "alternate": [
            "thinking black guy",
            "black guy pointing at his head",
            "can't blank if you don't blank",
            "smart black dude",
            "guy tapping head"
        ],
        "img": "https://i.imgflip.com/4/1h7in3.jpg"
    },
    {
        "id": "61520",
        "name": "Futurama Fry",
        "alternate": [
            "Not sure if X or Y",
            "Skeptical Fry"
        ],
        "img": "https://i.imgflip.com/4/1bgw.jpg"
    },
    {
        "id": "119139145",
        "name": "Blank Nut Button",
        "alternate": [
            "blank blue button",
            "smash button",
            "press button",
            "button slam"
        ],
        "img": "https://i.imgflip.com/4/1yxkcp.jpg"
    },
    {
        "id": "131940431",
        "name": "Gru's Plan",
        "alternate": [
            "Grus evil plan",
            "Despicable Me diabolical plan",
            "Gru's diabolical plan",
            "gru 4 panel"
        ],
        "img": "https://i.imgflip.com/4/26jxvz.jpg"
    },
    {
        "id": "222403160",
        "name": "Bernie I Am Once Again Asking For Your Support",
        "alternate": [
            "bernie sanders commercial",
            "bernie sanders 2020 campaign",
            "asking for your financial support",
            "once again bernie"
        ],
        "img": "https://i.imgflip.com/4/3oevdk.jpg"
    },
    {
        "id": "114585149",
        "name": "Inhaling Seagull",
        "alternate": [
            "inhaling bird"
        ],
        "img": "https://i.imgflip.com/4/1w7ygt.jpg"
    },
    {
        "id": "155067746",
        "name": "Surprised Pikachu",
        "alternate": [
            "shocked pikachu"
        ],
        "img": "https://i.imgflip.com/4/2kbn1e.jpg"
    },
    {
        "id": "178591752",
        "name": "Tuxedo Winnie The Pooh",
        "alternate": [
            "winnie the poo",
            "winnie the pooh drake style",
            "classy pooh bear",
            "tuxedo pooh",
            "winnie the pooh elegant",
            "winnie pooh",
            "winnie the pooh tux",
            "fancy pooh"
        ],
        "img": "https://i.imgflip.com/4/2ybua0.jpg"
    },
    {
        "id": "5496396",
        "name": "Leonardo Dicaprio Cheers",
        "alternate": [
            "The Great Gatsby party with Jay Gatsby",
            "gatsby toast"
        ],
        "img": "https://i.imgflip.com/4/39t1o.jpg"
    },
    {
        "id": "123999232",
        "name": "The Scroll Of Truth",
        "alternate": [
            "I've finally found it... after 15 years",
            "nyehhh"
        ],
        "img": "https://i.imgflip.com/4/21tqf4.jpg"
    },
    {
        "id": "61532",
        "name": "The Most Interesting Man In The World",
        "alternate": [
            "I dont always... but when I do",
            "Dos Equis Man",
            "I don't always"
        ],
        "img": "https://i.imgflip.com/4/1bh8.jpg"
    },
    {
        "id": "100777631",
        "name": "Is This A Pigeon",
        "alternate": [
            "is this a pidgeon",
            "anime butterfly guy",
            "oblivious butterfly man anime",
            "is this a bird",
            "is this butterfly"
        ],
        "img": "https://i.imgflip.com/4/1o00in.jpg"
    },
    {
        "id": "21735",
        "name": "The Rock Driving",
        "img": "https://i.imgflip.com/4/grr.jpg"
    },
    {
        "id": "27813981",
        "name": "Hide the Pain Harold",
        "alternate": [
            "sad life harold",
            "maurice"
        ],
        "img": "https://i.imgflip.com/4/1cf8by.jpg"
    },
    {
        "id": "8072285",
        "name": "Doge",
        "alternate": [
            "Shiba Inu"
        ],
        "img": "https://i.imgflip.com/4/4t0m5.jpg"
    },
    {
        "id": "226297822",
        "name": "Panik Kalm Panik",
        "alternate": [
            "panic calm panic",
            "meme man wurds"
        ],
        "img": "https://i.imgflip.com/4/3qqcim.jpg"
    },
    {
        "id": "61585",
        "name": "Bad Luck Brian",
        "img": "https://i.imgflip.com/4/1bip.jpg"
    },
    {
        "id": "124055727",
        "name": "Y'all Got Any More Of That",
        "alternate": [
            "Tyrone Biggums",
            "Dave Chappelle",
            "Chappelles Show",
            "yall got any more of that stuff",
            "powder lips neck scratch"
        ],
        "img": "https://i.imgflip.com/4/21uy0f.jpg"
    },
    {
        "id": "135256802",
        "name": "Epic Handshake",
        "alternate": [
            "arm wrestling",
            "holding hands",
            "grasping hands",
            "epic hand shake",
            "black white arms agreement"
        ],
        "img": "https://i.imgflip.com/4/28j0te.jpg"
    },
    {
        "id": "28251713",
        "name": "Oprah You Get A",
        "alternate": [
            "oprah giveway",
            "oprah winfrey",
            "oprah you get a car",
            "everyone gets a car",
            "you get an oprah",
            "oprah excited"
        ],
        "img": "https://i.imgflip.com/4/gtj5t.jpg"
    },
    {
        "id": "148909805",
        "name": "Monkey Puppet",
        "alternate": [
            "monkey looking away",
            "monkey puppet avoids eye contact",
            "hiding in plain sight",
            "awkward look monkey"
        ],
        "img": "https://i.imgflip.com/4/2gnnjh.jpg"
    },
    {
        "id": "61539",
        "name": "First World Problems",
        "alternate": [
            "fwp",
            "woman crying"
        ],
        "img": "https://i.imgflip.com/4/1bhf.jpg"
    },
    {
        "id": "80707627",
        "name": "Sad Pablo Escobar",
        "alternate": [
            "pablo escobar waiting",
            "man waiting",
            "waiting man",
            "lonely man",
            "narcos waiting",
            "narcos bored",
            "narcos alone"
        ],
        "img": "https://i.imgflip.com/4/1c1uej.jpg"
    },
    {
        "id": "134797956",
        "name": "American Chopper Argument",
        "alternate": [
            "orange county choppers fight",
            "american chopper hot take"
        ],
        "img": "https://i.imgflip.com/4/2896ro.jpg"
    },
    {
        "id": "101288",
        "name": "Third World Skeptical Kid",
        "alternate": [
            "African skeptical child"
        ],
        "img": "https://i.imgflip.com/4/265k.jpg"
    },
    {
        "id": "252600902",
        "name": "Always Has Been",
        "alternate": [
            "wait it's all just ohio",
            "two astronauts betrayal",
            "astronaut gun",
            "astronaut lie",
            "astronaut discovers conspiracy theory",
            "always have been",
            "it always was"
        ],
        "img": "https://i.imgflip.com/4/46e43q.jpg"
    },
    {
        "id": "6235864",
        "name": "Finding Neverland",
        "alternate": [
            "Johnny Depp And Little Kid Crying"
        ],
        "img": "https://i.imgflip.com/4/3pnmg.jpg"
    },
    {
        "id": "61527",
        "name": "Y U No",
        "img": "https://i.imgflip.com/4/1bh3.jpg"
    },
    {
        "id": "61556",
        "name": "Grandma Finds The Internet",
        "img": "https://i.imgflip.com/4/1bhw.jpg"
    },
    {
        "id": "175540452",
        "name": "Unsettled Tom",
        "alternate": [
            "tom face",
            "concerned tom",
            "tom and jerry",
            "disgusted tom",
            "surprised tom",
            "tom staring down"
        ],
        "img": "https://i.imgflip.com/4/2wifvo.jpg"
    },
    {
        "id": "91545132",
        "name": "Trump Bill Signing",
        "alternate": [
            "executive order trump"
        ],
        "img": "https://i.imgflip.com/4/1ii4oc.jpg"
    },
    {
        "id": "161865971",
        "name": "Marked Safe From",
        "alternate": [
            "facebook marked safe",
            "marked safe flag",
            "marked safe today",
            "facebook safe from"
        ],
        "img": "https://i.imgflip.com/4/2odckz.jpg"
    },
    {
        "id": "180190441",
        "name": "They're The Same Picture",
        "alternate": [
            "it's the same picture",
            "corporate needs you to find the differences between this picture and this picture",
            "pam from the office",
            "office same picture",
            "spot the difference"
        ],
        "img": "https://i.imgflip.com/4/2za3u1.jpg"
    },
    {
        "id": "563423",
        "name": "That Would Be Great",
        "alternate": [
            "Bill Lumbergh",
            "office space",
            "yea that'd be great"
        ],
        "img": "https://i.imgflip.com/4/c2qn.jpg"
    },
    {
        "id": "61546",
        "name": "Brace Yourselves X is Coming",
        "alternate": [
            "imminent ned from game of thrones",
            "brace yourselves winter is coming",
            "brace yourself"
        ],
        "img": "https://i.imgflip.com/4/1bhm.jpg"
    },
    {
        "id": "84341851",
        "name": "Evil Kermit",
        "alternate": [
            "kermit me to me",
            "kermit inner me",
            "sith kermit",
            "kermit dark side"
        ],
        "img": "https://i.imgflip.com/4/1e7ql7.jpg"
    },
    {
        "id": "61582",
        "name": "Creepy Condescending Wonka",
        "alternate": [
            "willy wonka stare",
            "sarcastic wonka",
            "tell me more about X",
            "tell me again",
            "gene wilder"
        ],
        "img": "https://i.imgflip.com/4/1bim.jpg"
    },
    {
        "id": "405658",
        "name": "Grumpy Cat",
        "img": "https://i.imgflip.com/4/8p0a.jpg"
    },
    {
        "id": "61533",
        "name": "X All The Y",
        "alternate": [
            "all the things"
        ],
        "img": "https://i.imgflip.com/4/1bh9.jpg"
    },
    {
        "id": "14371066",
        "name": "Star Wars Yoda",
        "alternate": [
            "master yoda"
        ],
        "img": "https://i.imgflip.com/4/8k0sa.jpg"
    },
    {
        "id": "135678846",
        "name": "Who Killed Hannibal",
        "alternate": [
            "Eric Andre shooting Hannibal Buress",
            "why would they do this"
        ],
        "img": "https://i.imgflip.com/4/28s2gu.jpg"
    },
    {
        "id": "16464531",
        "name": "But That's None Of My Business",
        "alternate": [
            "Kermit the frog",
            "kermit drinking lipton iced tea"
        ],
        "img": "https://i.imgflip.com/4/9sw43.jpg"
    },
    {
        "id": "61544",
        "name": "Success Kid",
        "alternate": [
            "Motivation Baby",
            "Motivation Kid",
            "Success Baby"
        ],
        "img": "https://i.imgflip.com/4/1bhk.jpg"
    },
    {
        "id": "101511",
        "name": "Don't You Squidward",
        "alternate": [
            "spongebob grinning",
            "spongebob smirk face",
            "smug spongebob"
        ],
        "img": "https://i.imgflip.com/4/26br.jpg"
    },
    {
        "id": "110163934",
        "name": "I Bet He's Thinking About Other Women",
        "alternate": [
            "i bet he's thinking of other woman",
            "i bet he's thinking about other girls",
            "couple in bed",
            "i wonder what he's thinking",
            "guy thinking in bed"
        ],
        "img": "https://i.imgflip.com/4/1tl71a.jpg"
    },
    {
        "id": "3218037",
        "name": "This Is Where I'd Put My Trophy If I Had One",
        "img": "https://i.imgflip.com/4/1wz1x.jpg"
    },
    {
        "id": "196652226",
        "name": "Spongebob Ight Imma Head Out",
        "alternate": [
            "Ight Imma Head Out",
            "aight imma head out",
            "spongebob aight",
            "alright I'm out",
            "spongebob getting out of chair"
        ],
        "img": "https://i.imgflip.com/4/392xtu.jpg"
    },
    {
        "id": "1509839",
        "name": "Captain Picard Facepalm",
        "alternate": [
            "star trek face palm"
        ],
        "img": "https://i.imgflip.com/4/wczz.jpg"
    },
    {
        "id": "55311130",
        "name": "This Is Fine",
        "alternate": [
            "this is fine dog",
            "dog house fire",
            "dog in burning house",
            "house on fire"
        ],
        "img": "https://i.imgflip.com/4/wxica.jpg"
    },
    {
        "id": "101287",
        "name": "Third World Success Kid",
        "alternate": [
            "happy african child",
            "african kids dancing"
        ],
        "img": "https://i.imgflip.com/4/265j.jpg"
    },
    {
        "id": "235589",
        "name": "Evil Toddler",
        "alternate": [
            "evil baby"
        ],
        "img": "https://i.imgflip.com/4/51s5.jpg"
    },
    {
        "id": "100947",
        "name": "Matrix Morpheus",
        "alternate": [
            "what if I told you"
        ],
        "img": "https://i.imgflip.com/4/25w3.jpg"
    },
    {
        "id": "79132341",
        "name": "Bike Fall",
        "alternate": [
            "falling off bike",
            "baton roue",
            "stick in bike wheel",
            "bike stick",
            "bicycle stick",
            "bike blame",
            "falling bike"
        ],
        "img": "https://i.imgflip.com/4/1b42wl.jpg"
    },
    {
        "id": "195515965",
        "name": "Clown Applying Makeup",
        "alternate": [
            "putting on clown makeup",
            "clown face",
            "clown paint",
            "becoming a clown"
        ],
        "img": "https://i.imgflip.com/4/38el31.jpg"
    },
    {
        "id": "61516",
        "name": "Philosoraptor",
        "alternate": [
            "green dinosaur",
            "dinosaur wondering"
        ],
        "img": "https://i.imgflip.com/4/1bgs.jpg"
    },
    {
        "id": "132769734",
        "name": "Hard To Swallow Pills",
        "alternate": [
            "hard pills to swallow"
        ],
        "img": "https://i.imgflip.com/4/271ps6.jpg"
    },
    {
        "id": "14230520",
        "name": "Black Girl Wat",
        "alternate": [
            "confused black girl",
            "black girl with hand out",
            "seriously black girl"
        ],
        "img": "https://i.imgflip.com/4/8h0c8.jpg"
    },
    {
        "id": "245898",
        "name": "Picard Wtf",
        "alternate": [
            "captain jean-luc picard star trek",
            "annoyed picard",
            "why the fuck would you"
        ],
        "img":"https://i.imgflip.com/4/nhlto.jpg"
    },
    {
        "id": "99683372",
        "name": "Sleeping Shaq",
        "alternate": [
            "i sleep",
            "real shit"
        ],
        "img": "https://i.imgflip.com/4/1nck6k.jpg"
    },
    {
        "id": "101440",
        "name": "10 Guy",
        "alternate": [
            "Really High Guy",
            "Stoner Stanley",
            "Brainwashed Bob",
            "stoned guy",
            "ten guy"
        ],
        "img": "https://i.imgflip.com/4/269s.jpg"
    }, 
    {
        "id": "922147",
        "name": "Laughing Men In Suits",
        "alternate": [
            "Men laughing",
            "And then I said",
            "And then I told them",
            "rich men laughing"
        ],
        "img": "https://i.imgflip.com/4/jrj7.jpg"
    },
    {
        "id": "259237855",
        "name": "Laughing Leo",
        "alternate": [
            "Leonardo DiCaprio laughing",
            "Django Laughing Leo",
            "Django Unchained laugh",
            "laughing while holding a drink",
            "Calvin Candie laugh"
        ],
        "img": "https://i.imgflip.com/4/4acd7j.jpg"
    },
    {
        "id": "61580",
        "name": "Too Damn High",
        "alternate": [
            "The rent is too damn high"
        ],
        "img": "https://i.imgflip.com/4/1bik.jpg"
    },
    {
        "id": "101910402",
        "name": "Who Would Win?",
        "img": "https://i.imgflip.com/4/1ooaki.jpg"
    },
    {
        "id": "101716",
        "name": "Yo Dawg Heard You",
        "alternate": [
            "Xzibit",
            "Yo dawg we heard you like Y so we put some X in your X so you can Y while you Y"
        ],
        "img": "https://i.imgflip.com/4/26hg.jpg"
    },
    {
        "id": "40945639",
        "name": "Dr Evil Laser",
        "alternate": [
            "Dr. Evil quotation marks",
            "Dr Evil Air Quotes"
        ],
        "img": "https://i.imgflip.com/4/odluv.jpg"
    },
    {
        "id": "259680",
        "name": "Am I The Only One Around Here",
        "alternate": [
            "Angry Walter from The Big Lebowski"
        ],
        "img": "https://i.imgflip.com/4/5kdc.jpg"
    },
    {
        "id": "109765",
        "name": "I'll Just Wait Here",
        "alternate": [
            "waiting skeleton"
        ],
        "img": "https://i.imgflip.com/4/2cp1.jpg"
    },
    {
        "id": "9440985",
        "name": "Face You Make Robert Downey Jr",
        "img": "https://i.imgflip.com/4/5mcpl.jpg"
    },
    {
        "id": "61581",
        "name": "Put It Somewhere Else Patrick",
        "alternate": [
            "patrick from spongebob"
        ],
        "img": "https://i.imgflip.com/4/1bil.jpg"
    },
    {
        "id": "56225174",
        "name": "Be Like Bill",
        "alternate": [
            "bill the stick figure with a hat"
        ],
        "img": "https://i.imgflip.com/4/xh3me.jpg"
    },
    {
        "id": "12403754",
        "name": "Bad Pun Dog",
        "alternate": [
            "joke dog",
            "whisper joke dog",
            "happy husky",
            "joke telling husky",
            "pun husky"
        ],
        "img": "https://i.imgflip.com/4/7dusq.jpg"
    },
    {
        "id": "163573",
        "name": "Imagination Spongebob",
        "alternate": [
            "spongebob rainbow",
            "nobody cares"
        ],
        "img": "https://i.imgflip.com/4/3i7p.jpg"
    },
    {
        "id": "460541",
        "name": "Jack Sparrow Being Chased",
        "alternate": [
            "pirates of the caribbean"
        ],
        "img": "https://i.imgflip.com/4/9vct.jpg"
    },
    {
        "id": "21604248",
        "name": "Mugatu So Hot Right Now",
        "alternate": [
            "Mugatu from Zoolander",
            "Will Farrell"
        ],
        "img": "https://i.imgflip.com/4/cv1y0.jpg"
    },
    {
        "id": "29617627",
        "name": "Look At Me",
        "alternate": [
            "I'm the captain now",
            "captain phillips"
        ],
        "img": "https://i.imgflip.com/4/hmt3v.jpg"
    },
    {
        "id": "195389",
        "name": "Sparta Leonidas",
        "alternate": [
            "Leonidas from the movie 300"
        ],
        "img": "https://i.imgflip.com/4/46rh.jpg"
    },
    {
        "id": "100955",
        "name": "Confession Bear",
        "img": "https://i.imgflip.com/4/25wb.jpg"
    },
    {
        "id": "444501",
        "name": "Maury Lie Detector",
        "alternate": [
            "The lie detector determined that was a lie. The fact that you X determined that was a lie. Maury Povich."
        ],
        "img": "https://i.imgflip.com/4/9iz9.jpg"
    },
    {
        "id": "766986",
        "name": "Aaaaand Its Gone",
        "alternate": [
            "and it's gone",
            "south park banker guy"
        ],
        "img": "https://i.imgflip.com/4/gft6.jpg"
    },
    {
        "id": "6531067",
        "name": "See Nobody Cares",
        "alternate": [
            "Jurassic Park Dennis"
        ],
        "img": "https://i.imgflip.com/4/3vzej.jpg"
    },
    {
        "id": "1367068",
        "name": "I Should Buy A Boat Cat",
        "alternate": [
            "sophisticated cat",
            "fancy cat",
            "newspaper cat"
        ],
        "img": "https://i.imgflip.com/4/tau4.jpg"
    }
]


     function altContainerTemplate(alts){
        let altContainer = document.createElement("div");
        altContainer.classList.add("flex" ,"flex-row","flex-wrap" ,"px-3" ,"pb-3");
        
        alts.forEach(function (alt) {
            altContainer.innerHTML +=  `
                    <span class="inline bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        ${alt}
                    </span>`
        });
        
        return altContainer;
     }


     function editTemplate(template){
         let selectedMemeName = document.querySelector(".selected-meme-name");
            selectedMemeName.innerHTML = template.name;
            let selectedMemeImg = document.querySelector(".selected-meme-img");
            selectedMemeImg.src = template.img;
            selectedMemeImg.alt = template.name;
            //meme-id
            let memeId = document.querySelector("#meme-id");
            memeId.value = template.id;
    }




    function templateCreate(template){
        let meme = document.createElement("div");
        meme.classList.add("meme","max-w-sm","rounded", "overflow-hidden", "shadow-lg","mx-1","my-5","bg-white");
        meme.innerHTML = `<img src="${template.img}" class="meme-template-img w-full border-b-2" alt="${template.name}">`;
        meme.onclick = function () {
            editTemplate(template);           
            translateContainer("edit")
        }
        
        let memeNameContainer = document.createElement("div");

        memeNameContainer.classList.add("meme-name-container", "mx-3","mt-5", "mb-4");
        memeNameContainer.innerHTML = `<div class="font-bold text-xl mb-2">${template.name}</div>`;
        meme.appendChild(memeNameContainer);

        if(template.alternate){
            let altContainer = altContainerTemplate(template.alternate)
            meme.appendChild(altContainer);
        }



        container.appendChild(meme);
        meme.addEventListener("click", function () {
            let template_id = template.id;
            console.log(template_id);
        })
    }


    function translateContainer(type) {
        let slideContainer = document.querySelector(".slide-container");

        if(type=="edit"){
            slideContainer.style.transform = "translateX(-400px)"; 
        }

        if(type=="video"){
            slideContainer.style.transform = "translateX(-800px)"; 
        }
        if(type=="find"){
            slideContainer.style.transform = "translateX(0)";
        }
    }


    document.querySelector("#findContainerNavigation").addEventListener("click", function () {
        translateContainer("find");
    })

    document.querySelector("#videoContainerNavigation").addEventListener("click", function () {
        translateContainer("video");
    })
 
    templates.forEach(function (template) {
      templateCreate(template)
    })

    let searchBtn = document.querySelector("#search-btn");
     let searchInput = document.querySelector("#search-input");

    searchInput.addEventListener("keyup", function (e) {
        if(e.key=="Enter"){
            searchBtn.click();
        }
    })

    searchInput.addEventListener("input", function () {
        if(searchInput.value==""){
            container.innerHTML = "";
            templates.forEach(function (template) {
                templateCreate(template)
            })
        }
    })


    searchBtn.addEventListener("click", function () {
       
        let searchValue = searchInput.value;
        console.log(searchValue);

        


       let filteredTemplates = templates.filter(function (template) {
            // Create a regular expression to match the search value
            let regex = new RegExp(searchValue, "i"); // "i" flag makes the match case-insensitive

            // Check if the search value matches the template name or alternate name
            if (regex.test(template.name)) {
                return true;
            } else if (template.alternate && regex.test(template.alternate)) {
                return true;
            }

            // Check if the search value matches any of the strings in the template.tags array
            if (Array.isArray(template.tags)) {
                for (let i = 0; i < template.tags.length; i++) {
                if (regex.test(template.tags[i])) {
                    return true;
                }
                }
            }

            // Return false if no match was found
            return false;
        });


        if(filteredTemplates.length==0){
             container.innerHTML = "";
            container.innerHTML = `<div class="text-center text-2xl font-bold">No Meme Found</div>`;
        }else{
            container.innerHTML = "";
            filteredTemplates.forEach(function (template) {
                templateCreate(template)
            })
        }

        console.log(filteredTemplates);
    })


    let backBtn = document.querySelector(".back-button");
 
    backBtn.addEventListener("click", function () {
        translateContainer("find");
    })









        
    /**
     * Video  Section
     */



    var videoContainer = document.querySelector(".video-container");


    async  function fetchVideoMeme(text){
        const url = 'http://localhost:3000/scene?scene=' + text
        console.log(url);
        try{
            let res =  await fetch(url);
            let data = await res.json();

            if( data?.count != 0){
                data.phrases.forEach(function(phrase){             
                    videoTemplateCreate(phrase)
                })
            }else{
               videoContainer.innerHTML = `<div class="text-center text-2xl font-bold">No Meme Found</div>`; 
            }
            console.log(data);
        }catch(err){ 
            console.log(err);
            videoContainer.innerHTML = `<div class="text-center text-2xl font-bold">No Meme Found</div>`; 
        }

    }

    
    function videoTemplateCreate(template){
        let meme = document.createElement("div");

        meme.classList.add("meme","max-w-sm","rounded", "overflow-hidden", "shadow-lg","mx-1","my-5","bg-white");
        meme.innerHTML = `<video src="${template["video-url"]}" controls class="meme-video"></video>`;

        
        let memeNameContainer = document.createElement("div");

        memeNameContainer.classList.add("meme-name-container", "mx-3","mt-5", "mb-4");
        memeNameContainer.innerHTML = `<div class="font-bold text-xl mb-2">${template.text}</div>`;

        // let altContainer = document.createElement("div");
        // altContainer.classList.add("flex" ,"flex-row","flex-wrap" ,"px-3" ,"pb-3");  
        // altContainer.innerHTML +=  `
        //         <span class="inline bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        //             ${template["video-info"]["info"]}
        //         </span>`
        // memeNameContainer.appendChild(altContainer);



        //download
        let downloadBtn = document.createElement("button");
        downloadBtn.classList.add("bg-blue-500", "w-full","hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded", "float-right", "mb-3");
        downloadBtn.innerHTML = "Download";
        downloadBtn.addEventListener("click", function () {
            download(template["video-url"], template.text);
        })
        memeNameContainer.appendChild(downloadBtn);

        meme.appendChild(memeNameContainer);

        videoContainer.appendChild(meme);
    }
    



    /**
     * !Search Button Event Listener
     */
    var videoSearchBtn = document.querySelector("#video-search-btn");
    let videoSearchInput = document.querySelector("#video-search-input");
    videoSearchInput.addEventListener("keyup", function (e) {
        if(e.key=="Enter"){
            videoSearchBtn.click();
        }
    })


    videoSearchBtn.addEventListener("click", function () {
        let searchValue = videoSearchInput.value;

        if(searchValue == ""){
            return;
        }
        videoContainer.innerHTML = "";
        fetchVideoMeme(searchValue);
    })

})();













        //https://api.imgflip.com/caption_image

/*
[
  {
    "key": "username",
    "value": "TechhJork",
    "type": "text",
    "enabled": true
  },
  {
    "key": "password",
    "value": "pankaj123",
    "type": "text",
    "enabled": true
  },
  {
    "key": "template_id",
    "value": "101440",
    "type": "text",
    "enabled": true
  },
  {
    "key": "text0",
    "value": "hello",
    "type": "text",
    "enabled": true
  },
  {
    "key": "text1",
    "value": "hello2",
    "type": "text",
    "enabled": true
  },
  {
    "key": "max_font_size",
    "value": "20px",
    "type": "text",
    "enabled": true
  },
  {
    "key": "boxes",
    "value": "",
    "type": "text",
    "enabled": false
  }
]
*/






        //    chrome.storage.sync.set({ 'meme': meme }, function () {
        //        console.log('meme saved');
        //    });
       