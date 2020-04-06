+++
title =  "Creating the link page"
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
weight = 7

#For main menu contents
#mktile false

#For Local
draft = false
+++

You can create a page to list important links. This will be placed below the infobar for landscape-oriented screens, or just above the footer for portrait-oriented screens.


![links_fig](/img/screenshots/links_fig.png)


## How to make the link page

The list of links can be created directly as the `index.md` file in the `/content/link` directory. To show the link to the link page, add

```config.toml
[Params]
  link = "DISPLAYED NAME"
  linkPath = "en/link"
```

in the `config.toml`. The "DISPLAYED NAME" corresponds to the string that will be shown on the page. You can customize the `linkPath` if you need to place the `index.md` in a directory other than `/content/link`. Note the language specification.


