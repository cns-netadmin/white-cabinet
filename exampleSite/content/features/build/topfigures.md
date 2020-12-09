+++
title =  "Change the logo, favicon, and top figures"
date = 2020-03-09T14:23:27+09:00
publishDate = 2020-03-09T14:23:27+09:00

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
weight = 2

#For main menu contents
#mktile false

#For Local
draft = false
+++

<!--#### 2. Change the logo and top figures.-->

You can use your original logo and favicon to represent your website. Also, you can set several images to be shown as a slideshow on the top part of the top page.

![topfigures_headermenu_fig](/img/screenshots/topfigures_headermenu_fig.png)

## Setting the logo image and top figures

The logo and image files should be placed under the directory "static". Assuming that the root directory of the site is `/foo/bar`, place the logo as `/foo/bar/static/img/logo.png` and the top figure as `/foo/bar/static/img/topfig1.jpg`, etc.

Then, set the path to these files in the `config.toml` as:

```config.toml
[Params]
  logo = "img/logo.png"
  top_figures = [
  "img/topfig1.jpg",
  "PATH TO FILE2",
  "PATH TO FILE3",
  ...
  ]
```

## Setting the favicon image

You can make your custom favicon image for your website. The default method is to generate a set of images and files required for a multi-platform favicon with the help of a third-party favicon generator such as [the Real Favicon Generator](https://realfavicongenerator.net/). The generated files should be placed in the directory specified by the `faviconDir` parameter in the `config.toml`:

```config.toml
[Params]
   faviconDir = "img/favicon"
```

Then the icon file `static/img/favicon/favicon.ico`, image file `static/img/favicon/android-chrome-192x192.png`, etc. will be automatically read and displayed on the browser.


## Display the color ribbon

If you want to display the color ribbon, which is shown in a figure, add `ribbon_color` parameter with hex color like:

```config.toml
[Params]
...
  ribbon_color = "#a9a9a9"
...
```

. If `ribbon_color` is null or empty, a ribbon is not displayed.
