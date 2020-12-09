+++
title =  "Creating the header menu"
date = 2020-03-09T14:08:22+09:00
publishDate = 2020-03-09T14:08:22+09:00

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

<!--#### 3. Change the header menu.-->

The header menu is the set of links on the bottom edge of the black banner on the top part of the page. It can be an internal link to a certain page in your website that is often visited, an external link to another website, or a button to switch the content language.

![topfigures_headermenu_fig](/img/screenshots/topfigures_headermenu_fig.png)

## Internal links

The most basic way to add a new header menu is to add a new parameter block `menu.header` in the `config.toml`. Suppose you want to add a header menu entry for the content at `/URL`, you should add

```config.toml
[[menu.header]]
   name = "DISPLAYED NAME"
   url = "/URL"
   weight = 1
```

where the `weight` specifies the order of the header menu when there are multiple entries.


## External links

You can also add external links with small banners. Add a new parameter block `Params.exlink` in the `config.toml`:

```config.toml
[[Params.exlink]]
  url = "LINK"
  pass = "PATH TO IMAGES"
```


## Language-switch button

The link for switching languages is created by the parameter block `Languages.**.params`:

```config.toml
[Languages.en]
  weight = 1
[Languages.en.params]
  Language_name = "English"
```

The `weight` corresponds to the order in which the languages are placed, and the `Language_name` is the string that is displayed for the language. See also [Going global]({{< ref "features/build/multilingual.md" >}}) for an example.

