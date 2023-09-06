# Harry Potter Quiz

Think you know all there is to know about Harry Potter Books?

Take this Harry Potter fan quiz to test you your knowledge.

![Am I Responsive](https://github.com/JosephOConnell/HarryPotterQuiz/blob/main/assets/images/README%20Images/hp-am-i-responsive.png)

### About This Quiz

This quiz was created using JavaScript, HTML, and CSS.
The main purpose of this project was to create a user-friendly quiz website dedicated to testing the users knowledge of the Harry Potter Book Series.
It is a multiple-choice quiz with 40 questions only a true Potter fans would know.
The quiz questions are displayed at random and is done 10 question at a time. I did 10 questions at a time to increase replayability.
I also decided to not show the correct answer if the user gets the question wrong. Again this adds the chance a player might replay the quiz and can prevent the user from cheating on some questions.

![PageSpeed Insights Lighthouse Results](https://github.com/JosephOConnell/HarryPotterQuiz/blob/main/assets/images/README%20Images/hp-lighthouse-pagespeeds.png)

![Lighthouse Results](https://github.com/JosephOConnell/HarryPotterQuiz/blob/main/assets/images/README%20Images/hp-lighthouse.png)

### Features

- **Username**
  - The username function gives the user a choice to enter a name. If the user enters a name it will be used at the end in the final score messages.
  - I made this optional as I know getting the user into the content of the website quick is extremely important as lot of users don't want to put any details into websites like these and usually are doing it for a quick bit of fun.
  
  ![Username & Start Button](https://github.com/JosephOConnell/HarryPotterQuiz/blob/main/assets/images/README%20Images/hp-user-name.png)

- **Questions & Answers**
  - I put in 40 questions that are choosen at random.
  - The questions were reaserched and created by my wife who is a big fan of the Harry Potter Books.
  - Multiple choice answers that get bigger if you hover over them.
  - Answers will turn green if the answer is correct and red if it is wrong.
  - Answer buttons will be disabled after answer is picked to prevent cheating.

![Correct Answer, Score & Next Button](https://github.com/JosephOConnell/HarryPotterQuiz/blob/main/assets/images/README%20Images/hp-correct-answer.png)

- **Start, Next & Replay Buttons**
  - The start button is only used when the user is choosing to pick a name.
  - The next button is to continue on to the next quextions.
  - If the user does not pick an answer the next button is disabled until an asner is picked.
  - After 10 questions the start button is brought back but with new inner text "Relpay".
  - When clicked the replay button will start the quiz again.

![Wrong Answer, Score & Next Button](https://github.com/JosephOConnell/HarryPotterQuiz/blob/main/assets/images/README%20Images/hp-wrong-answer.png)

- **Score & Final Score**
  - When an aswer is correct the score will increment by 1.
  - If the answer is wrong the score will stay at what ever score the user already had.
  - When the user gets to the end of the quiz the score will be added up and the final score will show a message.
  - The final score has 3 different messages depending on hoe many question you got right.
  - if the user entered a username the message will look more personalised.

![Final Score & Replay](https://github.com/JosephOConnell/HarryPotterQuiz/blob/main/assets/images/README%20Images/hp-score-replay.png)

### Testing

| **TEST**                            | **ACTION**                                       | **EXPECTATION**                                              | **RESULT**        |
| ----------------------------------- | ------------------------------------------------ | ------------------------------------------------------------ | ----------------- |
| Username & Start Button | Start quiz with or without entering a name | Brings user to the first question | Pass |
| Next Button | Press on Next Button without picking an answer | Quiz should not procceed | Pass |
| Next Button | Press on Next Button picking an answer | Quiz should procceed | Pass |
| Answer Buttons | Choosing a correct and incorrect answer | Should disable all other answer buttons and show green or red depending on the answer | Pass |
| Correct Answer Score | Picked a correct answer | Score should increment by 1 | Pass |
| Incorrect Answer | Picked an incorrect answers | Correct answers should stay the same | Pass |
| Final Score | Got 3 different final scores | 3 different messages depending on the score | Pass |
| Replay Button | Press the replay button | Quiz, Score and Question numbers should all reset | Pass |
| Icons | Click on the icons | Opens a new page to my Linkedin or email | Pass |
| Responsivness | Screen resizing | Page should scale to different sizes | Pass |

- Tested the responsiveness of my site on [Am I Responsive?](https://ui.dev/amiresponsive?url=https://josephoconnell.github.io/HarryPotterQuiz/)

### Validator Testing

- index HTML
  0 errors returned when passing through the official [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjosephoconnell.github.io%2FHarryPotterQuiz%2F)
  ![HTML Vidator](https://github.com/JosephOConnell/HarryPotterQuiz/blob/main/assets/images/README%20Images/hp-w3c-html.png)

- style CSS
  0 errors was found when passing through the official [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjosephoconnell.github.io%2FHarryPotterQuiz%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  ![CSS Validator](https://github.com/JosephOConnell/HarryPotterQuiz/blob/main/assets/images/README%20Images/hp-w3c-css.png)

- script Javascript
  0 errors was found when passing through the official [JSHint](https://jshint.com/)
  ![Javascript Validator](https://github.com/JosephOConnell/HarryPotterQuiz/blob/main/assets/images/README%20Images/hp-jshint.png)

### Unfixed Bugs

- As of now I have no bugs.

### Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - Create a GitHub repository, Then clone the Code Institute Template into it.
  - In the Code Institute page select "Go to IDE" (CodeAnywhere) and creat a new workspace.
  - Then copy the repository into the workspace.
  - Now go to to the repository page and navigate to the Settings tab.
  - From the source section drop-down menu, I selected the Master Branch.
  - Once the master branch was selected, the page automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - [Harry Potter Quiz](https://josephoconnell.github.io/HarryPotterQuiz/)

### Content and Media Credits

- **Quiz**
  - For the QUIZ I watched numerous videos on youtube: [GreatStack](https://www.youtube.com/watch?v=PBcqGxrr9g8), [WebDevSimplified](https://www.youtube.com/watch?v=riDzcEQbX6k&t=1298s), [James Q Quick](https://www.youtube.com/watch?v=zZdQGs62cR8&t=277s), [Kindson The Tech Pro](https://www.youtube.com/watch?v=2Bpiluefkh8&t=74s), [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2000s) and [Awais Mirza](https://www.youtube.com/watch?v=jvk1pFNqXaw&t=1053s).
  - I also used the Code Institute Slack channel, [Stack Overflow](https://stackoverflow.co/), [GeeksforGeeks](https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/), [W3Schools](https://www.w3schools.com)

- **Images, Fonts and Icon**
  - I got the HP Crest image from [Harry Potter Crest Image](https://wallpaperaccess.com/harry-potter-gryffindor-crest)
  - I got the HP Castle image from [Harry Potter Castle Image](https://www.peakpx.com/en/hd-wallpaper-desktop-abbxn)
  - The Favicon was taken from [Iconfinder](https://www.iconfinder.com/search?q=harry%20potter)
  - The icons were taken from [Font Awesome](https://fontawesome.com/)
  - The fonts were taken from [Google Fonts](https://fonts.google.com/)
