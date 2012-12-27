---
title: ChemCollective
number : 2
created_at: 2012-03-18
category : [UX Design]
tags : [UX Design,  Information Architecture, Web Design, Front-End Web Development, Back-End Web Development]
tools : [HTML & CSS]
image : /assets/images/chemcoll/chemcollective-homepage-no-msg.png
description: The ChemCollective provides free online resources for chemistry teachers and students. I redesigned the ChemCollective's logo and website, reengineered the backend of the site to use an MVC web framework, and consulted on the interface for their Virtual Lab.
link: http://chemcollective.org
---
## Creating a User-Centered Information Architecture

The ChemCollective was founded in 2000 as the IrYdium project. The ChemCollective's primary resource in 2000 was [the Virtual Lab](http://chemcollective.org/vlab/vlab.php). However, over the years, the teaching resources offered by the ChemCollective grew in variety and scope. This growth overwhelmed the original site's design, making it difficult to understand and to navigate, especially for first-time users.

![The ChemCollective Homepage prior to this redesign project.](/assets/images/chemcoll/old-homepage.png)

## Effective Communication on the Homepage

![My initial evaluation of the homepage (an annotated screenshot)](/assets/images/chemcoll/1-initial-homepage-eval.png)

Before the redesign project began, I looked at the ChemCollective's homepage to generate some initial ideas on how to improve the site. Two of the biggest issues I noted were the poor visual hierarchy of the page, and its failure to quickly communicate what the whole site was about. 

### Understanding The Audience

To improve the homepage, and as part of the larger redesign, I needed to understand the audience for the ChemCollective website, as well as their goals. To do so, I spoke with long-time members of the ChemCollective team and delved into the site's web analytics data.

Speaking with the ChemCollective team, I learned that the ChemCollective site had three basic types of visitors:

1. **Chemistry Teachers** looking for resources to use in their class.
2. **Chemistry Students** looking up activities assigned by their teachers, or looking for tutorials to help them in their classes.
3. **Researchers** who want to learn more about the ChemCollective's research on chemistry learning and virtual learning tools.

In terms of quantity, students made up the bulk of visitors to the site. However, in terms of priority, teachers were the most important audience. Researchers made up a small minority of visitors, and ranked lower in priority than either students or teachers.

Web analytics confirmed much of what I had learned from talking to the ChemCollective team. The most viewed pages on the site were:

1. The Virtual Lab
2. The List of Problems for the Virtual Lab
3. The Find Activities Page
4. Tutorials for Students
5. The Interactive Periodic Table
6. Stoichiometry Tutorials

The number of visits to the Virtual Lab page confirmed that students made up the bulk of visitors, since teachers often link their students to the Virtual Lab directly. The 2nd and 3rd ranked pages supported my assessment that teachers were the second largest and most important audience of the site, since those two pages were where the ChemCollective directed teachers looking for activities to use.

### Goals for the New Homepage

Based on the evaluation of the old design, and talks with the ChemCollective team, we set some goals for the new homepage:

- Better communicating what the site offers to new visitors.
- Providing quick and prominent access to activities and resources.
- Creating a better visual hierarchy&mdash;making it skimmable.

### Exploring Design Options

![Many early sketches of the new homepage, exploring different ways to introduce visitors to the site.](/assets/images/chemcoll/homepage-sketches-collage.png)

I explored various design options for the homepage. Some were focused on directing users to parts of the site based on their role (student, teacher, researcher). Others highlighted the different types of activities the site offered. The sketches were quick ideas based on what I understood about the site's, but those ideas also changed as I developed the information architecture for the rest of the site.

![A more developed sketch of the homepage.](/assets/images/chemcoll/9-ui-sketch.png)

The more developed sketch shown above includes the important navigation elements of the site. It also identifies a trade-off on the homepage. Featuring basic information about what the ChemCollective offers is more important for first-time visitors (so they can understand what the site has), but featuring various resources is more important for repeat visitors (so they can discover new things).

![A final sketch/wireframe for the homepage, focusing on the layout for the new design.](/assets/images/chemcoll/12-homepage-sketch.png)

The final sketch of the homepage better defined the content areas and their hierarchy. The main navigation on the left provides access to activities and resources. The homepage has four main content areas&mdash;a blurb explaining what the site is about, quick links to the most popular resources, a featured resource, and a news section.

### The New Design

![A screenshot of the new homepage (taken in December 2012)](/assets/images/chemcoll/chemcollective-homepage-no-msg.png)

Examples of how the new design supports the goals developed for the new homepage:

##### Goal: Better communicating what the site offers to new visitors
The headline 'Resources to Teach and Learn Chemistry' practically shouts the site's purpose. 

##### Goal: Providing quick and prominent access to activities and resources
The left navigation provides instant access to the site's resources (removing the intermediate 'Find Activities Page'.) 
Quick links give veteran users quick access to popular resources.

##### Goal: Creating a better visual hierarchy&mdash;making it skimmable
There are clear sections on the homepage.
Sections' importance is clear based on the visuals (e.g., type size and styling highlight the headline, quick links, featured resources, and resource navigation).

## Making Resources More Discoverable

One primary goal for the redesign of the ChemCollective site was to make the resources it offers more discoverable for both new and old users.

On the old ChemCollective website, the 'Find Activities' page linked to static lists of different resource types.
![Screenshot of the old 'Find Activities' Page](/assets/images/chemcoll/old-find-activities-page.png)

