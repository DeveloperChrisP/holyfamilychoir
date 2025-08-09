// const { createElement } = require("react");

// const { createElement } = require("react");

var accordion = document.querySelector("article.accordion");
var wrapper = document.querySelector(".wrapper");
var count;
var scrollSpeed = 100; //needs to match 1/2 of CSS Time

let allHymns = [];
togglePanels();
function togglePanels() {
    const allPanels = document.querySelectorAll(".accordion_panel");
    const mainPanel = document.querySelector(".accordion");
    const navArrows = document.querySelectorAll("button.up, button.down");

    navArrows.forEach(btn => {
        btn.classList.toggle("hidden");

    })
    mainPanel.classList.toggle("hidden");
    allPanels.forEach((panel) => {
        panel.classList.toggle("hidden");
    });
    document.querySelector(".wrapper").classList.toggle("restrictHeight");
}
// wrapper.addEventListener('pointerdown', dragButtonsStartingPosition, false);
// wrapper.addEventListener("pointerup", endOfTouch);
const queuedVideos = [];
function Hymn(title, hymnNumber, sheetMusic, vocalPart, video) {
    this.title = title;
    this.hymnNumber = hymnNumber;
    this.sheetMusic = sheetMusic;
    this.vocalPart = vocalPart;
    this.video = video;
    count++;
    allHymns.push(this);
}
allLitergies = [];
const allAcclamations = [];
const allAcclamationSettings = [];

function Litergy(date, occasion, year, selector, hymn, instrumental) {
    this.date = date;
    this.occasion = occasion;
    this.year = year;
    this.selector = selector;
    this.hymn = grabHymnObject(hymn);

    this.instrumental = grabHymnObject(instrumental);

    date.setHours(10); date.setMinutes(30);
    allLitergies.push(this);

}


function Acclamation(massTitle, title, sheetMusic, vocalPart, video) {
    this.massTitle = massTitle;
    this.title = title;
    this.sheetMusic = sheetMusic;
    this.vocalPart = vocalPart;
    this.video = video;
    allAcclamations.push(this);
}

function AcclamationSetting(massTitle, composer, acclamation) {
    this.massTitle = massTitle;
    this.composer = composer;

    this.acclamation = grabAcclamationObject(acclamation);
    allAcclamationSettings.push(this);

}

function grabAcclamationObject(massTitle) {
    //return array of hymn objects (up to 8) depending on how many are requested in 'new litergy'

    // if (massTitle !== undefined)

    var hymns = allAcclamations.filter(x => (x.massTitle.toLowerCase() == massTitle.toLowerCase()));


    return hymns;

}

new Acclamation("Mass of Christ the Saviour", "Glory to God", "./sheetMusic/Glory To God (Schutte Liturgy).pdf", ["sab", "alto", "bass", "piano"], "https://www.youtube.com/embed/oeKKr2xIFMg?si=UTR02G3kyx-Hus-A")
new Acclamation("Mass of Christ the Saviour", "Holy holy", "", ["SAB", "melody", "alto", "bass"], "https://www.youtube.com/embed/LsFxjynY5dw?si=-xN5UmeR6stjopkt")
new Acclamation("Mass of Christ the Saviour", "We proclaim your death", "", "", "https://www.youtube.com/embed/slLLVzWzQWg?si=2LqjV5sjar3PxuSD")
new Acclamation("Mass of Christ the Saviour", "When we eat this bread", "", "", "https://www.youtube.com/embed/I-72zONivNQ?si=fvRRp56uvagvTfRm")
new Acclamation("Mass of Christ the Saviour", "Lamb of God", "", ["SAB", "melody", "alto", "bass"], "https://www.youtube.com/embed/PBuZqtPLcIo?si=0HLxaD3bYyvmlqb8")

new Acclamation("Mass of Creation", "Glory to God", "", "", "https://www.youtube.com/embed/bbHerWk32Vk?si=ys3OGM0_1Exjecv4")
new Acclamation("Mass of Creation", "Holy Holy", "", "", "https://www.youtube.com/embed/2nwTK9YKWWo?si=jE6ilEY5LqOOeh7e")
new Acclamation("Mass of Creation", "We proclaim your death", "", "", "https://www.youtube.com/embed/MaPV39uou1I?si=QPqM_OOPfo3qBqPW")
new Acclamation("Mass of Creation", "When we eat this bread", "", "", "https://www.youtube.com/embed/cBApgcKhJo0?si=V6t0Fou6IH22dmU8")
new Acclamation("Mass of Creation", "Amen", "", "", "https://www.youtube.com/embed/8drMbyPFlPU?si=UrAor9slVmBgzMg5")
new Acclamation("Mass of Creation", "Lamb of God", "", ["SATB", "melody", "alto", "tenor", "bass", "piano"], "https://www.youtube.com/embed/_KlqHDoGLzE?si=FOKHV82msHsXCsGJ")

new Acclamation("Mass of Hope", "Glory to God (Jugan)", "", ["satb", "melody (chorus)", "alto (chorus)", "tenor (chorus)", "bass (chorus)"], "");
new Acclamation("Mass of Hope", "Alleluia", "", ["satb", "melody", "alto", "tenor", "bass", "piano"], "https://www.youtube.com/embed/PC8Fl0CAWB8?si=CsDSavSKw_6fwM1f&start=8&end=149")
new Acclamation("Mass of Hope", "Holy holy", "", ["melody", "piano"], "https://www.youtube.com/embed/PC8Fl0CAWB8?si=CsDSavSKw_6fwM1f&start=154&end=244");
new Acclamation("Mass of Hope", "We proclaim your death", "", "", "https://www.youtube.com/embed/PC8Fl0CAWB8?si=CsDSavSKw_6fwM1f&start=245&end=277");
new Acclamation("Mass of Hope", "When we eat this bread", "", ["melody", "piano"], "https://www.youtube.com/embed/PC8Fl0CAWB8?si=CsDSavSKw_6fwM1f&start=282&end=330");
new Acclamation("Mass of Hope", "Save us, saviour", "", "", "https://www.youtube.com/embed/PC8Fl0CAWB8?si=CsDSavSKw_6fwM1f&start=335&end=385");
new Acclamation("Mass of Hope", "Great Amen", "", ["melody", "piano"], "https://www.youtube.com/embed/PC8Fl0CAWB8?si=CsDSavSKw_6fwM1f&start=390");
new Acclamation("Mass of Hope", "Lamb of God (Creation)", "", ["SATB", "melody", "alto", "tenor", "bass", "piano"], "https://www.youtube.com/embed/_KlqHDoGLzE?si=FOKHV82msHsXCsGJ");

new Acclamation("Simple Mass", "Holy holy", "./sheetMusic/Holy Holy (Simple Mass).pdf", ["satb", "melody", "alto", "tenor", "bass", "piano"], "")
new Acclamation("Simple Mass", "Lamb of God", "./sheetMusic/Lamb of God (Simple Mass).pdf", "", "")


new AcclamationSetting("Mass of Christ the Saviour", "Dan Schutte", "Mass of Christ the Saviour")
new AcclamationSetting("Mass of Creation", "Marty Haugen", "Mass of Creation")
new AcclamationSetting("Mass of Hope", "Bernadette Farrell", "Mass of Hope")
new AcclamationSetting("Simple Mass", "unknown", "Simple Mass")

for (let index = 0; index < allAcclamationSettings.length; index++) {
    const element = document.querySelectorAll(".acclamations h4")[index];
    element.textContent = allAcclamationSettings[index].massTitle;
}

for (let index = 0; index < allAcclamationSettings.length; index++) {
    const element = document.querySelectorAll(".acclamations h6")[index];
    element.textContent = allAcclamationSettings[index].composer;
}

