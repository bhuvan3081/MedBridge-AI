// Database of sample medical reports and localized medical glossary for MedBridge AI (7 Languages)

const GLOSSARY = {
  en: {
    "total cholesterol": "A measure of the total amount of cholesterol in your blood, including LDL and HDL.",
    "ldl cholesterol": "Low-Density Lipoprotein, often called 'bad' cholesterol. High levels can lead to plaque buildup in arteries.",
    "hdl cholesterol": "High-Density Lipoprotein, often called 'good' cholesterol. It helps remove other forms of cholesterol from your bloodstream.",
    "triglycerides": "A type of fat found in your blood. High levels can increase the risk of heart disease.",
    "glucose": "Blood sugar. The primary source of energy for your body's cells. Elevated levels may indicate diabetes.",
    "bun": "Blood Urea Nitrogen. Measures the amount of nitrogen in your blood that comes from the waste product urea. Used to check kidney function.",
    "creatinine": "A waste product produced by muscles and filtered by the kidneys. High levels suggest impaired kidney function.",
    "tsh": "Thyroid Stimulating Hormone. Controls thyroid hormone production. High levels usually indicate hypothyroidism (underactive thyroid).",
    "free t4": "Thyroxine. The main hormone secreted by the thyroid gland. Used to evaluate thyroid function.",
    "wbc": "White Blood Cells. Cells of the immune system involved in protecting the body against infectious disease and foreign invaders.",
    "rbc": "Red Blood Cells. Cells that carry oxygen from your lungs to the rest of your body.",
    "hemoglobin": "A protein in red blood cells that carries oxygen throughout the body. Low levels indicate anemia.",
    "platelets": "Small cell fragments in blood that help form clots and stop bleeding."
  },
  es: {
    "total cholesterol": "Una medida de la cantidad total de colesterol en la sangre, incluyendo el LDL y el HDL.",
    "ldl cholesterol": "Lipoproteína de baja densidad, a menudo llamada colesterol 'malo'. Niveles altos pueden causar acumulación de placa en las arterias.",
    "hdl cholesterol": "Lipoproteína de alta densidad, a menudo llamada colesterol 'bueno'. Ayuda a eliminar otras formas de colesterol del torrente sanguíneo.",
    "triglycerides": "Un tipo de grasa que se encuentra en la sangre. Niveles altos pueden aumentar el riesgo de enfermedades cardíacas.",
    "glucose": "Azúcar en la sangre. La principal fuente de energía para las células del cuerpo. Niveles elevados pueden indicar diabetes.",
    "bun": "Nitrógeno ureico en sangre. Mide la cantidad de nitrógeno en la sangre que proviene de la urea. Sirve para evaluar la función renal.",
    "creatinine": "Un producto de desecho producido por los músculos y filtrado por los riñones. Niveles altos sugieren un deterioro de la función renal.",
    "tsh": "Hormona estimulante de la tiroides. Controla la tiroides. Niveles altos suelen indicar hipotiroidismo (tiroides poco activa).",
    "free t4": "Tiroxina libre. La principal hormona secretada por la glándula tiroides. Se usa para evaluar la función tiroidea.",
    "wbc": "Glóbulos blancos. Células del sistema inmunitario encargadas de proteger al cuerpo contra infecciones y agentes extraños.",
    "rbc": "Glóbulos rojos. Células que transportan oxígeno desde los pulmones al resto del cuerpo.",
    "hemoglobin": "Una proteína en los glóbulos rojos que transporta oxígeno por todo el cuerpo. Niveles bajos indican anemia.",
    "platelets": "Pequeños fragmentos celulares en la sangre que ayudan a formar coágulos y detener hemorragias."
  },
  fr: {
    "total cholesterol": "Une mesure de la quantité totale de cholestérol dans votre sang, y compris le LDL et le HDL.",
    "ldl cholesterol": "Lipoprotéine de basse densité, souvent appelée 'mauvais' cholestérol. Des niveaux élevés peuvent entraîner l'accumulation de plaques dans les artères.",
    "hdl cholesterol": "Lipoprotéine de haute densité, souvent appelée 'bon' cholestérol. Il aide à éliminer les autres formes de cholestérol de votre sang.",
    "triglycerides": "Un type de graisse présent dans votre sang. Des niveaux élevés peuvent augmenter le risque de maladie cardiaque.",
    "glucose": "Sucre dans le sang. La principale source d'énergie pour les cellules du corps. Des niveaux élevés peuvent indiquer un diabète.",
    "bun": "Azote uréique du sang. Mesure la quantité d'azote dans votre sang provenant de l'urée. Utilisé pour vérifier la fonction rénale.",
    "creatinine": "Un produit de déchet produit par les muscles et filtré par les reins. Des niveaux élevés suggèrent une fonction rénale altérée.",
    "tsh": "Hormone stimulante de la thyroïde. Contrôle la production d'hormones thyroïdiennes. Des niveaux élevés indiquent généralement une hypothyroïdie.",
    "free t4": "Thyroxine libre. La principale hormone sécrétée par la glande thyroïde. Utilisée pour évaluer la fonction thyroïdienne.",
    "wbc": "Globules blancs. Célules du système immunitaire impliquées dans la protection de l'organisme contre les infections.",
    "rbc": "Globules rouges. Célules qui transportent l'oxygène de vos poumons vers le reste du corps.",
    "hemoglobin": "Une protéine dans les globules rouges qui transporte l'oxygène. Des niveaux bas indiquent une anémie.",
    "platelets": "Petits fragments de cellules dans le sang qui aident à former des caillots et à arrêter les saignements."
  },
  ar: {
    "total cholesterol": "مقياس للكمية الإجمالية للكوليسترول في الدم، بما في ذلك الكوليسترول الضار والنافع.",
    "ldl cholesterol": "البروتين الدهني منخفض الكثافة، وغالبًا ما يسمى الكوليسترول 'الضار'. المستويات المرتفعة تسبب تراكم الترسبات.",
    "hdl cholesterol": "البروتين الدهني مرتفع الكثافة، وغالبًا ما يسمى الكوليسترول 'النافع'. يساعد في إزالة الكوليسترول الضار من الدم.",
    "triglycerides": "نوع من الدهون الموجودة في الدم. يمكن أن تزيد المستويات المرتفعة من خطر الإصابة بأمراض القلب.",
    "glucose": "سكر الدم. المصدر الرئيسي للطاقة لخلايا الجسم. قد تشير المستويات المرتفعة إلى مرض السكري.",
    "bun": "نيتروجين يوريا الدم. يقيس كمية النيتروجين في الدم التي تأتي من اليوريا. يستخدم لفحص وظائف الكلى.",
    "creatinine": "منتج نفايات تنتجه العضلات وتصفيه الكلى. تشير المستويات المرتفعة إلى ضعف وظائف الكلى.",
    "tsh": "الهرمون المنشط للغدة الدرقية. يتحكم في إنتاجها. تشير المستويات المرتفعة عادة إلى قصور الغدة الدرقية.",
    "free t4": "الثايروكسين الحر. الهرمون الرئيسي الذي تفرزه الغدة الدرقية. يستخدم لتقييم وظائف الغدة الدرقية.",
    "wbc": "خلايا الدم البيضاء. خلايا الجهاز المناعي المشاركة في حماية الجسم من الأمراض المعدية.",
    "rbc": "خلايا الدم الحمراء. الخلايا التي تنقل الأكسجين من الرئتين إلى باقي أجزاء الجسم.",
    "hemoglobin": "بروتين في خلايا الدم الحمراء يحمل الأكسجين في جميع أنحاء الجسم. تشير المستويات المنخفضة إلى فقر الدم.",
    "platelets": "شظايا خلايا صغيرة في الدم تساعد على تكوين الجلطات ووقف النزيف."
  },
  hi: {
    "total cholesterol": "आपके रक्त में कोलेस्ट्रॉल की कुल मात्रा का माप, जिसमें एलडीएल और एचडीएल शामिल हैं।",
    "ldl cholesterol": "लो-डेंसिटी लिपोप्रोटीन, जिसे अक्सर 'खराब' कोलेस्ट्रॉल कहा जाता है। उच्च स्तर धमनियों में प्लाक का कारण बन सकता है।",
    "hdl cholesterol": "हाई-डेंसिटी लिपोप्रोटीन, जिसे अक्सर 'अच्छा' कोलेस्ट्रॉल कहा जाता है। यह रक्तप्रवाह से अन्य कोलेस्ट्रॉल को हटाने में मदद करता है।",
    "triglycerides": "रक्त में पाया जाने वाला वसा का एक प्रकार। उच्च स्तर से हृदय रोग का खतरा बढ़ सकता है।",
    "glucose": "ब्लड शुगर। शरीर की कोशिकाओं के लिए ऊर्जा का प्राथमिक स्रोत। उच्च स्तर मधुमेह का संकेत हो सकता है।",
    "bun": "ब्लड यूरिया नाइट्रोजन। रक्त में नाइट्रोजन की मात्रा मापता है जो यूरिया से आती है। गुर्दे की कार्यप्रणाली की जाँच के लिए प्रयुक्त होता है।",
    "creatinine": "मांसपेशियों द्वारा उत्पादित और गुर्दे द्वारा फ़िल्टर किया गया एक अपशिष्ट उत्पाद। उच्च स्तर गुर्दे की कमजोरी का संकेत है।",
    "tsh": "थायरॉइड उत्तेजक हार्मोन। थायरॉइड हार्मोन उत्पादन को नियंत्रित करता है। उच्च स्तर आमतौर पर हाइपोथायरायडिज्म का संकेत देता है।",
    "free t4": "मुक्त टी4 (थायरोक्सिन)। थायरॉइड ग्रंथि द्वारा स्रावित मुख्य हार्मोन। थायरॉइड कार्यप्रणाली के मूल्यांकन के लिए प्रयुक्त होता है।",
    "wbc": "सफेद रक्त कोशिकाएं। शरीर को संक्रमण और बाहरी खतरों से बचाने वाली प्रतिरक्षा प्रणाली की कोशिकाएं।",
    "rbc": "लाल रक्त कोशिकाएं। वे कोशिकाएं जो फेफड़ों से शरीर के बाकी हिस्सों में ऑक्सीजन ले जाती हैं।",
    "hemoglobin": "लाल रक्त कोशिकाओं में एक प्रोटीन जो पूरे शरीर में ऑक्सीजन पहुंचाता है। कम स्तर एनीमिया का संकेत देता है।",
    "platelets": "रक्त में छोटे सेल टुकड़े जो थक्के बनाने और रक्तस्राव को रोकने में मदद करते हैं।"
  },
  te: {
    "total cholesterol": "రక్తంలో ఉండే మొత్తం కొలెస్ట్రాల్ పరిమాణం, ఇందులో LDL మరియు HDL రెండూ ఉంటాయి.",
    "ldl cholesterol": "తక్కువ-సాంద్రత గల లిపోప్రోటీన్, దీనిని సాధారణంగా 'చెడు' కొలెస్ట్రాల్ అంటారు. ఇది పెరిగితే ధమనులలో కొవ్వు పేరుకుపోతుంది.",
    "hdl cholesterol": "అధిక-సాంద్రత గల లిపోప్రోటీన్, దీనిని సాధారణంగా 'మంచి' కొలెస్ట్రాల్ అంటారు. ఇది చెడు కొలెస్ట్రాల్‌ను తొలగించడంలో సహాయపడుతుంది.",
    "triglycerides": "రక్తంలో ఉండే ఒక రకమైన కొవ్వు. దీని స్థాయిలు పెరిగితే గుండె జబ్బుల ప్రమాదం పెరుగుతుంది.",
    "glucose": "రక్తంలో చక్కెర శాతం. శరీర కణాలకు ప్రధాన శక్తి వనరు. ఇది పెరిగితే మధుమేహం ఉండే అవకాశం ఉంది.",
    "bun": "బ్లడ్ యూరియా నైట్రోజన్. కిడ్నీల పనితీరును అంచనా వేయడానికి ఈ పరీక్ష చేస్తారు.",
    "creatinine": "కండరాల నుండి ఉత్పత్తయ్యే వ్యర్థ పదార్థం, కిడ్నీల ద్వారా ఫిల్టర్ చేయబడుతుంది. ఇది పెరిగితే కిడ్నీల పనితీరు మందగించినట్లు సూచిస్తుంది.",
    "tsh": "థైరాయిడ్ స్టిమ్యులేటింగ్ హార్మోన్. థైరాయిడ్ గ్రంధి పనితీరును నియంత్రిస్తుంది. ఇది పెరిగితే హైపోథైరాయిడిజం ఉన్నట్లు అర్థం.",
    "free t4": "ఫ్రీ టి4. థైరాయిడ్ గ్రంధి విడుదల చేసే ప్రధాన హార్మోన్.",
    "wbc": "తెల్ల రక్త కణాలు. శరీరానికి రక్షణ కల్పించే రోగనిరోధక కణాలు.",
    "rbc": "ఎర్ర రక్త కణాలు. ఊపిరితిత్తుల నుండి శరీర భాగాలకు ఆక్సిజన్‌ను మోసుకెళ్లే కణాలు.",
    "hemoglobin": "ఎర్ర రక్త కణాలలో ఉండే ప్రోటీన్. ఇది తగ్గితే రక్తహీనత (ఎనీమియా) ఉన్నట్లు సూచిస్తుంది.",
    "platelets": "రక్తం గడ్డకట్టడానికి సహాయపడే కణాలు."
  },
  ta: {
    "total cholesterol": "இரத்தத்தில் உள்ள மொத்த கொழுப்பின் அளவு, இதில் LDL மற்றும் HDL அடங்கும்.",
    "ldl cholesterol": "குறைந்த அடர்த்தி கொழுப்புப்புரதம், பெரும்பாலும் 'கெட்ட' கொலஸ்ட்ரால் என அழைக்கப்படுகிறது. இது தமனிகளில் அடைப்பை ஏற்படுத்தலாம்.",
    "hdl cholesterol": "அதிக அடர்த்தி கொழுப்புப்புரதம், பெரும்பாலும் 'நல்ல' கொலஸ்ட்ரால் என அழைக்கப்படுகிறது. இது இரத்தத்திலிருந்து கெட்ட கொழுப்பை அகற்ற உதவுகிறது.",
    "triglycerides": "இரத்தத்தில் காணப்படும் ஒரு வகை கொழுப்பு. இது அதிகரித்தால் மாரடைப்பு அபாயம் கூடும்.",
    "glucose": "இரத்த சர்க்கரை. உடலின் ஆற்றல் மூலமாகும். இது அதிகரித்தால் நீரிழிவு நோய் இருக்கலாம்.",
    "bun": "இரத்த யூரியா நைட்ரஜன். சிறுநீரக செயல்பாட்டை அறிய உதவுகிறது.",
    "creatinine": "சிறுநீரகங்களால் வடிகட்டப்படும் தசை கழிவுப்பொருள். இது அதிகரித்தால் சிறுநீரக பாதிப்பைக் குறிக்கும்.",
    "tsh": "தைராய்டு தூண்டுதல் ஹார்மோன். இது தைராய்டு சுரப்பியை கட்டுப்படுத்துகிறது. இது அதிகரித்தால் தைராய்டு சுரப்பு குறைவாக உள்ளது என்று பொருள்.",
    "free t4": "இலவச டி4. தைராய்டு சுரப்பி சுரக்கும் முதன்மை ஹார்மோன் ஆகும்.",
    "wbc": "வெள்ளை இரத்த அணுக்கள். உடலுக்கு நோய் எதிர்ப்பு சக்தியை தரும் அணுக்கள்.",
    "rbc": "சிவப்பு இரத்த அணுக்கள். உடலுக்கு ஆக்சிஜனை கொண்டு செல்லும் அணுக்கள்.",
    "hemoglobin": "இரத்த சோகையை குறிக்கும் ஆக்சிஜனை சுமந்து செல்லும் சிவப்பு அணுக்களின் புரதம்.",
    "platelets": "இரத்தம் உறைவதற்கு உதவும் அணுக்கள்."
  }
};

