---
title: ChemCollective
number : 2
created_at: 2012-03-18
category : [UX Design]
tags : [UX Design,  Information Architecture, Web Design, Front-End Web Development, Back-End Web Development]
tools : [HTML & CSS]
image : /assets/images/chemcoll/chemcollective-homepage-no-msg.png
description: The ChemCollective provides free online resources for chemistry teachers and students. I redesigned the ChemCollective's logo and website, reengineered the backend of the site to use an MVC web framework, and consulted on the UI for their Virtual Lab.
link: http://chemcollective.org
---
## Creating a User-Centered Information Architecture

The ChemCollective was founded in 2000 as the IrYdium project. The ChemCollective's primary resource in 2000 was [the Virtual Lab](http://chemcollective.org/vlab/vlab.php) (and it is still). However, over the years, the teaching resources offered by the ChemCollective grew in variety and scope. This growth overwhelmed the original site's design, making it difficult to understand and to navigate, especially for first-time users.

![Screenshot of the old ChemCollective Homepage](/assets/images/chemcoll/old-homepage.png "The ChemCollective Homepage prior to this redesign project.")

### Effective Communication on the Homepage

![Initial Evaluation of the Homepage, an Annotated Screenshot](/assets/images/chemcoll/1-initial-homepage-eval.png)

Before the redesign project began, I looked at the ChemCollective's homepage to generate some initial ideas on how to improve the site. Some of the biggest issues I noted were the poor visual hierarchy of the page, and its failure to quickly communicate what the whole site was about. 

#### Understanding The Audience

To improve the homepage, and as part of the larger redesign, I needed to understand the audience for the ChemCollective website, as well as their goals. To do so, I spoke with long-time members of the ChemCollective team and delved into the site's web analytics data.

Speaking with the ChemCollective team, I learned that the ChemCollective site had three basic types of visitors:

1. **Chemistry Teachers** looking for resources to use in their class.
2. **Chemistry Students** looking up activities assigned by their teachers, or looking for tutorials to help them in their classes.
3. **Researchers** who want to learn more about the ChemCollective's research on chemistry learning and virtual learning tools.

In terms of quantity, students made up the bulk of visitors to the site. However, in terms of priority, teachers were the most important audience. Researchers were an extreme minority.

Web analytics confirmed some of what I had learned from talking to the ChemCollective team. The most viewed pages on the site were:

1. The Virtual Lab
2. The List of Problems for the Virtual Lab
3. The Find Activities Page
4. Tutorials for Students
5. The Interactive Periodic Table
6. Stoichiometry Tutorials

#### Goals for the New Homepage

Based on the evaluation of the old design, and talks with the ChemCollective team, we set some goals for the new homepage:

- Better communicating what the site offers to new visitors.
- Providing quick and prominent access to activities and resources.
- Creating a better visual hierarchy&mdash;making it skimmable.

#### Exploring Design Options

![Sketches of the new homepage](/assets/images/chemcoll/homepage-sketches-collage.png)

I explored various design options for the homepage. Some were focused on directing users to parts of the site based on their role (student, teacher, researcher). Others highlighted the different types of activities the site offered. The sketches were quick ideas based on what I understood about the site's, but those ideas also changed as I developed the information architecture for the rest of the site.

![More developed sketch of the homepage](/assets/images/chemcoll/9-ui-sketch.png)

Above is a more developed sketch of the homepage. It includes the important navigation elements of the site. It also identifies a trade-off on the homepage. Featuring basic information about what the ChemCollective offers is more important for first-time visitors (so they can understand what the site has), but featuring various resources is more important for repeat visitors (so they can discover new things).

![Wireframe closer to the final design](/assets/images/chemcoll/12-homepage-sketch.png)

This 'final' sketch for the homepage outlines the layout for the new design. The main navigation on the left provides access to activities and resources. The homepage has four main content areas&mdash;a blurb explaining what the site is about, quick links to the most popular resources, a featured resource, and a news section.

#### The New Design

![Screenshot of the new homepage](/assets/images/chemcoll/chemcollective-homepage-no-msg.png)

Examples of how the new design supports the goals we developed for the new homepage:

- **Better communicating what the site offers to new visitors:** The headline 'Resources to Teach and Learn Chemistry' practically shouts the site's purpose. 
- **Providing quick and prominent access to activities and resources:** The left navigation provides instant access to the site's resources (removing the intermediate 'Find Activities Page'.) Quick links give veteran users quick access to popular resources.
- **Creating a better visual hierarchy&mdash;making it skimmable:** there are clear sections on the homepage and their importance is clear based on the visuals (e.g., type size and styling highlight the headline, quick links, featured resources, and resource navigation).

### Making Resources More Discoverable

One primary goal for the redesign of the ChemCollective site was to make the resources it offers more discoverable for both new and old users.

On the old ChemCollective website, the 'Find Activities' page linked to static lists of different resource types.
![Screenshot of the old Find Activities page](/assets/images/chemcoll/old-find-activities-page.png)

Lists of resources, like Virtual Lab problems, were organized by topic in one long page.
![Screenshot of old Virtual Lab activities list](/assets/images/chemcoll/old-vlab-activities-list.png)

#### How to Organize Chemistry Resources: Topics and Types

![Card sort of various ChemCollective Resources](/assets/images/chemcoll/5-cardsort.png)

![Quick notes on different topics and types of resources](/assets/images/chemcoll/7-chem-topics-types.png)


## Graphic Design Refresh

new logo, new brand overall
The new logo is meant to better communicate the identity of the ChemCollective in terms of both personality and purpose. The new colors and type better reflect the friendly and vibrant personality of the ChemCollective. By incorporating a graduated cylinder (in the wordmark) and the equilibrium symbol, the new logo better communicates the purpose of the ChemCollective-- to provide resources for teaching and learning chemistry. 

## Backend: Moving to an MVC Framework

database design, choice of CodeIgniter php framework, front end html/css/js

## Envisioning a New Virtual Lab

The flagship product for the ChemCollective is [the Virtual Lab](http://chemcollective.org/vlab/vlab.php)

consulting on vlab: sketches of new vlab interface