new Hymn("10,000 reasons", "sheet", "./sheetMusic/10,000 Reasons (Bless The Lord) (G) - sheet music.pdf", "", "https://www.youtube.com/embed/XtwIT8JjddM?si=nEiKqySIOsHt8SG_")
new Hymn("A hymn of glory let us sing!", "sheet", "", "", "https://www.youtube.com/embed/fWLdhI9zZbs?si=s5xONlEFIr-KQDbp")
new Hymn("A new commandment", 920, "", "", "https://www.youtube.com/embed/aqM2Ujl7Aas?si=GyuGykvyaGV3dFZI");
new Hymn("Abide with me", 907, "", "", "https://www.youtube.com/embed/zf12lQnKlGk?si=FbBC6mn29tMilxZ5")
new Hymn("All are welcome", 458, "", "", "https://www.youtube.com/embed/GlnVLP0qFEo?si=ndG5RjVx8SuVLSNs")
new Hymn("All glory laud and honour", 229, "", "", "https://www.youtube.com/embed/eBfJyjDolwA?si=krjAwgqp2jbrq7UH")
new Hymn("All my hope on God is founded", 959, "", "", "https://www.youtube.com/embed/YvpXiDQZNWg?si=QUf-NnCOGLoAvQ_9")
new Hymn("All people that on earth do dwell", 466, "", "", "https://www.youtube.com/embed/xRklkCklycU?si=gb9Wv9eOr93r2eI1")
new Hymn("All that I am", 600, "", "", "https://www.youtube.com/embed/AySM36XeEgc?si=13R1KC5qvEAZT7Bv");
new Hymn("All things bright and beautiful", 685, "", "", "https://www.youtube.com/embed/J22y9QRFuqM?si=jBBPLSLf-QiXmGFs")
new Hymn("Alleluia, Alleluia, give thanks", 268, "", "", "https://www.youtube.com/embed/I53k-dlUPx4?si=9z0O4UjI4ZWn2bVo");
new Hymn("Alleluia, sing to Jesus", 644, "", "", "https://www.youtube.com/embed/UJDWFYIkBns?si=FjlGK0j-FEm0vRXU");
new Hymn("Amazing Grace", 846, "", "", "https://www.youtube.com/embed/HsCp5LG_zNE?si=SVRmh5evJYOhTVy8");
new Hymn("As I kneel before you", 360, "", "", "https://www.youtube.com/embed/BYv6E9xnJ1U?si=W5qvVIl1dVdmlVEA");
new Hymn("As the deer longs", 214, "", "", "https://www.youtube.com/embed/oENImc-U1dc?si=29REO6eWepKuJCVY")
new Hymn("As with gladness men of old", 166, "", "", "https://www.youtube.com/embed/y-TplMYH0Ko?si=abx_LTDZfoet_c44");
new Hymn("At the lamb's high feast", 269, "", "", "https://www.youtube.com/embed/XklMKDpm8kk?si=EP3BSMl2nRpv8jY0");
new Hymn("At the name of Jesus", 762, "", "", "https://www.youtube.com/embed/_7w-tDjlpgk?si=3Qk7NpB35c6_TRa4");
new Hymn("Be still and know I am with you", 968, "", "", "https://www.youtube.com/embed/isKxnOGes9k?si=OcPSGnwICZTyc9dW");
new Hymn("Be still for the presence of the Lord", 720, "", "", "https://www.youtube.com/embed/2-xp3v3d0dQ?si=iXQswQmsOQEGJa6a");
new Hymn("Be thou my vision", 970, "", "", "https://www.youtube.com/embed/aTKoZZL8XRQ?si=ZqaqqxpVc38IscsA");
new Hymn("Bethlehem of noblest cities", 167, "", "", "https://www.youtube.com/embed/rlbmmn9uOLg?si=H0LS3ygSKcTXnlA6")
new Hymn("Bless the Lord, my soul", 813, "", "", "https://www.youtube.com/embed/3y_2ZStGV58?si=JoCK3Ay47AX9uGpT");
new Hymn("Blessed virgin mother", 361, "", ["piano"], "");
new Hymn("Blest are you, Lord", 603, "", "", "https://www.youtube.com/embed/tsGr49LpuGI?si=p4yTl1Xy_chXtTgN");
new Hymn("Bread of life", 631, "", "", "https://www.youtube.com/embed/iYKxMAn3Kfo?si=Fei0At7L0HqudqQ3");
new Hymn("Breathe on me, Breath of God", 302, "", "", "https://www.youtube.com/embed/vzQo2p5LGkA?si=Rmp9LEeAMoc1d4L4")
new Hymn("Christ be beside me", 910, "", "", "https://www.youtube.com/embed/KNkWoy5uVh8?si=38stRqmtz_7Bswpd")
new Hymn("Christ be our light", 883, "", "", "https://www.youtube.com/embed/7eeBHrn2Dt0?si=tuSsdtdJwFErezsM");
new Hymn("Christ is our King", 325, "", "", "https://www.youtube.com/embed/SBdD_fSHNUM?si=PVRoDFeOOJoBpHRp")
new Hymn("Come to the river", "sheet", "", "", "https://www.youtube.com/embed/JdMVQksOy6w?si=DkVs-oV-Urc36Ahk");
new Hymn("Crown him with many crowns", 321, "", "", "https://www.youtube.com/embed/V0F-kXSwJVM?si=7xYPegtLzhWFcTsC");
new Hymn("Daily, daily sing to Mary", 353, "", "", "https://www.youtube.com/embed/Xwkca-3GiM4?si=UE2_gA3FfHCirCC0");
new Hymn("Dear Lord and Father of mankind", 934, "", "", "https://www.youtube.com/embed/esmn8kNV-S4?si=KvwHeScuoaG6hIEU");
new Hymn("Do not be afraid", 972, "", "", "https://www.youtube.com/embed/v2rO0LhSWJ0?si=FQY4vdhRmNNUhdrf");
new Hymn("Eternal Father, strong to save", 963, "", "", "https://www.youtube.com/embed/7VrraIIjabo?si=nuwA52iq9beMhqOz");
new Hymn("Father, I place into your hands", 971, "", "", "https://www.youtube.com/embed/zBfRNrvvUfc?si=h6RYtmp33PcqireD")
new Hymn("Fight the good fight", 860, "", "", "https://www.youtube.com/embed/YppcFC8mxKM?si=KSYOrbld0nXJNYtb")
new Hymn("Follow me, follow me", 863, "", "", "https://www.youtube.com/embed/fzkP3jy8BEM?si=f4M8NvoxXceQJcbr");
new Hymn("For all the saints", 371, "", "", "https://www.youtube.com/embed/4oH4MujfUFw?si=YmzoVg4NAViggZEY");
new Hymn("For the beauty of the Earth", 726 + "(166)", "", "", "https://www.youtube.com/embed/O9wt2BYM2lo?si=vANAJNfHG3RmXCHa")
new Hymn("Freely, freely", 849, "", "", "https://www.youtube.com/embed/BS1ndKgU36I?si=WxQ_TqVhrJyE184Q");
new Hymn("Gather us in", 475, "", "", "https://www.youtube.com/embed/HuLORIyEet4?si=_nhhj7WvmOj5ojiM");
new Hymn("Gifts of bread & wine", 643, "", "", "https://www.youtube.com/embed/c-AussFcZws?si=mjMWSMWt-20tjcA_");
new Hymn("God is love, his the care", 794, "", "", "https://www.youtube.com/embed/poj6FN8wA1Q?si=qKQc0gaFUsE1dtUt")
new Hymn("God of mercy and compassion", 840, "", "", "https://www.youtube.com/embed/dd8ddCFmyNc?si=pnH9I7ukeenS1we3");
new Hymn("Godhead here in hiding", 660, "", "", "https://www.youtube.com/embed/cqHIf5DYF2c?si=C84lGCj3tZZlXQ-4");
new Hymn("Guide me O thou great redeemer", 960, "", "", "https://www.youtube.com/embed/M7h26Ev_eLQ?si=UmMJvTYTCLGqLkHm")
new Hymn("Hail Queen of heaven", 356, "", "", "https://www.youtube.com/embed/xfkPTmry3zI?si=SkUYW9G4hlpippRf");
new Hymn("Hark the Herald Angels Sing", 155, "", "", "https://www.youtube.com/embed/9Bwn0k0k8xI?si=vilS4HDunUKoLrlC");
new Hymn("He is Lord", 761, "", "", "https://www.youtube.com/embed/BrJEATD5jq8?si=eTy6aYtchC80fY_g");
new Hymn("He who would valiant be", 862, "", "", "https://www.youtube.com/embed/AD7W92d4jmE?si=t6gu0qjlx4gG3Het")
new Hymn("Here I am, Lord", 865, "", "", "");
new Hymn("Here we bring you", "", "./sheetMusic/Here We Bring You.pdf", ["piano"], "");
new Hymn("Holy Forever", "n/a", "", "", "https://www.youtube.com/embed/VhdAZ2aQtBk?si=EFlxlkTKBo3aAkd0")
new Hymn("Holy is his name", 339, "", "", "https://www.youtube.com/embed/uILEUS4fyQg?si=mMs3PRADRaNuBI2s")
new Hymn("Holy Spirit, Lord of Light", 301, "", "", "https://www.youtube.com/embed/hC5_ZzZV4oM?si=5WvF3hm6TLutm_Gb")
new Hymn("Holy virgin by God's decree", 366, "", "", "https://www.youtube.com/embed/aJZhYBXse2g?si=j7DLVkqiusbcid97");
new Hymn("Hosea (Come back to me)", 842, "", "", "https://www.youtube.com/embed/i1ntir3qgdY?si=p3aFA_z5k_semATg");
new Hymn("I am the bread of life", 629, "", "", "https://www.youtube.com/embed/gld-gKKqdSE?si=GRIotmHqH983Oh-D")
new Hymn("I heard the voice of Jesus say", 795, "", "", "https://www.youtube.com/embed/Kh4XxlWZhMs?si=xmfUNd4cYzk_fRjQ");
new Hymn("I vow to thee my country", "", "", "", "https://www.youtube.com/embed/hY9mtoKNeas?si=5Pk8fN_aiqk894Ok")
new Hymn("I will be with you", 866, "", "", "https://www.youtube.com/embed/RL0CBsiXXl0?si=WrdvI2zJnnygDiHS");
new Hymn("I'll sing a hymn to Mary", 355, "", "", "https://www.youtube.com/embed/SB3Rc2gXGH8?si=-pVYf2yLsbBscT0e");
new Hymn("Immaculate Mary", 365, "", "", "https://www.youtube.com/embed/PcrFbTixYAA?si=HF43bqSi82D-OVlV");
new Hymn("Immortal, invisible", 725, "", "", "https://www.youtube.com/embed/lmefJS09fKE?si=5cKzvl1vDm-9QeNn")
new Hymn("In bread we bring you, Lord", 609, "", "", "");
new Hymn("In the bleak mid-winter", 144, "", "", "https://www.youtube.com/embed/cBCYZ9jIJkI?si=7IfiGM2MqBrA1q6t");
new Hymn("In the Breaking of the Bread", 624, "", "", "https://www.youtube.com/embed/0H8CPadsVco?si=TEfbe6JW7aAJ_ZVA");
new Hymn("Infant Holy, Infant lowly", 138, "", ["satb", "melody", "alto", "tenor", "bass"], "https://www.youtube.com/embed/kFQMDG1j9JQ?si=SB72UyZyoQFlbOMN");
new Hymn("It came upon the midnight clear", 135, "", "", "https://www.youtube.com/embed/hx7LJZIXXJo?si=7a3g6ieIB0AZB4MY&start=6&end=129");
new Hymn("Jerusalem", "", "", "", "https://www.youtube.com/embed/KuSJFx6tuZ0?si=D81QimGli0IL0nxJ")
new Hymn("Jesu, Jesu, fill us with your love", "241", "", "", "https://www.youtube.com/embed/qSuTmW1t8zs?si=8wlA7-6bowt5zX6q")
new Hymn("Jesus Christ is risen today", 267, "", "", "https://www.youtube.com/embed/PcTP3Pj6Smo?si=03FAkYgNIr1pRB2e")
new Hymn("Lay your hands", 432, "", "", "https://www.youtube.com/embed/q5UvY7itnn8?si=tRTETqvYEvcjjvSg");
new Hymn("Lead us, heavenly father", 315, "", "", "https://www.youtube.com/embed/JYB2YEuKTLg?si=LSjAqn9RViSsTBHZ");
new Hymn("Let all mortal flesh", 607, "", "", "");
new Hymn("Laudate Dominum", 698, "", "", "https://www.youtube.com/embed/N-A5VL37DGY?si=LLDn5VU97RwY4TyG")
new Hymn("Laudate Dominum2", 730, "", "", "https://www.youtube.com/embed/JXWFKSPCJ-4?si=SxZ8L0LVtC1kMoD3")
new Hymn("Long ago prophets knew", 116, "", "", "https://www.youtube.com/embed/OeLA1LhqFA4?si=Y_jd5YhNoRzLi9ae");
new Hymn("Lord of all hopefulness", 969, "", "", "https://www.youtube.com/embed/fxEuqZ_4iI0?si=vxAYvDdp-QoMbhzO");
new Hymn("Love divine, all loves excelling", 801, "", "", "https://www.youtube.com/embed/cu5zgfKMbAU?si=zNiaaCx1SNydoh4F");
new Hymn("Make me a channel of your peace", 898, "", "", "https://www.youtube.com/embed/C8QYMvsp7VI?si=Jpymro5PI9Jj33jb")
new Hymn("Mary immaculate, star of the morning", 363, "", "", "https://www.youtube.com/embed/S3-ZL66lwmc?si=VZrkx1go1x1MRd1C")
new Hymn("Might to save", '---', "", "", "https://www.youtube.com/embed/GEAcs2B-kNc?si=KcBUIZ1HYKwpUPw6")
new Hymn("My song is love unknown", 752, "", "", "https://www.youtube.com/embed/Nv2bipRf1xo?si=EULjdoDQMr-asu6d");
new Hymn("My soul proclaims you, mighty God", 340 + ' (' + 846 + ')', "", "",)
new Hymn("Now the green blade riseth", 278, "", "", "https://www.youtube.com/embed/t_-6-VKu8SM?si=lhMNDR8p0egeFFeM")
new Hymn("O bread of heaven", 662, "", "", "");
new Hymn("O Come all ye faithful", 159, "", "", "https://www.youtube.com/embed/8ZYZEr3JtZY?si=ZRXVkFmw8cKqnLO1");
new Hymn("O God, our help in ages past", 955, "", "", "https://www.youtube.com/embed/9USHRbF5vbw?si=JVlRT-iodda8kmt0");
new Hymn("O God you search me", 779, "", "", "https://www.youtube.com/embed/PuKwXVWdyEs?si=_GhYqdnASsZtXxXV");
new Hymn("O lady, full of God's own grace", "1031", "", "", "https://www.youtube.com/embed/V2HW50l46fo?si=GxFnbCyFOqbDFbwk");
new Hymn("O let all who thirst", 408, "", "", "https://www.youtube.com/embed/MwG6PCWnih0?si=qltwXx5awggq5kJp");
new Hymn("O Lord hear my prayer", 929, "", "", "https://www.youtube.com/embed/npjgYMt2pHc?si=rgQ2VlIwKSI-j7bi")
new Hymn("O Lord my God", 721, "", "", "https://www.youtube.com/embed/i6cuVLzUVKY?si=7p65giWxScRq43UW")
new Hymn("O Mary Conceived In The Grace Of Your Son", 354, "", ["piano"], "");
new Hymn("O Mother Blest", 364, "", "", "https://www.youtube.com/embed/Nb7PchC-p04?si=N_d9mCYKGQG5nhst");
new Hymn("O purest of creatures", 347, "", "", "https://www.youtube.com/embed/NFBb5g2tXgk?si=j58XTHjmY4JXkuFm");
new Hymn("O Worship the King", 683, "", "", "https://www.youtube.com/embed/25mleGwF1QM?si=rHAF34l7XMI8cpMh")
new Hymn("Of the glorious body telling", 247, "", "", "https://www.youtube.com/embed/9nVBNxfJ-oA?si=nOVzHJhwpwvkZRD3")
new Hymn("On Christmas night all Christians sing", 134, "", "", "https://www.youtube.com/embed/wxaLyJ5G4zM?si=ntSZgM5_fK_rTuF-");
new Hymn("On Jordan's bank", 94, "", "", "https://www.youtube.com/embed/OVHkMWwnGWk?si=jIJKo6aQAzqYlVFL")
new Hymn("One Bread, One Body", 832, "", "", "https://www.youtube.com/embed/WHAu3fLF7NI?si=Dfu0x8PsljIxRoY0");
new Hymn("Once in royal David's city", 128, "", "", "https://www.youtube.com/embed/PtiCLJvyePw?si=TeMsFVrdT232gYs2");
new Hymn("Our God reigns", 768, "", "", "https://www.youtube.com/embed/QPq1Gf6SNPU?si=Kic5wI-7VpL_G7HC");
new Hymn("Praise my soul the King of Heaven", 807, "", "", "https://www.youtube.com/embed/wB33ANHrRNQ?si=JytOncTWfvO4xlbH");
new Hymn("Praise to the holiest in the height", 788, "", "", "https://www.youtube.com/embed/yhxrfOWVnaA?si=QG2XeyHLZSY4aGSX")
new Hymn("Praise to the Lord, the Almighty", 601, "", "", "https://www.youtube.com/embed/3NNatbKemz0?si=osg9I05Avx9VVZbk");
new Hymn("Praise to you o christ our saviour", 200, "", "", "https://www.youtube.com/embed/mybxBzhONyU?si=TAS1uxRc6ZY-Bq5V");
new Hymn("Saints of God in Glory", "-", "", "", "https://www.youtube.com/embed/Rtb1UHBON0k?si=1Y0wAruG-INx8oJP");
new Hymn("Silent Night", 136, "./sheetMusic/SilentNight.pdf", ["satb", "melody", "alto", "tenor", "bass", "piano"], "https://www.youtube-nocookie.com/embed/POcDlbYiF9c?si=cBj0zCzSgsO6fK7T");
new Hymn("Sing of Mary, pure and lowly", 341, "", "", "https://www.youtube.com/embed/Ap6Hym_ERQM?si=dN6iC0-7Wsk2DXnz");
new Hymn("Sing of the Lord's Goodness", 713, "", "", "https://www.youtube.com/embed/xzTXl_jA-XQ?si=4Poy3GZQvRYyieDe")
new Hymn("Sing we of the blessed Mother", 344, "", "", "https://www.youtube.com/embed/zYZ4MbY5kG0?si=2NTmZecGpeCPOkvP");
new Hymn("Shine Jesus shine", 770, "", "", "https://www.youtube.com/embed/nC5CCWZu3c4?si=6gQLvMf6z_GntZlh");
new Hymn("Soul of my saviour", 938, "", "", "https://www.youtube.com/embed/2AdFNZfGpSs?si=7XC-fDreDy8k-mPP")
new Hymn("Stay with me", 249, "", "", "https://www.youtube.com/embed/FCr2tn4yYKY?si=aDsPK3waY6YgSzTZ")
new Hymn("Sweet Sacrament Divine", 663, "", "", "https://www.youtube.com/embed/6N1IfoGFF-I?si=4SrRraG5OQcqP0KN");
new Hymn("Take our bread", 605, "", "", "");
new Hymn("Tell out my soul", 880, "", "", "https://www.youtube.com/embed/A59pfx4sb2Q?si=2CAw8d2OBfjEWvFT");
new Hymn("The angel Gabriel", 113, "", "", "https://www.youtube.com/embed/pliqObTHxUQ?si=n-iBUx5I6ggQvds1");
new Hymn("The Church's One Foundation", 830, "", "", "https://www.youtube.com/embed/1ooRvCyULoU?si=c381yxAE3XBSKWhi");
new Hymn("The day thou gavest", 679, "", "", "https://www.youtube.com/embed/FlCF3-aDpb0?si=kW0cJBR8-Y2CVfwP")
new Hymn("The first Noel", 150, "", "", "https://www.youtube.com/embed/1mItWsC8RtM?si=_cbhrtdvUladP4Yn");
new Hymn("The king of glory comes", 107, "", "", "https://www.youtube.com/embed/aTl1Q8yudfM?si=x0GFpzoPCkMWtZRA");
new Hymn("The light of Christ", 747, "", "", "https://www.youtube.com/embed/ylgeOR1LT_s?si=_01aQwXMVrFL7dOY");
new Hymn("The Lord Jesus", "-", "", "", "https://www.youtube.com/embed/uqzixjk4egM?si=DBxPww6_bzapF8X8")
new Hymn("The Lord's my shepherd", 806, "", "", "https://www.youtube.com/embed/TXdEVb32SFg?si=pawmxxV4mR5gI_Ij")
new Hymn("The Servant King", 749, "", "", "https://www.youtube.com/embed/A0FSZ_iSYO8?si=sYgfjzP6KVX0B4RL");
new Hymn("The servant song", 924, "", "", "https://www.youtube.com/embed/kdmgpMfnjdU?si=_1NbOSSoFSXhF6AJ")
new Hymn("The Summons", 877, "", "", "https://www.youtube.com/embed/VFXAmB_Iq7k?si=6VEiE0TBf4zx_8W0");
new Hymn("The voice of God", 108, "", "", "https://www.youtube.com/embed/r9EohwMRurc?si=35hV3H_r-sr145bJ")
new Hymn("Thine be the Glory", 287, "", "", "https://www.youtube.com/embed/6qKfVuvG2SY?si=U88MKx7w-wkrgLe7");
new Hymn("This is my body", 627, "", "", "https://www.youtube.com/embed/O-60hfhJzqI?si=_vXX2hQT8MWV5zwl")
new Hymn("This is my will, my one command", 921, "", "", "https://www.youtube.com/embed/-OXw6Lhs7u8?si=TAaIOPJx2OD3MYcu");
new Hymn("Though the mountains my fall", 785, "", "", "https://www.youtube.com/embed/ghXT5IOzt8g?si=-ITPGRQAbQ-kBRGm");
new Hymn("Ubi Caritas", 246, "", "", "https://www.youtube.com/embed/Vvfr_2euIFo?si=aShcg8H8_txp1nBH")
new Hymn("Unto us is born a son", 152, "", "", "https://www.youtube.com/embed/4_4xMMpcqbM?si=RhsMJeDjUpuP2bYO");
new Hymn("Upon thy table", 606, "", "", "https://www.youtube.com/embed/mTKeKMu0shs?si=G-bRZOzNwJniaYWw");
new Hymn("Virgin wholly marvellous", "cfe 761 (tune349)", "", "", "https://www.youtube.com/embed/pWoCNeVNHuw?si=6Q3BXHqgR85IESkM")
new Hymn("Water of life", 512, "", "", "https://www.youtube.com/embed/p153CSsGRxs?si=_yModMrXNcTu4vYm");
new Hymn("We have a gospel to proclaim", 852, "", "", "https://www.youtube.com/embed/OXlojQCipg4?si=fxCJvBdV-nCFq-It");
new Hymn("We Should Glory in the Cross", "-", "", ["piano"])
new Hymn("We three kings", 170, "", "", "https://www.youtube.com/embed/Lx35_DRIZ8g?si=bCTGGMdpULJm0UDc");
new Hymn("Were you there", 225, "", "", "https://www.youtube.com/embed/7z1SwwFopJk?si=HdluGOjnErTcgVdP");
new Hymn("What child is this", 145, "", "", "https://www.youtube.com/embed/6jroBAl3WW8?si=kZEj9G4qmknU1RlB");
new Hymn("Whatsoever you do", 926, "", "", "https://www.youtube.com/embed/oDa1mcyK8B4?si=_6sQlfjIpREqHU1N")
new Hymn("When I survey the Wondrous Cross", 756, "", "", "https://www.youtube.com/embed/YSh1uU7xpdo?si=h_b1saj9HxZTLxCk")
new Hymn("Where are you bound, Mary?", 343, "", "", "https://www.youtube.com/embed/rPWOEZzNhxM?si=w_alalLvviuN7AX5");


