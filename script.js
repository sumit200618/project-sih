/* ============================================================
   KisanSetu — Farmer Procurement Queue Prototype
   Languages: English, Hindi, Bhojpuri, Marathi, Bengali, Tamil
   ============================================================ */

const LANG_META = [
  {code:'en',  native:'English',  eng:'English'},
  {code:'hi',  native:'हिंदी',      eng:'Hindi'},
  {code:'bho', native:'भोजपुरी',   eng:'Bhojpuri'},
  {code:'mr',  native:'मराठी',     eng:'Marathi'},
  {code:'bn',  native:'বাংলা',     eng:'Bengali'},
  {code:'ta',  native:'தமிழ்',     eng:'Tamil'}
];

const CROP_KEYS = ['wheat','rice','daal','bajra','sugarcane','tomato','potato','onion','vegetables','other'];

/* ---------- Translations ---------- */
const T = {
en:{
  appName:'KisanSetu', tagline:'Procurement, connected',
  farmerView:'Farmer view', officerView:'Officer view',
  navOverview:'Overview', navBook:'Book a slot', navQueue:'My queue',
  navProcurement:'Procurement', navHelp:'Help & complaints',
  navOfficerOverview:'Overview', navManageQueue:'Manage queue',
  navCentres:'Centres & load', navSmsLog:'SMS log',
  demoEnv:'Demo environment', farmerIdLbl:'Farmer ID',
  greetMorning:'Good morning', greetAfternoon:'Good afternoon', greetEvening:'Good evening',
  greetingSub:'Your harvest journey, without the waiting.',
  nextVisit:'Next procurement visit', yourTokenLabel:'Your token',
  trackVisit:'Track my visit', bookFirstSlot:'Book your first slot',
  noActiveVisit:'No active booking right now', noActiveVisitSub:'Book a slot to see it here.',
  atGlance:'At a glance', waitTimeLbl:'Wait time', procurementStatusLbl:'Procurement status',
  centreLoadLbl:'Centre load', liveStatusLbl:'Live status', procurementProgressLbl:'Procurement progress',
  mobile:'Mobile Number', sendOtp:'Send OTP', otp:'Enter OTP',
  otpHint:'Demo OTP is 123456', verify:'Verify & Continue',
  name:'Farmer Name', centre:'Procurement Centre', date:'Date', slot:'Time Slot',
  book:'Confirm Booking', selectCentre:'Select Centre', remaining:'left', full:'FULL',
  crop:'Crop', cropSelect:'Select Crop',
  crop_wheat:'Wheat', crop_rice:'Rice', crop_daal:'Daal (Pulses)', crop_bajra:'Bajra',
  crop_sugarcane:'Sugarcane', crop_tomato:'Tomato', crop_potato:'Potato', crop_onion:'Onion',
  crop_vegetables:'Vegetables', crop_other:'Other',
  yourToken:'Your Digital Token', showAtGate:'Show this at the gate',
  position:'Your Position', estWait:'Estimated Wait', status:'Status',
  newBooking:'New Booking', statusHistory:'Status History',
  selectCentreStaff:'Select Centre', todaysQueue:"Today's Queue",
  token:'Token', farmerCol:'Farmer', cropCol:'Crop', action:'Action', next:'Next',
  noBookings:'No bookings for this centre yet.', selectDate:'Select Date',
  totalBookings:'Total Bookings', checkedIn:'Checked In', paid:'Paid',
  avgWait:'Avg Wait (min)', utilisation:'Centre Load',
  aiTitle:'AI Demand Prediction — Slot Balancing',
  aiSub:'Analysed from live bookings, historical arrivals & centre capacity',
  aiNoAction:'All centres within balanced load. No action needed.', aiAction:'AI Recommendation',
  aiShift1:'is at', aiShift2:'load, while', aiShift3:'is only at', aiShift4:'Shift approximately',
  aiShift5:'slots to', aiShift6:'for the next 2 hours.',
  aiInputs:'Model inputs: live bookings · historical arrivals · centre capacity · crop calendar · slot utilisation',
  smsTitle:'SMS Gateway Log', smsSub:'Simulated SMS delivery log', clearSms:'Clear Log',
  smsCount:'messages', noSms:'No messages yet. Book a slot to trigger SMS.',
  prodIntegration:'Production Integration',
  prodNote:'In production: an SMS gateway (e.g. Twilio / MSG91) + push notifications, with DLT template registration.',
  stages:['Booked','Checked-in','Weighed','Graded','Paid'],
  smsOtp:'KisanSetu: Your OTP is 123456. Valid for 10 minutes. Do not share with anyone.',
  smsBooked:'KisanSetu: {name}, your slot at {centre} on {date} ({slot}) is CONFIRMED. Token: {token}. Show this SMS at the gate.',
  smsCheckedIn:'KisanSetu: {name}, you are CHECKED-IN at {centre}. Token {token}. Please proceed to weighing.',
  smsWeighed:'KisanSetu: {name}, your {crop} has been WEIGHED at {centre}. Token {token}. Proceeding to grading.',
  smsGraded:'KisanSetu: {name}, GRADING complete at {centre}. Token {token}. Payment will be credited shortly.',
  smsPaid:'KisanSetu: {name}, PAYMENT CREDITED via DBT/UPI for token {token}. Thank you for using KisanSetu.',
  logoutNote:'Logged in as', logout:'Logout', changeLang:'Change Language', back:'Back',
  autoRefresh:'This page auto-refreshes every 2 seconds — status updates live.',
  chooseLang:'Choose Your Language', chooseLangSub:'Select the language you are most comfortable with.',
  procurementHistoryTitle:'Your Procurement History', noHistory:'No bookings yet.',
  helpTitle:'Help & Complaints', helpDesc:'Facing an issue with a booking, payment or queue? Let us know below, or call our helpline.',
  helpline:'Helpline', raiseComplaint:'Raise a Complaint', complaintPlaceholder:'Describe your issue…',
  submitComplaint:'Submit Complaint', complaintSubmitted:'Your complaint has been noted. Our team will contact you shortly.',
  yourComplaints:'Your Complaints', noComplaints:'No complaints raised yet.',
  faqTitle:'Frequently Asked', faq1q:'How do I book a slot?', faq1a:'Go to "Book a slot", pick a centre, date and crop, then choose an open time slot.',
  faq2q:'What if I miss my slot?', faq2a:'Visit the centre and ask staff to move you to the next open slot for the day.',
  faq3q:'How will I know my payment status?', faq3a:'You will get an SMS the moment payment is credited via DBT/UPI, and it also shows under "My queue".',
  demoControls:'Demo Controls', demoControlsSub:'For presentations — get sample data ready in one click.',
  demoData:'Load Demo Data', resetAll:'Reset All Data',
  recentActivity:'Recent Activity', noActivity:'No activity yet.', complete:'Complete',
  locality:'Locality', capacity:'Capacity',
  voiceTitle:'Talk to KisanSetu', voiceSub:'Ask in your language — try "book my slot" or "show my queue".',
  voiceTapToSpeak:'Tap to speak', voiceListening:'Listening…',
  voiceFallbackNote:'Feature phone mode — simulated IVR', voiceOptQueue:'1 · Queue', voiceOptBook:'2 · Book slot',
  voiceHelpBtn:'Voice help', voiceHeardBook:'Heard: "Book my slot" → opening booking',
  voiceHeardQueue:'Heard: "Show my queue" → opening your queue',
  loginPromptTitle:'Please log in to continue', loginPromptSub:'Verify your mobile number to access this section.'
},
hi:{
  appName:'KisanSetu', tagline:'खरीद, अब जुड़ी हुई',
  farmerView:'किसान व्यू', officerView:'अधिकारी व्यू',
  navOverview:'ओवरव्यू', navBook:'स्लॉट बुक करें', navQueue:'मेरी कतार',
  navProcurement:'खरीद इतिहास', navHelp:'सहायता व शिकायत',
  navOfficerOverview:'ओवरव्यू', navManageQueue:'कतार प्रबंधन',
  navCentres:'केंद्र व लोड', navSmsLog:'SMS लॉग',
  demoEnv:'डेमो वातावरण', farmerIdLbl:'किसान आईडी',
  greetMorning:'सुप्रभात', greetAfternoon:'नमस्कार', greetEvening:'शुभ संध्या',
  greetingSub:'आपकी फसल की यात्रा, बिना इंतज़ार के।',
  nextVisit:'अगली खरीद विज़िट', yourTokenLabel:'आपका टोकन',
  trackVisit:'मेरी विज़िट ट्रैक करें', bookFirstSlot:'अपना पहला स्लॉट बुक करें',
  noActiveVisit:'अभी कोई सक्रिय बुकिंग नहीं', noActiveVisitSub:'स्लॉट बुक करें, यह यहाँ दिखेगा।',
  atGlance:'एक नज़र में', waitTimeLbl:'प्रतीक्षा समय', procurementStatusLbl:'खरीद स्थिति',
  centreLoadLbl:'केंद्र लोड', liveStatusLbl:'लाइव स्थिति', procurementProgressLbl:'खरीद प्रगति',
  mobile:'मोबाइल नंबर', sendOtp:'OTP भेजें', otp:'OTP डालें',
  otpHint:'डेमो OTP है 123456', verify:'सत्यापित करें',
  name:'किसान का नाम', centre:'खरीद केंद्र', date:'तारीख़', slot:'समय स्लॉट',
  book:'बुकिंग पक्की करें', selectCentre:'केंद्र चुनें', remaining:'बचे', full:'भरा',
  crop:'फ़सल', cropSelect:'फ़सल चुनें',
  crop_wheat:'गेहूं', crop_rice:'चावल', crop_daal:'दाल', crop_bajra:'बाजरा',
  crop_sugarcane:'गन्ना', crop_tomato:'टमाटर', crop_potato:'आलू', crop_onion:'प्याज़',
  crop_vegetables:'सब्ज़ियां', crop_other:'अन्य',
  yourToken:'आपका डिजिटल टोकन', showAtGate:'गेट पर यह दिखाएँ',
  position:'आपकी स्थिति', estWait:'अनुमानित प्रतीक्षा', status:'स्थिति',
  newBooking:'नई बुकिंग', statusHistory:'स्थिति इतिहास',
  selectCentreStaff:'केंद्र चुनें', todaysQueue:'आज की कतार',
  token:'टोकन', farmerCol:'किसान', cropCol:'फ़सल', action:'कार्रवाई', next:'अगला',
  noBookings:'इस केंद्र के लिए अभी कोई बुकिंग नहीं।', selectDate:'तारीख़ चुनें',
  totalBookings:'कुल बुकिंग', checkedIn:'चेक-इन', paid:'भुगतान',
  avgWait:'औसत प्रतीक्षा (मिनट)', utilisation:'केंद्र लोड',
  aiTitle:'AI मांग अनुमान — स्लॉट बैलेंसिंग',
  aiSub:'लाइव बुकिंग, ऐतिहासिक आँकड़ों और केंद्र क्षमता से विश्लेषण',
  aiNoAction:'सभी केंद्र संतुलित हैं। कोई कार्रवाई ज़रूरी नहीं।', aiAction:'AI सिफ़ारिश',
  aiShift1:'पर है', aiShift2:'लोड, जबकि', aiShift3:'सिर्फ़', aiShift4:'पर है। लगभग',
  aiShift5:'स्लॉट', aiShift6:'को अगले 2 घंटे के लिए शिफ़्ट करें।',
  aiInputs:'मॉडल इनपुट: लाइव बुकिंग · ऐतिहासिक आँकड़े · केंद्र क्षमता · फ़सल कैलेंडर · स्लॉट उपयोग',
  smsTitle:'SMS गेटवे लॉग', smsSub:'SMS डिलीवरी लॉग (सिम्युलेटेड)', clearSms:'लॉग साफ़ करें',
  smsCount:'संदेश', noSms:'अभी कोई संदेश नहीं। SMS ट्रिगर करने के लिए स्लॉट बुक करें।',
  prodIntegration:'प्रोडक्शन एकीकरण',
  prodNote:'प्रोडक्शन में: SMS गेटवे (जैसे Twilio / MSG91) + पुश नोटिफिकेशन, DLT टेम्पलेट के साथ।',
  stages:['बुक','चेक-इन','तौल','ग्रेडिंग','भुगतान'],
  smsOtp:'KisanSetu: आपका OTP है 123456। 10 मिनट के लिए वैध। किसी के साथ साझा न करें।',
  smsBooked:'KisanSetu: {name}, {centre} में {date} ({slot}) का आपका स्लॉट CONFIRM हो गया। टोकन: {token}। गेट पर यह SMS दिखाएँ।',
  smsCheckedIn:'KisanSetu: {name}, {centre} में आप CHECKED-IN हो गए। टोकन {token}। कृपया तौल के लिए आगे बढ़ें।',
  smsWeighed:'KisanSetu: {name}, आपकी {crop} {centre} में तौल ली गई। टोकन {token}। ग्रेडिंग हो रही है।',
  smsGraded:'KisanSetu: {name}, {centre} में ग्रेडिंग पूरी। टोकन {token}। भुगतान जल्द जमा होगा।',
  smsPaid:'KisanSetu: {name}, टोकन {token} का भुगतान DBT/UPI से जमा हो गया। KisanSetu का उपयोग करने के लिए धन्यवाद।',
  logoutNote:'लॉग इन:', logout:'लॉगआउट', changeLang:'भाषा बदलें', back:'वापस',
  autoRefresh:'यह पेज हर 2 सेकंड में अपने आप रीफ्रेश होता है — स्थिति लाइव अपडेट होती है।',
  chooseLang:'अपनी भाषा चुनें', chooseLangSub:'जिस भाषा में आप सहज हों, उसे चुनें।',
  procurementHistoryTitle:'आपका खरीद इतिहास', noHistory:'अभी कोई बुकिंग नहीं।',
  helpTitle:'सहायता व शिकायत', helpDesc:'बुकिंग, भुगतान या कतार में कोई समस्या? नीचे बताएं, या हमारी हेल्पलाइन पर कॉल करें।',
  helpline:'हेल्पलाइन', raiseComplaint:'शिकायत दर्ज करें', complaintPlaceholder:'अपनी समस्या लिखें…',
  submitComplaint:'शिकायत भेजें', complaintSubmitted:'आपकी शिकायत दर्ज हो गई है। हमारी टीम जल्द संपर्क करेगी।',
  yourComplaints:'आपकी शिकायतें', noComplaints:'अभी कोई शिकायत दर्ज नहीं है।',
  faqTitle:'अक्सर पूछे जाने वाले प्रश्न', faq1q:'स्लॉट कैसे बुक करें?', faq1a:'"स्लॉट बुक करें" में जाएँ, केंद्र, तारीख़ और फ़सल चुनें, फिर खुला समय स्लॉट चुनें।',
  faq2q:'स्लॉट छूट जाए तो?', faq2a:'केंद्र पर जाकर स्टाफ से उस दिन के अगले खुले स्लॉट में जगह देने को कहें।',
  faq3q:'भुगतान की स्थिति कैसे पता चलेगी?', faq3a:'DBT/UPI से भुगतान होते ही SMS मिलेगा, यह "मेरी कतार" में भी दिखेगा।',
  demoControls:'डेमो नियंत्रण', demoControlsSub:'प्रस्तुति के लिए — एक क्लिक में डेटा तैयार करें।',
  demoData:'डेमो डेटा भरें', resetAll:'सारा डेटा मिटाएँ',
  recentActivity:'हाल की गतिविधि', noActivity:'अभी कोई गतिविधि नहीं।', complete:'पूर्ण',
  locality:'इलाक़ा', capacity:'क्षमता',
  voiceTitle:'KisanSetu से बात करें', voiceSub:'अपनी भाषा में बोलें — जैसे "मेरा स्लॉट बुक करो" या "मेरी कतार दिखाओ"।',
  voiceTapToSpeak:'बोलने के लिए टैप करें', voiceListening:'सुन रहा है…',
  voiceFallbackNote:'फ़ीचर फ़ोन मोड — सिम्युलेटेड IVR', voiceOptQueue:'1 · कतार', voiceOptBook:'2 · स्लॉट बुक करें',
  voiceHelpBtn:'वॉइस सहायता', voiceHeardBook:'सुना: "मेरा स्लॉट बुक करो" → बुकिंग खोली जा रही है',
  voiceHeardQueue:'सुना: "मेरी कतार दिखाओ" → कतार खोली जा रही है',
  loginPromptTitle:'जारी रखने के लिए लॉग इन करें', loginPromptSub:'इस भाग तक पहुँचने के लिए अपना मोबाइल नंबर सत्यापित करें।'
},
bho:{
  appName:'KisanSetu', tagline:'खरीद, अब जुड़ल',
  farmerView:'किसान व्यू', officerView:'अफ़सर व्यू',
  navOverview:'ओवरव्यू', navBook:'स्लॉट बुक करीं', navQueue:'हमार कतार',
  navProcurement:'खरीद इतिहास', navHelp:'सहायता व शिकायत',
  navOfficerOverview:'ओवरव्यू', navManageQueue:'कतार प्रबंधन',
  navCentres:'केंद्र व लोड', navSmsLog:'SMS लॉग',
  demoEnv:'डेमो वातावरण', farmerIdLbl:'किसान आईडी',
  greetMorning:'सुप्रभात', greetAfternoon:'नमस्कार', greetEvening:'शुभ संझा',
  greetingSub:'आपके फसल के यात्रा, बिना इंतज़ार के।',
  nextVisit:'अगिला खरीद विज़िट', yourTokenLabel:'आपके टोकन',
  trackVisit:'हमार विज़िट ट्रैक करीं', bookFirstSlot:'अपन पहिला स्लॉट बुक करीं',
  noActiveVisit:'अभी कवनो सक्रिय बुकिंग नइखे', noActiveVisitSub:'स्लॉट बुक करीं, ई इहाँ देखाई।',
  atGlance:'एक नज़र में', waitTimeLbl:'इंतज़ार समय', procurementStatusLbl:'खरीद स्थिति',
  centreLoadLbl:'केंद्र लोड', liveStatusLbl:'लाइव स्थिति', procurementProgressLbl:'खरीद प्रगति',
  mobile:'मोबाइल नंबर', sendOtp:'OTP भेजीं', otp:'OTP डालीं',
  otpHint:'डेमो OTP बा 123456', verify:'सत्यापित करीं',
  name:'किसान के नाम', centre:'खरीद केंद्र', date:'तारीख', slot:'समय स्लॉट',
  book:'बुकिंग पक्का करीं', selectCentre:'केंद्र चुनीं', remaining:'बचल', full:'भरल',
  crop:'फसल', cropSelect:'फसल चुनीं',
  crop_wheat:'गेहूं', crop_rice:'चाउर', crop_daal:'दाल', crop_bajra:'बाजरा',
  crop_sugarcane:'गन्ना', crop_tomato:'टमाटर', crop_potato:'आलू', crop_onion:'पियाज',
  crop_vegetables:'तरकारी', crop_other:'अउरी',
  yourToken:'आपके डिजिटल टोकन', showAtGate:'गेट पर ई देखाईं',
  position:'आपके स्थिति', estWait:'अनुमानित इंतजार', status:'स्थिति',
  newBooking:'नई बुकिंग', statusHistory:'स्थिति इतिहास',
  selectCentreStaff:'केंद्र चुनीं', todaysQueue:'आजु के कतार',
  token:'टोकन', farmerCol:'किसान', cropCol:'फसल', action:'कार्रवाई', next:'अगला',
  noBookings:'ई केंद्र खातिर अभी कवनो बुकिंग नइखे।', selectDate:'तारीख चुनीं',
  totalBookings:'कुल बुकिंग', checkedIn:'चेक-इन', paid:'भुगतान',
  avgWait:'औसत इंतजार (मिनट)', utilisation:'केंद्र लोड',
  aiTitle:'AI मांग अनुमान — स्लॉट बैलेंसिंग',
  aiSub:'लाइव बुकिंग, पुरान आँकड़ा आ केंद्र क्षमता से विश्लेषण',
  aiNoAction:'सब केंद्र संतुलित बाड़ें। कवनो कार्रवाई के जरूरत नइखे।', aiAction:'AI सिफारिश',
  aiShift1:'पर बा', aiShift2:'लोड, जबकि', aiShift3:'सिरफ', aiShift4:'पर बा। लगभग',
  aiShift5:'स्लॉट', aiShift6:'के अगला 2 घंटा खातिर शिफ्ट करीं।',
  aiInputs:'मॉडल इनपुट: लाइव बुकिंग · पुरान आँकड़ा · केंद्र क्षमता · फसल कैलेंडर · स्लॉट उपयोग',
  smsTitle:'SMS गेटवे लॉग', smsSub:'SMS डिलीवरी लॉग (सिम्युलेटेड)', clearSms:'लॉग साफ करीं',
  smsCount:'संदेश', noSms:'अभी कवनो संदेश नइखे। SMS ट्रिगर करे खातिर स्लॉट बुक करीं।',
  prodIntegration:'प्रोडक्शन एकीकरण',
  prodNote:'प्रोडक्शन में: SMS गेटवे (जइसे Twilio / MSG91) + पुश नोटिफिकेशन, DLT टेम्पलेट के साथे।',
  stages:['बुक','चेक-इन','तोल','ग्रेडिंग','भुगतान'],
  smsOtp:'KisanSetu: आपके OTP बा 123456। 10 मिनट खातिर वैध। कवनो के साथे साझा न करीं।',
  smsBooked:'KisanSetu: {name}, {centre} में {date} ({slot}) के आपके स्लॉट CONFIRM हो गइल। टोकन: {token}। गेट पर ई SMS देखाईं।',
  smsCheckedIn:'KisanSetu: {name}, {centre} में आप CHECKED-IN हो गइलीं। टोकन {token}। तोल खातिर आगे बढ़ीं।',
  smsWeighed:'KisanSetu: {name}, आपके {crop} {centre} में तोल लिहल गइल। टोकन {token}। ग्रेडिंग हो रहल बा।',
  smsGraded:'KisanSetu: {name}, {centre} में ग्रेडिंग पूरा। टोकन {token}। भुगतान जल्दी जमा होई।',
  smsPaid:'KisanSetu: {name}, टोकन {token} के भुगतान DBT/UPI से जमा हो गइल। KisanSetu इस्तेमाल करे खातिर धन्यवाद।',
  logoutNote:'लॉग इन:', logout:'लॉगआउट', changeLang:'भाषा बदलीं', back:'वापस',
  autoRefresh:'ई पेज हर 2 सेकंड में अपने आप रीफ्रेश होला — स्थिति लाइव अपडेट होला।',
  chooseLang:'अपन भाषा चुनीं', chooseLangSub:'जवन भाषा में सहज बानीं, ओकरा चुनीं।',
  procurementHistoryTitle:'आपके खरीद इतिहास', noHistory:'अभी कवनो बुकिंग नइखे।',
  helpTitle:'सहायता व शिकायत', helpDesc:'बुकिंग, भुगतान भा कतार में कवनो दिक्कत? नीचे बताईं, भा हमार हेल्पलाइन पर कॉल करीं।',
  helpline:'हेल्पलाइन', raiseComplaint:'शिकायत दर्ज करीं', complaintPlaceholder:'अपन समस्या लिखीं…',
  submitComplaint:'शिकायत भेजीं', complaintSubmitted:'आपके शिकायत दर्ज हो गइल बा। हमार टीम जल्दी संपर्क करी।',
  yourComplaints:'आपके शिकायत', noComplaints:'अभी कवनो शिकायत दर्ज नइखे।',
  faqTitle:'अक्सर पूछल जाए वाला सवाल', faq1q:'स्लॉट कइसे बुक करीं?', faq1a:'"स्लॉट बुक करीं" में जाईं, केंद्र, तारीख आ फसल चुनीं, फिर खुला समय स्लॉट चुनीं।',
  faq2q:'स्लॉट छूट जाव त?', faq2a:'केंद्र पर जाके स्टाफ से ओह दिन के अगला खुला स्लॉट में जगह देवे के कहीं।',
  faq3q:'भुगतान के स्थिति कइसे पता चली?', faq3a:'DBT/UPI से भुगतान होते ही SMS मिली, ई "हमार कतार" में भी देखाई।',
  demoControls:'डेमो नियंत्रण', demoControlsSub:'प्रस्तुति खातिर — एक क्लिक में डेटा तैयार करीं।',
  demoData:'डेमो डेटा भरीं', resetAll:'सब डेटा मिटाईं',
  recentActivity:'हाल के गतिविधि', noActivity:'अभी कवनो गतिविधि नइखे।', complete:'पूरा',
  locality:'इलाका', capacity:'क्षमता',
  voiceTitle:'KisanSetu से बात करीं', voiceSub:'अपन भाषा में बोलीं — जइसे "हमार स्लॉट बुक करऽ" भा "हमार कतार देखाव"।',
  voiceTapToSpeak:'बोले खातिर टैप करीं', voiceListening:'सुन रहल बा…',
  voiceFallbackNote:'फीचर फोन मोड — सिम्युलेटेड IVR', voiceOptQueue:'1 · कतार', voiceOptBook:'2 · स्लॉट बुक करीं',
  voiceHelpBtn:'वॉइस सहायता', voiceHeardBook:'सुनल: "हमार स्लॉट बुक करऽ" → बुकिंग खुल रहल बा',
  voiceHeardQueue:'सुनल: "हमार कतार देखाव" → कतार खुल रहल बा',
  loginPromptTitle:'जारी रखे खातिर लॉग इन करीं', loginPromptSub:'ई भाग तक पहुंचे खातिर अपन मोबाइल नंबर सत्यापित करीं।'
},
mr:{
  appName:'KisanSetu', tagline:'खरेदी, आता जोडलेली',
  farmerView:'शेतकरी व्यू', officerView:'अधिकारी व्यू',
  navOverview:'आढावा', navBook:'स्लॉट बुक करा', navQueue:'माझी रांग',
  navProcurement:'खरेदी इतिहास', navHelp:'मदत व तक्रार',
  navOfficerOverview:'आढावा', navManageQueue:'रांग व्यवस्थापन',
  navCentres:'केंद्र व लोड', navSmsLog:'SMS लॉग',
  demoEnv:'डेमो वातावरण', farmerIdLbl:'शेतकरी आयडी',
  greetMorning:'शुभ सकाळ', greetAfternoon:'नमस्कार', greetEvening:'शुभ संध्याकाळ',
  greetingSub:'तुमचा शेतमाल प्रवास, प्रतीक्षेशिवाय.',
  nextVisit:'पुढील खरेदी भेट', yourTokenLabel:'तुमचे टोकन',
  trackVisit:'माझी भेट ट्रॅक करा', bookFirstSlot:'तुमचा पहिला स्लॉट बुक करा',
  noActiveVisit:'सध्या कोणतीही सक्रिय बुकिंग नाही', noActiveVisitSub:'स्लॉट बुक करा, ते इथे दिसेल.',
  atGlance:'एका दृष्टीक्षेपात', waitTimeLbl:'प्रतीक्षा वेळ', procurementStatusLbl:'खरेदी स्थिती',
  centreLoadLbl:'केंद्र लोड', liveStatusLbl:'लाइव्ह स्थिती', procurementProgressLbl:'खरेदी प्रगती',
  mobile:'मोबाइल नंबर', sendOtp:'OTP पाठवा', otp:'OTP टाका',
  otpHint:'डेमो OTP 123456 आहे', verify:'सत्यापित करा',
  name:'शेतकऱ्याचे नाव', centre:'खरेदी केंद्र', date:'तारीख', slot:'वेळ स्लॉट',
  book:'बुकिंग निश्चित करा', selectCentre:'केंद्र निवडा', remaining:'शिल्लक', full:'भरले',
  crop:'पीक', cropSelect:'पीक निवडा',
  crop_wheat:'गहू', crop_rice:'तांदूळ', crop_daal:'डाळ', crop_bajra:'बाजरी',
  crop_sugarcane:'ऊस', crop_tomato:'टोमॅटो', crop_potato:'बटाटा', crop_onion:'कांदा',
  crop_vegetables:'भाज्या', crop_other:'इतर',
  yourToken:'तुमचे डिजिटल टोकन', showAtGate:'गेटवर हे दाखवा',
  position:'तुमची स्थिती', estWait:'अंदाजे प्रतीक्षा', status:'स्थिती',
  newBooking:'नवीन बुकिंग', statusHistory:'स्थिती इतिहास',
  selectCentreStaff:'केंद्र निवडा', todaysQueue:'आजची रांग',
  token:'टोकन', farmerCol:'शेतकरी', cropCol:'पीक', action:'कृती', next:'पुढे',
  noBookings:'या केंद्रासाठी अद्याप बुकिंग नाही.', selectDate:'तारीख निवडा',
  totalBookings:'एकूण बुकिंग', checkedIn:'चेक-इन', paid:'देय',
  avgWait:'सरासरी प्रतीक्षा (मिनिटे)', utilisation:'केंद्र लोड',
  aiTitle:'AI मागणी अंदाज — स्लॉट बॅलन्सिंग',
  aiSub:'लाइव्ह बुकिंग, ऐतिहासिक आवक आणि केंद्र क्षमतेवरून विश्लेषण',
  aiNoAction:'सर्व केंद्रे संतुलित आहेत. कारवाईची गरज नाही.', aiAction:'AI शिफारस',
  aiShift1:'वर आहे', aiShift2:'लोड, तर', aiShift3:'फक्त', aiShift4:'वर आहे. सुमारे',
  aiShift5:'स्लॉट', aiShift6:'पुढील २ तासांसाठी हलवा.',
  aiInputs:'मॉडेल इनपुट: लाइव्ह बुकिंग · ऐतिहासिक आकडे · केंद्र क्षमता · पीक कॅलेंडर · स्लॉट वापर',
  smsTitle:'SMS गेटवे लॉग', smsSub:'SMS डिलिव्हरी लॉग (सिम्युलेटेड)', clearSms:'लॉग साफ करा',
  smsCount:'संदेश', noSms:'अद्याप संदेश नाहीत. SMS ट्रिगर करण्यासाठी स्लॉट बुक करा.',
  prodIntegration:'प्रोडक्शन इंटिग्रेशन',
  prodNote:'प्रोडक्शनमध्ये: SMS गेटवे (उदा. Twilio / MSG91) + पुश नोटिफिकेशन, DLT टेम्पलेटसह.',
  stages:['बुक','चेक-इन','वजन','प्रतवारी','देय'],
  smsOtp:'KisanSetu: तुमचा OTP 123456 आहे. 10 मिनिटांसाठी वैध. कोणासोबत शेअर करू नका.',
  smsBooked:'KisanSetu: {name}, {centre} येथे {date} ({slot}) चा तुमचा स्लॉट CONFIRM झाला. टोकन: {token}. गेटवर हा SMS दाखवा.',
  smsCheckedIn:'KisanSetu: {name}, {centre} येथे तुम्ही CHECKED-IN झालात. टोकन {token}. वजनासाठी पुढे जा.',
  smsWeighed:'KisanSetu: {name}, तुमचे {crop} {centre} येथे वजन केले गेले. टोकन {token}. प्रतवारी सुरू आहे.',
  smsGraded:'KisanSetu: {name}, {centre} येथे प्रतवारी पूर्ण. टोकन {token}. पेमेंट लवकरच जमा होईल.',
  smsPaid:'KisanSetu: {name}, टोकन {token} चे पेमेंट DBT/UPI ने जमा झाले. KisanSetu वापरल्याबद्दल धन्यवाद.',
  logoutNote:'लॉग इन:', logout:'लॉगआउट', changeLang:'भाषा बदला', back:'मागे',
  autoRefresh:'हे पृष्ठ दर २ सेकंदाला स्वयंचलितपणे रिफ्रेश होते — स्थिती लाइव्ह अपडेट होते.',
  chooseLang:'तुमची भाषा निवडा', chooseLangSub:'ज्या भाषेत तुम्ही सहज आहात, ती निवडा.',
  procurementHistoryTitle:'तुमचा खरेदी इतिहास', noHistory:'अद्याप बुकिंग नाही.',
  helpTitle:'मदत व तक्रार', helpDesc:'बुकिंग, पेमेंट किंवा रांगेत काही अडचण? खाली सांगा, किंवा आमच्या हेल्पलाइनवर कॉल करा.',
  helpline:'हेल्पलाइन', raiseComplaint:'तक्रार नोंदवा', complaintPlaceholder:'तुमची समस्या लिहा…',
  submitComplaint:'तक्रार पाठवा', complaintSubmitted:'तुमची तक्रार नोंदवली गेली आहे. आमची टीम लवकरच संपर्क करेल.',
  yourComplaints:'तुमच्या तक्रारी', noComplaints:'अद्याप तक्रार नोंदवलेली नाही.',
  faqTitle:'नेहमी विचारले जाणारे प्रश्न', faq1q:'स्लॉट कसा बुक करावा?', faq1a:'"स्लॉट बुक करा" मध्ये जा, केंद्र, तारीख आणि पीक निवडा, मग मोकळा वेळ स्लॉट निवडा.',
  faq2q:'स्लॉट चुकला तर?', faq2a:'केंद्रावर जाऊन स्टाफला त्या दिवसाच्या पुढील मोकळ्या स्लॉटमध्ये जागा देण्यास सांगा.',
  faq3q:'पेमेंट स्थिती कशी कळेल?', faq3a:'DBT/UPI ने पेमेंट जमा होताच SMS येईल, ते "माझी रांग" मध्येही दिसेल.',
  demoControls:'डेमो नियंत्रण', demoControlsSub:'सादरीकरणासाठी — एका क्लिकमध्ये डेटा तयार करा.',
  demoData:'डेमो डेटा भरा', resetAll:'सर्व डेटा रीसेट करा',
  recentActivity:'अलीकडील क्रियाकलाप', noActivity:'अद्याप कोणताही क्रियाकलाप नाही.', complete:'पूर्ण',
  locality:'परिसर', capacity:'क्षमता',
  voiceTitle:'KisanSetu शी बोला', voiceSub:'तुमच्या भाषेत बोला — जसे "माझा स्लॉट बुक कर" किंवा "माझी रांग दाखव".',
  voiceTapToSpeak:'बोलण्यासाठी टॅप करा', voiceListening:'ऐकत आहे…',
  voiceFallbackNote:'फीचर फोन मोड — सिम्युलेटेड IVR', voiceOptQueue:'1 · रांग', voiceOptBook:'2 · स्लॉट बुक करा',
  voiceHelpBtn:'व्हॉइस मदत', voiceHeardBook:'ऐकले: "माझा स्लॉट बुक कर" → बुकिंग उघडत आहे',
  voiceHeardQueue:'ऐकले: "माझी रांग दाखव" → रांग उघडत आहे',
  loginPromptTitle:'सुरू ठेवण्यासाठी लॉग इन करा', loginPromptSub:'या विभागात जाण्यासाठी तुमचा मोबाइल नंबर सत्यापित करा.'
},
bn:{
  appName:'KisanSetu', tagline:'ক্রয়, এখন সংযুক্ত',
  farmerView:'কৃষক ভিউ', officerView:'অফিসার ভিউ',
  navOverview:'ওভারভিউ', navBook:'স্লট বুক করুন', navQueue:'আমার সারি',
  navProcurement:'ক্রয় ইতিহাস', navHelp:'সাহায্য ও অভিযোগ',
  navOfficerOverview:'ওভারভিউ', navManageQueue:'সারি পরিচালনা',
  navCentres:'কেন্দ্র ও লোড', navSmsLog:'SMS লগ',
  demoEnv:'ডেমো পরিবেশ', farmerIdLbl:'কৃষক আইডি',
  greetMorning:'শুভ সকাল', greetAfternoon:'নমস্কার', greetEvening:'শুভ সন্ধ্যা',
  greetingSub:'আপনার ফসলের যাত্রা, অপেক্ষা ছাড়াই।',
  nextVisit:'পরবর্তী ক্রয় ভিজিট', yourTokenLabel:'আপনার টোকেন',
  trackVisit:'আমার ভিজিট ট্র্যাক করুন', bookFirstSlot:'আপনার প্রথম স্লট বুক করুন',
  noActiveVisit:'এখন কোনো সক্রিয় বুকিং নেই', noActiveVisitSub:'স্লট বুক করুন, এটি এখানে দেখাবে।',
  atGlance:'এক নজরে', waitTimeLbl:'অপেক্ষার সময়', procurementStatusLbl:'ক্রয় অবস্থা',
  centreLoadLbl:'কেন্দ্র লোড', liveStatusLbl:'লাইভ অবস্থা', procurementProgressLbl:'ক্রয় অগ্রগতি',
  mobile:'মোবাইল নম্বর', sendOtp:'OTP পাঠান', otp:'OTP লিখুন',
  otpHint:'ডেমো OTP হল 123456', verify:'যাচাই করুন',
  name:'কৃষকের নাম', centre:'ক্রয় কেন্দ্র', date:'তারিখ', slot:'সময় স্লট',
  book:'বুকিং নিশ্চিত করুন', selectCentre:'কেন্দ্র নির্বাচন করুন', remaining:'বাকি', full:'পূর্ণ',
  crop:'ফসল', cropSelect:'ফসল নির্বাচন করুন',
  crop_wheat:'গম', crop_rice:'ধান', crop_daal:'ডাল', crop_bajra:'বাজরা',
  crop_sugarcane:'আখ', crop_tomato:'টমেটো', crop_potato:'আলু', crop_onion:'পেঁয়াজ',
  crop_vegetables:'সবজি', crop_other:'অন্যান্য',
  yourToken:'আপনার ডিজিটাল টোকেন', showAtGate:'গেটে এটি দেখান',
  position:'আপনার অবস্থান', estWait:'আনুমানিক অপেক্ষা', status:'স্ট্যাটাস',
  newBooking:'নতুন বুকিং', statusHistory:'স্ট্যাটাস ইতিহাস',
  selectCentreStaff:'কেন্দ্র নির্বাচন করুন', todaysQueue:'আজকের সারি',
  token:'টোকেন', farmerCol:'কৃষক', cropCol:'ফসল', action:'পদক্ষেপ', next:'পরবর্তী',
  noBookings:'এই কেন্দ্রে এখনও কোনো বুকিং নেই।', selectDate:'তারিখ নির্বাচন করুন',
  totalBookings:'মোট বুকিং', checkedIn:'চেক-ইন', paid:'পরিশোধিত',
  avgWait:'গড় অপেক্ষা (মিনিট)', utilisation:'কেন্দ্র লোড',
  aiTitle:'AI চাহিদা পূর্বাভাস — স্লট ব্যালেন্সিং',
  aiSub:'লাইভ বুকিং, ঐতিহাসিক আগমন ও কেন্দ্র ক্ষমতা থেকে বিশ্লেষণ',
  aiNoAction:'সব কেন্দ্র ভারসাম্যপূর্ণ। কোনো পদক্ষেপ প্রয়োজন নেই।', aiAction:'AI সুপারিশ',
  aiShift1:'-এ আছে', aiShift2:'লোড, যখন', aiShift3:'শুধুমাত্র', aiShift4:'-এ আছে। প্রায়',
  aiShift5:'স্লট', aiShift6:'পরবর্তী ২ ঘণ্টার জন্য সরান।',
  aiInputs:'মডেল ইনপুট: লাইভ বুকিং · ঐতিহাসিক তথ্য · কেন্দ্র ক্ষমতা · ফসল ক্যালেন্ডার · স্লট ব্যবহার',
  smsTitle:'SMS গেটওয়ে লগ', smsSub:'SMS ডেলিভারি লগ (সিমুলেটেড)', clearSms:'লগ মুছুন',
  smsCount:'বার্তা', noSms:'এখনও কোনো বার্তা নেই। SMS ট্রিগার করতে স্লট বুক করুন।',
  prodIntegration:'প্রোডাকশন ইন্টিগ্রেশন',
  prodNote:'প্রোডাকশনে: একটি SMS গেটওয়ে (যেমন Twilio / MSG91) + পুশ নোটিফিকেশন, DLT টেমপ্লেট সহ।',
  stages:['বুক','চেক-ইন','ওজন','গ্রেডিং','পরিশোধ'],
  smsOtp:'KisanSetu: আপনার OTP হল 123456। ১০ মিনিটের জন্য বৈধ। কারও সাথে শেয়ার করবেন না।',
  smsBooked:'KisanSetu: {name}, {centre}-এ {date} ({slot}) এর আপনার স্লট CONFIRM হয়েছে। টোকেন: {token}। গেটে এই SMS দেখান।',
  smsCheckedIn:'KisanSetu: {name}, {centre}-এ আপনি CHECKED-IN হয়েছেন। টোকেন {token}। ওজনের জন্য এগিয়ে যান।',
  smsWeighed:'KisanSetu: {name}, আপনার {crop} {centre}-এ ওজন করা হয়েছে। টোকেন {token}। গ্রেডিং চলছে।',
  smsGraded:'KisanSetu: {name}, {centre}-এ গ্রেডিং সম্পূর্ণ। টোকেন {token}। পেমেন্ট শীঘ্রই জমা হবে।',
  smsPaid:'KisanSetu: {name}, টোকেন {token}-এর পেমেন্ট DBT/UPI-তে জমা হয়েছে। KisanSetu ব্যবহারের জন্য ধন্যবাদ।',
  logoutNote:'লগ ইন:', logout:'লগআউট', changeLang:'ভাষা পরিবর্তন', back:'ফিরে',
  autoRefresh:'এই পৃষ্ঠা প্রতি ২ সেকেন্ডে স্বয়ংক্রিয়ভাবে রিফ্রেশ হয় — স্ট্যাটাস লাইভ আপডেট হয়।',
  chooseLang:'আপনার ভাষা বেছে নিন', chooseLangSub:'যে ভাষায় আপনি স্বচ্ছন্দ, সেটি বেছে নিন।',
  procurementHistoryTitle:'আপনার ক্রয় ইতিহাস', noHistory:'এখনও কোনো বুকিং নেই।',
  helpTitle:'সাহায্য ও অভিযোগ', helpDesc:'বুকিং, পেমেন্ট বা সারিতে কোনো সমস্যা? নিচে জানান, বা আমাদের হেল্পলাইনে কল করুন।',
  helpline:'হেল্পলাইন', raiseComplaint:'অভিযোগ করুন', complaintPlaceholder:'আপনার সমস্যা লিখুন…',
  submitComplaint:'অভিযোগ পাঠান', complaintSubmitted:'আপনার অভিযোগ নথিভুক্ত হয়েছে। আমাদের টিম শীঘ্রই যোগাযোগ করবে।',
  yourComplaints:'আপনার অভিযোগ', noComplaints:'এখনও কোনো অভিযোগ নেই।',
  faqTitle:'প্রায়শই জিজ্ঞাসিত প্রশ্ন', faq1q:'স্লট কীভাবে বুক করব?', faq1a:'"স্লট বুক করুন"-এ যান, কেন্দ্র, তারিখ ও ফসল নির্বাচন করুন, তারপর খোলা সময় স্লট বেছে নিন।',
  faq2q:'স্লট মিস হয়ে গেলে?', faq2a:'কেন্দ্রে গিয়ে স্টাফকে সেদিনের পরবর্তী খোলা স্লটে জায়গা দিতে বলুন।',
  faq3q:'পেমেন্টের অবস্থা কীভাবে জানব?', faq3a:'DBT/UPI-তে পেমেন্ট জমা হওয়ার সাথে সাথে SMS পাবেন, এটি "আমার সারি"-তেও দেখাবে।',
  demoControls:'ডেমো নিয়ন্ত্রণ', demoControlsSub:'উপস্থাপনার জন্য — এক ক্লিকে ডেটা প্রস্তুত করুন।',
  demoData:'ডেমো ডেটা লোড করুন', resetAll:'সব ডেটা রিসেট করুন',
  recentActivity:'সাম্প্রতিক কার্যকলাপ', noActivity:'এখনও কোনো কার্যকলাপ নেই।', complete:'সম্পূর্ণ',
  locality:'এলাকা', capacity:'ক্ষমতা',
  voiceTitle:'KisanSetu-র সাথে কথা বলুন', voiceSub:'আপনার ভাষায় বলুন — যেমন "আমার স্লট বুক করো" বা "আমার সারি দেখাও"।',
  voiceTapToSpeak:'বলতে ট্যাপ করুন', voiceListening:'শুনছে…',
  voiceFallbackNote:'ফিচার ফোন মোড — সিমুলেটেড IVR', voiceOptQueue:'1 · সারি', voiceOptBook:'2 · স্লট বুক করুন',
  voiceHelpBtn:'ভয়েস সাহায্য', voiceHeardBook:'শুনেছে: "আমার স্লট বুক করো" → বুকিং খোলা হচ্ছে',
  voiceHeardQueue:'শুনেছে: "আমার সারি দেখাও" → সারি খোলা হচ্ছে',
  loginPromptTitle:'চালিয়ে যেতে লগ ইন করুন', loginPromptSub:'এই বিভাগে যেতে আপনার মোবাইল নম্বর যাচাই করুন।'
},
ta:{
  appName:'KisanSetu', tagline:'கொள்முதல், இப்போது இணைந்தது',
  farmerView:'விவசாயி பார்வை', officerView:'அதிகாரி பார்வை',
  navOverview:'கண்ணோட்டம்', navBook:'ஸ்லாட் பதிவு', navQueue:'எனது வரிசை',
  navProcurement:'கொள்முதல் வரலாறு', navHelp:'உதவி & புகார்',
  navOfficerOverview:'கண்ணோட்டம்', navManageQueue:'வரிசை மேலாண்மை',
  navCentres:'மையங்கள் & சுமை', navSmsLog:'SMS பதிவு',
  demoEnv:'டெமோ சூழல்', farmerIdLbl:'விவசாயி ஐடி',
  greetMorning:'காலை வணக்கம்', greetAfternoon:'வணக்கம்', greetEvening:'மாலை வணக்கம்',
  greetingSub:'உங்கள் அறுவடை பயணம், காத்திருப்பு இல்லாமல்.',
  nextVisit:'அடுத்த கொள்முதல் வருகை', yourTokenLabel:'உங்கள் டோக்கன்',
  trackVisit:'எனது வருகையை கண்காணி', bookFirstSlot:'உங்கள் முதல் ஸ்லாட்டை பதிவு செய்யுங்கள்',
  noActiveVisit:'இப்போது செயலில் உள்ள பதிவு இல்லை', noActiveVisitSub:'ஸ்லாட் பதிவு செய்யுங்கள், அது இங்கே தெரியும்.',
  atGlance:'ஒரே பார்வையில்', waitTimeLbl:'காத்திருப்பு நேரம்', procurementStatusLbl:'கொள்முதல் நிலை',
  centreLoadLbl:'மைய சுமை', liveStatusLbl:'நேரடி நிலை', procurementProgressLbl:'கொள்முதல் முன்னேற்றம்',
  mobile:'மொபைல் எண்', sendOtp:'OTP அனுப்பு', otp:'OTP உள்ளிடவும்',
  otpHint:'டெமோ OTP 123456', verify:'சரிபார்',
  name:'விவசாயி பெயர்', centre:'கொள்முதல் மையம்', date:'தேதி', slot:'நேர ஸ்லாட்',
  book:'பதிவை உறுதிப்படுத்து', selectCentre:'மையத்தைத் தேர்ந்தெடு', remaining:'மீதம்', full:'நிரம்பியது',
  crop:'பயிர்', cropSelect:'பயிரைத் தேர்ந்தெடு',
  crop_wheat:'கோதுமை', crop_rice:'அரிசி', crop_daal:'பருப்பு', crop_bajra:'கம்பு',
  crop_sugarcane:'கரும்பு', crop_tomato:'தக்காளி', crop_potato:'உருளைக்கிழங்கு', crop_onion:'வெங்காயம்',
  crop_vegetables:'காய்கறிகள்', crop_other:'மற்றவை',
  yourToken:'உங்கள் டிஜிட்டல் டோக்கன்', showAtGate:'வாயிலில் இதைக் காட்டவும்',
  position:'உங்கள் நிலை', estWait:'மதிப்பிடப்பட்ட காத்திருப்பு', status:'நிலை',
  newBooking:'புதிய பதிவு', statusHistory:'நிலை வரலாறு',
  selectCentreStaff:'மையத்தைத் தேர்ந்தெடு', todaysQueue:'இன்றைய வரிசை',
  token:'டோக்கன்', farmerCol:'விவசாயி', cropCol:'பயிர்', action:'செயல்', next:'அடுத்து',
  noBookings:'இந்த மையத்திற்கு இன்னும் பதிவுகள் இல்லை.', selectDate:'தேதியைத் தேர்ந்தெடு',
  totalBookings:'மொத்த பதிவுகள்', checkedIn:'செக்-இன்', paid:'செலுத்தப்பட்டது',
  avgWait:'சராசரி காத்திருப்பு (நிமிடம்)', utilisation:'மைய சுமை',
  aiTitle:'AI தேவை கணிப்பு — ஸ்லாட் சமநிலை',
  aiSub:'நேரடி பதிவுகள், வரலாற்று வருகை மற்றும் மைய திறனில் இருந்து பகுப்பாய்வு',
  aiNoAction:'எல்லா மையங்களும் சமநிலையில் உள்ளன. நடவடிக்கை தேவையில்லை.', aiAction:'AI பரிந்துரை',
  aiShift1:'இல் உள்ளது', aiShift2:'சுமை, ஆனால்', aiShift3:'வெறும்', aiShift4:'இல் உள்ளது. சுமார்',
  aiShift5:'ஸ்லாட்', aiShift6:'அடுத்த 2 மணி நேரத்திற்கு மாற்றவும்.',
  aiInputs:'மாதிரி உள்ளீடுகள்: நேரடி பதிவுகள் · வரலாற்று புள்ளிவிவரங்கள் · மைய திறன் · பயிர் நாட்காட்டி · ஸ்லாட் பயன்பாடு',
  smsTitle:'SMS கேட்வே பதிவு', smsSub:'SMS விநியோக பதிவு (உருவகப்படுத்தப்பட்டது)', clearSms:'பதிவை அழி',
  smsCount:'செய்திகள்', noSms:'இன்னும் செய்திகள் இல்லை. SMS தூண்ட ஸ்லாட் பதிவு செய்யுங்கள்.',
  prodIntegration:'உற்பத்தி ஒருங்கிணைப்பு',
  prodNote:'உற்பத்தியில்: ஒரு SMS கேட்வே (எ.கா. Twilio / MSG91) + புஷ் நோட்டிபிகேஷன், DLT டெம்ப்ளேட்டுடன்.',
  stages:['பதிவு','செக்-இன்','எடை','தரம்','பணம்'],
  smsOtp:'KisanSetu: உங்கள் OTP 123456. 10 நிமிடங்களுக்கு செல்லுபடியாகும். யாருடனும் பகிர வேண்டாம்.',
  smsBooked:'KisanSetu: {name}, {centre} இல் {date} ({slot}) உங்கள் ஸ்லாட் CONFIRM ஆனது. டோக்கன்: {token}. வாயிலில் இந்த SMS காட்டவும்.',
  smsCheckedIn:'KisanSetu: {name}, {centre} இல் நீங்கள் CHECKED-IN ஆனீர்கள். டோக்கன் {token}. எடைக்கு செல்லவும்.',
  smsWeighed:'KisanSetu: {name}, உங்கள் {crop} {centre} இல் எடை போடப்பட்டது. டோக்கன் {token}. தரம் பிரிக்கப்படுகிறது.',
  smsGraded:'KisanSetu: {name}, {centre} இல் தரம் பிரிப்பு முடிந்தது. டோக்கன் {token}. பணம் விரைவில் வரவு வைக்கப்படும்.',
  smsPaid:'KisanSetu: {name}, டோக்கன் {token} க்கான பணம் DBT/UPI மூலம் வரவு வைக்கப்பட்டது. KisanSetu பயன்படுத்தியதற்கு நன்றி.',
  logoutNote:'உள்நுழைந்தவர்:', logout:'வெளியேறு', changeLang:'மொழி மாற்று', back:'பின்',
  autoRefresh:'இந்தப் பக்கம் ஒவ்வொரு 2 வினாடிக்கும் தானாக புதுப்பிக்கப்படும் — நிலை நேரடியாக புதுப்பிக்கப்படும்.',
  chooseLang:'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்', chooseLangSub:'நீங்கள் வசதியாக உள்ள மொழியைத் தேர்ந்தெடுக்கவும்.',
  procurementHistoryTitle:'உங்கள் கொள்முதல் வரலாறு', noHistory:'இன்னும் பதிவுகள் இல்லை.',
  helpTitle:'உதவி & புகார்', helpDesc:'பதிவு, பணம் அல்லது வரிசையில் ஏதேனும் சிக்கலா? கீழே தெரிவிக்கவும், அல்லது எங்கள் ஹெல்ப்லைனை அழைக்கவும்.',
  helpline:'ஹெல்ப்லைன்', raiseComplaint:'புகார் அளிக்கவும்', complaintPlaceholder:'உங்கள் சிக்கலை விவரிக்கவும்…',
  submitComplaint:'புகார் சமர்ப்பிக்கவும்', complaintSubmitted:'உங்கள் புகார் பதிவு செய்யப்பட்டது. எங்கள் குழு விரைவில் தொடர்பு கொள்ளும்.',
  yourComplaints:'உங்கள் புகார்கள்', noComplaints:'இன்னும் புகார்கள் இல்லை.',
  faqTitle:'அடிக்கடி கேட்கப்படும் கேள்விகள்', faq1q:'ஸ்லாட்டை எப்படி பதிவு செய்வது?', faq1a:'"ஸ்லாட் பதிவு" க்குச் சென்று, மையம், தேதி மற்றும் பயிரைத் தேர்ந்தெடுத்து, திறந்த நேர ஸ்லாட்டைத் தேர்ந்தெடுக்கவும்.',
  faq2q:'ஸ்லாட் தவறவிட்டால்?', faq2a:'மையத்திற்குச் சென்று அன்றைய அடுத்த திறந்த ஸ்லாட்டிற்கு மாற்றுமாறு பணியாளரிடம் கேட்கவும்.',
  faq3q:'பணம் நிலையை எப்படி அறிவது?', faq3a:'DBT/UPI மூலம் பணம் வரவு வைக்கப்பட்டவுடன் SMS வரும், இது "எனது வரிசை" இலும் தெரியும்.',
  demoControls:'டெமோ கட்டுப்பாடுகள்', demoControlsSub:'விளக்கக்காட்சிக்காக — ஒரு கிளிக்கில் தரவை தயார் செய்யுங்கள்.',
  demoData:'டெமோ தரவை ஏற்று', resetAll:'எல்லா தரவையும் மீட்டமை',
  recentActivity:'சமீபத்திய செயல்பாடு', noActivity:'இன்னும் செயல்பாடு இல்லை.', complete:'முடிந்தது',
  locality:'பகுதி', capacity:'திறன்',
  voiceTitle:'KisanSetu உடன் பேசுங்கள்', voiceSub:'உங்கள் மொழியில் பேசுங்கள் — "எனது ஸ்லாட்டை பதிவு செய்" அல்லது "எனது வரிசையைக் காட்டு" என்று முயற்சிக்கவும்.',
  voiceTapToSpeak:'பேச தட்டவும்', voiceListening:'கேட்கிறது…',
  voiceFallbackNote:'ஃபீச்சர் போன் பயன்முறை — உருவகப்படுத்தப்பட்ட IVR', voiceOptQueue:'1 · வரிசை', voiceOptBook:'2 · ஸ்லாட் பதிவு',
  voiceHelpBtn:'குரல் உதவி', voiceHeardBook:'கேட்டது: "எனது ஸ்லாட்டை பதிவு செய்" → பதிவு திறக்கிறது',
  voiceHeardQueue:'கேட்டது: "எனது வரிசையைக் காட்டு" → வரிசை திறக்கிறது',
  loginPromptTitle:'தொடர உள்நுழையவும்', loginPromptSub:'இந்தப் பகுதியை அணுக உங்கள் மொபைல் எண்ணை சரிபார்க்கவும்.'
}
};

