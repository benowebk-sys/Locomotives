const railwayQuiz = [
  {
    id: 16,
    type: "true_false",
    question: "In urban service, the distance between two stops is approximately 1 km.",

    translation: "في الخدمة الحضرية تكون المسافة بين محطتين متتاليتين حوالي 1 كم.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "محطات المترو والقطارات داخل المدن تكون متقاربة جدًا مقارنة بخدمات الضواحي والخطوط الرئيسية.",
    answer: "True"
  },
  {
    id: 17,
    type: "true_false",
    question: "Urban service speed-time curves feature a prominent and extended free-running period.",
    translation: "منحنيات السرعة والزمن للخدمة الحضرية تحتوي على فترة سير حر طويلة وواضحة.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "عندما تكون المحطات متقاربة لا يتوفر وقت كافٍ للمحافظة على السرعة القصوى لفترة طويلة.",
    answer: "False"
  },
  {
    id: 18,
    type: "true_false",
    question: "A small coasting period is included in urban service primarily to save energy consumption.",
    translation: "تُضاف فترة انسياب قصيرة في الخدمة الحضرية أساسًا لتقليل استهلاك الطاقة.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "خلال هذه المرحلة يتحرك القطار بالقصور الذاتي دون سحب قدرة كبيرة من المصدر.",
    answer: "True"
  },
  {
    id: 19,
    type: "true_false",
    question: "The braking retardation for urban service usually lies between 3 and 5 km/hp.",
    translation: "تباطؤ الفرملة في الخدمة الحضرية يتراوح عادة بين 3 و5 كم/س².",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "التوقفات الكثيرة تتطلب فرملة قوية نسبيًا لتقليل زمن الرحلة.",
    answer: "True"
  },
  {
    id: 20,
    type: "true_false",
    question: "Crest speed is defined as the minimum speed attained by the train during its run.",
    translation: "تُعرف سرعة القمة بأنها أقل سرعة يصل إليها القطار أثناء الرحلة.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "كلمة Crest تُستخدم عادة للدلالة على أعلى نقطة أو أعلى قيمة.",
    answer: "False"
  },
  {
    id: 21,
    type: "true_false",
    question: "Average speed is the ratio of the distance covered between two stops to the total time of the run, excluding stop time.",
    translation: "السرعة المتوسطة هي نسبة المسافة المقطوعة بين محطتين إلى زمن الرحلة الفعلي دون احتساب زمن التوقف.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "في هذا التعريف يتم أخذ زمن الحركة فقط في الاعتبار.",
    answer: "True"
  },
  {
    id: 22,
    type: "true_false",
    question: "Schedule speed includes the time required for stops in its calculation.",
    translation: "السرعة الجدولية تشمل زمن التوقفات ضمن حساباتها.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "هذه السرعة تعكس الأداء الفعلي للخدمة كما يراه الراكب من محطة لأخرى.",
    answer: "True"
  },
  {
    id: 23,
    type: "true_false",
    question: "Schedule time is the sum of the time required for the actual run and the time required for the stop.",
    translation: "الزمن الجدولي يساوي زمن الحركة الفعلي مضافًا إليه زمن التوقف.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "الرحلة الكاملة لا تقتصر على زمن الحركة فقط بل تشمل فترات الوقوف أيضًا.",
    answer: "True"
  },
  {
    id: 24,
    type: "true_false",
    question: "If the crest speed increases, the actual running time of the train also increases.",
    translation: "إذا زادت سرعة القمة فإن زمن التشغيل الفعلي للقطار يزداد أيضًا.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "الوصول إلى سرعة أعلى يساعد غالبًا على قطع نفس المسافة في وقت أقل.",
    answer: "False"
  },
  {
    id: 25,
    type: "true_false",
    question: "If the duration of stops is increased, the schedule speed of the train will decrease.",
    translation: "إذا زادت مدة التوقفات فإن السرعة الجدولية للقطار ستنخفض.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "المسافة المقطوعة ثابتة بينما الزمن الكلي يزداد.",
    answer: "True"
  },
  {
    id: 26,
    type: "true_false",
    question: "Increasing the distance between stops generally leads to a higher schedule speed because running time is less impacted by stops.",
    translation: "زيادة المسافة بين المحطات تؤدي عادة إلى زيادة السرعة الجدولية لأن تأثير زمن التوقف يصبح أقل.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "كلما زادت المسافة بين المحطات أصبح زمن الوقوف جزءًا أصغر من زمن الرحلة الكلي.",
    answer: "True"
  },
  {
    id: 27,
    type: "true_false",
    question: "Higher acceleration decreases the running time of the train, thereby increasing the schedule speed.",
    translation: "زيادة التسارع تقلل زمن الرحلة وبالتالي تزيد السرعة الجدولية.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "الوصول إلى السرعات المطلوبة في وقت أقصر يؤدي إلى تحسين الأداء العام للرحلة.",
    answer: "True"
  },
  {
    id: 28,
    type: "true_false",
    question: "Braking retardation has no effect on the schedule speed of a train.",
    translation: "تباطؤ الفرملة ليس له أي تأثير على السرعة الجدولية للقطار.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "معدل التباطؤ يؤثر على الزمن اللازم للتوقف وبالتالي يؤثر على زمن الرحلة.",
    answer: "False"
  },
  {
    id: 29,
    type: "true_false",
    question: "High braking retardation reduces the running time of the train, which causes a high schedule speed.",
    translation: "زيادة تباطؤ الفرملة تقلل زمن الرحلة مما يؤدي إلى زيادة السرعة الجدولية.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "إذا أمكن للقطار التوقف خلال زمن أقصر فسيتم تقليل الزمن الكلي للرحلة.",
    answer: "True"
  },
  {
    id: 30,
    type: "true_false",
    question: "The typical acceleration for urban service lies between 1.6 and 4 km/hp.",
    translation: "التسارع النموذجي للخدمة الحضرية يقع بين 1.6 و4 كم/س².",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "الخدمة الحضرية تحتاج قيم تسارع مرتفعة نسبيًا بسبب تقارب المحطات.",
    answer: "True"
  },
  {
    id: 31,
    type: "mcq",
    question: "How many main time periods does the typical speed-time curve for main line service consist of?",
    translation: "كم عدد الفترات الزمنية الرئيسية التي يتكون منها منحنى السرعة والزمن النموذجي لخدمة الخطوط الرئيسية؟",
    options: ["3", "4", "5", "6"],
    options_ar: ["3", "4", "5", "6"],
    hint: "الرحلة النموذجية تشمل: تسارع ثابت، تسارع متناقص، سير حر، انسياب، وفرملة.",
    answer: "5"
  },
  {
    id: 32,
    type: "mcq",
    question: "Which period is represented by the curve 'OA' in the main line speed-time curve?",
    translation: "أي فترة يمثلها الجزء OA في منحنى السرعة والزمن للخطوط الرئيسية؟",
    options: ["Coasting", "Constant accelerating", "Braking", "Free-running"],
    options_ar: ["الانسياب", "التسارع الثابت", "الفرملة", "السير الحر"],
    hint: "الجزء OA هو أول جزء من المنحنى حيث تبدأ السرعة في الارتفاع من الصفر.",
    answer: "Constant accelerating"
  },
  {
    id: 33,
    type: "mcq",
    question: "During the constant accelerating period, the voltage across the motor is gradually increased by:",
    translation: "أثناء فترة التسارع الثابت يتم زيادة الجهد على المحرك تدريجيًا بواسطة:",
    options: [
      "Applying brakes",
      "Cutting out the starting resistance",
      "Coasting",
      "Decreasing the current"
    ],
    options_ar: [
      "استخدام الفرامل",
      "إزالة مقاومات البدء تدريجيًا",
      "الانسياب",
      "تقليل التيار"
    ],
    hint: "في بداية التشغيل تستخدم مقاومات للتحكم في التيار ثم يتم التخلص منها تدريجيًا.",
    answer: "Cutting out the starting resistance"
  },
  {
    id: 34,
    type: "mcq",
    question: "The constant accelerating period is also known as:",
    translation: "فترة التسارع الثابت تُعرف أيضًا باسم:",
    options: [
      "Rheostatic accelerating period",
      "Coasting period",
      "Free-running period",
      "Braking period"
    ],
    options_ar: [
      "فترة التسارع الريوستاتي",
      "فترة الانسياب",
      "فترة السير الحر",
      "فترة الفرملة"
    ],
    hint: "اسم هذه المرحلة مرتبط باستخدام الـ Rheostat أثناء البدء.",
    answer: "Rheostatic accelerating period"
  },
  {
    id: 35,
    type: "mcq",
    question: "What is the typical value of acceleration for main line service?",
    translation: "ما القيمة النموذجية للتسارع في خدمة الخطوط الرئيسية؟",
    options: [
      "0.5 to 1 kmph",
      "1.5 to 4 kmph",
      "3 to 5 kmph",
      "10 to 12 kmph"
    ],
    options_ar: [
      "0.5 إلى 1",
      "1.5 إلى 4",
      "3 إلى 5",
      "10 إلى 12"
    ],
    hint: "الخدمة الرئيسية لا تحتاج تسارعًا عاليًا مثل المترو بسبب المسافات الطويلة بين المحطات.",
    answer: "0.5 to 1 kmph"
  },
  {
    id: 36,
    type: "mcq",
    question: "In which period does the acceleration reach zero because tractive effort exerted by the motor exactly equals train resistance?",
    translation: "في أي فترة يصل التسارع إلى الصفر لأن قوة الجر تصبح مساوية تمامًا لمقاومة القطار؟",
    options: [
      "Constant accelerating",
      "Decreasing accelerating",
      "Coasting",
      "Braking"
    ],
    options_ar: [
      "التسارع الثابت",
      "التسارع المتناقص",
      "الانسياب",
      "الفرملة"
    ],
    hint: "هذه المرحلة تأتي بعد التسارع الثابت مباشرة وقبل السير الحر.",
    answer: "Decreasing accelerating"
  },
  {
    id: 37,
    type: "mcq",
    question: "During the free-running period, the power drawn from the supply lines by the motor is:",
    translation: "أثناء فترة السير الحر تكون القدرة المسحوبة من مصدر التغذية:",
    options: [
      "Zero",
      "Gradually increasing",
      "Constant",
      "Decreasing"
    ],
    options_ar: [
      "صفر",
      "تزداد تدريجيًا",
      "ثابتة",
      "تتناقص"
    ],
    hint: "في هذه المرحلة يحافظ القطار على سرعة شبه ثابتة ويتغلب فقط على مقاومات الحركة.",
    answer: "Constant"
  },
  {
    id: 38,
    type: "mcq",
    question: "In which period is the power supply to the traction motor cut off, allowing the train to run on momentum?",
    translation: "في أي فترة يتم فصل التغذية عن محرك الجر ويسير القطار بالقصور الذاتي؟",
    options: [
      "Braking",
      "Coasting",
      "Free-running",
      "Acceleration on speed curve"
    ],
    options_ar: [
      "الفرملة",
      "الانسياب",
      "السير الحر",
      "التسارع"
    ],
    hint: "المحرك لا يسحب قدرة في هذه المرحلة لكن القطار يظل متحركًا.",
    answer: "Coasting"
  },
  {
    id: 39,
    type: "mcq",
    question: "What is the standard symbol used to denote coasting retardation?",
    translation: "ما الرمز القياسي المستخدم للدلالة على تباطؤ الانسياب؟",
    options: ["α", "β", "γ", "Δ"],
    options_ar: ["ألفا", "بيتا", "جاما", "دلتا"],
    hint: "في معادلات الجر الكهربائي غالبًا ما يُستخدم الحرف اليوناني الثاني للدلالة على تباطؤ الانسياب.",
    answer: "β"
  },
  {
    id: 40,
    type: "mcq",
    question: "For main line service, the distance between stops is typically:",
    translation: "في خدمة الخطوط الرئيسية تكون المسافة بين المحطات عادة:",
    options: [
      "Less than 1 km",
      "1 to 5 km",
      "5 to 8 km",
      "More than 10 km"
    ],
    options_ar: [
      "أقل من 1 كم",
      "1 إلى 5 كم",
      "5 إلى 8 كم",
      "أكثر من 10 كم"
    ],
    hint: "القطارات الرئيسية مصممة للرحلات الطويلة بعدد توقفات قليل.",
    answer: "More than 10 km"
  },
  {
    id: 41,
    type: "mcq",
    question: "Which periods are considered very negligible in main line service?",
    translation: "أي الفترات تعتبر صغيرة جدًا في خدمة الخطوط الرئيسية؟",
    options: [
      "Free-running and coasting",
      "Starting and braking",
      "Coasting and braking",
      "Constant acceleration and free-running"
    ],
    options_ar: [
      "السير الحر والانسياب",
      "البدء والفرملة",
      "الانسياب والفرملة",
      "التسارع الثابت والسير الحر"
    ],
    hint: "عندما تكون المسافات طويلة تصبح أغلب الرحلة عند السرعات العالية.",
    answer: "Starting and braking"
  },
  {
    id: 42,
    type: "mcq",
    question: "In suburban service, the distance between two adjacent stops lies between:",
    translation: "في خدمة الضواحي تتراوح المسافة بين محطتين متتاليتين بين:",
    options: [
      "0.5 and 1 km",
      "1 and 8 km",
      "10 and 15 km",
      "15 and 20 km"
    ],
    options_ar: [
      "0.5 إلى 1 كم",
      "1 إلى 8 كم",
      "10 إلى 15 كم",
      "15 إلى 20 كم"
    ],
    hint: "خدمة الضواحي تقع في المنتصف بين الخدمة الحضرية والخطوط الرئيسية.",
    answer: "1 and 8 km"
  },
  {
    id: 43,
    type: "mcq",
    question: "The speed-time curve for urban service consists of how many distinct periods?",
    translation: "كم عدد الفترات المميزة في منحنى السرعة والزمن للخدمة الحضرية؟",
    options: ["2", "3", "4", "5"],
    options_ar: ["2", "3", "4", "5"],
    hint: "لا يوجد فيها Free-running طويل مثل الخطوط الرئيسية.",
    answer: "3"
  },
  {
    id: 44,
    type: "mcq",
    question: "Which of the following periods is ABSENT in both urban and suburban service speed-time curves?",
    translation: "أي من الفترات التالية غير موجودة في منحنيات الخدمة الحضرية وخدمة الضواحي؟",
    options: [
      "Acceleration",
      "Coasting",
      "Free-running",
      "Retardation"
    ],
    options_ar: [
      "التسارع",
      "الانسياب",
      "السير الحر",
      "التباطؤ"
    ],
    hint: "المسافات القصيرة لا تسمح بالحفاظ على السرعة القصوى لفترة طويلة.",
    answer: "Free-running"
  },
  {
    id: 45,
    type: "mcq",
    question: "Why are relatively high values of acceleration and retardation required for urban service?",
    translation: "لماذا تحتاج الخدمة الحضرية إلى قيم مرتفعة نسبيًا للتسارع والتباطؤ؟",
    options: [
      "Because the stops are very far apart",
      "To achieve a moderately high average speed between short stops",
      "To increase energy consumption",
      "To allow a long free-running period"
    ],
    options_ar: [
      "لأن المحطات متباعدة جدًا",
      "لتحقيق سرعة متوسطة جيدة بين محطات متقاربة",
      "لزيادة استهلاك الطاقة",
      "للسماح بفترة سير حر طويلة"
    ],
    hint: "المترو يتوقف كثيرًا لكنه ما زال مطالبًا بالحفاظ على سرعة تشغيل جيدة.",
    answer: "To achieve a moderately high average speed between short stops"
  },
  {
    id: 46,
    type: "mcq",
    question: "In urban service, what is the approximate distance between two stops?",
    translation: "في الخدمة الحضرية، ما المسافة التقريبية بين محطتين؟",
    options: ["1 km", "5 km", "10 km", "15 km"],
    options_ar: ["1 كم", "5 كم", "10 كم", "15 كم"],
    hint: "خدمات المترو تعتمد على توقفات متقاربة جدًا داخل نفس المدينة.",
    answer: "1 km"
  },
  {
    id: 47,
    type: "mcq",
    question: "Why is a small coasting period included in the urban service run?",
    translation: "لماذا يتم إضافة فترة انسياب صغيرة في الخدمة الحضرية؟",
    options: [
      "To cool down the brakes",
      "To save energy consumption",
      "To increase the schedule time",
      "To reduce the crest speed"
    ],
    options_ar: [
      "لتبريد الفرامل",
      "لتوفير استهلاك الطاقة",
      "لزيادة زمن الجدول",
      "لتقليل سرعة القمة"
    ],
    hint: "في هذه المرحلة القطار يتحرك دون قدرة جر كبيرة، مما يقلل الاستهلاك.",
    answer: "To save energy consumption"
  },
  {
    id: 48,
    type: "mcq",
    question: "What is the typical acceleration range for urban service?",
    translation: "ما هو مدى التسارع النموذجي في الخدمة الحضرية؟",
    options: [
      "0.15 to 0.5 km/hp",
      "0.5 to 1 km/hp",
      "1.6 to 4 km/hp",
      "5 to 8 km/hp"
    ],
    options_ar: [
      "0.15 إلى 0.5",
      "0.5 إلى 1",
      "1.6 إلى 4",
      "5 إلى 8"
    ],
    hint: "الخدمة الحضرية تحتاج تسارعًا أعلى من الضواحي بسبب كثرة التوقفات.",
    answer: "1.6 to 4 km/hp"
  },
  {
    id: 49,
    type: "mcq",
    question: "What is the typical braking retardation range for urban service?",
    translation: "ما هو مدى تباطؤ الفرملة في الخدمة الحضرية؟",
    options: [
      "0.5 to 1 km/hp",
      "1.6 to 2.5 km/hp",
      "3 to 5 km/hp",
      "6 to 10 km/hp"
    ],
    options_ar: [
      "0.5 إلى 1",
      "1.6 إلى 2.5",
      "3 إلى 5",
      "6 إلى 10"
    ],
    hint: "كلما كانت التوقفات أكثر تكرارًا احتجنا فرملة أقوى للتحكم في القطار.",
    answer: "3 to 5 km/hp"
  },
  {
    id: 50,
    type: "mcq",
    question: "The maximum speed attained by the train during its run is called:",
    translation: "أقصى سرعة يصل إليها القطار أثناء الرحلة تسمى:",
    options: ["Average speed", "Schedule speed", "Crest speed", "Coasting speed"],
    options_ar: ["السرعة المتوسطة", "السرعة الجدولية", "سرعة القمة", "سرعة الانسياب"],
    hint: "هي أعلى نقطة على منحنى السرعة والزمن وليست متوسط أو زمن جدول.",
    answer: "Crest speed"
  },
  {
    id: 51,
    type: "mcq",
    question: "Which speed is defined as the ratio of distance covered between two stops to total running time excluding stops?",
    translation: "أي سرعة هي نسبة المسافة بين محطتين إلى زمن الحركة فقط بدون التوقفات؟",
    options: ["Crest speed", "Average speed", "Schedule speed", "Running speed"],
    options_ar: ["سرعة القمة", "السرعة المتوسطة", "السرعة الجدولية", "سرعة التشغيل"],
    hint: "هذا التعريف لا يشمل زمن الوقوف داخل المحطات.",
    answer: "Average speed"
  },
  {
    id: 52,
    type: "mcq",
    question: "Schedule speed differs from average speed because schedule speed includes:",
    translation: "السرعة الجدولية تختلف عن المتوسطة لأنها تشمل:",
    options: [
      "Only acceleration time",
      "The time for stops",
      "The coasting retardation",
      "Only free-running time"
    ],
    options_ar: [
      "زمن التسارع فقط",
      "زمن التوقفات",
      "زمن الانسياب",
      "زمن السير الحر فقط"
    ],
    hint: "السرعة الجدولية تحاكي الواقع الفعلي للرحلة من محطة إلى أخرى.",
    answer: "The time for stops"
  },
  {
    id: 53,
    type: "mcq",
    question: "Which formula correctly defines Schedule time (Ts)?",
    translation: "أي معادلة تعبر عن الزمن الجدولي بشكل صحيح؟",
    options: [
      "Ts = Trun - Tstop",
      "Ts = Trun × Tstop",
      "Ts = Trun / Tstop",
      "Ts = Trun + Tstop"
    ],
    options_ar: [
      "زمن الحركة - زمن التوقف",
      "زمن الحركة × زمن التوقف",
      "زمن الحركة ÷ زمن التوقف",
      "زمن الحركة + زمن التوقف"
    ],
    hint: "الزمن الكلي للرحلة يشمل كل من الحركة والتوقف معًا.",
    answer: "Ts = Trun + Tstop"
  },
  {
    id: 54,
    type: "mcq",
    question: "Which of the following is NOT a factor affecting schedule speed?",
    translation: "أي من العوامل التالية لا يؤثر على السرعة الجدولية؟",
    options: ["Duration of stops", "Track color", "Crest speed", "Braking retardation"],
    options_ar: ["مدة التوقف", "لون السكة", "سرعة القمة", "تباطؤ الفرملة"],
    hint: "العوامل المؤثرة تكون مرتبطة بالحركة الفعلية وليس الشكل الخارجي للسكة.",
    answer: "Track color"
  },
  {
    id: 55,
    type: "mcq",
    question: "If crest speed increases, what happens to running time?",
    translation: "إذا زادت سرعة القمة، ماذا يحدث لزمن الرحلة؟",
    options: ["It increases", "It decreases", "It remains constant", "It becomes zero"],
    options_ar: ["يزداد", "يقل", "يبقى ثابتًا", "يصبح صفرًا"],
    hint: "زيادة السرعة القصوى تساعد على قطع نفس المسافة في وقت أقل.",
    answer: "It decreases"
  },
  {
    id: 56,
    type: "mcq",
    question: "To achieve high schedule speed, the duration of stops must be:",
    translation: "لتحقيق سرعة جدولية عالية يجب أن تكون مدة التوقفات:",
    options: ["Low", "High", "Equal to running time", "Infinite"],
    options_ar: ["قليلة", "كبيرة", "مساوية لزمن الحركة", "غير محدودة"],
    hint: "كلما قل وقت التوقف زادت كفاءة الرحلة الكلية.",
    answer: "Low"
  },
  {
    id: 57,
    type: "mcq",
    question: "How does greater distance between stops affect schedule speed?",
    translation: "كيف تؤثر زيادة المسافة بين المحطات على السرعة الجدولية؟",
    options: [
      "It decreases schedule speed",
      "It has no effect",
      "It increases schedule speed",
      "It makes schedule speed equal to crest speed"
    ],
    options_ar: [
      "تقلل السرعة الجدولية",
      "لا تؤثر",
      "تزيد السرعة الجدولية",
      "تجعلها تساوي سرعة القمة"
    ],
    hint: "كلما زادت المسافة قل تأثير التوقفات على إجمالي زمن الرحلة.",
    answer: "It increases schedule speed"
  },
  {
    id: 58,
    type: "mcq",
    question: "What is the typical coasting retardation for urban service?",
    translation: "ما هو التباطؤ أثناء الانسياب في الخدمة الحضرية؟",
    options: ["0.15 km/hp", "1.5 km/hp", "3 km/hp", "4 km/hp"],
    options_ar: ["0.15", "1.5", "3", "4"],
    hint: "هذه قيمة صغيرة نسبيًا لأن القطار لا يزال يتحرك بالقصور الذاتي.",
    answer: "0.15 km/hp"
  },
  {
    id: 59,
    type: "mcq",
    question: "High braking retardation will cause:",
    translation: "زيادة تباطؤ الفرملة يؤدي إلى:",
    options: [
      "A reduction in schedule speed",
      "An increase in running time",
      "A reduction of running time",
      "An increase in stop duration"
    ],
    options_ar: [
      "انخفاض السرعة الجدولية",
      "زيادة زمن الرحلة",
      "تقليل زمن الرحلة",
      "زيادة زمن التوقف"
    ],
    hint: "كلما كانت الفرملة أقوى أمكن تقليل زمن التوقف والحركة معًا.",
    answer: "A reduction of running time"
  },
  {
    id: 60,
    type: "mcq",
    question: "During the coasting period, the train runs due to:",
    translation: "أثناء فترة الانسياب يتحرك القطار بسبب:",
    options: [
      "Maximum applied voltage",
      "The momentum attained",
      "High braking retardation",
      "Constant motor power"
    ],
    options_ar: [
      "أقصى جهد مطبق",
      "القصور الذاتي المكتسب",
      "فرملة قوية",
      "قدرة ثابتة من المحرك"
    ],
    hint: "في هذه المرحلة لا توجد قدرة جر، فقط استمرار الحركة الناتج عن السرعة المكتسبة.",
    answer: "The momentum attained"
  }
];