//specify litergys

new Litergy(new Date("16 apr 2023"), "2nd Sunday of Easter", "A", "Chris", ["At the name of Jesus", "Crown him with many crowns", "Godhead here in hiding", "Sing of Mary, pure and lowly"])
new Litergy(new Date("23 apr 2023"), "3rd Sunday of Easter", "A", "Chris", ["Christ be our light", "I will be with you", "Bread of life", "Holy virgin by God's decree"])
new Litergy(new Date("30 apr 2023"), "4th Sunday of Easter", "A", "Chris", ["At the lamb's high feast", "Gifts of bread & wine", "This is my body", "Hail Queen of Heaven"])
new Litergy(new Date("07 may 2023"), "5th Sunday of Easter", "A", "Chris", ["Sing of the Lord's goodness", "This is my will, my one command", "The light of Christ", "Daily, daily sing to Mary"])
new Litergy(new Date("14 may 2023"), "6th Sunday of Easter", "A", "Chris", ["Alleluia, sing to Jesus", "Take our bread", "O God you search me", "As I kneel before you"])
new Litergy(new Date("21 may 2023"), "7th Sunday of Easter", "A", "Julian", ["Gather us in", "In bread we bring you, Lord", "Let all mortal flesh", "Eternal father, strong to save"])
new Litergy(new Date("28 may 2023"), "Pentecost", "A", "Julian", ["Here I am, Lord", "Here we bring you", "Sweet Sacrament Divine", "Immaculate Mary"])
new Litergy(new Date("04 jun 2023"), "Trinity Sunday", "A", "Julian", ["Praise my soul the King of heaven", "Blest are you, Lord", "Freely, freely", "Sing of Mary, pure and lowly"])
new Litergy(new Date("11 jun 2023"), "10th Sunday of Ordinary Time", "A", "Julian", ["Love divine, all loves excelling", "O bread of heaven", "The servant King", "I'll sing a hymn to Mary"])
new Litergy(new Date("18 jun 2023"), "11th Sunday of Ordinary Time", "A", "Julian", ["Shine Jesus Shine", "All that I am", "Be thou my vision", "O purest of creatures"])
new Litergy(new Date("25 jun 2023"), "12th Sunday of Ordinary Time", "A", "Julian", ["Tell out my soul", "Take our bread", "Do not be afraid", "O lady, full of God's own grace"])

