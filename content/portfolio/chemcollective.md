---
title: ChemCollective
number : 1
category : UX Design
date: Summer 2011
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

Before the redesign project began, I looked at the ChemCollective's homepage to generate initial ideas on how to improve the site. Two of the biggest issues I noted were the poor visual hierarchy of the page, and its failure to quickly communicate what the site was about. 

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

The number of visits to the Virtual Lab page confirmed that students made up the greatest proportion of visitors, since teachers often link their students to the Virtual Lab directly. The 2nd and 3rd ranked pages supported my assessment that teachers were the second largest and most important audience of the site, since those two pages were used most by teachers looking for activities to use.

### Goals for the New Homepage

Based on the evaluation of the old design, and talks with the ChemCollective team, we set some goals for the new homepage:

- Better communicating what the site offers to new visitors.
- Providing quick and prominent access to activities and resources.
- Creating a better visual hierarchy&mdash;making it skimmable.

### Exploring Design Options

![Many early sketches of the new homepage, exploring different ways to introduce visitors to the site.](/assets/images/chemcoll/homepage-sketches-collage.png)

I explored various design options for the homepage. Some were focused on directing users to parts of the site based on their role (student, teacher, researcher). Others highlighted the different types of activities the site offered. The sketches were quick ideas based on what I understood about the site's, but those ideas changed as I developed the information architecture for the rest of the site.

![A more developed sketch of the homepage.](/assets/images/chemcoll/9-ui-sketch.png)

The more developed sketch shown above includes the important navigation elements of the site. It also identifies a trade-off on the homepage. Featuring basic information about what the ChemCollective offers is more important for first-time visitors (so they can understand what the site has), but featuring various resources is more important for repeat visitors (so they can discover new things).

![A final sketch/wireframe for the homepage, focusing on the layout for the new design.](/assets/images/chemcoll/12-homepage-sketch.png)

The final sketch of the homepage better defined the content areas and their hierarchy. The main navigation on the left provides access to activities and resources. The homepage has four main content areas&mdash;a blurb explaining what the site is about, quick links to the most popular resources, a featured resource, and a news section.

### The New Design

![A screenshot of the new homepage (taken in December 2012)](/assets/images/chemcoll/chemcollective-homepage-no-msg.png)

Here are some examples of how the new design supports the goals developed for the new homepage:

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

To start, I conducted a digital card-sort of all of pages and resources on the ChemCollective site to generate new ideas for how to categorize those pages and resources.

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

### Site Design

The new site design followed from the design of the new logo; the new design was meant to be scientific, academic, friendly, and modern.

#### Colors

![The color scheme for the ChemCollective website.](/assets/images/chemcoll/color-scheme.png)

The color scheme of the website reinforces the main impressions we wanted the site to give. The cool, predominantly blue color palette gives the site a scientific and academic air. The bright hues of the blues and greens in the palette soften the overall feel, making the site more friendly and modern feeling. 

#### Typography

![The ChemCollective website uses Gill Sans for its typeface.](/assets/images/chemcoll/typography.png)

The typeface used on the site is Gill Sans. I chose Gill Sans because it functions well for both headings and body text, and is websafe. Moreover, Gill Sans is a humanist sans-serif; it is modern, but more friendly than transitional sans-serifs (like Helvetica).

#### Header