/* ---------- Storage ----------
   K is the persistence layer for this demo (no real backend/DB exists in
   this prototype — localStorage plays that role). It now:
   - never throws to callers (every op is guarded)
   - auto-detects whether localStorage actually works in this environment
     (Safari on file://, private-browsing quota limits, disabled storage,
     sandboxed iframes, extensions that block storage, etc. can all make
     localStorage.setItem throw even though the field "worked" on screen)
   - falls back to sessionStorage, then to a plain in-memory object, so a
     demo/booking flow can keep going instead of silently losing data
   - surfaces failures via reportError() so they show up in the UI instead
     of failing invisibly
------------------------------------------------------------------ */
const MemoryStore = (function(){
  const mem = Object.create(null);
  return {
    getItem:(k)=> Object.prototype.hasOwnProperty.call(mem,k) ? mem[k] : null,
    setItem:(k,v)=>{ mem[k]=String(v); },
    removeItem:(k)=>{ delete mem[k]; }
  };
})();

function testStorage(ref){
  const testKey='__ks_probe__';
  ref.setItem(testKey,'1');
  ref.removeItem(testKey);
  return true;
}

function detectStorage(){
  try{ if(window.localStorage && testStorage(window.localStorage)) return {name:'localStorage', ref:window.localStorage}; }
  catch(e){ /* fall through */ }
  try{ if(window.sessionStorage && testStorage(window.sessionStorage)) return {name:'sessionStorage', ref:window.sessionStorage}; }
  catch(e){ /* fall through */ }
  return {name:'memory', ref:MemoryStore};
}

