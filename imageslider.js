const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
function telugu(){
document.getElementById('translate1').innerHTML="స్పామ్ కాల్ అనేది అయాచిత మరియు సాధారణంగా అవాంఛిత ఫోన్ కాల్, ఇది సాధారణంగా ప్రచార లేదా మోసపూరిత ఉద్దేశంతో ఉంటుంది. ఈ కాల్‌లు తరచుగా టెలిమార్కెటర్‌లు, స్కామర్‌లు లేదా ఆటోమేటెడ్ సిస్టమ్‌ల నుండి ఉత్పన్నమవుతాయి, ఉత్పత్తులు, సేవలను విక్రయించడం లేదా మోసపూరిత కార్యకలాపాలలో పాల్గొనడం. స్కామర్‌లు వ్యక్తిగత సమాచారం, డబ్బును సేకరించేందుకు లేదా గుర్తింపు దొంగతనానికి పాల్పడే అవకాశం ఉన్నందున స్పామ్ కాల్‌లు అంతరాయం కలిగించేవిగా, దాడి చేసేవిగా మరియు హానికరమైనవి కావచ్చు. స్పామ్ కాల్‌లను ఎదుర్కోవడానికి చేసే ప్రయత్నాలలో కాల్ బ్లాకింగ్ యాప్‌లు, కాల్ చేయవద్దు రిజిస్ట్రీలు మరియు అనుమానాస్పద కాల్‌లను గుర్తించడం మరియు నివారించడం గురించి అవగాహన ఉన్నాయి.";
}
function english(){
    document.getElementById('translate1').innerHTML="A spam call is an unsolicited and usually unwanted phone call that typically involves promotional or fraudulent intent. These calls often originate from telemarketers, scammers, or automated systems, aiming to sell products, services, or engage in deceptive activities. Spam calls can be disruptive, invasive, and potentially harmful, as scammers might try to extract personal information, money, or commit identity theft. Efforts to combat spam calls include call blocking apps,Do Not Call registries, and awareness about recognizing and avoiding suspicious calls.";
    }
    function tamil(){
        document.getElementById('translate1').innerHTML="ஸ்பேம் அழைப்பு என்பது கோரப்படாத மற்றும் பொதுவாக தேவையற்ற தொலைபேசி அழைப்பாகும், இது பொதுவாக விளம்பர அல்லது மோசடி நோக்கத்தை உள்ளடக்கியது. இந்த அழைப்புகள் பெரும்பாலும் டெலிமார்க்கெட்டர்கள், மோசடி செய்பவர்கள் அல்லது தானியங்கு அமைப்புகள், தயாரிப்புகள், சேவைகளை விற்க அல்லது ஏமாற்றும் செயல்களில் ஈடுபடுவதை நோக்கமாகக் கொண்டவை. ஸ்பேம் அழைப்புகள் சீர்குலைக்கும், ஆக்கிரமிப்பு மற்றும் தீங்கு விளைவிக்கும், ஏனெனில் மோசடி செய்பவர்கள் தனிப்பட்ட தகவல், பணம் அல்லது அடையாளத் திருட்டைப் பிரித்தெடுக்க முயற்சி செய்யலாம். ஸ்பேம் அழைப்புகளை எதிர்த்துப் போராடுவதற்கான முயற்சிகளில் அழைப்புகளைத் தடுக்கும் பயன்பாடுகள், அழைக்க வேண்டாம் பதிவுகள் மற்றும் சந்தேகத்திற்கிடமான அழைப்புகளை அங்கீகரிப்பது மற்றும் தவிர்ப்பது பற்றிய விழிப்புணர்வு ஆகியவை அடங்கும்.";
        }
        function hindi(){
            document.getElementById('translate1').innerHTML="स्पैम कॉल एक अनचाही और आमतौर पर अवांछित फ़ोन कॉल होती है जिसमें आम तौर पर प्रचार या धोखाधड़ी का इरादा शामिल होता है। ये कॉल अक्सर टेलीमार्केटर्स, स्कैमर्स या स्वचालित सिस्टम से आती हैं, जिनका लक्ष्य उत्पादों, सेवाओं को बेचना या भ्रामक गतिविधियों में शामिल होना होता है। स्पैम कॉल विघटनकारी, आक्रामक और संभावित रूप से हानिकारक हो सकते हैं, क्योंकि घोटालेबाज व्यक्तिगत जानकारी, पैसा निकालने या पहचान की चोरी करने का प्रयास कर सकते हैं। स्पैम कॉल से निपटने के प्रयासों में कॉल ब्लॉकिंग ऐप्स, कॉल न करें रजिस्ट्रियां, और संदिग्ध कॉल को पहचानने और उनसे बचने के बारे में जागरूकता शामिल है।";
            }
    
