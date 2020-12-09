+++
title =  "Creating the infobar"
date = 2020-03-09T14:35:40+09:00
publishDate = 2020-03-09T14:35:40+09:00

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
weight = 6

#For main menu contents
#mktile false

#For Local
draft = false
+++

<!--### Infobar (list of banners)-->


We have created a region on the right-hand side (or on the top for portrait-oriented screens) where a list of rectangular banners are placed. They can be used to show contents that are particularly important, such as an announcement for an event, or information about a press release. You could also use them to show some recent posts that would be of particular interest to your frequent visitors.


![infobar_fig](/img/screenshots/infobar_fig.png)


There are two methods for generating a banner.


## Latest posts

For [date-dependent contents]({{< ref "features/list/post_type_content.md" >}}), banners are automatically generated for the several latest posts in a selected directory. The directory can be specified with the variable `sidebar_url`, and the maximum number of banners that is generated this way can be specified with the variable `sidebar_maxnum`, both in the `[Params]` block of the `config.toml`:

```config.toml
[Params]
...
  sidebar_maxnum = 10
  sidebar_url = "/post"
...
```

In the above example, banners are automatically created for the 10 latest posts in the directory `/content/post`.

You can set an image that represents the post. See [Front matter variables]({{< ref "features/contents/front_matter.md" >}}) for details. The specified image will be transparently shown, and the date and title of the post will be written in black on top. Posts with no image specified will be shown as a white box with just the date and title.


## Fixed banner

You can also create a fixed banner, regardless of the date of creation. See [Front matter variables]({{< ref "features/contents/front_matter.md" >}}) to find out how this can be done. The fixed banners will be listed above the "latest posts" banners, in the order of their `weight`s. It is also possible to set a time limit for the banner display. 

Only the specified image will be shown on a fixed banner, and not the date and title.


