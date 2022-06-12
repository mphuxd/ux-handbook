---
sidebar_position: 1
title: Examples
---

import Question from "@site/src/components/Questions";

# Design Exercise Examples

## Table of contents

- <Question question="Bus Kiosk Station"/>
- <Question question="Airport Restaurant Order"/>
- <Question question="Hotel Booking and Reservation"/>
- <Question question="Online slot machine."/>



### Bus Kiosk Station

This design challenge is from <a href="https://library.gv.com/how-to-interview-a-designer-with-the-perfect-design-exercise-2c99e6646612">"How to evaluate a designer with a design exercise" by Braden Kowitz</a>.

Imagine we’re designing a kiosk at a transit stop. Its purpose is to let regular commuters refill their transit cards. We have an engineer coming in 20 minutes and he needs a spec. In that time, we need to explain exactly how this kiosk should work."

We’ve provided a design goal, user description, and time limit. Now start drawing the machine on the whiteboard and explain as we go.

<img src="/img/bus-kiosk.jpg" />

- This machine lets regular commuters re-fill their transit card with cash.
- There are four push buttons, and a 40-character text display next to each button.
- There’s a card reader, bill acceptor, and dollar-coin return.

If you ask the right questions, you find some constraints are:

<details>
<summary>Additional Constraints</summary>
<li>Actually the max allowed on a card is $50.</li>
<li>That dot on the bill acceptor? Oh yeah, that’s a light we can turn on and off.</li>
<li>The machine is right next to a station agent, who can help with anything.</li>
</details>

##### Reference & Answer

- https://library.gv.com/how-to-interview-a-designer-with-the-perfect-design-exercise-2c99e6646612

### Airport Restaurant Order

This design challenge is from <a href="https://uxdesign.cc/5-steps-to-master-a-whiteboard-design-challenge-6ecbe9ec38b7">"5 steps to master whiteboard design challenge" by Zhenshuo Fang</a>.

Design an ordering interface for an airport restaurant.

<img src="https://cdn1.vox-cdn.com/thumbor/neJR1Pjm2e9UG-Ac6IS8tAix33I=/cdn0.vox-cdn.com/uploads/chorus_asset/file/3461336/newark2.0.jpeg" />

As practice, write down some questions about the scenario before looking at the constraints.

<details>
<summary>Additional Constraints</summary>
<li>What is the goal of the design? A: An efficient, hassle-free and fun dining experience for busy travelers</li>
<li>What kind of airport? A: International airport</li>
<li>What kind of restaurant? A: A dine-in restaurant with food and drinks</li>
<li>What kind of device? A: Tablet devices on each table</li>
</details>

These should be enough to get you started.

##### Reference & Answer

- https://uxdesign.cc/5-steps-to-master-a-whiteboard-design-challenge-6ecbe9ec38b7


### Hotel Booking and Reservation
Design a hotel booking and reservation system for a travel agency. 

<details>
<summary>Additional Constraints</summary>
<li>Responsive website.</li>
<li>The primary market is United States.</li>
<li>There are thousands of hotels to pick from.</li>
<li>Hotels may already have reservations or unavailable during certain dates.</li>
</details>


<details>
<summary>What I'm looking for</summary>
<li>How do users find the hotel? Search? Through navigation?</li> 
<li>If search, how do they handle forms for simple and complex inputs? Do they account for all necessary inputs like number of guests, adults, children, check-in date, check-out. Do they make fields required?</li>
<li>Do they account for users who are just window shopping?</li>
<li>Do they show the rates for the different types of rooms? Availability?</li>
<li>How do they handle the checkout process? Do they make users sign in or create an account?</li>
<li>Do they end the flow after booking? Or do they redirect the users?</li>
<li>Do they talk about additional content that might be displayed or useful to the user outside of the necessary/minimum requirements needed to book? Travel warnings, regulations, hotel rules, advice, tips, things to know, weather warnings, activities, map & location, etc. </li>
<li>Do they express any technical knowledge about APIs? Loading times & loading screens?</li>

</details>



### Online Slot Machine

Design the UI for a slot machine.

<img src="/img/slots.jpg" />

- Don't worry about the specifics of win conditions & game mechanics.
- When the slots meet a certain win condition, trigger a special game event where players can win more money.
- For the game event, the UI should indicate the number of free spins left and the current win multiplier.

<details>
<summary>Additional Constraints</summary>
<li>It's for a machine in a casino.</li>
<li>The primary market is United States.</li>
<li>It should be fun, addictive, and profitable for the casino.</li>
<li>It has one large digital display & built-in speakers.</li>
<li>It has touch controls and a single physical circular button that can be lit up.</li>
<li>The machine reads a card to withdraw and deposit the players credits.</li>
<li>The user should be able to change the bet amount. Use the denominations 10, 20, 50, 100.</li>
<li>There should be at least 3 reels but no more than 5.</li>
<li>There should be at 5 different symbols on a reel but no more than 8.</li>
</details>

<details>
<summary>What I'm looking for</summary>
Slot designs can reveal a significant amount of their knowledge of dark patterns, human psychology & cognition, design ethics, and demonstrates how powerful UX can be.
<li>Do they make use of color, sound, and motion? How do they change over time?</li> 
<li>How did they decide which symbols to use? How many reels?</li>
<li>Does it have all the necessary controls & displays? Spin, increase & decrease bet amount, current bet amount, current balance, previous amount won, amount won, volume controls, game information</li>
<li>Do they understand the underlying psychology and behavior?</li>
<li>What do they do to make the game addictive? Fun? Do they use a purposeful value hierarchy or any targeted messaging? Do they talk about visuals or animations?</li>
<li>Do they account for all use cases & tasks? Insert card, spin, increase bet, decrease bet, return card, wins, game events, not enough credits, game error.</li>

</details>

<details>
<summary>Follow up question</summary>
Technology is increasingly designed to be addictive.

<li>How could you make it less addictive?</li>
<li>How would you advocate for these changes in your organization?</li>
</details>

##### References

- https://www.theguardian.com/australia-news/datablog/ng-interactive/2017/sep/28/hooked-how-pokies-are-designed-to-be-addictive




<!-- - <Question question="Consulting App for Doctors"/> 
How would I design a dashboard for analytic data. 
Design a mobile checkout process exercise-->