// msg spam
function telugu1(){
    document.getElementById('translate2').innerHTML="స్పామ్ సందేశాలు అయాచిత లేదా అవాంఛిత సందేశాలు, ఇవి ఇమెయిల్, వచన సందేశాలు, సోషల్ మీడియా మరియు ఇన్‌స్టంట్ మెసేజింగ్ ప్లాట్‌ఫారమ్‌ల వంటి వివిధ కమ్యూనికేషన్ ఛానెల్‌ల ద్వారా పెద్దమొత్తంలో పంపబడతాయి. ఈ సందేశాలు సాధారణంగా వ్యక్తులు లేదా సంస్థలు వాటిని స్వీకరించడానికి సమ్మతి ఇవ్వని పెద్ద సంఖ్యలో గ్రహీతలకు పంపబడతాయి.";
}
function english1(){
    document.getElementById('translate2').innerHTML="Spam messages are unsolicited or unwanted messages that are sent in bulk through various communication channels such as email, text messages, social media, and instant messaging platforms. These messages are typically sent by individuals or organizations to a large number of recipients who have not given their consent to receive them.Spam messages can take many forms, including advertisements for products or services, phishing scams, fraudulent offers, and malware-containing attachments. They are often sent with the intention of tricking recipients into clicking on a link, providing personal information, or downloading malicious software";
}
function tamil1(){
    document.getElementById('translate2').innerHTML="ஸ்பேம் செய்திகள், மின்னஞ்சல், குறுஞ்செய்திகள், சமூக ஊடகங்கள் மற்றும் உடனடி செய்தியிடல் தளங்கள் போன்ற பல்வேறு தொடர்பு சேனல்கள் மூலம் மொத்தமாக அனுப்பப்படும் கோரப்படாத அல்லது தேவையற்ற செய்திகள் ஆகும். இந்தச் செய்திகள் பொதுவாக தனிநபர்கள் அல்லது நிறுவனங்களால் அவற்றைப் பெறுவதற்கு ஒப்புதல் அளிக்காத ஏராளமான பெறுநர்களுக்கு அனுப்பப்படும்.";
}
function hindi1(){
    document.getElementById('translate2').innerHTML="स्पैम संदेश अनचाहे या अवांछित संदेश होते हैं जो विभिन्न संचार चैनलों जैसे ईमेल, टेक्स्ट संदेश, सोशल मीडिया और त्वरित मैसेजिंग प्लेटफ़ॉर्म के माध्यम से थोक में भेजे जाते हैं। ये संदेश आम तौर पर व्यक्तियों या संगठनों द्वारा बड़ी संख्या में प्राप्तकर्ताओं को भेजे जाते हैं जिन्होंने इन्हें प्राप्त करने के लिए अपनी सहमति नहीं दी है।";
}
function telugu2(){
    document.getElementById('translate3').innerHTML="ఇమెయిల్ స్కామ్, ఫిషింగ్ అని కూడా పిలుస్తారు, పాస్‌వర్డ్‌లు, క్రెడిట్ కార్డ్ నంబర్‌లు లేదా వ్యక్తిగత గుర్తింపు వివరాలు వంటి సున్నితమైన సమాచారాన్ని బహిర్గతం చేయడానికి వ్యక్తులను మోసగించే మోసపూరిత ప్రయత్నం. స్కామర్‌లు బ్యాంకులు, ప్రభుత్వ ఏజెన్సీలు లేదా ప్రసిద్ధ కంపెనీల వంటి విశ్వసనీయ మూలాలను అనుకరించే చట్టబద్ధమైన ఇమెయిల్‌లను పంపుతారు. ఈ ఇమెయిల్‌లు తరచుగా గ్రహీతలను హానికరమైన లింక్‌లపై క్లిక్ చేయమని, హానికరమైన జోడింపులను డౌన్‌లోడ్ చేయమని లేదా అత్యవసర విషయాలు, రివార్డ్‌లు లేదా భద్రతా హెచ్చరికల నెపంతో రహస్య సమాచారాన్ని అందించమని ప్రోత్సహిస్తాయి. ఇమెయిల్ స్కామ్‌లు నమ్మకాన్ని దోపిడీ చేయడం, ఆవశ్యకతను సృష్టించడం మరియు గ్రహీతలను వారి భద్రతకు భంగం కలిగించే చర్యలను మార్చడం. ఇమెయిల్ స్కామ్‌ల బారిన పడకుండా ఉండటానికి, పంపినవారి సమాచారాన్ని ధృవీకరించడం, అనుమానాస్పద లింక్‌లపై క్లిక్ చేయడాన్ని నివారించడం మరియు ఆన్‌లైన్‌లో వ్యక్తిగత లేదా ఆర్థిక వివరాలను షేర్ చేసేటప్పుడు జాగ్రత్త వహించడం చాలా ముఖ్యం.";
}
function english2(){
    document.getElementById('translate3').innerHTML="An email scam, also known as phishing, is a fraudulent attempt to deceive individuals into revealing sensitive information, such as passwords, credit card numbers, or personal identification details. Scammers send seemingly legitimate emails that mimic trusted sources like banks, government agencies, or well-known companies. These emails often urge recipients to click on malicious links, download harmful attachments, or provide confidential information under the pretense of urgent matters, rewards, or security alerts. Email scams aim to exploit trust, create a sense of urgency, and manipulate recipients into taking actions that compromise their security. To avoid falling victim to email scams, it's important to verify sender information, avoid clicking on suspicious links, and use caution when sharing personal or financial details online.";
}
function tamil2(){
    document.getElementById('translate3').innerHTML="ஃபிஷிங் என்றும் அழைக்கப்படும் மின்னஞ்சல் மோசடி, கடவுச்சொற்கள், கிரெடிட் கார்டு எண்கள் அல்லது தனிப்பட்ட அடையாள விவரங்கள் போன்ற முக்கியமான தகவல்களை வெளிப்படுத்தும் வகையில் தனிநபர்களை ஏமாற்றும் ஒரு மோசடி முயற்சியாகும். மோசடி செய்பவர்கள் வங்கிகள், அரசு நிறுவனங்கள் அல்லது நன்கு அறியப்பட்ட நிறுவனங்கள் போன்ற நம்பகமான ஆதாரங்களைப் பிரதிபலிக்கும் சட்டபூர்வமான மின்னஞ்சல்களை அனுப்புகிறார்கள். இந்த மின்னஞ்சல்கள், தீங்கிழைக்கும் இணைப்புகளைக் கிளிக் செய்யவும், தீங்கிழைக்கும் இணைப்புகளைப் பதிவிறக்கவும் அல்லது அவசர விஷயங்கள், வெகுமதிகள் அல்லது பாதுகாப்பு விழிப்பூட்டல்களின் கீழ் ரகசியத் தகவலை வழங்கவும் பெறுபவர்களை அடிக்கடி வலியுறுத்துகின்றன. மின்னஞ்சல் மோசடிகள் நம்பிக்கையை சுரண்டுவதையும், அவசர உணர்வை உருவாக்குவதையும், மற்றும் பெறுநர்களின் பாதுகாப்பை சமரசம் செய்யும் செயல்களை கையாள்வதையும் நோக்கமாகக் கொண்டுள்ளன. மின்னஞ்சல் மோசடிகளுக்குப் பலியாவதைத் தவிர்க்க, அனுப்புநரின் தகவலைச் சரிபார்ப்பது, சந்தேகத்திற்கிடமான இணைப்புகளைக் கிளிக் செய்வதைத் தவிர்ப்பது மற்றும் ஆன்லைனில் தனிப்பட்ட அல்லது நிதி விவரங்களைப் பகிரும்போது எச்சரிக்கையுடன் இருப்பது முக்கியம்.";
}
function hindi2(){
    document.getElementById('translate3').innerHTML="ईमेल घोटाला, जिसे फ़िशिंग के रूप में भी जाना जाता है, व्यक्तियों को पासवर्ड, क्रेडिट कार्ड नंबर या व्यक्तिगत पहचान विवरण जैसी संवेदनशील जानकारी प्रकट करने के लिए धोखा देने का एक कपटपूर्ण प्रयास है। घोटालेबाज प्रतीत होता है कि वैध ईमेल भेजते हैं जो बैंकों, सरकारी एजेंसियों या प्रसिद्ध कंपनियों जैसे विश्वसनीय स्रोतों की नकल करते हैं। ये ईमेल अक्सर प्राप्तकर्ताओं से दुर्भावनापूर्ण लिंक पर क्लिक करने, हानिकारक अनुलग्नक डाउनलोड करने, या जरूरी मामलों, पुरस्कारों या सुरक्षा अलर्ट के बहाने गोपनीय जानकारी प्रदान करने का आग्रह करते हैं। ईमेल घोटालों का उद्देश्य विश्वास का शोषण करना, तात्कालिकता की भावना पैदा करना और प्राप्तकर्ताओं को ऐसे कदम उठाने के लिए प्रेरित करना है जो उनकी सुरक्षा से समझौता करते हैं। ईमेल घोटालों का शिकार होने से बचने के लिए, प्रेषक की जानकारी को सत्यापित करना, संदिग्ध लिंक पर क्लिक करने से बचना और व्यक्तिगत या वित्तीय विवरण ऑनलाइन साझा करते समय सावधानी बरतना महत्वपूर्ण है।";
}