let STORAGE = detectStorage();

const K = {
  backend: STORAGE.name,
  get(k,d){
    try{
      const v = STORAGE.ref.getItem('ks_'+k);
      return (v!==null && v!==undefined) ? JSON.parse(v) : d;
    }catch(e){
      reportError('Could not read "'+k+'" from '+STORAGE.name+': '+e.message);
      return d;
    }
  },
  set(k,v){
    try{
      STORAGE.ref.setItem('ks_'+k, JSON.stringify(v));
      return true;
    }catch(e){
      // Primary store failed (quota, blocked, unavailable, etc). Degrade
      // to an in-memory fallback so the current session/demo can continue,
      // and tell the user their data is temporary.
      const prevBackend = STORAGE.name;
      STORAGE = {name:'memory', ref:MemoryStore};
      K.backend = 'memory';
      try{
        MemoryStore.setItem('ks_'+k, JSON.stringify(v));
        reportError('Could not save to '+prevBackend+' ('+e.message+'). Switched to temporary in-memory storage for this session — data will not survive a page refresh.');
        return true;
      }catch(e2){
        reportError('Critical: unable to persist "'+k+'" anywhere: '+e2.message);
        return false;
      }
    }
  },
  del(k){
    try{ STORAGE.ref.removeItem('ks_'+k); }
    catch(e){ reportError('Could not delete "'+k+'" from '+STORAGE.name+': '+e.message); }
  }
};