![The header for the ChemCollective website includes the logo, the tagline, logos of the project's primary sponsors, some navigation links, and the search box.](/assets/images/chemcoll/navbar.png)

The header was challenging to design primarily because it contained so many elements. The final design keeps the number of elements from becoming overwhelming by using two colored bands to separate different elements. The darker blue top band contains the tagline and sponsor logos. The second, lighter blue band contains the navigation-oriented elements: links to parts of the site, and the search box. The logo cuts across the two bands, making them into one whole.

## Backend: Moving to an MVC Framework

When I began work at the ChemCollective site, it was entirely static except for a few snippets of PHP. In addition, most of the layout was done using HTML tables. This meant the HTML, CSS, and javascript powering the site was far from [DRY](http://en.wikipedia.org/wiki/Don't_repeat_yourself), and that it was very challenging to universally change design elements on the site.

I researched various content management systems and backend frameworks as a possible way to make the site's code more maintainable and consistent (and to avoid changing styles individually in hundreds of HTML pages by hand.)

### Choosing a Framework Instead of a CMS


I decided that a content management system would not be the best choice for the ChemCollective. Although we would get more functionality out of the box, I was concerned that a CMS would interfere with custom code that powered many of the activities on the site, or cause problems with that in the future. In addition, most CMS's are publishing-oriented. Typical domain models of posts and pages would not fit the content of the ChemCollective site well, and it seemed like it would require hackish solutions to implement custom content types in a CMS (e.g., Joomla).

I also chose to use a framework rather than coding everything by hand due to limited time and experience (this was my first experience writing and MVC webapp.)

#### Which Framework

One basic requirement for any server-side framework I chose was that it had to use PHP&mdash;the ChemCollective did not want to change the server-side language they used. This made the decision more complicated, because there are many alternatives for PHP-based MVC frameworks.

Some of the frameworks I considered were Yii, Kohana, Zend, CakePHP, Symfony, and Codeigniter. In the end I chose to use [Codeigniter](http://ellislab.com/codeigniter) because it:

- was [very well documented](http://ellislab.com/codeigniter/user-guide/) and had a strong community
- had a robust codebase and was the basis for commercial-grade applications
- was small (compared to, say, Zend)
- had a broad set of libraries/modules that were relatively easy to incorporate into an app

### Database Design

![Notes on entities for the ChemCollective database.](/assets/images/chemcoll/14-notes-about-db-entities.png)

With the help of the internet, I taught myself about database design and normalization and modeled information on ChemCollective as a relational databse.

![Querying the database using vanilla PHP and SQL turned out to be a bad plan.](/assets/images/chemcoll/14-handwritten-php.png)

Codeigniter is relatively database agnostic. At first, I tried writing queries to the database in raw SQL using the [PHP Data Objects library](http://www.php.net/manual/en/book.pdo.php). I was worried about hardcoding cryptic queries, especially since the ChemCollective might not have another SQL literate person on the team for years. So, I switched to using the Codeigniter [ORM](http://en.wikipedia.org/wiki/Object-relational_mapping) to handle the queries instead (I also considered using [Doctrine](http://www.doctrine-project.org/projects/orm.html), but it seemed like overkill).

## Envisioning a New Virtual Lab

The flagship product for the ChemCollective is a Java applet called [the Virtual Lab](http://chemcollective.org/vlab/vlab.php). The interface for the Virtual Lab had not changed much since the project's inception, though much additional functionality had been added to the Virtual Lab over its lifetime. This meant that the interface was relatively complex and confusing; it required training to use, and the ChemCollective provided [extensive documentation](http://chemcollective.org/help/vlabUserGuide) to help students learn to use it.

![An screenshot of the Virtual Lab from its help documentation.](/assets/images/chemcoll/vlab-help-screenshot.png)

As part of my work as an intern at the ChemCollective, I informally reviewed the interface of the Virtual Lab. I found several major problems with the interface, including the following:

- the interface was cluttered and complex
- information about the task at hand (manipulating virtual chemicals) was scattered throughout panels on the right, left, and bottom of the page
- there were multiple mechanisms for pouring (probably the most frequent action in the Virtual Lab), but none were obvious or intuitive

### Competitive Analysis

![Late Night Labs' (a ChemCollective competitor) Virtual Lab Interface](/assets/images/chemcoll/late-night-labs.png)

I also researched how competitors' interfaces compared to that of the Virtual Lab. Late Night Labs is the main alternative to ChemCollective's Virtual Lab. Its interface was more intuitive overall for two main reasons. First, the realistic graphics provided better affordances for using tools in the interface. Second, their lab interface split up some tasks (like selecting chemicals for an experiment) into separate screens, reducing the clutter in the main workspace. 

Aside from Late Night Labs, I reviewed other chemistry teaching applets and the interfaces for cooking games. Though the Virtual Lab is not a game, reviewing the interfaces for cooking games was helpful to see more intuitive interaction techniques for measuring, pouring, and otherwise manipulating virtual ingredients.

### Sketches for a New Virtual Lab

Based on my evaluation of the current Virtual Lab and research on alternative UIs for similar products, I redesigned the Virtual Lab Interface.

The most important changes to the interface in the new design included:

- having a collapsible area to contain chemicals and equipment to reduce clutter onscreen while users conduct experiments
- centralizing all information about the currently selected chemical or solution in one panel in the upper left corner so that it's easier to monitor changes
- moving actions like pouring into a popover/context menu, so that they are near the on-screen objects that they are related to
- moving the problem/lab description text out of a tab and into a separate screen so it's more separate
- removing the top menu bar and tabs to reduce UI clutter (that did not provide access to important functionality)
- suggesting somewhat more realistic graphics to provide better affordances

![A sketch of a new design for the main work area for the Virtual Lab.](/assets/images/chemcoll/20-vlab-sketch-2.png)

The main work area for the Virtual Lab (shown above) was the focus of my redesign. However, I also created a concept for a new entry sequence and lab selection interface. 

The Virtual Lab has two modes of use. Students will either use it to conduct a lab (programmed into the Virtual Lab) or to manipulate chemicals in an open-ended way. The new entry screen for the Virtual Lab clearly delineates those two usages, and funnels students looking for a lab into the screen which lists all the available labs. (In the current virtual lab, the modes are merged into one, and students find labs through direct links or through multiple menus and modals.)

![A sketch for the new entry-sequence screens for the Virtual Lab.](/assets/images/chemcoll/20-vlab-sketch.png)

The new lab listing interface makes it simpler to explore, find, and read  Virtual Lab activities primarily by providing more space&mdash;the entire applet screen area&mdash; for each task.

#### Future

These sketches have not, to date, become more than sketches, due to the difficulty of modifying the code behind the Virtual Lab's interface (which is extensive and tightly coupled with the backend). However, if the ChemCollective migrates the Virtual Lab from a Java applet to another platform in the future, these sketches would be a starting point for a new interface for the Virtual Lab.