new Litergy(new Date("29 jun 2023"), "Saints Peter & Paul", "A", "Chris", ["Our God reigns", "The Summons", "He is Lord", "For all the saints"])

new Litergy(new Date("08 dec 2024"), "2nd Sunday Advent", "C", "Chris", ["On jordan's bank", "praise to you o christ our saviour", "this is my body", "holy virgin by god's decree"])
new Litergy(new Date("15 dec 2024"), "3rd Sunday Advent", "C", "Chris", ["the voice of god", "holy is his name", "the king of glory comes", "blessed virgin mother"]);
new Litergy(new Date("22 dec 2024"), "4th Sunday Advent", "C", "Chris", ["long ago prophets knew", "the angel gabriel", "in the breaking of the bread", "o mary conceived in the grace of your son"]);
new Litergy(new Date("24 dec 2024"), "Christmas Eve", "C", "Chris", ["on christmas night all christians sing", "it came upon the midnight clear", "once in royal david's city", "the first noel"]);
new Litergy(new Date("25 dec 2024"), "Christmas Day", "C", "Chris", ["unto us is born a son", "hark the herald angels sing", "silent night", "o come all ye faithful"]);
new Litergy(new Date("29 dec 2024"), "Feast of Holy Family", "C", "Chris", ["what child is this", "in the bleak mid-winter", "bread of life", "sing of mary, pure and lowly"]);
new Litergy(new Date("01 jan 2025"), "Mary the Holy mother of God", "C", "Chris", ["I'll sing a hymn to mary", "hail queen of heaven", "as i kneel before you", "holy virgin by god's decree"]);
new Litergy(new Date("5 jan 2025"), "The Epiphany", "C", "Chris", ["bethlehem of noblest cities", "As with gladness men of old", "We three kings", "As I kneel before you"]);
new Litergy(new Date("12 jan 2025"), "The Baptism of the Lord", "C", "Chris", ["i heard the voice of Jesus say", "water of life", "o let all who thirst", "hail queen of heaven"]);
new Litergy(new Date("19 jan 2025"), "2nd Sunday of Ordinary Time", "C", "Chris", ["The Church's one foundation", "Lay your hands", "One Bread, One Body", "Immaculate Mary"]);
new Litergy(new Date("26 jan 2025"), "3rd Sunday of Ordinary Time", "C", "Chris", ["We have a gospel to proclaim", "Blest are you, Lord", "This is my body", "Where are you bound, Mary?"]);
new Litergy(new Date("2 Feb 2025"), "The Presentation of the Lord", "C", "Chris", ["Sing of the Lord's Goodness", "The King of Glory Comes", "The light of Christ", "Daily, daily sing to Mary"]);
new Litergy(new Date("9 Feb 2025"), "5th Sunday of Ordinary Time", "C", "Chris", ["Follow me, follow me", "The Summons", "Dear Lord and Father of mankind", "Sing we of the blessed Mother"]);

