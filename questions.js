const QUESTIONS = {
  hotel: [
    { type: "fill", scene: "You arrive at a hotel front desk.", text: "Receptionist: Good evening! Do you have a ___?<br>Guest: Yes, I made a reservation under the name Ravi.", blanks: ["reservation"], hint: "booking" },
    { type: "fill", scene: "Checking into your room.", text: "Guest: Can I have a room on a higher ___? I like the view.<br>Receptionist: Of course! Room 801 on the eighth floor is available.", blanks: ["floor"], hint: "level" },
    { type: "mcq", scene: "At the hotel restaurant.", text: "The waiter asks: \"Would you like to see the menu?\" You say:", options: ["Yes, please. I am hungry.", "No, I do not like food.", "Menu is bad.", "I want sleep now."], answer: 0 },
    { type: "conv", scene: "Morning at the hotel. A guest calls room service.", dialogue: [
      { speaker: "Guest", side: "right", text: "Hello, I would like to order _____ for breakfast, please.", blank: true, answer: "breakfast", hint: "the morning meal" },
      { speaker: "Staff", side: "left", text: "Good morning! What would you like?" },
      { speaker: "Guest", side: "right", text: "Can I have toast, orange juice, and some fruit?" },
      { speaker: "Staff", side: "left", text: "Of course! It will be ready in 15 _____.", blank: true, answer: "minutes", hint: "unit of time" }
    ] },
    { type: "mcq", scene: "Checking out of the hotel.", text: "You want to pay your bill. What do you say to the receptionist?", options: ["I would like to check out, please.", "Where is my bag?", "Room is broken.", "I want more towels."], answer: 0 },
    { type: "fill", scene: "The porter helps with your bags.", text: "Porter: Shall I carry your ___ to the room?<br>Guest: Yes, thank you. That is very kind.", blanks: ["bags"], hint: "luggage" }
  ],
  station: [
    { type: "fill", scene: "You are at the railway station booking counter.", text: "Person: One ___ to Chennai, please.<br>Clerk: Single or return?<br>Person: Single, please.", blanks: ["ticket"], hint: "travel pass" },
    { type: "mcq", scene: "You cannot find your platform.", text: "You need to find Platform 3. What do you ask?", options: ["Excuse me, which platform does the train to Chennai leave from?", "Where is my food?", "I want a train now.", "Platform is far?"], answer: 0 },
    { type: "conv", scene: "Buying a ticket at the counter.", dialogue: [
      { speaker: "Clerk", side: "left", text: "Good morning! Where would you like to go?" },
      { speaker: "You", side: "right", text: "I would like to go to _____, please.", blank: true, answer: "Mumbai", hint: "a big city" },
      { speaker: "Clerk", side: "left", text: "The next train leaves at 3 o'clock. Would you like a window seat?" },
      { speaker: "You", side: "right", text: "Yes, please. How much is the _____?", blank: true, answer: "fare", hint: "price/cost" }
    ] },
    { type: "fill", scene: "The train is arriving.", text: "Announcement: The express train to Bangalore is now arriving on ___ four.<br>Passengers: Let us hurry!", blanks: ["platform"], hint: "track number area" },
    { type: "mcq", scene: "You are on the train and need help.", text: "Your seat number is 24A but someone else is sitting there. What do you say?", options: ["Excuse me, I think this is my seat.", "Go away!", "I am angry.", "This train is wrong."], answer: 0 },
    { type: "fill", scene: "Checking the timetable.", text: "The train ___ at 9:00 AM and arrives at 2:00 PM.<br>That is a five-hour journey.", blanks: ["departs"], hint: "leaves / starts" }
  ],
  hospital: [
    { type: "fill", scene: "You are at the hospital reception.", text: "Patient: I have an ___ with Dr. Kumar at 10 AM.<br>Receptionist: Please take a seat. The doctor will call you soon.", blanks: ["appointment"], hint: "scheduled meeting" },
    { type: "mcq", scene: "The doctor asks about your problem.", text: "The doctor says: \"What seems to be the problem?\" You have a fever. You say:", options: ["I have a fever and a sore throat.", "I want biscuits.", "Doctor is late.", "Medicine is bad."], answer: 0 },
    { type: "conv", scene: "At the pharmacy after seeing the doctor.", dialogue: [
      { speaker: "Pharmacist", side: "left", text: "Hello! Do you have a prescription?" },
      { speaker: "You", side: "right", text: "Yes, here it is. The doctor gave me this _____.", blank: true, answer: "prescription", hint: "the doctor's written note" },
      { speaker: "Pharmacist", side: "left", text: "I see. You need to take one tablet twice a day after meals." },
      { speaker: "You", side: "right", text: "Thank you. How many _____ does this medicine last?", blank: true, answer: "days", hint: "unit of time" }
    ] },
    { type: "fill", scene: "In the doctor's room.", text: "Doctor: Open your mouth and say ___, please.<br>Patient: Ahhh.<br>Doctor: Your throat looks a bit red.", blanks: ["Ahh"], hint: "\"Ahh\" sound" },
    { type: "mcq", scene: "The nurse takes your temperature.", text: "The nurse says your temperature is 38.5°C. That means you have a:", options: ["Fever", "Cold drink", "Headache", "Stomachache"], answer: 0 },
    { type: "fill", scene: "Getting a bandage.", text: "Nurse: Does it hurt when I touch here?<br>Patient: Yes, it is very _____. I fell down yesterday.", blanks: ["painful"], hint: "opposite of comfortable" }
  ],
  home: [
    { type: "fill", scene: "Father's friend Uncle Suresh is visiting your home.", text: "Mom: Beta, please say ___ to Uncle Suresh!<br>Child: Good evening, Uncle Suresh! Welcome to our home.", blanks: ["hello"], hint: "greeting" },
    { type: "conv", scene: "Offering snacks to a guest.", dialogue: [
      { speaker: "You", side: "right", text: "Uncle, would you like some _____ or tea?", blank: true, answer: "biscuits", hint: "a snack" },
      { speaker: "Uncle", side: "left", text: "Oh yes, thank you! Tea would be lovely." },
      { speaker: "You", side: "right", text: "How do you take your tea? With _____ and milk?", blank: true, answer: "sugar", hint: "sweet thing" },
      { speaker: "Uncle", side: "left", text: "Just a little sugar, please. You are very polite!" }
    ] },
    { type: "mcq", scene: "Uncle Suresh compliments your drawing.", text: "Uncle Suresh says \"What a beautiful drawing!\" What is a polite reply?", options: ["Thank you, Uncle! I drew it myself.", "Go away.", "It is nothing special.", "I do not want to talk."], answer: 0 },
    { type: "fill", scene: "Dad introduces his friend to the family.", text: "Dad: This is my old friend Suresh. We studied ___ together.<br>Uncle: Yes! Your dad and I were classmates for four years.", blanks: ["together"], hint: "with each other" },
    { type: "mcq", scene: "It is time for Uncle Suresh to leave.", text: "Uncle Suresh is leaving. What do you say?", options: ["Goodbye Uncle! Please come again soon.", "Bye.", "I am sleepy.", "Do not go."], answer: 0 },
    { type: "fill", scene: "Showing a guest around the house.", text: "Child: This is our ___ room. You can sit and relax here.<br>Uncle: What a lovely space! Very comfortable.", blanks: ["living"], hint: "main room for sitting" }
  ],
  school: [
    { type: "fill", scene: "Morning at school. You see your teacher.", text: "Student: Good ___, Ma'am!<br>Teacher: Good morning! Are you ready for the lesson today?", blanks: ["morning"], hint: "time of day greeting" },
    { type: "mcq", scene: "The teacher asks a question in class.", text: "You know the answer! What do you do?", options: ["Raise your hand and say \"May I answer, Ma'am?\"", "Shout out the answer loudly.", "Stay quiet and look away.", "Ask your friend for the answer."], answer: 0 },
    { type: "conv", scene: "Asking the teacher for help.", dialogue: [
      { speaker: "You", side: "right", text: "Excuse me, Ma'am. I do not _____ this question.", blank: true, answer: "understand", hint: "do not get / are confused by" },
      { speaker: "Teacher", side: "left", text: "Of course! Let me explain. Which part is confusing?" },
      { speaker: "You", side: "right", text: "I do not know how to solve this _____.", blank: true, answer: "problem", hint: "question/task" },
      { speaker: "Teacher", side: "left", text: "No problem! Let us work through it step by step." }
    ] },
    { type: "fill", scene: "Borrowing a pencil from a classmate.", text: "Priya: Can I ___ your pencil? I forgot mine at home.<br>Arjun: Sure! Here you go. I have an extra one.", blanks: ["borrow"], hint: "take and return later" },
    { type: "mcq", scene: "You are late to school.", text: "You walk into class late. What do you say to the teacher?", options: ["I am sorry I am late, Ma'am. May I come in?", "I was sleeping!", "The bus was bad.", "Why are you here?"], answer: 0 },
    { type: "fill", scene: "At lunchtime.", text: "Friend: What did you bring for ___?<br>You: My mom packed rice and dal. What about you?", blanks: ["lunch"], hint: "midday meal" }
  ],
  market: [
    { type: "fill", scene: "You are at the vegetable market.", text: "Customer: How much do these ___ cost?<br>Vendor: Tomatoes are fifty rupees per kilogram, ma'am.", blanks: ["tomatoes"], hint: "red vegetable" },
    { type: "mcq", scene: "The price seems too high.", text: "The vendor says mangoes cost 200 rupees per kg. You think it is too expensive. You say:", options: ["That seems a bit expensive. Can you give a discount?", "No! I hate mangoes.", "200 rupees is very cheap.", "I want bananas."], answer: 0 },
    { type: "conv", scene: "Buying fruits at the market.", dialogue: [
      { speaker: "Vendor", side: "left", text: "What would you like today?" },
      { speaker: "You", side: "right", text: "I need two kilograms of _____, please.", blank: true, answer: "apples", hint: "a red or green fruit" },
      { speaker: "Vendor", side: "left", text: "These are very fresh! Anything else?" },
      { speaker: "You", side: "right", text: "Yes, also one dozen _____.", blank: true, answer: "bananas", hint: "yellow curved fruit" }
    ] },
    { type: "fill", scene: "Paying at the market.", text: "Customer: Here is five hundred rupees.<br>Vendor: Thank you. Your ___ is one hundred rupees.", blanks: ["change"], hint: "money returned after payment" },
    { type: "mcq", scene: "You cannot find what you need.", text: "You are looking for rice. What do you ask the shopkeeper?", options: ["Excuse me, do you have rice?", "Where is everything?", "I want everything in the shop.", "Rice is bad."], answer: 0 },
    { type: "fill", scene: "Checking the quality of vegetables.", text: "Customer: Are these ___ fresh? They look a little old.<br>Vendor: Yes, they arrived this morning from the farm!", blanks: ["carrots"], hint: "orange vegetable" }
  ],
  restaurant: [
    { type: "fill", scene: "You enter a restaurant and the waiter greets you.", text: "Waiter: Good evening! How many people are in your ___?<br>Customer: There are four of us.", blanks: ["group"], hint: "people together / party" },
    { type: "mcq", scene: "Looking at the menu.", text: "You do not understand an item on the menu. What do you ask the waiter?", options: ["Excuse me, what is in the paneer tikka?", "Give me everything!", "Menu is wrong.", "I want food now."], answer: 0 },
    { type: "conv", scene: "Ordering food at the restaurant.", dialogue: [
      { speaker: "Waiter", side: "left", text: "Are you ready to order?" },
      { speaker: "You", side: "right", text: "Yes, I would like the _____, please.", blank: true, answer: "dosa", hint: "a South Indian dish" },
      { speaker: "Waiter", side: "left", text: "Excellent choice! And to drink?" },
      { speaker: "You", side: "right", text: "I will have a glass of _____ water, please.", blank: true, answer: "cold", hint: "not hot" }
    ] },
    { type: "fill", scene: "The food is delicious!", text: "Customer: This biryani is absolutely ___! Please give my compliments to the chef.<br>Waiter: Thank you so much! I will let them know.", blanks: ["delicious"], hint: "very tasty" },
    { type: "mcq", scene: "You are done eating and want the bill.", text: "How do you ask for the bill?", options: ["Excuse me, may we have the bill please?", "Give me bill!", "How much is everything?", "I want to pay now!"], answer: 0 },
    { type: "fill", scene: "Leaving a restaurant.", text: "Customer: Thank you for the wonderful meal. We will definitely come ___.<br>Waiter: Thank you! We hope to see you again soon.", blanks: ["back"], hint: "return" }
  ]
};
