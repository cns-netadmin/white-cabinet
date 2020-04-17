+++
title =  "Adding information to the footer"
date = 2020-03-09T14:30:41+09:00
publishDate = 2020-03-09T14:30:41+09:00

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
weight = 8

#For main menu contents
#mktile false

#For Local
draft = false
+++

<!--### Footer-->

The footer at the bottom of the page consists of a "sitemap", the "location", and the "copyright". The names can be specified in the `config.toml`:

```config.toml
[Params]
  sitemap = "DISPLAYED NAME OF SITEMAP"
  location = "DISPLAYED NAME OF LOCATION"
```

![footer_fig](/img/screenshots/footer_fig.png)


## Creating the sitemap

The sitemap can be created manually by explicitly listing the links in the file `/foo/bar/content/sitemap.md`. This allows you to decide how you organize the sitemap, regardless of the menu structure. You can set the label displayed above the sitemap in the `params` block in the `config.toml`:

```toml
[Params]
  ...
  sitemap = "The Sitemap"
  ...
```

Note that it should be placed in the `[Languages.en.params]` block, etc. for multilingual sites.


## Creating the contact information

For institute homepages, it is convenient to post the address and contact information in the footer. For personal blogs, you probably want to post a link to your social apps, rather than your home address. We have also left this part flexible.

You can customize the label in the config in the same way as the sitemap:

```toml
[Params]
  ...
  location = "Address of institute"
  ...
```

A method of posting the contact information on the footer and posting the detail in an `Access` page is explained in the [Creating the contact information]({{< ref "features/build/access" >}}) page.


## Copyright

You can explicitly print the copyright notice on the bottom of the footer by adding the year and copyright-holder name:

```toml
[Params]
  ...
  copy_year = "2020"
  copy_name = "Center for Nuclear Study, the University of Tokyo"
  ...
```

to the `[Params]` block in the `config.toml`. If these parameters are not specified, copyright will not be displayed.

