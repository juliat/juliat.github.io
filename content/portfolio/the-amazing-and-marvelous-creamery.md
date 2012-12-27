---
title: A&M Creamery
number : 5
created_at: 2012-05-01
category : [UX Design, Web App Development]
tags : [UX Design, Database Design, Web App Development, Visual Design]
image : /assets/images/creamery/admindash.png
description: I designed and developed (end-to-end) a management system for a fictional chain of ice cream stores. 
link : http://aandmcreamery.herokuapp.com/
code : https://github.com/juliat/creameryapp
---

## UX Design Process Photos

### Different Usage Flows for Different Roles

Initial Notes on Workflows for Each User Type:
![Initial Notes on Workflows for Each User Type](/assets/images/creamery/initial-notes-on-workflows.jpg)

Detailed notes about an Administrator's most important tasks within the app:
![More Notes on Administrator Workflow](/assets/images/creamery/3-admin-use-case-flow.png)

Administrator Workflow to Add a Store:
![Administrator Workflow to Add a Store](/assets/images/creamery/3-admin-add-employee-flow.png)

### Wireframe Sketches

This was a wireframe for the Administrator Dashboard. Different ideas for how to display employees at a glance are below the main wireframe.
![Wireframe for Administrator Dashboard. Different ideas for how to display employees at a glance are below the main wireframe.](/assets/images/creamery/admin-dash-with-employee-alts.png)

Wireframe for Store Manager Dashboard:
![Wireframe for Store Manager Dashboard](/assets/images/creamery/manager-dash.png)

Wireframe for Employee Dashboard:
![Wireframe for Employee Dashboard](/assets/images/creamery/employee-dash.png)

Wireframes of Additional App Screens:
![Wireframes of Additional App Screens](/assets/images/creamery/3-additional-admin-screens.png)

### Complete Designs

You can see [the finished application live on heroku](http://aandmcreamery.herokuapp.com/). To see the application as an administrator, login as **alex@example.com**. To see the application as a store manager, login as **rachel@example.com**. To see the application as an employee, login as **dusty@example.com**. The password for all users is **creamery**.

Below are a few selected screenshots of the application:

Finalized Administrator Dashboard:
![Finalized Administrator Dashboard](/assets/images/creamery/admindash.png)

Store Details Page:
![Store Details Page](/assets/images/creamery/storedetails.png)

Employee Details Page:
![Employee Details Page](/assets/images/creamery/employeedetails.png)

## Specification and Implementation

### Going From Case Narrative to Database Design

Annotated Case Narrative for the Creamery:
![Annotated Case Narrative for the Creamery](/assets/images/creamery/1-case-narrative-to-entities.png)

First Draft of Database Design:
![ERD First Draft](/assets/images/creamery/1-case-entities-draft.png)

### More Formal Specifications

Final Version of Database Design:
![Final Version of Database Design](/assets/images/creamery/p1-erd.png)

Snippet of Use Cases Document:
![Snippet of Use Cases Document](/assets/images/creamery/p1-use-cases-snipped.png)

### Code

I implemented this application (as well as tests for it) using Ruby on Rails. You can see [the code behind the A&M Creamery Application on github](https://github.com/juliat/creameryapp).