The design of the old 'Find Activities' page had several flaws. 

- The amount of text on the page was overwhelming.
- It did not provide any way to look at all the resources that the ChemCollective offered for a given topic&mdash;the only way to browse resources was by type. 
- The groups on the page (Virtual Lab Problems, Tutorials etc., Scenarios, and Simulations) were inadequate. As the ChemCollective created new types of resources, they tried to fit them into one of the existing categories. Fitting in new resources meant that each category label became less meaningful.

Similarly, on the old site, lists of resources of a given type, like Virtual Lab problems, were organized by topic in one long page.
![Screenshot of the old Virtual Lab Activities list](/assets/images/chemcoll/old-vlab-activities-list.png)

Like the 'Find Activities' page, the amount of information on the list pages, and that information's rigidity made it more difficult to explore different resources.

### Organizing the Site

Initially, I conducted a digital card-sort of all of pages and resources on the ChemCollective site to generate new ideas for how to categorize those pages and resources.

![Card sort of various ChemCollective Pages](/assets/images/chemcoll/5-cardsort.png)

One major decision at this stage was to separate out 'meta' pages about the ChemCollective from resource/activity pages. In the final design, this decision shows up in the navigation. In the header of the site, there is 'meta' navigation, linking to the 'About', 'Teachers', 'Help', and 'Feedback' pages. The left navigation solely provides access to resources and activities.

![A sitemap I created while developing the new information architecture for the site. Though the structure for organizing resources changed, the division between meta pages and resource pages did not.](/assets/images/chemcoll/8-sitemap.png)

#### Topics and Types

After further research, I learned that teachers who used ChemCollective usually looked for resources in one of two ways. While planning a lesson or unit of instruction for their class, teachers would look for some sort of digital supplement. For example, Mr. Jones might be starting a week on thermochemisty, and look to see what he could find online to use with his class. 

Alternatively, a teacher already familiar with the ChemCollective's resources might be planning a lesson and want to see if the ChemCollective had a specific type of resource for that. In that case, Mr. Jones might think, 
'I'm teaching thermochemistry. A simulation might help the class understand it better. Maybe the ChemCollective will have a simulation of that.'

![Quick notes on different topics and types of resources.](/assets/images/chemcoll/7-chem-topics-types.png)

New teachers using the ChemCollective website would tend to look for resources by topic, while experienced users would more often look for resources by type. This was a major trade-off because we wanted the way the site was organized to encourage exploration, but also to provide easy access to existing resources. 

![The final navigation scheme for the resources on the site, which allows users to browse resources either by topic or by type.](/assets/images/chemcoll/topic-type-fin-ia.png)

In the end, I decided that having two parallel navigation mechanisms (a potential usability problem) was worth it because offering navigation by both topic and type would help to make resources both more discoverable and easier to access quickly. To try to make the dual navigation as easy-to-use as possible, I created a division between the two navigation schemes visually using typography and whitespace.

![Example of collapsible navigation within a topic or type of resources.](/assets/images/chemcoll/expanded-autograded-listing.png)

The number of resources for each topic or type varied drastically. In some cases, there would be around 30 resources for a given topic or of a given type. In other cases, that number would be closer to four. 

To make listing pages navigable, each topic or type page had secondary, collapsible navigation. On listing pages with few resources (less than about 6), the collapsible navigation is expanded by default. The collapsible secondary navigation allowed the resource listings to be discoverable without being overwhelming.

## Graphic Design Refresh

*Part of the site redesign I did for the ChemCollective was a graphic design refresh, creating a new logo and overall feel for the site. The old site's graphic design did little to help users understand the purpose or personality of the ChemCollective.*

![The old logo's typography and iconography did not clearly communicate that the ChemCollective provides digital resources for teaching and learning chemistry.](/assets/images/chemcoll/old-logo.png)

### Logo Design

I considered various concepts for the new logo. Some included icons while others were typographic&mdash;wordmarks.

![Some initial notes on concepts for a new ChemCollective logo](/assets/images/chemcoll/16-logo-concept-ideas.png)

![Sketches of wordmarks for the ChemCollective using different typefaces.](/assets/images/chemcoll/16-wordmark-sketches.png)

#### New Logo

![The new logo I designed for the ChemCollective](/assets/images/chemcoll/logo.jpg)

##### Typography

I chose the typeface [Lubalin Graph](http://typedia.com/explore/typeface/itc-lubalin-graph/) because its geometric forms and slab serifs gave it a scientific and academic feel, while its rounded shapes made it friendly. Scientific, academic, friendly&mdash;all fitting adjectives for the ChemCollective.

##### Iconography

The graduated cylinder incorporated into the wordmark communicates the first part of the ChemCollective's name. The image of a graduted cylinder associates strongly with the concept of chemistry (the 'Chem' in ChemCollective).

The equilibrium symbol which frames the new logo communicates the second part of the ChemCollective's name. The ChemCollective provides resources for teachers, but it's mission extends to enabling teachers to give feedback, share classroom experiences, discuss instruction, and author their own resources. The equilibrium symbol communicates the 'Collective' in ChemCollective, indicating an exchange between the project and those it serves.

## Backend: Moving to an MVC Framework

database design, choice of CodeIgniter php framework, front end html/css/js

## Envisioning a New Virtual Lab

The flagship product for the ChemCollective is [the Virtual Lab](http://chemcollective.org/vlab/vlab.php)

consulting on vlab: sketches of new vlab interface
