+++
title =  "Front matter variables"
date = 2020-03-09T14:06:22+09:00
tags = [""]
image = ""
draft = false
weight = "2"
layout = "single"
mktile = false
+++


When you create a new post using the `hugo new` command, the generated markdown file will already contain the predefined front matter.

Supposing you created a post called `newpost.md` on Mar. 9th, 2020, the front matter will look like:


```front-matter
+++
title =  "newpost"
date = 2020-03-09T14:06:22+09:00
publishDate = 2020-03-09T14:06:22+09:00

categories = ""
##ex:  categories = "event"##
## for categ. event : remove "#" following 2 columns. ##
#eventStartDate = 2020-03-09
#eventEndDate = 2020-03-09

tags = [""]
##ex: tags = ["Seminar","Conference"]##

image = ""

###banner####
mkbanner = false
bannerEndDate = 2020-04-09
bannerimg = ""
weight = 3

#For main menu contents
#mktile false

#For Local
draft = false
+++
```

In this part, you can set when and how you want this entry to be displayed. The following variables are defined.


## Title of the post

![fmtitle_fig](/img/screenshots/fmtitle_fig.png)


The variable `title` will be set to the name of the markdown file by default, but can also be customized. The default title of this page was `front_matter`, but it has been changed to `Front matter parameters`.



## Date variables


### `date` & `publishDate`

These will be set to the date and time of creation of the entry. See the [HUGO Website](https://gohugo.io/content-management/front-matter/#predefined) for the descriptions of these predefined date variables. 



### `eventStartDate` & `eventEndDate`

These are variables exclusively used for [date-dependent contents]({{< ref "features/list/post_type_content" >}}). By setting these values, you can set the time period when this entry appears on the top page. For example, if you want to tell everyone about a conference that is held from March 9, 2020 till March 11, 2020, you can set

```
eventStartDate = 2020-03-09
eventEndDate = 2020-03-11
```

so that it will be announced as one of the `Upcoming events` on the top page until it ends. After it has ended, it will disappear from the `Upcoming events` area.


### `bannerEndDate`

This is a variable exclusively used for [fixed banners on the infobar]({{< ref "features/build/sidebar" >}}). See below for the usage.



## Taxonomies

![fmtags_fig](/img/screenshots/fmtags_fig.png)


You can attach `tags` to your post to organize them into groups. Suppose you hold a conference once a month, and you hold a seminar once a week. By setting

```
tags = ["Conference"]
```
to the former and 

```
tags = ["Seminar"]
```
to the latter, you can find out about the conferences by just clicking on the `Conference` tag, without having to sort out the more frequent seminars. See also [Tags]({{< ref "features/contents/tags_fm" >}}).

The variable `categories` is currently not used.



## The `image` variable

You can set an image that represents the content by using the variable `image`. There are two cases where the image set here can be used.

### As the image for a tilelist

When the page is displayed as a [tilelist]({{< ref "features/list/list_techs" >}}), it will need a representative image. The link to the image given to this variable will be used.


### As the background image of a banner

If the page is listed on the [infobar]({{< ref "features/build/sidebar" >}}), it will look appealing if it has an image. The recommended variable to be used here will be the `bannerimg` (see below), but if it is not used, the image given to the `image` variable will be shown transparently on the background and the date and title of the post will be printed on top.


## Displaying your post on the infobar


![fmbanner_fig](/img/screenshots/fmbanner_fig.png)

You can display posts on the [infobar]({{< ref "features/build/sidebar" >}}) by setting

```
mkbanner = true
```

so that it will be emphasized to your visitors. When there are multiple `mkbanner` entries, the order will be determined by weight, and then the date.

The front matter variables related to this are as follows:

### `bannerEndDate`

The post will be displayed on the infobar until the date specified by `bannerEndDate`, which is set to one month after the date of creation by default. 


### `bannerimg`

When a path to the image is given to the `bannerimg`, the post will show up on the infobar as just the image, without a title or a date. The aspect ratio of 4:3 is recommended for the image used. 

If you do not specify the `bannerimg`, the image specified in `image` will be used as a background image (see above), and if that is also unspecified, the date and title of the entry will be shown on a white background. 

