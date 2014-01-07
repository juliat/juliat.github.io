---
title: The Wind Farmer's Almanac
number: 1
date: Fall 2013
description: A tool to explore data about wind farms
context: Project for Information Systems capstone course, 67-475
worked_on: [project management, user interface design, visualization design, front-end development]
technologies_used: [HTML, CSS, javascript, SVG, ember.js, raphael.js, jQuery]
team: [Drew Inglis, Rob Rua, Rupa Patel, Rachel Miller]
link: http://www.julia-t.com/wind/
kind: portfolio
---

<div class="images">
  <ul>
    <li class="captioned-image">
      <a href="#" data-fluidbox>
        <img alt="A screenshot of the Wind Farmer's Almanac application in use, with one wind farm highlighted in the table, map, and visualization." src="/assets/images/wind/wind-farmers-almanac.png"/>
      </a>
      <p>When a user selects a wind farm site from the list, it is highlighted on the map and comparison visualization.turbine icon.</p>
    </li>

    <li class="captioned-image">
      <img alt="A closeup of the 'range visualization' in the app. Each site is reperesented by a dot on a series of lines. Each line represents an attribute of the wind farm site. The dot's horizontal position indicates where this wind farm falls relative to all sites on that attribute." src="/assets/images/wind/range-visualization-closeup.png"/>
      <p>The comparison visualization shows how a site compares to the others in the results set across a range of variables at a glance.</p>
    </li>

    <li class="captioned-image">
      <img alt="An example of a popover in the results table that allows a user to filter the results by the amount of Megawatts they produce." src="/assets/images/wind/popover-filter.png"/>
      <p>Pop-up filtering controls let users easily switch between browsing results and refining them further. The filtering controls design had to be flexible enough to work for the 60 quantitative and qualitative attributes that can be displayed in the table.</p>
    </li>

    <li class="captioned-image">
      <img alt="A sketch of an alternate interface for the Wind Farmer's Almanac, with a filter column on the far left, map in the middle, and results table on the right." src="/assets/images/wind/paper-prototype.jpg"/>
      <p>A sketch of an alternate interface for the Wind Farmer's Almanac, with a filter column on the far left, map in the middle, and results table on the right. When my team presented it to our client, we learned that filtering and viewing results were not as separate of tasks as we originally thought. This led us to integrate popover-filters into the results table in our final application.</p>
    </li>

    <li class="captioned-image">
      <img alt="A mockup of an infographic profile for a wind farm site on some variable. This shows 'Age Data from 2010 Census' for a hypothetical wind farm as a pie chart with more detailed bar graphs underneath." src="/assets/images/wind/profile-visualization-draft.png"/>
      <p>At one point in the project, we thought we would need profiles for each wind farm. I created these rough designs for how we might visualize data within such a profile.</p>
    </li>
  </ul>
</div>

<div class="project-overview">
  <p>In the capstone course for Information Systems majors, student teams are assigned clients. My team's client was a group of professors and researchers from Carnegie Mellon's Social and Decision Science department. The project was to create a web application to present the data set they had compiled about wind farms in the United States.</p>

  <p>Our clients provided us with spreadsheets of demographic, economic, and ecological data for active wind farms and potential wind farm sites. Over the course of a semester, my team built an application that parses and presents that data in a dynamic map, configurable table, and custom visualization.</p>

  <p>By providing access to a unique dataset in a user-friendly format, our application helps wind developers select sites which are likely to be welcomed by the surrounding community. The Wind Farmer's Almanac also serves concerned citizens who want to explore data about wind farm developments.</p>
</div>