const questionsTF_1 = [
  {
    id: 1,
    type: "true_false",
    question: "A locomotive is a self-propelled railway vehicle used to pull or push trains.",
    translation: "القاطرة هي مركبة سكك حديدية ذاتية الحركة تُستخدم لجر أو دفع القطارات.",

    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "القاطرة وظيفتها الأساسية ليست نقل الركاب بل توليد قوة الجر لباقي العربات.",
    answer: "True"
  },
  {
    id: 2,
    type: "true_false",
    question: "A train is an engine that provides the power for a locomotive.",
    translation: "القطار هو محرك يوفر القدرة للقاطرة.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "القطار يتكون من قاطرة + عربات، وليس القاطرة جزء تابع للقطار.",
    answer: "False"
  },
  {
    id: 3,
    type: "true_false",
    question: "The word 'locomotive' originates from the Latin word 'loco', meaning 'from a place'.",
    translation: "كلمة لوكوموتيف أصلها لاتيني من كلمة loco وتعني من مكان.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "المعنى اللاتيني يرتبط بالحركة من مكان إلى آخر وليس مجرد المكان نفسه.",
    answer: "False"
  },
  {
    id: 4,
    type: "true_false",
    question: "Locomotives can be classified into three types: steam, diesel, and electric.",
    translation: "يمكن تصنيف القاطرات إلى ثلاث أنواع: بخارية، ديزل، وكهربائية.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "التصنيف الشائع يعتمد على مصدر القدرة المستخدم في الجر.",
    answer: "True"
  },
  {
    id: 5,
    type: "true_false",
    question: "Heritage trains are the only places where steam locomotives are still generally used.",
    translation: "قطارات التراث هي الأماكن الوحيدة التي ما زالت تستخدم فيها القاطرات البخارية.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "استخدام البخار اليوم أصبح محدود جدًا لأغراض سياحية أو تراثية فقط.",
    answer: "True"
  },
  {
    id: 6,
    type: "true_false",
    question: "Double heading is used when a single locomotive is unable to haul the train due to uphill grades or excessive weight.",
    translation: "يتم استخدام قاطرتين معًا عندما لا تكفي قاطرة واحدة لسحب القطار بسبب الوزن أو الميل.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "فكر في الحالات التي تحتاج فيها قوة جر أكبر من قدرة قاطرة واحدة.",
    answer: "True"
  },
  {
    id: 7,
    type: "true_false",
    question: "Double heading is never used on passenger trains.",
    translation: "لا يتم استخدام القاطرتين معًا في قطارات الركاب أبدًا.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "استخدام أكثر من قاطرة ممكن في قطارات الركاب الثقيلة أو الخطوط الصعبة.",
    answer: "False"
  },
  {
    id: 8,
    type: "true_false",
    question: "Direct Steam Engine Drive is highly efficient, reaching up to 40% efficiency.",
    translation: "الدفع البخاري المباشر يتمتع بكفاءة عالية تصل إلى 40%.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "المحركات البخارية تاريخيًا معروفة بانخفاض كفاءتها الحرارية.",
    answer: "False"
  },
  {
    id: 9,
    type: "true_false",
    question: "Steam locomotives must have their fires banked even when the locomotive is idle.",
    translation: "يجب إبقاء النار مشتعلة في القاطرة البخارية حتى وهي متوقفة.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "القاطرة البخارية تحتاج الحفاظ على ضغط البخار حتى في حالة عدم الحركة.",
    answer: "True"
  },
  {
    id: 10,
    type: "true_false",
    question: "The cruising range for standard passenger steam locomotives is about 160 km.",
    translation: "مدى التشغيل للقاطرات البخارية للركاب حوالي 160 كم.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "المحدودية تأتي من الحاجة المستمرة للماء والوقود.",
    answer: "True"
  },
  {
    id: 11,
    type: "true_false",
    question: "Steam engines employed in locomotives are usually of the condensing type.",
    translation: "المحركات البخارية في القاطرات تكون عادة من النوع المكثف.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "القاطرات تحتاج تبسيط التصميم وليس أنظمة تكثيف معقدة.",
    answer: "False"
  },
  {
    id: 12,
    type: "true_false",
    question: "Direct internal combustion engine drive has an efficiency of about 25% at its normal speed.",
    translation: "كفاءة محرك الاحتراق الداخلي المباشر حوالي 25%.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "هذه القيمة تعتبر نموذجية للمحركات عند التشغيل القياسي.",
    answer: "True"
  },
  {
    id: 13,
    type: "true_false",
    question: "In direct internal combustion engine drive, speed control is possible without employing a gearbox.",
    translation: "في الدفع المباشر بالاحتراق الداخلي يمكن التحكم في السرعة بدون ناقل حركة.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "المحرك يحتاج وسيلة لتغيير نسب السرعة والعزم لتحقيق تحكم مناسب.",
    answer: "False"
  },
  {
    id: 14,
    type: "true_false",
    question: "Steam Electric Drive has been widely put into general use without any mechanical difficulties.",
    translation: "الدفع البخاري الكهربائي تم استخدامه على نطاق واسع دون مشاكل ميكانيكية.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "هذا النوع كان تجريبي ولم ينتشر بسبب التعقيد الميكانيكي.",
    answer: "False"
  },
  {
    id: 15,
    type: "true_false",
    question: "In Internal Combustion Engine Electric Drive (Diesel-Electric), the reduction gear and gearbox are eliminated.",
    translation: "في الديزل الكهربائي يتم إلغاء ناقل الحركة والتروس الميكانيكية.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "التحكم في الحركة يتم كهربائيًا بدلًا من النقل الميكانيكي التقليدي.",
    answer: "True"
  }
];

const questionsTF_2 = [
  {
    id: 16,
    type: "true_false",
    question: "Conversion from steam traction to diesel engine electric traction requires massive modifications of the existing track.",
    translation: "التحويل من الجر البخاري إلى الجر الكهربائي بالديزل يتطلب تعديلات كبيرة في مسار السكة الحديد.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "التغيير في نوع القاطرة لا يعني بالضرورة تغيير البنية الأساسية للسكة نفسها.",
    answer: "False"
  },
  {
    id: 17,
    type: "true_false",
    question: "The diesel engine electric vehicle can accommodate more passengers than the steam engine vehicle.",
    translation: "قاطرة الديزل الكهربائية تستطيع نقل عدد ركاب أكبر من القاطرة البخارية.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "عدد الركاب يعتمد على العربات وليس على نوع القاطرة نفسها.",
    answer: "False"
  },
  {
    id: 18,
    type: "true_false",
    question: "Power loss in speed control for diesel-electric locos is very low because it is carried out by the field control of the generator.",
    translation: "فقد القدرة في التحكم بسرعة قاطرات الديزل الكهربائي منخفض جدًا لأنه يتم التحكم عبر مجال المولد.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "التحكم الكهربائي يسمح بكفاءة أعلى مقارنة بالتحكم الميكانيكي التقليدي.",
    answer: "True"
  },
  {
    id: 19,
    type: "true_false",
    question: "The diesel engine in a diesel-electric locomotive can be heavily overloaded without any issues.",
    translation: "يمكن تحميل محرك الديزل في القاطرة فوق طاقته بشكل كبير بدون مشاكل.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "المحركات لها حدود تشغيل صارمة ولا تتحمل زيادة كبيرة في الحمل.",
    answer: "False"
  },
  {
    id: 20,
    type: "true_false",
    question: "Diesel-electric locomotives require more axles (typically six) compared to electric locomotives (typically four) due to heavier dead weight.",
    translation: "قاطرات الديزل الكهربائية تحتاج عدد محاور أكبر بسبب الوزن الذاتي الأعلى.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "زيادة المكونات الداخلية مثل المحرك والوقود تؤدي لزيادة الوزن.",
    answer: "True"
  },
  {
    id: 21,
    type: "true_false",
    question: "Petrol Electric Traction makes vehicles capable of creeping up the steepest slope without throttling the engine.",
    translation: "الدفع البترولي الكهربائي يسمح بالتحرك ببطء شديد على المنحدرات بدون التأثير على المحرك.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "التحكم الكهربائي في الجر يسمح بعزم قوي عند السرعات المنخفضة.",
    answer: "True"
  },
  {
    id: 22,
    type: "true_false",
    question: "Battery Electric Drive is well suited for long-distance main line services.",
    translation: "الدفع بالبطاريات مناسب للخطوط الطويلة بين المدن.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "البطاريات لها سعة محدودة وتحتاج شحن متكرر.",
    answer: "False"
  },
  {
    id: 23,
    type: "true_false",
    question: "The maximum daily run for battery-driven vehicles is usually 50 to 60 km.",
    translation: "أقصى مسافة يومية للقطارات التي تعمل بالبطارية حوالي 50 إلى 60 كم.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "البطارية تحد من مدى التشغيل اليومي بشكل كبير.",
    answer: "True"
  },
  {
    id: 24,
    type: "true_false",
    question: "Battery vehicles are started by grouping batteries in series, and they run at maximum speed by grouping them in parallel.",
    translation: "يتم تشغيل مركبات البطارية على التوالي وعند السرعة القصوى توصل على التوازي.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "توصيل البطاريات يحدد الجهد والتيار وبالتالي يؤثر على الأداء.",
    answer: "True"
  },
  {
    id: 25,
    type: "true_false",
    question: "Electric Drive is the cleanest of all other types of traction systems.",
    translation: "الجر الكهربائي هو أنظف أنواع أنظمة الجر.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "لا يوجد احتراق داخلي أو انبعاثات مباشرة في الموقع.",
    answer: "True"
  },
  {
    id: 26,
    type: "true_false",
    question: "Electric Drive is ideally suitable for underground and tube railways.",
    translation: "الجر الكهربائي مناسب جدًا للأنفاق ومترو الأنفاق.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "البيئات المغلقة تحتاج نظام بدون عوادم أو دخان.",
    answer: "True"
  },
  {
    id: 27,
    type: "true_false",
    question: "In Electric Drive, Rosenberg generators are always required to provide electrical energy for the lights and fans of the train.",
    translation: "في الجر الكهربائي تُستخدم مولدات روزنبرج دائمًا لتغذية الإضاءة والمراوح.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "مصدر الطاقة للخدمات الداخلية يأتي من نظام الجر نفسه وليس مولد منفصل دائمًا.",
    answer: "False"
  },
  {
    id: 28,
    type: "true_false",
    question: "The greatest disadvantage of electric traction is the heavy initial expenditure for the power supply system.",
    translation: "أكبر عيب في الجر الكهربائي هو التكلفة الأولية العالية للبنية التحتية للطاقة.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "تحتاج شبكات كهرباء ومحطات تغذية وإنشاءات مكلفة في البداية.",
    answer: "True"
  },
  {
    id: 29,
    type: "true_false",
    question: "A failure of power supply for a few minutes in an electric traction system may paralyze the whole system.",
    translation: "انقطاع الكهرباء لدقائق قليلة يمكن أن يوقف نظام الجر الكهربائي بالكامل.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "النظام يعتمد بشكل كامل على مصدر طاقة خارجي مستمر.",
    answer: "True"
  },
  {
    id: 30,
    type: "true_false",
    question: "Steam locomotives can use their steam for heating the compartments in cold weather very cheaply, unlike electric locomotives.",
    translation: "القاطرات البخارية يمكنها استخدام البخار لتدفئة العربات بتكلفة منخفضة مقارنة بالكهربائية.",
    options: ["True", "False"],
    options_ar: ["صح", "خطأ"],
    hint: "الحرارة الناتجة من البخار كانت ميزة إضافية في الأنظمة القديمة.",
    answer: "True"
  }
];

