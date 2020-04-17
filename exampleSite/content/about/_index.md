+++
title =  "Welcome to White Cabinet demo page"
date = 2019-07-21T14:06:22+09:00
tags = [""]
image = ""
draft = false
weight = "1"
layout = "single"
+++

# The White Cabinet theme for Hugo

![The image of the webpage created by the White Cabinet](/img/thumbnail.png)

<!--check "CHECK"-->
Furnished with a simple design and numerous features, the White Cabinet theme serves as a versatile basis for your website construction.

By making use of the responsive menu styles organized into a classical block-based layout, you and your visitors can obtain the necessary information at ease, just like opening a ***cabinet***. By keeping the base color ***white***, it will match any content, from a daily blog to the introduction of a research institute.

## Key features

![Main components of the White Cabinet](/img/white_cabinet_components.png)

Some of the features that make the White Cabinet unique are:

- slideshow of images and black ribbon that stand out in the white background
- accordion-style main menu that allows you to put visual emphasis on certain contents
- easy-to-see postcard listing of events which includes automatic date filtering
- customizable side banner displaying the most important posts on top
- uncomplicated footer serving as a guide for visitors both in the screen and out on the streets
- responsive design which allows you to visit the page on your favourite device

To see how it looks, check out our **[Demo page]({{< ref "/" >}})**! 


## Installation

1. Install [Hugo](https://gohugo.io/) in your server/client
2. Create the directory for the web source (ex. `/foo/bar`) and clone into our git repository

```
            $ mkdir -p /foo/bar/themes
            $ cd /foo/bar/themes
            $ git clone ---NEED TO CHECK---
```

3. **Quick start:** You can check out the demo page we have prepared by building Hugo locally:

```
            $ cp white_cabinet_themes/demo-page/ /foo/bar/
            $ hugo server
```

The demo page can be seen at `localhost:1313` in your web browser.

## Setting up your site

Global settings of your website can be customized in the file `config.toml`. At first, edit your server name so that the internal paths are correctly directed:

```
            baseurl = (YOUR_SERVER_NAME)
```

We have prepared several pages that demonstrate how you can make full use of the functionalities. See the [Features]({{< ref "features" >}}) section for details.


