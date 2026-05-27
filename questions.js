const QUESTIONS = {
  "hotel": [
    { "type": "fill", "scene": "You arrive at a hotel front desk.", "text": "Receptionist: Good evening! Do you have a ___?<br>Guest: Yes, I made a reservation under the name Ravi.", "blanks": ["reservation"], "hint": "booking" },
    { "type": "fill", "scene": "Checking into your room.", "text": "Guest: Can I have a room on a higher ___? I like the view.<br>Receptionist: Of course! Room 801 on the eighth floor is available.", "blanks": ["floor"], "hint": "level" },
    { "type": "mcq", "scene": "At the hotel restaurant.", "text": "The waiter asks: \"Would you like to see the menu?\" You say:", "options": ["Yes, please. I am hungry.", "No, I do not like food.", "Menu is bad.", "I want sleep now."], "answer": 0 },
    { "type": "conv", "scene": "Morning at the hotel. A guest calls room service.", "dialogue": [
      { "speaker": "Guest", "side": "right", "text": "Hello, I would like to order _____ for breakfast, please.", "blank": true, "answer": "breakfast", "hint": "the morning meal" },
      { "speaker": "Staff", "side": "left", "text": "Good morning! What would you like?" },
      { "speaker": "Guest", "side": "right", "text": "Can I have toast, orange juice, and some fruit?" },
      { "speaker": "Staff", "side": "left", "text": "Of course! It will be ready in 15 _____.", "blank": true, "answer": "minutes", "hint": "unit of time" }
    ] },
    { "type": "mcq", "scene": "Checking out of the hotel.", "text": "You want to pay your bill. What do you say to the receptionist?", "options": ["I would like to check out, please.", "Where is my bag?", "Room is broken.", "I want more towels."], "answer": 0 },
    { "type": "fill", "scene": "The porter helps with your bags.", "text": "Porter: Shall I carry your ___ to the room?<br>Guest: Yes, thank you. That is very kind.", "blanks": ["bags"], "hint": "luggage" }
  ],
  "station": [
    { "type": "fill", "scene": "You are at the railway station booking counter.", "text": "Person: One ___ to Chennai, please.<br>Clerk: Single or return?<br>Person: Single, please.", "blanks": ["ticket"], "hint": "travel pass" },
    { "type": "mcq", "scene": "You cannot find your platform.", "text": "You need to find Platform 3. What do you ask?", "options": ["Excuse me, which platform does the train to Chennai leave from?", "Where is my food?", "I want a train now.", "Platform is far?"], "answer": 0 },
    { "type": "conv", "scene": "Buying a ticket at the counter.", "dialogue": [
      { "speaker": "Clerk", "side": "left", "text": "Good morning! Where would you like to go?" },
      { "speaker": "You", "side": "right", "text": "I would like to go to _____, please.", "blank": true, "answer": "Mumbai", "hint": "a big city" },
      { "speaker": "Clerk", "side": "left", "text": "The next train leaves at 3 o'clock. Would you like a window seat?" },
      { "speaker": "You", "side": "right", "text": "Yes, please. How much is the _____?", "blank": true, "answer": "fare", "hint": "price/cost" }
    ] },
    { "type": "fill", "scene": "The train is arriving.", "text": "Announcement: The express train to Bangalore is now arriving on ___ four.<br>Passengers: Let us hurry!", "blanks": ["platform"], "hint": "track number area" },
    { "type": "mcq", "scene": "You are on the train and need help.", "text": "Your seat number is 24A but someone else is sitting there. What do you say?", "options": ["Excuse me, I think this is my seat.", "Go away!", "I am angry.", "This train is wrong."], "answer": 0 },
    { "type": "fill", "scene": "Checking the timetable.", "text": "The train ___ at 9:00 AM and arrives at 2:00 PM.<br>That is a five-hour journey.", "blanks": ["departs"], "hint": "leaves / starts" }
  ],
  "hospital": [
    { "type": "fill", "scene": "You are at the hospital reception.", "text": "Patient: I have an ___ with Dr. Kumar at 10 AM.<br>Receptionist: Please take a seat. The doctor will call you soon.", "blanks": ["appointment"], "hint": "scheduled meeting" },
    { "type": "mcq", "scene": "The doctor asks about your problem.", "text": "The doctor says: \"What seems to be the problem?\" You have a fever. You say:", "options": ["I have a fever and a sore throat.", "I want biscuits.", "Doctor is late.", "Medicine is bad."], "answer": 0 },
    { "type": "conv", "scene": "At the pharmacy after seeing the doctor.", "dialogue": [
      { "speaker": "Pharmacist", "side": "left", "text": "Hello! Do you have a prescription?" },
      { "speaker": "You", "side": "right", "text": "Yes, here it is. The doctor gave me this _____.", "blank": true, "answer": "prescription", "hint": "the doctor's written note" },
      { "speaker": "Pharmacist", "side": "left", "text": "I see. You need to take one tablet twice a day after meals." },
      { "speaker": "You", "side": "right", "text": "Thank you. How many _____ does this medicine last?", "blank": true, "answer": "days", "hint": "unit of time" }
    ] },
    { "type": "fill", "scene": "In the doctor's room.", "text": "Doctor: Open your mouth and say ___, please.<br>Patient: Ahhh.<br>Doctor: Your throat looks a bit red.", "blanks": ["Ahh"], "hint": "\"Ahh\" sound" },
    { "type": "mcq", "scene": "The nurse takes your temperature.", "text": "The nurse says your temperature is 38.5°C. That means you have a:", "options": ["Fever", "Cold drink", "Headache", "Stomachache"], "answer": 0 },
    { "type": "fill", "scene": "Getting a bandage.", "text": "Nurse: Does it hurt when I touch here?<br>Patient: Yes, it is very _____. I fell down yesterday.", "blanks": ["painful"], "hint": "opposite of comfortable" }
  ],
  "home": [
    { "type": "fill", "scene": "Father's friend Uncle Suresh is visiting your home.", "text": "Mom: Beta, please say ___ to Uncle Suresh!<br>Child: Good evening, Uncle Suresh! Welcome to our home.", "blanks": ["hello"], "hint": "greeting" },
    { "type": "conv", "scene": "Offering snacks to a guest.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Uncle, would you like some _____ or tea?", "blank": true, "answer": "biscuits", "hint": "a snack" },
      { "speaker": "Uncle", "side": "left", "text": "Oh yes, thank you! Tea would be lovely." },
      { "speaker": "You", "side": "right", "text": "How do you take your tea? With _____ and milk?", "blank": true, "answer": "sugar", "hint": "sweet thing" },
      { "speaker": "Uncle", "side": "left", "text": "Just a little sugar, please. You are very polite!" }
    ] },
    { "type": "mcq", "scene": "Uncle Suresh compliments your drawing.", "text": "Uncle Suresh says \"What a beautiful drawing!\" What is a polite reply?", "options": ["Thank you, Uncle! I drew it myself.", "Go away.", "It is nothing special.", "I do not want to talk."], "answer": 0 },
    { "type": "fill", "scene": "Dad introduces his friend to the family.", "text": "Dad: This is my old friend Suresh. We studied ___ together.<br>Uncle: Yes! Your dad and I were classmates for four years.", "blanks": ["together"], "hint": "with each other" },
    { "type": "mcq", "scene": "It is time for Uncle Suresh to leave.", "text": "Uncle Suresh is leaving. What do you say?", "options": ["Goodbye Uncle! Please come again soon.", "Bye.", "I am sleepy.", "Do not go."], "answer": 0 },
    { "type": "fill", "scene": "Showing a guest around the house.", "text": "Child: This is our ___ room. You can sit and relax here.<br>Uncle: What a lovely space! Very comfortable.", "blanks": ["living"], "hint": "main room for sitting" }
  ],
  "school": [
    { "type": "fill", "scene": "Morning at school. You see your teacher.", "text": "Student: Good ___, Ma'am!<br>Teacher: Good morning! Are you ready for the lesson today?", "blanks": ["morning"], "hint": "time of day greeting" },
    { "type": "mcq", "scene": "The teacher asks a question in class.", "text": "You know the answer! What do you do?", "options": ["Raise your hand and say \"May I answer, Ma'am?\"", "Shout out the answer loudly.", "Stay quiet and look away.", "Ask your friend for the answer."], "answer": 0 },
    { "type": "conv", "scene": "Asking the teacher for help.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Excuse me, Ma'am. I do not _____ this question.", "blank": true, "answer": "understand", "hint": "do not get / are confused by" },
      { "speaker": "Teacher", "side": "left", "text": "Of course! Let me explain. Which part is confusing?" },
      { "speaker": "You", "side": "right", "text": "I do not know how to solve this _____.", "blank": true, "answer": "problem", "hint": "question/task" },
      { "speaker": "Teacher", "side": "left", "text": "No problem! Let us work through it step by step." }
    ] },
    { "type": "fill", "scene": "Borrowing a pencil from a classmate.", "text": "Priya: Can I ___ your pencil? I forgot mine at home.<br>Arjun: Sure! Here you go. I have an extra one.", "blanks": ["borrow"], "hint": "take and return later" },
    { "type": "mcq", "scene": "You are late to school.", "text": "You walk into class late. What do you say to the teacher?", "options": ["I am sorry I am late, Ma'am. May I come in?", "I was sleeping!", "The bus was bad.", "Why are you here?"], "answer": 0 },
    { "type": "fill", "scene": "At lunchtime.", "text": "Friend: What did you bring for ___?<br>You: My mom packed rice and dal. What about you?", "blanks": ["lunch"], "hint": "midday meal" }
  ],
  "market": [
    { "type": "fill", "scene": "You are at the vegetable market.", "text": "Customer: How much do these ___ cost?<br>Vendor: Tomatoes are fifty rupees per kilogram, ma'am.", "blanks": ["tomatoes"], "hint": "red vegetable" },
    { "type": "mcq", "scene": "The price seems too high.", "text": "The vendor says mangoes cost 200 rupees per kg. You think it is too expensive. You say:", "options": ["That seems a bit expensive. Can you give a discount?", "No! I hate mangoes.", "200 rupees is very cheap.", "I want bananas."], "answer": 0 },
    { "type": "conv", "scene": "Buying fruits at the market.", "dialogue": [
      { "speaker": "Vendor", "side": "left", "text": "What would you like today?" },
      { "speaker": "You", "side": "right", "text": "I need two kilograms of _____, please.", "blank": true, "answer": "apples", "hint": "a red or green fruit" },
      { "speaker": "Vendor", "side": "left", "text": "These are very fresh! Anything else?" },
      { "speaker": "You", "side": "right", "text": "Yes, also one dozen _____.", "blank": true, "answer": "bananas", "hint": "yellow curved fruit" }
    ] },
    { "type": "fill", "scene": "Paying at the market.", "text": "Customer: Here is five hundred rupees.<br>Vendor: Thank you. Your ___ is one hundred rupees.", "blanks": ["change"], "hint": "money returned after payment" },
    { "type": "mcq", "scene": "You cannot find what you need.", "text": "You are looking for rice. What do you ask the shopkeeper?", "options": ["Excuse me, do you have rice?", "Where is everything?", "I want everything in the shop.", "Rice is bad."], "answer": 0 },
    { "type": "fill", "scene": "Checking the quality of vegetables.", "text": "Customer: Are these ___ fresh? They look a little old.<br>Vendor: Yes, they arrived this morning from the farm!", "blanks": ["carrots"], "hint": "orange vegetable" }
  ],
  "restaurant": [
    { "type": "fill", "scene": "You enter a restaurant and the waiter greets you.", "text": "Waiter: Good evening! How many people are in your ___?<br>Customer: There are four of us.", "blanks": ["group"], "hint": "people together / party" },
    { "type": "mcq", "scene": "Looking at the menu.", "text": "You do not understand an item on the menu. What do you ask the waiter?", "options": ["Excuse me, what is in the paneer tikka?", "Give me everything!", "Menu is wrong.", "I want food now."], "answer": 0 },
    { "type": "conv", "scene": "Ordering food at the restaurant.", "dialogue": [
      { "speaker": "Waiter", "side": "left", "text": "Are you ready to order?" },
      { "speaker": "You", "side": "right", "text": "Yes, I would like the _____, please.", "blank": true, "answer": "dosa", "hint": "a South Indian dish" },
      { "speaker": "Waiter", "side": "left", "text": "Excellent choice! And to drink?" },
      { "speaker": "You", "side": "right", "text": "I will have a glass of _____ water, please.", "blank": true, "answer": "cold", "hint": "not hot" }
    ] },
    { "type": "fill", "scene": "The food is delicious!", "text": "Customer: This biryani is absolutely ___! Please give my compliments to the chef.<br>Waiter: Thank you so much! I will let them know.", "blanks": ["delicious"], "hint": "very tasty" },
    { "type": "mcq", "scene": "You are done eating and want the bill.", "text": "How do you ask for the bill?", "options": ["Excuse me, may we have the bill please?", "Give me bill!", "How much is everything?", "I want to pay now!"], "answer": 0 },
    { "type": "fill", "scene": "Leaving a restaurant.", "text": "Customer: Thank you for the wonderful meal. We will definitely come ___.<br>Waiter: Thank you! We hope to see you again soon.", "blanks": ["back"], "hint": "return" }
  ],
  "bank": [
    { "type": "fill", "scene": "Opening an account at the bank.", "text": "Banker: Good morning! I can help you open a ___ account.<br>Customer: Yes, I would like to save money for my studies.", "blanks": ["savings"], "hint": "for storing money" },
    { "type": "mcq", "scene": "The banker asks for identification.", "text": "The banker says: \"May I see your identification?\" You should:", "options": ["Hand over your ID card or passport.", "Refuse and leave.", "Say you don't have one.", "Ask for money first."], "answer": 0 },
    { "type": "conv", "scene": "Discussing account requirements.", "dialogue": [
      { "speaker": "Banker", "side": "left", "text": "What is the minimum ___ we require to open an account?", "blank": true, "answer": "deposit", "hint": "money put in" },
      { "speaker": "You", "side": "right", "text": "How much do I need?" },
      { "speaker": "Banker", "side": "left", "text": "The minimum ___ is five hundred rupees.", "blank": true, "answer": "balance", "hint": "amount of money" },
      { "speaker": "You", "side": "right", "text": "That is fine. I can start with one thousand rupees." }
    ] },
    { "type": "fill", "scene": "Getting a passbook.", "text": "Banker: Here is your ___, which shows all your transactions.<br>Customer: Thank you! When can I start using it?", "blanks": ["passbook"], "hint": "record book for bank account" },
    { "type": "mcq", "scene": "Asking about online banking.", "text": "You want to access your account from home. What do you ask?", "options": ["Do you offer online banking or a mobile app?", "Why is this bank so crowded?", "Can I take money home?", "What time does it close?"], "answer": 0 },
    { "type": "fill", "scene": "The banker explains interest.", "text": "Banker: Your money will earn ___ every year. It is free money!<br>Customer: That is wonderful! So my money grows.", "blanks": ["interest"], "hint": "extra money earned from savings" }
  ],
  "postoffice": [
    { "type": "fill", "scene": "At the post office counter.", "text": "Postal Worker: I can help you send this ___ to your grandma.<br>Customer: Thank you! She lives in another city.", "blanks": ["letter"], "hint": "written message in envelope" },
    { "type": "mcq", "scene": "You want to send a package.", "text": "You have a gift box to send to your friend. What do you ask?", "options": ["How much does it cost to send this package?", "Do you like gifts?", "Can I keep the box?", "Is your office far?"], "answer": 0 },
    { "type": "conv", "scene": "Buying stamps.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "How many _____ do I need for this letter?", "blank": true, "answer": "stamps", "hint": "small stickers for mail" },
      { "speaker": "Postal Worker", "side": "left", "text": "For a local letter, you need one stamp." },
      { "speaker": "You", "side": "right", "text": "And how long does it take to _____?", "blank": true, "answer": "arrive", "hint": "reach the destination" },
      { "speaker": "Postal Worker", "side": "left", "text": "Usually about 3 to 5 days within the country." }
    ] },
    { "type": "fill", "scene": "Weighing a parcel.", "text": "Postal Worker: This package ___ two kilograms. The cost is two hundred rupees.<br>Customer: Thank you for weighing it carefully.", "blanks": ["weighs"], "hint": "has a weight of" },
    { "type": "mcq", "scene": "You want to track a package.", "text": "Your package is on the way. How can you know when it arrives?", "options": ["Ask for a tracking number and check online.", "Call the post office every day.", "Go to the post office and wait.", "Ask your friend to check."], "answer": 0 },
    { "type": "fill", "scene": "Sending a postcard.", "text": "Child: I want to send a ___ from my vacation!<br>Postal Worker: Great! Postcards are quick and fun to send.", "blanks": ["postcard"], "hint": "picture card with a message" }
  ],
  "pharmacy": [
    { "type": "fill", "scene": "At the pharmacy with a prescription.", "text": "Pharmacist: Good morning! Do you have a ___ from your doctor?<br>Customer: Yes, here it is. My child has a cold.", "blanks": ["prescription"], "hint": "doctor's written instructions" },
    { "type": "mcq", "scene": "Asking about medicine safety.", "text": "You want to know if the medicine is safe for children. What do you ask?", "options": ["Is this medicine safe for kids?", "Does this medicine taste good?", "Can I buy this without a doctor?", "Why is medicine so expensive?"], "answer": 0 },
    { "type": "conv", "scene": "Learning about dosage.", "dialogue": [
      { "speaker": "Pharmacist", "side": "left", "text": "This medicine is very ___ for your fever.", "blank": true, "answer": "effective", "hint": "works well" },
      { "speaker": "You", "side": "right", "text": "How often should I take it?" },
      { "speaker": "Pharmacist", "side": "left", "text": "Take one _____ three times a day with water.", "blank": true, "answer": "tablet", "hint": "small pill" },
      { "speaker": "You", "side": "right", "text": "Thank you for explaining." }
    ] },
    { "type": "fill", "scene": "Buying over-the-counter medicine.", "text": "Child: I have a headache. Do I need a ___ for headache medicine?<br>Pharmacist: Not for this one. You can buy it directly.", "blanks": ["prescription"], "hint": "doctor's note" },
    { "type": "mcq", "scene": "The medicine has side effects.", "text": "The pharmacist mentions side effects. What does that mean?", "options": ["Possible unwanted reactions or effects from the medicine.", "The medicine comes from the side of the shop.", "You should take it on the side.", "The medicine works on the side of your body."], "answer": 0 },
    { "type": "fill", "scene": "Expiration date on medicine.", "text": "Pharmacist: This medicine ___ in June next year. Please use it before then.<br>Customer: I understand. Thank you!", "blanks": ["expires"], "hint": "stops being good/safe" }
  ],
  "barbershop": [
    { "type": "fill", "scene": "Entering the barbershop.", "text": "Barber: Good afternoon! What ___ would you like today?<br>Customer: I would like a short haircut.", "blanks": ["haircut"], "hint": "trimming of hair" },
    { "type": "mcq", "scene": "The barber shows you different styles.", "text": "The barber shows you different hair styles. You should:", "options": ["Pick one you like and describe it clearly.", "Get upset about the options.", "Leave without choosing.", "Ask the barber to do what he wants."], "answer": 0 },
    { "type": "conv", "scene": "Getting a shave.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Can I also get a _____, please?", "blank": true, "answer": "shave", "hint": "cutting facial hair" },
      { "speaker": "Barber", "side": "left", "text": "Of course! It will take about fifteen minutes." },
      { "speaker": "You", "side": "right", "text": "My _____ feels very heavy. Will you trim it nicely?", "blank": true, "answer": "beard", "hint": "hair on the face" },
      { "speaker": "Barber", "side": "left", "text": "Yes, I will shape it nicely for you." }
    ] },
    { "type": "fill", "scene": "During the haircut.", "text": "Barber: I will trim the ___ on the sides. That is the long hair on the side of your head.<br>Customer: That sounds good.", "blanks": ["sideburns"], "hint": "hair on the sides of face" },
    { "type": "mcq", "scene": "The barber finishes your haircut.", "text": "You look in the mirror and love your new haircut. What do you say?", "options": ["Thank you! This looks excellent. How much do I owe?", "This is terrible!", "I want a different haircut.", "Can you do it again?"], "answer": 0 },
    { "type": "fill", "scene": "Paying at the barbershop.", "text": "Barber: The total ___ is one hundred and fifty rupees.<br>Customer: Here you go. Keep the change as a tip.", "blanks": ["cost"], "hint": "price / amount" }
  ],
  "library": [
    { "type": "fill", "scene": "Entering the library.", "text": "Librarian: Good morning! Are you a ___?<br>Student: Yes, I want to borrow some books for my project.", "blanks": ["member"], "hint": "someone who belongs to a group" },
    { "type": "mcq", "scene": "Looking for a book.", "text": "You need a book but don't know where it is. What do you do?", "options": ["Ask the librarian for help.", "Take any book randomly.", "Shout for the book.", "Leave without looking."], "answer": 0 },
    { "type": "conv", "scene": "Borrowing books.", "dialogue": [
      { "speaker": "Librarian", "side": "left", "text": "How many _____ would you like to borrow?" },
      { "blank": true, "answer": "books", "hint": "written stories" },
      { "speaker": "You", "side": "right", "text": "I would like to borrow three books." },
      { "speaker": "Librarian", "side": "left", "text": "You can keep them for _____ days. Then please return them.", "blank": true, "answer": "two", "hint": "7 plus 7" }
    ] },
    { "type": "fill", "scene": "The library has rules.", "text": "Sign: Please keep ___! We must keep the library clean and quiet for everyone.<br>Students: Okay, we understand.", "blanks": ["quiet"], "hint": "not making noise" },
    { "type": "mcq", "scene": "The book is damaged when you return it.", "text": "You accidentally tore a page in the library book. What should you do?", "options": ["Tell the librarian immediately and apologize.", "Hide it and pretend nothing happened.", "Glue it secretly.", "Leave the book and run away."], "answer": 0 },
    { "type": "fill", "scene": "Renewing a book.", "text": "Student: Can I ___ my books for another week? I haven't finished reading.<br>Librarian: Of course! If no one else needs them.", "blanks": ["renew"], "hint": "extend the borrowing period" }
  ],
  "park": [
    { "type": "fill", "scene": "Playing in the park.", "text": "Child: Can I play on the ___? I want to go high up in the air!<br>Parent: Yes, be careful and have fun!", "blanks": ["swing"], "hint": "hanging seat that moves back and forth" },
    { "type": "mcq", "scene": "You meet a friend in the park.", "text": "Your friend is playing football. What do you ask?", "options": ["Can I play with you? I would love to join!", "Go away! This is my park.", "I don't like football.", "Let me play with your ball!"], "answer": 0 },
    { "type": "conv", "scene": "Playing on the slide.", "dialogue": [
      { "speaker": "Older Child", "side": "left", "text": "Watch me! I will go down this _____ very fast!", "blank": true, "answer": "slide", "hint": "smooth slanted structure to slide down" },
      { "speaker": "Younger Child", "side": "right", "text": "That looks so much fun!" },
      { "speaker": "Older Child", "side": "left", "text": "Your _____ is next! Come on!", "blank": true, "answer": "turn", "hint": "your time to do something" },
      { "speaker": "Younger Child", "side": "right", "text": "I am excited!" }
    ] },
    { "type": "fill", "scene": "Having a picnic in the park.", "text": "Mom: Let's sit under this tree and have our ___ in the shade.<br>Family: Great! I am hungry.", "blanks": ["lunch"], "hint": "midday meal" },
    { "type": "mcq", "scene": "You should follow park rules.", "text": "Which is a good rule to follow in the park?", "options": ["Throw litter in the dustbin to keep the park clean.", "Run around and disturb other visitors.", "Pick flowers and destroy plants.", "Make as much noise as possible."], "answer": 0 },
    { "type": "fill", "scene": "Sunset in the park.", "text": "Child: Look at the beautiful ___! The sun is going down and the sky is orange.<br>Parent: Yes, it is a wonderful view. Time to go home.", "blanks": ["sunset"], "hint": "when the sun goes down" }
  ],
  "beach": [
    { "type": "fill", "scene": "Arriving at the beach.", "text": "Child: Wow! Look at all this ___, it is so beautiful and golden!<br>Parent: Yes! Now let us build a sandcastle.", "blanks": ["sand"], "hint": "grainy material on beach" },
    { "type": "mcq", "scene": "You want to go swimming.", "text": "Before swimming in the ocean, what is important to check?", "options": ["Check if it is safe and if an adult can supervise.", "Jump in without checking anything.", "Go alone when no one is looking.", "Ignore the warning signs."], "answer": 0 },
    { "type": "conv", "scene": "Playing in the water.", "dialogue": [
      { "speaker": "Friend", "side": "left", "text": "Come on! Let's go play in the _____!", "blank": true, "answer": "waves", "hint": "moving water in ocean" },
      { "speaker": "You", "side": "right", "text": "I need to stay close to the shore." },
      { "speaker": "Friend", "side": "left", "text": "Good idea! Let's build a sand _____ together!", "blank": true, "answer": "castle", "hint": "like a fort" },
      { "speaker": "You", "side": "right", "text": "That sounds like so much fun!" }
    ] },
    { "type": "fill", "scene": "Sun safety at the beach.", "text": "Mom: Before we go to the beach, you must put ___ to protect your skin from the sun.<br>Child: Okay! I don't want to get sunburned.", "blanks": ["sunscreen"], "hint": "protective lotion for skin" },
    { "type": "mcq", "scene": "You find something interesting on the beach.", "text": "You find a shiny shell on the beach. What do you do?", "options": ["Carefully collect it and take it home as a souvenir.", "Leave it because it might have sharp edges.", "Throw it back immediately.", "Show everyone and keep it in your pocket."], "answer": 0 },
    { "type": "fill", "scene": "End of beach day.", "text": "Parent: We should leave soon. The ___ is setting and it will be dark.<br>Child: But I am having so much fun!", "blanks": ["sun"], "hint": "bright star in sky" }
  ],
  "cinema": [
    { "type": "fill", "scene": "At the cinema box office.", "text": "Staff: How many _____ do you need for the movie?<br>Customer: I need three tickets, please.", "blanks": ["tickets"], "hint": "entry passes" },
    { "type": "mcq", "scene": "Choosing a movie to watch.", "text": "There are five different movies showing. What should you do?", "options": ["Check the ratings and pick one suitable for your age.", "Pick randomly without checking.", "Pick the most expensive one.", "Watch all five movies at once."], "answer": 0 },
    { "type": "conv", "scene": "Buying snacks at the cinema.", "dialogue": [
      { "speaker": "Staff", "side": "left", "text": "What _____ would you like? We have popcorn and nachos." },
      { "blank": true, "answer": "snacks", "hint": "light food / treats" },
      { "speaker": "You", "side": "right", "text": "I would like popcorn and a drink." },
      { "speaker": "Staff", "side": "left", "text": "Would you like regular or large _____?", "blank": true, "answer": "size", "hint": "how big" },
      { "speaker": "You", "side": "right", "text": "Large, please. I am very thirsty!" }
    ] },
    { "type": "fill", "scene": "During the movie.", "text": "Usher: Please switch off your mobile ___ in the theater. It disturbs others watching the movie.<br>Customer: Oh yes, I forgot!", "blanks": ["phone"], "hint": "mobile device" },
    { "type": "mcq", "scene": "The movie is starting.", "text": "The lights are dimming. What should you do?", "options": ["Be quiet and watch the movie. Do not disturb others.", "Keep talking to your friends.", "Use your phone to record the movie.", "Play loud music on your phone."], "answer": 0 },
    { "type": "fill", "scene": "After the movie ends.", "text": "Friend: That was an amazing ___! I loved every minute of it.<br>You: Yes! The story was so exciting.", "blanks": ["movie"], "hint": "film watched in cinema" }
  ],
  "birthday": [
    { "type": "fill", "scene": "You are invited to a birthday party.", "text": "Invitation: You are cordially invited to my ___ party on Saturday at 3 PM.<br>Friend: I hope you can come and celebrate with me!", "blanks": ["birthday"], "hint": "annual celebration of birth day" },
    { "type": "mcq", "scene": "Choosing a gift for the birthday child.", "text": "What is a thoughtful gift to give at a birthday party?", "options": ["Something the child loves, like a book, toy, or game.", "Nothing at all.", "Something broken or old.", "A gift without wrapping."], "answer": 0 },
    { "type": "conv", "scene": "At the birthday party.", "dialogue": [
      { "speaker": "Birthday Child", "side": "left", "text": "Thank you so much for coming! I am so happy to ___ you here!", "blank": true, "answer": "see", "hint": "observe" },
      { "speaker": "You", "side": "right", "text": "Happy birthday! I brought you a gift." },
      { "speaker": "Birthday Child", "side": "left", "text": "You are so kind! Now let's go have some ___ and eat cake!", "blank": true, "answer": "fun", "hint": "enjoyment" },
      { "speaker": "You", "side": "right", "text": "Great! I am excited!" }
    ] },
    { "type": "fill", "scene": "Playing birthday games.", "text": "Parent: Who wants to play musical ___? The music will stop and everyone must freeze!<br>Children: Yes! This is so much fun!", "blanks": ["chairs"], "hint": "classic party game" },
    { "type": "mcq", "scene": "Singing the birthday song.", "text": "Everyone is singing the happy birthday song. What should you do?", "options": ["Sing along and clap when the song ends.", "Stay silent and look away.", "Laugh at the birthday child.", "Sing loudly and off-key on purpose."], "answer": 0 },
    { "type": "fill", "scene": "Blowing out candles.", "text": "Everyone: Make a wish and blow out the ___!<br>Birthday Child: I made a secret wish! Now I will blow.", "blanks": ["candles"], "hint": "lit sticks on cake" }
  ],
  "sports": [
    { "type": "fill", "scene": "At the sports ground playing football.", "text": "Player: Pass me the ___, I will try to score a goal!<br>Teammate: Here it comes! Good luck!", "blanks": ["ball"], "hint": "round object in sports" },
    { "type": "mcq", "scene": "Your team is losing the match.", "text": "Your team is losing 1-2. What should you do?", "options": ["Keep trying your best and encourage teammates.", "Give up and leave the field.", "Blame other players for mistakes.", "Sit down and cry."], "answer": 0 },
    { "type": "conv", "scene": "Learning cricket.", "dialogue": [
      { "speaker": "Coach", "side": "left", "text": "Hold the ___ straight and keep your eyes on the ball!", "blank": true, "answer": "bat", "hint": "stick for hitting ball" },
      { "speaker": "Student", "side": "right", "text": "Like this?" },
      { "speaker": "Coach", "side": "left", "text": "Perfect! Now watch as I _____, and you copy me.", "blank": true, "answer": "demonstrate", "hint": "show how to do" },
      { "speaker": "Student", "side": "right", "text": "Got it! I am ready to practice." }
    ] },
    { "type": "fill", "scene": "After winning a match.", "text": "Team Captain: We won! Let's ___ for all our hard work and teamwork!<br>Team: Three cheers! Hip hip hooray!", "blanks": ["celebrate"], "hint": "rejoice and be happy" },
    { "type": "mcq", "scene": "During sports practice.", "text": "What is important to do before starting any sport?", "options": ["Do warm-up exercises and stretch your muscles.", "Jump directly into playing.", "Skip all preparation.", "Rest and don't move."], "answer": 0 },
    { "type": "fill", "scene": "Sports safety.", "text": "Coach: Always wear your ___ helmet when riding a bike or playing contact sports.<br>Student: Yes, safety is very important!", "blanks": ["safety"], "hint": "protective" }
  ],
  "zoo": [
    { "type": "fill", "scene": "Entering the zoo.", "text": "Child: Wow! Look at all these amazing ___ in the zoo!<br>Parent: Yes, there are so many animals from around the world.", "blanks": ["animals"], "hint": "creatures like lions and tigers" },
    { "type": "mcq", "scene": "You see a lion.", "text": "The lion is sleeping peacefully behind a fence. What do you do?", "options": ["Watch quietly and take a photo without using flash.", "Bang on the fence to wake it up.", "Try to throw things at the lion.", "Run away screaming."], "answer": 0 },
    { "type": "conv", "scene": "Learning about animals.", "dialogue": [
      { "speaker": "Guide", "side": "left", "text": "This is a ___. It is the largest land animal.", "blank": true, "answer": "elephant", "hint": "gray animal with long trunk" },
      { "speaker": "Child", "side": "right", "text": "How does it use its trunk?" },
      { "speaker": "Guide", "side": "left", "text": "It uses its trunk to eat, drink, and _____ itself with dust.", "blank": true, "answer": "bathe", "hint": "wash / clean" },
      { "speaker": "Child", "side": "right", "text": "That is so interesting!" }
    ] },
    { "type": "fill", "scene": "Feeding animals at the zoo.", "text": "Keeper: You can feed the gentle ___ with these special pellets. They eat from your hand!<br>Child: How exciting!", "blanks": ["deer"], "hint": "gentle animal with antlers" },
    { "type": "mcq", "scene": "Zoo rules.", "text": "Which is an important rule to follow at the zoo?", "options": ["Never feed animals without permission. Keep a safe distance.", "Feed any animal whatever you want.", "Touch dangerous animals to test if they are friendly.", "Leave gates open so animals can roam free."], "answer": 0 },
    { "type": "fill", "scene": "Zoo conservation.", "text": "Guide: Many animals are _____. The zoo helps protect them and their habitats.<br>Child: That is very important work!", "blanks": ["endangered"], "hint": "in danger of disappearing" }
  ],
  "icecream": [
    { "type": "fill", "scene": "At the ice cream shop on a hot day.", "text": "Child: I am so hot! Can I have a ___, please?<br>Parent: Of course! It is a perfect day for ice cream.", "blanks": ["ice cream"], "hint": "cold sweet frozen dessert" },
    { "type": "mcq", "scene": "Choosing a flavor.", "text": "There are ten flavors of ice cream. What should you choose?", "options": ["Pick your favorite flavor or try a new one.", "Take all of them.", "Choose randomly without looking.", "Ask the shopkeeper to choose for you and close your eyes."], "answer": 0 },
    { "type": "conv", "scene": "Ordering ice cream.", "dialogue": [
      { "speaker": "Shopkeeper", "side": "left", "text": "What _____ would you like? Vanilla, chocolate, or strawberry?" },
      { "blank": true, "answer": "flavor", "hint": "taste" },
      { "speaker": "You", "side": "right", "text": "I want vanilla." },
      { "speaker": "Shopkeeper", "side": "left", "text": "Would you like a _____ or a cone?", "blank": true, "answer": "cup", "hint": "small container" },
      { "speaker": "You", "side": "right", "text": "A cone, please. It is easier to hold." }
    ] },
    { "type": "fill", "scene": "Ice cream toppings.", "text": "Child: Can I have some ___ on top of my ice cream?<br>Shopkeeper: Sure! Chocolate sprinkles or colorful rainbow sprinkles?", "blanks": ["sprinkles"], "hint": "thin sweet topping" },
    { "type": "mcq", "scene": "Ice cream is melting.", "text": "Your ice cream is melting quickly in the hot sun. What do you do?", "options": ["Eat it quickly before it completely melts.", "Leave it and let it melt completely.", "Throw it away without eating.", "Put it back in the freezer yourself."], "answer": 0 },
    { "type": "fill", "scene": "Enjoying ice cream with friends.", "text": "Friend: This ice cream is so _____! My favorite treat on a hot day!<br>You: Yes, it is absolutely delicious!", "blanks": ["refreshing"], "hint": "cooling and nice" }
  ],
  "playground": [
    { "type": "fill", "scene": "Arriving at the playground.", "text": "Child: Look! The ____ are full of children playing today!<br>Parent: Yes, it is a beautiful day for playing outside.", "blanks": ["swings"], "hint": "hanging seats" },
    { "type": "mcq", "scene": "You want to join children playing a game.", "text": "Some children are playing tag. What should you do?", "options": ["Ask politely if you can join their game.", "Push them and take over.", "Stand and watch silently.", "Go play alone."], "answer": 0 },
    { "type": "conv", "scene": "Making friends at the playground.", "dialogue": [
      { "speaker": "New Friend", "side": "left", "text": "Hi! What is your _____?", "blank": true, "answer": "name", "hint": "what you are called" },
      { "speaker": "You", "side": "right", "text": "I am Arjun. What is yours?" },
      { "speaker": "New Friend", "side": "left", "text": "I am Priya. Do you want to ___ with me?", "blank": true, "answer": "play", "hint": "have fun together" },
      { "speaker": "You", "side": "right", "text": "Sure! I would love to make a new friend." }
    ] },
    { "type": "fill", "scene": "Playing on the seesaw.", "text": "Two children sit on opposite ends of the ___. One goes up, one goes down, and they take turns!<br>Child: This is so much fun!", "blanks": ["seesaw"], "hint": "up-down plank on pivot" },
    { "type": "mcq", "scene": "Another child gets hurt at the playground.", "text": "A friend falls and scrapes their knee. What do you do?", "options": ["Help them up and tell an adult immediately.", "Laugh and run away.", "Ignore them and keep playing.", "Take a photo and post it online."], "answer": 0 },
    { "type": "fill", "scene": "Playground safety.", "text": "Parent: Always look around for ____ places on the playground before playing.<br>Child: You mean places that could be dangerous?", "blanks": ["safe"], "hint": "not dangerous" }
  ],
  "busstop": [
    { "type": "fill", "scene": "Waiting at the bus stop.", "text": "Person: I am waiting for the ___ number 42. It comes every 15 minutes.<br>Child: I want to go home too!", "blanks": ["bus"], "hint": "large vehicle with many seats" },
    { "type": "mcq", "scene": "The bus is very crowded.", "text": "The bus is full of people. What should you do?", "options": ["Stand safely and hold onto the railing.", "Push to get a seat.", "Sit on the floor.", "Hang from the ceiling."], "answer": 0 },
    { "type": "conv", "scene": "Asking the bus driver.", "dialogue": [
      { "speaker": "Passenger", "side": "right", "text": "Excuse me, does this bus go to the _____ station?", "blank": true, "answer": "train", "hint": "railway" },
      { "speaker": "Bus Driver", "side": "left", "text": "Yes, it does! I will let you know when we arrive." },
      { "speaker": "Passenger", "side": "right", "text": "How much is the _____?", "blank": true, "answer": "fare", "hint": "ticket price" },
      { "speaker": "Bus Driver", "side": "left", "text": "It is twenty rupees." }
    ] },
    { "type": "fill", "scene": "Bus stop shelter.", "text": "Child: It is raining! Let's wait under the ___ until the bus comes.<br>Parent: Good idea! We will stay dry here.", "blanks": ["shelter"], "hint": "covered place for protection" },
    { "type": "mcq", "scene": "Bus etiquette.", "text": "What is polite behavior on a bus?", "options": ["Give up your seat to elderly people, respect personal space.", "Eat loud snacks and disturb others.", "Shout and be loud.", "Block the aisles with bags."], "answer": 0 },
    { "type": "fill", "scene": "Getting off the bus.", "text": "Bus Driver: I will stop at the next ___. Please press the bell to let me know you want to get off.<br>Passenger: Thank you for the ride!", "blanks": ["stop"], "hint": "designated location" }
  ],
  "airport": [
    { "type": "fill", "scene": "Arriving at the airport.", "text": "Family: We are going on vacation! Let's check in our ____ at the counter.<br>Airline Staff: Welcome! Let me help you.", "blanks": ["luggage"], "hint": "bags and suitcases" },
    { "type": "mcq", "scene": "Security check at airport.", "text": "You need to go through security. What should you do?", "options": ["Follow the security staff instructions. Remove shoes and put bags on the conveyor belt.", "Run through without stopping.", "Hide things in your bag.", "Refuse to cooperate."], "answer": 0 },
    { "type": "conv", "scene": "Checking your flight details.", "dialogue": [
      { "speaker": "Passenger", "side": "right", "text": "Excuse me, what is the ___ number for my flight to Delhi?", "blank": true, "answer": "gate", "hint": "entry point for boarding" },
      { "speaker": "Staff", "side": "left", "text": "Your flight goes from gate number 7." },
      { "speaker": "Passenger", "side": "right", "text": "And when do we start _____?", "blank": true, "answer": "boarding", "hint": "getting on the plane" },
      { "speaker": "Staff", "side": "left", "text": "Boarding starts at 10 AM." }
    ] },
    { "type": "fill", "scene": "Airport announcements.", "text": "Announcement: Flight number 405 to Bangalore will _____ in thirty minutes from gate 12.<br>Passengers: Let's hurry to the gate!", "blanks": ["depart"], "hint": "leave / take off" },
    { "type": "mcq", "scene": "What to do before your flight.", "text": "Before boarding your flight, what is important?", "options": ["Arrive early, have your passport and boarding pass ready.", "Arrive just before boarding closes.", "Forget your passport at home.", "Bring prohibited items."], "answer": 0 },
    { "type": "fill", "scene": "Inside the airplane.", "text": "Flight Attendant: Welcome aboard! Please fasten your ___ and follow our safety instructions.<br>Passenger: Thank you for helping us.", "blanks": ["seatbelt"], "hint": "safety strap" }
  ],
  "taxi": [
    { "type": "fill", "scene": "Catching a taxi on the street.", "text": "Person: Taxi! Taxi! I need a ___ to the railway station.<br>Taxi Driver: Get in! I will take you there quickly.", "blanks": ["ride"], "hint": "journey / trip" },
    { "type": "mcq", "scene": "In the taxi with the driver.", "text": "You are in the taxi. What should you do?", "options": ["Tell the driver your destination and negotiate the fare politely.", "Not tell the driver where you're going.", "Grab the steering wheel.", "Fight with the driver."], "answer": 0 },
    { "type": "conv", "scene": "Asking for directions.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Driver, do you know the _____ to City Hospital?", "blank": true, "answer": "way", "hint": "path / route" },
      { "speaker": "Taxi Driver", "side": "left", "text": "Yes, I know it very well. I come here often." },
      { "speaker": "You", "side": "right", "text": "How long will the _____ take?", "blank": true, "answer": "journey", "hint": "trip / travel" },
      { "speaker": "Taxi Driver", "side": "left", "text": "About twenty minutes, depending on traffic." }
    ] },
    { "type": "fill", "scene": "Paying the taxi driver.", "text": "You: How much do I ___ you for the ride?<br>Taxi Driver: The total is three hundred rupees. Thank you!", "blanks": ["owe"], "hint": "must pay" },
    { "type": "mcq", "scene": "Taxi safety.", "text": "What is a safe practice when taking a taxi?", "options": ["Share your destination with someone, check driver credentials.", "Travel alone without telling anyone.", "Leave your valuables visible in the taxi.", "Get in the taxi without checking if it's legitimate."], "answer": 0 },
    { "type": "fill", "scene": "Leaving the taxi.", "text": "You: Thank you for the safe ___! I appreciate your good driving.<br>Taxi Driver: You are welcome! Have a good day!", "blanks": ["ride"], "hint": "journey" }
  ],
  "supermarket": [
    { "type": "fill", "scene": "Entering a supermarket.", "text": "Child: Look at all these ___ arranged so neatly!<br>Parent: Yes, there are so many things to buy today.", "blanks": ["shelves"], "hint": "structures holding items" },
    { "type": "mcq", "scene": "Using a shopping cart.", "text": "You want to buy many things. What should you use?", "options": ["Use a shopping cart or basket.", "Carry everything in your hands.", "Put things on the floor.", "Leave items everywhere."], "answer": 0 },
    { "type": "conv", "scene": "Looking for items.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Excuse me, where are the _____?", "blank": true, "answer": "vegetables", "hint": "healthy green items" },
      { "speaker": "Staff", "side": "left", "text": "They are in the back section of the store." },
      { "speaker": "You", "side": "right", "text": "And where is the ___ section?", "blank": true, "answer": "dairy", "hint": "milk and cheese area" },
      { "speaker": "Staff", "side": "left", "text": "It is next to the bread section." }
    ] },
    { "type": "fill", "scene": "Reading expiry dates.", "text": "Parent: Always check the ___ date on products before buying. Make sure it is not expired.<br>Child: I understand! I will be careful.", "blanks": ["expiry"], "hint": "when product goes bad" },
    { "type": "mcq", "scene": "Paying at the supermarket.", "text": "You have finished shopping. What do you do?", "options": ["Go to the checkout counter and pay for your items.", "Try to leave without paying.", "Hide some items in your bag.", "Steal from other customers' carts."], "answer": 0 },
    { "type": "fill", "scene": "Using coupons and discounts.", "text": "Staff: We have special ___ today! You can save money on many items.<br>Customer: That is wonderful! Show me the offers.", "blanks": ["deals"], "hint": "special prices" }
  ],
  "toyshop": [
    { "type": "fill", "scene": "Entering a toy shop.", "text": "Child: Wow! There are so many ___ here! I don't know what to choose!<br>Shopkeeper: Yes, we have toys for all ages.", "blanks": ["toys"], "hint": "playthings / games" },
    { "type": "mcq", "scene": "Choosing a toy for a friend's birthday.", "text": "Your friend loves building things. What toy would be best?", "options": ["Building blocks or a construction set.", "A toy gun.", "A broken toy.", "Anything randomly."], "answer": 0 },
    { "type": "conv", "scene": "Asking about a toy.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Can you show me the _____, please?", "blank": true, "answer": "robots", "hint": "mechanical toys" },
      { "speaker": "Shopkeeper", "side": "left", "text": "This one is very popular. It can walk and talk!" },
      { "speaker": "You", "side": "right", "text": "How much does it _____?", "blank": true, "answer": "cost", "hint": "price" },
      { "speaker": "Shopkeeper", "side": "left", "text": "It is eight hundred rupees." }
    ] },
    { "type": "fill", "scene": "Educational toys.", "text": "Parent: I like toys that help children _____. They are more useful than just for fun.<br>Shopkeeper: Exactly! We have many educational toys.", "blanks": ["learn"], "hint": "gain knowledge" },
    { "type": "mcq", "scene": "Quality and safety of toys.", "text": "When buying a toy, what is important to check?", "options": ["Check that it is age-appropriate and safe, without sharp edges.", "Buy any toy without checking.", "Buy very cheap toys even if they look unsafe.", "Ignore safety instructions."], "answer": 0 },
    { "type": "fill", "scene": "Toy warranties.", "text": "Shopkeeper: This toy has a ___ of one year. If it breaks, you can bring it back.<br>Customer: That is reassuring!", "blanks": ["warranty"], "hint": "guarantee / promise" }
  ],
  "bookstore": [
    { "type": "fill", "scene": "Entering a bookstore.", "text": "Child: So many ___ here! I want to read all of them!<br>Staff: We have books for all ages and interests.", "blanks": ["books"], "hint": "written stories" },
    { "type": "mcq", "scene": "Choosing a book to read.", "text": "What is a good way to choose a book?", "options": ["Read the back cover, check the title and author, ask for recommendations.", "Choose randomly without looking.", "Pick the one with the prettiest cover.", "Choose a book you cannot read."], "answer": 0 },
    { "type": "conv", "scene": "Asking for a recommendation.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Can you ___ a good adventure book for me?", "blank": true, "answer": "recommend", "hint": "suggest" },
      { "speaker": "Staff", "side": "left", "text": "How old are you? That helps me choose the right book." },
      { "speaker": "You", "side": "right", "text": "I am ten years old and I love ___.", "blank": true, "answer": "mysteries", "hint": "stories with secrets" },
      { "speaker": "Staff", "side": "left", "text": "Perfect! I have the perfect book for you." }
    ] },
    { "type": "fill", "scene": "Book sections in a bookstore.", "text": "Bookstore has different ___. There is fiction, non-fiction, children's books, and many more!<br>Customer: This is very well organized.", "blanks": ["sections"], "hint": "different areas" },
    { "type": "mcq", "scene": "Buying books on discount.", "text": "You see a book with a sale sticker. What should you do?", "options": ["Check if it's a book you want and buy it at the discount price.", "Buy it just because it's on sale even if you don't want it.", "Steal the book without paying.", "Damage the book and then buy it."], "answer": 0 },
    { "type": "fill", "scene": "Reading corner in bookstore.", "text": "Many bookstores have a comfortable ____ where you can sit and read before buying.<br>Child: Can I read here first?", "blanks": ["corner"], "hint": "cozy space" }
  ],
  "clothingstore": [
    { "type": "fill", "scene": "At a clothing store.", "text": "Staff: Welcome! What ___ are you looking for today?<br>Customer: I need a new shirt and some pants.", "blanks": ["clothes"], "hint": "garments to wear" },
    { "type": "mcq", "scene": "Trying on clothes.", "text": "The shirt you like doesn't fit well. What should you do?", "options": ["Ask the staff if they have it in another size.", "Force it on and buy it anyway.", "Leave without trying alternatives.", "Ask to take the wrong size home."], "answer": 0 },
    { "type": "conv", "scene": "Asking about materials.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "What ___ is this shirt made from?", "blank": true, "answer": "material", "hint": "fabric / cloth" },
      { "speaker": "Staff", "side": "left", "text": "It is one hundred percent cotton. Very comfortable and breathable." },
      { "speaker": "You", "side": "right", "text": "Perfect! I want clothes that are easy to _____.", "blank": true, "answer": "wash", "hint": "clean" },
      { "speaker": "Staff", "side": "left", "text": "This shirt is easy to wash and maintain." }
    ] },
    { "type": "fill", "scene": "Seasonal clothing.", "text": "In ___, we wear warm clothes like sweaters and jackets.<br>In summer, we wear light clothes like t-shirts and shorts.", "blanks": ["winter"], "hint": "cold season" },
    { "type": "mcq", "scene": "Choosing appropriate clothes.", "text": "You are going to a formal event. What clothes should you wear?", "options": ["Dress nicely in formal or semi-formal clothes.", "Wear old, dirty clothes.", "Wear pajamas.", "Wear clothes with holes."], "answer": 0 },
    { "type": "fill", "scene": "Care instructions.", "text": "Staff: Please read the ____ on the label. It tells you how to care for the garment.<br>Customer: Thank you for the advice!", "blanks": ["instructions"], "hint": "directions" }
  ],
  "shoeshop": [
    { "type": "fill", "scene": "At a shoe shop.", "text": "Child: I need new ___ because my old ones don't fit anymore!<br>Staff: Let me help you find the right size.", "blanks": ["shoes"], "hint": "footwear" },
    { "type": "mcq", "scene": "Choosing the right shoe size.", "text": "How do you know if shoes fit properly?", "options": ["They fit snugly but comfortably, with enough room for your toes.", "Buy the smallest size.", "Buy the largest size.", "Buy without trying them on."], "answer": 0 },
    { "type": "conv", "scene": "Trying on shoes.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "These shoes feel ___. Can I have the next size?", "blank": true, "answer": "tight", "hint": "too small / snug" },
      { "speaker": "Staff", "side": "left", "text": "Of course! Let me bring the next size." },
      { "speaker": "You", "side": "right", "text": "These are much better! And I can ____ comfortably in them.", "blank": true, "answer": "walk", "hint": "move on foot" },
      { "speaker": "Staff", "side": "left", "text": "Perfect! These are the right shoes for you." }
    ] },
    { "type": "fill", "scene": "Different types of shoes.", "text": "There are many types of shoes: sneakers for sports, ___ for formal events, and sandals for summer.<br>Customer: That makes sense!", "blanks": ["formal"], "hint": "dress shoes" },
    { "type": "mcq", "scene": "Shoe care.", "text": "What is important for keeping shoes in good condition?", "options": ["Clean them regularly and store them properly.", "Leave them dirty and wet.", "Leave them in the sun always.", "Never wear them so they don't get dirty."], "answer": 0 },
    { "type": "fill", "scene": "Return policy.", "text": "Staff: If these shoes don't work out, you can ___ them within 30 days.<br>Customer: That is very helpful to know!", "blanks": ["return"], "hint": "bring back" }
  ],
  "cafe": [
    { "type": "fill", "scene": "At a cafe.", "text": "Server: Good afternoon! What ___ would you like?<br>Customer: I would like a cold coffee, please.", "blanks": ["drink"], "hint": "beverage" },
    { "type": "mcq", "scene": "Ordering food at a cafe.", "text": "You want a light snack with your drink. What is a good choice?", "options": ["A sandwich, pastry, or cookie.", "A large meal.", "Expired food.", "Nothing with the drink."], "answer": 0 },
    { "type": "conv", "scene": "Customizing your drink.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Can I have my coffee with _____ milk instead of regular milk?", "blank": true, "answer": "almond", "hint": "nut-based milk" },
      { "speaker": "Server", "side": "left", "text": "Of course! We have several milk options." },
      { "speaker": "You", "side": "right", "text": "And can it be less _____? I don't like it too sweet.", "blank": true, "answer": "sugar", "hint": "sweet substance" },
      { "speaker": "Server", "side": "left", "text": "No problem! I will make it perfect for you." }
    ] },
    { "type": "fill", "scene": "Cafe atmosphere.", "text": "This cafe has a _____ and peaceful atmosphere. Perfect for studying or meeting friends!<br>Customer: Yes, I love coming here.", "blanks": ["cozy"], "hint": "comfortable and warm" },
    { "type": "mcq", "scene": "Cafe etiquette.", "text": "What is polite behavior in a cafe?", "options": ["Keep your voice down and respect other customers.", "Talk very loud on your phone.", "Leave trash on the table.", "Eat other people's food without asking."], "answer": 0 },
    { "type": "fill", "scene": "Paying at the cafe.", "text": "Server: Your total is three hundred and fifty rupees. We accept _____ and cards.<br>Customer: Thank you! Here is cash.", "blanks": ["cash"], "hint": "paper money" }
  ],
  "dentist": [
    { "type": "fill", "scene": "At the dentist's office.", "text": "Receptionist: Good morning! Do you have an ___?<br>Patient: Yes, I have an appointment at 10 AM.", "blanks": ["appointment"], "hint": "scheduled meeting" },
    { "type": "mcq", "scene": "The dentist examines your teeth.", "text": "The dentist is checking your teeth. What should you do?", "options": ["Sit still and be calm. Answer questions when asked.", "Move around and talk.", "Try to bite the dentist's hand.", "Run away from the chair."], "answer": 0 },
    { "type": "conv", "scene": "Learning about dental hygiene.", "dialogue": [
      { "speaker": "Dentist", "side": "left", "text": "You must ___ your teeth twice a day to prevent cavities.", "blank": true, "answer": "brush", "hint": "clean with a brush" },
      { "speaker": "Patient", "side": "right", "text": "I do brush, but sometimes I forget." },
      { "speaker": "Dentist", "side": "left", "text": "Also use ___ every day. It cleans between your teeth.", "blank": true, "answer": "floss", "hint": "thin cord for between teeth" },
      { "speaker": "Patient", "side": "right", "text": "I will try to do that." }
    ] },
    { "type": "fill", "scene": "Dental cleaning.", "text": "Dentist: This process will ___ your teeth and remove plaque buildup.<br>Patient: I am a bit nervous, but I understand it is important.", "blanks": ["clean"], "hint": "make spotless" },
    { "type": "mcq", "scene": "Avoiding cavities.", "text": "What helps prevent cavities?", "options": ["Brush regularly, floss, limit sugary foods and drinks.", "Eat lots of candy.", "Never brush your teeth.", "Avoid the dentist."], "answer": 0 },
    { "type": "fill", "scene": "After the dental visit.", "text": "Dentist: Your teeth are very ___! Keep up the good brushing habits!<br>Patient: Thank you! I will take good care of my teeth.", "blanks": ["healthy"], "hint": "in good condition" }
  ],
  "petshop": [
    { "type": "fill", "scene": "At a pet shop.", "text": "Child: I want to get a ___! Which animal is best for a beginner?<br>Staff: Dogs and cats are very popular pets.", "blanks": ["pet"], "hint": "animal companion" },
    { "type": "mcq", "scene": "Choosing a pet.", "text": "Before getting a pet, what should you consider?", "options": ["Your lifestyle, space available, time to care for it, and family allergies.", "Just pick the cutest animal.", "Pick the most expensive pet.", "Get a pet without telling your family."], "answer": 0 },
    { "type": "conv", "scene": "Learning about pet care.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "How often should I _____ my pet?", "blank": true, "answer": "feed", "hint": "give food to" },
      { "speaker": "Staff", "side": "left", "text": "Most pets need food twice a day." },
      { "speaker": "You", "side": "right", "text": "And what about exercise and _____?", "blank": true, "answer": "play", "hint": "have fun with" },
      { "speaker": "Staff", "side": "left", "text": "Yes, pets need daily exercise and playtime for their happiness." }
    ] },
    { "type": "fill", "scene": "Pet supplies.", "text": "The pet shop sells food, toys, ___, and many other supplies for your pet.<br>Customer: That is very convenient!", "blanks": ["bedding"], "hint": "place to sleep" },
    { "type": "mcq", "scene": "Pet responsibility.", "text": "What is an important responsibility of a pet owner?", "options": ["Provide proper food, water, exercise, medical care, and lots of love.", "Neglect the pet.", "Leave it alone for days.", "Mistreat the animal."], "answer": 0 },
    { "type": "fill", "scene": "Pet health checkups.", "text": "Staff: Always take your pet to the ___ regularly for health checkups and vaccinations.<br>Customer: I will make sure to do that.", "blanks": ["veterinarian"], "hint": "animal doctor" }
  ],
  "musicclass": [
    { "type": "fill", "scene": "At music class.", "text": "Teacher: Today we are learning to play the _____. It is a stringed instrument.<br>Student: I am excited to learn!", "blanks": ["guitar"], "hint": "instrument with strings" },
    { "type": "mcq", "scene": "Learning to read music.", "text": "The teacher is teaching you to read musical notes. Why is this important?", "options": ["It helps you play songs correctly from written music.", "It is not important at all.", "It is only for professionals.", "You need it only to read sheet music."], "answer": 0 },
    { "type": "conv", "scene": "Practice and improvement.", "dialogue": [
      { "speaker": "Teacher", "side": "left", "text": "How many hours do you _____ every day?", "blank": true, "answer": "practice", "hint": "do repeatedly to improve" },
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
      { "speaker": "Teacher", "side": "left", "text": "To make a _____, mix blue and yellow together.", "blank": true, "answer": "green", "hint": "color of nature" },
      { "speaker": "Student", "side": "right", "text": "Oh! That is how colors mix!" },
      { "speaker": "Teacher", "side": "left", "text": "Yes! Learning about color mixing helps you create better _____.", "blank": true, "answer": "art", "hint": "creative work" },
      { "speaker": "Student", "side": "right", "text": "This is so interesting!" }
    ] },
    { "type": "fill", "scene": "Displaying artwork.", "text": "The school is having an art ___ where all students can show their best work!<br>Student: I want to display my painting!", "blanks": ["exhibition"], "hint": "public display" },
    { "type": "mcq", "scene": "Art appreciation.", "text": "What is important to remember about other people's art?", "options": ["Be respectful and appreciative of their effort and creativity.", "Mock other people's work.", "Say mean things about their art.", "Ignore their effort."], "answer": 0 },
    { "type": "fill", "scene": "Different art mediums.", "text": "Artists use different mediums like oil paint, acrylic, _____, and charcoal.<br>Student: I want to try all of them!", "blanks": ["watercolor"], "hint": "paint using water" }
  ],
  "swimmingpool": [
    { "type": "fill", "scene": "At the swimming pool.", "text": "Instructor: Before entering the pool, wear your ___ to stay safe and visible in the water!<br>Student: I already have mine on!", "blanks": ["swimsuit"], "hint": "special clothing for swimming" },
    { "type": "mcq", "scene": "Pool safety rules.", "text": "What is an important pool safety rule?", "options": ["Never run on the pool deck. Always walk carefully.", "Run and jump as much as you want.", "Push other swimmers.", "Dive in shallow water."], "answer": 0 },
    { "type": "conv", "scene": "Learning to swim.", "dialogue": [
      { "speaker": "Instructor", "side": "left", "text": "Now, let's work on your _____. Keep your arms moving smoothly.", "blank": true, "answer": "strokes", "hint": "swimming movements" },
      { "speaker": "Student", "side": "right", "text": "Like this?" },
      { "speaker": "Instructor", "side": "left", "text": "Good! Now let's _____ across the pool. You are doing great!", "blank": true, "answer": "swim", "hint": "move through water" },
      { "speaker": "Student", "side": "right", "text": "I am getting better at this!" }
    ] },
    { "type": "fill", "scene": "Pool entry and exit.", "text": "Instructor: Always use the ___ to get into and out of the pool safely. Never jump from the edge!<br>Student: I will be careful.", "blanks": ["ladder"], "hint": "steps to climb" },
    { "type": "mcq", "scene": "What to do if someone is in danger.", "text": "You see someone struggling in the pool. What should you do?", "options": ["Call an adult or lifeguard immediately.", "Jump in and try to rescue them.", "Ignore them and keep playing.", "Laugh at them."], "answer": 0 },
    { "type": "fill", "scene": "Water confidence building.", "text": "Instructor: Good work today! You have built your _____ in the water. Keep practicing!<br>Student: Thank you! I feel more confident now.", "blanks": ["confidence"], "hint": "belief in yourself" }
  ],
  "garden": [
    { "type": "fill", "scene": "In the garden.", "text": "Parent: Today we are going to plant some ___. They will grow into beautiful flowers!<br>Child: I am excited to see them grow!", "blanks": ["seeds"], "hint": "small things that grow into plants" },
    { "type": "mcq", "scene": "Preparing soil for planting.", "text": "What is important for plants to grow well?", "options": ["Good soil with nutrients, sunlight, and water.", "Poor soil with no nutrients.", "No sunlight.", "Never water them."], "answer": 0 },
    { "type": "conv", "scene": "Learning about plants.", "dialogue": [
      { "speaker": "Gardener", "side": "left", "text": "This plant needs _____ every morning. Not too much or too little.", "blank": true, "answer": "watering", "hint": "giving water" },
      { "speaker": "Child", "side": "right", "text": "How do I know when to water?" },
      { "speaker": "Gardener", "side": "left", "text": "Check if the soil is dry. When it feels dry, it is time to _____.", "blank": true, "answer": "water", "hint": "pour liquid" },
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
      { "speaker": "You", "side": "right", "text": "Can you _____ a custom cake for my birthday?", "blank": true, "answer": "make", "hint": "prepare / bake" },
      { "speaker": "Baker", "side": "left", "text": "Of course! What flavor would you like?" },
      { "speaker": "You", "side": "right", "text": "I want chocolate cake with _____ on top.", "blank": true, "answer": "frosting", "hint": "sweet coating" },
      { "speaker": "Baker", "side": "left", "text": "Perfect! I will make it special for you." }
    ] },
    { "type": "fill", "scene": "Bakery varieties.", "text": "The bakery has many items: cakes, cookies, ___, doughnuts, and more!<br>Customer: It is hard to choose!", "blanks": ["pastries"], "hint": "sweet baked items" },
    { "type": "mcq", "scene": "Food allergies at the bakery.", "text": "You have allergies. What should you do?", "options": ["Tell the baker about your allergies and ask about ingredients.", "Hide your allergies and eat anyway.", "Guess which items are safe.", "Assume everything is safe."], "answer": 0 },
    { "type": "fill", "scene": "Freshness guarantee.", "text": "Baker: Our bread is baked fresh every morning. This ___ that you get the best quality!<br>Customer: That is why I always come here.", "blanks": ["guarantees"], "hint": "assures / ensures" }
  ],
  "electronics": [
    { "type": "fill", "scene": "At the electronics shop.", "text": "Staff: Welcome! We have the latest _____ and accessories!<br>Customer: Great! I am looking for a new phone.", "blanks": ["phones"], "hint": "mobile devices" },
    { "type": "mcq", "scene": "Choosing electronic devices.", "text": "When buying electronics, what should you consider?", "options": ["Brand reputation, warranty, features you need, and price.", "Just buy the cheapest option.", "Buy without comparing.", "Buy something you don't need."], "answer": 0 },
    { "type": "conv", "scene": "Learning about features.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "What is the ___ of this tablet?", "blank": true, "answer": "battery", "hint": "power source" },
      { "speaker": "Staff", "side": "left", "text": "It lasts for about twelve hours on a full charge." },
      { "speaker": "You", "side": "right", "text": "And does it come with a _____?", "blank": true, "answer": "warranty", "hint": "guarantee" },
      { "speaker": "Staff", "side": "left", "text": "Yes, it comes with a one-year manufacturer's warranty." }
    ] },
    { "type": "fill", "scene": "Electronic safety.", "text": "Customer: Is this product ___? I want to make sure it is safe to use.<br>Staff: Yes, it has all safety certifications.", "blanks": ["safe"], "hint": "not dangerous" },
    { "type": "mcq", "scene": "Electronics protection.", "text": "What helps protect your electronic devices?", "options": ["Use protective cases, screen protectors, and follow safety guidelines.", "Drop them frequently.", "Expose them to water.", "Leave them in extreme heat."], "answer": 0 },
    { "type": "fill", "scene": "Tech support.", "text": "Staff: If you have any issues, we offer _____ support to help you set up and troubleshoot.<br>Customer: That is very helpful!", "blanks": ["technical"], "hint": "expert help" }
  ],
  "flowershop": [
    { "type": "fill", "scene": "At the flower shop.", "text": "Florist: Good afternoon! Would you like a ____ of fresh flowers?<br>Customer: Yes, I want to give them to my mom.", "blanks": ["bouquet"], "hint": "bunch of flowers" },
    { "type": "mcq", "scene": "Choosing flowers.", "text": "What flowers make a good gift?", "options": ["Choose based on the person's preference and the occasion.", "Pick any wilted flowers.", "Choose flowers you don't like.", "Pick the most expensive ones just because."], "answer": 0 },
    { "type": "conv", "scene": "Ordering for special occasions.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "I need flowers for an _____. Can you recommend something?", "blank": true, "answer": "anniversary", "hint": "yearly celebration" },
      { "speaker": "Florist", "side": "left", "text": "Red roses are perfect for anniversaries. Very romantic!" },
      { "speaker": "You", "side": "right", "text": "Perfect! Can you _____ them nicely with a ribbon?", "blank": true, "answer": "wrap", "hint": "cover with paper" },
      { "speaker": "Florist", "side": "left", "text": "Of course! I will make it look beautiful." }
    ] },
    { "type": "fill", "scene": "Flower care.", "text": "Florist: To keep your flowers fresh, put them in _____ with fresh water daily.<br>Customer: Thank you for the advice!", "blanks": ["vase"], "hint": "container for flowers" },
    { "type": "mcq", "scene": "Seasonal flowers.", "text": "What is good about buying seasonal flowers?", "options": ["They are fresher, cheaper, and better for the environment.", "They are always expensive.", "They don't last long.", "They are never available."], "answer": 0 },
    { "type": "fill", "scene": "Message with flowers.", "text": "Customer: Can I include a _____ with the flowers? I want to write a special message.<br>Florist: Of course! Customers love receiving personalized cards.", "blanks": ["card"], "hint": "written note" }
  ],
  "gym": [
    { "type": "fill", "scene": "At the gym.", "text": "Trainer: Welcome to our gym! Let me show you our _____ for exercise.<br>Member: I am excited to get fit!", "blanks": ["equipment"], "hint": "machines and tools" },
    { "type": "mcq", "scene": "Gym safety.", "text": "What is important for gym safety?", "options": ["Use equipment correctly, warm up before exercising, use proper form.", "Use equipment without instructions.", "Skip warm-ups.", "Exercise when injured."], "answer": 0 },
    { "type": "conv", "scene": "Fitness goals.", "dialogue": [
      { "speaker": "Trainer", "side": "left", "text": "What are your fitness _____?", "blank": true, "answer": "goals", "hint": "aims / targets" },
      { "speaker": "Member", "side": "right", "text": "I want to be stronger and healthier." },
      { "speaker": "Trainer", "side": "left", "text": "Great! I will create a personalized ___ for you.", "blank": true, "answer": "plan", "hint": "schedule" },
      { "speaker": "Member", "side": "right", "text": "Thank you! I am ready to start." }
    ] },
    { "type": "fill", "scene": "Post-workout care.", "text": "Trainer: After your workout, do some ____ exercises to cool down and prevent soreness.<br>Member: I will remember that!", "blanks": ["stretching"], "hint": "gently extending muscles" },
    { "type": "mcq", "scene": "Gym etiquette.", "text": "What is polite behavior at the gym?", "options": ["Clean up after yourself, return equipment, be respectful to others.", "Leave equipment everywhere.", "Disturb others during their workouts.", "Hog all the equipment."], "answer": 0 },
    { "type": "fill", "scene": "Nutrition and fitness.", "text": "Trainer: Exercise is important, but _____ also plays a big role in your fitness journey.<br>Member: I will eat healthier too!", "blanks": ["nutrition"], "hint": "healthy eating" }
  ],
  "ticketcounter": [
    { "type": "fill", "scene": "At the ticket counter.", "text": "Customer: I need _____ for the movie show at 6 PM, please.<br>Staff: How many tickets do you need?", "blanks": ["tickets"], "hint": "entry passes" },
    { "type": "mcq", "scene": "Choosing movie showtimes.", "text": "There are several showtimes available. What should you choose?", "options": ["Pick a showtime that fits your schedule and availability.", "Pick the worst time just to be difficult.", "Go without checking times.", "Complain about all the options."], "answer": 0 },
    { "type": "conv", "scene": "Booking advance tickets.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Can I ___ tickets for the movie next week?", "blank": true, "answer": "book", "hint": "reserve in advance" },
      { "speaker": "Staff", "side": "left", "text": "Yes, bookings open three days in advance." },
      { "speaker": "You", "side": "right", "text": "What _____ should I expect? Is it a popular movie?", "blank": true, "answer": "crowd", "hint": "number of people" },
      { "speaker": "Staff", "side": "left", "text": "Yes, it is very popular. Book soon!" }
    ] },
    { "type": "fill", "scene": "Ticket pricing.", "text": "Staff: Children's tickets are half price. Student tickets are also at a ____ rate.<br>Customer: That is great value!", "blanks": ["discounted"], "hint": "reduced price" },
    { "type": "mcq", "scene": "Cancellation policy.", "text": "If you cannot go to the movie, what should you do?", "options": ["Cancel your tickets early to get a refund or exchange.", "Simply not show up.", "Try to sneak in with someone else's ticket.", "Ignore the booking."], "answer": 0 },
    { "type": "fill", "scene": "Ticket confirmation.", "text": "Staff: Here are your _____. Please arrive 15 minutes early before the show!<br>Customer: Thank you! I will see you then.", "blanks": ["tickets"], "hint": "entry passes" }
  ],
  "atm": [
    { "type": "fill", "scene": "At an ATM.", "text": "Person: I need to ___ some money from my account.<br>ATM: Please insert your card.", "blanks": ["withdraw"], "hint": "take out" },
    { "type": "mcq", "scene": "ATM security.", "text": "What is important for ATM security?", "options": ["Keep your PIN secret, cover the keypad, check your balance after withdrawal.", "Share your PIN with friends.", "Use ATMs in unsafe areas.", "Leave your card in the machine."], "answer": 0 },
    { "type": "conv", "scene": "Using ATM features.", "dialogue": [
      { "speaker": "Person", "side": "right", "text": "I want to check my account _____. Is that possible here?", "blank": true, "answer": "balance", "hint": "amount of money" },
      { "speaker": "ATM", "side": "left", "text": "Yes, select 'Balance Inquiry' to check your account." },
      { "speaker": "Person", "side": "right", "text": "Also, I want to change my _____. Can I do that?", "blank": true, "answer": "PIN", "hint": "secret code" },
      { "speaker": "ATM", "side": "left", "text": "Yes, select 'Change PIN' from the menu." }
    ] },
    { "type": "fill", "scene": "ATM fees.", "text": "ATM: You are about to withdraw money. A small _____ may apply. Continue?<br>Person: I understand. Yes, continue.", "blanks": ["fee"], "hint": "charge" },
    { "type": "mcq", "scene": "Lost ATM card.", "text": "You realize your ATM card is missing. What should you do first?", "options": ["Contact your bank immediately to block the card.", "Wait and hope it returns.", "Do nothing.", "Tell strangers."], "answer": 0 },
    { "type": "fill", "scene": "ATM receipts.", "text": "Always keep your ATM _____ to verify your transactions later.<br>Person: Good reminder! I will save it.", "blanks": ["receipt"], "hint": "printed record" }
  ],
  "policestation": [
    { "type": "fill", "scene": "At the police station.", "text": "Officer: Good afternoon! How can I _____ you today?<br>Person: I need to report a lost item.", "blanks": ["help"], "hint": "assist" },
    { "type": "mcq", "scene": "When to contact police.", "text": "When is it important to contact police?", "options": ["For emergencies, crimes, lost items, or accidents.", "For no reason.", "Only on weekends.", "Only for small complaints."], "answer": 0 },
    { "type": "conv", "scene": "Filing a report.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "I lost my _____ yesterday. Can you help me file a report?", "blank": true, "answer": "wallet", "hint": "money holder" },
      { "speaker": "Officer", "side": "left", "text": "Of course. Tell me details about when and where you lost it." },
      { "speaker": "You", "side": "right", "text": "I think I left it on the _____ near my home.", "blank": true, "answer": "bench", "hint": "place to sit" },
      { "speaker": "Officer", "side": "left", "text": "I will file this report and check if anyone found it." }
    ] },
    { "type": "fill", "scene": "Police assistance.", "text": "Officer: We are here to _____ and protect the community.<br>Person: Thank you for your service!", "blanks": ["serve"], "hint": "help / support" },
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
    { "type": "fill", "scene": "Emergency calls.", "text": "Firefighter: When you call our _____, give your location and describe the emergency clearly.<br>Person: I understand. Thank you!", "blanks": ["emergency"], "hint": "crisis / urgent situation" },
    { "type": "mcq", "scene": "Evacuating during a fire.", "text": "If there is a fire in your building, what should you do?", "options": ["Evacuate immediately using stairs, never elevators. Proceed to a safe meeting point.", "Stay in your room.", "Use elevators to escape.", "Gather your belongings before leaving."], "answer": 0 },
    { "type": "fill", "scene": "Firefighter appreciation.", "text": "Child: Thank you for keeping us _____! Firefighters are real heroes!<br>Firefighter: You are welcome! Stay safe!", "blanks": ["safe"], "hint": "protected from harm" }
  ],
  "veterinarian": [
    { "type": "fill", "scene": "At the veterinarian's office with a pet.", "text": "Vet: Good afternoon! I see you have brought your ___. Let me examine them.<br>Owner: My dog has been eating too much lately.", "blanks": ["dog"], "hint": "pet animal" },
    { "type": "mcq", "scene": "Pet health concerns.", "text": "What are signs that your pet needs a vet visit?", "options": ["Change in appetite, unusual behavior, visible injuries, or abnormal symptoms.", "Wait and see if it goes away.", "Try to treat at home.", "Ignore all symptoms."], "answer": 0 },
    { "type": "conv", "scene": "Pet vaccination.", "dialogue": [
      { "speaker": "Vet", "side": "left", "text": "Your pet needs these _____ to stay healthy and protected.", "blank": true, "answer": "vaccinations", "hint": "preventive injections" },
      { "speaker": "Owner", "side": "right", "text": "How often do they need them?" },
      { "speaker": "Vet", "side": "left", "text": "Usually once a year for most pets. This _____ your pet's immune system.", "blank": true, "answer": "strengthens", "hint": "makes stronger" },
      { "speaker": "Owner", "side": "right", "text": "I want to keep my pet healthy." }
    ] },
    { "type": "fill", "scene": "Pet grooming.", "text": "Vet: Regular bathing, grooming, and nail trimming keep your pet healthy and ___.<br>Owner: I will make sure to do that regularly.", "blanks": ["clean"], "hint": "hygienic" },
    { "type": "mcq", "scene": "Pet nutrition.", "text": "What is important about pet nutrition?", "options": ["Feed high-quality pet food appropriate for their age and size.", "Feed anything humans eat.", "Overfeed your pet.", "Give only treats and no proper food."], "answer": 0 },
    { "type": "fill", "scene": "Preventive care.", "text": "Vet: Good pet health requires regular check-ups and _____ care at home.<br>Owner: I understand. I will be a responsible pet owner.", "blanks": ["preventive"], "hint": "avoiding problems before they start" }
  ],
  "laundry": [
    { "type": "fill", "scene": "At the laundry service.", "text": "Staff: We can _____ and iron your clothes. How many kilograms do you have?<br>Customer: I have about five kilograms.", "blanks": ["wash"], "hint": "clean with water" },
    { "type": "mcq", "scene": "Sorting laundry.", "text": "What is important when washing clothes?", "options": ["Separate whites from colors to prevent color bleeding.", "Wash everything together.", "Use too much detergent.", "Wash with very hot water always."], "answer": 0 },
    { "type": "conv", "scene": "Laundry services.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "How much does the _____ service cost?", "blank": true, "answer": "washing", "hint": "cleaning" },
      { "speaker": "Staff", "side": "left", "text": "It is fifty rupees per kilogram for basic washing." },
      { "speaker": "You", "side": "right", "text": "And how long does it take to _____ my clothes?", "blank": true, "answer": "deliver", "hint": "return / bring back" },
      { "speaker": "Staff", "side": "left", "text": "Usually within two days." }
    ] },
    { "type": "fill", "scene": "Stain removal.", "text": "Customer: This shirt has a ___ on it. Can you remove it?<br>Staff: Yes, we have special treatment for stubborn stains.", "blanks": ["stain"], "hint": "mark / spot" },
    { "type": "mcq", "scene": "Delicate fabrics.", "text": "How should delicate fabrics be handled?", "options": ["Wash gently with special care to preserve quality.", "Wash roughly like regular clothes.", "Use bleach on delicates.", "Dry clean delicates at home."], "answer": 0 },
    { "type": "fill", "scene": "Laundry pickup.", "text": "Staff: Your _____ is ready! All items are cleaned and folded nicely.<br>Customer: Thank you so much! You do excellent work.", "blanks": ["laundry"], "hint": "washed clothes" }
  ],
  "carwash": [
    { "type": "fill", "scene": "At the car wash.", "text": "Staff: Welcome! We will give your car a professional ___ today!<br>Owner: Great! My car is very dirty.", "blanks": ["wash"], "hint": "cleaning" },
    { "type": "mcq", "scene": "Choosing car wash packages.", "text": "Different car wash packages are available. What should you choose?", "options": ["Choose based on your budget and your car's condition.", "Pick the cheapest without considering quality.", "Ask for extras you don't need.", "Skip washing your car."], "answer": 0 },
    { "type": "conv", "scene": "Car wash process.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Will you also _____ my car?", "blank": true, "answer": "vacuum", "hint": "clean inside" },
      { "speaker": "Staff", "side": "left", "text": "Yes, we will vacuum and clean the interior thoroughly." },
      { "speaker": "You", "side": "right", "text": "And can you _____ the tires?", "blank": true, "answer": "shine", "hint": "make glossy" },
      { "speaker": "Staff", "side": "left", "text": "Of course! We will make your car sparkle!" }
    ] },
    { "type": "fill", "scene": "Car drying.", "text": "Staff: After washing, we _____ your car completely to prevent water spots.<br>Owner: That is very thorough service!", "blanks": ["dry"], "hint": "remove water" },
    { "type": "mcq", "scene": "Car maintenance after wash.", "text": "What is important after getting your car washed?", "options": ["Avoid driving in mud immediately, park carefully, maintain regular washing.", "Drive in muddy areas immediately.", "Park carelessly.", "Never wash again."], "answer": 0 },
    { "type": "fill", "scene": "Paying for car wash.", "text": "Staff: Your car wash and _____ service is complete! Would you like to pay now?<br>Owner: Yes, thank you for excellent service!", "blanks": ["detailing"], "hint": "thorough cleaning" }
  ],
  "repairshop": [
    { "type": "fill", "scene": "At the repair shop.", "text": "Technician: What is wrong with your ___? Let me take a look.<br>Customer: The screen is cracked and it won't turn on.", "blanks": ["phone"], "hint": "mobile device" },
    { "type": "mcq", "scene": "Repairing electronics.", "text": "When should you take your device to a repair shop?", "options": ["When it's damaged or malfunctioning and you can't fix it yourself.", "Only after trying to repair it dangerously yourself.", "When it still works perfectly.", "Never, just buy a new one."], "answer": 0 },
    { "type": "conv", "scene": "Getting a repair estimate.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "How much will the _____ cost?", "blank": true, "answer": "repair", "hint": "fixing" },
      { "speaker": "Technician", "side": "left", "text": "Let me diagnose the issue first. It usually takes about an hour." },
      { "speaker": "You", "side": "right", "text": "And how long will the _____ take?", "blank": true, "answer": "work", "hint": "repair process" },
      { "speaker": "Technician", "side": "left", "text": "About two to three days depending on parts availability." }
    ] },
    { "type": "fill", "scene": "Warranty on repairs.", "text": "Technician: All repairs come with a _____ guarantee. If it breaks again, we will fix it free!<br>Customer: That is reassuring!", "blanks": ["warranty"], "hint": "promise" },
    { "type": "mcq", "scene": "Backup during repairs.", "text": "What should you do before leaving your device for repair?", "options": ["Backup important data if possible.", "Leave data without backing up.", "Delete everything from your device.", "Take your device apart more."], "answer": 0 },
    { "type": "fill", "scene": "Receiving repaired item.", "text": "Technician: Your device is fixed and ready! We have tested everything to make sure it _____.<br>Customer: Thank you for your excellent work!", "blanks": ["works"], "hint": "functions properly" }
  ],
  "travelagency": [
    { "type": "fill", "scene": "At a travel agency.", "text": "Agent: Where would you like to _____ your vacation?<br>Customer: I am thinking about the mountains.", "blanks": ["spend"], "hint": "pass / enjoy" },
    { "type": "mcq", "scene": "Choosing a vacation destination.", "text": "What should you consider when choosing a destination?", "options": ["Weather, attractions, budget, distance, and your interests.", "Pick randomly without thinking.", "Choose only expensive destinations.", "Never plan ahead."], "answer": 0 },
    { "type": "conv", "scene": "Booking a trip.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "Can you help me ___ my flight to Goa?", "blank": true, "answer": "book", "hint": "reserve" },
      { "speaker": "Agent", "side": "left", "text": "Of course! When would you like to travel?" },
      { "speaker": "You", "side": "right", "text": "In December. And I also need _____ for three nights.", "blank": true, "answer": "accommodation", "hint": "place to stay" },
      { "speaker": "Agent", "side": "left", "text": "Great! I will find the best options for you." }
    ] },
    { "type": "fill", "scene": "Travel documents.", "text": "Agent: Make sure your _____ is valid for at least six months before traveling abroad!<br>Customer: I will check it today.", "blanks": ["passport"], "hint": "travel document" },
    { "type": "mcq", "scene": "Travel insurance.", "text": "Why is travel insurance important?", "options": ["It protects you from unexpected expenses and emergencies during travel.", "It is not necessary.", "Only for international trips.", "Only for expensive trips."], "answer": 0 },
    { "type": "fill", "scene": "Trip confirmation.", "text": "Agent: Here is your complete travel _____ including flights, hotel, and travel insurance!<br>Customer: Perfect! I am excited for my vacation!", "blanks": ["package"], "hint": "complete set" }
  ],
  "amusementpark": [
    { "type": "fill", "scene": "At an amusement park.", "text": "Staff: Welcome! Which _____ would you like to try first?<br>Child: I want to go on the roller coaster!", "blanks": ["ride"], "hint": "attraction / activity" },
    { "type": "mcq", "scene": "Amusement park safety.", "text": "What is important for safety at an amusement park?", "options": ["Follow all safety instructions, use seatbelts properly, stay within boundaries.", "Ignore safety signs.", "Distract others on rides.", "Remove safety equipment."], "answer": 0 },
    { "type": "conv", "scene": "Planning your day.", "dialogue": [
      { "speaker": "Child", "side": "right", "text": "There are so many rides! How do I _____ which ones to go on?", "blank": true, "answer": "choose", "hint": "decide / select" },
      { "speaker": "Parent", "side": "left", "text": "Let's check the map and prioritize. How tall are you?" },
      { "speaker": "Child", "side": "right", "text": "I am tall enough for most rides. Let's start with the _____ games!<br>", "blank": true, "answer": "carnival", "hint": "fun games" },
      { "speaker": "Parent", "side": "left", "text": "Great idea! We will win some prizes!" }
    ] },
    { "type": "fill", "scene": "Meeting point in the park.", "text": "Parent: If we get separated, let's meet at the main _____. Keep my phone number handy!<br>Child: Okay! I will be careful.", "blanks": ["gate"], "hint": "entrance" },
    { "type": "mcq", "scene": "Managing park time and energy.", "text": "How should you plan your amusement park visit?", "options": ["Prioritize rides, rest during peak hours, bring snacks and water.", "Do everything at once.", "Don't bring any supplies.", "Skip resting."], "answer": 0 },
    { "type": "fill", "scene": "Leaving the park.", "text": "Child: This was such an amazing ___! I want to come back again!<br>Parent: Yes! We had so much fun today.", "blanks": ["day"], "hint": "time / experience" }
  ],
  "picnic": [
    { "type": "fill", "scene": "Preparing for a picnic.", "text": "Parent: Let's pack some _____ for our picnic. Sandwiches, fruits, and juice!<br>Child: I am getting hungry already!", "blanks": ["food"], "hint": "things to eat" },
    { "type": "mcq", "scene": "Choosing a picnic location.", "text": "What makes a good picnic spot?", "options": ["Open space, shade, water access, safe environment, and scenic views.", "Dangerous or polluted areas.", "Very crowded places.", "Places with no facilities."], "answer": 0 },
    { "type": "conv", "scene": "Setting up the picnic.", "dialogue": [
      { "speaker": "Parent", "side": "left", "text": "Help me spread out the _____, please.", "blank": true, "answer": "blanket", "hint": "cloth to sit on" },
      { "speaker": "Child", "side": "right", "text": "Okay! Where should we put the food?" },
      { "speaker": "Parent", "side": "left", "text": "Keep it away from ants. Let's put it under this tree where it is _____.", "blank": true, "answer": "shaded", "hint": "covered from sun" },
      { "speaker": "Child", "side": "right", "text": "Perfect! This is going to be so much fun!" }
    ] },
    { "type": "fill", "scene": "Picnic activities.", "text": "Family: Let's play some games and enjoy the fresh _____ in nature!<br>Child: I love picnics so much!", "blanks": ["air"], "hint": "outdoor environment" },
    { "type": "mcq", "scene": "Picnic cleanup.", "text": "What is important when leaving a picnic spot?", "options": ["Pack all trash, leave no litter, restore the area to its original state.", "Leave trash behind.", "Damage plants and flowers.", "Pollute the environment."], "answer": 0 },
    { "type": "fill", "scene": "End of picnic.", "text": "Parent: Thank you all for a wonderful ___! Let's come back again soon!<br>Family: Yes! Let's make this a regular thing!", "blanks": ["outing"], "hint": "trip / excursion" }
  ],
  "directions": [
    { "type": "fill", "scene": "Asking for directions.", "text": "Stranger: Excuse me! Can you tell me how to get to the _____?<br>You: Of course! Follow this road straight ahead.", "blanks": ["station"], "hint": "railway / bus hub" },
    { "type": "mcq", "scene": "Using landmarks.", "text": "How do landmarks help with directions?", "options": ["They help you recognize where you are and navigate more easily.", "They don't help at all.", "They confuse you.", "Only professional guides need landmarks."], "answer": 0 },
    { "type": "conv", "scene": "Giving detailed directions.", "dialogue": [
      { "speaker": "Person", "side": "left", "text": "I am looking for the nearest _____. Can you help?", "blank": true, "answer": "hospital", "hint": "medical facility" },
      { "speaker": "You", "side": "right", "text": "Yes! Go straight for two blocks." },
      { "speaker": "Person", "side": "left", "text": "Then what? Should I turn left or _____?", "blank": true, "answer": "right", "hint": "opposite of left" },
      { "speaker": "You", "side": "right", "text": "Turn right at the traffic light. The hospital is on your left!" }
    ] },
    { "type": "fill", "scene": "Using compass directions.", "text": "Sign: The museum is to the _____ of the city center. You need to go north!<br>Traveler: Thank you for the clear instructions!", "blanks": ["north"], "hint": "direction / cardinal point" },
    { "type": "mcq", "scene": "Getting lost.", "text": "If you get lost, what should you do?", "options": ["Ask locals for directions, use a map, or call someone for help.", "Keep walking without asking.", "Get frustrated and give up.", "Go in random directions."], "answer": 0 },
    { "type": "fill", "scene": "Distance estimation.", "text": "Local: The beach is about three kilometers from here. It will take about _____ to walk there.<br>Visitor: Thank you! That helps me plan.", "blanks": ["30 minutes"], "hint": "time to walk" }
  ],
  "jewelry": [
    { "type": "fill", "scene": "At the jewelry shop.", "text": "Jeweler: Welcome! What _____ are you looking for today?<br>Customer: I need a bracelet for my sister's birthday.", "blanks": ["jewelry"], "hint": "ornaments like rings, bracelets" },
    { "type": "mcq", "scene": "Choosing jewelry materials.", "text": "What are common jewelry materials?", "options": ["Gold, silver, platinum, gemstones, and other precious materials.", "Only plastic.", "Only cheap metals.", "Only one type of material."], "answer": 0 },
    { "type": "conv", "scene": "Buying an ornament.", "dialogue": [
      { "speaker": "You", "side": "right", "text": "This necklace is beautiful! Is it made of _____?", "blank": true, "answer": "gold", "hint": "precious yellow metal" },
      { "speaker": "Jeweler", "side": "left", "text": "Yes, it is 18-karat gold. Pure and high quality." },
      { "speaker": "You", "side": "right", "text": "And do you have a _____ for it?", "blank": true, "answer": "certificate", "hint": "authentication document" },
      { "speaker": "Jeweler", "side": "left", "text": "Of course! All our jewelry comes with a certificate." }
    ] },
    { "type": "fill", "scene": "Jewelry care.", "text": "Jeweler: To keep your jewelry shiny, _____ it gently and store it safely.<br>Customer: Thank you for the care tips!", "blanks": ["clean"], "hint": "remove dirt" },
    { "type": "mcq", "scene": "Jewelry pricing.", "text": "What factors affect jewelry pricing?", "options": ["Material type, weight, design complexity, and gemstone quality.", "Only the shop location.", "Only the brand name.", "Random pricing."], "answer": 0 },
    { "type": "fill", "scene": "Jewelry customization.", "text": "Jeweler: We can _____ a special piece just for you! Tell us your design ideas!<br>Customer: That sounds wonderful!", "blanks": ["create"], "hint": "make / design" }
  ]
};