const mcq_1 = [
  {
    id: 31,
    type: "mcq",
    question: "What is a series of connected carriages that run along a railway track called?",
    translation: "ماذا يُسمى مجموعة العربات المتصلة التي تتحرك على خط السكة الحديد؟",
    options: ["Locomotive", "Train", "Engine", "Motor unit"],
    options_ar: ["قاطرة", "قطار", "محرك", "وحدة حركة"],
    hint: "المصطلح يشير إلى المجموعة الكاملة من العربات وليس وحدة الجر فقط.",
    answer: "Train"
  },
  {
    id: 32,
    type: "mcq",
    question: "In what year was the term 'locomotive engine' first used?",
    translation: "في أي سنة تم استخدام مصطلح محرك القاطرة لأول مرة؟",
    options: ["1804", "1814", "1880", "1914"],
    options_ar: ["1804", "1814", "1880", "1914"],
    hint: "ظهر هذا المصطلح في بدايات الثورة الصناعية وتطوير السكك الحديدية.",
    answer: "1814"
  },
  {
    id: 33,
    type: "mcq",
    question: "Which of the following is NOT one of the three main types of locomotives?",
    translation: "أي مما يلي ليس من الأنواع الرئيسية للقاطرات؟",
    options: ["Steam", "Diesel", "Electric", "Solar"],
    options_ar: ["بخارية", "ديزل", "كهربائية", "شمسية"],
    hint: "الأنواع التقليدية تعتمد على مصادر طاقة مستخدمة فعليًا في السكك الحديدية.",
    answer: "Solar"
  },
  {
    id: 34,
    type: "mcq",
    question: "What was the main reason Direct Steam Engine Drive lost ground?",
    translation: "ما السبب الرئيسي لتراجع استخدام الدفع البخاري المباشر؟",
    options: [
      "High efficiency",
      "Low efficiency (6–8%)",
      "High speed capability",
      "No fuel requirement"
    ],
    options_ar: [
      "كفاءة عالية",
      "كفاءة منخفضة (6–8%)",
      "سرعة عالية",
      "عدم الحاجة للوقود"
    ],
    hint: "التقنيات الأقدم كانت تعاني من فقد كبير في الطاقة الحرارية.",
    answer: "Low efficiency (6–8%)"
  },
  {
    id: 35,
    type: "mcq",
    question: "How does carrying coal and water affect a steam locomotive?",
    translation: "كيف يؤثر حمل الفحم والماء على القاطرة البخارية؟",
    options: [
      "Increases speed",
      "Reduces payload",
      "Eliminates stops",
      "Increases overload capacity"
    ],
    options_ar: [
      "يزيد السرعة",
      "يقلل الحمولة المفيدة",
      "يلغي التوقفات",
      "يزيد القدرة التحميلية"
    ],
    hint: "جزء من وزن القاطرة يُستخدم لتخزين الوقود والماء.",
    answer: "Reduces payload"
  },
  {
    id: 36,
    type: "mcq",
    question: "The efficiency of a direct internal combustion engine at normal speed is about:",
    translation: "كفاءة محرك الاحتراق الداخلي المباشر عند السرعة العادية حوالي:",
    options: ["6–8%", "15%", "25%", "45%"],
    options_ar: ["6–8%", "15%", "25%", "45%"],
    hint: "القيمة المتوسطة المعروفة لهذا النوع من المحركات.",
    answer: "25%"
  },
  {
    id: 37,
    type: "mcq",
    question: "Why is the overload capacity of a direct internal combustion engine limited?",
    translation: "لماذا تكون قدرة التحميل الزائد لمحرك الاحتراق الداخلي محدودة؟",
    options: [
      "Lack of fuel",
      "Even small overload may cause stalling",
      "No gearbox",
      "Track limitations"
    ],
    options_ar: [
      "نقص الوقود",
      "التحميل الزائد قد يسبب توقف المحرك",
      "عدم وجود ناقل حركة",
      "قيود السكة الحديد"
    ],
    hint: "المحركات الاحتراقية حساسة جدًا لتغير الحمل المفاجئ.",
    answer: "Even small overload may cause stalling"
  },
  {
    id: 38,
    type: "mcq",
    question: "Which drive was experimental and not widely adopted due to mechanical complications?",
    translation: "أي نظام جر كان تجريبيًا ولم يُستخدم على نطاق واسع بسبب التعقيدات الميكانيكية؟",
    options: [
      "Steam Electric Drive",
      "Direct Steam Drive",
      "Petrol Electric Traction",
      "Battery Drive"
    ],
    options_ar: [
      "الدفع البخاري الكهربائي",
      "الدفع البخاري المباشر",
      "الدفع البترولي الكهربائي",
      "الدفع بالبطاريات"
    ],
    hint: "نظام يجمع بين البخار والكهرباء لكنه لم ينجح عمليًا.",
    answer: "Steam Electric Drive"
  },
  {
    id: 39,
    type: "mcq",
    question: "In Diesel-Electric locomotive, what does the diesel engine drive?",
    translation: "في القاطرة الديزل الكهربائية، ماذا يقوم محرك الديزل بتشغيله؟",
    options: [
      "Wheels directly",
      "Gearbox",
      "DC generator at constant speed",
      "Steam turbine"
    ],
    options_ar: [
      "العجلات مباشرة",
      "ناقل حركة",
      "مولد كهربائي",
      "توربين بخاري"
    ],
    hint: "المحرك لا يحرك العجلات مباشرة بل يولد طاقة كهربائية.",
    answer: "DC generator at constant speed"
  },
  {
    id: 40,
    type: "mcq",
    question: "Which is an advantage of Internal Combustion Engine Electric Drive?",
    translation: "ما هي إحدى مزايا الجر بالاحتراق الداخلي الكهربائي؟",
    options: [
      "Requires track modification",
      "No need to modify existing tracks",
      "Very low efficiency",
      "Cannot be used on railways"
    ],
    options_ar: [
      "يحتاج تعديل السكة",
      "لا يحتاج تعديل البنية التحتية",
      "كفاءة منخفضة جدًا",
      "لا يستخدم في السكك الحديدية"
    ],
    hint: "ميزة كبيرة لهذا النظام أنه يعمل على نفس البنية الحالية للسكك.",
    answer: "No need to modify existing tracks"
  },
  {
    id: 41,
    type: "mcq",
    question: "Why are fewer diesel-electric locomotives required?",
    translation: "لماذا نحتاج عدد أقل من قاطرات الديزل الكهربائية؟",
    options: [
      "Cheaper price",
      "Higher acceleration and braking",
      "They carry more passengers",
      "They run underground only"
    ],
    options_ar: [
      "أرخص سعرًا",
      "تسارع وفرملة أعلى",
      "تنقل ركاب أكثر",
      "تعمل تحت الأرض فقط"
    ],
    hint: "الأداء الأفضل يقلل عدد الوحدات المطلوبة لتشغيل نفس الخدمة.",
    answer: "Higher acceleration and braking"
  },
  {
    id: 42,
    type: "mcq",
    question: "What is a major disadvantage of Diesel-Electric locomotives?",
    translation: "ما هو العيب الرئيسي في القاطرات الديزل الكهربائية؟",
    options: [
      "Require overhead wires",
      "High power loss",
      "More axles due to heavy weight",
      "Cannot move trains"
    ],
    options_ar: [
      "تحتاج أسلاك علوية",
      "فقد قدرة عالي",
      "عدد محاور أكبر بسبب الوزن",
      "لا يمكنها التحرك"
    ],
    hint: "زيادة المكونات الداخلية تزيد الوزن وبالتالي عدد المحاور.",
    answer: "More axles due to heavy weight"
  },
  {
    id: 43,
    type: "mcq",
    question: "Which system allows imperceptible slow speed movement?",
    translation: "أي نظام يسمح بحركة بطيئة جدًا يمكن التحكم فيها بدقة؟",
    options: [
      "Direct Steam Drive",
      "Battery Electric Drive",
      "Petrol Electric Traction",
      "Direct Internal Combustion"
    ],
    options_ar: [
      "الدفع البخاري المباشر",
      "الدفع الكهربائي بالبطارية",
      "الدفع البترولي الكهربائي",
      "الدفع بالاحتراق المباشر"
    ],
    hint: "التحكم الكهربائي في السرعة يعطي دقة عالية جدًا في الحركة البطيئة.",
    answer: "Petrol Electric Traction"
  },
  {
    id: 44,
    type: "mcq",
    question: "Battery Electric Drive is best suited for:",
    translation: "الدفع بالبطارية مناسب أكثر لـ:",
    options: [
      "Main line high speed trains",
      "Shunting and local delivery",
      "Long distance freight",
      "Mountain railways only"
    ],
    options_ar: [
      "القطارات السريعة",
      "المناورة والتوزيع المحلي",
      "الشحن الطويل",
      "الجبال فقط"
    ],
    hint: "البطاريات تناسب الأعمال القصيرة داخل المناطق وليس الرحلات الطويلة.",
    answer: "Shunting and local delivery"
  },
  {
    id: 45,
    type: "mcq",
    question: "What is the major limitation of Battery Electric Drive?",
    translation: "ما هو القيد الرئيسي للدفع بالبطارية؟",
    options: [
      "Toxic fumes",
      "High maintenance",
      "Small capacity and frequent charging",
      "Gearbox complexity"
    ],
    options_ar: [
      "أبخرة سامة",
      "صيانة عالية",
      "سعة محدودة وشحن متكرر",
      "تعقيد ناقل الحركة"
    ],
    hint: "أكبر مشكلة دائمًا في البطاريات هي الطاقة المخزنة ومدى التشغيل.",
    answer: "Small capacity and frequent charging"
  }
];

const mcq_2 = [
  {
    id: 46,
    type: "mcq",
    question: "How are battery vehicles connected to run at maximum speed?",
    translation: "كيف يتم توصيل مركبات البطاريات للوصول إلى أقصى سرعة؟",
    options: ["Series", "Parallel", "Through gearbox", "Through turbine"],
    options_ar: ["توالي", "توازي", "ناقل حركة", "توربين"],
    hint: "التوصيل الذي يقلل الجهد ويزيد التيار يستخدم للوصول لأعلى أداء.",
    answer: "Parallel"
  },
  {
    id: 47,
    type: "mcq",
    question: "Which drive is the most widely used in modern times?",
    translation: "أي نظام جر هو الأكثر استخدامًا في العصر الحديث؟",
    options: ["Steam", "Battery", "Electric Drive", "Petrol Electric"],
    options_ar: ["بخاري", "بطارية", "كهربائي", "بترولي كهربائي"],
    hint: "النظام الأكثر انتشارًا يعتمد على الكهرباء من شبكة خارجية.",
    answer: "Electric Drive"
  },
  {
    id: 48,
    type: "mcq",
    question: "Where does an electric vehicle draw its electrical energy from?",
    translation: "من أين تحصل المركبة الكهربائية على الطاقة؟",
    options: [
      "Onboard diesel generator",
      "Battery only",
      "Overhead line or third rail",
      "Steam turbine"
    ],
    options_ar: [
      "مولد ديزل داخلي",
      "بطارية فقط",
      "خط علوي أو سكة ثالثة",
      "توربين بخاري"
    ],
    hint: "القاطرات الكهربائية تعتمد على بنية تحتية خارجية للطاقة.",
    answer: "Overhead line or third rail"
  },
  {
    id: 49,
    type: "mcq",
    question: "Electric Drive is best suitable for:",
    translation: "الجر الكهربائي مناسب جدًا لـ:",
    options: [
      "Desert environments",
      "Underground and tube railways",
      "No power grid areas",
      "Heritage railways"
    ],
    options_ar: [
      "الصحاري",
      "المترو والأنفاق",
      "بدون شبكة كهرباء",
      "القطارات التراثية"
    ],
    hint: "البيئات المغلقة تحتاج نظام نظيف بدون انبعاثات.",
    answer: "Underground and tube railways"
  },
  {
    id: 50,
    type: "mcq",
    question: "In Electric Drive, the size of running sheds is:",
    translation: "في الجر الكهربائي، حجم الورش ومستودعات الصيانة يكون:",
    options: [
      "Very large",
      "Same as steam",
      "Smaller than steam drive",
      "Not required"
    ],
    options_ar: [
      "كبيرة جدًا",
      "نفس البخاري",
      "أصغر من البخاري",
      "غير مطلوبة"
    ],
    hint: "قلة الأجزاء الميكانيكية تقلل الحاجة لصيانة ثقيلة.",
    answer: "Smaller than steam drive"
  },
  {
    id: 51,
    type: "mcq",
    question: "How is electrical energy for lights and fans provided in Electric Drive?",
    translation: "كيف يتم توفير الكهرباء للإضاءة والمراوح في القطار الكهربائي؟",
    options: [
      "Rosenberg generators",
      "Direct overhead line",
      "Diesel engine onboard",
      "Coal furnace"
    ],
    options_ar: [
      "مولدات روزنبرج",
      "من الخط الكهربائي مباشرة",
      "محرك ديزل داخلي",
      "فرن فحم"
    ],
    hint: "هناك مولد مساعد خاص بالخدمات داخل القطار.",
    answer: "Rosenberg generators"
  },
  {
    id: 52,
    type: "mcq",
    question: "Which traction system gives best slow-speed control?",
    translation: "أي نظام جر يعطي أفضل تحكم في السرعات البطيئة؟",
    options: [
      "Steam Drive",
      "Internal Combustion",
      "Electric Drive",
      "Battery Drive"
    ],
    options_ar: [
      "بخاري",
      "احتراق داخلي",
      "كهربائي",
      "بطارية"
    ],
    hint: "التحكم الكهربائي يسمح بعزم قوي حتى عند السرعات القليلة جدًا.",
    answer: "Electric Drive"
  },
  {
    id: 53,
    type: "mcq",
    question: "What is the greatest disadvantage of Electric Traction?",
    translation: "ما هو أكبر عيب في الجر الكهربائي؟",
    options: [
      "Low speed",
      "Heavy initial cost",
      "High pollution",
      "Requires coal"
    ],
    options_ar: [
      "سرعة منخفضة",
      "تكلفة تأسيس عالية",
      "تلوث عالي",
      "يحتاج فحم"
    ],
    hint: "البنية التحتية تحتاج استثمارات ضخمة في البداية.",
    answer: "Heavy initial cost"
  },
  {
    id: 54,
    type: "mcq",
    question: "A power failure in electric traction may:",
    translation: "انقطاع الكهرباء في الجر الكهربائي قد يؤدي إلى:",
    options: [
      "Increase speed",
      "Paralyze system",
      "Switch to diesel automatically",
      "No effect"
    ],
    options_ar: [
      "زيادة السرعة",
      "شل النظام بالكامل",
      "التحول للديزل تلقائيًا",
      "لا تأثير"
    ],
    hint: "النظام يعتمد بالكامل على مصدر طاقة خارجي مستمر.",
    answer: "Paralyze system"
  },
  {
    id: 55,
    type: "mcq",
    question: "Steam locomotives can heat compartments using:",
    translation: "القاطرات البخارية تدفئ العربات باستخدام:",
    options: [
      "Electric heaters",
      "Steam",
      "Diesel exhaust",
      "Battery system"
    ],
    options_ar: [
      "سخانات كهربائية",
      "بخار",
      "عادم ديزل",
      "بطاريات"
    ],
    hint: "ميزة إضافية للبخار هي استخدامه في التدفئة.",
    answer: "Steam"
  },
  {
    id: 56,
    type: "mcq",
    question: "Electric traction is tied to:",
    translation: "الجر الكهربائي مرتبط بـ:",
    options: [
      "Any route",
      "Electrified routes only",
      "Desert routes",
      "Mountain only"
    ],
    options_ar: [
      "أي خط",
      "خطوط مكهربة فقط",
      "الصحارى",
      "الجبال فقط"
    ],
    hint: "لا يمكن تشغيله بدون بنية تحتية كهربائية.",
    answer: "Electrified routes only"
  },
  {
    id: 57,
    type: "mcq",
    question: "Diesel-electric locomotives require more axles because:",
    translation: "قاطرات الديزل الكهربائية تحتاج محاور أكثر بسبب:",
    options: [
      "Light weight",
      "Heavy dead weight",
      "Low speed",
      "Track design"
    ],
    options_ar: [
      "وزن خفيف",
      "وزن ذاتي كبير",
      "سرعة منخفضة",
      "تصميم السكة"
    ],
    hint: "زيادة الوزن تعني توزيع الحمل على عدد أكبر من العجلات.",
    answer: "Heavy dead weight"
  },
  {
    id: 58,
    type: "mcq",
    question: "The word 'loco' comes from Latin meaning:",
    translation: "كلمة 'loco' أصلها لاتيني وتعني:",
    options: [
      "Speed",
      "From a place",
      "Machine",
      "Railway"
    ],
    options_ar: [
      "سرعة",
      "من مكان",
      "آلة",
      "سكة حديد"
    ],
    hint: "المعنى مرتبط بالحركة من موقع إلى آخر.",
    answer: "From a place"
  },
  {
    id: 59,
    type: "mcq",
    question: "Which unit first ran a steam locomotive in India?",
    translation: "أي وحدة كانت أول من شغل قاطرة بخارية في الهند؟",
    options: [
      "Royal Engineers",
      "Bengal Sappers",
      "Madras Regiment",
      "Bombay Pioneers"
    ],
    options_ar: [
      "المهندسون الملكيون",
      "سلاح الهندسة البنغالي",
      "فوج مدراس",
      "رواد بومباي"
    ],
    hint: "كانت وحدات هندسية عسكرية بريطانية.",
    answer: "Bengal Sappers"
  },
  {
    id: 60,
    type: "mcq",
    question: "Which system is cleanest traction system?",
    translation: "أي نظام هو أنظف نظام جر؟",
    options: [
      "Steam",
      "Diesel",
      "Electric Drive",
      "Petrol"
    ],
    options_ar: [
      "بخاري",
      "ديزل",
      "كهربائي",
      "بترولي"
    ],
    hint: "لا يوجد احتراق داخل النظام نفسه.",
    answer: "Electric Drive"
  }
];

