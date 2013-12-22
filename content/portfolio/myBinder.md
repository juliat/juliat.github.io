---
title: myBinder
number : 2
Date: Spring 2012
category : UX Design
tags : [User Research/Contextual Inquiry, Prototyping, UI Design, Ruby on Rails Development, Database Design]
image : /assets/images/mybinder/cover.png
description: myBinder is a curriculum sharing and management app I created for/with administrators and teachers at Pittsburgh Public Schools.
link : http://mybinder.herokuapp.com/courses/1
code : https://github.com/juliat/mybinder
kind: portfolio
---

## Clarifying Goals

For this project, I worked with the Science Curriculum Specialist and high school Physics teachers of Pittsburgh Public Schools. Initially, the Curriculum Specialist had explained that he wanted to put the high school physics curriculum on a website.

### User Research

I conducted contextual interviews with the administrators and teachers for Pittsburgh Public Schools high school physics to understand how putting the high school physics curriculum online might better support teachers' and administrators' work.

![Focus Questions](/assets/images/mybinder/focus-questions.png)

![Some notes on paper copy of part of curriculum.](/assets/images/mybinder/annot-old-curric-doc.jpg)

My research clarified the goals for the curriculum website, including:

- making the curriculum more navigable for teachers
- allowing teachers to share their materials remotely and asynchronously
- allowing administrators to better monitor and support teachers' progress
- making it possible for non-teachers to create curriculum-aligned activities

### Buy or Build?

I and my partners at Pittsburgh Public schools seriously considered using an existing system to publish the curriculum online. The main reason we chose to build a custom app, in the end, was lack of support for sharing a *curriculum* among teachers (rather than lessons).

![Summary notes on other systems I reviewed.](/assets/images/mybinder/competitive-analysis.png)

## Interaction & UI Design

To design how the app would work, I had a hybrid approach. I sketched how the app might look and function together with teachers (participatory design). Aside from that, I used insights from the user research stage to create mockups based on each user type's priorities.

### Participatory Design Sketch

![Drawing co-created with a teacher.](/assets/images/mybinder/collab-sketch-with-allan-finch.png)

### Intermediate Mockups

<p>You can see complete, intermediate-stage mockups for the myBinder app with sticky-note annotations if you <a href="/assets/pdf/mybinder-annotated-intermediate-pdf-mockup.pdf" class="button">download this file</a>.</p>

![Annotated Paper Mockups](/assets/images/mybinder/an-mu-3.JPG)

### From Use Case to Interface

![Notes on Administrator Priorities](/assets/images/mybinder/notes-on-admin-dash.png)

![Notes on Teacher Priorities and UI Implications](/assets/images/mybinder/notes-and-sketch-for-teacher-dash.png)

![Notes about past curriculum structure changes (from an interview with a teacher).](/assets/images/mybinder/snippet-of-notes-from-interview-with-allan-finch.png)


## Implementation

![An Initial Sketch of the Database Design for this App](/assets/images/mybinder/initial-erd-sketch.png)

You can read [the code behind the myBinder application on Github](https://github.com/juliat/mybinder).
