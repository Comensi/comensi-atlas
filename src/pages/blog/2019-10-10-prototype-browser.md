---
templateKey: blog-post
title: Prototype live
date: 2019-10-10
description: Exploring the data
featuredpost: false
tags: 
  - Prototype
---
## Exploring the data 

We have now got a first version of the CommaBrowser in place. It's very rough, and aims simply to explore the different parts of our data. 

At this point in the project, the goal is to keep our progress visible as possible, while quickly building up an end-to-end view of how data is collected, stored and explored. 

The browser is hosted on github at :https://community-atlas.github.io/commaBrowser/

At the time of writing, we're exploring the options for achieving the three core views of the geo data: The cards, the map and a timeline. 

The commaBrowser is designed to run entirely in the browser, and require no back-end at all. It gets pointed to a commaGeoJson file (our file format for community maps), and it will make the data viewable. 

## Separating creation from viewing

The key architecture decision for this technical implementation is that the process of creating the commaGeoJson files, and the process of viewing and exploring them are completely separate. The tools to perform each of these actions simply communicate through the data. 

This allows all the aspects to develop independently of each other. The core focus of our current work is to develop the commaGeoJson standard as this is the real collaboration glue. The creation and the browsing of this data can be implemented in many different forms, by anyone without the need for any coordination. Simply conform to the specification and we can work together. The map data can already be viewed direcly in github, without any custom technology. 

Work continues. 