const maintenanceQuestions = [
  {
    id: 1,
    type: "tf",
    question: "Preventive maintenance for diesel and electric locomotives involves only unstructured inspections when the locomotive breaks down.",
    translation: "الصيانة الوقائية تعتمد فقط على فحص غير منظم عند حدوث عطل.",
    options: ["True", "False"],
    hint: "الوقائية بتكون قبل حدوث العطل مش بعده.",
    answer: "False"
  },
  {
    id: 2,
    type: "tf",
    question: "Trip Schedules for diesel locomotives are typically performed every 15 to 30 days.",
    translation: "جداول الرحلات تتم كل 15 إلى 30 يوم.",
    options: ["True", "False"],
    hint: "دي صيانة دورية شهرية.",
    answer: "True"
  },
  {
    id: 3,
    type: "tf",
    question: "During a Trip Schedule, technicians check lube oil level and engine bed bolts.",
    translation: "في جدول الرحلات يتم فحص الزيت ومسامير المحرك.",
    options: ["True", "False"],
    hint: "فحص تشغيل سريع.",
    answer: "True"
  },
  {
    id: 4,
    type: "tf",
    question: "Filter cleaning and brake block checking occur only during POH.",
    translation: "تنظيف الفلاتر وفحص الفرامل يحدث فقط في POH.",
    options: ["True", "False"],
    hint: "مش كل الصيانة الثقيلة بس.",
    answer: "False"
  },
  {
    id: 5,
    type: "tf",
    question: "POH for BG diesel locomotives is every 6 years or 0.8 million km.",
    translation: "الصيانة الكاملة كل 6 سنوات أو 0.8 مليون كم.",
    options: ["True", "False"],
    hint: "ده تعريف POH.",
    answer: "True"
  },
  {
    id: 6,
    type: "tf",
    question: "POH involves stripping the locomotive and replacing wear parts.",
    translation: "الصيانة الكاملة تشمل فك القاطرة واستبدال الأجزاء.",
    options: ["True", "False"],
    hint: "ده تعريفها الأساسي.",
    answer: "True"
  },
  {
    id: 7,
    type: "tf",
    question: "Inspection schedules for electric locomotives focus on pantograph and relay calibration.",
    translation: "فحص القاطرات الكهربائية يركز على البانتوجراف والمعايرة.",
    options: ["True", "False"],
    hint: "مكونات كهربائية حساسة.",
    answer: "True"
  },
  {
    id: 8,
    type: "tf",
    question: "IOH for electric locomotives is performed every 18 years.",
    translation: "الصيانة المتوسطة كل 18 سنة.",
    options: ["True", "False"],
    hint: "18 سنة دي POH مش IOH.",
    answer: "False"
  },
  {
    id: 9,
    type: "tf",
    question: "POH for electric locomotives is every 24 lakh km or 18 years.",
    translation: "الصيانة الكاملة كل 24 ألف كم أو 18 سنة.",
    options: ["True", "False"],
    hint: "ده POH الصحيح.",
    answer: "True"
  },
  {
    id: 10,
    type: "tf",
    question: "Undergear maintenance includes wheel profiles and brake rigging.",
    translation: "صيانة تحت القطار تشمل العجلات والفرامل.",
    options: ["True", "False"],
    hint: "كل ما تحت الشاسيه.",
    answer: "True"
  },
  {
    id: 11,
    type: "tf",
    question: "Fire extinguisher testing is considered electrical maintenance.",
    translation: "اختبار طفايات الحريق يعتبر صيانة كهربائية.",
    options: ["True", "False"],
    hint: "دي سلامة مش كهرباء.",
    answer: "False"
  },
  {
    id: 12,
    type: "tf",
    question: "Preventive maintenance aims to maintain equipment in working condition.",
    translation: "الصيانة الوقائية هدفها الحفاظ على التشغيل.",
    options: ["True", "False"],
    hint: "ده التعريف الأساسي.",
    answer: "True"
  },
  {
    id: 13,
    type: "tf",
    question: "Preventive maintenance waits for failure before action.",
    translation: "الصيانة الوقائية تنتظر حدوث العطل.",
    options: ["True", "False"],
    hint: "العكس تمامًا.",
    answer: "False"
  },
  {
    id: 14,
    type: "tf",
    question: "Wheel reprofiling replaces the entire wheel assembly.",
    translation: "إعادة تشكيل العجلات تعني استبدال العجلة بالكامل.",
    options: ["True", "False"],
    hint: "إصلاح مش استبدال.",
    answer: "False"
  },
  {
    id: 15,
    type: "tf",
    question: "Lubrication reduces friction and wear.",
    translation: "التزييت يقلل الاحتكاك والتآكل.",
    options: ["True", "False"],
    hint: "وظيفة الزيت الأساسية.",
    answer: "True"
  }
];

maintenanceQuestions.push(
  {
    id: 16,
    type: "tf",
    question: "Wheel reprofiling consists of replacing the entire wheel assembly with a brand new one.",
    translation: "إعادة تشكيل العجلات تعني استبدال العجلة بالكامل.",
    options: ["True", "False"],
    hint: "إعادة التشكيل مش استبدال.",
    answer: "False"
  },
  {
    id: 17,
    type: "tf",
    question: "Reprofiling helps maintain optimal adhesion between wheels and tracks.",
    translation: "إعادة تشكيل العجلات تحافظ على التماسك بين العجلات والسكة.",
    options: ["True", "False"],
    hint: "هدفها تحسين التلامس.",
    answer: "True"
  },
  {
    id: 18,
    type: "tf",
    question: "A lathe in the pit is used to reprofile wheels without removing them.",
    translation: "المخرطة الأرضية تعيد تشكيل العجلات بدون فكها.",
    options: ["True", "False"],
    hint: "الميزة الأساسية إنها في مكانها.",
    answer: "True"
  },
  {
    id: 19,
    type: "tf",
    question: "Predictive maintenance uses sensors and IoT devices to collect real-time data.",
    translation: "الصيانة التنبؤية تستخدم حساسات وإنترنت الأشياء لجمع البيانات.",
    options: ["True", "False"],
    hint: "تعتمد على البيانات اللحظية.",
    answer: "True"
  },
  {
    id: 20,
    type: "tf",
    question: "Machine learning cannot be used in predictive maintenance.",
    translation: "التعلم الآلي لا يمكن استخدامه في الصيانة التنبؤية.",
    options: ["True", "False"],
    hint: "الذكاء الاصطناعي جزء أساسي هنا.",
    answer: "False"
  },
  {
    id: 21,
    type: "tf",
    question: "Reactive maintenance is recommended for important machinery.",
    translation: "الصيانة التفاعلية مناسبة للمعدات المهمة.",
    options: ["True", "False"],
    hint: "دي أرخص لكن أخطر.",
    answer: "False"
  },
  {
    id: 22,
    type: "tf",
    question: "Corrective maintenance happens only after something goes wrong.",
    translation: "الصيانة التصحيحية تتم بعد حدوث العطل.",
    options: ["True", "False"],
    hint: "تعتمد على الإصلاح بعد المشكلة.",
    answer: "True"
  },
  {
    id: 23,
    type: "tf",
    question: "Condition-based maintenance focuses on measuring machine performance.",
    translation: "الصيانة المعتمدة على الحالة تعتمد على قياس الأداء.",
    options: ["True", "False"],
    hint: "تعتمد على المراقبة المستمرة.",
    answer: "True"
  },
  {
    id: 24,
    type: "tf",
    question: "Rail rolling stock maintenance is unnecessary if the train is new.",
    translation: "لا حاجة لصيانة القطارات الجديدة.",
    options: ["True", "False"],
    hint: "كل المعدات تحتاج صيانة.",
    answer: "False"
  },
  {
    id: 25,
    type: "tf",
    question: "Well-maintained rail systems reduce unexpected failures.",
    translation: "الصيانة الجيدة تقلل الأعطال المفاجئة.",
    options: ["True", "False"],
    hint: "دي من أهم فوائد الصيانة.",
    answer: "True"
  },
  {
    id: 26,
    type: "tf",
    question: "Poor maintenance management can lead to safety risks and high costs.",
    translation: "سوء إدارة الصيانة يؤدي لمخاطر وتكاليف عالية.",
    options: ["True", "False"],
    hint: "سوء الإدارة = مشاكل.",
    answer: "True"
  },
  {
    id: 27,
    type: "tf",
    question: "Remote diagnostics systems can only be used when train is in workshop.",
    translation: "أنظمة التشخيص تعمل فقط في الورش.",
    options: ["True", "False"],
    hint: "هي أصلاً عن المراقبة عن بعد.",
    answer: "False"
  },
  {
    id: 28,
    type: "tf",
    question: "Lubrication is used to reduce friction in mechanical parts.",
    translation: "التزييت يقلل الاحتكاك.",
    options: ["True", "False"],
    hint: "وظيفة الزيت الأساسية.",
    answer: "True"
  },
  {
    id: 29,
    type: "tf",
    question: "Wheel reprofiling improves adhesion between wheel and rail.",
    translation: "إعادة تشكيل العجلات تحسن التماسك مع السكة.",
    options: ["True", "False"],
    hint: "بتحسن التلامس.",
    answer: "True"
  },
  {
    id: 30,
    type: "tf",
    question: "Maintenance activities include identifying wear before failure.",
    translation: "الصيانة تشمل اكتشاف التآكل قبل العطل.",
    options: ["True", "False"],
    hint: "ده هدف أساسي للصيانة الوقائية.",
    answer: "True"
  }
);

maintenanceQuestions.push(
  {
    id: 31,
    type: "tf",
    question: "Lubrication is essential to reduce friction and prevent wear in bearings and gears.",
    translation: "التزييت ضروري لتقليل الاحتكاك ومنع التآكل في المحامل والتروس.",
    options: ["True", "False"],
    hint: "أي جزء فيه حركة ميكانيكية يحتاج تقليل احتكاك.",
    answer: "True"
  },
  {
    id: 32,
    type: "tf",
    question: "Predictive maintenance does not rely on data analysis.",
    translation: "الصيانة التنبؤية لا تعتمد على تحليل البيانات.",
    options: ["True", "False"],
    hint: "دي مبنية أساسًا على البيانات.",
    answer: "False"
  },
  {
    id: 33,
    type: "tf",
    question: "Reactive maintenance is performed before failures occur.",
    translation: "الصيانة التفاعلية تتم قبل حدوث الأعطال.",
    options: ["True", "False"],
    hint: "فكر: بتتعمل إمتى؟",
    answer: "False"
  },
  {
    id: 34,
    type: "tf",
    question: "Condition-based maintenance uses real-time monitoring.",
    translation: "الصيانة المعتمدة على الحالة تستخدم مراقبة لحظية.",
    options: ["True", "False"],
    hint: "مبنية على الحالة الفعلية.",
    answer: "True"
  },
  {
    id: 35,
    type: "tf",
    question: "Wheel reprofiling means replacing wheels entirely when worn.",
    translation: "إعادة تشكيل العجلات تعني استبدالها بالكامل.",
    options: ["True", "False"],
    hint: "مش استبدال، تعديل شكل.",
    answer: "False"
  },
  {
    id: 36,
    type: "tf",
    question: "Remote diagnostics allows monitoring of trains in real time.",
    translation: "التشخيص عن بعد يسمح بمراقبة القطار في الوقت الحقيقي.",
    options: ["True", "False"],
    hint: "فكرة IoT.",
    answer: "True"
  },
  {
    id: 37,
    type: "tf",
    question: "Preventive maintenance is done only after breakdowns.",
    translation: "الصيانة الوقائية تتم بعد الأعطال.",
    options: ["True", "False"],
    hint: "اسمها يوضح إنها قبل المشكلة.",
    answer: "False"
  },
  {
    id: 38,
    type: "tf",
    question: "Regular inspections help detect wear before failure occurs.",
    translation: "الفحوصات الدورية تكشف التآكل قبل العطل.",
    options: ["True", "False"],
    hint: "هدف الفحص الدوري.",
    answer: "True"
  },
  {
    id: 39,
    type: "tf",
    question: "Lubrication increases friction between components.",
    translation: "التزييت يزيد الاحتكاك بين الأجزاء.",
    options: ["True", "False"],
    hint: "ده عكس وظيفة الزيت.",
    answer: "False"
  },
  {
    id: 40,
    type: "tf",
    question: "Predictive maintenance uses vibration and acoustic analysis.",
    translation: "الصيانة التنبؤية تستخدم تحليل الاهتزاز والصوت.",
    options: ["True", "False"],
    hint: "تحليل ذكي للمعدات.",
    answer: "True"
  },
  {
    id: 41,
    type: "tf",
    question: "Corrective maintenance is planned in advance.",
    translation: "الصيانة التصحيحية يتم التخطيط لها مسبقًا.",
    options: ["True", "False"],
    hint: "دي بتتعمل بعد المشكلة مش قبلها.",
    answer: "False"
  },
  {
    id: 42,
    type: "tf",
    question: "Condition-based maintenance prevents unexpected failures.",
    translation: "الصيانة المعتمدة على الحالة تقلل الأعطال المفاجئة.",
    options: ["True", "False"],
    hint: "المراقبة المستمرة تمنع المفاجآت.",
    answer: "True"
  },
  {
    id: 43,
    type: "tf",
    question: "Machine learning is used in predictive maintenance.",
    translation: "التعلم الآلي يستخدم في الصيانة التنبؤية.",
    options: ["True", "False"],
    hint: "جزء من التحليل الذكي.",
    answer: "True"
  },
  {
    id: 44,
    type: "tf",
    question: "Wheel reprofiling is unnecessary in railway systems.",
    translation: "إعادة تشكيل العجلات غير ضرورية في السكك الحديدية.",
    options: ["True", "False"],
    hint: "ضرورية للحفاظ على الأمان.",
    answer: "False"
  },
  {
    id: 45,
    type: "tf",
    question: "Maintenance improves safety and reduces operational costs.",
    translation: "الصيانة تحسن الأمان وتقلل التكاليف التشغيلية.",
    options: ["True", "False"],
    hint: "هدف أساسي للصيانة.",
    answer: "True"
  }
);