/* ---------- Error reporting (surfaced in the UI, not just console) ---------- */
let appError = null;
function reportError(msg){
  console.error('[KisanSetu]', msg);
  appError = msg;
  if(typeof render === 'function'){
    try{ render(); }catch(e){ console.error('[KisanSetu] render() failed while reporting error:', e); }
  }
}
function clearError(){ appError = null; render(); }
window.addEventListener('error', (e)=>{ reportError('Unexpected error: '+(e.message||e)); });
window.addEventListener('unhandledrejection', (e)=>{ reportError('Unexpected error: '+(e.reason && e.reason.message || e.reason)); });

/* ---------- Current language ---------- */
let lang = K.get('lang', null);
function t(k){
  const pack = (lang && T[lang]) ? T[lang] : T.en;
  return pack[k] !== undefined ? pack[k] : (T.en[k] !== undefined ? T.en[k] : k);
}
function cropName(key){ return t('crop_'+key); }

/* ---------- Seed data (Gorakhpur, UP) ---------- */
const CENTRES = [
  {id:'C1', name:'Sadar Krishi Mandi',           locality:'Gorakhpur Sadar', capacity:120},
  {id:'C2', name:'Pipraich Procurement Kendra',  locality:'Pipraich',        capacity:90},
  {id:'C3', name:'Campierganj Krishi Upaj Mandi',locality:'Campierganj',     capacity:150},
  {id:'C4', name:'Chauri Chaura Mandi Samiti',   locality:'Chauri Chaura',   capacity:100},
  {id:'C5', name:'Bansgaon Krishi Kendra',       locality:'Bansgaon',        capacity:80}
];
const SLOTS = ['08:00–09:00','09:00–10:00','10:00–11:00','11:00–12:00','12:00–13:00',
  '14:00–15:00','15:00–16:00','16:00–17:00','17:00–18:00','18:00–19:00'];