new Litergy(new Date("16 Feb 2025"), "6th Sunday of Ordinary Time", "C", "Julian", ["Our God reigns", "Blest are you, Lord", "O God, our help in ages past", "Immaculate Mary"]);
new Litergy(new Date("23 Feb 2025"), "7th Sunday of Ordinary Time", "C", "Julian", ["God of mercy and compassion", "Make me a channel of your peace", "Freely, freely", "O lady, full of God's own grace"]);
new Litergy(new Date("2 Mar 2025"), "8th Sunday of Ordinary Time", "C", "Julian", ["Praise to the Lord, the Almighty", "Alleluia, Sing to Jesus", "Be thou my vision", "O purest of creatures"]);
new Litergy(new Date("5 Mar 2025"), "Ash Wednesday", "C", "Chris", ["Though the mountains my fall", "Hosea (Come back to me)", "Upon thy table", "Be still and know I am with you", "As I kneel before you"]);
new Litergy(new Date("9 Mar 2025"), "1st Sunday of Lent", "C", "Julian", ["He who would valiant be", "Lead us, heavenly father", "Father, I place into your hands", "Hail Queen of heaven"]);
new Litergy(new Date("16 Mar 2025"), "2nd Sunday of Lent", "C", "Julian", ["Shine Jesus shine", "Christ be our light", "Immortal, invisible", "I'll sing a hymn to Mary"]);
new Litergy(new Date("23 Mar 2025"), "3rd Sunday of Lent", "C", "Chris", ["Praise to the holiest in the height", "All my hope on God is founded", "Upon thy table", "O God you search me", "Guide me O thou great redeemer"]);
new Litergy(new Date("30 Mar 2025"), "4rd Sunday of Lent", "C", "Julian", ["God is love his the care", "My song is love unknown", "The Church's one foundation", "Holy virgin by God's decree"]);
new Litergy(new Date("6 Apr 2025"), "5th Sunday of Lent", "C", "Julian", ["Love divine all loves excelling", "Here we bring you", "Amazing grace", "Sing of Mary, pure and lowly"])
new Litergy(new Date("13 Apr 2025"), "Palm Sunday", "C", "Chris", ["All glory laud and honour", "The servant king", "Were you there", "Holy virgin by god's decree"])
new Litergy(new Date("17 Apr 2025"), "Holy Thursday", "C", "Chris", ["We Should Glory in the Cross", "Jesu, Jesu, fill us with your love", "The Lord Jesus", "Ubi Caritas", "This is my body", "Of the Glorious Body Telling", "Stay with me"])
new Litergy(new Date("19 Apr 2025"), "Easter Vigil", "C", "Chris", ["Saints of God in Glory", "Water of life", "Christ be our light", "bread of life", "Thine be the Glory"])
new Litergy(new Date("20 Apr 2025"), "Easter Sunday", "C", "Chris", ["Sing of the Lord's goodness", "Jesus Christ is risen today", "Alleluia, Alleluia, give thanks", "Tell out my soul"])
new Litergy(new Date("27 Apr 2025"), "2nd Sunday of Easter", "C", "Chris", ["At the name of Jesus", "Now the green blade riseth", "He is Lord", "O Mother Blest"]);
new Litergy(new Date("4 May 2025"), "3rd Sunday of Easter", "C", "Chris", ["Crown him with many Crowns", "I will be with you", "One bread, One body", "Hail Queen of heaven"]);
new Litergy(new Date("11 May 2025"), "4th Sunday of Easter", "C", "Chris", ["Our God reigns", "Come to the river", "The Lord's my Shepherd", "All people that on earth do dwell", "immaculate Mary"])
new Litergy(new Date("18 May 2025"), "5th Sunday of Easter", "C", "Chris", ["God is love, his the care", "This is my will, my one command", "This is my body", "As I kneel before you"])
new Litergy(new Date("25 May 2025"), "6th Sunday of Easter", "C", "Julian", ["Love divine all loves excelling", "Dear Lord and father of mankind", "A new commandment", "Christ be our light"])
new Litergy(new Date("29 May 2025"), "Ascension of Our Lord", "C", "Chris", ["A hymn of glory let us sing!", "He is Lord", "This is my body", "Crown him with many crowns"])
new Litergy(new Date("1 Jun 2025"), "7th Sunday of Easter", "C", "Julian", ["I heard the voice of Jesus say", "Alleluia, Sing to Jesus", "Fight the Good Fight", "Mary Immaculate, Star of the morning"])
new Litergy(new Date("8 Jun 2025"), "Pentecost Sunday", "C", "Julian", ["Shine Jesus Shine", "Holy Spirit Lord of Light", "Breathe on me, breath of God", "O Lady full of God's own grace"])
new Litergy(new Date("15 Jun 2025"), "Trinity Sunday", "C", "Julian", ["Eternal Father, Strong to save", "Lead us, heavenly Father", "For the beauty of the Earth", "I'll sing a Hymn to Mary"])
new Litergy(new Date("22 Jun 2025"), "Corpus Christi", "C", "Julian", ["Gather us in", "At the lamb's high feast", "Godhead here in hiding", "O mother blest"])
new Litergy(new Date("29 Jun 2025"), "St Peter & St Paul", "C", "Julian", ["Follow me, follow me", "My Song is love unknown", "Be thou my vision", "Sing of Mary pure and lowly"])
new Litergy(new Date("6 Jul 2025"), "14th Sunday in Ordinary Time", "C", "Julian", ["Praise my soul the King of Heaven", "Gifts of bread & wine", "Soul of my saviour", "Hail Queen of Heaven"])
new Litergy(new Date("13 Jul 2025"), "15th Sunday in Ordinary Time", "C", "Julian", ["God is Love, His the care", "O Worship the King", "The Church's One Foundation", "O Purest of Creatures"])
new Litergy(new Date("20 Jul 2025"), "16th Sunday in Ordinary Time", "C", "Julian", ["All are welcome", "Bread of life", "Christ be beside me", "Daily daily sing to Mary"])
new Litergy(new Date("27 Jul 2025"), "17th Sunday in Ordinary Time", "C", "Julian", ["He who would valiant be", "Sweet Sacrament Divine", "When I survey the Wondrous Cross", "Virgin Wholly Marvellous"])
new Litergy(new Date("3 Aug 2025"), "18th Sunday in Ordinary Time", "C", "Chris", ['Dear Lord and Father of Mankind', 'Take our bread', 'All my hope on God is founded', "I'll sing a hymn to Mary"])
new Litergy(new Date("10 Aug 2025"), "19th Sunday in Ordinary Time", "C", "Chris", ["O Lord my God", "Do not be afraid", "This is my body", "Holy Virgin, by God's decree"], ["Bless the Lord, my soul", "10,000 reasons"])
new Litergy(new Date("14 Aug 2025"), "The Assumption of the Blessed Virgin Mary", "C", "Chris", ["I'll sing a hymn to Mary", "O Mother blest", "Holy is his name", "As I kneel before you"])
new Litergy(new Date("17 Aug 2025"), "20th Sunday in Ordinary Time", "C", "Chris", ["The Church's one foundation", "I am the bread of life", "Be still for the presence of the Lord", "Sing we of the blessed Mother"], ["My song is love unknown"])
new Litergy(new Date("24 Aug 2025"), "21st Sunday in Ordinary Time", "C", "Chris", ["Tell out my soul", "Alleluia Sing to Jesus", "One bread, one body", "Hail, Queen of heaven"], ["Laudate Dominum", "Laudate Dominum2"])
new Litergy(new Date("31 Aug 2025"), "22nd Sunday in Ordinary Time", "C", "Chris", ["Christ is our King", "Whatsoever you do", "The servant song", "Sing of Mary, pure and lowly"], ["O Lord hear my prayer"])
new Litergy(new Date("7 Sep 2025"), "23rd Sunday in Ordinary Time", "C", "Chris", ["Lord of all hopefulness", "The Summons", "All that I am", "My soul proclaims you, mighty God"], ["As the deer longs"])


const liturgyPlan = document.querySelector(".liturgyPlan");

allLitergies.sort(function (a, b) { return a.date - b.date }); //sort Liturgy array incase not sorted manually

document.querySelector(".liturgyPlan .flex-container").addEventListener("click", (e) => {
    if (!e.target.closest('button')) { return }
    const clickedText = e.target.closest('button').textContent;
    function makeCategorySelection() { }

    const selectionButtons = document.querySelectorAll(".liturgyPlan .flex-container button");
    const selectionContent = wrapper.querySelectorAll(".container-HymnsAcclamations .liturgyContents");
    // const selectionContent2 = wrapper.querySelectorAll(".container-HymnsAcclamations");

    for (let index = 0; index < selectionButtons.length; index++) {
        const element = selectionButtons[index];
        element.classList.remove("selected");
    }
    for (let index = 0; index < selectionContent.length; index++) {
        const element = selectionContent[index];
        element.classList.remove("selected");
        element.classList.add("hidden")
    }


    switch (clickedText) {
        case "Acclamations":

            liturgyPlan.querySelector(".acclamationsTitle").classList.add("selected");
            // liturgyPlan.querySelector(".hymnsTitle", ".hymns").classList.remove("selected");
            liturgyPlan.querySelector(".acclamations").classList.add("selected");
            // liturgyPlan.querySelector(".hymns").classList.remove("selected");

            liturgyPlan.querySelector(".container").classList.add("hidden");
            break;
        case "Next Up":
            // liturgyPlan.querySelector(".acclamationsTitle").classList.remove("selected");
            liturgyPlan.querySelector(".hymnsTitle", ".hymns").classList.add("selected");
            // liturgyPlan.querySelector(".acclamations").classList.remove("selected");
            liturgyPlan.querySelector(".hymns").classList.add("selected");

            liturgyPlan.querySelector(".container").classList.remove("hidden");
            break;
        case "Future":
            liturgyPlan.querySelector(".container").classList.add("hidden"); //upcoming
            liturgyPlan.querySelector(".easterTitle").classList.add("selected");
            liturgyPlan.querySelector(".futureServices").classList.add("selected");
            liturgyPlan.querySelector(".container").classList.add("hidden");

            const futureTitles = wrapper.querySelectorAll(".futureServices h4")


            if ((allLitergies.filter(x => x.date > todaysDate)[1]) != undefined) { futureTitles[0].textContent = allLitergies.filter(x => x.date > todaysDate)[1].occasion; }
            if ((allLitergies.filter(x => x.date > todaysDate)[2]) != undefined) { futureTitles[1].textContent = allLitergies.filter(x => x.date > todaysDate)[2].occasion; }
            if ((allLitergies.filter(x => x.date > todaysDate)[3]) != undefined) { futureTitles[2].textContent = allLitergies.filter(x => x.date > todaysDate)[3].occasion; }
            if ((allLitergies.filter(x => x.date > todaysDate)[4]) != undefined) { futureTitles[3].textContent = allLitergies.filter(x => x.date > todaysDate)[4].occasion; }
            if ((allLitergies.filter(x => x.date > todaysDate)[5]) != undefined) { futureTitles[4].textContent = allLitergies.filter(x => x.date > todaysDate)[5].occasion; }
            if ((allLitergies.filter(x => x.date > todaysDate)[6]) != undefined) { futureTitles[5].textContent = allLitergies.filter(x => x.date > todaysDate)[6].occasion; }
            if ((allLitergies.filter(x => x.date > todaysDate)[7]) != undefined) { futureTitles[6].textContent = allLitergies.filter(x => x.date > todaysDate)[7].occasion; }
            if ((allLitergies.filter(x => x.date > todaysDate)[8]) != undefined) { futureTitles[7].textContent = allLitergies.filter(x => x.date > todaysDate)[8].occasion; }
            if ((allLitergies.filter(x => x.date > todaysDate)[9]) != undefined) { futureTitles[8].textContent = allLitergies.filter(x => x.date > todaysDate)[9].occasion; }
            if ((allLitergies.filter(x => x.date > todaysDate)[10]) != undefined) { futureTitles[9].textContent = allLitergies.filter(x => x.date > todaysDate)[10].occasion; }
            break;

    }
});
function checkAndPopulateInstrumentals(number) {
    const futureContent = wrapper.querySelectorAll('.futureServices li.hymnOccasion')

    if (nextLitergy[number].instrumental.length !== 0) {

        const instrumentalsDiv = document.createElement('div')
        instrumentalsDiv.classList.add('futureHymnsOpen', 'extras_future')
        const instrumentalsTitle = document.createElement('h2')



        // document.createTextNode('Choir Extras');
        const list = document.createElement('ul');
        instrumentalsDiv.appendChild(instrumentalsTitle).appendChild(document.createTextNode('Choir Extras'));
        // .appendChild(document.createElement('h2'));
        const newFile = instrumentalsDiv.appendChild(list)
        newFile;
        nextLitergy[number].instrumental.forEach((hymn, idx) => {
            const createLi = document.createElement('li')
            const createH6 = document.createElement('h6')
            const createH4 = document.createElement('h4')
            const refText = document.createTextNode(hymn.hymnNumber)
            const titleText = document.createTextNode(hymn.title)

            newFile.appendChild(createLi).append(createH6, createH4);
            createH6.appendChild(refText)
            createH4.appendChild(titleText)
        })
        instrumentalsDiv.append(newFile);
        futureContent[number - 1].appendChild(instrumentalsDiv);
    }



}