maintenanceQuestions.push(
  {
    id: 46,
    type: "mcq",
    question: "Predictive maintenance uses sensors and IoT devices to collect data on:",
    questionAr: "تستخدم الصيانة التنبؤية الحساسات وإنترنت الأشياء لجمع بيانات عن:",
    options: [
      "Passenger satisfaction",
      "Real-time operating conditions of the equipment",
      "The historical cost of the railway",
      "Ticket sales"
    ],
    optionsAr: [
      "رضا الركاب",
      "ظروف تشغيل المعدات في الوقت الفعلي",
      "التكلفة التاريخية للسكك الحديدية",
      "مبيعات التذاكر"
    ],
    hint: "The data comes directly from how the equipment behaves while operating.",
    hintAr: "البيانات تأتي مباشرة من أداء المعدة أثناء التشغيل.",
    answer: "Real-time operating conditions of the equipment"
  },
  {
    id: 47,
    type: "mcq",
    question: "How is data analyzed in Predictive maintenance to identify trends and anomalies?",
    questionAr: "كيف يتم تحليل البيانات في الصيانة التنبؤية لاكتشاف الاتجاهات والحالات غير الطبيعية؟",
    options: [
      "Using machine learning algorithms and mathematical models",
      "Using simple calculators",
      "By visual inspection only",
      "By asking the train operator"
    ],
    optionsAr: [
      "باستخدام خوارزميات التعلم الآلي والنماذج الرياضية",
      "باستخدام آلات حاسبة بسيطة",
      "بالفحص البصري فقط",
      "بسؤال سائق القطار"
    ],
    hint: "Modern intelligent systems are heavily involved in this process.",
    hintAr: "الأنظمة الذكية الحديثة تلعب الدور الرئيسي هنا.",
    answer: "Using machine learning algorithms and mathematical models"
  },
  {
    id: 48,
    type: "mcq",
    question: "Which type of maintenance relies on waiting until something breaks down before fixing it?",
    questionAr: "أي نوع من الصيانة يعتمد على انتظار حدوث العطل قبل إصلاحه؟",
    options: [
      "Preventive Maintenance",
      "Predictive Maintenance",
      "Reactive Maintenance",
      "Condition-Based Maintenance"
    ],
    optionsAr: [
      "الصيانة الوقائية",
      "الصيانة التنبؤية",
      "الصيانة التفاعلية",
      "الصيانة المعتمدة على الحالة"
    ],
    hint: "The response comes after the problem appears.",
    hintAr: "يتم التدخل بعد ظهور المشكلة بالفعل.",
    answer: "Reactive Maintenance"
  },
  {
    id: 49,
    type: "mcq",
    question: "Why is reactive maintenance not recommended for important machinery?",
    questionAr: "لماذا لا يُنصح بالصيانة التفاعلية للمعدات المهمة؟",
    options: [
      "Because it is too predictable",
      "Because breakdowns are unpredictable and can lead to high costs and delays",
      "Because it requires expensive IoT sensors",
      "Because it follows a strict daily schedule"
    ],
    optionsAr: [
      "لأنها متوقعة جدًا",
      "لأن الأعطال غير متوقعة وقد تسبب تكاليف وتأخيرات كبيرة",
      "لأنها تحتاج حساسات باهظة الثمن",
      "لأنها تتبع جدولًا يوميًا صارمًا"
    ],
    hint: "Unexpected failures are usually expensive.",
    hintAr: "الأعطال المفاجئة غالبًا تكون مكلفة.",
    answer: "Because breakdowns are unpredictable and can lead to high costs and delays"
  },
  {
    id: 50,
    type: "mcq",
    question: "Fixing a newly broken HVAC unit with no prior schedule is an example of:",
    questionAr: "إصلاح وحدة تكييف تعطلت حديثًا بدون خطة مسبقة يعتبر مثالًا على:",
    options: [
      "Predictive Maintenance",
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Condition-Based Maintenance"
    ],
    optionsAr: [
      "الصيانة التنبؤية",
      "الصيانة الوقائية",
      "الصيانة التصحيحية",
      "الصيانة المعتمدة على الحالة"
    ],
    hint: "A fault has already occurred and now it is being fixed.",
    hintAr: "العطل حدث بالفعل ويتم إصلاحه الآن.",
    answer: "Corrective Maintenance"
  },
  {
    id: 51,
    type: "mcq",
    question: "Condition-Based maintenance focuses on:",
    questionAr: "تركز الصيانة المعتمدة على الحالة على:",
    options: [
      "Fixing parts only after they completely shatter",
      "Replacing parts every 30 days regardless of condition",
      "Measuring or observing the performance of machines to see if they operate near their limits",
      "Ignoring small anomalies"
    ],
    optionsAr: [
      "إصلاح الأجزاء بعد تحطمها بالكامل",
      "استبدال الأجزاء كل 30 يومًا بغض النظر عن حالتها",
      "قياس ومراقبة أداء المعدات لمعرفة مدى اقترابها من حدود التشغيل",
      "تجاهل المشكلات الصغيرة"
    ],
    hint: "Decisions are made according to the actual condition of the machine.",
    hintAr: "اتخاذ القرار يعتمد على الحالة الفعلية للمعدة.",
    answer: "Measuring or observing the performance of machines to see if they operate near their limits"
  },
  {
    id: 52,
    type: "mcq",
    question: "What does ECM stand for in the context of railway maintenance?",
    questionAr: "ماذا يعني اختصار ECM في مجال صيانة السكك الحديدية؟",
    options: [
      "Engine Control Module",
      "Electric Circuit Monitor",
      "Entity in Charge of Maintenance",
      "Emergency Condition Manager"
    ],
    optionsAr: [
      "وحدة التحكم بالمحرك",
      "مراقب الدوائر الكهربائية",
      "الجهة المسؤولة عن الصيانة",
      "مدير الحالة الطارئة"
    ],
    hint: "Think about who carries the maintenance responsibility.",
    hintAr: "فكر في الجهة التي تتحمل مسؤولية الصيانة.",
    answer: "Entity in Charge of Maintenance"
  },
  {
    id: 53,
    type: "mcq",
    question: "Why is maintenance of rolling stock legally important for manufacturers and operators?",
    questionAr: "لماذا تعتبر صيانة معدات السكك الحديدية مهمة قانونيًا للمصنعين والمشغلين؟",
    options: [
      "To increase the ticket prices",
      "To comply with statutory requirements and product liability regulations",
      "To make the trains look shiny",
      "To decrease the number of employees"
    ],
    optionsAr: [
      "لزيادة أسعار التذاكر",
      "للالتزام بالمتطلبات القانونية ولوائح مسؤولية المنتج",
      "لجعل القطارات أكثر لمعانًا",
      "لتقليل عدد الموظفين"
    ],
    hint: "The key idea is compliance with laws and regulations.",
    hintAr: "الفكرة الأساسية هي الالتزام بالقوانين واللوائح.",
    answer: "To comply with statutory requirements and product liability regulations"
  },
  {
    id: 54,
    type: "mcq",
    question: "Well-maintained rail systems achieve cost reduction by:",
    questionAr: "كيف تحقق أنظمة السكك الحديدية جيدة الصيانة خفضًا في التكاليف؟",
    options: [
      "Firing maintenance staff",
      "Avoiding unexpected failures that lead to costly delays and repairs",
      "Using cheaper, low-quality parts",
      "Ignoring statutory requirements"
    ],
    optionsAr: [
      "الاستغناء عن فنيي الصيانة",
      "تجنب الأعطال المفاجئة التي تؤدي إلى إصلاحات وتأخيرات مكلفة",
      "استخدام قطع رخيصة ومنخفضة الجودة",
      "تجاهل المتطلبات القانونية"
    ],
    hint: "Preventing a problem is usually cheaper than fixing it later.",
    hintAr: "منع المشكلة أرخص من إصلاحها بعد وقوعها.",
    answer: "Avoiding unexpected failures that lead to costly delays and repairs"
  },
  {
    id: 55,
    type: "mcq",
    question: "Effective allocation of personnel, materials, and equipment is known as:",
    questionAr: "التوزيع الفعال للأفراد والمواد والمعدات يُعرف باسم:",
    options: [
      "Resource allocation",
      "Machine learning",
      "Thermography",
      "Wheel reprofiling"
    ],
    optionsAr: [
      "تخصيص الموارد",
      "التعلم الآلي",
      "التصوير الحراري",
      "إعادة تشكيل العجلات"
    ],
    hint: "It is a management term related to using available assets efficiently.",
    hintAr: "مصطلح إداري يتعلق باستخدام الإمكانيات المتاحة بكفاءة.",
    answer: "Resource allocation"
  },
  {
    id: 56,
    type: "mcq",
    question: "Poor resource management in maintenance operations can lead to:",
    questionAr: "سوء إدارة الموارد في أعمال الصيانة قد يؤدي إلى:",
    options: [
      "Increased safety",
      "Faster travel times",
      "Delays, increased costs, and compromised safety",
      "Better environmental protection"
    ],
    optionsAr: [
      "زيادة الأمان",
      "زيادة سرعة الرحلات",
      "تأخيرات وتكاليف أعلى وتراجع مستوى السلامة",
      "تحسين حماية البيئة"
    ],
    hint: "Bad planning usually creates several problems at once.",
    hintAr: "التخطيط السيئ غالبًا يسبب عدة مشاكل معًا.",
    answer: "Delays, increased costs, and compromised safety"
  },
  {
    id: 57,
    type: "mcq",
    question: "As rail systems become more advanced, what must operators do?",
    questionAr: "مع تطور أنظمة السكك الحديدية، ماذا يجب على المشغلين أن يفعلوا؟",
    options: [
      "Stick strictly to steam locomotives",
      "Integrate new technologies while ensuring compatibility with existing systems",
      "Stop performing preventive maintenance",
      "Rely solely on reactive maintenance"
    ],
    optionsAr: [
      "التمسك بالقاطرات البخارية فقط",
      "دمج التقنيات الجديدة مع ضمان توافقها مع الأنظمة الحالية",
      "إيقاف الصيانة الوقائية",
      "الاعتماد فقط على الصيانة التفاعلية"
    ],
    hint: "Development should not break existing operations.",
    hintAr: "التطوير يجب أن يتوافق مع الأنظمة الحالية لا أن يستبدلها بالكامل.",
    answer: "Integrate new technologies while ensuring compatibility with existing systems"
  },
  {
    id: 58,
    type: "mcq",
    question: "What component's main purpose is to reduce friction between moving parts?",
    questionAr: "ما العنصر الذي تتمثل مهمته الرئيسية في تقليل الاحتكاك بين الأجزاء المتحركة؟",
    options: [
      "Pantograph",
      "Lubricants",
      "Fire extinguisher",
      "Transformer"
    ],
    optionsAr: [
      "البانتوجراف",
      "مواد التزييت",
      "طفاية الحريق",
      "المحول الكهربائي"
    ],
    hint: "It is commonly applied to bearings and gears.",
    hintAr: "يُستخدم باستمرار مع المحامل والتروس.",
    answer: "Lubricants"
  },
  {
    id: 59,
    type: "mcq",
    question: "Which of the following components is regularly inspected for wear and replaced to prevent sudden failures?",
    questionAr: "أي المكونات التالية يتم فحصها دوريًا للتآكل واستبدالها لمنع الأعطال المفاجئة؟",
    options: [
      "The driver's seat",
      "Brakes, wheels, and bearings",
      "The destination sign",
      "The horn"
    ],
    optionsAr: [
      "مقعد السائق",
      "الفرامل والعجلات والمحامل",
      "لوحة الوجهة",
      "البوق"
    ],
    hint: "These components directly affect movement and safety.",
    hintAr: "هذه المكونات تؤثر مباشرة على الحركة والسلامة.",
    answer: "Brakes, wheels, and bearings"
  },
  {
    id: 60,
    type: "mcq",
    question: "What happens when machines operate near the limits of their normal operational range?",
    questionAr: "ماذا يحدث عندما تعمل المعدات بالقرب من حدود التشغيل الطبيعية؟",
    options: [
      "They perform at their absolute best",
      "Maintenance might become necessary according to condition-based protocols",
      "They automatically shut down forever",
      "They no longer require lubrication"
    ],
    optionsAr: [
      "تعمل بأفضل أداء مطلق دائمًا",
      "قد تصبح الصيانة ضرورية وفقًا لمبادئ الصيانة المعتمدة على الحالة",
      "تتوقف نهائيًا بشكل تلقائي",
      "لا تحتاج إلى تزييت بعد ذلك"
    ],
    hint: "Approaching operating limits often triggers closer monitoring.",
    hintAr: "الاقتراب من حدود التشغيل يستدعي متابعة وصيانة محتملة.",
    answer: "Maintenance might become necessary according to condition-based protocols"
  }
);

const questions61_75 = [
  {
    question: "Total Quality Maintenance (TQM) is committed to improving and achieving long-term excellence in maintenance processes.",
    translation: "الصيانة الشاملة للجودة (TQM) تهدف إلى التحسين المستمر وتحقيق التميز طويل المدى في عمليات الصيانة.",
    hint: "الفكرة الأساسية لـ TQM هي التحسين المستمر وليس الحلول المؤقتة.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "True"
  },
  {
    question: "The TQM system in railway maintenance is restricted only to the maintenance crew and excludes management.",
    translation: "نظام TQM في صيانة السكك الحديدية يقتصر على طاقم الصيانة فقط ويستبعد الإدارة.",
    hint: "الجودة الشاملة تحتاج مشاركة جميع المستويات داخل المؤسسة.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "False"
  },
  {
    question: "TQM encourages the proactive identification of possible problems to fix them before they become significant issues.",
    translation: "يشجع TQM على اكتشاف المشكلات المحتملة مبكرًا قبل أن تصبح مشكلات كبيرة.",
    hint: "الوقاية دائمًا أرخص من الإصلاح بعد وقوع المشكلة.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "True"
  },
  {
    question: "An effective maintenance strategy involves determining the cost-effective vibration level at which to replace deteriorating components.",
    translation: "تتضمن استراتيجية الصيانة الفعالة تحديد مستوى الاهتزاز الاقتصادي المناسب لاستبدال المكونات المتدهورة.",
    hint: "الاهتزازات تعتبر مؤشرًا مهمًا على تدهور المعدات.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "True"
  },
  {
    question: "In maintenance strategy, 'lead time' refers to the time between detecting a potential failure and taking action to repair it.",
    translation: "في استراتيجية الصيانة، يشير مصطلح Lead Time إلى الفترة بين اكتشاف العطل المحتمل واتخاذ إجراء الإصلاح.",
    hint: "هو الزمن المتاح للتصرف قبل أن يتحول الخلل إلى فشل فعلي.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "True"
  },
  {
    question: "People generally accept organizational changes easily, even if the benefits to themselves are not obvious.",
    translation: "عادةً ما يتقبل الناس التغييرات التنظيمية بسهولة حتى لو لم تكن فوائدها واضحة لهم.",
    hint: "المقاومة البشرية للتغيير معروفة في أغلب المؤسسات.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "False"
  },
  {
    question: "RCM stands for Reliability-Centered Maintenance.",
    translation: "يرمز RCM إلى الصيانة المتمركزة حول الاعتمادية.",
    hint: "الحرف R يشير إلى Reliability.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "True"
  },
  {
    question: "RCM analysis entails analyzing component functions, their possible ways of failure, and effective maintenance tasks to reduce failure risk.",
    translation: "يتضمن تحليل RCM دراسة وظائف المكونات وأنماط فشلها وإجراءات الصيانة المناسبة لتقليل مخاطر الأعطال.",
    hint: "الهدف هو فهم لماذا وكيف يمكن أن يفشل المكون.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "True"
  },
  {
    question: "Historically, before global supply chains, the builders of physical assets were rarely the ultimate users of those assets.",
    translation: "تاريخيًا، قبل سلاسل التوريد العالمية، نادرًا ما كان مصنعو الأصول المادية هم المستخدمين النهائيين لها.",
    hint: "في الماضي كان المُصنِّع غالبًا أقرب إلى المستخدم النهائي.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "False"
  },
  {
    question: "Asset Discovery, Condition Monitoring, and Criticality Analysis are key steps in how RCM analysis works.",
    translation: "يُعد اكتشاف الأصول ومراقبة الحالة وتحليل الأهمية من الخطوات الأساسية في تحليل RCM.",
    hint: "كل خطوة تساعد في تحديد الأولويات والمخاطر.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "True"
  },
  {
    question: "Rail rolling stock maintenance includes routine inspection, servicing, and repair to ensure safe and efficient operation.",
    translation: "تشمل صيانة الوحدات المتحركة الفحص الدوري والخدمة والإصلاح لضمان التشغيل الآمن والفعال.",
    hint: "السلامة والكفاءة هما الهدفان الرئيسيان للصيانة.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "True"
  },
  {
    question: "Well-maintained rail systems usually increase system downtime and raise operational costs.",
    translation: "عادةً ما تؤدي أنظمة السكك الحديدية جيدة الصيانة إلى زيادة التوقفات ورفع تكاليف التشغيل.",
    hint: "الصيانة الجيدة تقلل الأعطال وليس العكس.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "False"
  },
  {
    question: "Effective allocation of personnel, materials, and equipment is only crucial for operations, not for maintenance.",
    translation: "التوزيع الفعال للأفراد والمواد والمعدات مهم فقط للتشغيل وليس للصيانة.",
    hint: "الصيانة تعتمد على الموارد بنفس قدر اعتماد التشغيل عليها.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "False"
  },
  {
    question: "Compressed air brake systems require daily, monthly, and quarterly checks to ensure safety and functionality.",
    translation: "تتطلب أنظمة فرامل الهواء المضغوط فحوصات يومية وشهرية وربع سنوية لضمان السلامة والكفاءة.",
    hint: "أنظمة الفرامل من أكثر الأنظمة احتياجًا للمتابعة الدورية.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "True"
  },
  {
    question: "Air tanks in the braking system should be drained daily to remove moisture.",
    translation: "يجب تفريغ خزانات الهواء يوميًا لإزالة الرطوبة.",
    hint: "المياه داخل النظام الهوائي تسبب مشاكل عديدة.",
    options: [
      { text: "True", translation: "صح" },
      { text: "False", translation: "خطأ" }
    ],
    answer: "True"
  }
];

