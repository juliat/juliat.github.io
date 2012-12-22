---
title: night night Bedtime Calculator
number : 7
created_at: 2011-09-01
category : [UX Design]
tags : [UX Design, Web Design, Responsive Web Development]
tools : [PHP, HTML, CSS]
image : /assets/images/nightnight/3.jpg
description: Bedtime calculators tell you the best time to wake up at, based on the average length of human sleep cycles. I designed and developed mobile-friendly bedtime calculator website.
code : https://github.com/juliat/nightnight
link : http://www.contrib.andrew.cmu.edu/~jteitelb/nightnight/index.php
---

## I Don't Use My Laptop in Bed

I don't use my laptop in bed. So when I decided to try using a bedtime calculator to see if it would make waking up easier, I was disappointed that none of the bedtime calculators I could find online could be used on a mobile device.

![Sleepytime is one popular bedtime calculator.](/assets/images/nightnight/sleepytime.png)

sleepyti.me was the most popular online bedtime calculator when I started looking for one. I used it for a while, but it did not work on a mobile device, and I had a few other problems with it.

### I'm An HTML Snob

![sleepytime's code](/assets/images/nightnight/sleepytime-code.png)

The first problem I had with sleepyti.me was the way it was implemented. Because the site didn't work on mobile devices, I decided to look at the source code to figure out why.

sleepyti.me uses tables to lay out the site, so it's layout can only adapt so much; it can't shift drastically to accomodated ifferent displays.

As I looked at the code, I was disappointed to see that it also used inline styles and used javascript to generate all of the HTML on the page. The site, while great, violated web standards and principles of separating content, style, and interactivity. And I'm an HTML snob, so I decided to make something that would be accessible, and implemented with best practices.

### Making nightnight accessible and responsive

I implemented night night using HTML, CSS, and PHP. Following the principle of progressive enhancement, I did not initally incorporate javascript into the site. I later used it to detect users' timezones to adjust calculations for wakeup times.

You can see [the code behind night night on github](https://github.com/juliat/nightnight).

## So Bright! It Burns!

The last problem I had with sleepyti.me had to do with its visual design. It has a bright white background. It's not an ugly design, but practically speaking, right before I go to bed, looking at a bright white light doesn't help you go to sleep.

### nightnight's Visual Design

![The screen in nightnight that tells you when to wake up.](/assets/images/nightnight/wakeuptimes.jpg)

So, when I designed night night, I made the background a dark blue/black, with off white text. It makes the site easy to look at in the dark (not too bright), and recalls the night sky. I chose 'Nunito' as the font for nightnight because its rounded and bold strokes made it legible on a dark background and gentle-feeling. Similarly, I used the handwritten typeface 'Annie Use Your Telescope' for the logotype to add to the app's soothing feeling.

