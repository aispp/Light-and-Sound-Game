# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Aisling Florencio Pimentel**


## Required Functionality

The following **required** functionality is complete:

* [ Y ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ Y ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ Y ] Game buttons each light up and play a sound when clicked. 
* [ Y ] Computer plays back sequence of clues including sound and visual cue for each button
* [ Y ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ Y ] User wins the game after guessing a complete pattern
* [ Y ] User loses the game after an incorrect guess

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

[Coolors.co - used to generate colors for background and font. Also, was used in order to verify readability.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators - used to verify I was using the correct operators.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

[A challenge I encountered creating this program was understanding how the JavaScript AudioContext worked. I acknowledge it was not strictly necessary to look at the attached link and understand the logistics of the implementation, but I was curious as to how it made things work and why everything was happening the way it did. To satisfy this curiosity, I started by reading the Web Docs on AudioContext and exploring its methods. However, I realized that my knowledge of web APIs was not as broad as I thought it was, which made some of the documentation difficult to follow. To overcome this, I experimented with small code snippets, adjusting parameters in real-time to observe how changes affected the output. The biggest challenge was making sense of how AudioContext processes sounds in relation to currentTime. I found that experimenting with small code snippets and tweaking parameters in real-time helped my understanding. I also drew comparisons to other libraries I had used in C++, which helped me understand how JavaScript approaches media processing differently. By the end of the project, I would not say I am an expert, but I now have a much stronger grasp of AudioContext and a newfound appreciation for how JavaScript handles audio. This experience also reinforced the importance of active experimentation when learning new programming concepts, as reading documentation alone was not sufficient for full comprehension. Moving forward, I plan to continue exploring web APIs and different processing techniques, as they offer a variety of possibilities for interactive applications. While I am still in the process of learning JavaScript, this project has deepened my interest in the language and encouraged me to explore its capabilities even further.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

[How do you ensure that a website is fully accessible to users with disabilities beyond just adding alt text for images?
How does color contrast affect web accessibility, and how can developers ensure proper contrast without compromising design?
If you want to reach all audiences what is the best design to go for?
What are the things that impact website load time, and how do developers tackle these?
Some people might use screen readers or website interpreters, how do we make sure that these tools are able to read the webpage?
With so many libraries and frameworks available for web development, how do developers determine which one is the best fit for a particular project? What factors should be considered when making this decision?
Do you need specific licenses or registrations to deploy a website?
How do teams ensure code consistency when multiple developers are working on the same project?
What are the most effective debugging techniques for JavaScript and web applications?
How does one minimize downtime?
How do developers ensure that animations and transitions are smooth?
How can a web application manage millions of users without performance issues?]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

[If I had more time to work on the project, I would focus on both improving the functionality and enhancing the user experience. First, I would rearrange the buttons to ensure everything is centered for a cleaner, more visually appealing layout. I would also create a starting page to introduce the game and provide clear instructions. Adding a "play again" option, along with a tracker to keep count of wins, would help improve replayability. I would also make the styling more “bubbly” to create a fun and engaging visual theme. To enhance interactivity, I would change the sounds of the buttons to make them more appealing, adding a variety to the patterns for an extra challenge. I would also implement a difficulty setting and add different language options to make the game accessible to a broader audience. I would create a winning tracker to show progress and achievements. Also design a mode where the game keeps going with increasing difficulty as turns progress, offering a challenge for players. I would add a versus mode where players can compete against a robot. The robot would simulate its own moves based on the difficulty level, providing a challenge for players who want to test their skills.]

## Video Walkthrough 

Add your screen recordings for specified implemented features here:

[losing screen recording](https://www.loom.com/share/c3ae6ff8cd274adca176875617d0e7a9?sid=8713d1ed-b0b3-4472-95f5-971f0c9b8f21)

[winning screen recording](https://www.loom.com/share/b7ae89f5be5b45d0bc89a7e0b45816ee?sid=299a8f82-78b9-4ffc-9cf6-282487f264ce)

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/85b7dc64de5c4904934891be954cb198?sid=855adaad-75d3-4407-89cc-e935f5556502)


## License

    Copyright Aisling Florencio Pimentel
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.