const SLOT_CAP = 10;
const STAGES = ['Booked','Checked-in','Weighed','Graded','Paid'];
const AVG_SERVICE_MIN = 6;

function seed(){
  if(!K.get('centres')) K.set('centres', CENTRES);
  if(!K.get('bookings')) K.set('bookings', []);
  if(!K.get('sms')) K.set('sms', []);
  if(!K.get('complaints')) K.set('complaints', []);
}
seed();

function todayISO(offset){
  const d = new Date(); d.setDate(d.getDate() + (offset||0));
  return d.toISOString().slice(0,10);
}
function getCentre(id){ return K.get('centres',CENTRES).find(c=>c.id===id); }
function getBookings(){ return K.get('bookings',[]); }

/* ---------- SMS ---------- */
function fillSms(key, vars){
  let s = t(key);
  Object.keys(vars||{}).forEach(k=>{ s = s.split('{'+k+'}').join(vars[k]); });
  return s;
}
function sendSMS(mobile, msg){
  const log = K.get('sms',[]);
  log.unshift({to:mobile, msg, at:new Date().toISOString()});
  K.set('sms', log.slice(0,200));
}
function fmtTime(iso){
  const d=new Date(iso);
  return d.toLocaleString('en-IN',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'});
}

/* ---------- Booking ---------- */
function tokenFor(centreId, date, seq){
  const c = centreId.replace('C','');
  const d = date.slice(5).replace('-','');
  return 'KS-'+c+d+'-'+String(seq).padStart(3,'0');
}
function slotCount(centreId, date, slotIdx){
  return getBookings().filter(b=>b.centreId===centreId && b.date===date && b.slotIdx===slotIdx).length;
}
function bookSlot({name, mobile, centreId, date, slotIdx, crop}){
  // Defensive: always persist mobile as a trimmed string, never a number,
  // so it can never get silently coerced/truncated (e.g. losing a leading 0)
  // by JSON storage or downstream code.
  const mobileStr = String(mobile==null ? '' : mobile).trim();
  if(!/^\d{10}$/.test(mobileStr)){
    throw new Error('Cannot save booking: mobile number "'+mobileStr+'" is missing or invalid.');
  }
  const b = getBookings();
  const seq = b.length + 1;
  const token = tokenFor(centreId, date, seq);
  const rec = {
    id: 'B'+Date.now()+Math.floor(Math.random()*999),
    token, name, mobile: mobileStr, centreId, date, slotIdx, crop,
    status: 'Booked',
    lang: lang || 'en',
    createdAt: new Date().toISOString(),
    history: [{stage:'Booked', at:new Date().toISOString()}]
  };
  b.push(rec);
  const saved = K.set('bookings', b);
  if(!saved){
    throw new Error('Booking could not be saved to persistent storage.');
  }
  const c = getCentre(centreId);
  sendSMS(mobileStr, fillSms('smsBooked', {name, centre:c.name, date, slot:SLOTS[slotIdx], token}));
  return rec;
}
function advanceStatus(bookingId){
  const b = getBookings();
  const rec = b.find(x=>x.id===bookingId);
  if(!rec) return;
  const i = STAGES.indexOf(rec.status);
  if(i < STAGES.length-1){
    rec.status = STAGES[i+1];
    rec.history.push({stage: rec.status, at: new Date().toISOString()});
    K.set('bookings', b);
    const c = getCentre(rec.centreId);
    const map = { 'Checked-in':'smsCheckedIn', 'Weighed':'smsWeighed', 'Graded':'smsGraded', 'Paid':'smsPaid' };
    const msgKey = map[rec.status];
    if(msgKey){
      sendSMS(rec.mobile, fillSms(msgKey, {name:rec.name, centre:c.name, token:rec.token, crop: cropName(rec.crop)}));
    }
  }
}
function queuePosition(rec){
  const list = getBookings()
    .filter(b=>b.centreId===rec.centreId && b.date===rec.date && b.status!=='Paid')
    .sort((a,b)=> a.slotIdx-b.slotIdx || new Date(a.createdAt)-new Date(b.createdAt));
  const idx = list.findIndex(x=>x.id===rec.id);
  return {pos: idx+1, total: list.length};
}
function getActiveBooking(){
  if(!session.mobile) return null;
  const list = getBookings().filter(b=>b.mobile===session.mobile && b.status!=='Paid')
    .sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt));
  return list[0] || null;
}
function getFarmerHistory(){
  if(!session.mobile) return [];
  return getBookings().filter(b=>b.mobile===session.mobile)
    .sort((a,b)=> new Date(b.createdAt)-new Date(a.createdAt));
}