const questions76_90 = [
  {
    question: "The air compressor in an air brake system is usually powered by the train's wheels directly.",
    translation: "عادةً ما يتم تشغيل ضاغط الهواء في نظام الفرامل بواسطة عجلات القطار مباشرة.",
    hint: "مصدر الطاقة الحقيقي للضاغط ليس دوران العجلات نفسها.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "False"
  },
  {
    question: "The brake pedal valve converts the force applied by the driver into compressed air.",
    translation: "يقوم صمام دواسة الفرامل بتحويل القوة التي يطبقها السائق إلى هواء مضغوط.",
    hint: "هذا الصمام هو نقطة الربط بين السائق والنظام الهوائي.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "True"
  },
  {
    question: "Relay valves provide a slow and unbalanced distribution of air pressure during braking.",
    translation: "توفر صمامات الريلاي توزيعًا بطيئًا وغير متوازن لضغط الهواء أثناء الكبح.",
    hint: "وظيفتها الأساسية عكس ذلك تمامًا.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "False"
  },
  {
    question: "Load adjustment valves automatically adjust the brake pressure according to the load condition of the vehicle.",
    translation: "تقوم صمامات تعديل الحمل بضبط ضغط الفرامل تلقائيًا حسب حمولة المركبة.",
    hint: "العربة المحملة تحتاج قوة كبح مختلفة عن الفارغة.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "True"
  },
  {
    question: "Air dryers keep the system dry by adding necessary moisture to the air to lubricate the valves.",
    translation: "تحافظ مجففات الهواء على جفاف النظام عن طريق إضافة الرطوبة اللازمة للهواء.",
    hint: "اسمها وحده يكشف وظيفتها.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "False"
  },
  {
    question: "Air filters remove dust and dirt from the air, which helps extend the life of valves and cylinders.",
    translation: "تزيل مرشحات الهواء الأتربة والشوائب مما يطيل عمر الصمامات والأسطوانات.",
    hint: "الهواء النظيف يعني تآكلًا أقل للمكونات.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "True"
  },
  {
    question: "Air pipes in the braking system are typically made of low-pressure resistant materials.",
    translation: "تصنع مواسير الهواء في نظام الفرامل من مواد ضعيفة المقاومة للضغط.",
    hint: "فكر في كمية الضغط الموجودة داخل النظام.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "False"
  },
  {
    question: "Brake cylinders convert compressed air into mechanical motion.",
    translation: "تحول أسطوانات الفرامل الهواء المضغوط إلى حركة ميكانيكية.",
    hint: "هي المرحلة التي يتحول فيها الضغط إلى حركة فعلية.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "True"
  },
  {
    question: "Brake bellows transmit mechanical motion from the brake pads back to the cylinders.",
    translation: "تنقل منفاخات الفرامل الحركة من بطانات الفرامل إلى الأسطوانات.",
    hint: "اتجاه نقل الحركة في النظام ليس بهذه الصورة.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "False"
  },
  {
    question: "Brake pads are manufactured using materials with a very low coefficient of friction.",
    translation: "تصنع بطانات الفرامل من مواد ذات معامل احتكاك منخفض جدًا.",
    hint: "الفرامل تحتاج الإمساك بالعجلة لا الانزلاق عليها.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "False"
  },
  {
    question: "Disc brakes offer better cooling and braking performance compared to traditional drum brakes.",
    translation: "توفر الفرامل القرصية تبريدًا وأداء كبح أفضل من فرامل الطبل التقليدية.",
    hint: "لهذا السبب تُستخدم على نطاق واسع في الأنظمة الحديثة.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "True"
  },
  {
    question: "Correct operation of the load sensing system is especially important during cornering and sudden braking to prevent skidding.",
    translation: "يعد التشغيل الصحيح لنظام استشعار الحمل مهمًا أثناء المنحنيات والكبح المفاجئ لمنع الانزلاق.",
    hint: "توزيع قوة الكبح الخاطئ قد يؤدي لفقدان التماسك.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "True"
  },
  {
    question: "Retarders, such as engine exhaust or electric brakes, prevent the service brakes from overheating during long descents.",
    translation: "تمنع أنظمة الإبطاء مثل فرامل العادم أو الفرامل الكهربائية ارتفاع حرارة فرامل الخدمة أثناء المنحدرات الطويلة.",
    hint: "هي وسيلة مساعدة لتخفيف الحمل عن الفرامل الرئيسية.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "True"
  },
  {
    question: "The use of retarders generally shortens the lifespan of the primary brake pads and discs.",
    translation: "استخدام أنظمة الإبطاء يقلل عادةً من عمر بطانات وأقراص الفرامل الرئيسية.",
    hint: "عندما تقلل الحمل على جزء ما، هل يستهلك أسرع أم أبطأ؟",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "False"
  },
  {
    question: "Electronic control systems like EBS, ABS, and ASR are designed to prevent the wheels from locking and skidding.",
    translation: "صُممت أنظمة التحكم الإلكترونية مثل EBS وABS وASR لمنع انغلاق العجلات وانزلاقها.",
    hint: "كل هذه الأنظمة مرتبطة بتحسين الثبات والتحكم.",
    options: [{ text: "True", translation: "صح" }, { text: "False", translation: "خطأ" }],
    answer: "True"
  }
];

const questions91_105 = [
  {
    question: "What is the primary commitment of Total Quality Maintenance (TQM)?",
    translation: "ما الهدف الأساسي الذي تلتزم به الصيانة الشاملة للجودة (TQM)؟",
    hint: "ابحث عن الاختيار الذي يركز على التحسين المستمر على المدى الطويل.",
    options: [
      { text: "Reducing the initial cost of trains", translation: "تقليل التكلفة الأولية للقطارات" },
      { text: "Achieving short-term fixes for critical failures", translation: "تحقيق حلول مؤقتة للأعطال الحرجة" },
      { text: "Improving and achieving long-term excellence in maintenance processes", translation: "تحسين وتحقيق التميز طويل المدى في عمليات الصيانة" },
      { text: "Eliminating the need for a maintenance crew", translation: "إلغاء الحاجة إلى طاقم صيانة" }
    ],
    answer: "Improving and achieving long-term excellence in maintenance processes"
  },
  {
    question: "Through a quality improvement culture, TQM reduces the rate of errors and ensures that maintenance activities are maintained at:",
    translation: "من خلال ثقافة تحسين الجودة، يقلل TQM من الأخطاء ويضمن بقاء أنشطة الصيانة عند:",
    hint: "الجودة الشاملة تسعى لأعلى مستوى ممكن وليس الحد الأدنى.",
    options: [
      { text: "Acceptable minimum standards", translation: "الحد الأدنى المقبول من المعايير" },
      { text: "The highest standards possible", translation: "أعلى المعايير الممكنة" },
      { text: "Variable standards depending on the budget", translation: "معايير متغيرة حسب الميزانية" },
      { text: "The lowest possible cost", translation: "أقل تكلفة ممكنة" }
    ],
    answer: "The highest standards possible"
  },
  {
    question: "Which of the following is a key component of a maintenance strategy?",
    translation: "أي مما يلي يعد عنصرًا أساسيًا في استراتيجية الصيانة؟",
    hint: "الصيانة الجيدة تكتشف المشكلات قبل أن تتحول إلى أعطال.",
    options: [
      { text: "Waiting for sudden failures to occur before taking action", translation: "انتظار الأعطال المفاجئة قبل التدخل" },
      { text: "Detecting deviations in the state of machinery at early stages", translation: "اكتشاف الانحرافات في حالة المعدات مبكرًا" },
      { text: "Maximizing the deterioration rate of components", translation: "زيادة معدل تدهور المكونات" },
      { text: "Ignoring the probability of failure during the lead time", translation: "تجاهل احتمالية الفشل خلال فترة المهلة" }
    ],
    answer: "Detecting deviations in the state of machinery at early stages"
  },
  {
    question: "Which factor is a major influence on the commitment of operators to maintenance improvements?",
    translation: "ما العامل الذي يؤثر بشكل كبير على التزام العاملين بتحسينات الصيانة؟",
    hint: "البشر غالبًا يقاومون التغيير إذا لم يروا فائدته الشخصية.",
    options: [
      { text: "The color of the equipment", translation: "لون المعدات" },
      { text: "General resistance to changes if benefits to themselves are not obvious", translation: "المقاومة العامة للتغيير إذا لم تكن الفوائد واضحة لهم" },
      { text: "The geographical location of the workshop", translation: "الموقع الجغرافي للورشة" },
      { text: "The crest speed of the locomotive", translation: "السرعة القصوى للجرار" }
    ],
    answer: "General resistance to changes if benefits to themselves are not obvious"
  },
  {
    question: "What does Reliability-Centered Maintenance (RCM) ensure for railway systems?",
    translation: "ماذا تضمن الصيانة المتمركزة حول الاعتمادية (RCM) لأنظمة السكك الحديدية؟",
    hint: "تركز على الحفاظ على الوظائف المطلوبة بأفضل اعتمادية ممكنة.",
    options: [
      { text: "That the agreed-upon functionality is maintained at an optimized level of reliability", translation: "الحفاظ على الوظائف المطلوبة بمستوى اعتمادية مُحسن" },
      { text: "That maintenance is only performed after a total breakdown", translation: "إجراء الصيانة فقط بعد الانهيار الكامل" },
      { text: "That all components are replaced annually regardless of condition", translation: "استبدال جميع المكونات سنويًا بغض النظر عن حالتها" },
      { text: "That the system uses only reactive maintenance", translation: "أن النظام يستخدم الصيانة التفاعلية فقط" }
    ],
    answer: "That the agreed-upon functionality is maintained at an optimized level of reliability"
  },
  {
    question: "Why did customers of physical assets need a more comprehensive methodology like RCM over time?",
    translation: "لماذا احتاج مستخدمو الأصول المادية إلى منهجية أكثر شمولًا مثل RCM مع مرور الوقت؟",
    hint: "التخصص المتزايد فصل بين المصنع والمستخدم النهائي.",
    options: [
      { text: "Because tools became too simple to use", translation: "لأن الأدوات أصبحت بسيطة جدًا" },
      { text: "Because increased specialization separated the builders of equipment from the ultimate users", translation: "بسبب زيادة التخصص والفصل بين المصنعين والمستخدمين النهائيين" },
      { text: "Because machinery stopped breaking down", translation: "لأن المعدات توقفت عن التعطل" },
      { text: "Because maintenance manuals were lost", translation: "لأن كتيبات الصيانة فُقدت" }
    ],
    answer: "Because increased specialization separated the builders of equipment from the ultimate users"
  },
  {
    question: "Which of the following is included in the RCM analysis process?",
    translation: "أي مما يلي يدخل ضمن عملية تحليل RCM؟",
    hint: "تحليل المخاطر يبدأ بفهم احتمالات الفشل ونتائجه.",
    options: [
      { text: "Changing track gauge", translation: "تغيير عرض السكة" },
      { text: "Probability of Failure and Consequences of the failure", translation: "احتمالية الفشل ونتائج الفشل" },
      { text: "Increasing the engine's horsepower", translation: "زيادة قدرة المحرك" },
      { text: "Designing new aerodynamic shapes", translation: "تصميم أشكال انسيابية جديدة" }
    ],
    answer: "Probability of Failure and Consequences of the failure"
  },
  {
    question: "Why is rail maintenance vital according to the lectures?",
    translation: "لماذا تعتبر صيانة السكك الحديدية مهمة وفقًا للمحاضرات؟",
    hint: "هناك جانب قانوني وسلامة لا يمكن تجاهله.",
    options: [
      { text: "To make the trains look aesthetically pleasing", translation: "لجعل القطارات أكثر جمالًا" },
      { text: "To meet stringent safety and regulatory requirements", translation: "للوفاء بمتطلبات السلامة واللوائح الصارمة" },
      { text: "To increase the schedule time of the journey", translation: "لزيادة زمن الرحلة" },
      { text: "To justify the hiring of more staff", translation: "لتبرير توظيف المزيد من الموظفين" }
    ],
    answer: "To meet stringent safety and regulatory requirements"
  },
  {
    question: "Well-maintained rail systems achieve cost reduction primarily by:",
    translation: "تخفض أنظمة السكك الحديدية جيدة الصيانة التكاليف بشكل أساسي عن طريق:",
    hint: "الأعطال المفاجئة غالبًا هي الأغلى تكلفة.",
    options: [
      { text: "Avoiding unexpected failures that lead to costly delays and repairs", translation: "تجنب الأعطال المفاجئة التي تسبب تأخيرات وإصلاحات مكلفة" },
      { text: "Using substandard replacement parts", translation: "استخدام قطع غيار منخفضة الجودة" },
      { text: "Decreasing the speed of the trains", translation: "تقليل سرعة القطارات" },
      { text: "Disabling safety control devices", translation: "تعطيل أجهزة السلامة" }
    ],
    answer: "Avoiding unexpected failures that lead to costly delays and repairs"
  },
  {
    question: "What is a key action required in compressed air brake system maintenance?",
    translation: "ما الإجراء الأساسي المطلوب في صيانة نظام فرامل الهواء المضغوط؟",
    hint: "الرطوبة هي أحد أعداء الأنظمة الهوائية.",
    options: [
      { text: "Adding water to the air tanks", translation: "إضافة ماء إلى خزانات الهواء" },
      { text: "Removing the brake lining completely", translation: "إزالة بطانات الفرامل بالكامل" },
      { text: "Draining air tanks daily to remove moisture", translation: "تفريغ خزانات الهواء يوميًا لإزالة الرطوبة" },
      { text: "Disconnecting the air compressor", translation: "فصل ضاغط الهواء" }
    ],
    answer: "Draining air tanks daily to remove moisture"
  },
  {
    question: "In an air brake system, what receives air from the atmosphere and sends it to the system?",
    translation: "في نظام فرامل الهواء، ما المكون الذي يسحب الهواء من الجو ويرسله إلى النظام؟",
    hint: "هو القلب المسؤول عن ضغط الهواء.",
    options: [
      { text: "Brake Pedal Valve", translation: "صمام دواسة الفرامل" },
      { text: "Relay Valve", translation: "صمام الريلاي" },
      { text: "Air Dryer", translation: "مجفف الهواء" },
      { text: "Air Compressor", translation: "ضاغط الهواء" }
    ],
    answer: "Air Compressor"
  },
  {
    question: "What is the function of the brake pedal valve?",
    translation: "ما وظيفة صمام دواسة الفرامل؟",
    hint: "يربط بين قوة السائق وإشارة الكبح الهوائية.",
    options: [
      { text: "It stores compressed air for emergency use", translation: "يخزن الهواء المضغوط للطوارئ" },
      { text: "It removes moisture from the system", translation: "يزيل الرطوبة من النظام" },
      { text: "It converts the force applied by the driver into compressed air", translation: "يحول قوة السائق إلى ضغط هواء" },
      { text: "It cools the brake discs", translation: "يبرد أقراص الفرامل" }
    ],
    answer: "It converts the force applied by the driver into compressed air"
  },
  {
    question: "Which component provides fast and balanced distribution of air pressure during braking?",
    translation: "أي مكون يوفر توزيعًا سريعًا ومتوازنًا لضغط الهواء أثناء الكبح؟",
    hint: "اسمه يوحي بأنه يقوم بعملية توزيع وتحويل.",
    options: [
      { text: "Load Adjustment Valve", translation: "صمام تعديل الحمل" },
      { text: "Relay Valve", translation: "صمام الريلاي" },
      { text: "Air Filter", translation: "مرشح الهواء" },
      { text: "Retarder System", translation: "نظام الإبطاء" }
    ],
    answer: "Relay Valve"
  },
  {
    question: "What does the Load Adjustment Valve do?",
    translation: "ما وظيفة صمام تعديل الحمل؟",
    hint: "العربة الثقيلة تحتاج كبحًا مختلفًا عن الفارغة.",
    options: [
      { text: "Automatically adjusts the brake pressure according to the load condition of the vehicle", translation: "يضبط ضغط الفرامل تلقائيًا حسب الحمولة" },
      { text: "Increases the speed of the air compressor", translation: "يزيد سرعة ضاغط الهواء" },
      { text: "Dries the air in the tanks", translation: "يجفف الهواء داخل الخزانات" },
      { text: "Transmits motion from the cylinder to the pad", translation: "ينقل الحركة من الأسطوانة إلى البطانة" }
    ],
    answer: "Automatically adjusts the brake pressure according to the load condition of the vehicle"
  },
  {
    question: "What can moisture and particles in the air brake system cause?",
    translation: "ماذا يمكن أن تسبب الرطوبة والجسيمات داخل نظام فرامل الهواء؟",
    hint: "الشوائب والرطوبة عادةً لا تحسن الأداء.",
    options: [
      { text: "Better fuel efficiency", translation: "كفاءة وقود أفضل" },
      { text: "Corrosion and malfunctions", translation: "تآكل وأعطال" },
      { text: "Increased braking power", translation: "زيادة قوة الكبح" },
      { text: "Enhanced ABS response", translation: "تحسين استجابة ABS" }
    ],
    answer: "Corrosion and malfunctions"
  }
];