function addElement(addOrRemove, number) {
    const futureContent = wrapper.querySelectorAll('.futureServices li.hymnOccasion')
    const hymnsObjectArray = (allLitergies.filter(x => x.date > todaysDate)[number].hymn);

    if (addOrRemove === 'add') {
        const newDiv = document.createElement("div");
        newDiv.classList.add('futureHymnsOpen')
        hymnsObjectArray.forEach((hymn, idx) => {

            // create a new div element
            const newH4 = document.createElement('h4');
            const newH6 = document.createElement('h6');
            // and give it some content
            const hymnText = allLitergies.filter(x => x.date > todaysDate)[number].hymn[idx].title
            const hymnRef = allLitergies.filter(x => x.date > todaysDate)[number].hymn[idx].hymnNumber
            const newContent = document.createTextNode(hymnText);
            newH6.appendChild(document.createTextNode(hymnRef));

            newH4.appendChild(newContent);
            // add the text node to the newly created div

            newDiv.appendChild(newH6)
            newDiv.appendChild(newH4)
            // add the newly created element and its content into the DOM

        })
        futureContent[number - 1].appendChild(newDiv);
        checkAndPopulateInstrumentals(number);

    } else {
        // const newDiv = wrapper.querySelectorAll(futureContent);

        const allCreatedDivs = futureContent[number - 1].querySelectorAll('.futureHymnsOpen');
        allCreatedDivs.forEach((div) => { futureContent[number - 1].removeChild(div) });
        // futureContent[number].removeChild(futureContent[number].querySelector('.extras_future'));

    }
}


futureHymnsSection();
function futureHymnsSection() {
    //open/close up hymn list in future hymns
    liturgyPlan.querySelector(".futureServices ul").addEventListener("click", (e) => {

        const targetFirstClass = Number(e.target.classList[0])
        const closestDivFirstClass = e.target.closest('div').classList[0]
        // const title = nextLitergy[Number(e.target.classList[0]) + 1].occasion

        if (e.target.closest('div').classList.contains('futureServices')) {
            const activeTitle = wrapper.querySelectorAll('.futureServices li')
            if (e.target.closest('li').classList[1] !== 'active') {

                e.target.closest('li').classList.add('active');


                addElement('add', targetFirstClass + 1);
            } else {

                addElement('remove', targetFirstClass + 1);
                e.target.closest('li').classList.remove('active');
            }

        }
        //further open hymns if selected
        else {



            // liturgyPlan.querySelector(".futureServices ul").addEventListener("click", (e) => {

            allHymns = originalHymns;
            allHymns = allLitergies.filter(x => x.date > todaysDate)[Number(e.target.closest('li.active').id) + 1].hymn;
            const chosenLiturgy = allLitergies.filter(x => x.date > todaysDate)[Number(e.target.closest('li.active  ').id) + 1];
            if (chosenLiturgy.instrumental != undefined) {
                allHymns = allHymns.concat(chosenLiturgy.instrumental);
            }
            count = 0;

            // nextLitergy = allLitergies.filter(x => x.date >= todaysDate);
            hymnSelect();
            wrapper.querySelector(".liturgyPlan").classList.add("hidden");
            togglePanels();

            // })
        }
    });

}



const todaysDate = new Date();
//next litergy will change after 10:30am
// todaysDate.setMinutes(30);
// todaysDate.setSeconds(0);
// todaysDate.setHours(10);
// todaysDate.setMilliseconds(0);

const nextLitergy = allLitergies.filter(x => x.date >= todaysDate);
const originalHymns = allHymns;
function instrumentalSection() {
    // Add 'Extras' title and additional hymns if 'instrumental' hymn is added to 'current liturgy

}

if (nextLitergy[0].date.getDay() != 7) { nextLitergy[0].date.setHours(19); } // If next Litergy is not a Sunday - set time to 19:30 (so Next Up Litergy remains for evening masses)

wrapper.querySelector(".acclamations").addEventListener("click", function (e) {

    massTitle = e.target.textContent;
    allHymns = originalHymns;
    allHymns = allAcclamationSettings[e.target.classList.value].acclamation;
    count = 0;
    hymnSelect();
    wrapper.querySelector(".liturgyPlan").classList.add("hidden");
    togglePanels();
});

wrapper.querySelector(".liturgyContents.hymns.selected").addEventListener("click", function () {
    allHymns = originalHymns;
    if (nextLitergy[0].instrumental.length == 0) { allHymns = (nextLitergy[0].hymn) } else {
        allHymns = (nextLitergy[0].hymn).concat(nextLitergy[0].instrumental);
    }

    // .concat(nextLitergy[0].instrumental);
    count = 0;
    hymnSelect();
    wrapper.querySelector(".liturgyPlan").classList.add("hidden");
    togglePanels();
});
wrapper.querySelector(".openLiturgyPlan").addEventListener("click", function () {
    wrapper.querySelector(".liturgyPlan").classList.remove("hidden");
    togglePanels();
});
wrapper.querySelector(".allHymns").addEventListener("click", function () {
    allHymns = originalHymns;
    hymnSelect();
    wrapper.querySelector(".liturgyPlan").classList.add("hidden");
    togglePanels();
});

if (nextLitergy[0] != undefined) {

    wrapper.querySelector("#nextDate").textContent = ordinal(nextLitergy[0].date.toLocaleDateString(undefined, { day: "numeric" })) + " of " + nextLitergy[0].date.toLocaleDateString(undefined, { month: "long" });
    wrapper.querySelector("#nextOccasion").textContent = nextLitergy[0].occasion;
    let x = 0;
    //populate hymn titles with nexthymn object
    nextLitergy[0].hymn.forEach((hymn, idx) => {
        const hymnText = wrapper.querySelector(`#hymn${idx}`);
        const hymnRef = wrapper.querySelector(`#hymnReference${idx}`);
        hymnText.textContent = nextLitergy[0].hymn[idx].title;
        hymnRef.textContent = nextLitergy[0].hymn[idx].hymnNumber;
        x++;

    })
    //unhide blank title & title ref numbers
    const nextHymnArray = wrapper.querySelectorAll('#nextHymns h6');
    nextHymnArray.forEach((hymn, idx) => {
        hymn.classList.remove('hidden');
        wrapper.querySelectorAll('#nextHymns h4')[idx].classList.remove('hidden');

    })
    //hide blank titles and title reference numbers
    for (let index = x; index < nextHymnArray.length; index++) {
        const element = wrapper.querySelectorAll('#nextHymns h6')[index];
        const element2 = wrapper.querySelectorAll('#nextHymns h4')[index];
        element.classList.add('hidden');
        element2.classList.add('hidden');
    }

    // if (nextLitergy[0].hymn.length > 0) {
    //     wrapper.querySelector("#hymn1").textContent = nextLitergy[0].hymn[0].title;
    //     wrapper.querySelector("#hymnReference1").textContent = nextLitergy[0].hymn[0].hymnNumber;
    // }
    // else if (nextLitergy[0].hymn.length > 1) {
    //     wrapper.querySelector("#hymn2").textContent = nextLitergy[0].hymn[1].title;
    //     wrapper.querySelector("#hymnReference2").textContent = nextLitergy[0].hymn[1].hymnNumber;
    // }
    // else if (nextLitergy[0].hymn.length > 2) {
    //     wrapper.querySelector("#hymn3").textContent = nextLitergy[0].hymn[2].title;
    //     wrapper.querySelector("#hymnReference3").textContent = nextLitergy[0].hymn[2].hymnNumber;
    // }
    // else if (nextLitergy[0].hymn.length > 3) {
    //     wrapper.querySelector("#hymn4").textContent = nextLitergy[0].hymn[3].title;
    //     wrapper.querySelector("#hymnReference4").textContent = nextLitergy[0].hymn[3].hymnNumber;
    // }
    // else if (nextLitergy[0].hymn.length > 4) {
    //     wrapper.querySelector("#hymn5").textContent = nextLitergy[0].hymn[4].title;
    //     wrapper.querySelector("#hymnReference5").textContent = nextLitergy[0].hymn[4].hymnNumber;
    // }
    // else if (nextLitergy[0].hymn.length > 5) {
    //     wrapper.querySelector("#hymn6").textContent = nextLitergy[0].hymn[5].title;
    //     wrapper.querySelector("#hymnReference6").textContent = nextLitergy[0].hymn[5].hymnNumber;
    // }
    // else if (nextLitergy[0].hymn.length > 6) {
    //     wrapper.querySelector("#hymn7").textContent = nextLitergy[0].hymn[6].title;
    //     wrapper.querySelector("#hymnReference7").textContent = nextLitergy[0].hymn[6].hymnNumber;
    // }
    // else if (nextLitergy[0].hymn.length > 7) {
    //     wrapper.querySelector("#hymn8").textContent = nextLitergy[0].hymn[7].title;
    //     wrapper.querySelector("#hymnReference8").textContent = nextLitergy[0].hymn[7].hymnNumber;
    // }
    // else if (nextLitergy[0].hymn.length > 8) {
    //     wrapper.querySelector("#hymn9").textContent = nextLitergy[0].hymn[8].title;
    //     wrapper.querySelector("#hymnReference9").textContent = nextLitergy[0].hymn[8].hymnNumber;
    // }
    //unhide 'extras' title, if 'instrumental' category is included in 'Liturgy' file of 'nextliturgy'.
    const instrumentalTitle = document.querySelector('.extras')
    if (nextLitergy[0].instrumental.length !== 0) {
        instrumentalTitle.classList.remove('hidden');
        populateInstrumentals();
    }
    //populate hymn titles with nexthymn object
    function populateInstrumentals() {
        nextLitergy[0].instrumental.forEach((hymn, idx) => {
            const hymnText = wrapper.querySelector(`#extra${idx + 1}`);
            const hymnRef = wrapper.querySelector(`#extraReference${idx + 1}`);
            hymnText.textContent = nextLitergy[0].instrumental[idx].title;
            hymnRef.textContent = nextLitergy[0].instrumental[idx].hymnNumber;
        })
    }

    // if (nextLitergy[0].instrumental) {
    //     if (nextLitergy[0].instrumental.length <= 1) {
    //         wrapper.querySelector("#extra1").textContent = nextLitergy[0].instrumental[0].title;
    //         wrapper.querySelector("#extraReference1").textContent = nextLitergy[0].instrumental[0].hymnNumber;
    //     }
    //     else if (nextLitergy[0].hymn.length <= 2) {
    //         wrapper.querySelector("#extra2").textContent = nextLitergy[0].instrumental[1].title;
    //         wrapper.querySelector("#extraReference2").textContent = nextLitergy[0].instrumental[1].hymnNumber;
    //     }
    //     else if (nextLitergy[0].hymn.length <= 2) {
    //         wrapper.querySelector("#extra3").textContent = nextLitergy[0].instrumental[2].title;
    //         wrapper.querySelector("#extra3").textContent = nextLitergy[0].instrumental[2].hymnNumber;
    //     }
    // }
}













