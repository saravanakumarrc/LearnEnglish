# ReflectLearn — English for Kids

An interactive web-based English learning application designed to teach kids practical, real-world English through scenario-based lessons and engaging question formats.

## Overview

**ReflectLearn** is a modern, visually engaging learning platform that makes English education fun and practical. The app focuses on teaching real-life conversational English across multiple everyday scenarios like hotels, train stations, hospitals, schools, restaurants, and more.

### Key Features

- **7 Real-World Topics** covering everyday situations where English is commonly used
- **Multiple Question Types**:
  - **Fill-in-the-Blank** — Complete sentences with missing words
  - **Multiple Choice (MCQ)** — Choose the correct response
  - **Conversational** — Interactive dialogue-based learning with context
- **Contextual Learning** — Each question is set in a realistic scenario (e.g., "Checking into a hotel")
- **Hint System** — Helpful hints for each question to guide learners
- **Dark Theme UI** — Modern, kid-friendly dark interface with vibrant accent colors
- **Responsive Design** — Works seamlessly on desktop and mobile devices

## App Structure

### File Organization

```
LearnEnglish/
├── index.html          # Main HTML file with UI structure and styling
├── topics.js           # Topic definitions (names, icons, colors)
├── topics.json         # Topic data in JSON format
├── questions.js        # Complete question database
├── questions.json      # Question data in JSON format
└── README.md           # This file
```

### Topics Covered

1. **🏨 At the Hotel** — Check-in, room service, check-out
2. **🚂 At the Station** — Booking tickets, finding platforms, boarding
3. **🏥 At the Hospital** — Appointments, symptoms, prescriptions
4. **🏠 At Home (Guests)** — Welcoming guests, hospitality
5. **🏫 At School** — Classroom interactions (extensible)
6. **🛒 At the Market** — Shopping and transactions (extensible)
7. **🍽️ At the Restaurant** — Ordering food and dining (extensible)

## Question Types Explained

### 1. Fill-in-the-Blank (type: "fill")
Students complete sentences by filling in missing words. Each question includes hints to help.

**Example:**
```
Receptionist: Good evening! Do you have a ___?
Guest: Yes, I made a reservation under the name Ravi.
Answer: "reservation" | Hint: "booking"
```

### 2. Multiple Choice (type: "mcq")
Students choose the most appropriate response from four options.

**Example:**
```
The waiter asks: "Would you like to see the menu?" You say:
A) Yes, please. I am hungry.
B) No, I do not like food.
C) Menu is bad.
D) I want sleep now.
Answer: A
```

### 3. Conversational (type: "conv")
A multi-turn dialogue where students fill in their part of the conversation or identify the correct response within context.

**Example:**
```
Clerk: Where would you like to go?
You: I would like to go to _____, please.
Clerk: The next train leaves at 3 o'clock.
You: How much is the _____?
Answers: ["Mumbai", "fare"]
```

## Data Structure

### Topics (`topics.json` / `topics.js`)
```json
{
  "id": "hotel",
  "name": "At the Hotel",
  "icon": "🏨",
  "color": "#fca85c"
}
```

### Questions (`questions.json` / `questions.js`)
Each question contains:
- **type** — Question type (fill, mcq, conv)
- **scene** — Context/scenario description
- **text** — Question text (for fill/mcq)
- **dialogue** — Array of dialogue turns (for conversational type)
- **blanks** — Words to fill in (for fill type)
- **options** — Multiple choice options (for mcq type)
- **answer** — Correct answer or answer index
- **hint** — Helpful hint for the learner

## User Interface

### Color Scheme
- **Primary Accent** — #fca85c (Warm Orange)
- **Dark Background** — #0d0d14 (Deep Blue-Black)
- **Surface Layers** — #16161f to #252534 (Graduated Grays)
- **Text** — #f0f0f8 (Off-White)
- **Status Colors**:
  - Green (#5cfca8) — Correct
  - Red (#fc5c7d) — Incorrect
  - Blue (#5ca8fc) — Information

### Font Family
- **Headings** — Nunito (Bold, 700-900 weights)
- **Body** — Nunito Sans (Regular, 400-600 weights)

## How to Use

1. **Open the app** — Open `index.html` in a web browser
2. **Select a topic** — Click on any topic card (Hotel, Station, Hospital, etc.)
3. **Answer questions** — Complete the questions using your preferred format
4. **Get feedback** — Immediately see if your answer is correct
5. **Use hints** — Click the hint button if you're stuck
6. **Progress through lessons** — Continue with more scenarios and question types

## Technology Stack

- **Frontend** — Pure HTML5, CSS3, JavaScript (Vanilla)
- **Data Format** — JSON for topics and questions
- **Styling** — CSS Grid/Flexbox for responsive layout
- **Fonts** — Google Fonts (Nunito, Nunito Sans)
- **No Dependencies** — Fully self-contained, runs in any modern browser

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Extensibility

The app is designed to be easily extended:

### Add New Topics
1. Add topic to `topics.json` with unique ID, name, icon, and color
2. Create corresponding questions in `questions.json` with matching topic ID
3. App will automatically display the new topic

### Add New Questions
1. Add question object to the appropriate topic array in `questions.json`
2. Follow the existing question structure (type, scene, text/dialogue, answers, hints)
3. Questions are immediately available in the lesson

## Educational Goals

ReflectLearn helps young learners:
- ✅ Learn practical, conversational English
- ✅ Understand real-world usage contexts
- ✅ Build confidence in English communication
- ✅ Improve vocabulary through contextual learning
- ✅ Practice correct sentence structures and responses
- ✅ Develop listening and reading comprehension

## Future Enhancements

- Audio pronunciation guides
- Progress tracking and statistics
- Spaced repetition algorithm for review
- Gamification (points, badges, leaderboards)
- Teacher dashboard for monitoring student progress
- Mobile app version
- More topics and extended question banks
- Difficulty levels (Beginner, Intermediate, Advanced)

## License

This project is open-source and available for educational use.

---

**Made with ❤️ for English learners everywhere**
