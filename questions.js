const QUESTIONS = {
  "hotel": [
  {
    "type":"fill",
    "scene":"At the hotel reception.",
    "text":"Receptionist: Welcome! Do you have a ___?",
    "blanks":["reservation"],
    "hint":"booking"
  },
  {
    "type":"fill",
    "scene":"Checking in.",
    "text":"Receptionist: Here is your room ___.",
    "blanks":["key"],
    "hint":"used to open a door"
  },
  {
    "type":"mcq",
    "scene":"Hotel vocabulary.",
    "text":"Who helps carry luggage in a hotel?",
    "options":["Porter","Chef","Doctor","Teacher"],
    "answer":0
  },
  {
    "type":"fill",
    "scene":"Articles.",
    "text":"We booked ___ room for two nights.",
    "blanks":["a"],
    "hint":"one room"
  },
  {
    "type":"fill",
    "scene":"Articles.",
    "text":"Please take ___ elevator to the third floor.",
    "blanks":["the"],
    "hint":"specific elevator"
  },
  {
    "type":"fill",
    "scene":"Prepositions.",
    "text":"The restaurant is ___ the first floor.",
    "blanks":["on"],
    "hint":"floor location"
  },
  {
    "type":"fill",
    "scene":"Prepositions.",
    "text":"Your bags are ___ the room.",
    "blanks":["in"],
    "hint":"inside"
  },
  {
    "type":"mcq",
    "scene":"Prepositions.",
    "text":"The hotel is ___ the beach.",
    "options":["near","eat","beautiful","quickly"],
    "answer":0
  },
  {
    "type":"fill",
    "scene":"Adjectives.",
    "text":"The room is very ___ and comfortable.",
    "blanks":["clean"],
    "hint":"not dirty"
  },
  {
    "type":"mcq",
    "scene":"Adjectives.",
    "text":"Which word is an adjective?",
    "options":["spacious","quickly","under","because"],
    "answer":0
  },
  {
    "type":"fill",
    "scene":"Adverbs.",
    "text":"The receptionist spoke very ___.",
    "blanks":["politely"],
    "hint":"good manners"
  },
  {
    "type":"mcq",
    "scene":"Adverbs.",
    "text":"Which word is an adverb?",
    "options":["politely","polite","hotel","room"],
    "answer":0
  },
  {
    "type":"conv",
    "scene":"Checking in.",
    "dialogue":[
      {
        "speaker":"Guest",
        "side":"right",
        "text":"Can I have a room on a higher ___?",
        "blank":true,
        "answer":"floor",
        "hint":"level"
      },
      {
        "speaker":"Receptionist",
        "side":"left",
        "text":"Certainly."
      },
      {
        "speaker":"Guest",
        "side":"right",
        "text":"Thank you for your ___.",
        "blank":true,
        "answer":"help",
        "hint":"assistance"
      }
    ]
  },
  {
    "type":"conv",
    "scene":"Room service.",
    "dialogue":[
      {
        "speaker":"Guest",
        "side":"right",
        "text":"I would like some extra ___.",
        "blank":true,
        "answer":"towels",
        "hint":"used after a bath"
      },
      {
        "speaker":"Staff",
        "side":"left",
        "text":"Certainly. We will send them right away."
      }
    ]
  },
  {
    "type":"fill",
    "scene":"Past tense.",
    "text":"Last year we ___ in this hotel.",
    "blanks":["stayed"],
    "hint":"past tense of stay"
  },
  {
    "type":"mcq",
    "scene":"Future tense.",
    "text":"Next month we ___ here again.",
    "options":["will stay","stayed","staying","stays"],
    "answer":0
  },
  {
    "type":"mcq",
    "scene":"Polite communication.",
    "text":"How should you ask for extra pillows?",
    "options":[
      "Could I please have an extra pillow?",
      "Bring pillow now!",
      "Pillow!",
      "I need this."
    ],
    "answer":0
  },
  {
    "type":"mcq",
    "scene":"Situation understanding.",
    "text":"Why do people stay in hotels?",
    "options":[
      "For temporary accommodation",
      "To buy vegetables",
      "To repair cars",
      "To teach classes"
    ],
    "answer":0
  },
  {
    "type":"bestresponse",
    "scene":"Best response.",
    "text":"Receptionist: Have a pleasant stay! What do you say?",
    "options":[
      "Thank you very much.",
      "No.",
      "Why?",
      "Maybe."
    ],
    "answer":0
  },
  {
    "type":"situation",
    "scene":"Hotel instructions.",
    "text":"The receptionist asks you to check out by 11 AM. What should you do?",
    "options":[
      "Pack and leave before 11 AM.",
      "Stay in the room.",
      "Ignore the instruction.",
      "Leave the key on the bed."
    ],
    "answer":0
  },
  {
    "type":"synonym",
    "scene":"Vocabulary challenge.",
    "text":"Which word means the same as comfortable?",
    "options":[
      "cozy",
      "cold",
      "noisy",
      "dirty"
    ],
    "answer":0
  },
  {
    "type":"opposite",
    "scene":"Vocabulary challenge.",
    "text":"What is the opposite of expensive?",
    "options":[
      "cheap",
      "beautiful",
      "large",
      "strong"
    ],
    "answer":0
  },
  {
    "type":"correctsentence",
    "scene":"Grammar challenge.",
    "text":"Choose the correct sentence.",
    "options":[
      "She goes to school every day.",
      "She go to school every day.",
      "She going to school every day.",
      "She gone to school every day."
    ],
    "answer":0
  },
  {
    "type":"chooseword",
    "scene":"Grammar challenge.",
    "text":"I ___ my homework every day.",
    "options":[
      "do",
      "make",
      "did",
      "doing"
    ],
    "answer":0
  },
  {
    "type":"sequence",
    "scene":"Hotel routine.",
    "text":"What should happen first?",
    "options":[
      "Check in",
      "Sleep",
      "Check out",
      "Leave"
    ],
    "answer":0
  },
  {
    "type":"roleplay",
    "scene":"Restaurant roleplay.",
    "text":"Pretend you are the waiter. Ask the customer what they would like to eat."
  },
  {
    "type":"speak",
    "scene":"Speaking challenge.",
    "text":"Describe your dream hotel room in three sentences."
  }
],
  "station": [
    { "type": "fill", "scene": "At the railway station counter.", "text": "Passenger: I'd like ___ ticket ___ Delhi, please.<br>Clerk: Single or return?", "blanks": ["a", "to"], "hint": "article and preposition" },
    { "type": "mcq", "scene": "Asking about the platform.", "text": "You ask: 'Which platform does the train ___ Delhi leave from?'", "options": ["to", "for", "in", "at"], "answer": 0 },
    { "type": "fill", "scene": "Checking the schedule.", "text": "Clerk: The next train departs ___ 2 PM and arrives ___ 8 PM.<br>Passenger: That's perfect for me.", "blanks": ["at", "at"], "hint": "prepositions for time" },
    { "type": "mcq", "scene": "At the platform.", "text": "You see people waiting. You say: 'Is this the platform ___ the Delhi train?'", "options": ["for", "to", "of", "in"], "answer": 0 },
    { "type": "fill", "scene": "Boarding the train.", "text": "Announcement: ___ passengers to Delhi should board ___ Platform 3 now.<br>Passengers: Let's hurry!", "blanks": ["All", "at"], "hint": "determiner and preposition" },
    { "type": "fill", "scene": "Finding your seat.", "text": "Passenger: Excuse me, I have ___ reservation ___ seat 24A.<br>Guard: Yes, that's over there.", "blanks": ["a", "for"], "hint": "article and preposition" },
    { "type": "mcq", "scene": "Storing luggage.", "text": "You ask: 'Can I put my bag ___ the overhead rack?'", "options": ["in", "on", "at", "to"], "answer": 0 },
    { "type": "fill", "scene": "During the journey.", "text": "Passenger: The train is ___ time. When will we arrive?<br>Guard: We'll arrive ___ 8 PM as scheduled.", "blanks": ["on", "at"], "hint": "prepositions" },
    { "type": "fill", "scene": "At the station's snack bar.", "text": "Passenger: I'd like ___ tea and ___ sandwich, please.<br>Vendor: Coming right up!", "blanks": ["a", "a"], "hint": "articles for singular items" },
    { "type": "mcq", "scene": "Asking about stops.", "text": "You ask: 'Does the train stop ___ Mumbai Station?'", "options": ["at", "in", "on", "to"], "answer": 0 },
    { "type": "fill", "scene": "Before departure.", "text": "Guard: All passengers please remain ___ your seats during the journey.<br>Passengers: Understood!", "blanks": ["in"], "hint": "preposition" },
    { "type": "fill", "scene": "Arrival announcement.", "text": "Announcement: We have arrived ___ Delhi. Please collect ___ belongings before leaving.<br>Passengers: Thank you for ___ comfortable journey.", "blanks": ["at", "your", "the"], "hint": "preposition, possessive, and article" }
  ],
  "hospital": [
    { "type": "fill", "scene": "At the hospital reception.", "text": "Patient: I have ___ appointment with Dr. Sharma ___ 2 PM.<br>Receptionist: Please have ___ seat.", "blanks": ["an", "at", "a"], "hint": "articles and prepositions" },
    { "type": "mcq", "scene": "Describing symptoms.", "text": "Doctor asks: 'What's ___ problem?' You have a fever.", "options": ["the", "a", "an", "your"], "answer": 3 },
    { "type": "fill", "scene": "In the examination room.", "text": "Doctor: Open your mouth. Say 'Ahhh'. ___ your throat is red and inflamed.<br>Patient: Will it get better?", "blanks": ["Your"], "hint": "possessive form" },
    { "type": "fill", "scene": "Discussing medication.", "text": "Doctor: You need ___ antibiotic ___ this infection. Take ___ tablet three times daily.<br>Patient: Okay, I understand.", "blanks": ["an", "for", "a"], "hint": "articles and preposition" },
    { "type": "mcq", "scene": "At the pharmacy.", "text": "Pharmacist asks: 'Do you have ___ prescription from your doctor?'", "options": ["a", "an", "the", "any"], "answer": 0 },
    { "type": "fill", "scene": "Taking medicine.", "text": "Pharmacist: Take one tablet with ___ glass of water. Avoid going ___ direct sunlight.<br>Patient: Thank you for the advice.", "blanks": ["a", "in"], "hint": "article and preposition" },
    { "type": "mcq", "scene": "Hospital rules.", "text": "The sign says: 'Visiting hours are ___ 2 PM ___ 5 PM.'", "options": ["from...to", "on...on", "at...at", "in...in"], "answer": 0 },
    { "type": "fill", "scene": "Follow-up appointment.", "text": "Doctor: Come back ___ week ___ check-up. ___ your condition improves, you won't need further treatment.<br>Patient: I'll definitely come.", "blanks": ["in", "for", "If"], "hint": "preposition and conditional" },
    { "type": "fill", "scene": "Medical tests.", "text": "Doctor: We need ___ blood test and ___ X-ray ___ your chest.<br>Patient: Will it hurt?", "blanks": ["a", "an", "of"], "hint": "articles and preposition" },
    { "type": "mcq", "scene": "Hospital bill.", "text": "The receptionist says: 'Your bill includes consultation, tests, and medicines. ___ is the total amount.'", "options": ["This", "These", "That", "Those"], "answer": 0 },
    { "type": "fill", "scene": "Recovery at home.", "text": "Doctor: Rest at home ___ at least three days. Drink plenty ___ water and get good sleep.<br>Patient: I will follow all your advice.", "blanks": ["for", "of"], "hint": "prepositions" },
    { "type": "fill", "scene": "Leaving the hospital.", "text": "Patient: Thank you doctor. ___ medicine should I take ___ the fever?<br>Doctor: The antibiotics will help. Take them ___ schedule.", "blanks": ["Which", "for", "on"], "hint": "question word and prepositions" }
  ],
  "home": [
    { "type": "fill", "scene": "Greeting a guest at home.", "text": "Mom: Beta, please say hello ___ Uncle Raj!<br>Child: Good evening, Uncle. Welcome ___ our home.", "blanks": ["to", "to"], "hint": "prepositions" },
    { "type": "fill", "scene": "Offering refreshments.", "text": "You: Uncle, would you like ___ cup ___ tea or ___ glass of water?<br>Uncle: Tea would be lovely, thank you.", "blanks": ["a", "of", "a"], "hint": "articles and prepositions" },
    { "type": "mcq", "scene": "Showing the guest around.", "text": "You say: 'This is our living room. Please sit ___ the sofa.'", "options": ["on", "in", "at", "by"], "answer": 0 },
    { "type": "fill", "scene": "In the dining room.", "text": "Mom: Dinner is ready. Please sit ___ ___ table. ___ food is hot.<br>Guest: It smells delicious.", "blanks": ["at", "the", "The"], "hint": "preposition and articles" },
    { "type": "fill", "scene": "Discussing family.", "text": "Dad: This is ___ photo ___ our family vacation ___ Goa last year.<br>Uncle: What ___ wonderful memories!", "blanks": ["a", "of", "in", "a"], "hint": "articles and prepositions" },
    { "type": "mcq", "scene": "Offering snacks.", "text": "You ask: 'Would you like some snacks ___ going back home?'", "options": ["before", "after", "for", "in"], "answer": 0 },
    { "type": "fill", "scene": "Showing your room.", "text": "Child: This is my room. My bed is ___ ___ corner. My desk is ___ the window.<br>Uncle: It's a nice room!", "blanks": ["in", "the", "by"], "hint": "prepositions" },
    { "type": "fill", "scene": "Evening activities.", "text": "You: Would you like to play ___ game with us? We can also watch ___ movie ___ the living room.<br>Uncle: A game sounds great!", "blanks": ["a", "a", "in"], "hint": "articles and preposition" },
    { "type": "mcq", "scene": "Time passing.", "text": "It's getting late. You say: 'Uncle, you should stay ___ dinner if you can.'", "options": ["for", "on", "at", "in"], "answer": 0 },
    { "type": "fill", "scene": "Gift offering.", "text": "Uncle brings ___ gift. He says: 'This is ___ present ___ you. I hope you like it.'<br>Child: Thank you so much!", "blanks": ["a", "a", "for"], "hint": "articles and preposition" },
    { "type": "fill", "scene": "Conversation at night.", "text": "You: Uncle, tell us ___ your childhood. What was life like ___ those days?<br>Uncle: It was very different from today.", "blanks": ["about", "in"], "hint": "prepositions" },
    { "type": "fill", "scene": "Departure time.", "text": "Mom: Would you like ___ ride to the station, or would you prefer to leave ___ the morning?<br>Uncle: I'll leave ___ the evening train tomorrow.", "blanks": ["a", "in", "by"], "hint": "articles and prepositions" }
  ],
  "school": [
    { "type": "fill", "scene": "Morning greeting at school.", "text": "Student: Good morning, Ma'am! How are you?<br>Teacher: I'm fine. Are you prepared ___ today's lesson?", "blanks": ["for"], "hint": "preposition" },
    { "type": "fill", "scene": "Asking to answer a question.", "text": "Student: Excuse me, Ma'am. Can I answer ___ question?<br>Teacher: Yes, of course. Go ahead.", "blanks": ["the"], "hint": "definite article" },
    { "type": "mcq", "scene": "Getting help.", "text": "You say: 'I don't understand this problem. Can you help ___ me?'", "options": ["me", "to", "with", "for"], "answer": 2 },
    { "type": "fill", "scene": "Classroom participation.", "text": "Teacher: Everyone, write ___ answer ___ your notebook. You have 10 minutes ___ this task.<br>Students: Okay, Ma'am!", "blanks": ["the", "in", "for"], "hint": "articles and prepositions" },
    { "type": "fill", "scene": "Borrowing supplies.", "text": "Priya: Can I borrow ___ pencil? I forgot mine ___ home.<br>Arjun: Sure! I have ___ extra one ___ you.", "blanks": ["a", "at", "an", "for"], "hint": "articles and prepositions" },
    { "type": "mcq", "scene": "Discussing homework.", "text": "Teacher asks: 'Did everyone complete ___ homework assignment?'", "options": ["the", "a", "an", "their"], "answer": 0 },
    { "type": "fill", "scene": "Lunch break at school.", "text": "Friend: What did you bring ___ lunch today?<br>You: My mom packed rice and curry ___ a container.", "blanks": ["for", "in"], "hint": "prepositions" },
    { "type": "fill", "scene": "Being late to class.", "text": "Student: I'm sorry, Ma'am. I was late ___ school this morning because ___ traffic jam.<br>Teacher: It's okay. Just be ___ time next time.", "blanks": ["to", "of", "on"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Test preparation.", "text": "You ask your friend: 'Can you help me study ___ the math test?'", "options": ["for", "in", "on", "at"], "answer": 0 },
    { "type": "fill", "scene": "Paying attention in class.", "text": "Teacher: Please put away your phones. ___ your attention ___ the lesson, please.<br>Students: Yes, Ma'am!", "blanks": ["Focus", "on"], "hint": "verb and preposition" },
    { "type": "fill", "scene": "Asking to use the restroom.", "text": "Student: Ma'am, may I go ___ the restroom?<br>Teacher: Yes, but go ___ back quickly. We have ___ important test.", "blanks": ["to", "and", "an"], "hint": "preposition and articles" },
    { "type": "fill", "scene": "End of school day.", "text": "Teacher: Class is over. Pack ___ books carefully. See you ___ tomorrow. Have ___ nice day!<br>Students: You too, Ma'am!", "blanks": ["your", "tomorrow", "a"], "hint": "possessive, time expression, and article" }
  ],
  "market": [
    { "type": "fill", "scene": "At the vegetable market.", "text": "Customer: How much do ___ tomatoes cost per kilogram?<br>Vendor: They're fifty rupees today.", "blanks": ["these"], "hint": "demonstrative pronoun" },
    { "type": "fill", "scene": "Selecting vegetables.", "text": "Vendor: These vegetables are fresh. They arrived ___ the farm this morning.<br>Customer: Perfect! Give me ___ kilo ___ spinach.", "blanks": ["from", "one", "of"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Checking quality.", "text": "You say to the vendor: 'Are ___ carrots organic?'", "options": ["these", "this", "that", "those"], "answer": 0 },
    { "type": "fill", "scene": "Negotiating prices.", "text": "Customer: The price seems high. Can you give me ___ discount ___ buying three kilos?<br>Vendor: I can reduce it a bit.", "blanks": ["a", "for"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Buying fruits.", "text": "You: I need two kilos ___ apples and one dozen ___ bananas.<br>Vendor: These are the best quality ___ our market.", "blanks": ["of", "of", "in"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Payment.", "text": "Customer says: 'I'll pay ___ cash. What's the total?'", "options": ["in", "by", "with", "on"], "answer": 1 },
    { "type": "fill", "scene": "Getting change.", "text": "Vendor: The total is three hundred rupees. Here is your ___. ___ you for shopping ___ us!<br>Customer: Thank you too!", "blanks": ["change", "Thank", "with"], "hint": "noun and preposition" },
    { "type": "fill", "scene": "Asking for recommendations.", "text": "Customer: What vegetables are fresh this season? Recommend something ___ me.<br>Vendor: Try ___ bottle gourd. It's excellent ___ cooking.", "blanks": ["for", "a", "for"], "hint": "prepositions and article" },
    { "type": "mcq", "scene": "Using bags.", "text": "Vendor asks: 'Do you have ___ bag, or should I give you one?'", "options": ["a", "the", "your", "any"], "answer": 3 },
    { "type": "fill", "scene": "Dealing with vendors.", "text": "Customer: I come ___ this market every week. I trust your quality.<br>Vendor: We always provide ___ best fresh produce ___ our customers.", "blanks": ["to", "the", "for"], "hint": "prepositions and article" },
    { "type": "fill", "scene": "Peak hours at market.", "text": "Vendor: ___ market is very busy ___ the morning. Come early ___ get fresh vegetables.<br>Customer: Good advice! I'll come early tomorrow.", "blanks": ["The", "in", "to"], "hint": "article and prepositions" },
    { "type": "fill", "scene": "Comparing prices.", "text": "Customer: Your prices are lower than ___ market ___ the corner. That's why I come here.<br>Vendor: We appreciate ___ loyalty!", "blanks": ["the", "on", "your"], "hint": "articles and possessive" }
  ],
  "restaurant": [
    { "type": "fill", "scene": "Entering a restaurant.", "text": "Waiter: Good evening! How many people are ___ your party?<br>Customer: There are four ___ us.", "blanks": ["in", "of"], "hint": "prepositions" },
    { "type": "fill", "scene": "Being seated.", "text": "Waiter: Please sit ___ ___ table. Would you like ___ drink?<br>Customer: Yes, water please.", "blanks": ["at", "this", "a"], "hint": "preposition and articles" },
    { "type": "mcq", "scene": "Asking about menu items.", "text": "You ask: 'What is in ___ paneer tikka?'", "options": ["the", "a", "an", "this"], "answer": 0 },
    { "type": "fill", "scene": "Ordering food.", "text": "Customer: I'd like ___ dosa and my friend wants ___ biryani.<br>Waiter: Excellent choices! Would you like ___ side dishes?", "blanks": ["a", "a", "any"], "hint": "articles" },
    { "type": "fill", "scene": "Beverages.", "text": "Waiter: What ___ would you like to drink? We have cold drinks, tea, and coffee.<br>Customer: I'll have ___ glass ___ fresh juice.", "blanks": ["would", "a", "of"], "hint": "auxiliary verb and preposition" },
    { "type": "mcq", "scene": "Food allergies.", "text": "You say: 'I'm allergic ___ peanuts. Does this dish contain any?'", "options": ["to", "of", "in", "for"], "answer": 0 },
    { "type": "fill", "scene": "During the meal.", "text": "Customer: This food is delicious! ___ are the spices used ___ this curry?<br>Waiter: I'll ask ___ chef.", "blanks": ["What", "in", "the"], "hint": "question word and prepositions" },
    { "type": "fill", "scene": "Requesting additional items.", "text": "Customer: Can you bring ___ more plate and ___ piece ___ bread, please?<br>Waiter: Of course! Right away.", "blanks": ["a", "a", "of"], "hint": "articles and preposition" },
    { "type": "mcq", "scene": "Complimenting the food.", "text": "You say: 'Everything tasted great. Please give my compliments ___ the chef.'", "options": ["to", "for", "of", "in"], "answer": 0 },
    { "type": "fill", "scene": "Asking for the bill.", "text": "Customer: We're finished. Can you bring ___ bill, please?<br>Waiter: Certainly! And would you like ___ dessert ___ coffee first?", "blanks": ["the", "a", "or"], "hint": "article and conjunction" },
    { "type": "fill", "scene": "Payment and tip.", "text": "Customer: ___ is ___ total? I'll pay ___ card.<br>Waiter: It's three thousand rupees. ___ you!", "blanks": ["What", "the", "by", "Thank"], "hint": "question word and prepositions" },
    { "type": "fill", "scene": "Leaving the restaurant.", "text": "Customer: Thank you ___ ___ wonderful meal. We'll definitely come back ___ this restaurant.<br>Waiter: We hope to see you again soon!", "blanks": ["for", "the", "to"], "hint": "prepositions" }
  ],
  "bank": [
    { "type": "fill", "scene": "At the bank counter.", "text": "Customer: I want to open ___ savings account.<br>Banker: Great! ___ can help you with that.", "blanks": ["a", "I"], "hint": "article and pronoun" },
    { "type": "fill", "scene": "Submitting documents.", "text": "Banker: Please provide ___ identification and ___ address proof ___ open ___ account.<br>Customer: I have all the documents.", "blanks": ["your", "proof", "to", "an"], "hint": "possessive and prepositions" },
    { "type": "mcq", "scene": "Asking about interest.", "text": "You ask: 'What is the interest rate ___ savings accounts?'", "options": ["on", "in", "for", "at"], "answer": 0 },
    { "type": "fill", "scene": "Minimum balance requirement.", "text": "Customer: What is ___ minimum balance I must maintain ___ my account?<br>Banker: It's five hundred rupees.", "blanks": ["the", "in"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Deposit procedures.", "text": "Banker: Fill ___ this deposit form. Write the amount you want to deposit ___ the form.<br>Customer: Okay, I'll do that.", "blanks": ["out", "on"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Cheque book.", "text": "You ask: 'Can I get ___ cheque book ___ my account?'", "options": ["a...for", "the...for", "a...from", "a...in"], "answer": 0 },
    { "type": "fill", "scene": "ATM access.", "text": "Banker: Your account comes ___ a debit card and ATM access. You can withdraw money ___ any time ___ ATMs.<br>Customer: That's convenient!", "blanks": ["with", "at", "from"], "hint": "prepositions" },
    { "type": "fill", "scene": "Online banking.", "text": "Customer: Do you offer online banking?<br>Banker: Yes! You can access ___ account ___ our website or mobile app ___ any place.", "blanks": ["your", "through", "from"], "hint": "possessive and prepositions" },
    { "type": "mcq", "scene": "Account statement.", "text": "You ask: 'How often ___ I receive my account statement?'", "options": ["can", "do", "will", "should"], "answer": 0 },
    { "type": "fill", "scene": "Loan inquiry.", "text": "Customer: I'm interested ___ taking ___ loan. What documents are required?<br>Banker: Let me explain ___ our loan options.", "blanks": ["in", "a", "about"], "hint": "prepositions" },
    { "type": "fill", "scene": "Recurring deposits.", "text": "Banker: You can also open ___ recurring deposit. It's ___ safe way to save money ___ a fixed period ___ good interest rates.<br>Customer: Tell me more!", "blanks": ["a", "a", "for", "with"], "hint": "articles and prepositions" },
    { "type": "fill", "scene": "Closing session.", "text": "Banker: Your account is ready. Take this passbook. It contains ___ account number and all ___ information ___ your account.<br>Customer: Thank you ___ your help!", "blanks": ["your", "the", "about", "for"], "hint": "possessive and prepositions" }
  ],
  "postoffice": [
    { "type": "fill", "scene": "At the post office counter.", "text": "Postal Worker: Hello! How can I help you?<br>Customer: I want to send ___ letter ___ my grandmother ___ another city.", "blanks": ["a", "to", "in"], "hint": "articles and prepositions" },
    { "type": "fill", "scene": "Weighing a package.", "text": "Postal Worker: This package weighs two kilos. ___ sending it ___ Bangalore?<br>Customer: Yes, please.", "blanks": ["Are", "to"], "hint": "verb and preposition" },
    { "type": "mcq", "scene": "Buying stamps.", "text": "You ask: 'How many stamps do I need ___ this envelope?'", "options": ["for", "on", "at", "in"], "answer": 0 },
    { "type": "fill", "scene": "Speed of delivery.", "text": "Customer: How long will it take ___ the letter to arrive?<br>Postal Worker: Usually 3-5 days ___ the destination.", "blanks": ["for", "to"], "hint": "prepositions" },
    { "type": "fill", "scene": "Tracking service.", "text": "Postal Worker: You can track ___ package ___ our website. Here is ___ tracking number.<br>Customer: That's helpful!", "blanks": ["your", "on", "the"], "hint": "possessive and articles" },
    { "type": "mcq", "scene": "International mail.", "text": "You ask: 'Can I send ___ letter to ___ friend ___ America?'", "options": ["a...a...in", "a...my...to", "a...my...in", "the...my...to"], "answer": 1 },
    { "type": "fill", "scene": "Registered mail.", "text": "Customer: I want to send this ___ registered mail. It's very important.<br>Postal Worker: ___ is ___ good choice for valuable items.", "blanks": ["by", "That", "a"], "hint": "preposition and articles" },
    { "type": "fill", "scene": "Postcard option.", "text": "Postal Worker: We also have postcards. They're cheaper and faster ___ letters.<br>Customer: How much do they cost ___ postcard?", "blanks": ["than", "per"], "hint": "comparison and preposition" },
    { "type": "mcq", "scene": "Payment options.", "text": "The worker asks: 'How will you pay ___ your postage?'", "options": ["for", "on", "by", "with"], "answer": 2 },
    { "type": "fill", "scene": "Address requirement.", "text": "Postal Worker: Make sure you write ___ complete address ___ the envelope. Include ___ postal code.<br>Customer: I'll write it carefully.", "blanks": ["the", "on", "the"], "hint": "articles and preposition" },
    { "type": "fill", "scene": "Return address.", "text": "Customer: Should I write ___ return address ___ the envelope?<br>Postal Worker: Yes, it's helpful ___ case ___ delivery problems.", "blanks": ["a", "on", "in", "of"], "hint": "article and prepositions" },
    { "type": "fill", "scene": "Special services.", "text": "Customer: Do you offer any special services?<br>Postal Worker: Yes! We provide services like money orders, bill payments, and parcels ___ all parts ___ the country.", "blanks": ["to", "of"], "hint": "prepositions" }
  ],
  "pharmacy": [
    { "type": "fill", "scene": "At the pharmacy counter.", "text": "Pharmacist: Good morning! Do you have ___ prescription?<br>Customer: Yes, here it is ___ my doctor.", "blanks": ["a", "from"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Reading the prescription.", "text": "Pharmacist: This prescription is ___ antibiotics. You must take them ___ with food.<br>Customer: Okay, I understand.", "blanks": ["for", "always"], "hint": "preposition and adverb" },
    { "type": "mcq", "scene": "Dosage information.", "text": "You ask: 'How often should I take ___ medicine?'", "options": ["this", "the", "a", "an"], "answer": 0 },
    { "type": "fill", "scene": "Collecting medicine.", "text": "Pharmacist: Here ___ your medicine. It costs five hundred rupees. Take ___ tablet three times ___ day ___ water.<br>Customer: Thank you!", "blanks": ["is", "one", "a", "with"], "hint": "verb, article, and prepositions" },
    { "type": "fill", "scene": "Side effects warning.", "text": "Pharmacist: This medicine may cause some side effects. Take it only ___ your doctor says. Avoid going ___ direct sunlight.<br>Customer: I will be careful.", "blanks": ["as", "in"], "hint": "conjunction and preposition" },
    { "type": "mcq", "scene": "Expiry date.", "text": "You ask: 'When does ___ medicine expire?'", "options": ["this", "the", "a", "that"], "answer": 0 },
    { "type": "fill", "scene": "Over-the-counter medicine.", "text": "Customer: Do I need ___ prescription ___ cough syrup?<br>Pharmacist: No, cough syrup is available over ___ counter.", "blanks": ["a", "for", "the"], "hint": "article and prepositions" },
    { "type": "fill", "scene": "Medicine storage.", "text": "Pharmacist: Store this medicine ___ ___ cool, dry place away ___ sunlight and moisture.<br>Customer: I'll keep it ___ my cabinet.", "blanks": ["in", "a", "from", "in"], "hint": "prepositions and article" },
    { "type": "mcq", "scene": "Drug interactions.", "text": "You ask: 'Can I take this with ___ other medicines I'm taking?'", "options": ["the", "a", "other", "any"], "answer": 3 },
    { "type": "fill", "scene": "Allergies information.", "text": "Pharmacist: Are you allergic ___ any medicines?<br>Customer: Yes, I'm allergic ___ penicillin.", "blanks": ["to", "to"], "hint": "prepositions" },
    { "type": "fill", "scene": "Generic vs brand.", "text": "Customer: Is ___ ___ generic version available? It's cheaper ___ the brand name.<br>Pharmacist: Yes, we have the generic one.", "blanks": ["there", "a", "than"], "hint": "existential and preposition" },
    { "type": "fill", "scene": "Follow-up care.", "text": "Pharmacist: If you don't feel better ___ ___ days, contact your doctor immediately.<br>Customer: I will monitor ___ progress.", "blanks": ["in", "a few", "my"], "hint": "preposition and possessive" }
  ],
  "barbershop": [
    { "type": "fill", "scene": "At the barbershop.", "text": "Barber: Good afternoon! What haircut would you like?<br>Customer: I want ___ short haircut ___ the sides.", "blanks": ["a", "on"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Describing your style.", "text": "Customer: Not too short ___ the top, but trim ___ the sides please.<br>Barber: I understand. Let me do that.", "blanks": ["on", "on"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Additional services.", "text": "Barber asks: 'Would you also like ___ shave?'", "options": ["a", "the", "an", "one"], "answer": 0 },
    { "type": "fill", "scene": "Facial hair grooming.", "text": "Barber: Your beard looks nice. Do you want me to trim it or shape it ___ ___ specific style?<br>Customer: Yes, please shape it.", "blanks": ["in", "a"], "hint": "preposition and article" },
    { "type": "fill", "scene": "During the service.", "text": "Barber: The clippers are working well ___ your hair. I'll make sure it's even ___ both sides.<br>Customer: Take your time.", "blanks": ["on", "on"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Mirror check.", "text": "Barber says: 'How does it look ___ the mirror?'", "options": ["in", "on", "at", "to"], "answer": 0 },
    { "type": "fill", "scene": "Hair wash.", "text": "Barber: Would you like me to wash ___ hair after cutting? It will remove ___ cut hair.<br>Customer: Yes, please.", "blanks": ["your", "the"], "hint": "possessive and article" },
    { "type": "fill", "scene": "Styling products.", "text": "Barber: This is ___ good gel to style your hair ___ after the haircut. It holds well throughout ___ day.<br>Customer: How much is it?", "blanks": ["a", "with", "the"], "hint": "article and prepositions" },
    { "type": "mcq", "scene": "Payment.", "text": "Barber asks: 'How will you pay ___ the haircut?'", "options": ["for", "on", "in", "at"], "answer": 0 },
    { "type": "fill", "scene": "Tipping.", "text": "Customer: That looks excellent! Here's the payment plus ___ tip for your good work.<br>Barber: Thank you very much ___ your kindness!", "blanks": ["a", "for"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Next appointment.", "text": "Barber: Would you like to book ___ appointment ___ next time?<br>Customer: Sure! I'll be back ___ two weeks.", "blanks": ["an", "for", "in"], "hint": "article and prepositions" },
    { "type": "fill", "scene": "Care instructions.", "text": "Barber: Use mild shampoo ___ your hair. Avoid direct sunlight ___ the first few days.<br>Customer: I'll take good care ___ it.", "blanks": ["on", "for", "of"], "hint": "prepositions" }
  ],
  "library": [
    { "type": "fill", "scene": "Entering the library.", "text": "Librarian: Good morning! Are you ___ member?<br>Student: No, I'd like to become one.", "blanks": ["a"], "hint": "article" },
    { "type": "fill", "scene": "Library registration.", "text": "Librarian: Fill ___ this form ___ your details. We'll process it quickly.<br>Student: Okay, here's ___ information.", "blanks": ["out", "with", "my"], "hint": "prepositions and possessive" },
    { "type": "mcq", "scene": "Looking for books.", "text": "You ask: 'Where can I find books ___ science fiction?'", "options": ["on", "about", "for", "in"], "answer": 1 },
    { "type": "fill", "scene": "Searching the catalog.", "text": "Librarian: You can search ___ books ___ our computer database. Just type ___ title or author.<br>Student: That's helpful!", "blanks": ["for", "in", "the"], "hint": "prepositions and article" },
    { "type": "fill", "scene": "Borrowing books.", "text": "Librarian: You can borrow up ___ five books. They're due back ___ two weeks.<br>Student: Perfect! I'll choose ___ books now.", "blanks": ["to", "in", "some"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Library silence rules.", "text": "The sign says: 'Please keep ___ library quiet. Mobile phones must be turned off.'", "options": ["the", "a", "this", "our"], "answer": 0 },
    { "type": "fill", "scene": "Renewing books.", "text": "Student: Can I renew ___ book if I need more time?<br>Librarian: Yes, you can renew it ___ two weeks, unless someone else has reserved it.", "blanks": ["a", "for"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Late fees.", "text": "Librarian: If you return ___ book late, you'll pay ___ small fine. ___ is important to return books ___ time.<br>Student: I'll be careful.", "blanks": ["a", "a", "It", "on"], "hint": "articles and prepositions" },
    { "type": "mcq", "scene": "Damaged books.", "text": "If you accidentally damage ___ book, you should:", "options": ["Tell the librarian immediately.", "Hide it and return it anyway.", "Leave it in the library.", "Throw it away."], "answer": 0 },
    { "type": "fill", "scene": "Reference section.", "text": "Student: Do you have reference books ___ history?<br>Librarian: Yes, they're ___ the reference section. You can use them here but not borrow them.", "blanks": ["on", "in"], "hint": "prepositions" },
    { "type": "fill", "scene": "Study area.", "text": "Student: Can I use ___ study room ___ my project work?<br>Librarian: Of course! ___ rooms are available ___ booking.", "blanks": ["a", "for", "Study", "for"], "hint": "articles and preposition" },
    { "type": "fill", "scene": "Computer access.", "text": "Student: Can I access ___ internet ___ the library?<br>Librarian: Yes, we have computers available ___ members. ___ is ___ two-hour limit per session.", "blanks": ["the", "in", "for", "There", "a"], "hint": "articles and prepositions" }
  ],
  "park": [
    { "type": "fill", "scene": "Enjoying a beautiful park.", "text": "Child: Look ___ all the trees and flowers! Can I play ___ the swing?<br>Parent: Of course!", "blanks": ["at", "on"], "hint": "prepositions" },
    { "type": "fill", "scene": "Different play areas.", "text": "Parent: There's ___ slide over there, and ___ seesaw ___ the corner.<br>Child: Can we try ___ of them?", "blanks": ["a", "a", "in", "both"], "hint": "articles and prepositions" },
    { "type": "mcq", "scene": "Meeting new friends.", "text": "You see children playing. You ask: 'Can I play ___ you?'", "options": ["with", "to", "on", "in"], "answer": 0 },
    { "type": "fill", "scene": "Running and playing.", "text": "Friend: Let's play ___ game! I'll tag you, and you run ___ the tree.<br>You: That sounds fun!", "blanks": ["a", "to"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Park safety rules.", "text": "Parent: Don't run ___ ___ playground. Be careful ___ the other children.<br>Child: Okay, I'll be safe.", "blanks": ["all", "over", "of"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Having a picnic.", "text": "Parent says: 'Let's sit ___ this bench and have our lunch.'", "options": ["on", "in", "at", "by"], "answer": 0 },
    { "type": "fill", "scene": "Sharing snacks.", "text": "Child: I have ___ apple. Do you want ___ part ___ it?<br>Friend: Yes, thank you!", "blanks": ["an", "a", "of"], "hint": "articles and preposition" },
    { "type": "fill", "scene": "Natural beauty.", "text": "Child: ___ park is so beautiful! Look ___ the sunset. ___ sky is turning orange.<br>Parent: Yes, it's gorgeous.", "blanks": ["The", "at", "The"], "hint": "articles" },
    { "type": "mcq", "scene": "Park maintenance.", "text": "You see trash. You should:", "options": ["Throw it in the dustbin to keep the park clean.", "Leave it on the ground.", "Kick it away.", "Ignore it."], "answer": 0 },
    { "type": "fill", "scene": "Enjoying nature.", "text": "Child: There are so many birds ___ ___ trees. Can we watch them?<br>Parent: Yes, let's sit ___ and observe them quietly.", "blanks": ["in", "the", "down"], "hint": "prepositions" },
    { "type": "fill", "scene": "Playing sports.", "text": "Children: Let's play ___ game ___ football! We need ___ ball and ___ goal.<br>Friend: I have ___ ball!", "blanks": ["a", "of", "a", "a", "a"], "hint": "articles" },
    { "type": "fill", "scene": "Evening time.", "text": "Parent: ___ sun is setting. We should go home ___ it gets dark.<br>Child: Okay, I had ___ wonderful time ___ the park!", "blanks": ["The", "before", "a", "in"], "hint": "article and prepositions" }
  ],
  "beach": [
    { "type": "fill", "scene": "Arriving at the beach.", "text": "Child: Wow! ___ sand is golden and beautiful!<br>Parent: Yes! We can build ___ sandcastle. ___ you like that?", "blanks": ["The", "a", "Would"], "hint": "article and modal verb" },
    { "type": "fill", "scene": "Water safety.", "text": "Parent: Before going ___ the water, let me apply sunscreen ___ your skin.<br>Child: Okay, I don't want to get sunburned.", "blanks": ["in", "on"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Playing in the ocean.", "text": "Child asks: 'Can I go deep ___ the water?'", "options": ["into", "in", "on", "to"], "answer": 0 },
    { "type": "fill", "scene": "Building sandcastles.", "text": "Child: Help me build ___ castle! I need ___ bucket and ___ shovel ___ the sand.<br>Parent: Great idea!", "blanks": ["a", "a", "a", "for"], "hint": "articles and preposition" },
    { "type": "fill", "scene": "Beach exploration.", "text": "Child: Look ___ these beautiful shells! Can I collect them ___ a bucket?<br>Parent: Of course! Put them ___ your bucket.", "blanks": ["at", "in", "in"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Ocean waves.", "text": "Child says: 'Let's play ___ the waves! They're so fun!'", "options": ["in", "on", "at", "with"], "answer": 0 },
    { "type": "fill", "scene": "Refreshment time.", "text": "Parent: I brought ___ cold juice and some snacks. You must eat something ___ after playing ___ the sun.<br>Child: Thank you!", "blanks": ["some", "afterward", "in"], "hint": "quantifier and prepositions" },
    { "type": "fill", "scene": "Rest and relax.", "text": "Parent: Let's sit ___ ___ shade ___ that umbrella. ___ need to rest before heading back.<br>Child: Okay!", "blanks": ["under", "the", "of", "We"], "hint": "prepositions and pronoun" },
    { "type": "mcq", "scene": "Beach rules.", "text": "A good rule at the beach is:", "options": ["Don't touch or harm marine life. Keep the beach clean.", "Disturb animals and plants.", "Leave trash on the beach.", "Swim alone without supervision."], "answer": 0 },
    { "type": "fill", "scene": "Sunset at beach.", "text": "Parent: ___ sunset at the beach is magical! ___ colors are so beautiful.<br>Child: It's the most beautiful thing I've ever seen!", "blanks": ["The", "The"], "hint": "articles" },
    { "type": "fill", "scene": "Cleaning up.", "text": "Parent: Before we leave, let's clean up ___ trash we brought. We should keep ___ beach ___ for others.<br>Child: You're right!", "blanks": ["our", "the", "clean"], "hint": "possessive and article" },
    { "type": "fill", "scene": "Going home.", "text": "Child: Thank you ___ the wonderful day ___ the beach!<br>Parent: You're welcome. ___ had ___ great time together.", "blanks": ["for", "at", "We", "a"], "hint": "prepositions and pronoun + article" }
  ],
  "cinema": [
    { "type": "fill", "scene": "At the ticket counter.", "text": "Staff: Good evening! How many tickets do you need?<br>Customer: I need four tickets ___ the 7 PM show.", "blanks": ["for"], "hint": "preposition" },
    { "type": "fill", "scene": "Choosing movie time.", "text": "Customer: What time are ___ movies showing?<br>Staff: We have shows ___ 2 PM, 5 PM, and 8 PM.", "blanks": ["the", "at"], "hint": "article and preposition" },
    { "type": "mcq", "scene": "Movie categories.", "text": "You ask: 'Is ___ movie suitable ___ children?'", "options": ["the...for", "a...for", "this...for", "that...in"], "answer": 0 },
    { "type": "fill", "scene": "Buying snacks.", "text": "Staff: What snacks would you like? We have popcorn, nachos, and candies.<br>Customer: I'd like ___ bucket ___ popcorn and ___ cold drink.", "blanks": ["a", "of", "a"], "hint": "articles and preposition" },
    { "type": "fill", "scene": "Drink sizes.", "text": "Staff: Would you like ___ regular or large size drink?<br>Customer: Large, please. And can I have ___ ice ___ it?", "blanks": ["a", "some", "in"], "hint": "articles and preposition" },
    { "type": "mcq", "scene": "Theater rules.", "text": "The sign says: 'Please keep ___ theater clean. Do not litter.'", "options": ["the", "a", "this", "your"], "answer": 0 },
    { "type": "fill", "scene": "Finding your seat.", "text": "Usher: Your seats are ___ row G. Follow me ___ the seating area.<br>Customer: Thank you ___ your help.", "blanks": ["in", "to", "for"], "hint": "prepositions" },
    { "type": "fill", "scene": "Before the movie.", "text": "Usher: Please switch off your mobile phones. ___ will ensure a good experience ___ everyone.<br>Customer: Understood!", "blanks": ["This", "for"], "hint": "demonstrative and preposition" },
    { "type": "mcq", "scene": "Movie starting.", "text": "Before the movie starts, you should:", "options": ["Be quiet and watch. Do not disturb others.", "Talk loudly with friends.", "Use your phone. Take photos.", "Eat noisily."], "answer": 0 },
    { "type": "fill", "scene": "During the movie.", "text": "Viewer: This movie is absolutely amazing! I'm so engaged ___ the story.<br>Friend: Yes! ___ acting is excellent ___ all actors.", "blanks": ["in", "The", "by"], "hint": "preposition and article" },
    { "type": "fill", "scene": "Intermission.", "text": "Usher: Would you like ___ refill ___ your drink during ___ intermission?<br>Customer: Yes, please.", "blanks": ["a", "of", "the"], "hint": "article and prepositions" },
    { "type": "fill", "scene": "After the movie.", "text": "Friend: ___ was an incredible film! Let's discuss it ___ tea ___ the cafe outside.<br>You: Absolutely! I loved every minute ___ it!", "blanks": ["That", "over", "at", "of"], "hint": "demonstrative and prepositions" }
  ],
  "birthday": [
    { "type": "fill", "scene": "Birthday invitation.", "text": "Friend: You are invited ___ my birthday party ___ Saturday at 4 PM.<br>You: Thank you! I'd love to come.", "blanks": ["to", "on"], "hint": "prepositions" },
    { "type": "fill", "scene": "Gift selection.", "text": "You need to buy ___ gift. Think ___ something ___ friend likes.<br>Gift shop staff: What would you recommend ___ a 12-year-old?", "blanks": ["a", "of", "your", "for"], "hint": "articles and prepositions" },
    { "type": "mcq", "scene": "Gift wrapping.", "text": "The gift should be wrapped ___ nice paper.", "options": ["in", "on", "with", "by"], "answer": 0 },
    { "type": "fill", "scene": "Arriving at the party.", "text": "You: Happy birthday! I brought ___ gift ___ you. Hope you like it!<br>Birthday child: Thank you so much! Come ___ ___ games.", "blanks": ["a", "for", "and", "play"], "hint": "article, preposition, and conjunction" },
    { "type": "fill", "scene": "Party activities.", "text": "Everyone: Let's play musical chairs! ___ music starts, we walk ___ the chairs. When it stops, we sit quickly!<br>Children: This is so fun!", "blanks": ["When", "around"], "hint": "conjunction and preposition" },
    { "type": "mcq", "scene": "Birthday cake.", "text": "You sing: 'Happy birthday ___ you. Happy birthday ___ you!'", "options": ["to...to", "to...for", "for...for", "of...of"], "answer": 0 },
    { "type": "fill", "scene": "Cake and candles.", "text": "Birthday child: Make ___ wish and blow ___ ___ candles!<br>Everyone: Hip hip hooray!", "blanks": ["a", "out", "the"], "hint": "article and prepositions" },
    { "type": "fill", "scene": "Sharing food.", "text": "Mom: Here's ___ slice ___ cake ___ everyone. Ice cream is ___ ___ freezer.","blanks": ["a", "of", "for", "in", "the"], "hint": "articles and prepositions" },
    { "type": "mcq", "scene": "Party games.", "text": "You ask: 'Can I join ___ the games?'", "options": ["in", "on", "at", "for"], "answer": 0 },
    { "type": "fill", "scene": "Party favors.", "text": "Birthday child: Thank you all ___ coming! Here are party favors ___ everyone ___ remember this day.<br>Guests: Thank you!", "blanks": ["for", "for", "to"], "hint": "prepositions" },
    { "type": "fill", "scene": "Dance time.", "text": "Friend: Let's dance! Put ___ favorite song ___ the speaker.<br>You: Great! ___ song makes me want to move!", "blanks": ["your", "in", "This"], "hint": "possessive, preposition, and demonstrative" },
    { "type": "fill", "scene": "Saying goodbye.", "text": "You: Thank you ___ ___ wonderful party! I had ___ fantastic time ___ you and your friends.<br>Birthday child: Come back soon!", "blanks": ["for", "the", "a", "with"], "hint": "prepositions and article" }
  ],
  "sports": [
    { "type": "fill", "scene": "Playing football.", "text": "Player: Pass ___ ball! I'll try to score ___ goal!<br>Teammate: Here it comes! Good luck!", "blanks": ["the", "a"], "hint": "articles" },
    { "type": "fill", "scene": "Team strategy.", "text": "Coach: Stay ___ your position. Defend ___ the opposition. Be ready ___ attack.<br>Team: Yes, coach!", "blanks": ["in", "against", "to"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Handling pressure.", "text": "Your team is losing. You should:", "options": ["Keep trying your best and encourage teammates.", "Give up and leave the field.", "Blame others for mistakes.", "Sit down and cry."], "answer": 0 },
    { "type": "fill", "scene": "Before the game.", "text": "Coach: Do warm-up exercises before the match. Stretch your muscles ___ 10 minutes.<br>Players: We're ready!", "blanks": ["for"], "hint": "preposition" },
    { "type": "fill", "scene": "Cricket practice.", "text": "Coach: Hold ___ bat straight. Keep your eyes ___ ___ ball. Hit it with power!<br>Student: Like this?", "blanks": ["the", "on", "the"], "hint": "articles and preposition" },
    { "type": "mcq", "scene": "Winning the game.", "text": "Your team wins! You should:", "options": ["Congratulate your team and opponents. Play with good sportsmanship.", "Tease the losing team.", "Brag about your victory.", "Ignore the losers."], "answer": 0 },
    { "type": "fill", "scene": "Sportsmanship.", "text": "Player: Good game! You played very well ___ ___ field.<br>Opponent: Thank you. Your team was excellent!", "blanks": ["on", "the"], "hint": "preposition and article" },
    { "type": "fill", "scene": "Post-game.", "text": "Coach: We won! Let's celebrate our victory. But remember, we must also thank ___ opponents ___ their effort.<br>Team: You're right, coach!", "blanks": ["our", "for"], "hint": "possessive and preposition" },
    { "type": "mcq", "scene": "Injury on field.", "text": "A player gets injured. You should:", "options": ["Get help immediately. Stop the game. Don't move the injured player.", "Ignore and continue playing.", "Laugh about it.", "Leave the player alone."], "answer": 0 },
    { "type": "fill", "scene": "Fitness training.", "text": "Coach: Fitness is important ___ every sport. Train regularly ___ improve ___ your performance.<br>Players: We'll work hard!", "blanks": ["for", "to", "in"], "hint": "prepositions" },
    { "type": "fill", "scene": "Equipment care.", "text": "Player: I need to maintain my equipment properly. I'll store ___ bat and gloves ___ ___ safe place.<br>Coach: That's responsible!", "blanks": ["my", "in", "a"], "hint": "possessive and prepositions" },
    { "type": "fill", "scene": "Learning new skills.", "text": "Beginner: Can you teach me how to throw ___ ball correctly?<br>Expert: Sure! Focus ___ ___ technique. Practice consistently ___ improve.", "blanks": ["the", "on", "the", "to"], "hint": "articles and prepositions" }
  ],
  "zoo": [
    { "type": "fill", "scene": "At the zoo entrance.", "text": "Child: I can't wait to see all ___ animals!<br>Parent: Yes! There are many fascinating creatures ___ the zoo.", "blanks": ["the", "in"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Viewing animals.", "text": "Guide: Look ___ ___ lion! It's resting under ___ tree.<br>Child: It's magnificent!", "blanks": ["at", "the", "a"], "hint": "preposition and articles" },
    { "type": "mcq", "scene": "Zoo behavior.", "text": "What should you do when viewing animals?", "options": ["Watch quietly and don't disturb them. Keep a safe distance.", "Bang on the enclosure. Throw things at them.", "Feed them without permission.", "Tease them."], "answer": 0 },
    { "type": "fill", "scene": "Educational visit.", "text": "Guide: The elephant uses its trunk ___ eat, drink, and bathe itself ___ dust.<br>Child: That's amazing!", "blanks": ["to", "with"], "hint": "prepositions" },
    { "type": "fill", "scene": "Asking the guide.", "text": "Child: What do giraffes eat?<br>Guide: They eat leaves ___ tall trees. ___ long necks help them reach ___ top ___ trees.", "blanks": ["from", "Their", "the", "of"], "hint": "preposition and possessive + article" },
    { "type": "mcq", "scene": "Feeding animals.", "text": "You ask: 'Can I feed ___ animals?'", "options": ["the", "a", "some", "these"], "answer": 0 },
    { "type": "fill", "scene": "Conservation message.", "text": "Sign: Many animals are endangered. ___ zoo helps protect them ___ extinction.<br>Child: That's important work!", "blanks": ["The", "from"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Learning about habitats.", "text": "Guide: Different animals live ___ different habitats. Polar bears live ___ ice, and lions live ___ grasslands.<br>Child: Wow!", "blanks": ["in", "on", "in"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Zoo safety rules.", "text": "Which is a safe practice at the zoo?", "options": ["Never cross barriers or fences. Follow all safety rules.", "Cross the barriers for a closer look.", "Climb on railings. Touch the glass.", "Leave gates open."], "answer": 0 },
    { "type": "fill", "scene": "Reptile section.", "text": "Guide: See ___ snakes and crocodiles ___ ___ enclosure. ___ dangerous animals must be kept safe.", "blanks": ["the", "in", "this", "These"], "hint": "articles and demonstrative" },
    { "type": "fill", "scene": "Rest area.", "text": "Parent: Let's sit ___ ___ bench and rest ___ a while. We've seen so many animals!<br>Child: Okay! My feet are tired.", "blanks": ["on", "a", "for"], "hint": "prepositions" },
    { "type": "fill", "scene": "Leaving the zoo.", "text": "Child: That was wonderful! I learned so much ___ ___ animals.<br>Parent: Yes! And remember to care ___ nature and protect endangered species.", "blanks": ["about", "these", "for"], "hint": "prepositions" }
  ],
  "icecream": [
    { "type": "fill", "scene": "At the ice cream shop.", "text": "Child: It's very hot! Can I have ___ ice cream?<br>Shopkeeper: Of course! What flavor would you like?", "blanks": ["an"], "hint": "article before vowel" },
    { "type": "fill", "scene": "Flavors available.", "text": "Shopkeeper: We have vanilla, chocolate, and strawberry. ___ flavor do you prefer?<br>Child: I like chocolate!", "blanks": ["Which"], "hint": "question word" },
    { "type": "mcq", "scene": "Choosing flavor.", "text": "You ask: 'Which is ___ most popular flavor?'", "options": ["the", "a", "your", "that"], "answer": 0 },
    { "type": "fill", "scene": "Size selection.", "text": "Shopkeeper: Would you like ___ small or large size?<br>Child: Large, please! And can I have ___ cone instead ___ ___ cup?", "blanks": ["a", "a", "of", "a"], "hint": "articles and preposition" },
    { "type": "fill", "scene": "Toppings.", "text": "Shopkeeper: Would you like any toppings? We have sprinkles, nuts, and chocolate sauce.<br>Child: Yes! Put some ___ on top!", "blanks": ["sprinkles"], "hint": "small decorations" },
    { "type": "mcq", "scene": "Multiple scoops.", "text": "You ask: 'Can I have ___ scoop ___ vanilla ___ another ___ chocolate?'", "options": ["a...of...and...of", "one...of...with...of", "a...on...and...one", "some...on...and...of"], "answer": 0 },
    { "type": "fill", "scene": "Weather and ice cream.", "text": "Friend: Ice cream is perfect ___ ___ hot summer day!<br>You: Yes! It's so refreshing ___ eat.", "blanks": ["on", "a", "to"], "hint": "prepositions" },
    { "type": "fill", "scene": "Eating quickly.", "text": "Child: My ice cream is melting! I need to eat it ___ before it completely melts ___ the heat.<br>Friend: Eat faster!", "blanks": ["quickly", "in"], "hint": "adverb and preposition" },
    { "type": "mcq", "scene": "Payment.", "text": "Shopkeeper asks: 'How will you pay ___ your ice cream?'", "options": ["for", "in", "on", "with"], "answer": 0 },
    { "type": "fill", "scene": "With friends.", "text": "Friend: Eating ice cream ___ friends is so much fun!<br>You: Yes! It's ___ wonderful experience ___ hot days.", "blanks": ["with", "a", "on"], "hint": "prepositions and article" },
    { "type": "fill", "scene": "Flavors conversation.", "text": "Child: What's your favorite flavor?<br>Friend: I like strawberry. It reminds me ___ summer holidays ___ my grandmother's house.", "blanks": ["of", "at"], "hint": "prepositions" },
    { "type": "fill", "scene": "Cleanup.", "text": "Shopkeeper: After finishing, please put ___ wrapper ___ ___ dustbin to keep ___ shop clean.<br>Customer: Thanks for reminding me!", "blanks": ["your", "in", "the", "the"], "hint": "possessive, prepositions, and article" }
  ],
  "playground": [
    { "type": "fill", "scene": "At the playground.", "text": "Child: Look ___ all ___ play equipment! Can I go ___ ___ swings first?<br>Parent: Sure!", "blanks": ["at", "the", "on", "the"], "hint": "prepositions and articles" },
    { "type": "fill", "scene": "Making new friends.", "text": "New friend: Hi! What's your name? Would you like to play ___ me?<br>You: Yes! I'm Arjun.", "blanks": ["with"], "hint": "preposition" },
    { "type": "fill", "scene": "Game invitation.", "text": "Friend: Let's play ___ tag! I'll chase you ___ ___ playground.<br>You: Okay! Catch me ___ you can!", "blanks": ["a", "around", "the", "if"], "hint": "article, preposition, and conjunction" },
    { "type": "mcq", "scene": "Seesaw play.", "text": "You say: 'Let's go ___ on the seesaw! You sit on one end and I'll sit on the other!'", "options": ["and", "up", "to", "in"], "answer": 0 },
    { "type": "fill", "scene": "Helping a friend.", "text": "Friend falls. You: Are you okay? Let me help you up. Can I get help ___ an adult?<br>Friend: I'm fine. It didn't hurt much.", "blanks": ["from"], "hint": "preposition" },
    { "type": "mcq", "scene": "Playground rules.", "text": "Which is an important playground rule?", "options": ["Take turns on equipment. Don't push others.", "Push to get ahead. Be rough.", "Throw things at others.", "Run without watching where you're going."], "answer": 0 },
    { "type": "fill", "scene": "Sharing equipment.", "text": "You: Can I take ___ turn ___ ___ slide? You've been playing ___ a long time.<br>Friend: Okay! Your turn now.", "blanks": ["a", "on", "the", "for"], "hint": "article and prepositions" },
    { "type": "fill", "scene": "Playing safely.", "text": "Parent: Play ___ ___ designated areas. Don't play ___ ___ street. Stay where I can see you.<br>Child: Okay!", "blanks": ["in", "the", "near", "the"], "hint": "prepositions and articles" },
    { "type": "mcq", "scene": "Climbing structure.", "text": "You should climb ___ the bars carefully, one step ___ a time.", "options": ["on...at", "on...at", "in...at", "through...with"], "answer": 0 },
    { "type": "fill", "scene": "Tired after play.", "text": "Child: I'm tired ___ playing! Can we sit ___ ___ bench?<br>Parent: Of course. Let's rest ___ a while.", "blanks": ["from", "on", "a", "for"], "hint": "prepositions and article" },
    { "type": "fill", "scene": "End of playtime.", "text": "Parent: It's getting dark. We must leave ___ the playground now. Say goodbye ___ your friends.<br>You: Okay! Can I come back tomorrow?", "blanks": ["the", "to"], "hint": "articles and preposition" },
    { "type": "fill", "scene": "Reflection.", "text": "Child: I had ___ great day ___ the playground! I made new friends and had so much fun!<br>Parent: Yes! Play is important ___ your health and happiness.", "blanks": ["a", "at", "for"], "hint": "article and prepositions" }
  ],
  "busstop": [
    { "type": "fill", "scene": "Waiting at the bus stop.", "text": "Passenger: I'm waiting ___ the number 42 bus. Do you know what time it comes?<br>Local: It usually comes every 15 minutes.", "blanks": ["for"], "hint": "preposition" },
    { "type": "fill", "scene": "Bus arriving.", "text": "Passenger: The bus is coming! I can see it ___ the distance.<br>Everyone: Let's get ready to board.", "blanks": ["in"], "hint": "preposition" },
    { "type": "mcq", "scene": "Boarding the bus.", "text": "The bus arrives. You should:", "options": ["Wait in line and board in an orderly manner.", "Push to get on first.", "Jump on from the side.", "Run behind the bus."], "answer": 0 },
    { "type": "fill", "scene": "Asking the conductor.", "text": "You: Excuse me, does this bus go ___ the railway station?<br>Conductor: Yes, we'll reach there ___ about 20 minutes.", "blanks": ["to", "in"], "hint": "prepositions" },
    { "type": "fill", "scene": "Crowded bus.", "text": "Passenger: The bus is very crowded. Let me hold ___ ___ railing ___ safety.<br>Another: Good idea!", "blanks": ["on", "to", "for"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Inside the bus.", "text": "You should give your seat ___ elderly people or those ___ need.", "options": ["to...in", "for...with", "to...who", "in...for"], "answer": 2 },
    { "type": "fill", "scene": "Bus payment.", "text": "Conductor: That'll be thirty rupees. Where are you going?<br>Passenger: I'm going ___ the hospital. Here's ___ payment.", "blanks": ["to", "the"], "hint": "preposition and article" },
    { "type": "fill", "scene": "Bus stop.", "text": "Conductor: Next stop! This is ___ street you want?<br>Passenger: Yes, thank you. Can you tell me when ___ get there?", "blanks": ["the", "we"], "hint": "article and pronoun" },
    { "type": "mcq", "scene": "Getting off.", "text": "You press the bell to signal the bus driver. You should:", "options": ["Wait for the bus to stop completely before getting off.", "Jump off while the bus is moving.", "Get off without pressing the bell.", "Push people off."], "answer": 0 },
    { "type": "fill", "scene": "During the ride.", "text": "Passenger: Excuse me, is ___ seat taken?<br>Traveler: No, please sit ___ . You look tired.", "blanks": ["this", "down"], "hint": "demonstrative and preposition" },
    { "type": "fill", "scene": "Missing the stop.", "text": "Passenger: I think I missed my stop! Excuse me, where are we ___ ?<br>Conductor: You can get ___ at the next stop and take ___ bus back.", "blanks": ["now", "off", "a"], "hint": "prepositions and article" },
    { "type": "fill", "scene": "Safe travel.", "text": "Message ___ the bus: 'Travel safely. Don't stand ___ while ___ bus is moving. Keep your belongings close ___ you.'", "blanks": ["on", "while", "the", "to"], "hint": "prepositions and article" }
  ],
  "airport": [
    { "type": "fill", "scene": "Arriving at the airport.", "text": "Traveler: I'm here to catch ___ flight to London. Where is ___ check-in counter?<br>Helper: It's ___ that direction.", "blanks": ["a", "the", "in"], "hint": "article and preposition" },
    { "type": "fill", "scene": "At the check-in desk.", "text": "Agent: Good morning! May I see your passport and ticket, please? ___ luggage will ___ checked ___ weight.<br>Passenger: Here you go.", "blanks": ["Your", "be", "for"], "hint": "possessive, passive voice, preposition" },
    { "type": "mcq", "scene": "Security check.", "text": "At airport security, you should:", "options": ["Remove your shoes, belt, and items from your pocket.", "Keep everything on and walk through quickly.", "Hide your bag from security.", "Refuse to be scanned."], "answer": 0 },
    { "type": "fill", "scene": "Finding your gate.", "text": "Passenger: Excuse me, where is the gate ___ my flight? I'm flying ___ 3 PM.<br>Helper: Check ___ boarding monitor. It's ___ Gate 12.", "blanks": ["for", "at", "the", "at"], "hint": "prepositions and article" },
    { "type": "fill", "scene": "Boarding announcement.", "text": "Announcement: All passengers ___ Flight 245 ___ Madrid, please proceed ___ boarding ___ Gate 8 now.", "blanks": ["on", "to", "to", "from"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Carry-on baggage.", "text": "You can bring one carry-on bag ___ the aircraft. It should fit ___ the overhead compartment.", "options": ["on...in", "in...on", "at...in", "with...on"], "answer": 0 },
    { "type": "fill", "scene": "Seat assignment.", "text": "Flight attendant: You're ___ Seat 15C. That's ___ ___ aisle, a few rows ___ .<br>Passenger: Thank you!", "blanks": ["in", "by", "the", "back"], "hint": "articles and prepositions" },
    { "type": "fill", "scene": "During flight.", "text": "Attendant: Can I offer you something ___ drink?<br>Passenger: Yes, I'll have some water ___ ice, please.", "blanks": ["to", "with"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Emergency exit.", "text": "You should:", "options": ["Know where the nearest emergency exit is located.", "Ignore safety demonstrations.", "Block emergency exits.", "Tamper with emergency equipment."], "answer": 0 },
    { "type": "fill", "scene": "Landing.", "text": "Captain: We're beginning our descent ___ London. Please fasten your seatbelts ___ arrival.<br>Passengers: Thank you, Captain!", "blanks": ["into", "for"], "hint": "prepositions" },
    { "type": "fill", "scene": "Baggage claim.", "text": "Passenger: Where do I collect my luggage? <br>Helper: Go ___ ___ baggage claim area. Your bags will be ___ the carousel marked ___ your flight number.", "blanks": ["to", "the", "on", "with"], "hint": "prepositions and article" },
    { "type": "fill", "scene": "Exiting the airport.", "text": "Passenger: I'm looking ___ the exit. Do I need to go ___ customs?<br>Helper: Yes, you'll pass ___ customs before going ___ the exit.", "blanks": ["for", "through", "through", "to"], "hint": "prepositions" }
  ],
  "taxi": [
    { "type": "fill", "scene": "Catching a taxi.", "text": "Person: Taxi! I need ___ ride ___ the railway station.<br>Taxi Driver: Get in! I'll take you there quickly.", "blanks": ["a", "to"], "hint": "article and preposition" },
    { "type": "fill", "scene": "In the taxi.", "text": "You: How much will it cost ___ the station?<br>Taxi Driver: About fifty rupees. It depends ___ traffic.", "blanks": ["to", "on"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Taxi payment.", "text": "You should pay the taxi driver:", "options": ["With cash or card as agreed. Ask for a receipt if possible.", "Refuse to pay.", "Try to escape without paying.", "Negotiate after the ride."], "answer": 0 },
    { "type": "fill", "scene": "Route discussion.", "text": "You: Can we take the shortest route? I'm in ___ hurry.<br>Taxi Driver: Of course! I know the best way ___ avoid traffic.", "blanks": ["a", "to"], "hint": "article and preposition" },
    { "type": "fill", "scene": "During the ride.", "text": "Taxi Driver: Make sure your door is locked. Keep your valuables close ___ you!<br>You: Thank you ___ the safety reminder.", "blanks": ["to", "for"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Addressing the driver.", "text": "A polite way to talk to a taxi driver is:", "options": ["'Excuse me sir/madam, can you please take me to...'", "Yelling or demanding.", "Ignoring the driver.", "Being rude."], "answer": 0 },
    { "type": "fill", "scene": "Chatting with the driver.", "text": "Taxi Driver: ___ you been to this station before?<br>You: No, this is my first time ___ this part ___ the city.", "blanks": ["Have", "in", "of"], "hint": "question and prepositions" },
    { "type": "fill", "scene": "Navigation.", "text": "You: Please turn ___ right at the next traffic light. The station is ___ ___ corner.<br>Taxi Driver: I see it! We're almost there.", "blanks": ["left", "on", "the"], "hint": "directions and prepositions" },
    { "type": "mcq", "scene": "Taxi safety tips.", "text": "What is important when taking a taxi?", "options": ["Note the taxi number, tell someone where you're going, keep doors locked.", "Travel alone without telling anyone.", "Share personal information.", "Keep windows open in unsafe areas."], "answer": 0 },
    { "type": "fill", "scene": "Arriving at destination.", "text": "Taxi Driver: We've arrived ___ ___ station. Your fare is fifty rupees.<br>You: Thank you ___ ___ safe drive!", "blanks": ["at", "the", "for", "the"], "hint": "prepositions and article" },
    { "type": "fill", "scene": "Tipping and thanks.", "text": "You: Here's the money and ___ small tip ___ your excellent service!<br>Taxi Driver: Thank you very much! Safe travels!", "blanks": ["a", "for"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Leaving the taxi.", "text": "You: Goodbye! Thanks ___ helping me find this place.<br>Taxi Driver: You're welcome! Come again ___ you need a ride!", "blanks": ["for", "when"], "hint": "preposition and conjunction" }
  ],
  "supermarket": [
    { "type": "fill", "scene": "Entering a supermarket.", "text": "Child: Look ___ all ___ products arranged ___ shelves!<br>Parent: Yes! We can find everything ___ one place.", "blanks": ["at", "the", "on", "in"], "hint": "prepositions" },
    { "type": "fill", "scene": "Picking a shopping cart.", "text": "You: I need ___ cart ___ carry all these items.<br>Staff: Just grab one ___ the entrance!", "blanks": ["a", "to", "at"], "hint": "article and prepositions" },
    { "type": "mcq", "scene": "Finding items.", "text": "You ask a staff member: 'Where are ___ vegetables?'", "options": ["the", "a", "some", "any"], "answer": 0 },
    { "type": "fill", "scene": "Checking quality.", "text": "You: I need to check ___ expiry dates. These products are fresh, right?<br>Staff: Yes! All items arrived ___ yesterday.", "blanks": ["the", "today"], "hint": "preposition and time" },
    { "type": "fill", "scene": "Using discounts.", "text": "Sign: We're having ___ sale ___ dairy products! Milk is ___ 20% discount today.<br>Customer: Great! I'll buy more.", "blanks": ["a", "on", "at"], "hint": "article and prepositions" },
    { "type": "mcq", "scene": "Payment options.", "text": "At the supermarket checkout, you can pay:", "options": ["In cash or by card. Both methods are accepted.", "Only in cash.", "Only by check.", "Without paying."], "answer": 0 },
    { "type": "fill", "scene": "Checkout line.", "text": "You: There's ___ long line. I'll wait ___ my turn patiently.<br>Cashier: Please put your items ___ ___ conveyor belt.", "blanks": ["a", "for", "on", "the"], "hint": "article and prepositions" },
    { "type": "fill", "scene": "Bagging items.", "text": "Cashier: Do you want plastic or paper bags?<br>You: Paper, please! They're better ___ ___ environment.", "blanks": ["for", "the"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Supermarket rules.", "text": "What is polite behavior at the supermarket?", "options": ["Return items to their place, respect other customers' space.", "Leave items anywhere.", "Block aisles with your cart.", "Eat products without paying."], "answer": 0 },
    { "type": "fill", "scene": "Special sections.", "text": "The supermarket has different sections: vegetables, fruits, dairy, and meat. Everything is organized ___ categories ___ easy shopping.<br>Customer: It's very convenient!", "blanks": ["by", "for"], "hint": "prepositions" },
    { "type": "fill", "scene": "Receipt.", "text": "Cashier: Here's your receipt. Please check ___ any errors. You saved money ___ discounts today!<br>Customer: Thank you!", "blanks": ["for", "with"], "hint": "prepositions" },
    { "type": "fill", "scene": "Leaving with groceries.", "text": "You: I got everything ___ my list! ___ supermarket is so well-organized.<br>Friend: Yes! Let's come back ___ week!", "blanks": ["on", "This", "next"], "hint": "preposition, demonstrative, and time" }
  ],
  "toyshop": [
    { "type": "fill", "scene": "At the toy shop.", "text": "Child: Wow! There are so many amazing ___ here!<br>Shopkeeper: Yes! We have something ___ every age ___ every interest.", "blanks": ["toys", "for", "and"], "hint": "prepositions" },
    { "type": "fill", "scene": "Exploring the shop.", "text": "Child: What's your most popular toy ___ children my age?<br>Shopkeeper: Building blocks! They help kids develop creativity ___ problem-solving.", "blanks": ["for", "and"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Choosing a toy.", "text": "What makes a good toy choice?", "options": ["Age-appropriate, safe, educational, and interesting to the child.", "The most expensive toy.", "Any toy randomly.", "Broken toys."], "answer": 0 },
    { "type": "fill", "scene": "Quality and safety.", "text": "Parent: I want toys that are safe ___ my child. Are these certified?<br>Shopkeeper: Yes! All our toys pass ___ safety standards.", "blanks": ["for", "safety"], "hint": "prepositions" },
    { "type": "fill", "scene": "Gift selection.", "text": "You: I need ___ toy ___ my friend's birthday. What ___ you recommend?<br>Shopkeeper: What does your friend like?", "blanks": ["a", "for", "do"], "hint": "article and question word" },
    { "type": "mcq", "scene": "Toy categories.", "text": "Toys can be:", "options": ["Educational, action figures, puzzles, building sets, board games, dolls.", "Only expensive.", "Only for boys or only for girls.", "All the same."], "answer": 0 },
    { "type": "fill", "scene": "Playing with toys.", "text": "Child: Can I play ___ this toy before buying it?<br>Shopkeeper: Sure! Let me show you how it works. You control it ___ this remote.", "blanks": ["with", "with"], "hint": "prepositions" },
    { "type": "fill", "scene": "Toy construction.", "text": "Shopkeeper: This toy requires assembly. It comes ___ instructions and all necessary parts. It's made ___ durable plastic.", "blanks": ["with", "of"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Toy warranties.", "text": "Good toys usually come with:", "options": ["Warranty, instructions, and safety information.", "No information.", "Broken parts.", "No contact for support."], "answer": 0 },
    { "type": "fill", "scene": "Price negotiation.", "text": "Parent: This toy is a bit expensive. Do you have anything ___ the same quality ___ a lower price?<br>Shopkeeper: Let me find something ___ you.", "blanks": ["of", "at", "for"], "hint": "prepositions" },
    { "type": "fill", "scene": "Seasonal toys.", "text": "Shopkeeper: During holidays, we get special toys ___ ___ season. Right now, we have summer-themed toys ___ sale!<br>Customer: Perfect!", "blanks": ["for", "the", "on"], "hint": "prepositions" },
    { "type": "fill", "scene": "Leaving the shop.", "text": "Child: Thank you ___ helping me choose! I'm so excited ___ this toy!<br>Shopkeeper: You're welcome! Enjoy ___ it!", "blanks": ["for", "about", "with"], "hint": "prepositions" }
  ],
  "bookstore": [
    { "type": "fill", "scene": "At the bookstore entrance.", "text": "Child: I want to buy ___ book! There are so many interesting ones here!<br>Parent: Let's look ___ a book together.", "blanks": ["a", "for"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Browsing books.", "text": "You: I love this section! I'm interested ___ adventure stories ___ fantasy books.<br>Staff: You'll find ___ of them ___ the fantasy shelf.", "blanks": ["in", "and", "lots", "on"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Choosing a book.", "text": "A good way to choose a book is to:", "options": ["Read the cover, check the author, read reviews, sample first pages.", "Pick any book without looking.", "Judge by cover only.", "Buy books you've never heard of."], "answer": 0 },
    { "type": "fill", "scene": "Asking for recommendations.", "text": "You: Can you recommend ___ good book ___ someone ___ 12 years old?<br>Staff: What genre do they like?", "blanks": ["a", "for", "who", "is"], "hint": "article, preposition, and pronoun" },
    { "type": "fill", "scene": "Book sections.", "text": "Staff: Our bookstore has sections ___ fiction, non-fiction, children's books, and self-help. Everything is organized ___ genre.", "blanks": ["for", "by"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Comparing book prices.", "text": "Books have different prices because of:", "options": ["Page count, author popularity, publication date, binding quality.", "All books cost the same.", "Only old books are cheap.", "Only new books are expensive."], "answer": 0 },
    { "type": "fill", "scene": "Checking edition and author.", "text": "You: This book is ___ the author I love! Is this the latest edition?<br>Staff: Yes! It came out ___ last month.", "blanks": ["by", "in"], "hint": "preposition and time" },
    { "type": "fill", "scene": "Book reviews and ratings.", "text": "Parent: Look ___ ___ customer reviews ___ this book. It has 4.5 stars ___ of 5!<br>Child: That means it's good!", "blanks": ["at", "the", "of", "out"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Digital vs physical books.", "text": "Which is an advantage of physical books?", "options": ["No screen glare, can be shared, real feel, no battery needed.", "Always connected online.", "Takes up no space.", "Can be easily lost."], "answer": 0 },
    { "type": "fill", "scene": "Reading clubs.", "text": "Staff: We have ___ reading club that meets here ___ Saturdays. Members discuss books and share their thoughts ___ each other.", "blanks": ["a", "on", "with"], "hint": "article and prepositions" },
    { "type": "fill", "scene": "Gift wrapping.", "text": "You: Can you wrap this book as ___ gift? It's ___ my friend.<br>Staff: Of course! We offer free gift wrapping ___ books.", "blanks": ["a", "for", "for"], "hint": "articles and prepositions" },
    { "type": "fill", "scene": "Loyalty program.", "text": "Staff: Join our loyalty program! You'll earn points ___ every purchase. Points can be redeemed ___ discounts ___ future books!<br>Customer: Great idea!", "blanks": ["on", "for", "on"], "hint": "prepositions" }
  ],
  "clothingstore": [
    { "type": "fill", "scene": "At the clothing store.", "text": "Staff: Welcome! What style ___ clothes are you looking ___ today?<br>Customer: I need casual clothes ___ everyday wear.", "blanks": ["of", "for", "for"], "hint": "prepositions" },
    { "type": "fill", "scene": "Browsing clothes.", "text": "You: I like this shirt! Can I try it ___ ? What's ___ size?<br>Staff: It's a large. The fitting room is ___ the back.", "blanks": ["on", "the", "at"], "hint": "prepositions and article" },
    { "type": "mcq", "scene": "Clothing fit.", "text": "When trying on clothes, they should be:", "options": ["Comfortable, allow movement, not too tight or loose.", "Very tight to show muscles.", "Very loose and baggy.", "Painful to wear."], "answer": 0 },
    { "type": "fill", "scene": "Checking fabric quality.", "text": "You: What's this shirt made ___ ? Is it cotton?<br>Staff: Yes! It's 100% cotton. Perfect ___ the summer heat.", "blanks": ["of", "for"], "hint": "prepositions" },
    { "type": "fill", "scene": "Matching clothes.", "text": "Friend: This blue shirt looks great ___ you! It matches well ___ your jeans.<br>You: Thank you! I love this color ___ my skin tone too.", "blanks": ["on", "with", "on"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Seasonal clothing choices.", "text": "For winter, you should wear:", "options": ["Warm clothes like sweaters, coats, and layers.", "Shorts and light clothing.", "Summer dresses.", "No clothes."], "answer": 0 },
    { "type": "fill", "scene": "Price discussion.", "text": "You: This dress is beautiful! Is it ___ sale?<br>Staff: No, but we have similar designs ___ discount today.", "blanks": ["on", "on"], "hint": "prepositions" },
    { "type": "fill", "scene": "Care instructions.", "text": "Staff: This shirt requires careful washing. Please read ___ care label ___ ___ dress tag.<br>Customer: I'll follow ___ instructions.", "blanks": ["the", "on", "the", "the"], "hint": "articles and prepositions" },
    { "type": "mcq", "scene": "Appropriate dress code.", "text": "What should you wear to a formal event?", "options": ["Formal or semi-formal clothing like dresses, suits, or formal shirts.", "Casual wear like jeans and t-shirts.", "Pajamas.", "Sports wear."], "answer": 0 },
    { "type": "fill", "scene": "Fashion trends.", "text": "Staff: These styles are trending ___ ___ moment. Many celebrities wear ___ style ___ red carpets.<br>Customer: Really? I love trending styles!", "blanks": ["at", "the", "this", "on"], "hint": "prepositions and demonstrative" },
    { "type": "fill", "scene": "Accessories.", "text": "You: Can I add ___ accessories ___ this outfit?<br>Staff: Sure! We have belts, scarves, and jewelry ___ complement your look.", "blanks": ["some", "to", "to"], "hint": "quantifier and prepositions" },
    { "type": "fill", "scene": "Final purchase.", "text": "Customer: I'll buy this shirt and jeans. Can you gift wrap them?<br>Staff: Of course! Your total comes ___ 1,500 rupees. We accept payment ___ cash or card.", "blanks": ["to", "in"], "hint": "prepositions" }
  ],
  "shoeshop": [
    { "type": "fill", "scene": "At the shoe shop.", "text": "Child: My shoes are too small! I need new ___ that fit properly.<br>Staff: Let me help you find ___ right size.", "blanks": ["shoes", "the"], "hint": "article" },
    { "type": "fill", "scene": "Trying shoes on.", "text": "You: These feel too tight. Can I try ___ next size?<br>Staff: Of course! Let me bring ___ larger pair ___ you.", "blanks": ["a", "a", "for"], "hint": "articles and preposition" },
    { "type": "mcq", "scene": "Shoe fit.", "text": "Properly fitting shoes should:", "options": ["Feel comfortable with space for toes, not too tight or loose.", "Be very tight to prevent slipping.", "Have no arch support.", "Cause pain to break in."], "answer": 0 },
    { "type": "fill", "scene": "Different shoe types.", "text": "There are many types ___ shoes: sneakers ___ sports, formal shoes ___ office, sandals ___ summer!<br>Customer: I need one ___ each occasion.", "blanks": ["of", "for", "for", "for", "of"], "hint": "prepositions" },
    { "type": "fill", "scene": "Shoe comfort check.", "text": "You: Can I walk around ___ check how these feel?<br>Staff: Absolutely! The store is yours. Let me know ___ they're comfortable.", "blanks": ["to", "if"], "hint": "preposition and conjunction" },
    { "type": "mcq", "scene": "Shoe material quality.", "text": "Good quality shoes are usually made of:", "options": ["Leather or high-quality synthetic materials with proper stitching.", "Plastic only.", "Paper.", "Material with loose stitching."], "answer": 0 },
    { "type": "fill", "scene": "Shoe sole inspection.", "text": "Staff: Look at ___ sole ___ the shoe. It's made ___ rubber, which provides good grip.<br>Customer: Good! Traction is important ___ me.", "blanks": ["the", "of", "of", "for"], "hint": "articles and prepositions" },
    { "type": "fill", "scene": "Shoe color selection.", "text": "You: This black shoe goes ___ almost any outfit! It's versatile ___ different occasions.<br>Friend: Yes, and it's elegant ___ casual wear too.", "blanks": ["with", "for", "for"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Weather-appropriate shoes.", "text": "For rainy season, you should wear:", "options": ["Waterproof or water-resistant shoes with good grip.", "Canvas shoes that absorb water.", "Sandals that let water in.", "Shoes with holes."], "answer": 0 },
    { "type": "fill", "scene": "Shoe maintenance.", "text": "Staff: To keep your shoes in good condition, clean them regularly and store them ___ ___ cool, dry place. Avoid direct sunlight!<br>Customer: I'll follow ___ tips.", "blanks": ["in", "a", "these"], "hint": "prepositions and pronoun" },
    { "type": "fill", "scene": "Return policy.", "text": "You: What's your return policy ___ shoes?<br>Staff: You can return them ___ 30 days if you're not satisfied. They must be unworn.", "blanks": ["for", "within"], "hint": "prepositions" },
    { "type": "fill", "scene": "Purchase complete.", "text": "Staff: Here's your receipt. Thank you ___ shopping ___ us! Enjoy your new shoes!<br>Customer: You've been very helpful. I'll come back when I need ___ shoes.", "blanks": ["for", "with", "more"], "hint": "prepositions and quantifier" }
  ],
  "cafe": [
    { "type": "fill", "scene": "At the cafe entrance.", "text": "Server: Welcome! What can I get ___ you?<br>Customer: I'd like ___ cold coffee and ___ sandwich, please.", "blanks": ["for", "a", "a"], "hint": "preposition and articles" },
    { "type": "fill", "scene": "Choosing from the menu.", "text": "You: What ___ do you recommend? Something light?<br>Server: Our salads and sandwiches are very popular ___ lunch.", "blanks": ["would you", "for"], "hint": "question and preposition" },
    { "type": "mcq", "scene": "Cafe behavior.", "text": "Good cafe etiquette includes:", "options": ["Keep your voice down, clean after yourself, respect other patrons.", "Talk loudly, leave trash, disturb others.", "Eat others' food.", "Use phone loudly."], "answer": 0 },
    { "type": "fill", "scene": "Customizing your drink.", "text": "You: Can I have my coffee ___ milk? And less sugar, please.<br>Server: Absolutely! We can customize ___ drink just ___ you prefer.", "blanks": ["with", "your", "as"], "hint": "prepositions" },
    { "type": "fill", "scene": "Checking prices.", "text": "You: How much is ___ cappuccino?<br>Server: It's 150 rupees. We also have ___ special offer ___ drinks today!", "blanks": ["the", "a", "on"], "hint": "article and prepositions" },
    { "type": "mcq", "scene": "Seating options.", "text": "Which is a good café seating choice?", "options": ["Choose a quiet corner if you want to read or study.", "Always sit near others.", "Block the aisle with your seat.", "Sit at tables reserved for servers."], "answer": 0 },
    { "type": "fill", "scene": "Food allergies.", "text": "You: I'm allergic ___ nuts. Are there any nuts ___ this pastry?<br>Server: Let me check ___ the ingredients ___ you.", "blanks": ["to", "in", "with", "for"], "hint": "prepositions" },
    { "type": "fill", "scene": "Atmosphere and ambiance.", "text": "Friend: This cafe has ___ wonderful atmosphere! ___ music is relaxing and ___ lighting is soft.<br>You: Yes, it's perfect ___ studying!", "blanks": ["a", "The", "the", "for"], "hint": "articles and preposition" },
    { "type": "mcq", "scene": "Payment at cafe.", "text": "At the cafe, you can pay:", "options": ["Cash or card at the counter.", "Without paying.", "After leaving.", "Only in installments."], "answer": 0 },
    { "type": "fill", "scene": "Wi-Fi and work space.", "text": "You: Do you have Wi-Fi here? I'd like to work ___ my laptop for ___ while.<br>Server: Yes! We have free Wi-Fi. It's ___ the receipt.", "blanks": ["on", "a", "on"], "hint": "prepositions" },
    { "type": "fill", "scene": "Tipping at cafe.", "text": "Customer: This service was excellent! I'll tip you. Keep ___ change!<br>Server: Thank you so much ___ your kindness!", "blanks": ["the", "for"], "hint": "article and preposition" },
    { "type": "fill", "scene": "Leaving the cafe.", "text": "You: Thank you ___ ___ wonderful break! The coffee was delicious ___ exactly what I needed.<br>Server: Come back soon! We're open ___ 8 AM ___ 8 PM.", "blanks": ["for", "the", "and", "from", "to"], "hint": "prepositions" }
  ],
  "dentist": [
    { "type": "fill", "scene": "At the dentist's office.", "text": "Receptionist: Good morning! Do you have ___ appointment?<br>Patient: Yes, I have ___ appointment ___ 10 AM with Dr. Sharma.", "blanks": ["an", "an", "at"], "hint": "articles and preposition" },
    { "type": "fill", "scene": "Waiting room.", "text": "You: The waiting room is comfortable. How long will I wait ___ the doctor?<br>Receptionist: Usually about 10 minutes.", "blanks": ["for"], "hint": "preposition" },
    { "type": "mcq", "scene": "Dental examination.", "text": "During a dental check-up, the dentist will:", "options": ["Examine your teeth and gums, clean your teeth, check for cavities.", "Just take money.", "Not look at your teeth.", "Hurt you intentionally."], "answer": 0 },
    { "type": "fill", "scene": "Discussing symptoms.", "text": "Dentist: Do you have any pain ___ your teeth? How long have you had this problem?<br>Patient: Yes, this tooth hurts ___ ___ past week.", "blanks": ["in", "for", "the"], "hint": "prepositions" },
    { "type": "fill", "scene": "Learning proper care.", "text": "Dentist: You must brush your teeth twice daily. ___ at least two minutes. And don't forget to floss ___ between ___ teeth!<br>Patient: I will do better.", "blanks": ["Brush", "between", "your"], "hint": "verb and prepositions" },
    { "type": "mcq", "scene": "Treatment explanation.", "text": "The dentist explains your treatment. You should:", "options": ["Listen carefully and ask questions if you don't understand.", "Ignore the explanation.", "Accept any treatment without discussion.", "Refuse all suggestions."], "answer": 0 },
    { "type": "fill", "scene": "Cavity treatment.", "text": "Dentist: You have ___ small cavity. Don't worry, I'll fill it. This procedure will take about 15 minutes ___ be painless.", "blanks": ["a", "and"], "hint": "article and conjunction" },
    { "type": "fill", "scene": "Post-treatment care.", "text": "Dentist: After ___ filling, avoid eating hard foods ___ a few hours. Be careful ___ ___ tooth sensitivity.<br>Patient: I understand.", "blanks": ["the", "for", "with", "the"], "hint": "articles and prepositions" },
    { "type": "mcq", "scene": "Preventing cavities.", "text": "To prevent cavities you should:", "options": ["Brush twice daily, floss, eat less sugar, visit dentist regularly.", "Never brush.", "Eat lots of candy.", "Ignore dental hygiene."], "answer": 0 },
    { "type": "fill", "scene": "Scheduling next appointment.", "text": "Receptionist: You should come back ___ your next check-up ___ 6 months.<br>Patient: Okay! ___ I book now?", "blanks": ["for", "in", "Can"], "hint": "prepositions and question word" },
    { "type": "fill", "scene": "Payment discussion.", "text": "Receptionist: Your total today is 800 rupees. We accept payment ___ cash ___ card.<br>Patient: I'll pay ___ card.", "blanks": ["in", "or", "by"], "hint": "prepositions" },
    { "type": "fill", "scene": "Leaving the dentist.", "text": "Dentist: Take care ___ your teeth! If you have pain ___ the future, don't hesitate ___ call ___ an appointment.<br>Patient: Thank you, doctor!", "blanks": ["of", "in", "to", "for"], "hint": "prepositions" }
  ],
  "petshop": [
    { "type": "fill", "scene": "At the pet shop.", "text": "Child: I want ___ pet! Which animal is best ___ beginners?<br>Staff: Dogs and cats are popular. They're easy ___ care ___ .", "blanks": ["a", "for", "to", "for"], "hint": "articles and prepositions" },
    { "type": "fill", "scene": "Choosing a pet.", "text": "Parent: Before getting ___ pet, we must consider our lifestyle. Do we have time ___ care ___ it?<br>Staff: That's important!", "blanks": ["a", "to", "for"], "hint": "article and prepositions" },
    { "type": "mcq", "scene": "Pet responsibilities.", "text": "Pet ownership requires you to:", "options": ["Provide food, water, exercise, love, and medical care.", "Never care for the pet.", "Leave the pet alone.", "Ignore health needs."], "answer": 0 },
    { "type": "fill", "scene": "Pet supplies available.", "text": "Staff: We have everything your pet needs: food, toys, bedding, and grooming supplies. Everything is organized ___ type ___ pet.<br>Customer: Convenient!", "blanks": ["by", "of"], "hint": "prepositions" },
    { "type": "fill", "scene": "Understanding pet needs.", "text": "You: What does ___ dog need daily?<br>Staff: Food, fresh water, exercise, and plenty ___ attention and love.", "blanks": ["a", "of"], "hint": "article and preposition" },
    { "type": "mcq", "scene": "Pet health care.", "text": "To keep your pet healthy, you should:", "options": ["Visit the vet regularly, vaccinate, provide good nutrition, exercise.", "Never visit the vet.", "Feed random foods.", "Ignore vaccinations."], "answer": 0 },
    { "type": "fill", "scene": "Pet diet discussion.", "text": "Staff: Choose ___ good quality pet food. Different pets have different nutritional needs. Ask your vet ___ recommendations ___ your specific pet.", "blanks": ["a", "for", "for"], "hint": "article and prepositions" },
    { "type": "fill", "scene": "Training your pet.", "text": "Staff: Training is important ___ your pet's behavior. Start ___ young age and use positive reinforcement methods ___ motivation.","blanks": ["for", "at", "as"], "hint": "prepositions" },
    { "type": "mcq", "scene": "Pet companionship.", "text": "The main benefit of having a pet is:", "options": ["Unconditional love, companionship, and emotional support.", "Just having something to feed.", "No real benefit.", "Isolation from others."], "answer": 0 },
    { "type": "fill", "scene": "Grooming and hygiene.", "text": "Staff: Regular bathing and grooming keep your pet healthy. You should bathe your dog once ___ two weeks, depending ___ its coat type.","blanks": ["every", "on"], "hint": "prepositions" },
    { "type": "fill", "scene": "Pet safety.", "text": "You: How do I keep my pet safe?<br>Staff: Keep toxic foods and plants away. ___ the house pet-proof. Use secure collars and IDs ___ identification.", "blanks": ["Make", "for"], "hint": "verb and preposition" },
    { "type": "fill", "scene": "Long-term commitment.", "text": "Parent: Getting ___ pet is ___ long-term commitment. We must care ___ it ___ its entire life.<br>Child: I promise to help!", "blanks": ["a", "a", "for", "for"], "hint": "articles and prepositions" }
  ],
  "musicclass": [
    { "type": "fill", "scene": "At music class.", "text": "Teacher: Today we are learning to play the ___. It is a stringed instrument.<br>Student: I am excited to learn!", "blanks": ["guitar"], "hint": "instrument with strings" },
    { "type": "mcq", "scene": "Learning to read music.", "text": "The teacher is teaching you to read musical notes. Why is this important?", "options": ["It helps you play songs correctly from written music.", "It is not important at all.", "It is only for professionals.", "You need it only to read sheet music."], "answer": 0 },
    { "type": "conv", "scene": "Practice and improvement.", "dialogue": [
      { "speaker": "Teacher", "side": "left", "text": "How many hours do you ___ every day?", "blank": true, "answer": "practice", "hint": "do repeatedly to improve" },
      { "speaker": "Student", "side": "right", "text": "About thirty minutes." },
      { "speaker": "Teacher", "side": "left", "text": "That is good! Consistent ____ helps you improve faster.", "blank": true, "answer": "practice", "hint": "repeated training" },
      { "speaker": "Student", "side": "right", "text": "I really want to play well." }
    ] },
    { "type": "fill", "scene": "Music performance.", "text": "Teacher: Next month, we will have a ____ where you can perform in front of an audience!<br>Student: That sounds scary but exciting!", "blanks": ["recital"], "hint": "concert performance" },
    { "type": "mcq", "scene": "Overcoming stage fright.", "text": "You are nervous about performing. What helps?", "options": ["Practice regularly, remember your hard work, take deep breaths.", "Don't perform at all.", "Run away from the performance.", "Tell everyone you're not good enough."], "answer": 0 },
    { "type": "fill", "scene": "Different musical instruments.", "text": "There are many instruments: piano, ___, violin, and drums are just a few.<br>Student: I would like to try multiple instruments!", "blanks": ["flute"], "hint": "wind instrument" }
  ],
  "artclass": [
    { "type": "fill", "scene": "At art class.", "text": "Teacher: Today we are going to paint with ___. Be creative and have fun!<br>Student: I love painting!", "blanks": ["colors"], "hint": "pigments like red, blue" },
    { "type": "mcq", "scene": "Choosing your art subject.", "text": "What makes a good art subject?", "options": ["Something you are interested in or passionate about.", "Anything boring.", "Only realistic subjects.", "No subject at all."], "answer": 0 },
    { "type": "conv", "scene": "Learning techniques.", "dialogue": [
      { "speaker": "Teacher", "side": "left", "text": "To make a ___, mix blue and yellow together.", "blank": true, "answer": "green", "hint": "color of nature" },
      { "speaker": "Student", "side": "right", "text": "Oh! That is how colors mix!" },
      { "speaker": "Teacher", "side": "left", "text": "Yes! Learning about color mixing helps you create better ___.", "blank": true, "answer": "art", "hint": "creative work" },
      { "speaker": "Student", "side": "right", "text": "This is so interesting!" }
    ] },
    { "type": "fill", "scene": "Displaying artwork.", "text": "The school is having an art ___ where all students can show their best work!<br>Student: I want to display my painting!", "blanks": ["exhibition"], "hint": "public display" },
    { "type": "mcq", "scene": "Art appreciation.", "text": "What is important to remember about other people's art?", "options": ["Be respectful and appreciative of their effort and creativity.", "Mock other people's work.", "Say mean things about their art.", "Ignore their effort."], "answer": 0 },
    { "type": "fill", "scene": "Different art mediums.", "text": "Artists use different mediums like oil paint, acrylic, ___, and charcoal.<br>Student: I want to try all of them!", "blanks": ["watercolor"], "hint": "paint using water" }
  ],
  "swimmingpool": [
    { "type": "fill", "scene": "At the swimming pool.", "text": "Instructor: Before entering the pool, wear your ___ to stay safe and visible in the water!<br>Student: I already have mine on!", "blanks": ["swimsuit"], "hint": "special clothing for swimming" },
    { "type": "mcq", "scene": "Pool safety rules.", "text": "What is an important pool safety rule?", "options": ["Never run on the pool deck. Always walk carefully.", "Run and jump as much as you want.", "Push other swimmers.", "Dive in shallow water."], "answer": 0 },
    { "type": "conv", "scene": "Learning to swim.", "dialogue": [
      { "speaker": "Instructor", "side": "left", "text": "Now, let's work on your ___. Keep your arms moving smoothly.", "blank": true, "answer": "strokes", "hint": "swimming movements" },
      { "speaker": "Student", "side": "right", "text": "Like this?" },
      { "speaker": "Instructor", "side": "left", "text": "Good! Now let's ___ across the pool. You are doing great!", "blank": true, "answer": "swim", "hint": "move through water" },
      { "speaker": "Student", "side": "right", "text": "I am getting better at this!" }
    ] },
    { "type": "fill", "scene": "Pool entry and exit.", "text": "Instructor: Always use the ___ to get into and out of the pool safely. Never jump from the edge!<br>Student: I will be careful.", "blanks": ["ladder"], "hint": "steps to climb" },
    { "type": "mcq", "scene": "What to do if someone is in danger.", "text": "You see someone struggling in the pool. What should you do?", "options": ["Call an adult or lifeguard immediately.", "Jump in and try to rescue them.", "Ignore them and keep playing.", "Laugh at them."], "answer": 0 },
    { "type": "fill", "scene": "Water confidence building.", "text": "Instructor: Good work today! You have built your ___ in the water. Keep practicing!<br>Student: Thank you! I feel more confident now.", "blanks": ["confidence"], "hint": "belief in yourself" }
  ],
  "garden": [
    { "type": "fill", "scene": "In the garden.", "text": "Parent: Today we are going to plant some ___. They will grow into beautiful flowers!<br>Child: I am excited to see them grow!", "blanks": ["seeds"], "hint": "small things that grow into plants" },
    { "type": "mcq", "scene": "Preparing soil for planting.", "text": "What is important for plants to grow well?", "options": ["Good soil with nutrients, sunlight, and water.", "Poor soil with no nutrients.", "No sunlight.", "Never water them."], "answer": 0 },
    { "type": "conv", "scene": "Learning about plants.", "dialogue": [
      { "speaker": "Gardener", "side": "left", "text": "This plant needs ___ every morning. Not too much or too little.", "blank": true, "answer": "watering", "hint": "giving water" },
      { "speaker": "Child", "side": "right", "text": "How do I know when to water?" },
      { "speaker": "Gardener", "side": "left", "text": "Check if the soil is dry. When it feels dry, it is time to ___.", "blank": true, "answer": "water", "hint": "pour liquid" },
      { "speaker": "Child", "side": "right", "text": "I will check every day!" }
    ] },
    { "type": "fill", "scene": "Garden tools.", "text": "We use a ___, shovel, and hose to take care of the garden.<br>Child: These tools are so useful!", "blanks": ["rake"], "hint": "tool with long handle and teeth" },
    { "type": "mcq", "scene": "Watching plants grow.", "text": "What is the best part of gardening?", "options": ["Watching your plants grow from seeds and enjoying the fruits of your labor.", "Doing nothing and hoping plants grow.", "Never checking on your plants.", "Pulling out healthy plants."], "answer": 0 },
    { "type": "fill", "scene": "Composting in the garden.", "text": "Gardener: We save our vegetable ___ and make compost. It enriches the soil naturally!<br>Child: That is good for the environment!", "blanks": ["waste"], "hint": "leftover scraps" }
  ],
  "bakery": [
    { "type": "fill", "scene": "At the bakery.", "text": "Baker: Good morning! Fresh ___ just came out of the oven!<br>Customer: They smell absolutely wonderful!", "blanks": ["bread"], "hint": "staple food" },
    { "type": "mcq", "scene": "Choosing baked goods.", "text": "What is a good choice at the bakery?", "options": ["Fresh bread, croissants, or pastries baked today.", "Stale bread from days ago.", "Moldy baked goods.", "Anything without checking freshness."], "answer": 0 },
    { "type": "conv", "scene": "Custom cake orders.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Can you ___ a custom cake for my birthday?", "blank": true, "answer": "make", "hint": "prepare / bake" },
      { "speaker": "Baker", "side": "left", "text": "Of course! What flavor would you like?" },
      { "speaker": "You", "side": "right", "text": "I want chocolate cake with ___ on top.", "blank": true, "answer": "frosting", "hint": "sweet coating" },
      { "speaker": "Baker", "side": "left", "text": "Perfect! I will make it special for you." }
    ] },
    { "type": "fill", "scene": "Bakery varieties.", "text": "The bakery has many items: cakes, cookies, ___, doughnuts, and more!<br>Customer: It is hard to choose!", "blanks": ["pastries"], "hint": "sweet baked items" },
    { "type": "mcq", "scene": "Food allergies at the bakery.", "text": "You have allergies. What should you do?", "options": ["Tell the baker about your allergies and ask about ingredients.", "Hide your allergies and eat anyway.", "Guess which items are safe.", "Assume everything is safe."], "answer": 0 },
    { "type": "fill", "scene": "Freshness guarantee.", "text": "Baker: Our bread is baked fresh every morning. This ___ that you get the best quality!<br>Customer: That is why I always come here.", "blanks": ["guarantees"], "hint": "assures / ensures" }
  ],
  "electronics": [
    { "type": "fill", "scene": "At the electronics shop.", "text": "Staff: Welcome! We have the latest ___ and accessories!<br>Customer: Great! I am looking for a new phone.", "blanks": ["phones"], "hint": "mobile devices" },
    { "type": "mcq", "scene": "Choosing electronic devices.", "text": "When buying electronics, what should you consider?", "options": ["Brand reputation, warranty, features you need, and price.", "Just buy the cheapest option.", "Buy without comparing.", "Buy something you don't need."], "answer": 0 },
    { "type": "conv", "scene": "Learning about features.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "What is the ___ of this tablet?", "blank": true, "answer": "battery", "hint": "power source" },
      { "speaker": "Staff", "side": "left", "text": "It lasts for about twelve hours on a full charge." },
      { "speaker": "You", "side": "right", "text": "And does it come with a ___?", "blank": true, "answer": "warranty", "hint": "guarantee" },
      { "speaker": "Staff", "side": "left", "text": "Yes, it comes with a one-year manufacturer's warranty." }
    ] },
    { "type": "fill", "scene": "Electronic safety.", "text": "Customer: Is this product ___? I want to make sure it is safe to use.<br>Staff: Yes, it has all safety certifications.", "blanks": ["safe"], "hint": "not dangerous" },
    { "type": "mcq", "scene": "Electronics protection.", "text": "What helps protect your electronic devices?", "options": ["Use protective cases, screen protectors, and follow safety guidelines.", "Drop them frequently.", "Expose them to water.", "Leave them in extreme heat."], "answer": 0 },
    { "type": "fill", "scene": "Tech support.", "text": "Staff: If you have any issues, we offer ___ support to help you set up and troubleshoot.<br>Customer: That is very helpful!", "blanks": ["technical"], "hint": "expert help" }
  ],
  "flowershop": [
    { "type": "fill", "scene": "At the flower shop.", "text": "Florist: Good afternoon! Would you like a ____ of fresh flowers?<br>Customer: Yes, I want to give them to my mom.", "blanks": ["bouquet"], "hint": "bunch of flowers" },
    { "type": "mcq", "scene": "Choosing flowers.", "text": "What flowers make a good gift?", "options": ["Choose based on the person's preference and the occasion.", "Pick any wilted flowers.", "Choose flowers you don't like.", "Pick the most expensive ones just because."], "answer": 0 },
    { "type": "conv", "scene": "Ordering for special occasions.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "I need flowers for an ___. Can you recommend something?", "blank": true, "answer": "anniversary", "hint": "yearly celebration" },
      { "speaker": "Florist", "side": "left", "text": "Red roses are perfect for anniversaries. Very romantic!" },
      { "speaker": "You", "side": "right", "text": "Perfect! Can you ___ them nicely with a ribbon?", "blank": true, "answer": "wrap", "hint": "cover with paper" },
      { "speaker": "Florist", "side": "left", "text": "Of course! I will make it look beautiful." }
    ] },
    { "type": "fill", "scene": "Flower care.", "text": "Florist: To keep your flowers fresh, put them in ___ with fresh water daily.<br>Customer: Thank you for the advice!", "blanks": ["vase"], "hint": "container for flowers" },
    { "type": "mcq", "scene": "Seasonal flowers.", "text": "What is good about buying seasonal flowers?", "options": ["They are fresher, cheaper, and better for the environment.", "They are always expensive.", "They don't last long.", "They are never available."], "answer": 0 },
    { "type": "fill", "scene": "Message with flowers.", "text": "Customer: Can I include a ___ with the flowers? I want to write a special message.<br>Florist: Of course! Customers love receiving personalized cards.", "blanks": ["card"], "hint": "written note" }
  ],
  "gym": [
    { "type": "fill", "scene": "At the gym.", "text": "Trainer: Welcome to our gym! Let me show you our ___ for exercise.<br>Member: I am excited to get fit!", "blanks": ["equipment"], "hint": "machines and tools" },
    { "type": "mcq", "scene": "Gym safety.", "text": "What is important for gym safety?", "options": ["Use equipment correctly, warm up before exercising, use proper form.", "Use equipment without instructions.", "Skip warm-ups.", "Exercise when injured."], "answer": 0 },
    { "type": "conv", "scene": "Fitness goals.", "dialogue": [
      { "speaker": "Trainer", "side": "left", "text": "What are your fitness ___?", "blank": true, "answer": "goals", "hint": "aims / targets" },
      { "speaker": "Member", "side": "right", "text": "I want to be stronger and healthier." },
      { "speaker": "Trainer", "side": "left", "text": "Great! I will create a personalized ___ for you.", "blank": true, "answer": "plan", "hint": "schedule" },
      { "speaker": "Member", "side": "right", "text": "Thank you! I am ready to start." }
    ] },
    { "type": "fill", "scene": "Post-workout care.", "text": "Trainer: After your workout, do some ____ exercises to cool down and prevent soreness.<br>Member: I will remember that!", "blanks": ["stretching"], "hint": "gently extending muscles" },
    { "type": "mcq", "scene": "Gym etiquette.", "text": "What is polite behavior at the gym?", "options": ["Clean up after yourself, return equipment, be respectful to others.", "Leave equipment everywhere.", "Disturb others during their workouts.", "Hog all the equipment."], "answer": 0 },
    { "type": "fill", "scene": "Nutrition and fitness.", "text": "Trainer: Exercise is important, but ___ also plays a big role in your fitness journey.<br>Member: I will eat healthier too!", "blanks": ["nutrition"], "hint": "healthy eating" }
  ],
  "ticketcounter": [
    { "type": "fill", "scene": "At the ticket counter.", "text": "Customer: I need ___ for the movie show at 6 PM, please.<br>Staff: How many tickets do you need?", "blanks": ["tickets"], "hint": "entry passes" },
    { "type": "mcq", "scene": "Choosing movie showtimes.", "text": "There are several showtimes available. What should you choose?", "options": ["Pick a showtime that fits your schedule and availability.", "Pick the worst time just to be difficult.", "Go without checking times.", "Complain about all the options."], "answer": 0 },
    { "type": "conv", "scene": "Booking advance tickets.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Can I ___ tickets for the movie next week?", "blank": true, "answer": "book", "hint": "reserve in advance" },
      { "speaker": "Staff", "side": "left", "text": "Yes, bookings open three days in advance." },
      { "speaker": "You", "side": "right", "text": "What ___ should I expect? Is it a popular movie?", "blank": true, "answer": "crowd", "hint": "number of people" },
      { "speaker": "Staff", "side": "left", "text": "Yes, it is very popular. Book soon!" }
    ] },
    { "type": "fill", "scene": "Ticket pricing.", "text": "Staff: Children's tickets are half price. Student tickets are also at a ____ rate.<br>Customer: That is great value!", "blanks": ["discounted"], "hint": "reduced price" },
    { "type": "mcq", "scene": "Cancellation policy.", "text": "If you cannot go to the movie, what should you do?", "options": ["Cancel your tickets early to get a refund or exchange.", "Simply not show up.", "Try to sneak in with someone else's ticket.", "Ignore the booking."], "answer": 0 },
    { "type": "fill", "scene": "Ticket confirmation.", "text": "Staff: Here are your ___. Please arrive 15 minutes early before the show!<br>Customer: Thank you! I will see you then.", "blanks": ["tickets"], "hint": "entry passes" }
  ],
  "atm": [
    { "type": "fill", "scene": "At an ATM.", "text": "Person: I need to ___ some money from my account.<br>ATM: Please insert your card.", "blanks": ["withdraw"], "hint": "take out" },
    { "type": "mcq", "scene": "ATM security.", "text": "What is important for ATM security?", "options": ["Keep your PIN secret, cover the keypad, check your balance after withdrawal.", "Share your PIN with friends.", "Use ATMs in unsafe areas.", "Leave your card in the machine."], "answer": 0 },
    { "type": "conv", "scene": "Using ATM features.", "dialogue": [
      { "speaker": "Person", "side": "right", "text": "I want to check my account ___. Is that possible here?", "blank": true, "answer": "balance", "hint": "amount of money" },
      { "speaker": "ATM", "side": "left", "text": "Yes, select 'Balance Inquiry' to check your account." },
      { "speaker": "Person", "side": "right", "text": "Also, I want to change my ___. Can I do that?", "blank": true, "answer": "PIN", "hint": "secret code" },
      { "speaker": "ATM", "side": "left", "text": "Yes, select 'Change PIN' from the menu." }
    ] },
    { "type": "fill", "scene": "ATM fees.", "text": "ATM: You are about to withdraw money. A small ___ may apply. Continue?<br>Person: I understand. Yes, continue.", "blanks": ["fee"], "hint": "charge" },
    { "type": "mcq", "scene": "Lost ATM card.", "text": "You realize your ATM card is missing. What should you do first?", "options": ["Contact your bank immediately to block the card.", "Wait and hope it returns.", "Do nothing.", "Tell strangers."], "answer": 0 },
    { "type": "fill", "scene": "ATM receipts.", "text": "Always keep your ATM ___ to verify your transactions later.<br>Person: Good reminder! I will save it.", "blanks": ["receipt"], "hint": "printed record" }
  ],
  "policestation": [
    { "type": "fill", "scene": "At the police station.", "text": "Officer: Good afternoon! How can I ___ you today?<br>Person: I need to report a lost item.", "blanks": ["help"], "hint": "assist" },
    { "type": "mcq", "scene": "When to contact police.", "text": "When is it important to contact police?", "options": ["For emergencies, crimes, lost items, or accidents.", "For no reason.", "Only on weekends.", "Only for small complaints."], "answer": 0 },
    { "type": "conv", "scene": "Filing a report.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "I lost my ___ yesterday. Can you help me file a report?", "blank": true, "answer": "wallet", "hint": "money holder" },
      { "speaker": "Officer", "side": "left", "text": "Of course. Tell me details about when and where you lost it." },
      { "speaker": "You", "side": "right", "text": "I think I left it on the ___ near my home.", "blank": true, "answer": "bench", "hint": "place to sit" },
      { "speaker": "Officer", "side": "left", "text": "I will file this report and check if anyone found it." }
    ] },
    { "type": "fill", "scene": "Police assistance.", "text": "Officer: We are here to ___ and protect the community.<br>Person: Thank you for your service!", "blanks": ["serve"], "hint": "help / support" },
    { "type": "mcq", "scene": "Emergency situations.", "text": "What should you do in a dangerous situation?", "options": ["Contact police immediately and provide your location.", "Try to handle it alone.", "Run away and hide.", "Ignore the danger."], "answer": 0 },
    { "type": "fill", "scene": "Police importance.", "text": "Police officers work hard to keep our neighborhoods ____ and safe for everyone.<br>Person: Yes, I appreciate their dedication.", "blanks": ["secure"], "hint": "protected" }
  ],
  "firestation": [
    { "type": "fill", "scene": "At the fire station.", "text": "Firefighter: Welcome! We are trained to ___ fires and help people in emergencies!<br>Child: That is so cool!", "blanks": ["extinguish"], "hint": "put out" },
    { "type": "mcq", "scene": "Fire safety at home.", "text": "What is important for fire safety at home?", "options": ["Have smoke detectors, a fire extinguisher, and an escape plan.", "Ignore fire risks.", "Play with fire.", "Leave candles unattended."], "answer": 0 },
    { "type": "conv", "scene": "Learning about firefighting.", "dialogue": [
      { "speaker": "Firefighter", "side": "left", "text": "This is our special ____ that helps us reach high buildings.", "blank": true, "answer": "ladder", "hint": "equipment for climbing" },
      { "speaker": "Child", "side": "right", "text": "Wow! How tall does it go?" },
      { "speaker": "Firefighter", "side": "left", "text": "It can extend very high! We also use ____ to help people evacuate safely.", "blank": true, "answer": "ropes", "hint": "strong cords" },
      { "speaker": "Child", "side": "right", "text": "Thank you for showing me!" }
    ] },
    { "type": "fill", "scene": "Emergency calls.", "text": "Firefighter: When you call our ___, give your location and describe the emergency clearly.<br>Person: I understand. Thank you!", "blanks": ["emergency"], "hint": "crisis / urgent situation" },
    { "type": "mcq", "scene": "Evacuating during a fire.", "text": "If there is a fire in your building, what should you do?", "options": ["Evacuate immediately using stairs, never elevators. Proceed to a safe meeting point.", "Stay in your room.", "Use elevators to escape.", "Gather your belongings before leaving."], "answer": 0 },
    { "type": "fill", "scene": "Firefighter appreciation.", "text": "Child: Thank you for keeping us ___! Firefighters are real heroes!<br>Firefighter: You are welcome! Stay safe!", "blanks": ["safe"], "hint": "protected from harm" }
  ],
  "veterinarian": [
    { "type": "fill", "scene": "At the veterinarian's office with a pet.", "text": "Vet: Good afternoon! I see you have brought your ___. Let me examine them.<br>Owner: My dog has been eating too much lately.", "blanks": ["dog"], "hint": "pet animal" },
    { "type": "mcq", "scene": "Pet health concerns.", "text": "What are signs that your pet needs a vet visit?", "options": ["Change in appetite, unusual behavior, visible injuries, or abnormal symptoms.", "Wait and see if it goes away.", "Try to treat at home.", "Ignore all symptoms."], "answer": 0 },
    { "type": "conv", "scene": "Pet vaccination.", "dialogue": [
      { "speaker": "Vet", "side": "left", "text": "Your pet needs these ___ to stay healthy and protected.", "blank": true, "answer": "vaccinations", "hint": "preventive injections" },
      { "speaker": "Owner", "side": "right", "text": "How often do they need them?" },
      { "speaker": "Vet", "side": "left", "text": "Usually once a year for most pets. This ___ your pet's immune system.", "blank": true, "answer": "strengthens", "hint": "makes stronger" },
      { "speaker": "Owner", "side": "right", "text": "I want to keep my pet healthy." }
    ] },
    { "type": "fill", "scene": "Pet grooming.", "text": "Vet: Regular bathing, grooming, and nail trimming keep your pet healthy and ___.<br>Owner: I will make sure to do that regularly.", "blanks": ["clean"], "hint": "hygienic" },
    { "type": "mcq", "scene": "Pet nutrition.", "text": "What is important about pet nutrition?", "options": ["Feed high-quality pet food appropriate for their age and size.", "Feed anything humans eat.", "Overfeed your pet.", "Give only treats and no proper food."], "answer": 0 },
    { "type": "fill", "scene": "Preventive care.", "text": "Vet: Good pet health requires regular check-ups and ___ care at home.<br>Owner: I understand. I will be a responsible pet owner.", "blanks": ["preventive"], "hint": "avoiding problems before they start" }
  ],
  "laundry": [
    { "type": "fill", "scene": "At the laundry service.", "text": "Staff: We can ___ and iron your clothes. How many kilograms do you have?<br>Customer: I have about five kilograms.", "blanks": ["wash"], "hint": "clean with water" },
    { "type": "mcq", "scene": "Sorting laundry.", "text": "What is important when washing clothes?", "options": ["Separate whites from colors to prevent color bleeding.", "Wash everything together.", "Use too much detergent.", "Wash with very hot water always."], "answer": 0 },
    { "type": "conv", "scene": "Laundry services.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "How much does the ___ service cost?", "blank": true, "answer": "washing", "hint": "cleaning" },
      { "speaker": "Staff", "side": "left", "text": "It is fifty rupees per kilogram for basic washing." },
      { "speaker": "You", "side": "right", "text": "And how long does it take to ___ my clothes?", "blank": true, "answer": "deliver", "hint": "return / bring back" },
      { "speaker": "Staff", "side": "left", "text": "Usually within two days." }
    ] },
    { "type": "fill", "scene": "Stain removal.", "text": "Customer: This shirt has a ___ on it. Can you remove it?<br>Staff: Yes, we have special treatment for stubborn stains.", "blanks": ["stain"], "hint": "mark / spot" },
    { "type": "mcq", "scene": "Delicate fabrics.", "text": "How should delicate fabrics be handled?", "options": ["Wash gently with special care to preserve quality.", "Wash roughly like regular clothes.", "Use bleach on delicates.", "Dry clean delicates at home."], "answer": 0 },
    { "type": "fill", "scene": "Laundry pickup.", "text": "Staff: Your ___ is ready! All items are cleaned and folded nicely.<br>Customer: Thank you so much! You do excellent work.", "blanks": ["laundry"], "hint": "washed clothes" }
  ],
  "carwash": [
    { "type": "fill", "scene": "At the car wash.", "text": "Staff: Welcome! We will give your car a professional ___ today!<br>Owner: Great! My car is very dirty.", "blanks": ["wash"], "hint": "cleaning" },
    { "type": "mcq", "scene": "Choosing car wash packages.", "text": "Different car wash packages are available. What should you choose?", "options": ["Choose based on your budget and your car's condition.", "Pick the cheapest without considering quality.", "Ask for extras you don't need.", "Skip washing your car."], "answer": 0 },
    { "type": "conv", "scene": "Car wash process.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Will you also ___ my car?", "blank": true, "answer": "vacuum", "hint": "clean inside" },
      { "speaker": "Staff", "side": "left", "text": "Yes, we will vacuum and clean the interior thoroughly." },
      { "speaker": "You", "side": "right", "text": "And can you ___ the tires?", "blank": true, "answer": "shine", "hint": "make glossy" },
      { "speaker": "Staff", "side": "left", "text": "Of course! We will make your car sparkle!" }
    ] },
    { "type": "fill", "scene": "Car drying.", "text": "Staff: After washing, we ___ your car completely to prevent water spots.<br>Owner: That is very thorough service!", "blanks": ["dry"], "hint": "remove water" },
    { "type": "mcq", "scene": "Car maintenance after wash.", "text": "What is important after getting your car washed?", "options": ["Avoid driving in mud immediately, park carefully, maintain regular washing.", "Drive in muddy areas immediately.", "Park carelessly.", "Never wash again."], "answer": 0 },
    { "type": "fill", "scene": "Paying for car wash.", "text": "Staff: Your car wash and ___ service is complete! Would you like to pay now?<br>Owner: Yes, thank you for excellent service!", "blanks": ["detailing"], "hint": "thorough cleaning" }
  ],
  "repairshop": [
    { "type": "fill", "scene": "At the repair shop.", "text": "Technician: What is wrong with your ___? Let me take a look.<br>Customer: The screen is cracked and it won't turn on.", "blanks": ["phone"], "hint": "mobile device" },
    { "type": "mcq", "scene": "Repairing electronics.", "text": "When should you take your device to a repair shop?", "options": ["When it's damaged or malfunctioning and you can't fix it yourself.", "Only after trying to repair it dangerously yourself.", "When it still works perfectly.", "Never, just buy a new one."], "answer": 0 },
    { "type": "conv", "scene": "Getting a repair estimate.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "How much will the ___ cost?", "blank": true, "answer": "repair", "hint": "fixing" },
      { "speaker": "Technician", "side": "left", "text": "Let me diagnose the issue first. It usually takes about an hour." },
      { "speaker": "You", "side": "right", "text": "And how long will the ___ take?", "blank": true, "answer": "work", "hint": "repair process" },
      { "speaker": "Technician", "side": "left", "text": "About two to three days depending on parts availability." }
    ] },
    { "type": "fill", "scene": "Warranty on repairs.", "text": "Technician: All repairs come with a ___ guarantee. If it breaks again, we will fix it free!<br>Customer: That is reassuring!", "blanks": ["warranty"], "hint": "promise" },
    { "type": "mcq", "scene": "Backup during repairs.", "text": "What should you do before leaving your device for repair?", "options": ["Backup important data if possible.", "Leave data without backing up.", "Delete everything from your device.", "Take your device apart more."], "answer": 0 },
    { "type": "fill", "scene": "Receiving repaired item.", "text": "Technician: Your device is fixed and ready! We have tested everything to make sure it ___.<br>Customer: Thank you for your excellent work!", "blanks": ["works"], "hint": "functions properly" }
  ],
  "travelagency": [
    { "type": "fill", "scene": "At a travel agency.", "text": "Agent: Where would you like to ___ your vacation?<br>Customer: I am thinking about the mountains.", "blanks": ["spend"], "hint": "pass / enjoy" },
    { "type": "mcq", "scene": "Choosing a vacation destination.", "text": "What should you consider when choosing a destination?", "options": ["Weather, attractions, budget, distance, and your interests.", "Pick randomly without thinking.", "Choose only expensive destinations.", "Never plan ahead."], "answer": 0 },
    { "type": "conv", "scene": "Booking a trip.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Can you help me ___ my flight to Goa?", "blank": true, "answer": "book", "hint": "reserve" },
      { "speaker": "Agent", "side": "left", "text": "Of course! When would you like to travel?" },
      { "speaker": "You", "side": "right", "text": "In December. And I also need ___ for three nights.", "blank": true, "answer": "accommodation", "hint": "place to stay" },
      { "speaker": "Agent", "side": "left", "text": "Great! I will find the best options for you." }
    ] },
    { "type": "fill", "scene": "Travel documents.", "text": "Agent: Make sure your ___ is valid for at least six months before traveling abroad!<br>Customer: I will check it today.", "blanks": ["passport"], "hint": "travel document" },
    { "type": "mcq", "scene": "Travel insurance.", "text": "Why is travel insurance important?", "options": ["It protects you from unexpected expenses and emergencies during travel.", "It is not necessary.", "Only for international trips.", "Only for expensive trips."], "answer": 0 },
    { "type": "fill", "scene": "Trip confirmation.", "text": "Agent: Here is your complete travel ___ including flights, hotel, and travel insurance!<br>Customer: Perfect! I am excited for my vacation!", "blanks": ["package"], "hint": "complete set" }
  ],
  "amusementpark": [
    { "type": "fill", "scene": "At an amusement park.", "text": "Staff: Welcome! Which ___ would you like to try first?<br>Child: I want to go on the roller coaster!", "blanks": ["ride"], "hint": "attraction / activity" },
    { "type": "mcq", "scene": "Amusement park safety.", "text": "What is important for safety at an amusement park?", "options": ["Follow all safety instructions, use seatbelts properly, stay within boundaries.", "Ignore safety signs.", "Distract others on rides.", "Remove safety equipment."], "answer": 0 },
    { "type": "conv", "scene": "Planning your day.", "dialogue": [
      { "speaker": "Child", "side": "right", "text": "There are so many rides! How do I ___ which ones to go on?", "blank": true, "answer": "choose", "hint": "decide / select" },
      { "speaker": "Parent", "side": "left", "text": "Let's check the map and prioritize. How tall are you?" },
      { "speaker": "Child", "side": "right", "text": "I am tall enough for most rides. Let's start with the ___ games!<br>", "blank": true, "answer": "carnival", "hint": "fun games" },
      { "speaker": "Parent", "side": "left", "text": "Great idea! We will win some prizes!" }
    ] },
    { "type": "fill", "scene": "Meeting point in the park.", "text": "Parent: If we get separated, let's meet at the main ___. Keep my phone number handy!<br>Child: Okay! I will be careful.", "blanks": ["gate"], "hint": "entrance" },
    { "type": "mcq", "scene": "Managing park time and energy.", "text": "How should you plan your amusement park visit?", "options": ["Prioritize rides, rest during peak hours, bring snacks and water.", "Do everything at once.", "Don't bring any supplies.", "Skip resting."], "answer": 0 },
    { "type": "fill", "scene": "Leaving the park.", "text": "Child: This was such an amazing ___! I want to come back again!<br>Parent: Yes! We had so much fun today.", "blanks": ["day"], "hint": "time / experience" }
  ],
  "picnic": [
    { "type": "fill", "scene": "Preparing for a picnic.", "text": "Parent: Let's pack some ___ for our picnic. Sandwiches, fruits, and juice!<br>Child: I am getting hungry already!", "blanks": ["food"], "hint": "things to eat" },
    { "type": "mcq", "scene": "Choosing a picnic location.", "text": "What makes a good picnic spot?", "options": ["Open space, shade, water access, safe environment, and scenic views.", "Dangerous or polluted areas.", "Very crowded places.", "Places with no facilities."], "answer": 0 },
    { "type": "conv", "scene": "Setting up the picnic.", "dialogue": [
      { "speaker": "Parent", "side": "left", "text": "Help me spread out the ___, please.", "blank": true, "answer": "blanket", "hint": "cloth to sit on" },
      { "speaker": "Child", "side": "right", "text": "Okay! Where should we put the food?" },
      { "speaker": "Parent", "side": "left", "text": "Keep it away from ants. Let's put it under this tree where it is ___.", "blank": true, "answer": "shaded", "hint": "covered from sun" },
      { "speaker": "Child", "side": "right", "text": "Perfect! This is going to be so much fun!" }
    ] },
    { "type": "fill", "scene": "Picnic activities.", "text": "Family: Let's play some games and enjoy the fresh ___ in nature!<br>Child: I love picnics so much!", "blanks": ["air"], "hint": "outdoor environment" },
    { "type": "mcq", "scene": "Picnic cleanup.", "text": "What is important when leaving a picnic spot?", "options": ["Pack all trash, leave no litter, restore the area to its original state.", "Leave trash behind.", "Damage plants and flowers.", "Pollute the environment."], "answer": 0 },
    { "type": "fill", "scene": "End of picnic.", "text": "Parent: Thank you all for a wonderful ___! Let's come back again soon!<br>Family: Yes! Let's make this a regular thing!", "blanks": ["outing"], "hint": "trip / excursion" }
  ],
  "directions": [
    { "type": "fill", "scene": "Asking for directions.", "text": "Stranger: Excuse me! Can you tell me how to get to the ___?<br>You: Of course! Follow this road straight ahead.", "blanks": ["station"], "hint": "railway / bus hub" },
    { "type": "mcq", "scene": "Using landmarks.", "text": "How do landmarks help with directions?", "options": ["They help you recognize where you are and navigate more easily.", "They don't help at all.", "They confuse you.", "Only professional guides need landmarks."], "answer": 0 },
    { "type": "conv", "scene": "Giving detailed directions.", "dialogue": [
      { "speaker": "Person", "side": "left", "text": "I am looking for the nearest ___. Can you help?", "blank": true, "answer": "hospital", "hint": "medical facility" },
      { "speaker": "You", "side": "right", "text": "Yes! Go straight for two blocks." },
      { "speaker": "Person", "side": "left", "text": "Then what? Should I turn left or ___?", "blank": true, "answer": "right", "hint": "opposite of left" },
      { "speaker": "You", "side": "right", "text": "Turn right at the traffic light. The hospital is on your left!" }
    ] },
    { "type": "fill", "scene": "Using compass directions.", "text": "Sign: The museum is to the ___ of the city center. You need to go north!<br>Traveler: Thank you for the clear instructions!", "blanks": ["north"], "hint": "direction / cardinal point" },
    { "type": "mcq", "scene": "Getting lost.", "text": "If you get lost, what should you do?", "options": ["Ask locals for directions, use a map, or call someone for help.", "Keep walking without asking.", "Get frustrated and give up.", "Go in random directions."], "answer": 0 },
    { "type": "fill", "scene": "Distance estimation.", "text": "Local: The beach is about three kilometers from here. It will take about ___ to walk there.<br>Visitor: Thank you! That helps me plan.", "blanks": ["30 minutes"], "hint": "time to walk" }
  ],
  "jewelry": [
    { "type": "fill", "scene": "At the jewelry shop.", "text": "Jeweler: Welcome! What ___ are you looking for today?<br>Customer: I need a bracelet for my sister's birthday.", "blanks": ["jewelry"], "hint": "ornaments like rings, bracelets" },
    { "type": "mcq", "scene": "Choosing jewelry materials.", "text": "What are common jewelry materials?", "options": ["Gold, silver, platinum, gemstones, and other precious materials.", "Only plastic.", "Only cheap metals.", "Only one type of material."], "answer": 0 },
    { "type": "conv", "scene": "Buying an ornament.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "This necklace is beautiful! Is it made of ___?", "blank": true, "answer": "gold", "hint": "precious yellow metal" },
      { "speaker": "Jeweler", "side": "left", "text": "Yes, it is 18-karat gold. Pure and high quality." },
      { "speaker": "You", "side": "right", "text": "And do you have a ___ for it?", "blank": true, "answer": "certificate", "hint": "authentication document" },
      { "speaker": "Jeweler", "side": "left", "text": "Of course! All our jewelry comes with a certificate." }
    ] },
    { "type": "fill", "scene": "Jewelry care.", "text": "Jeweler: To keep your jewelry shiny, ___ it gently and store it safely.<br>Customer: Thank you for the care tips!", "blanks": ["clean"], "hint": "remove dirt" },
    { "type": "mcq", "scene": "Jewelry pricing.", "text": "What factors affect jewelry pricing?", "options": ["Material type, weight, design complexity, and gemstone quality.", "Only the shop location.", "Only the brand name.", "Random pricing."], "answer": 0 },
    { "type": "fill", "scene": "Jewelry customization.", "text": "Jeweler: We can ___ a special piece just for you! Tell us your design ideas!<br>Customer: That sounds wonderful!", "blanks": ["create"], "hint": "make / design" }
  ]
};