var testDate = new Date().toLocaleDateString(undefined, { day: "numeric" });

// document.querySelector("#test").textContent = ordinal(testDate)
// allLitergies[0].date + " - " + allLitergies[0].occasion;
// document.querySelector("#test2").textContent = todaysDate;
// document.querySelector("#test3").textContent = nextLitergy[0].date.toDateString();

function ordinal(day) { //add 'st','nd','rd' or 'th' to date
    let nth;
    switch (day % 10) {
        case 1:
            nth = "st";
            break;
        case 2:
            nth = "nd";
            break;
        case 3:
            nth = "rd";
            break;

        default:
            nth = "th"
            break;
    }
    if (day >= 4 && day <= 20) {
        nth = "th";
    }
    return day + nth;
}


function grabHymnObject(hymnTitleArray) {
    //return array of hymn objects (up to 8) depending on how many are requested in 'new litergy'

    var hymns = [];

    if (hymnTitleArray !== undefined) {
        hymnTitleArray.forEach(input => {
            hymns.push(allHymns.filter(x => (x.title.toLowerCase().replace(/,/g, "") == input.toLowerCase().replace(/,/g, "")))[0])
        }

        )
    }

    return hymns;

}

count = 0;
let start;

function dragButtonsStartingPosition(e) {
    start = Math.floor(e.y);
    wrapper.addEventListener("pointermove", dragButtons);
}
function dragButtons(e) {
    // addClassOpenToButton("remove");
    // container.removeEventListener("click", addClassOpenToButton);



    if (Math.floor(e.y) > start) {


        count--;
        if (count == -1) {
            count = allHymns.length - 1;
        }
        start = Math.floor(e.y);


        scroll(e);

        setTimeout(() => {
            hymnSelect()
        }, scrollSpeed);



    }
    if (Math.floor(e.y) < start) {
        count++;
        if (count == allHymns.length) {
            count = 0;
        }
        scroll(e);

        setTimeout(() => {
            hymnSelect()
        }, scrollSpeed);
        start = Math.floor(e.y);
    }
}
function endOfTouch() {

    wrapper.removeEventListener("pointermove", dragButtons);

    setTimeout(() => {//prevent click on pointerup
        // wrapper.addEventListener("click", addClassOpenToButton);
    }, 100);
}

//up & down buttons
document.querySelectorAll("button.up, button.down").forEach(btn => {
    btn.addEventListener("click", (e) => {
        console.log(e.target)

        if (e.target.closest('button').classList == "up") {

            count--;
            if (count == -1) {
                count = allHymns.length - 1;
            }
        }
        else {
            count++;
            if (count == allHymns.length) {
                count = 0;
            }
        }
        scroll(e);

        setTimeout(() => {
            hymnSelect()
        }, scrollSpeed);
    })
})


function hymnSelect() { //populate titles based upon 'count' number//

    var title = allHymns[count].title;
    document.querySelector("#panel1_title").textContent = title;
    var lastHymn = allHymns[allHymns.length - 1].title; //Hark the herald
    switch (allHymns.length) {
        case 1:
            var secondToLastHymn = "undefined"
            var thirdToLastHymn = "undefined"
            break;

        case 2:
            var secondToLastHymn = allHymns[allHymns.length - 2].title; //Here we bring you
            var thirdToLastHymn = "undefined"
            break;

        default:
            var thirdToLastHymn = allHymns[allHymns.length - 3].title; // Silent night
            break;
    }

    // if (allHymns.length < 2){var secondToLastHymn = "undefined"}
    // else{
    var secondToLastHymn = allHymns[allHymns.length - 2].title; //Here we bring you


    // var thirdToLastHymn = allHymns[allHymns.length - 3].title; // Silent night



    //top 2 titles//
    if (count == 0) {

        document.querySelector("#prepanel1_title").textContent = lastHymn;
        document.querySelector("#prepanel0_title").textContent = secondToLastHymn;
        document.querySelector("#prepanelTop_title").textContent = thirdToLastHymn;
    }
    else {
        document.querySelector("#prepanel1_title").textContent = allHymns[count - 1].title;
        if (count == 1) {
            document.querySelector("#prepanel0_title").textContent = lastHymn;
            document.querySelector("#prepanelTop_title").textContent = secondToLastHymn;
        }
        else {
            document.querySelector("#prepanel0_title").textContent = allHymns[count - 2].title;
            if (count == 2) {
                document.querySelector("#prepanelTop_title").textContent = lastHymn;
            }
            else {
                document.querySelector("#prepanelTop_title").textContent = allHymns[count - 3].title;
            }
        }
    }

    //bottom 3 tittles//
    if (count == allHymns.length - 1 && allHymns.length > 1) {
        document.querySelector("#prepanel2_title").textContent = allHymns[0].title;
        document.querySelector("#prepanel3_title").textContent = allHymns[1].title;
        document.querySelector("#prepanelBottom_title").textContent = allHymns[2].title;
    }
    else if (allHymns.length > 1) {
        document.querySelector("#prepanel2_title").textContent = allHymns[count + 1].title;
        if (count == allHymns.length - 2) {
            document.querySelector("#prepanel3_title").textContent = allHymns[0].title;
            document.querySelector("#prepanelBottom_title").textContent = allHymns[1].title;
        }
        else {
            document.querySelector("#prepanel3_title").textContent = allHymns[count + 2].title;
            if (count == allHymns.length - 3) {
                document.querySelector("#prepanelBottom_title").textContent = allHymns[0].title;
            } else {
                document.querySelector("#prepanelBottom_title").textContent = allHymns[count + 3].title;
            }
        }
    }
    // document.querySelector(".countVisual").textContent = count; //debugging//

}






