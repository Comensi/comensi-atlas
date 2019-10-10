---
templateKey: blog-post
title: Establishing the foundations
date: 2019-10-03
description: Creating an atlas
featuredpost: false
featuredimage: /img/coda.png
tags: 
  - project
  - introduction

---
![Coda](/img/coda.png)

**The first technical stage of the atlas involves establishing our data schema. We are seeking to create as open a system as possible, and making sure that the underlying data is correct is the key.**

We will be building our data on top of [GeoJSON](https://tools.ietf.org/html/rfc7946), a well established standard for sharing geo and mapping data. GeoJSON however is a very general purpose tool, and so, in order to create a set of inter-operable tools for our more specific, neighbourhood mapping process, we have to create our own extension to GeoJSON.

Part of what we need to achieve is handled by the [simple-styling](https://github.com/mapbox/simplestyle-spec) convention that adds a few standard fields for markers, titles and descriptions. We plan to incorporate this convention into our work.

## Getting practical

In order to develop our specification, we've created a practical operating prototype to gather data. The system is built on [Coda.io](https://coda.io), a tool for rapidly creating working apps. We're gathering real data from a community mapping session, and using it to build real geoJson output. The GeoJson output is currently uploaded to github where it can be viewed by the built in github map viewer.

Through a series of iterations, we hope to finalise an effective specification to share, and to use as the foundation for all other work on the atlas platform.

Our GeoJSON specification will be published at https://github.com/community-atlas/comma-geoJson-spec

### A Coda Demo

The embed below shows some of the coda based data gathering tool. 

<iframe src="https://coda.io/embed/g6LILBHNmE/_suH0X?viewMode=embedplay&hideSections=true" width=900 height=900 style="max-width: 100%;" allow="fullscreen"></iframe>

### The testing map

The data from Coda is uploaded to a testing repository on [github](https://github.com/the-greenman/community-atlas/blob/master/geojson/atlas1.geojson)


