---
title: StreetSmart
number: 5
description: Hackathon project to tell you what streets are safe
date: June 2012
context: Hackathon project, completed in approximately 10 hours
worked_on: [Project management, ideation, UI design, front-end development, presentation (speaking)]
technologies_used: [HTML, CSS, Javascript, Python, Django, Google Maps API, Spotcrime API]
team: Angel Fleinhardt Martinez, Marc Howard, Miriam Melnick, and Missy Kayko
case_study: true
code: https://github.com/miriammelnick/dont-get-mugged
---
<div class="images">
  <ul>
    <li class="captioned-image">
      <a href="#" data-fluidbox><img src="/assets/images/streetsmart/streetsmart-main.png"/></a>
      <p>The user’s location is shown with a blue dot, and streets around them are color-coded based on crime data.</p>
    </li>
    <li class="captioned-image">
     <img src="/assets/images/streetsmart/streetsmart-geo.png"/>
     <p>Since this is a mobile web app, rather than native, it can’t access GPS data without permission. StreetSmart prompts the user for permission to geolocate them. If they refuse, the app asks for a street address instead.</p>
    </li>
    <li class="captioned-image">
      <img src="/assets/images/streetsmart/spotcrime.png"/>
      <p>We used the SpotCrime API to get crime data for a location. When you visit the SpotCrime website, you see icons on a map indicating recent crimes nearby. We wanted to take this data and condense it to higher-level information to be used for navigation.</p>
    </li>
  </ul>
</div>
<div class="project-overview">
  <p>StreetSmart is a mobile web application that helps you know what streets are safe to travel. My team designed and prototyped StreetSmart in a day at the Hack ‘n’ Jill hackathon, and we won first place.</p>
  <p>pdf: /assets/pdf/StreetSmart-Presentation.pdf</p>>
</div>