const questions106_120 = [
  {
    question: "What is the purpose of air filters in the braking system?",
    translation: "ما الغرض من مرشحات الهواء في نظام الفرامل؟",
    hint: "فكر في الشيء الذي يحافظ على نظافة الهواء قبل وصوله للمكونات الحساسة.",
    options: [
      { text: "To add lubricants to the air", translation: "إضافة مواد تشحيم إلى الهواء" },
      { text: "To heat the compressed air", translation: "تسخين الهواء المضغوط" },
      { text: "To remove dust and dirt from the air, extending the life of valves", translation: "إزالة الأتربة والشوائب من الهواء وإطالة عمر الصمامات" },
      { text: "To increase the moisture content of the air", translation: "زيادة نسبة الرطوبة في الهواء" }
    ],
    answer: "To remove dust and dirt from the air, extending the life of valves"
  },
  {
    question: "What do brake cylinders do in the braking mechanism?",
    translation: "ما وظيفة أسطوانات الفرامل في آلية الكبح؟",
    hint: "هنا يتحول ضغط الهواء إلى حركة فعلية.",
    options: [
      { text: "Generate electrical power", translation: "توليد طاقة كهربائية" },
      { text: "Convert compressed air into mechanical motion", translation: "تحويل الهواء المضغوط إلى حركة ميكانيكية" },
      { text: "Convert mechanical motion into compressed air", translation: "تحويل الحركة الميكانيكية إلى هواء مضغوط" },
      { text: "Store excess air from the atmosphere", translation: "تخزين الهواء الزائد من الجو" }
    ],
    answer: "Convert compressed air into mechanical motion"
  },
  {
    question: "Which component transmits the motion from the cylinders to the brake pads?",
    translation: "أي مكون ينقل الحركة من الأسطوانات إلى بطانات الفرامل؟",
    hint: "اسمه مرتبط بشكل مرن يشبه المنفاخ.",
    options: [
      { text: "Brake Bellows", translation: "منفاخ الفرامل" },
      { text: "Air Dryers", translation: "مجففات الهواء" },
      { text: "Relay Valves", translation: "صمامات الريلاي" },
      { text: "Engine Crankshaft", translation: "عمود المرفق للمحرك" }
    ],
    answer: "Brake Bellows"
  },
  {
    question: "Brake pads are made of materials with:",
    translation: "تصنع بطانات الفرامل من مواد ذات:",
    hint: "الفرامل الجيدة تحتاج قدرة كبيرة على الإمساك بالعجلة.",
    options: [
      { text: "A low coefficient of friction", translation: "معامل احتكاك منخفض" },
      { text: "A high coefficient of friction", translation: "معامل احتكاك مرتفع" },
      { text: "High electrical conductivity", translation: "موصلية كهربائية عالية" },
      { text: "Total thermal insulation", translation: "عزل حراري كامل" }
    ],
    answer: "A high coefficient of friction"
  },
  {
    question: "Compared to drum brakes, disc brakes offer:",
    translation: "مقارنة بفرامل الطبل، توفر الفرامل القرصية:",
    hint: "أحد أسباب انتشارها هو قدرتها الأفضل على التخلص من الحرارة.",
    options: [
      { text: "Worse cooling and braking performance", translation: "تبريد وأداء كبح أسوأ" },
      { text: "The exact same performance", translation: "نفس الأداء تمامًا" },
      { text: "Better cooling and braking performance", translation: "تبريد وأداء كبح أفضل" },
      { text: "Increased risk of fading", translation: "زيادة خطر ضعف الفرامل" }
    ],
    answer: "Better cooling and braking performance"
  },
  {
    question: "When is the correct operation of the load sensing system especially important?",
    translation: "متى تكون سلامة عمل نظام استشعار الحمل مهمة بشكل خاص؟",
    hint: "المواقف الحرجة تحدث عند تغير القوى بشكل مفاجئ.",
    options: [
      { text: "When the train is parked in the depot", translation: "عند توقف القطار في المستودع" },
      { text: "During engine startup", translation: "أثناء تشغيل المحرك" },
      { text: "In cornering and sudden braking", translation: "أثناء المنحنيات والكبح المفاجئ" },
      { text: "When decoupling cars", translation: "عند فصل العربات" }
    ],
    answer: "In cornering and sudden braking"
  },
  {
    question: "Retarder systems work on different principles, such as:",
    translation: "تعتمد أنظمة الإبطاء على مبادئ مختلفة مثل:",
    hint: "هناك أنظمة تستخدم المحرك نفسه أو الطاقة الكهربائية للمساعدة في الكبح.",
    options: [
      { text: "Air compression and filtering", translation: "ضغط الهواء وتنقيته" },
      { text: "Engine exhaust brakes or electric brakes", translation: "فرامل العادم أو الفرامل الكهربائية" },
      { text: "Relay distribution and load adjustment", translation: "توزيع الريلاي وتعديل الحمل" },
      { text: "Moisture absorption and drying", translation: "امتصاص الرطوبة والتجفيف" }
    ],
    answer: "Engine exhaust brakes or electric brakes"
  },
  {
    question: "What is a major benefit of using retarder systems on long descents?",
    translation: "ما الفائدة الرئيسية من استخدام أنظمة الإبطاء في المنحدرات الطويلة؟",
    hint: "تخيل استخدام الفرامل التقليدية وحدها لساعات متواصلة.",
    options: [
      { text: "They increase the train's crest speed", translation: "تزيد السرعة القصوى للقطار" },
      { text: "They prevent the service brakes from overheating", translation: "تمنع ارتفاع حرارة فرامل الخدمة" },
      { text: "They clean the air filters automatically", translation: "تنظف مرشحات الهواء تلقائيًا" },
      { text: "They reduce the air pressure in the tanks to zero", translation: "تخفض ضغط الهواء إلى الصفر" }
    ],
    answer: "They prevent the service brakes from overheating"
  },
  {
    question: "How do retarders affect the primary braking components?",
    translation: "كيف تؤثر أنظمة الإبطاء على مكونات الفرامل الرئيسية؟",
    hint: "عندما يتوزع الجهد على أكثر من نظام يقل الاستهلاك.",
    options: [
      { text: "They cause the brake discs to warp", translation: "تسبب تشوه أقراص الفرامل" },
      { text: "They increase the wear rate of brake pads", translation: "تزيد معدل تآكل البطانات" },
      { text: "They extend the life of the brake pads and discs", translation: "تطيل عمر البطانات والأقراص" },
      { text: "They bypass the brake cylinders completely", translation: "تتجاوز أسطوانات الفرامل بالكامل" }
    ],
    answer: "They extend the life of the brake pads and discs"
  },
  {
    question: "What do EBS, ABS, and ASR stand for functionally?",
    translation: "إلى ماذا تشير أنظمة EBS وABS وASR من الناحية الوظيفية؟",
    hint: "جميعها أنظمة تعتمد على الإلكترونيات للتحكم.",
    options: [
      { text: "Engine block systems", translation: "أنظمة كتلة المحرك" },
      { text: "Electronic control systems", translation: "أنظمة التحكم الإلكترونية" },
      { text: "Exhaust braking systems", translation: "أنظمة فرامل العادم" },
      { text: "Emergency backup systems", translation: "أنظمة الطوارئ الاحتياطية" }
    ],
    answer: "Electronic control systems"
  },
  {
    question: "What is the primary function of ABS and ASR systems during braking?",
    translation: "ما الوظيفة الأساسية لأنظمة ABS وASR أثناء الكبح؟",
    hint: "الهدف هو الحفاظ على التماسك والسيطرة.",
    options: [
      { text: "To lock the wheels instantly", translation: "قفل العجلات فورًا" },
      { text: "To prevent the wheels from locking and skidding", translation: "منع انغلاق العجلات وانزلاقها" },
      { text: "To shut down the engine", translation: "إيقاف المحرك" },
      { text: "To increase the air tank pressure", translation: "زيادة ضغط خزانات الهواء" }
    ],
    answer: "To prevent the wheels from locking and skidding"
  },
  {
    question: "Which of the following is a recommended safety practice for air brakes?",
    translation: "أي مما يلي يعد ممارسة أمان موصى بها لفرامل الهواء؟",
    hint: "الرطوبة داخل النظام الهوائي ليست صديقًا جيدًا.",
    options: [
      { text: "Only checking air pressure yearly", translation: "فحص ضغط الهواء سنويًا فقط" },
      { text: "Regularly draining the water from the air tanks", translation: "تفريغ المياه من خزانات الهواء بانتظام" },
      { text: "Ignoring small air leaks in connection points", translation: "تجاهل تسريبات الهواء الصغيرة" },
      { text: "Bypassing the air dryer", translation: "تجاوز مجفف الهواء" }
    ],
    answer: "Regularly draining the water from the air tanks"
  },
  {
    question: "Poor resource management in maintenance operations usually leads to:",
    translation: "سوء إدارة الموارد في عمليات الصيانة يؤدي عادة إلى:",
    hint: "فكر في النتيجة الطبيعية لنقص التخطيط والتنظيم.",
    options: [
      { text: "Decreased operational costs", translation: "انخفاض التكاليف التشغيلية" },
      { text: "Increased safety", translation: "زيادة السلامة" },
      { text: "Delays, increased costs, and compromised safety", translation: "تأخيرات وزيادة التكاليف وتراجع السلامة" },
      { text: "Faster schedule speeds", translation: "سرعات تشغيل أعلى" }
    ],
    answer: "Delays, increased costs, and compromised safety"
  },
  {
    question: "Which component stores compressed air and supplies it to the system when needed?",
    translation: "أي مكون يخزن الهواء المضغوط ويزود النظام به عند الحاجة؟",
    hint: "هو بمثابة خزان احتياطي للطاقة الهوائية.",
    options: [
      { text: "Brake Pedal Valve", translation: "صمام دواسة الفرامل" },
      { text: "Air Compressor", translation: "ضاغط الهواء" },
      { text: "Air Tanks", translation: "خزانات الهواء" },
      { text: "Bellows", translation: "المنفاخ" }
    ],
    answer: "Air Tanks"
  },
  {
    question: "A maintenance strategy must determine the acceptable deterioration rate to guarantee:",
    translation: "يجب أن تحدد استراتيجية الصيانة معدل التدهور المقبول لضمان:",
    hint: "الهدف هو منع المفاجآت غير المرغوبة قبل موعد التدخل.",
    options: [
      { text: "Maximum noise reduction", translation: "أقصى خفض للضوضاء" },
      { text: "No sudden failure during the lead time", translation: "عدم حدوث فشل مفاجئ خلال فترة المهلة" },
      { text: "Complete engine overhaul every month", translation: "عمرة كاملة للمحرك كل شهر" },
      { text: "Lower average speeds", translation: "سرعات متوسطة أقل" }
    ],
    answer: "No sudden failure during the lead time"
  }
];

const questions76to90 = [
  {
    id: 76,
    type: "tf",
    question: "The air compressor is mounted to the engine and pumps air into the storage tanks.",
    translation: "يتم تركيب ضاغط الهواء على المحرك ويقوم بضخ الهواء إلى خزانات التخزين.",
    hint: "فكر في المصدر الأساسي للهواء المضغوط قبل وصوله للخزانات.",
    answer: "T"
  },
  {
    id: 77,
    type: "tf",
    question: "The air dryer adds moisture to the compressed air to keep the internal valves lubricated.",
    translation: "يقوم مجفف الهواء بإضافة الرطوبة للهواء المضغوط للحفاظ على تزييت الصمامات الداخلية.",
    hint: "اسم المكون نفسه يكشف وظيفته الحقيقية.",
    answer: "F"
  },
  {
    id: 78,
    type: "tf",
    question: "Brake chambers are responsible for converting air pressure into mechanical force.",
    translation: "غرف الفرامل مسؤولة عن تحويل ضغط الهواء إلى قوة ميكانيكية.",
    hint: "هناك جزء في نظام الفرامل يعمل كوسيط بين الهواء والحركة.",
    answer: "T"
  },
  {
    id: 79,
    type: "tf",
    question: "A failed DOT inspection for air brakes only results in a warning, without any operational disruptions or fines.",
    translation: "الفشل في فحص DOT لفرامل الهواء يؤدي فقط إلى تحذير دون غرامات أو تعطيل للتشغيل.",
    hint: "قوانين السلامة الخاصة بالفرامل لا تُعامل عادة بهذه البساطة.",
    answer: "F"
  },
  {
    id: 80,
    type: "tf",
    question: "DOT regulations strictly require drivers to inspect their brakes before every single trip.",
    translation: "تشترط لوائح DOT على السائقين فحص الفرامل قبل كل رحلة.",
    hint: "سلامة المركبة تبدأ قبل التحرك وليس بعده.",
    answer: "T"
  },
  {
    id: 81,
    type: "tf",
    question: "The '90-60 test' is used to ensure that the low air warning buzzer activates around 60 PSI.",
    translation: "يُستخدم اختبار 90-60 للتأكد من عمل جرس التحذير عند حوالي 60 PSI.",
    hint: "الرقم الثاني في اسم الاختبار مهم جداً.",
    answer: "T"
  },
  {
    id: 82,
    type: "tf",
    question: "A faulty air dryer can lead to rusted chambers in the summer and frozen air lines in the winter.",
    translation: "قد يؤدي تعطل مجفف الهواء إلى صدأ الغرف صيفاً وتجمد خطوط الهواء شتاءً.",
    hint: "الرطوبة الزائدة تسبب مشكلتين مختلفتين حسب درجة الحرارة.",
    answer: "T"
  },
  {
    id: 83,
    type: "tf",
    question: "Quarterly brake adjustments and component checks should be performed at least every 90 days by a certified technician.",
    translation: "يجب إجراء ضبط وفحص مكونات الفرامل كل 90 يوماً بواسطة فني معتمد.",
    hint: "كلمة Quarterly مرتبطة بعدد محدد من الأشهر.",
    answer: "T"
  },
  {
    id: 84,
    type: "tf",
    question: "Neglecting quarterly maintenance tasks has no real effect on stopping distances as long as the air pressure is high.",
    translation: "إهمال الصيانة الدورية ربع السنوية لا يؤثر على مسافة التوقف طالما ضغط الهواء مرتفع.",
    hint: "ضغط الهواء وحده لا يضمن كفاءة جميع أجزاء الفرامل.",
    answer: "F"
  },
  {
    id: 85,
    type: "tf",
    question: "An annual full system inspection should include checking pressure protection valves and spring brake integrity.",
    translation: "يجب أن يشمل الفحص السنوي الكامل صمامات حماية الضغط وسلامة فرامل الزنبرك.",
    hint: "الفحص السنوي يركز على العناصر الحرجة للسلامة.",
    answer: "T"
  },
  {
    id: 86,
    type: "tf",
    question: "A spongy brake pedal is a normal condition and does not require immediate attention.",
    translation: "الإحساس بليونة أو إسفنجية دواسة الفرامل أمر طبيعي ولا يحتاج لتدخل فوري.",
    hint: "أي تغير ملحوظ في استجابة الفرامل يستحق الاهتمام.",
    answer: "F"
  },
  {
    id: 87,
    type: "tf",
    question: "Automatic slack adjusters are completely 'set-and-forget' and do not require manual lubrication once installed.",
    translation: "معدلات الخلوص الأوتوماتيكية لا تحتاج لأي تزييت أو متابعة بعد تركيبها.",
    hint: "أوتوماتيكي لا تعني عدم الحاجة للصيانة إطلاقاً.",
    answer: "F"
  },
  {
    id: 88,
    type: "tf",
    question: "Air brake components specifically require high-temperature synthetic grease to prevent gumming or washout.",
    translation: "تحتاج مكونات فرامل الهواء إلى شحم صناعي عالي الحرارة لمنع التكتل أو الزوال.",
    hint: "بيئة عمل الفرامل تتضمن حرارة وظروف تشغيل قاسية.",
    answer: "T"
  },
  {
    id: 89,
    type: "tf",
    question: "The typical manufacturer's recommended air pressure range for an air brake system is between 50 and 75 psi.",
    translation: "المدى الموصى به عادة لضغط نظام فرامل الهواء هو بين 50 و75 psi.",
    hint: "القيم التشغيلية المعتادة أعلى مما قد تتوقع.",
    answer: "F"
  },
  {
    id: 90,
    type: "tf",
    question: "Safety valves must be tested regularly to prevent the over-pressurization of the air brake system.",
    translation: "يجب اختبار صمامات الأمان بانتظام لمنع زيادة الضغط داخل نظام الفرامل الهوائية.",
    hint: "وظيفة هذا المكون مرتبطة بالحماية من تجاوز الحدود المسموحة.",
    answer: "T"
  }
];