/* ---------- App state ---------- */
let role = K.get('role', 'farmer');
let view = 'overview';
let session = { mobile:null, otp:null, pendingMobile:null };
let staffCentre = 'C1', staffDate = todayISO(0);
let farmerForm = { name:'', mobile:'', centreId:'C1', date: todayISO(0), slotIdx:0, crop:'wheat' };
let complaintDraft = '';
let voice = { open:false, listening:false, result:'' };

function go(v){ view=v; render(); window.scrollTo({top:0,behavior:'smooth'}); }
function setLang(code){
  lang = code;
  K.set('lang', lang);
  render();
}
function setRole(r){
  role = r;
  K.set('role', role);
  view = 'overview';
  render();
}
function greetWord(){
  const h = new Date().getHours();
  if(h < 12) return t('greetMorning');
  if(h < 17) return t('greetAfternoon');
  return t('greetEvening');
}
function initials(name){
  if(!name) return 'K';
  return name.trim().split(/\s+/).slice(0,2).map(w=>w[0].toUpperCase()).join('');
}

/* ---------- Render root ---------- */
function render(){
  const root = document.getElementById('appShell');
  root.innerHTML = renderSidebar() + renderMainCol();
  attachStaticHandlers();
}

function renderSidebar(){
  const farmerNav = [
    ['overview','navOverview','🏠'],
    ['book','navBook','🗓️'],
    ['queue','navQueue','🎫'],
    ['history','navProcurement','📦'],
    ['help','navHelp','☎️']
  ];
  const officerNav = [
    ['overview','navOfficerOverview','📊'],
    ['manage','navManageQueue','👷'],
    ['centres','navCentres','🏢'],
    ['sms','navSmsLog','📨']
  ];
  const items = role==='farmer' ? farmerNav : officerNav;
  return `
  <div class="sidebar">
    <div class="brand">
      <div class="mark">🌱</div>
      <div class="txt"><b>${t('appName')}</b><small>${t('tagline')}</small></div>
    </div>
    <div class="role-toggle">
      <button class="${role==='farmer'?'active':''}" onclick="setRole('farmer')">${t('farmerView')}</button>
      <button class="${role==='officer'?'active':''}" onclick="setRole('officer')">${t('officerView')}</button>
    </div>
    <div class="side-label">${role==='farmer'?t('navOverview'):t('navOfficerOverview')}</div>
    <ul class="side-nav">
      ${items.map(([k,label,ic])=>`<li><button class="${view===k?'active':''}" onclick="go('${k}')"><span class="ic">${ic}</span>${t(label)}</button></li>`).join('')}
    </ul>
  </div>`;
}

function renderMainCol(){
  let body = '';
  if(role==='farmer'){
    if(!lang) body = viewChooseLang();
    else if(!session.mobile) body = viewLogin();
    else if(view==='overview') body = viewFarmerOverview();
    else if(view==='book') body = viewBook();
    else if(view==='queue') body = viewQueue();
    else if(view==='history') body = viewHistory();
    else if(view==='help') body = viewHelp();
    else body = viewFarmerOverview();
  } else {
    if(!lang) body = viewChooseLang();
    else if(view==='overview') body = viewOfficerOverview();
    else if(view==='manage') body = viewManageQueue();
    else if(view==='centres') body = viewCentres();
    else if(view==='sms') body = viewSms(null);
    else body = viewOfficerOverview();
  }
  const showVoice = role==='farmer' && lang && session.mobile;
  const mobileStr = String(farmerForm.mobile||'');
  return `
  <div class="main-col">
    <div class="topbar">
      <div class="meta"><span class="dot"></span>${role==='farmer' && session.mobile ? t('farmerIdLbl')+' · '+mobileStr.replace(/(\d{2})\d{5}(\d{3})/,'$1•••••$2') : t('demoEnv')}</div>
      <div class="spacer">
        ${lang ? `<select class="lang-select" onchange="setLang(this.value)">
          ${LANG_META.map(l=>`<option value="${l.code}" ${lang===l.code?'selected':''}>${l.native}</option>`).join('')}
        </select>` : ''}
        <div class="avatar">${initials(farmerForm.name || 'KS')}</div>
      </div>
    </div>
    ${renderErrorBanner()}
    ${K.backend!=='localStorage' ? renderStorageNotice() : ''}
    <main class="content">${body}</main>
  </div>
  ${showVoice ? renderVoiceWidget() : ''}
  `;
}

/* ---------- Error / storage-status banners ---------- */
function renderErrorBanner(){
  if(!appError) return '';
  return `<div class="alert err" style="margin:12px 16px 0;display:flex;justify-content:space-between;align-items:center;gap:10px">
    <span>⚠️ ${appError}</span>
    <button class="btn sec sm" onclick="clearError()">✕</button>
  </div>`;
}
function renderStorageNotice(){
  return `<div class="alert warn" style="margin:12px 16px 0">
    ⚠️ Persistent database storage is unavailable in this environment — running on temporary <b>${K.backend}</b> storage for this demo. Bookings and phone numbers entered now will be lost on page refresh.
  </div>`;
}

