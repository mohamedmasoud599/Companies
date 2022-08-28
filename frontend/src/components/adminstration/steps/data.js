const corps = [
  "اشاره",
  "سكرتاريه",
  "اجهزة قيادة",
  "إدارة التجنيد والتعبئة",
  "إدارة المياه",
  "اكادمية ناصر العسكرية",
  "الاسلحة والذخيرة",
  "الأشغال العسكرية",
  "الإطفاء",
  "الأمانة العامة لوزارة الدفاع",
  "الأمن الغذائي",
  "التأمين والمعاشات",
  "التدريب المهني",
  "التعيينات",
  "الحاكم العام لقطاع غزة",
  "الحرب الالكترونية",
  "الحرب الكيماوية",
  "الحرس الجمهوري",
  "الحريق",
  "الخدمات البيطرية",
  "الخدمات الطبية",
  "الدفاع الجوي",
  "الدفاع الشعبي",
  "السجلات العسكرية",
  "الشئون المالية",
  "الشئون المعنوية",
  "الصاعقة",
  "الصاعقة الفلسطينية",
  "القضاء العسكري",
  "القوات البحرية",
  "القوات الجوية",
  "الكلية الحربية",
  "الكلية الفنية",
  "المتاحف",
  "المحاكم العسكرية",
  "المخابرات الحربية والاستطلاع",
  "المدرسة الثانوية بالاسماعيلية",
  "المدرسة الثانوية بالعامرية",
  "المدرسة الثانوية بالهرم",
  "المدرسة الرياضية بالهايكستب",
  "المدرعات",
  "المدعي العام",
  "المدفعية",
  "المركبات",
  "المركز الرياضي",
  "المساحة العسكرية",
  "المشاه",
  "المشروعات الكبرى",
  "المطبوعات والنشر",
  "المظلات",
  "المعهد الفني",
  "المقر العام",
  "المهمات",
  "المهندسين",
  "الموسيقى العسكرية",
  "النقل",
  "الهيئة الهندسية",
  "الوقود",
  "جمعية المحاربين القدماء",
  "جهاز الاستطلاع",
  "جهاز الخدمة العامة",
  "جهاز الخدمة الوطنية",
  "جهاز الرياضي العسكري",
  "جهاز النقل العام",
  "جهاز مشروعات الاراضي",
  "حرس الحدود",
  "دار المحفوظات",
  "ذخيرة تدريب",
  "ذخيرة عمليات",
  "شركة النصر للكيماويات",
  "شئون الضباط",
  "شئون عامليين مدنيين",
  "صندوق الاسكان",
  "صندوق التأمين التكميلي",
  "التأمين الخاص",
  "صندوق الجلاء",
  "قيادة الجيش الثالث",
  "قيايدة الجيش الثاني",
  "قيادة المنطقة الجنوبية",
  "قيادة المنطقة الشمالية",
  "قيادة المنطقة الغربية",
  "قيادة المنطقة المركزية",
  "كلية الظباط الاحتياط",
  "كلية العلوم والادارة",
  "كلية القادة والاركان",
  "كوين سيرفيس",
  "مدرسة التربية الرايضية",
  "مدرسة السكرتارية العسكرية",
  "مركز البحوث الفنية",
  "مركز الدراسات الاستراتيجية",
  "مركز دراسات نظم الدفاع",
  "معهد اللغات",
  "معهد ظباط الصف",
  "نظم تامعلومات",
  "هيئة التدريب",
  "هيئة الامداد والتموين",
  "هيئة البحوث",
  "هيئة التسليح",
  "هيئة التفتيش",
  "هيئة التنظيم والادارة",
  "هيئة الشئون الملية",
  "هيئة العمليات",
];

const centers = {
  5: "م.أبو حماد",
  9: "م.أبو كبير",
  32: "م.الحسينية",
  41: "ق.الزقازيق أول",
  42: "م. الزقازيق",
  103: "م.بلبيس",
  132: "م.ديرب نجم",
  167: "م.فاقوس",
  183: "م.كفر صقر",
  196: "م.منيا القمح",
  201: "م.ههيا",
  235: "ق.الزقازيق ثان",
  248: "م.مشتول السوق",
  249: "م.الإبراهيمية",
  261: "ق.القنايات",
  273: "م.أولاد صقر",
  282: "ق.العاشر من رمضان",
  284: "ق.القرين",
  296: "ق.فاقوس",
  297: "ق.الصالحية الجديدة",
  321: "ق.العاشر من رمضان ثان",
  368: "م.صان الحجر",
  373: "م.منشأة أبوعمر",
  507: "سواقط الشرقية",
  110: "بور سعيد",
  207: "ق.الشرق",
  208: "ق.العرب",
  209: "ق.المناخ",
  210: "ميناء بورسعيد",
  257: "ق.بور فؤاد",
  283: "ق.الضواحى",
  315: "ق.الزهور",
  316: "ق.الجنوب",
  317: "ق.بور فؤاد ثان",
  318: "ق.مبارك",
  329: "ق.المناصرة",
  330: "ق.الجنوب ثان",
  26: "ق.الإسماعيلية أول",
  55: "م.الإسماعيلية",
  56: "الضواحى",
  69: "م.القنطرة شرق",
  70: "م.القنطرة غرب",
  399: "القصاصين الجديدة",
  213: "مركز القصاين",
  214: "م.التل الكبير",
  223: "فايد ",
  243: "م.فايد",
  255: "ق.الإسماعيلة ثان",
  278: "ق.الإسماعيلية ثالث",
  390: "أبوصوير",
  48: "السويس",
  164: "ق. عتاقة",
  211: "ق. السويس",
  212: "ق. الاربعين",
  228: "ميناء السويس",
  502: "سواقط قيد السويس",
  274: "ق. فيصل",
  275: "ق. الجناين",
  50: "ق.رأس سدر",
  57: "ق.طور سيناء",
  224: "ق.أبو رديس",
  265: "ق.نويبع",
  266: "ق.دهب",
  267: "ق.شرم الشيخ",
  268: "ق.سانت كاترين",
  340: "ق.أبو زنيمة",
  356: "ق.طابا",
  52: "ق.الشيخ زويد",
  61: "ق.العريش ثان",
  113: "ق.بئر العبد",
  200: "ق.نخل",
  225: "ق.الحسنة",
  524: "سواقط شمال سيناء",
  264: "ق.رفح",
  276: "ق.العريش أول",
  277: "ق.العريش ثالث",
  287: "ق.رمانة",
  301: "ق.العريش رابع",
  298: "القسيمه",
};

export { corps, centers };