const SAMPLE_REPORTS = {
  lipid: {
    id: "lipid",
    type: "Blood Test",
    score: 64,
    status: {
      en: "Action Required", es: "Acción Requerida", fr: "Action Requise",
      ar: "مطلوب اتخاذ إجراء", hi: "कार्रवाई आवश्यक", te: "చర్య తీసుకోనవలసి ఉంది", ta: "நடவடிக்கை தேவை"
    },
    title: {
      en: "Cardiovascular Lipid Profile", es: "Perfil de Lípidos Cardiovascular", fr: "Profil Lipidique Cardiovasculaire",
      ar: "مخطط الدهون القلبية الوعائية", hi: "हृदय लिपिड प्रोफाइल", te: "కార్డియోవాస్కులర్ లిపిడ్ ప్రొఫైల్", ta: "இருதய கொலஸ்ட்ரால் சுயவிவரம்"
    },
    summary: {
      en: "Your lipid panel shows elevated LDL ('bad') cholesterol and total cholesterol, while your HDL ('good') cholesterol is within the desirable range. This pattern indicates an elevated risk of plaque buildup in blood vessels. Lifestyle adjustments are recommended.",
      es: "Su panel de lípidos muestra niveles elevados de colesterol LDL ('malo') y colesterol total, mientras que su colesterol HDL ('bueno') está en el rango deseable. Esto indica un mayor riesgo de acumulación de placa. Se recomiendan cambios de estilo de vida.",
      fr: "Votre bilan lipidique montre un taux élevé de cholestérol LDL ('mauvais') et de cholestérol total, tandis que votre cholestérol HDL ('bon') se situe dans la plage souhaitable. Cela indique un risque accru d'accumulation de plaque dans les vaisseaux sanguins.",
      ar: "يظهر مخطط الدهون لديك ارتفاعًا في الكوليسترول الضار (LDL) والكوليسترول الكلي، بينما يقع الكوليسترول النافع (HDL) ضمن النطاق المرغوب فيه. يشير هذا النمط إلى زيادة خطر تراكم الترسبات في الأوعية الدموية.",
      hi: "आपका लिपिड पैनल एलडीएल ('खराब') कोलेस्ट्रॉल और कुल कोलेस्ट्रॉल के बढ़े हुए स्तर को दर्शाता है, जबकि आपका एचडीएल ('अच्छा') कोलेस्ट्रॉल वांछनीय सीमा के भीतर है। यह रक्त वाहिकाओं में प्लाक बनने के बढ़ते जोखिम का संकेत देता है। जीवनशैली में बदलाव की सिफारिश की जाती है।",
      te: "మీ లిపిడ్ ప్యానెల్ ఎల్డిఎల్ ('చెడు') కొలెస్ట్రాల్ మరియు మొత్తం కొలెస్ట్రాల్ అధికంగా ఉన్నట్లు చూపుతుంది, అయితే హెచ్డిఎల్ ('మంచి') కొలెస్ట్రాల్ కావలసిన పరిధిలోనే ఉంది. రక్తనాళాలలో కొవ్వు పేరుకుపోయే ప్రమాదం ఉందని ఇది సూచిస్తుంది. జీవనశైలిలో మార్పులు సిఫార్సు చేయబడ్డాయి.",
      ta: "உங்கள் கொலஸ்ட்ரால் சுயவிவரம் அதிக LDL ('கெட்ட') மற்றும் மொத்த கொலஸ்ட்ராலைக் காட்டுகிறது, அதே நேரத்தில் HDL ('நல்ல') விரும்பிய வரம்பிற்குள் உள்ளது. இது இரத்த நாளங்களில் கொழுப்பு அடைப்பு ஏற்படும் அபாயத்தைக் குறிக்கிறது. வாழ்க்கை முறை மாற்றங்கள் பரிந்துரைக்கப்படுகின்றன."
    },
    markers: [
      {
        name: "Total Cholesterol",
        key: "total cholesterol",
        value: 245,
        unit: "mg/dL",
        min: 100,
        max: 200,
        status: "High",
        desc: {
          en: "Overall cholesterol amount. Ideal is under 200 mg/dL.",
          es: "Cantidad total de colesterol. Lo ideal es menos de 200 mg/dL.",
          fr: "Quantité globale de cholestérol. L'idéal est inférieur à 200 mg/dL.",
          ar: "كمية الكوليسترول الإجمالية. النطاق المثالي أقل من 200 ملغ/ديسيلتر.",
          hi: "कुल कोलेस्ट्रॉल की मात्रा। आदर्श स्तर 200 mg/dL से कम है।",
          te: "మొత్తం కొలెస్ట్రాల్ పరిమాణం. ఆదర్శంగా 200 mg/dL కంటే తక్కువ ఉండాలి.",
          ta: "ஒட்டுமொத்த கொலஸ்ட்ரால் அளவு. 200 mg/dLக்கு குறைவாக இருப்பது நல்லது."
        }
      },
      {
        name: "LDL Cholesterol",
        key: "ldl cholesterol",
        value: 158,
        unit: "mg/dL",
        min: 50,
        max: 100,
        status: "High",
        desc: {
          en: "Bad cholesterol that deposits fats in arteries. High levels require attention.",
          es: "Colesterol malo que deposita grasa en las arterias. Requiere atención.",
          fr: "Mauvais cholestérol qui dépose des graisses dans les artères. Les niveaux élevés nécessitent une attention.",
          ar: "الكوليسترول الضار الذي يترسب في الشرايين. المستويات المرتفعة تتطلب الاهتمام.",
          hi: "खराब कोलेस्ट्रॉल जो धमनियों में वसा जमा करता है। उच्च स्तर पर ध्यान देने की आवश्यकता है।",
          te: "చెడు కొలెస్ట్రాల్. ఇది పెరిగితే తగిన జాగ్రత్తలు తీసుకోవాలి.",
          ta: "கெட்ட கொலஸ்ட்ரால் தமனிகளில் கொழுப்பு படிய வழிவகுக்கும். அதிக அளவு கவனம் தேவை."
        }
      },
      {
        name: "HDL Cholesterol",
        key: "hdl cholesterol",
        value: 52,
        unit: "mg/dL",
        min: 40,
        max: 90,
        status: "Normal",
        desc: {
          en: "Good cholesterol that helps clear fats from the bloodstream. Good level.",
          es: "Colesterol bueno que limpia grasa de la sangre. Buen nivel.",
          fr: "Bon cholestérol qui aide à éliminer les graisses du sang. Bon niveau.",
          ar: "الكوليسترول النافع الذي يساعد في تنظيف الدهون من مجرى الدم. مستوى جيد.",
          hi: "अच्छा कोलेस्ट्रॉल जो रक्तप्रवाह से वसा को साफ करने में मदद करता है। यह सामान्य स्तर पर है।",
          te: "మంచి కొలెస్ట్రాల్. ఇది రక్తంలో కొవ్వును శుభ్రపరచడానికి సహాయపడుతుంది.",
          ta: "நல்ல கொலஸ்ட்ரால் இரத்தத்திலிருந்து கொழுப்பை அகற்ற உதவுகிறது. சரியான அளவு."
        }
      },
      {
        name: "Triglycerides",
        key: "triglycerides",
        value: 175,
        unit: "mg/dL",
        min: 30,
        max: 150,
        status: "Borderline",
        desc: {
          en: "Fats stored in blood. Elevated levels are linked to high carb/sugar intake.",
          es: "Grasas almacenadas. Su elevación se asocia a alto consumo de carbohidratos/azúcar.",
          fr: "Graisses stockées dans le sang. Lié à une consommation élevée de glucides/sucre.",
          ar: "الدهون الثلاثية المخزنة بالدم. ترتبط المستويات المرتفعة بتناول الكربوهيدرات والسكريات.",
          hi: "रक्त में संग्रहीत वसा। बढ़ा हुआ स्तर उच्च कार्बोहाइड्रेट/चीनी के सेवन से जुड़ा है।",
          te: "రక్తంలో నిల్వ ఉండే కొవ్వులు. ఇది పెరిగితే కార్బోహైడ్రేట్లు మరియు చక్కెర వినియోగం తగ్గించాలి.",
          ta: "இரத்தத்தில் சேமிக்கப்படும் கொழுப்புகள். அதிக மாவுச்சத்து/சர்க்கரை நுகர்வுடன் தொடர்புடையது."
        }
      }
    ],
    habits: [
      {
        id: "lipid_diet",
        text: {
          en: "Reduce saturated fats intake (red meat, butter) and eliminate trans fats.",
          es: "Reducir la ingesta de grasas saturadas (carnes rojas, mantequilla) y eliminar grasas trans.",
          fr: "Réduire l'apport en graisses saturées (viande rouge, beurre) et éliminer les acides gras trans.",
          ar: "تقليل تناول الدهون المشبعة (اللحوم الحمراء، الزبدة) وتجنب الدهون المتحولة تمامًا.",
          hi: "संतृप्त वसा (लाल मांस, मक्खन) का सेवन कम करें और ट्रांस वसा को समाप्त करें।",
          te: "సంతృప్త కొవ్వుల (ఎర్ర మాంసం, వెన్న) వాడకం తగ్గించండి మరియు ట్రాన్స్ కొవ్వులను నివారించండి.",
          ta: "நிறைவுற்ற கொழுப்புகள் (சிவப்பு இறைச்சி, வெண்ணெய்) உட்கொள்வதைக் குறைத்து, டிரான்ஸ் கொழுப்புகளைத் தவிர்க்கவும்."
        }
      },
      {
        id: "lipid_fiber",
        text: {
          en: "Increase soluble fiber consumption (oatmeal, beans, lentils, apples).",
          es: "Incrementar el consumo de fibra soluble (avena, frijoles, lentejas, manzanas).",
          fr: "Augmenter la consommation de fibres solubles (flacons d'avoine, haricots, lentilles, pommes).",
          ar: "زيادة استهلاك الألياف القابلة للذوبان (الشوفان، الفاصوليا، العدس، التفاح).",
          hi: "घुलनशील फाइबर (ओट्स, बीन्स, दालें, सेब) का सेवन बढ़ाएं।",
          te: "కరగని పీచు పదార్థాలు (ఓట్స్, గింజలు, ఆపిల్) ఎక్కువగా తీసుకోండి.",
          ta: "கரையக்கூடிய நார்சத்து உணவுகளை (ஓட்ஸ், பீன்ஸ், பருப்பு, ஆப்பிள்) அதிகம் உட்கொள்ளவும்."
        }
      },
      {
        id: "lipid_cardio",
        text: {
          en: "Engage in at least 30 minutes of moderate aerobic exercise 5 times a week.",
          es: "Realizar al menos 30 minutos de ejercicio aeróbico moderado 5 veces por semana.",
          fr: "Faire au moins 30 minutes d'exercice aérobique modéré 5 fois par semaine.",
          ar: "ممارسة الرياضة الهوائية المعتدلة لمدة 30 دقيقة على الأقل 5 مرات في الأسبوع.",
          hi: "सप्ताह में 5 बार कम से कम 30 मिनट मध्यम एरोबिक व्यायाम करें।",
          te: "వారానికి 5 సార్లు కనీసం 30 నిమిషాల పాటు వ్యాయామం చేయండి.",
          ta: "வாரத்திற்கு 5 முறை குறைந்தது 30 நிமிடங்கள் மிதமான உடற்பயிற்சி செய்யவும்."
        }
      }
    ],
    questions: [
      {
        priority: "high",
        text: {
          en: "Given my LDL level of 158, should we discuss starting a statin medication, or should I try lifestyle changes first for 3 months?",
          es: "Dado mi nivel de LDL de 158, ¿deberíamos considerar medicamentos (estatinas) o intentar cambios de hábitos durante 3 meses primero?",
          fr: "Étant donné mon taux de LDL de 158, devrions-nous envisager des statines ou essayer des modifications du mode de vie pendant 3 mois d'abord ?",
          ar: "بالنظر إلى مستوى LDL البالغ 158، هل يجب أن نناقش البدء في تناول أدوية الستاتين، أم يجب أن أحاول تغيير نمط حياتي أولاً لمدة 3 أشهر؟",
          hi: "मेरे एलडीएल स्तर 158 को देखते हुए, क्या हमें स्टैटिन दवा शुरू करने पर चर्चा करनी चाहिए, या मुझे पहले 3 महीने तक जीवनशैली में बदलाव का प्रयास करना चाहिए?",
          te: "నా LDL స్థాయి 158 ఉన్నందున, నేను మందులు వాడాలా లేక 3 నెలల పాటు జీవనశైలి మార్పులు ప్రయత్నించాలా?",
          ta: "என் LDL அளவு 158 ஆக இருப்பதால், மாத்திரை தேவையா அல்லது 3 மாதங்கள் வாழ்க்கை முறை மாற்றங்களை முயற்சிக்கலாமா?"
        }
      },
      {
        priority: "medium",
        text: {
          en: "Are there other cardiovascular risk factors, such as blood pressure or family history, that we should review together?",
          es: "¿Existen otros factores de riesgo cardiovascular, como presión arterial o historial familiar, que debamos evaluar?",
          fr: "Y a-t-il d'autres facteurs de risque cardiovasculaire, comme la pression artérielle ou les antécédents familiaux, que nous devrions examiner ?",
          ar: "هل هناك عوامل خطر أخرى للقلب والأوعية الدموية، مثل ضغط الدم أو التاريخ العائلي، التي يجب أن نراجعها معًا؟",
          hi: "क्या हृदय रोग के अन्य जोखिम कारक हैं, जैसे रक्तचाप या पारिवारिक इतिहास, जिनकी हमें समीक्षा करनी चाहिए?",
          te: "రక్తపోటు లేదా కుటుంబ చరిత్ర వంటి ఇతర గుండె జబ్బుల ప్రమాద కారకాలు ఏవైనా ఉన్నాయా?",
          ta: "இரத்த அழுத்தம் அல்லது குடும்ப வரலாறு போன்ற பிற இருதய நோய் அபாய காரணிகள் ஏதேனும் உள்ளனவா?"
        }
      }
    ]
  },
  cmp: {
    id: "cmp",
    type: "Blood Test",
    score: 72,
    status: {
      en: "Borderline", es: "Limítrofe", fr: "Limite",
      ar: "حدي", hi: "सीमावर्ती", te: "సరిహద్దు రేఖ", ta: "எல்லைக்கோடு"
    },
    title: {
      en: "Comprehensive Metabolic Panel", es: "Panel Metabólico Completo", fr: "Bilan Métabolique Complet",
      ar: "لوحة التمثيل الغذائي الشاملة", hi: "व्यापक चयापचय पैनल", te: "సమగ్ర జీవక్రియ ప్యానెల్", ta: "விரிவான வளர்சிதை மாற்ற சுயவிவரம்"
    },
    summary: {
      en: "Your glucose levels are slightly elevated (Prediabetes range), and kidney indicators (BUN/Creatinine) are normal. Mild hydration improvements and dietary carbohydrate reduction are advised.",
      es: "Sus niveles de glucosa están ligeramente elevados (rango de Prediabetes), y los indicadores renales están normales. Se aconseja mejorar la hidratación y reducir carbohidratos en la dieta.",
      fr: "Vos taux de glucose sont légèrement élevés (zone de prédiabète), et les indicateurs rénaux (BUN/Créatinine) sont normaux. Une meilleure hydratation et une réduction des glucides sont conseillées.",
      ar: "مستويات الجلوكوز لديك مرتفعة قليلاً (نطاق ما قبل السكري)، ومؤشرات وظائف الكلى طبيعية. يُنصح بتحسين الترطيب وتقليل الكربوهيدرات.",
      hi: "आपका ग्लूकोज स्तर थोड़ा बढ़ा हुआ है (प्रीडायबिटीज रेंज), और गुर्दे के संकेतक (BUN/क्रिएटिनिन) सामान्य हैं। हल्की पानी की मात्रा बढ़ाने और आहार में कार्बोहाइड्रेट कम करने की सलाह दी जाती है।",
      te: "మీ గ్లూకోజ్ స్థాయిలు కొద్దిగా ఎక్కువగా ఉన్నాయి (మధుమేహానికి ముందు ఉండే పరిధి), కిడ్నీ సూచికలు సాధారణంగా ఉన్నాయి. నీరు ఎక్కువగా తాగడం మరియు ఆహారంలో పిండి పదార్థాలను తగ్గించడం మంచిది.",
      ta: "உங்கள் சர்க்கரை அளவு சற்று அதிகமாக உள்ளது (நீரிழிவு நோய்க்கு முந்தைய நிலை), சிறுநீரக அளவுகள் சாதாரணமாக உள்ளன. அதிக நீர் அருந்தவும், மாவுச்சத்தை குறைக்கவும் அறிவுறுத்தப்படுகிறது."
    },
    markers: [
      {
        name: "Glucose",
        key: "glucose",
        value: 108,
        unit: "mg/dL",
        min: 70,
        max: 99,
        status: "Borderline",
        desc: {
          en: "Blood sugar level after fasting. Levels between 100-125 suggest prediabetes.",
          es: "Nivel de azúcar en sangre en ayunas. Valores entre 100-125 sugieren prediabetes.",
          fr: "Taux de sucre dans le sang à jeun. Les valeurs entre 100 et 125 suggèrent un prédiabète.",
          ar: "مستوى سكر الدم في حالة الصيام. تشير المستويات بين 100-125 إلى ما قبل السكري.",
          hi: "उपवास के बाद रक्त शर्करा का स्तर। 100-125 के बीच का स्तर प्रीडायबिटीज का सुझाव देता है।",
          te: "ఉపవాసం తర్వాత రక్తంలో చక్కెర స్థాయి. 100-125 మధ్య ఉంటే మధుమేహం వచ్చే అవకాశం ఉంది.",
          ta: "வெறும் வயிற்றில் இரத்த சர்க்கரை அளவு. 100-125க்கு இடைப்பட்ட அளவு நீரிழிவுக்கு முந்தைய நிலையைக் குறிக்கும்."
        }
      },
      {
        name: "Blood Urea Nitrogen (BUN)",
        key: "bun",
        value: 16,
        unit: "mg/dL",
        min: 7,
        max: 20,
        status: "Normal",
        desc: {
          en: "Waste product from protein breakdown. Indicates good kidney filtration.",
          es: "Desecho de proteínas en sangre. Indica buena filtración de los riñones.",
          fr: "Déchet de la dégradation des protéines. Indique une bonne filtration rénale.",
          ar: "مخلفات تكسير البروتين. يشير إلى ترشيح كلوي جيد.",
          hi: "प्रोटीन टूटने से निकलने वाला अपशिष्ट उत्पाद। गुर्दे की अच्छी निस्पंदन कार्यप्रणाली को दर्शाता है।",
          te: "ప్రోటీన్ విచ్ఛిన్నం నుండి వచ్చే వ్యర్థం. కిడ్నీల వడపోత బాగుందని సూచిస్తుంది.",
          ta: "புரதச் சிதைவிலிருந்து வெளியேறும் கழிவுப்பொருள். சிறுநீரகத்தின் நல்ல செயல்பாட்டைக் குறிக்கிறது."
        }
      },
      {
        name: "Creatinine",
        key: "creatinine",
        value: 0.9,
        unit: "mg/dL",
        min: 0.6,
        max: 1.2,
        status: "Normal",
        desc: {
          en: "Muscle waste product filtered by kidneys. Normal levels show healthy kidney function.",
          es: "Desecho muscular filtrado por riñones. Nivel normal muestra buena función renal.",
          fr: "Déchet musculaire filtré par les reins. Un taux normal indique une bonne fonction rénale.",
          ar: "الكرياتينين، فضلات عضلية تصفيها الكلى. المستويات الطبيعية تدل على صحة الكلى.",
          hi: "मांसपेशियों का अपशिष्ट उत्पाद जिसे गुर्दे छानते हैं। सामान्य स्तर स्वस्थ गुर्दे की कार्यप्रणाली को दर्शाता है।",
          te: "కండరాల వ్యర్థం. కిడ్నీల పనితీరు బాగుందని సూచిస్తుంది.",
          ta: "சிறுநீரகங்களால் வடிகட்டப்படும் தசை கழிவுப்பொருள். சரியான அளவு சிறுநீரக ஆரோக்கியத்தைக் குறிக்கிறது."
        }
      }
    ],
    habits: [
      {
        id: "cmp_sugar",
        text: {
          en: "Limit refined sugars, sweets, sugary beverages, and processed carbohydrates.",
          es: "Limitar azúcares refinados, dulces, bebidas azucaradas y carbohidratos procesados.",
          fr: "Limiter les sucres raffinés, les boissons sucrées et les glucides transformés.",
          ar: "حد من السكريات المكررة والحلويات والمشروبات الغازية والكربوهيدرات المصنعة.",
          hi: "परिष्कृत शर्करा, मिठाई, शर्करा युक्त पेय पदार्थ और प्रसंस्कृत कार्बोहाइड्रेट को सीमित करें।",
          te: "శుద్ధి చేసిన చక్కెరలు, స్వీట్లు, తీపి పానీయాలు మరియు మైదా పిండి వంటి వాటిని పరిమితం చేయండి.",
          ta: "சுத்திகரிக்கப்பட்ட சர்க்கரை, இனிப்புகள், குளிர்பானங்கள் மற்றும் பதப்படுத்தப்பட்ட மாவுச்சத்துகளைக் குறைக்கவும்."
        }
      },
      {
        id: "cmp_water",
        text: {
          en: "Drink at least 2.5 liters of clean water daily to optimize kidney filtration.",
          es: "Beber al menos 2.5 litros de agua limpia diariamente para optimizar la filtración renal.",
          fr: "Boire au moins 2,5 litres d'eau par jour pour optimiser la filtration rénale.",
          ar: "اشرب ما لا يقل عن 2.5 لتر من الماء يوميًا لتحسين وظائف الكلى التصفوية.",
          hi: "गुर्दे की निस्पंदन कार्यप्रणाली को अनुकूलित करने के लिए प्रतिदिन कम से कम 2.5 लीटर साफ पानी पिएं।",
          te: "కిడ్నీల వడపోతను మెరుగుపరచడానికి రోజుకు కనీసం 2.5 లీటర్ల నీరు తాగండి.",
          ta: "சிறுநீரக செயல்பாட்டை மேம்படுத்த தினமும் குறைந்தது 2.5 லிட்டர் தண்ணீர் குடிக்கவும்."
        }
      }
    ],
    questions: [
      {
        priority: "high",
        text: {
          en: "Does my fasting glucose of 108 mg/dL indicate prediabetes, and should I take an HbA1c test for verification?",
          es: "¿Mi glucosa en ayunas de 108 mg/dL indica prediabetes, y debería realizarme una prueba de HbA1c para confirmar?",
          fr: "Mon taux de glucose à jeun de 108 mg/dL indique-t-il un prédiabète, et devrais-je faire un test HbA1c ?",
          ar: "هل تشير نسبة الجلوكوز في الصيام 108 إلى مرحلة ما قبل السكري، وهل يجب أن أجري اختبار HbA1c للتأكيد؟",
          hi: "क्या मेरा उपवास ग्लूकोज 108 mg/dL प्रीडायबिटीज का संकेत देता है, और क्या मुझे पुष्टि के लिए HbA1c परीक्षण कराना चाहिए?",
          te: "నా గ్లూకోజ్ స్థాయి 108 mg/dL మధుమేహానికి ముందు దశను సూచిస్తుందా, నేను HbA1c పరీక్ష చేయించుకోవాలా?",
          ta: "என் வெறும் வயிற்று சர்க்கரை அளவு 108 mg/dL நீரிழிவுக்கு முந்தைய நிலையைக் குறிக்கிறதா, நான் HbA1c பரிசோதனை செய்ய வேண்டுமா?"
        }
      }
    ]
  },
  cbc: {
    id: "cbc",
    type: "Blood Test",
    score: 58,
    status: {
      en: "Action Required", es: "Acción Requerida", fr: "Action Requise",
      ar: "مطلوب اتخاذ إجراء", hi: "कार्रवाई आवश्यक", te: "చర్య తీసుకోనవలసి ఉంది", ta: "நடவடிக்கை தேவை"
    },
    title: {
      en: "Complete Blood Count", es: "Hemograma Completo", fr: "Hémogramme Complet",
      ar: "فحص تعداد الدم الكامل", hi: "पूर्ण रक्त गणना", te: "సంపూర్ణ రక్త పరీక్ష", ta: "முழுமையான இரத்த அணுக்கள் எண்ணிக்கை"
    },
    summary: {
      en: "Your report shows low Hemoglobin and Red Blood Cell count, which is characteristic of moderate anemia. This explains symptoms like fatigue or lightheadedness. Iron-rich diet adjustments are crucial.",
      es: "Su reporte muestra hemoglobina y recuento de glóbulos rojos bajos, característico de una anemia moderada. Esto explica la fatiga o mareos. Se recomiendan ajustes de dieta rica en hierro.",
      fr: "Votre rapport montre un faible taux d'hémoglobine et de globules rouges, caractéristique d'une anémie modérée. Cela explique la fatigue. Des ajustements alimentaires en fer sont cruciaux.",
      ar: "يظهر تقريرك انخفاضًا في مستويات الهيموجلوبين وخلايا الدم الحمراء، وهو ما يميز فقر الدم المعتدل. هذا يفسر أعراض التعب أو الدوار.",
      hi: "आपकी रिपोर्ट कम हीमोग्लोबिन और लाल रक्त कोशिकाओं की संख्या दर्शाती है, जो मध्यम एनीमिया की विशेषता है। यह थकान या चक्कर आने जैसे लक्षणों की व्याख्या करता है। आयरन युक्त आहार में बदलाव महत्वपूर्ण हैं।",
      te: "మీ నివేదికలో హిమోగ్లోబిన్ మరియు ఎర్ర రక్త కణాల సంఖ్య తక్కువగా ఉన్నట్లు ఉంది, ఇది రక్తహీనతను సూచిస్తుంది. ఇది నీరసం మరియు అలసటకు దారితీస్తుంది. ఐరన్ ఎక్కువగా ఉండే ఆహారం తీసుకోవాలి.",
      ta: "உங்கள் அறிக்கையில் ஹீமோகுளோபின் மற்றும் சிவப்பு இரத்த அணுக்களின் எண்ணிக்கை குறைவாக உள்ளது, இது இரத்த சோகையைக் குறிக்கிறது. இது சோர்வு அல்லது தலைச்சுற்றலை விளக்குகிறது. இரும்புச்சத்து நிறைந்த உணவு அவசியம்."
    },
    markers: [
      {
        name: "White Blood Cells (WBC)",
        key: "wbc",
        value: 6.2,
        unit: "x10^3/uL",
        min: 4.5,
        max: 11.0,
        status: "Normal",
        desc: {
          en: "Immune defense cells. Levels are healthy, indicating no acute infection.",
          es: "Células de defensa inmune. Rango saludable, indica que no hay infección activa.",
          fr: "Cellules immunitaires. Taux sain, indiquant l'absence d'infection aiguë.",
          ar: "خلايا الدفاع المناعي. المستويات صحية، مما يدل على عدم وجود عدوى حادة.",
          hi: "प्रतिरक्षा सुरक्षा कोशिकाएं। स्तर स्वस्थ हैं, जो किसी गंभीर संक्रमण का संकेत नहीं देते हैं।",
          te: "రోగనిరోధక కణాలు. వీటి స్థాయిలు సాధారణంగా ఉన్నాయి, ఎటువంటి ఇన్ఫెక్షన్ లేదు.",
          ta: "நோய் எதிர்ப்பு அணுக்கள். ஆரோக்கியமான அளவு, கடுமையான தொற்று எதுவும் இல்லை என்பதைக் குறிக்கிறது."
        }
      },
      {
        name: "Red Blood Cells (RBC)",
        key: "rbc",
        value: 3.8,
        unit: "x10^6/uL",
        min: 4.2,
        max: 5.9,
        status: "Low",
        desc: {
          en: "Cells that transport oxygen. Low count leads to body tissues receiving less oxygen.",
          es: "Células que llevan oxígeno. Un conteo bajo causa menor oxigenación en los tejidos.",
          fr: "Cellules transportant l'oxygène. Un faible taux entraîne une baisse d'oxygénation.",
          ar: "الخلايا التي تنقل الأكسجين. يؤدي انخفاض العدد إلى قلة الأكسجين بالأنسجة.",
          hi: "ऑक्सीजन ले जाने वाली कोशिकाएं। कम संख्या के कारण शरीर के ऊतकों को कम ऑक्सीजन मिलती है।",
          te: "ఆక్సిజన్‌ను మోసుకెళ్లే కణాలు. ఇవి తగ్గితే శరీర కణాలకు ఆక్సిజన్ సరఫరా తగ్గుతుంది.",
          ta: "ஆக்ஸிஜனைக் கொண்டு செல்லும் அணுக்கள். குறைவான எண்ணிக்கை திசுக்களுக்கு ஆக்சிஜன் குறைவதைக் குறிக்கும்."
        }
      },
      {
        name: "Hemoglobin",
        key: "hemoglobin",
        value: 10.5,
        unit: "g/dL",
        min: 12.0,
        max: 17.5,
        status: "Low",
        desc: {
          en: "Oxygen-carrying protein. Low levels suggest anemia, causing fatigue.",
          es: "Proteína que transporta el oxígeno. Niveles bajos sugieren anemia y causan fatiga.",
          fr: "Protéine de transport d'oxygène. Des taux bas suggèrent une anémie, causant de la fatigue.",
          ar: "البروتين الحامل للأكسجين. تشير المستويات المنخفضة إلى فقر الدم المسبب للتعب.",
          hi: "ऑक्सीजन ले जाने वाला प्रोटीन। कम स्तर एनीमिया का सुझाव देता है, जिससे थकान होती है।",
          te: "ఆక్సిజన్‌ను చేరవేసే ప్రోటీన్. ఇది తగ్గితే రక్తహీనత మరియు అలసట వస్తుంది.",
          ta: "ஆக்ஸிஜன் சுமந்து செல்லும் புரதம். குறைந்த அளவு இரத்த சோகையைக் குறிக்கும், சோர்வை உண்டாக்கும்."
        }
      }
    ],
    habits: [
      {
        id: "cbc_iron",
        text: {
          en: "Consume iron-rich foods: spinach, red meat, lentils, pumpkin seeds, and fortified cereals.",
          es: "Consumir alimentos ricos en hierro: espinacas, carnes rojas, lentejas y cereales fortificados.",
          fr: "Consommer des aliments riches en fer : épinards, viande rouge, lentilles, graines de citrouille.",
          ar: "تناول الأطعمة الغنية بالحديد: السبانخ، اللحوم الحمراء، العدس، وبذور اليقطين.",
          hi: "आयरन से भरपूर खाद्य पदार्थों का सेवन करें: पालक, लाल मांस, दालें, कद्दू के बीज और फोर्टिफाइड अनाज।",
          te: "ఐరన్ ఎక్కువగా ఉండే ఆహారం తీసుకోండి: పాలకూర, ఎర్ర మాంసం, పప్పులు మరియు గింజలు.",
          ta: "இரும்புச்சத்து நிறைந்த உணவுகளை உட்கொள்ளவும்: கீரை, சிவப்பு இறைச்சி, பருப்பு மற்றும் பூசணி விதைகள்."
        }
      },
      {
        id: "cbc_vitc",
        text: {
          en: "Pair iron foods with Vitamin C (citrus, strawberries, bell peppers) to boost absorption.",
          es: "Acompañar alimentos de hierro con Vitamina C (cítricos, fresas) para aumentar la absorción.",
          fr: "Associer le fer à la Vitamine C (agrumes, fraises, poivrons) pour stimuler l'absorption.",
          ar: "تناول فيتامين ج (الحمضيات، الفراولة) مع الأطعمة الغنية بالحديد لزيادة الامتصاص.",
          hi: "आयरन अवशोषण को बढ़ाने के लिए आयरन युक्त खाद्य पदार्थों के साथ विटामिन सी (खट्टे फल, स्ट्रॉबेरी) का सेवन करें।",
          te: "ఐరన్ శోషణను పెంచడానికి విటమిన్ సి (నిమ్మకాయ, నారింజ, స్ట్రాబెర్రీ) కలిపి తీసుకోండి.",
          ta: "இரும்புச்சத்து உறிஞ்சுதலை அதிகரிக்க வைட்டமின் சி (சிட்ரஸ் பழங்கள், ஸ்ட்ராபெர்ரி) உணவுகளுடன் சேர்த்துக்கொள்ளவும்."
        }
      }
    ],
    questions: [
      {
        priority: "high",
        text: {
          en: "Based on my low hemoglobin of 10.5 g/dL, do you recommend iron supplements, and if so, what dosage and form?",
          es: "Con mi hemoglobina baja de 10.5 g/dL, ¿recomienda suplementos de hierro?, y si es así, ¿en qué dosis?",
          fr: "Compte tenu de mon taux d'hémoglobine bas de 10,5 g/dL, recommandez-vous des suppléments de fer ?",
          ar: "بناءً على انخفاض الهيموجلوبين البالغ 10.5، هل توصي بمكملات الحديد، وما هي الجرعة؟",
          hi: "मेरे कम हीमोग्लोबिन 10.5 g/dL के आधार पर, क्या आप आयरन सप्लीमेंट की सलाह देते हैं, और यदि हाँ, तो किस खुराक में?",
          te: "నా హిమోగ్లోబిన్ 10.5 g/dL ఉన్నందున, ఐరన్ టాబ్లెట్లు వాడమంటారా, ఏ మోతాదులో వాడాలి?",
          ta: "என் ஹீமோகுளோபின் அளவு 10.5 g/dL ஆக இருப்பதால், இரும்புச்சத்து மாத்திரைகள் பரிந்துரைக்கிறீர்களா, என்ன அளவு?"
        }
      }
    ]
  },
  thyroid: {
    id: "thyroid",
    type: "Blood Test",
    score: 60,
    status: {
      en: "Action Required", es: "Acción Requerida", fr: "Action Requise",
      ar: "مطلوب اتخاذ إجراء", hi: "कार्रवाई आवश्यक", te: "చర్య తీసుకోనవలసి ఉంది", ta: "நடவடிக்கை தேவை"
    },
    title: {
      en: "Thyroid Function Panel", es: "Panel de Función Tiroidea", fr: "Bilan Fonctionnel Thyroïdien",
      ar: "لوحة وظائف الغدة الدرقية", hi: "थायरॉयड कार्यप्रणाली पैनल", te: "థైరాయిడ్ ఫంక్షన్ ప్యానెల్", ta: "தைராய்டு செயல்பாடு சுயவிவரம்"
    },
    summary: {
      en: "Your TSH is elevated and Free T4 is slightly low. This indicates hypothyroidism (an underactive thyroid gland), which can slow down metabolism and cause lethargy, cold sensitivity, and weight gain.",
      es: "Su TSH está elevada y la T4 libre está ligeramente baja. Esto indica hipotiroidismo (tiroides poco activa), lo que puede ralentizar el metabolismo y causar letargo y aumento de peso.",
      fr: "Votre TSH est élevée et la T4 libre est légèrement basse. Cela indique une hypothyroïdie, qui peut ralentir le métabolisme et causer de la fatigue.",
      ar: "مستوى الهرمون المنشط للدرقية (TSH) لديك مرتفع ومستوى T4 الحر منخفض قليلاً. هذا يشير إلى قصور الغدة الدرقية.",
      hi: "आपका टीएसएच बढ़ा हुआ है और फ्री टी4 थोड़ा कम है। यह हाइपोथायरायडिज्म (एक कम सक्रिय थायरॉयड ग्रंथि) को इंगित करता है, जो चयापचय को धीमा कर सकता है और सुस्ती, ठंड के प्रति संवेदनशीलता और वजन बढ़ा सकता है।",
      te: "మీ TSH ఎక్కువగా ఉంది మరియు ఫ్రీ T4 కొద్దిగా తక్కువగా ఉంది. ఇది హైపోథైరాయిడిజం (థైరాయిడ్ పనితీరు మందగించడం) ను సూచిస్తుంది, దీనివల్ల అలసట మరియు బరువు పెరగడం జరగవచ్చు.",
      ta: "உங்கள் TSH அளவு அதிகமாகவும், இலவச T4 சற்று குறைவாகவும் உள்ளது. இது தைராய்டு சுரப்பு குறைபாட்டைக் குறிக்கிறது, இது வளர்சிதை மாற்றத்தை மெதுவாக்கும், சோர்வு மற்றும் எடை அதிகரிப்பை உண்டாக்கும்."
    },
    markers: [
      {
        name: "Thyroid Stimulating Hormone (TSH)",
        key: "tsh",
        value: 6.8,
        unit: "uIU/mL",
        min: 0.45,
        max: 4.5,
        status: "High",
        desc: {
          en: "Pituitary hormone that signals the thyroid. High levels indicate the thyroid needs stimulation.",
          es: "Hormona de la hipófisis que activa la tiroides. Niveles altos indican que la tiroides necesita estímulo.",
          fr: "Hormone hypophysaire signalant la thyroïde. Des taux élevés indiquent que la thyroïde a besoin de stimulation.",
          ar: "هرمون الغدة النخامية الذي ينشط الدرقية. المستويات المرتفعة تشير إلى الحاجة لتحفيز الغدة.",
          hi: "पिट्यूटरी हार्मोन जो थायरॉयड को संकेत देता है। उच्च स्तर इंगित करता है कि थायरॉयड को उत्तेजना की आवश्यकता है।",
          te: "మెదడులోని పిట్యూటరీ గ్రంధి విడుదల చేసే హార్మోన్. ఇది పెరిగితే థైరాయిడ్ పనితీరు సరిగ్గా లేదని అర్థం.",
          ta: "தைராய்டைத் தூண்டும் ஹார்மோன். அதிக அளவு தைராய்டு சுரப்பியைத் தூண்ட வேண்டும் என்பதைக் குறிக்கிறது."
        }
      },
      {
        name: "Free T4 (Thyroxine)",
        key: "free t4",
        value: 0.72,
        unit: "ng/dL",
        min: 0.82,
        max: 1.77,
        status: "Low",
        desc: {
          en: "Active thyroid hormone circulating. Low levels signal insufficient thyroid output.",
          es: "Hormona tiroidea activa en circulación. Niveles bajos confirman producción insuficiente.",
          fr: "Hormone thyroïdienne active. Des taux bas signalent une production thyroïdienne insuffisante.",
          ar: "هرمون الثايروكسين الحر. تشير المستويات المنخفضة إلى قصور إنتاج الغدة.",
          hi: "सक्रिय थायरॉयड हार्मोन। कम स्तर अपर्याप्त थायरॉयड उत्पादन का संकेत देता है।",
          te: "రక్తంలో చురుకుగా ఉండే థైరాయిడ్ హార్మోన్. ఇది తగ్గితే థైరాయిడ్ గ్రంధి హార్మోన్లను సరిగ్గా విడుదల చేయడం లేదని అర్థం.",
          ta: "இரத்தத்தில் உள்ள தைராய்டு ஹಾರ್மோன். குறைந்த அளவு தைராய்டு சுரப்பு போதாது என்பதைக் குறிக்கிறது."
        }
      }
    ],
    habits: [
      {
        id: "thyroid_selenium",
        text: {
          en: "Eat selenium-rich foods like Brazil nuts (1-2 per day) and sunflower seeds to aid thyroid function.",
          es: "Consumir alimentos con selenio como nueces de Brasil (1-2 al día) para apoyar la función tiroidea.",
          fr: "Manger des aliments riches en sélénium comme les noix du Brésil (1-2 par jour) et les graines de tournesol.",
          ar: "تناول الأطعمة الغنية بالسيلينيوم مثل الجوز البرازيلي (1-2 يوميًا) وبذور عباد الشمس.",
          hi: "थायरॉयड कार्यप्रणाली में सहायता के लिए सेलेनियम से भरपूर खाद्य पदार्थ जैसे ब्राजील नट्स (प्रतिदिन 1-2) और सूरजमुखी के बीज खाएं।",
          te: "థైరాయిడ్ పనితీరుకు సహాయపడే బ్రెజిల్ నట్స్ (రోజుకు 1-2) మరియు పొద్దుతిరుగుడు గింజలు తీసుకోండి.",
          ta: "தைராய்டு செயல்பாட்டிற்கு உதவ பிரேசில் பருப்புகள் (தினமும் 1-2) மற்றும் சூரியகாந்தி விதைகள் போன்றவற்றை உட்கொள்ளவும்."
        }
      },
      {
        id: "thyroid_sleep",
        text: {
          en: "Prioritize 8 hours of restorative sleep to help manage stress-induced cortisol, which slows the thyroid.",
          es: "Priorizar 8 horas de sueño reparador para controlar el cortisol, que interfiere con la tiroides.",
          fr: "Prioriser 8 heures de sommeil réparateur pour gérer le cortisol lié au stress.",
          ar: "احرص على النوم لمدة 8 ساعات يوميًا للمساعدة في تقليل التوتر الذي يؤثر سلبيًا على الغدة.",
          hi: "तनाव-प्रेरित कोर्टिसोल को प्रबंधित करने में मदद के लिए 8 घंटे की आरामदायक नींद को प्राथमिकता दें, जो थायरॉयड को धीमा करता है।",
          te: "ఒత్తిడిని తగ్గించి థైరాయిడ్ పనితీరును మెరుగుపరచడానికి రోజుకు 8 గంటల నిద్రను అలవాటు చేసుకోండి.",
          ta: "தைராய்டை மெதுவாக்கும் மன அழுத்த ஹார்மோனைக் கட்டுப்படுத்த 8 மணிநேர நல்ல தூக்கத்திற்கு முன்னுரிமை கொடுங்கள்."
        }
      }
    ],
    questions: [
      {
        priority: "high",
        text: {
          en: "Given my elevated TSH of 6.8 and low T4 of 0.72, is thyroid replacement hormone (like levothyroxine) indicated for me?",
          es: "Con mi TSH alta de 6.8 y T4 baja de 0.72, ¿está indicado el tratamiento con hormona tiroidea (levotiroxina)?",
          fr: "Étant donné ma TSH de 6,8 et ma T4 de 0,72, un traitement de remplacement (lévothyroxine) est-il indiqué ?",
          ar: "نظرًا لارتفاع TSH البالغ 6.8 وانخفاض T4 البالغ 0.72، هل يوصى بهرمون بديل (مثل الليفوثيروكسين)؟",
          hi: "मेरे बढ़े हुए टीएसएच 6.8 और कम टी4 0.72 को देखते हुए, क्या मेरे लिए थायरॉयड रिप्लेसमेंट हार्मोन (जैसे लेवोथायरोक्सिन) की आवश्यकता है?",
          te: "నా TSH 6.8 మరియు T4 0.72 ఉన్నందున, నేను థైరాయిడ్ మందులు (లెవోథైరాక్సిన్ వంటివి) వాడాలా?",
          ta: "என் TSH 6.8 மற்றும் T4 0.72 ஆக இருப்பதால், தைராய்டு மாத்திரை (லெவோதைராக்சின்) தேவையா?"
        }
      }
    ]
  }
};