/* ---------- Language chooser ---------- */
function viewChooseLang(){
  return `
  <div class="card" style="max-width:720px;margin:40px auto 0">
    <h2>🌐 ${t('chooseLang')}</h2>
    <p class="sub">Select the language you are most comfortable with.</p>
    <div class="lang-grid">
      ${LANG_META.map(l=>`
        <div class="lang-card" onclick="setLang('${l.code}')">
          <div class="native">${l.native}</div>
          <div class="eng">${l.eng}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

/* ---------- Login ---------- */
function viewLogin(){
  return `
  <div class="card" style="max-width:440px;margin:40px auto 0">
    <h2>📱 ${t('loginPromptTitle')}</h2>
    <p class="sub">${t('loginPromptSub')} ${t('otpHint')}</p>
    <label>${t('mobile')}</label>
    <input id="fm" type="tel" maxlength="10" placeholder="9876543210" value="${session.pendingMobile||''}">
    <div style="margin-top:14px">
      <button class="btn" onclick="farmerSendOtp()">${t('sendOtp')}</button>
    </div>
    ${session.otp?`
      <div class="divider"></div>
      <label>${t('otp')}</label>
      <input id="fo" type="tel" maxlength="6" placeholder="123456">
      <div style="margin-top:14px">
        <button class="btn" onclick="farmerVerify()">${t('verify')}</button>
      </div>
    `:''}
    <div class="divider"></div>
    <button class="btn sec sm" onclick="clearLang()">🌐 ${t('changeLang')}</button>
  </div>`;
}
function clearLang(){
  lang = null;
  K.del('lang');
  render();
}
function farmerSendOtp(){
  try{
    const m = String((document.getElementById('fm').value||'')).trim();
    if(!/^\d{10}$/.test(m)){ alert('Enter a valid 10-digit mobile number'); return; }
    session.pendingMobile = m; session.otp = '123456';
    sendSMS(m, t('smsOtp'));
    render();
  }catch(e){
    reportError('Could not send OTP: '+e.message);
  }
}
function farmerVerify(){
  try{
    const o = (document.getElementById('fo').value||'').trim();
    if(o !== '123456'){ alert('Invalid OTP. Demo OTP is 123456'); return; }
    const mobileStr = String(session.pendingMobile||'').trim();
    if(!/^\d{10}$/.test(mobileStr)){ throw new Error('Mobile number was lost before verification — please re-enter it.'); }
    session.mobile = mobileStr;
    farmerForm.mobile = mobileStr;
    farmerForm.name = farmerForm.name || 'Farmer '+mobileStr.slice(-4);
    view = 'overview';
    render();
  }catch(e){
    reportError('Could not complete login: '+e.message);
  }
}

/* ---------- Farmer Overview ---------- */
function viewFarmerOverview(){
  const active = getActiveBooking();
  const first = (farmerForm.name||'Farmer').split(' ')[0];
  let heroHtml = '';
  if(active){
    const c = getCentre(active.centreId);
    const q = queuePosition(active);
    const wait = Math.max(0,(q.pos-1)*AVG_SERVICE_MIN);
    heroHtml = `
    <div class="hero-visit">
      <div>
        <div class="lbl">${t('nextVisit')}</div>
        <h2>${cropName(active.crop)}</h2>
        <div class="meta-row">
          <span>📍 ${c?c.name:'—'}</span>
          <span>🕒 ${active.date} · ${SLOTS[active.slotIdx]}</span>
        </div>
        <button class="btn ghost-w" onclick="go('queue')">${t('trackVisit')} →</button>
      </div>
      <div class="token-box">
        <div class="lbl">${t('yourTokenLabel')}</div>
        <div class="tok">${active.token}</div>
        <div class="muted" style="color:rgba(255,255,255,.85);margin-top:6px">${t('position')}: ${q.pos}/${q.total}</div>
      </div>
    </div>`;
  } else {
    heroHtml = `
    <div class="hero-visit">
      <div>
        <div class="lbl">${t('nextVisit')}</div>
        <h2>${t('noActiveVisit')}</h2>
        <div class="meta-row"><span>${t('noActiveVisitSub')}</span></div>
        <button class="btn" style="background:#fff;color:var(--green-d)" onclick="go('book')">${t('bookFirstSlot')} →</button>
      </div>
    </div>`;
  }

  const waitVal = active ? Math.max(0,(queuePosition(active).pos-1)*AVG_SERVICE_MIN) : 0;
  const statusVal = active ? t('stages')[STAGES.indexOf(active.status)] : '—';
  const c2 = active ? getCentre(active.centreId) : null;
  const load = c2 ? getBookings().filter(b=>b.centreId===c2.id && b.date===active.date).length : 0;
  const loadPct = c2 ? Math.round(load/c2.capacity*100) : 0;

  return `
  <div class="greeting">
    <h1>${greetWord()}, ${first}</h1>
    <p>${t('greetingSub')}</p>
  </div>
  ${heroHtml}
  <div class="section-label">${t('atGlance')}</div>
  <div class="grid g3">
    <div class="stat"><div class="ic">⏱️</div><b>${waitVal}</b><span>${t('waitTimeLbl')} (min)</span></div>
    <div class="stat"><div class="ic">📦</div><b>${statusVal}</b><span>${t('procurementStatusLbl')}</span></div>
    <div class="stat"><div class="ic">🏢</div><b>${active?loadPct+'%':'—'}</b><span>${t('centreLoadLbl')}</span></div>
  </div>
  ${active ? `
  <div class="section-label">${t('liveStatusLbl')}</div>
  <div class="card">
    <h3 style="margin-top:0">${t('procurementProgressLbl')}</h3>
    <div class="steps">
      ${STAGES.map((s,i)=>{
        const ci = STAGES.indexOf(active.status);
        return `<div class="step ${i<ci?'done':''} ${i===ci?'cur':''}">
          <div class="dot">${i<ci?'✓':i+1}</div>
          <div class="lbl">${t('stages')[i]}</div>
        </div>`;
      }).join('')}
    </div>
  </div>` : ''}`;
}

/* ---------- Book a slot ---------- */
function viewBook(){
  const centres = K.get('centres',CENTRES);
  const sel = centres.find(c=>c.id===farmerForm.centreId) || centres[0];
  return `
  <div class="greeting"><h1>${t('navBook')}</h1></div>
  <div class="card">
    <div class="grid g2">
      <div>
        <label>${t('name')}</label>
        <input id="f_name" value="${farmerForm.name}" placeholder="Ramesh Yadav" oninput="farmerForm.name=this.value">
      </div>
      <div>
        <label>${t('selectCentre')}</label>
        <select onchange="farmerForm.centreId=this.value;farmerForm.slotIdx=0;render()">
          ${centres.map(c=>`<option value="${c.id}" ${farmerForm.centreId===c.id?'selected':''}>${c.name} — ${c.locality}</option>`).join('')}
        </select>
      </div>
      <div>
        <label>${t('cropSelect')}</label>
        <select onchange="farmerForm.crop=this.value;render()">
          ${CROP_KEYS.map(ck=>`<option value="${ck}" ${farmerForm.crop===ck?'selected':''}>${cropName(ck)}</option>`).join('')}
        </select>
      </div>
      <div>
        <label>${t('date')}</label>
        <select onchange="farmerForm.date=this.value;farmerForm.slotIdx=0;render()">
          ${[0,1,2,3,4,5,6].map(o=>{const d=todayISO(o);return `<option value="${d}" ${farmerForm.date===d?'selected':''}>${d}${o===0?' (Today)':o===1?' (Tomorrow)':''}</option>`}).join('')}
        </select>
      </div>
    </div>
    <div class="muted" style="padding:10px 0">📍 ${sel.locality} · ${t('capacity')} ${sel.capacity}/day</div>
    <h3>${t('slot')}</h3>
    <div class="grid g4">
      ${SLOTS.map((s,i)=>{
        const used = slotCount(farmerForm.centreId, farmerForm.date, i);
        const left = SLOT_CAP - used;
        const full = left<=0;
        const active = farmerForm.slotIdx===i;
        return `<div onclick="${full?'':`farmerForm.slotIdx=${i};render()`}"
          style="cursor:${full?'not-allowed':'pointer'};padding:11px;border-radius:10px;text-align:center;
          border:2px solid ${active?'var(--green)':'var(--border)'};
          background:${full?'#f5f5f5':active?'var(--green-l)':'#fff'};
          opacity:${full?.5:1}">
          <div style="font-weight:700;font-size:13px;color:${active?'var(--green-d)':'#2c3e35'}">${s}</div>
          <div class="muted" style="font-size:11px">${full?t('full'):left+' '+t('remaining')}</div>
        </div>`;
      }).join('')}
    </div>
    <div class="row" style="margin-top:20px">
      <button class="btn" onclick="farmerBook()">✅ ${t('book')}</button>
    </div>
  </div>`;
}
function farmerBook(){
  if(!farmerForm.name.trim()){ alert(t('name')); return; }
  const used = slotCount(farmerForm.centreId, farmerForm.date, farmerForm.slotIdx);
  if(used >= SLOT_CAP){ alert(t('full')); return; }
  try{
    bookSlot({...farmerForm, mobile: session.mobile});
    go('queue');
  }catch(e){
    reportError('Booking failed: '+e.message);
  }
}

/* ---------- My Queue ---------- */
function viewQueue(){
  const rec = getActiveBooking();
  if(!rec){
    return `
    <div class="greeting"><h1>${t('navQueue')}</h1></div>
    <div class="alert info">${t('noActiveVisit')} — ${t('noActiveVisitSub')}</div>
    <button class="btn" onclick="go('book')">${t('bookFirstSlot')}</button>`;
  }
  const ci = STAGES.indexOf(rec.status);
  const q = queuePosition(rec);
  const wait = Math.max(0,(q.pos-1)*AVG_SERVICE_MIN);
  const c = getCentre(rec.centreId);
  const totalLoad = getBookings().filter(b=>b.centreId===rec.centreId&&b.date===rec.date).length;
  return `
  <div class="greeting"><h1>${t('navQueue')}</h1></div>
  <div class="card">
    <h2>🎫 ${t('yourToken')}</h2>
    <p class="sub">${t('showAtGate')}</p>
    <div class="big-token">${rec.token}</div>
    <div class="grid g3">
      <div class="stat"><b>${q.pos}</b><span>${t('position')} / ${q.total}</span></div>
      <div class="stat"><b>${wait}</b><span>${t('estWait')} (min)</span></div>
      <div class="stat"><b>${totalLoad}</b><span>${t('todaysQueue')}</span></div>
    </div>
    <h3>${t('status')}</h3>
    <div class="steps">
      ${STAGES.map((s,i)=>`
        <div class="step ${i<ci?'done':''} ${i===ci?'cur':''}">
          <div class="dot">${i<ci?'✓':i+1}</div>
          <div class="lbl">${t('stages')[i]}</div>
        </div>`).join('')}
    </div>
    <div class="divider"></div>
    <table>
      <tr><td><b>${t('name')}</b></td><td>${rec.name}</td></tr>
      <tr><td><b>${t('crop')}</b></td><td>${cropName(rec.crop)}</td></tr>
      <tr><td><b>${t('centre')}</b></td><td>${c?c.name:'—'}</td></tr>
      <tr><td><b>${t('date')}</b></td><td>${rec.date}</td></tr>
      <tr><td><b>${t('slot')}</b></td><td>${SLOTS[rec.slotIdx]}</td></tr>
      <tr><td><b>${t('status')}</b></td><td><span class="pill p-${rec.status.split('-')[0]}">${t('stages')[STAGES.indexOf(rec.status)]}</span></td></tr>
    </table>
    <div class="divider"></div>
    <h3>📜 ${t('statusHistory')}</h3>
    ${rec.history.slice().reverse().map(h=>`<p class="muted">• <b>${t('stages')[STAGES.indexOf(h.stage)]||h.stage}</b> — ${fmtTime(h.at)}</p>`).join('')}
    <p class="muted" style="margin-top:12px">🔁 ${t('autoRefresh')}</p>
  </div>`;
}

/* ---------- Procurement history ---------- */
function viewHistory(){
  const list = getFarmerHistory();
  return `
  <div class="greeting"><h1>${t('procurementHistoryTitle')}</h1></div>
  <div class="card">
    ${list.length===0 ? `<div class="alert info">${t('noHistory')}</div>` : `
    <table>
      <tr><th>${t('token')}</th><th>${t('cropCol')}</th><th>${t('centre')}</th><th>${t('date')}</th><th>${t('status')}</th></tr>
      ${list.map(b=>{
        const c = getCentre(b.centreId);
        return `<tr>
          <td><span class="token">${b.token}</span></td>
          <td>${cropName(b.crop)}</td>
          <td>${c?c.name:'—'}</td>
          <td>${b.date}</td>
          <td><span class="pill p-${b.status.split('-')[0]}">${t('stages')[STAGES.indexOf(b.status)]}</span></td>
        </tr>`;
      }).join('')}
    </table>`}
  </div>`;
}

/* ---------- Help & complaints ---------- */
function viewHelp(){
  const complaints = K.get('complaints',[]).filter(c=>c.mobile===session.mobile);
  return `
  <div class="greeting"><h1>${t('helpTitle')}</h1></div>
  <div class="card">
    <p class="sub">${t('helpDesc')}</p>
    <div class="alert info">☎️ ${t('helpline')}: 1800-180-1551</div>
  </div>
  <div class="card">
    <h2>${t('raiseComplaint')}</h2>
    <textarea id="complaintBox" placeholder="${t('complaintPlaceholder')}" oninput="complaintDraft=this.value">${complaintDraft}</textarea>
    <div class="row" style="margin-top:12px">
      <button class="btn" onclick="submitComplaint()">${t('submitComplaint')}</button>
    </div>
  </div>
  <div class="card">
    <h2>${t('yourComplaints')}</h2>
    ${complaints.length===0 ? `<p class="muted">${t('noComplaints')}</p>` :
      complaints.slice().reverse().map(c=>`<p class="muted">• ${fmtTime(c.at)} — ${c.text}</p>`).join('')}
  </div>
  <div class="card">
    <h2>${t('faqTitle')}</h2>
    <h3>${t('faq1q')}</h3><p class="sub">${t('faq1a')}</p>
    <h3>${t('faq2q')}</h3><p class="sub">${t('faq2a')}</p>
    <h3>${t('faq3q')}</h3><p class="sub">${t('faq3a')}</p>
  </div>`;
}
function submitComplaint(){
  const text = (complaintDraft||'').trim();
  if(!text) return;
  const list = K.get('complaints',[]);
  list.push({mobile:session.mobile, text, at:new Date().toISOString()});
  K.set('complaints', list);
  complaintDraft = '';
  alert(t('complaintSubmitted'));
  render();
}

/* ---------- Officer: Overview ---------- */
function viewOfficerOverview(){
  const bookings = getBookings();
  const centres = K.get('centres',CENTRES);
  const d0 = todayISO(0);
  const todays = bookings.filter(b=>b.date===d0);
  const paid = todays.filter(b=>b.status==='Paid').length;
  const checkedIn = todays.filter(b=>['Checked-in','Weighed','Graded'].includes(b.status)).length;
  const avgWait = todays.length ? Math.round(todays.length / centres.length * AVG_SERVICE_MIN / 4) : 0;
  const loads = centres.map(c=>{
    const n = todays.filter(b=>b.centreId===c.id).length;
    return {...c, n, pct: Math.round(n/c.capacity*100)};
  });
  const hot = loads.filter(l=>l.pct>=60).sort((a,b)=>b.pct-a.pct)[0];
  const cold = loads.filter(l=>l.pct<35).sort((a,b)=>a.pct-b.pct)[0];
  let aiHtml = `<div class="alert ok">✅ ${t('aiNoAction')}</div>`;
  if(hot && cold){
    const shift = Math.ceil((hot.n - cold.n)/2);
    aiHtml = `<div class="alert warn">
      <b>🤖 ${t('aiAction')}:</b> <b>${hot.name}</b> ${t('aiShift1')} <b>${hot.pct}%</b> ${t('aiShift2')}
      <b>${cold.name}</b> ${t('aiShift3')} <b>${cold.pct}%</b> ${t('aiShift4')}
      <b>${shift} ${t('aiShift5')}</b> ${cold.name} ${t('aiShift6')}
      <br><span class="muted">${t('aiInputs')}</span>
    </div>`;
  }
  return `
  <div class="greeting"><h1>${t('navOfficerOverview')}</h1></div>
  <div class="grid g4">
    <div class="stat"><b>${todays.length}</b><span>${t('totalBookings')}</span></div>
    <div class="stat"><b>${checkedIn}</b><span>${t('checkedIn')}</span></div>
    <div class="stat"><b>${paid}</b><span>${t('paid')}</span></div>
    <div class="stat"><b>${avgWait}</b><span>${t('avgWait')}</span></div>
  </div>
  <div class="card" style="margin-top:18px">
    <h2>🤖 ${t('aiTitle')}</h2>
    <p class="sub">${t('aiSub')}</p>
    ${aiHtml}
  </div>
  <div class="card">
    <div class="row">
      <button class="btn sec" onclick="if(confirm('${t('resetAll')}?')){K.set('bookings',[]);K.set('sms',[]);K.set('complaints',[]);render()}">${t('resetAll')}</button>
    </div>
  </div>
  <div class="card">
    <h2>🕒 ${t('recentActivity')}</h2>
    ${bookings.slice(-8).reverse().map(b=>{
      const c = getCentre(b.centreId);
      const i = STAGES.indexOf(b.status);
      return `<p class="muted">• <b>${b.token}</b> — ${b.name} (${cropName(b.crop)}) @ ${c?c.name:'—'} → <span class="pill p-${b.status.split('-')[0]}">${t('stages')[i]}</span></p>`;
    }).join('') || `<p class="muted">${t('noActivity')}</p>`}
  </div>`;
}

/* ---------- Officer: Manage Queue ---------- */
function viewManageQueue(){
  const centres = K.get('centres',CENTRES);
  const list = getBookings()
    .filter(b=>b.centreId===staffCentre && b.date===staffDate)
    .sort((a,b)=> a.slotIdx-b.slotIdx || new Date(a.createdAt)-new Date(b.createdAt));
  const c = getCentre(staffCentre);
  return `
  <div class="greeting"><h1>${t('navManageQueue')}</h1></div>
  <div class="card">
    <div class="grid g3">
      <div>
        <label>${t('selectCentreStaff')}</label>
        <select onchange="staffCentre=this.value;render()">
          ${centres.map(x=>`<option value="${x.id}" ${staffCentre===x.id?'selected':''}>${x.name}</option>`).join('')}
        </select>
      </div>
      <div>
        <label>${t('selectDate')}</label>
        <select onchange="staffDate=this.value;render()">
          ${[0,1,2,3,4,5,6].map(o=>{const d=todayISO(o);return `<option value="${d}" ${staffDate===d?'selected':''}>${d}</option>`}).join('')}
        </select>
      </div>
      <div>
        <label>${t('centreLoad')||t('centreLoadLbl')}</label>
        <div class="muted">${list.length} / ${c?c.capacity:'—'} ${t('capacity')}</div>
        <div class="bar"><i style="width:${Math.min(100,Math.round(list.length/(c?c.capacity:1)*100))}%;background:${list.length/(c?c.capacity:1)>0.8?'var(--red)':list.length/(c?c.capacity:1)>0.5?'var(--orange)':'var(--green)'}"></i></div>
      </div>
    </div>
  </div>
  <div class="card">
    ${list.length===0 ? `<div class="alert warn">${t('noBookings')}</div>` : `
    <table>
      <tr>
        <th>${t('token')}</th><th>${t('farmerCol')}</th><th>${t('cropCol')}</th><th>${t('slot')}</th>
        <th>${t('status')}</th><th>${t('action')}</th>
      </tr>
      ${list.map(b=>{
        const i = STAGES.indexOf(b.status);
        const done = i===STAGES.length-1;
        return `<tr>
          <td><span class="token">${b.token}</span></td>
          <td>${b.name}<div class="muted">${b.mobile}</div></td>
          <td>${cropName(b.crop)}</td>
          <td class="mono">${SLOTS[b.slotIdx]}</td>
          <td><span class="pill p-${b.status.split('-')[0]}">${t('stages')[i]}</span></td>
          <td>${done?`<span class="muted">✓ ${t('complete')}</span>`:`<button class="btn sm" onclick="advanceStatus('${b.id}');render()">${t('next')} → ${t('stages')[i+1]}</button>`}</td>
        </tr>`;
      }).join('')}
    </table>`}
    <div class="divider"></div>
    <p class="muted">🔁 ${t('autoRefresh')}</p>
  </div>`;
}

/* ---------- Officer: Centres & load ---------- */
function viewCentres(){
  const bookings = getBookings();
  const centres = K.get('centres',CENTRES);
  const d0 = todayISO(0);
  const todays = bookings.filter(b=>b.date===d0);
  const loads = centres.map(c=>{
    const n = todays.filter(b=>b.centreId===c.id).length;
    return {...c, n, pct: Math.round(n/c.capacity*100)};
  });
  return `
  <div class="greeting"><h1>${t('navCentres')}</h1></div>
  <div class="card">
    <table>
      <tr><th>${t('centre')}</th><th>${t('locality')}</th><th>${t('totalBookings')}</th><th>${t('utilisation')}</th></tr>
      ${loads.map(l=>`<tr>
        <td><b>${l.name}</b></td>
        <td class="muted">${l.locality}</td>
        <td>${l.n} / ${l.capacity}</td>
        <td style="min-width:140px">
          <div class="bar"><i style="width:${Math.min(100,l.pct)}%;background:${l.pct>80?'var(--red)':l.pct>50?'var(--orange)':'var(--green)'}"></i></div>
          <span class="muted">${l.pct}%</span>
        </td>
      </tr>`).join('')}
    </table>
  </div>`;
}

/* ---------- SMS Log (shared, filterMobile optional) ---------- */
function viewSms(filterMobile){
  let log = K.get('sms',[]);
  if(filterMobile) log = log.filter(m=>m.to===filterMobile);
  return `
  <div class="greeting"><h1>${t('navSmsLog')}</h1></div>
  <div class="card">
    <p class="sub">${t('smsSub')}</p>
    <div class="row" style="margin-bottom:12px">
      <button class="btn sec sm" onclick="K.set('sms',[]);render()">${t('clearSms')}</button>
      <span class="muted">${log.length} ${t('smsCount')}</span>
    </div>
    <div class="smsbox">
      ${log.length===0 ? `<div class="muted">${t('noSms')}</div>` :
        log.map(m=>`<div><span class="t">[${fmtTime(m.at)}]</span> → <span class="n">+91${m.to}</span><br>&nbsp;&nbsp;${m.msg}</div><br>`).join('')}
    </div>
    <div class="divider"></div>
    <h3>🔌 ${t('prodIntegration')}</h3>
    <p class="muted">${t('prodNote')}</p>
  </div>`;
}

/* ---------- Voice widget (simulated) ---------- */
function renderVoiceWidget(){
  if(!voice.open){
    return `<button class="voice-fab" onclick="voice.open=true;render()">🎙️ ${t('voiceHelpBtn')}</button>`;
  }
  return `
  <div class="voice-panel">
    <div class="vp-head">
      <span class="vp-tag">${t('voiceFallbackNote')}</span>
      <button class="vp-close" onclick="voice.open=false;voice.result='';render()">✕</button>
    </div>
    <h3>${t('voiceTitle')}</h3>
    <p class="vp-sub">${t('voiceSub')}</p>
    <div class="mic-circle ${voice.listening?'listening':''}" onclick="voiceTap()">🎤</div>
    <p class="muted center" style="text-align:center">${voice.listening?t('voiceListening'):t('voiceTapToSpeak')}</p>
    ${voice.result?`<div class="vp-result">${voice.result}</div>`:''}
    <div class="voice-fallback">
      <button class="btn sec sm" onclick="voice.open=false;go('queue')">${t('voiceOptQueue')}</button>
      <button class="btn sec sm" onclick="voice.open=false;go('book')">${t('voiceOptBook')}</button>
    </div>
  </div>`;
}
function voiceTap(){
  if(voice.listening) return;
  voice.listening = true; voice.result=''; render();
  setTimeout(()=>{
    voice.listening = false;
    const wantsBook = Math.random() > 0.5;
    voice.result = wantsBook ? t('voiceHeardBook') : t('voiceHeardQueue');
    render();
    setTimeout(()=>{
      voice.open = false; voice.result='';
      go(wantsBook ? 'book' : 'queue');
    }, 1300);
  }, 1300);
}

function attachStaticHandlers(){ /* reserved for future direct DOM bindings */ }

/* ---------- Auto-refresh ---------- */
setInterval(()=>{
  if(role==='officer' && ['overview','manage','centres','sms'].includes(view)) render();
  if(role==='farmer' && (view==='queue' || view==='overview')) render();
}, 3000);
window.addEventListener('storage', ()=>render());

/* ---------- Boot ---------- */
render();
