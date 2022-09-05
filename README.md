Assignment 2 - Short Stack: Basic Two-tier Web Application using HTML/CSS/JS and Node.js  
===

Due: September 8th, by 11:59 AM.

This assignment aims to introduce you to creating a prototype two-tiered web application. 
Your application will include the use of HTML, CSS, JavaScript, and Node.js functionality, with active communication between the client and the server over the life of a user session.

Baseline Requirements
---

HTML:
- All pages should [validate](https://validator.w3.org)

CSS:
- CSS styling of the primary visual elements in the application
- CSS positioning and styling of the primary visual elements in the application:
    - Use of either a CSS grid or flexbox for layout
    - Rules defining fonts for all text used; no default fonts! Be sure to use a web safe font or a font from a web service like [Google Fonts](http://fonts.google.com/)

Deliverables
---

6. Modify the README to the specifications below, and delete all of the instructions originally found in this README.
7. Create and submit a Pull Request to the original repo. Label the pull request as follows: a2-gitusername-firstname-lastname


Sample Readme (delete the above when you're ready to submit, and modify the below so with your links and descriptions)
---

## https://a2-ngrumski.glitch.me/
- For this assignment I made a reaction tester game with a leaderboard. The user can click the larger button to start the test and then waits for it to turn green before clicking it. 
After completing the test, the user enters their name and the name, timing, and date data is sent to the server in a post request. On the server side a ranking is calculated compared
to the other times in the database. Then the datebase entries are sent back in the post response to update the local leaderboard. The user can play again to try to improve their time,
and if they receive a faster time it will be updated on the leaderboard. User can also delete times by clicking them in the leaderboard. They will be removed from the server when this
happens and new ranks will be calculated.
- The main HTML form used are buttons
- I used a flexbox for my layout
_ I used Roboto for my font


## Technical Achievements
- **One Page*: The game and leaderboard are updated and listed on the same page

### Design/Evaluation Achievements
- **Design Achievement 1**: 