const questions91to105 = [
  {
    id: 91,
    type: "mcq",
    question: "What is the primary function of the air dryer in an air brake system?",
    translation: "ما الوظيفة الأساسية لمجفف الهواء في نظام فرامل الهواء؟",
    options: [
      { text: "To pump air into the storage tanks", translation: "ضخ الهواء إلى خزانات التخزين" },
      { text: "To remove moisture from the compressed air", translation: "إزالة الرطوبة من الهواء المضغوط" },
      { text: "To convert air pressure into mechanical force", translation: "تحويل ضغط الهواء إلى قوة ميكانيكية" },
      { text: "To lubricate the brake shoes", translation: "تزييت أحذية الفرامل" }
    ],
    hint: "الرطوبة هي العدو الأول لخطوط الهواء والصمامات.",
    answer: "B"
  },
  {
    id: 92,
    type: "mcq",
    question: "Which component is responsible for maintaining the correct distance between brake shoes and drums?",
    translation: "أي مكون مسؤول عن الحفاظ على المسافة الصحيحة بين أحذية الفرامل والطبلة؟",
    options: [
      { text: "Slack adjusters", translation: "معدلات الخلوص" },
      { text: "Brake chambers", translation: "غرف الفرامل" },
      { text: "S-cam assembly", translation: "مجموعة S-Cam" },
      { text: "Air lines", translation: "خطوط الهواء" }
    ],
    hint: "اسمه يوحي بأنه يقوم بعملية الضبط والتعديل.",
    answer: "A"
  },
  {
    id: 93,
    type: "mcq",
    question: "During the '90-60 test,' at what pressure should the low air warning buzzer activate?",
    translation: "أثناء اختبار 90-60 عند أي ضغط يجب أن يعمل جرس التحذير؟",
    options: [
      { text: "30 PSI", translation: "30 PSI" },
      { text: "60 PSI", translation: "60 PSI" },
      { text: "90 PSI", translation: "90 PSI" },
      { text: "120 PSI", translation: "120 PSI" }
    ],
    hint: "الرقم الثاني في اسم الاختبار ليس موجوداً عبثاً.",
    answer: "B"
  },
  {
    id: 94,
    type: "mcq",
    question: "How often should you manually inspect the air dryer and drain excess water from the tanks if necessary?",
    translation: "كم مرة يجب فحص مجفف الهواء وتصريف المياه الزائدة من الخزانات عند الحاجة؟",
    options: [
      { text: "Daily", translation: "يومياً" },
      { text: "Monthly", translation: "شهرياً" },
      { text: "Quarterly", translation: "كل ثلاثة أشهر" },
      { text: "Annually", translation: "سنوياً" }
    ],
    hint: "ليس فحصاً يومياً ولكنه أكثر تكراراً من السنوي.",
    answer: "B"
  },
  {
    id: 95,
    type: "mcq",
    question: "Which of the following is NOT typically part of the quarterly (90-day) brake component check?",
    translation: "أي مما يلي لا يعد جزءاً من فحص الفرامل الربع سنوي؟",
    options: [
      { text: "Manually checking slack adjuster travel", translation: "فحص حركة معدلات الخلوص يدوياً" },
      { text: "Inspecting S-cams and bushings for wear", translation: "فحص S-Cam والجلب للتآكل" },
      { text: "Replacing the main air compressor", translation: "استبدال ضاغط الهواء الرئيسي" },
      { text: "Cleaning and lubricating all pivot points", translation: "تنظيف وتزييت نقاط الارتكاز" }
    ],
    hint: "هذا الإجراء أكبر بكثير من مجرد فحص دوري.",
    answer: "C"
  },
  {
    id: 96,
    type: "mcq",
    question: "What components should be thoroughly checked during the annual full system inspection?",
    translation: "ما المكونات التي يجب فحصها بدقة خلال الفحص السنوي الكامل؟",
    options: [
      { text: "Air pressure build-up time only", translation: "زمن بناء ضغط الهواء فقط" },
      { text: "Pressure protection valves, spring brake integrity, and ABS wiring", translation: "صمامات الحماية وسلامة فرامل الزنبرك وأسلاك ABS" },
      { text: "Only the air dryer filter", translation: "فلتر مجفف الهواء فقط" },
      { text: "Tire pressure and cabin temperature", translation: "ضغط الإطارات ودرجة حرارة الكابينة" }
    ],
    hint: "الفحص السنوي يشمل عناصر السلامة الأساسية في النظام.",
    answer: "B"
  },
  {
    id: 97,
    type: "mcq",
    question: "What does a 'spongy' brake pedal usually indicate in an air brake system?",
    translation: "ماذا يدل الإحساس بدواسة فرامل إسفنجية عادة؟",
    options: [
      { text: "Insufficient air pressure or a failing diaphragm", translation: "ضغط هواء غير كافٍ أو تلف في الحجاب الحاجز" },
      { text: "Freshly installed brake pads", translation: "تركيب بطانات جديدة" },
      { text: "Clogged air lines", translation: "انسداد خطوط الهواء" },
      { text: "Properly lubricated S-cams", translation: "تزييت جيد لـ S-Cam" }
    ],
    hint: "الشعور غير الطبيعي في الدواسة غالباً يشير إلى مشكلة في الضغط أو التشغيل.",
    answer: "A"
  },
  {
    id: 98,
    type: "mcq",
    question: "Excessive brake lag is a red flag that could mean:",
    translation: "التأخر الزائد في استجابة الفرامل قد يشير إلى:",
    options: [
      { text: "The air storage tanks are too large", translation: "خزانات الهواء كبيرة جداً" },
      { text: "The truck is carrying too little weight", translation: "المركبة تحمل وزناً قليلاً" },
      { text: "There are clogged air lines or failing valves", translation: "انسداد خطوط الهواء أو تلف الصمامات" },
      { text: "The ABS sensor is disconnected", translation: "فصل حساس ABS" }
    ],
    hint: "عندما يتأخر وصول الهواء أو توزيعه تظهر هذه المشكلة.",
    answer: "C"
  },
  {
    id: 99,
    type: "mcq",
    question: "Uneven braking, or a truck pulling to one side, is a direct indication of:",
    translation: "عدم توازن الفرملة أو انحراف المركبة لجانب واحد يدل مباشرة على:",
    options: [
      { text: "Uneven slack adjuster tension or worn brake shoes", translation: "عدم تساوي ضبط الخلوص أو تآكل أحذية الفرامل" },
      { text: "A brand-new air dryer installation", translation: "تركيب مجفف هواء جديد" },
      { text: "Perfectly balanced relay valves", translation: "توازن مثالي لصمامات الريلاي" },
      { text: "The use of high-temperature synthetic grease", translation: "استخدام شحم صناعي عالي الحرارة" }
    ],
    hint: "إذا كانت قوة الكبح مختلفة بين الجانبين فستتجه المركبة لأحدهما.",
    answer: "A"
  },
  {
    id: 100,
    type: "mcq",
    question: "What is a common and dangerous mistake regarding automatic slack adjusters?",
    translation: "ما الخطأ الشائع والخطير المتعلق بمعدلات الخلوص الأوتوماتيكية؟",
    options: [
      { text: "Assuming they adjust on their own without needing proper installation or lubrication", translation: "الاعتقاد أنها لا تحتاج تركيباً أو تزييتاً صحيحاً" },
      { text: "Checking them during pre-trip inspections", translation: "فحصها قبل الرحلة" },
      { text: "Applying high-temperature synthetic grease to them", translation: "وضع شحم صناعي عالي الحرارة عليها" },
      { text: "Replacing them every 90 days", translation: "استبدالها كل 90 يوماً" }
    ],
    hint: "كلمة أوتوماتيكي لا تعني تجاهل الصيانة.",
    answer: "A"
  },
  {
    id: 101,
    type: "mcq",
    question: "What type of grease must be used for air brake components to avoid part failure?",
    translation: "ما نوع الشحم المطلوب لمكونات فرامل الهواء لتجنب الأعطال؟",
    options: [
      { text: "Low-temperature lithium grease", translation: "شحم ليثيوم منخفض الحرارة" },
      { text: "High-temperature synthetic grease", translation: "شحم صناعي عالي الحرارة" },
      { text: "Standard petroleum jelly", translation: "فازلين بترولي عادي" },
      { text: "Standard automotive chassis grease", translation: "شحم شاسيه عادي" }
    ],
    hint: "الفرامل تعمل في ظروف حرارة مرتفعة نسبياً.",
    answer: "B"
  },
  {
    id: 102,
    type: "mcq",
    question: "What is the typical manufacturer's recommended air pressure range for maintaining optimal braking performance?",
    translation: "ما نطاق ضغط الهواء الموصى به للحصول على أفضل أداء للفرامل؟",
    options: [
      { text: "40 to 60 psi", translation: "40 إلى 60 psi" },
      { text: "70 to 90 psi", translation: "70 إلى 90 psi" },
      { text: "100 to 125 psi", translation: "100 إلى 125 psi" },
      { text: "130 to 150 psi", translation: "130 إلى 150 psi" }
    ],
    hint: "الأنظمة الثقيلة تعمل عادة عند ضغوط أعلى من 100 PSI.",
    answer: "C"
  },
  {
    id: 103,
    type: "mcq",
    question: "Why is it absolutely necessary to drain air tanks regularly?",
    translation: "لماذا من الضروري تصريف خزانات الهواء بانتظام؟",
    options: [
      { text: "To prevent the air from getting too dry", translation: "لمنع جفاف الهواء" },
      { text: "To remove moisture and contaminants that can freeze or cause blockages", translation: "لإزالة الرطوبة والشوائب التي قد تسبب تجمد أو انسداد" },
      { text: "To increase the overall air capacity of the system", translation: "لزيادة سعة الهواء" },
      { text: "To cool down the brake pads during long descents", translation: "لتبريد بطانات الفرامل" }
    ],
    hint: "المياه داخل الخطوط الهوائية مشكلة خطيرة خاصة في الشتاء.",
    answer: "B"
  },
  {
    id: 104,
    type: "mcq",
    question: "What is the exact purpose of testing the safety valves in an air brake system?",
    translation: "ما الهدف من اختبار صمامات الأمان في نظام الفرامل الهوائية؟",
    options: [
      { text: "To ensure the system operates silently", translation: "ضمان التشغيل الهادئ" },
      { text: "To prevent over-pressurization of the system", translation: "منع زيادة الضغط عن الحد المسموح" },
      { text: "To convert mechanical force back to air pressure", translation: "تحويل القوة الميكانيكية إلى ضغط هواء" },
      { text: "To drain the oil from the compressor", translation: "تصريف الزيت من الضاغط" }
    ],
    hint: "وظيفتها الأساسية هي الحماية عند تجاوز الحدود الآمنة.",
    answer: "B"
  },
  {
    id: 105,
    type: "mcq",
    question: "According to the lecture, non-compliance with commercial vehicle braking regulations can lead to:",
    translation: "وفقاً للمحاضرة، عدم الالتزام بلوائح فرامل المركبات التجارية قد يؤدي إلى:",
    options: [
      { text: "Increased fuel efficiency", translation: "زيادة كفاءة الوقود" },
      { text: "Free maintenance upgrades from the manufacturer", translation: "صيانة مجانية من الشركة" },
      { text: "Fines and vehicle impoundment", translation: "غرامات وحجز المركبة" },
      { text: "Lower insurance premiums", translation: "خفض أقساط التأمين" }
    ],
    hint: "مخالفات السلامة غالباً تكون لها عواقب قانونية وتشغيلية.",
    answer: "C"
  }
];

function normalizeQuestion(q) {
    const options = Array.isArray(q.options)
        ? q.options.map(opt => typeof opt === 'object' ? opt.text : opt)
        : [];
    const translationOptions = Array.isArray(q.options)
        ? q.options.map((opt, index) => {
            if (typeof opt === 'object') return opt.translation || '';
            if (Array.isArray(q.options_ar) && q.options_ar[index] != null) return q.options_ar[index];
            return '';
          })
        : Array.isArray(q.options_ar) ? q.options_ar : [];
    const answer = typeof q.answer === 'string'
        ? q.answer === 'T' ? 'True'
          : q.answer === 'F' ? 'False'
          : ['A','B','C','D'].includes(q.answer)
            ? options[['A','B','C','D'].indexOf(q.answer)] || q.answer
            : q.answer
        : q.answer;
    return {
        id: q.id,
        type: q.type || (options.length === 2 && options.includes('True') && options.includes('False') ? 'tf' : 'mcq'),
        question: q.question,
        translation: q.translation || '',
        options,
        translationOptions,
        hint: q.hint || '',
        hintTranslation: q.hintAr || q.hintTranslation || '',
        answer
    };
}

const allQuestions = [
    ...railwayQuiz,
    ...questionsTF_1,
    ...questionsTF_2,
    ...mcq_1,
    ...mcq_2,
    ...maintenanceQuestions,
    ...questions61_75,
    ...questions76_90,
    ...questions91_105,
    ...questions106_120,
    ...questions76to90,
    ...questions91to105
].map(normalizeQuestion).map((q, index) => ({ id: index + 1, ...q }));

let idx = 0, score = 0;
let userAns = new Array(allQuestions.length).fill(null);

const beboMessages = {
    intro: ["مرحبا اسمي بيبو جاهز لبدء الاختبار؟"],
    correct: [
        "عاش يا وحش! أداء أسطوري.", "الله ينور عليك، تركيزك في السما!", "ممتاز! كمل يا بطل بنفس الحماس.",
        "وحش! إجابة فنية مية مية.", "رائع، أنت فاهم اللعبة كويس جداً.", "برافو! إجابة أسطورية زي ما توقعت.",
        "عاش يا دحيح، مجهودك جبار.", "تسلم إيدك، إجابة مظبوطة بالملي.", "أحسنت! فخور بيك فعلاً يا وحش."
    ],
    wrong: [
        "غلط تماماً! ركز بقى عشان كدة كتير أوي!",
        "إيه العك ده؟ فوق كدة واقرأ السؤال كويس يا هندسة!",
        "إجابة كارثية! راجع معلوماتك فوراً كدة مينفعش!",
        "غلط! أنت بتهزر ولا إيه؟ ركز بقى شوية!"
    ],
    resultsAdvice: [
        "نتيجتك دى يسطا ولا درجة حرارة.",
        "منتا لو تبص على التلميحات وأنت بتحل مكنتش جبت درجات الحرارة دى.",
        "تعال اشرب شاي يسطا باللي أنت عامله ده.",
        "متزعلش مش مهم درجتك في الامتحان المهم الصحة والستر.",
        "هيجي شخص يحسسك إنك في كفة والكون كله في كفة وبعدين يسقفلك بالكفتين على وشك علشان النتيجة اللي أنت جايبها دى."
    ],
    resultsSuccess: [
        "ما شاء الله عليك يا بطل!",
        "هايل بجد عاش عليك، استمر.",
        "شيء جميل جداً عندك أحسن من كده كمان عاش عليك."
    ]
};

function setBebo(state, category) {
    const robot = document.getElementById('bebo-robot');
    const bubble = document.getElementById('bebo-bubble');
    const msgs = beboMessages[category];
    robot.className = `bebo-robot ${state}`;
    if (msgs) {
        bubble.innerText = msgs[Math.floor(Math.random() * msgs.length)];
        bubble.classList.add('active');
    }
    setTimeout(() => { bubble.classList.remove('active'); }, 4000);
}

function toggleHint() {
    const content = document.getElementById('hint-content');
    const bulb = document.querySelector('.bulb-icon');
    content.classList.toggle('hidden');
    bulb.style.fill = content.classList.contains('hidden') ? '#333' : '#3b82f6';
}

function render() {
    const q = allQuestions[idx];
    document.getElementById('question-number').innerText = `ASSESSMENT POINT ${idx + 1} OF ${allQuestions.length}`;
    document.getElementById('question-text').innerText = q.question;
    document.getElementById('question-translation').innerText = q.translation || "";
    document.getElementById('hint-text').innerText = q.hint;
    document.getElementById('hint-translation').innerText = q.hintTranslation || "";
    document.getElementById('hint-content').classList.add('hidden');
    document.querySelector('.bulb-icon').style.fill = '#333';
    
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    
    const answered = userAns[idx] !== null;
    document.getElementById('next-btn').disabled = !answered;
    document.getElementById('back-btn').disabled = idx === 0;

    q.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn rounded-sm flex flex-col w-full';
        const optLabel = String.fromCharCode(65 + i);
        const optTr = q.translationOptions ? q.translationOptions[i] : "";
        
        btn.innerHTML = `
            <div class="flex items-center gap-2 md:gap-3">
                <span class="bg-white/5 w-5 h-5 md:w-6 md:h-6 rounded-md flex items-center justify-center font-bold text-[9px] md:text-[10px]">${optLabel}</span>
                <span class="text-xs md:text-sm">${opt}</span>
            </div>
            <span class="translation-text text-[10px] md:text-[11px] opacity-70 mt-1">${optTr}</span>
        `;
        
        if (answered) {
            btn.classList.add('locked');
            if (opt === q.answer) btn.classList.add('correct');
            if (userAns[idx] === opt && opt !== q.answer) btn.classList.add('wrong');
        } else {
            btn.onclick = () => select(opt);
        }
        container.appendChild(btn);
    });
    
    document.getElementById('progress-fill').style.width = `${((idx + 1) / allQuestions.length) * 100}%`;
}

function select(choice) {
    if (userAns[idx] !== null) return;
    userAns[idx] = choice;
    const correct = (choice === allQuestions[idx].answer);
    if (correct) { score++; setBebo('success', 'correct'); }
    else { setBebo('error', 'wrong'); }
    render();
}

function nextQuestion() { 
    if (idx < allQuestions.length - 1) { idx++; render(); } 
    else finish(); 
}

function prevQuestion() { if (idx > 0) { idx--; render(); } }

function finish() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.querySelector('.bebo-wrapper').classList.add('hidden');
    document.getElementById('result-view').classList.remove('hidden');
    const pct = Math.round((score / allQuestions.length) * 100);
    document.getElementById('final-score').innerText = pct + '%';
    const category = pct >= 70 ? 'resultsSuccess' : 'resultsAdvice';
    document.getElementById('result-message').innerText = beboMessages[category][Math.floor(Math.random()*beboMessages[category].length)];
}

function restartQuiz() {
    idx = 0; score = 0;
    userAns = new Array(allQuestions.length).fill(null);
    document.querySelector('.bebo-wrapper').classList.remove('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('result-view').classList.add('hidden');
    render();
    setBebo('ready', 'intro');
}

window.onload = () => { render(); setBebo('ready', 'intro'); };