accordion.addEventListener("click", (e) => {



    const activePanel = e.target.closest(".accordion_panel");
    const specificClick = e.target.closest(".closePanel");
    const audioButton = e.target.closest(".audioSelection")
    title = allHymns[count].title;




    if (!activePanel) return;
    if (specificClick) {
        closeAccordion(specificClick);
    }
    else if (audioButton) {
        const allLights = audioButton.parentElement.parentElement.querySelectorAll(".audioCategory__light");
        const accordionContent = audioButton.parentElement.parentElement.parentElement;

        let partTitle = audioButton.innerHTML;
        if (partTitle == "Satb") {
            partTitle = partTitle.toUpperCase();
        }
        const audioDescription = title + " - " + partTitle;
        let filename = "./audio/" + title.toLowerCase() + "/" + title.toLowerCase()/*.replace(/ /g, "")*/ + " - " + partTitle.toLowerCase() + ".mp3";


        // ./audio/gloria/gloria - melody.mp3
        if (document.querySelector(".liturgyPlan button").classList.contains("selected") == true) {
            filename = "./audio/" + "hymns/" + title.toLowerCase() + "/" + title.toLowerCase()/*.replace(/ /g, "")*/ + " - " + partTitle.toLowerCase() + ".mp3";

        } else {
            filename = "./audio/" + "acclamations/" + massTitle.toLowerCase() + "/" + title.toLowerCase() + "/" + massTitle.toLowerCase() + " - " + title.toLowerCase()/*.replace(/ /g, "")*/ + " - " + partTitle.toLowerCase() + ".mp3";

        }

        //  filename = "not happening"
        // }

        document.querySelector("#mediaPlayer__light").removeAttribute("class");
        // document.querySelector("#title").removeAttribute("class");

        for (let index = 0; index < allLights.length; index++) {
            const element = allLights[index];
            element.classList.remove("selected");

        }
        switch (audioButton.innerHTML) {
            case capitalize(allHymns[count].vocalPart[0]):

                /* Add selection light to SATB button */
                audioButton.parentElement.querySelector(".satb").classList.add("selected");
                /* Add selection light to Media Player button */
                accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "satb");
                //Add audio file + audio description
                accordionContent.querySelector("audio").setAttribute("src", filename);
                accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;

                break;
            case capitalize(allHymns[count].vocalPart[1]):
                /* Add selection light to SATB button */
                audioButton.parentElement.querySelector(".melody").classList.add("selected");
                /* Add selection light to Media Player button */
                accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "melody");
                //Add audio file + audio description
                accordionContent.querySelector("audio").setAttribute("src", filename);
                accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;

                break;
            case capitalize(allHymns[count].vocalPart[2]):
                /* Add selection light to SATB button */
                audioButton.parentElement.querySelector(".alto").classList.add("selected");
                /* Add selection light to Media Player button */
                accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "alto");
                //Add audio file + audio description
                accordionContent.querySelector("audio").setAttribute("src", filename);
                accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;

                break;
            case capitalize(allHymns[count].vocalPart[3]):
                /* Add selection light to SATB button */
                audioButton.parentElement.querySelector(".tenor").classList.add("selected");
                /* Add selection light to Media Player button */
                accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "tenor");
                //Add audio file + audio description
                accordionContent.querySelector("audio").setAttribute("src", filename);
                accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;

                break;
            case capitalize(allHymns[count].vocalPart[4]):
                /* Add selection light to SATB button */
                audioButton.parentElement.querySelector(".bass").classList.add("selected");
                /* Add selection light to Media Player button */
                accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "bass");
                //Add audio file + audio description
                accordionContent.querySelector("audio").setAttribute("src", filename);
                accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;

                break;
            case capitalize(allHymns[count].vocalPart[5]):
                /* Add selection light to SATB button */
                audioButton.parentElement.querySelector(".piano").classList.add("selected");
                /* Add selection light to Media Player button */
                accordionContent.querySelector("#mediaPlayer__light").classList.add("selected", "piano");
                //Add audio file + audio description
                accordionContent.querySelector("audio").setAttribute("src", filename);
                accordionContent.querySelector("#mediaPlayer__description").textContent = audioDescription;

                break;

            default:
                break;
        }
    }

    else {
        toggleAccordion(activePanel);
    }
})

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents = panelToActivate.parentElement.querySelectorAll(".accordion_content");
    const panels = panelToActivate.parentElement.querySelectorAll(".accordion_panel");
    const panel1 = document.querySelector(".accordion_panel");
    const headings = panelToActivate.parentElement.querySelectorAll(".panel_heading");
    const prepanels = panelToActivate.parentElement.parentElement.querySelectorAll(".prepanel");

    //choose panels to active based on Object info
    if (panelToActivate.id == "panel1") {

        wrapper.querySelectorAll("button.up, button.down").forEach(btn => {
            btn.classList.add("hidden");

        })

        panelToActivate.parentElement.parentElement.lastElementChild.classList.add("hidden"); //hide hymn selection buttons
        panelToActivate.classList.add("open"); // open 1st panel to add filter effect
        if (allHymns[count].sheetMusic.length == 0) {
            panelToActivate.parentElement.querySelector("#panel2").classList.add("hidden");
        } else { panelToActivate.parentElement.querySelector("#panel2").classList.remove("hidden"); }

        if (allHymns[count].vocalPart.length == 0) {
            panelToActivate.parentElement.querySelector("#panel3").classList.add("hidden");
        } else { panelToActivate.parentElement.querySelector("#panel3").classList.remove("hidden"); }

        if (allHymns[count].video.length == 0) {
            panelToActivate.parentElement.querySelector("#panel4").classList.add("hidden");
        } else { panelToActivate.parentElement.querySelector("#panel4").classList.remove("hidden"); }

        const populatedPanels = panelToActivate.parentElement.querySelectorAll(".accordion_panel");
        for (let index = 0; index < populatedPanels.length; index++) {
            const element = populatedPanels[index].classList.add("accordion_open");
        }
        panelToActivate.querySelector("#firstX").classList.remove("hidden");//add 'x' to 1st panel

        //blur out background panels when accordion opens//
        for (let index = 0; index < prepanels.length; index++) {
            const element = prepanels[index];
            element.classList.add("backgroundpanels");
        }


        for (let index = 0; index < panels.length; index++) { //add margin-top to panels once open
            const element = panels[index];
            const otherElement = headings[index];
            element.classList.add("plusGap");//adding margin-top to panels
            otherElement.classList.add("visible");//visibility for headings
        }
        // panelToActivate.classList.add("open"); 
    }
    //fully open selected panel
    else {
        switch (panelToActivate.id) {
            case "panel2":
                panelToActivate.lastElementChild.firstElementChild.setAttribute("src", allHymns[count].sheetMusic);
                break;
            case "panel3":
                const allListItems = panelToActivate.lastElementChild.firstElementChild.querySelectorAll("li");


                for (let index = 0; index < allListItems.length; index++) { //remove any lingering audio parts
                    const element = allListItems[index];
                    element.classList.remove("visible");
                }


                for (let index = 0; index < allHymns[count].vocalPart.length; index++) { //populate audio parts
                    const element = allListItems[index];
                    element.classList.add("visible");
                    element.lastElementChild.innerHTML = capitalize(allHymns[count].vocalPart[index]);
                }

                break;
            case "panel4":
                panelToActivate.lastElementChild.firstElementChild.setAttribute("src", allHymns[count].video);
                break;

            default:
                break;
        }

        if (!panelToActivate.classList.contains("panel")) { return; }; //return if main panel not clicked
        panelToActivate.classList.add("open");//open panel
        panelToActivate.querySelector(".closePanel").classList.remove("hidden");//add "x" to panel

        //hide all panels except selected + panel1
        for (let index = 1; index < panels.length; index++) {
            const element = panelToActivate.parentElement.querySelectorAll(".accordion_panel")[index];
            const anotherElement = headings[index];
            element.classList.add("visibility");
            element.classList.remove("plusGap");
            anotherElement.classList.remove("visible");
        }
        panelToActivate.classList.remove("visibility");//display:block to selected panel
        panelToActivate.classList.add("plusGap");//add gap to selected panel
        panelToActivate.firstElementChild.classList.add("visible");
    }

}




function closeAccordion(closeButton) {
    const allButtons = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".closePanel");
    const panels = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".accordion_panel");
    const headings = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".panel_heading");
    const clickedPanel = closeButton.parentElement.parentElement.querySelector(".accordion_panel");
    const prepanels = closeButton.parentElement.parentElement.parentElement.parentElement.querySelectorAll(".prepanel");

    if (closeButton.id == "firstX") {
        wrapper.querySelectorAll("button.up, button.down").forEach(btn => {
            btn.classList.remove("hidden");

        })
        closeButton.parentElement.parentElement.parentElement.parentElement.lastElementChild.classList.remove("hidden");

        for (let index = 0; index < panels.length; index++) {
            const element = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".accordion_panel")[index];
            const element2 = panels[index];
            const otherElement = headings[index];
            element.classList.remove("accordion_open");
            element.classList.remove("open");
            element2.classList.remove("plusGap"); //remove margin-top to panels once open
            otherElement.classList.remove("visible");
            element.classList.remove("visibility");
            allButtons[index].classList.add("hidden");
        }
        for (let index = 0; index < prepanels.length; index++) {
            const element = prepanels[index];
            element.classList.add("transition");
            element.classList.remove("backgroundpanels");

        }

    }
    else {

        // clickedPanel.classList.add("hidden");
        closeButton.parentElement.parentElement.classList.remove("open");
        closeButton.classList.add("hidden");


        for (let index = 0; index < panels.length; index++) {
            const element = closeButton.parentElement.parentElement.parentElement.querySelectorAll(".accordion_panel")[index];
            element.classList.remove("visibility");
            element.classList.add("plusGap");
            element.firstElementChild.classList.add("visible");
        }

    }
}

//manipulate strings//
function capitalizer(sentence, operator) {
    return operator(sentence);
}

function capitalize(sentence) { //capitalize 1st letter
    return sentence[0].toUpperCase() + sentence.substring(1);
}
function firstWord(sentence) {
    return sentence[0].toUpperCase() + sentence.substring(1);

}
function allWords(sentence) {
    let words = sentence.split(" ");
    for (let index = 0; index < words.length; index++) {
        words[index] = words[index][0].toUpperCase() + words[index].substring(1);
    }
    return words.join(" ");
}
function allLowerCase(sentence) {
    return sentence.toLowerCase();
}
function removeSpaces(sentence) {
    let words = sentence.split(" ");
    words = words.join("");
    return words;
}


function scroll(e) {

    const allPanels = e.target.closest('button').parentElement.parentElement.querySelectorAll(".accordion_panel");

    //add transition time for scroll function
    for (let index = 0; index < allPanels.length; index++) {
        const element = allPanels[index];
        element.classList.remove("transition")
    }
    // e.target.parentElement.parentElement.querySelectorAll(".accordion_open")[3].classList.add("transition"); //add blur filter to panels either side of panel1


    if (e.target.closest('button').classList == "up") {
        for (let index = 0; index < allPanels.length; index++) {
            const element = allPanels[index];
            element.classList.toggle("transformDown");

        }
        setTimeout(() => {
            for (let index = 0; index < allPanels.length; index++) {
                const element = allPanels[index];

                element.classList.toggle("transformDown");
                // element.classList.remove("transition");
            }
        }, scrollSpeed);

    }
    else {
        for (let index = 0; index < allPanels.length; index++) {
            const element = allPanels[index];
            element.classList.toggle("transformUp");
            // element.classList.remove("transition");
        }
        setTimeout(() => {
            for (let index = 0; index < allPanels.length; index++) {
                const element = allPanels[index];
                element.classList.toggle("transformUp");

            }
        }, scrollSpeed);
    }
}

