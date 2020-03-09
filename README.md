+++
title = "README"
weight = 1
+++
# White Cabinet theme for Hugo

<!--check "CHECK"-->
White Cabinet theme can make sites with

- slide images
- site title w/ black ribbon & hamburger menu
- accordion menu (expandable menu)
- post card
- banner at sidebar
- quicklinks (& address)

components. White Cabinet theme can create introduction site for indivisual, group and all of facilities with upcoming/past events, information, location, etc...
<!-- Introduction for  -->
<!--   - shops -->
<!--   - facilities for recreation -->
See our **[Demo page]()** <!-- CHECK -->

White Cabinet theme deal with not only PC but also Mobile without any extra codes.

## Installation

1. Install [Hugo](https://gohugo.io/) in your server/client.
2. Make web source directory (ex. `/foo/bar`) and clone our git repository

```
$ mkdir -p /foo/bar/themes
$ cd /foo/bar/themes
$ git clone ---NEED TO CHECK---
```

3. If you test by our demo page, please type such as:

```
$ cp white_cabinet_themes/demo-page/ /foo/bar/
$ hugo server
```

and access to `localhost:1313` in your web browser, you will check it.

Here in README is according to the demo pages.

## Edit `config.toml`
You can customize the site at the `config.toml`.

At first, edit your server name

```config.toml
baseurl = (*_YOUR_SERVER_NAME_*)
```

### Header
At the header, following contents are stored:
  - title and subtitle
  - logo
  - slide images (= top figures)
  - hamburger menu : automatically changed with accordion menu.
  - heder menu
 

#### 1. Change the title.

The site title can be changed by the parameter `title`.
```config.toml
  title = "SITE TITLE"
[Params]
  subtitle = "SITE SUBTITLE"
```

#### 2. Change the logo and top figures.

Prepare image files for logo and top figures and copy them under the directory "static".

(ex. logo: `/foo/bar/static/img/logo.png`, top figure: `/foo/bar/static/img/topfig1.jpg`)

Change the path to files at `config.toml`.
Several image files are supported for top figures in sliding style.

```config.toml
[Params]
  logo = "img/logo.png"
  top_figures = [
  "img/topfig1.jpg",
  "PATH TO FILE2",
  "PATH TO FILE3"
  ]
```

#### 3. Change the header menu.

To add new header menu, add new parameter block `menu.header`.
<!--In the following case, the page created by `/foo/bar/content/URL/index.md` is corresponded.-->

```config.toml
[[menu.header]]
   name = "DISPLAYED NAME"
   url = "/URL" #Permanent Link of content
   weight = 1 #Order of each menu
```

To add external link with small banner, add new parameter block `Params.exlink`.

```config.toml
[[Params.exlink]]
  url = "LINK"
  pass = "PATH TO IMAGES"
```

The link switching languages is created by parameter block `Languages.**.params`.
```config.toml
[Languages.en]
  weight = 1 #Order of header menu to switch language.
[Languages.en.params]
  Language_name = "English" #Display name at header.
```
See also **[Multilingual mode](#multilingual-mode)**.


### Main contents

In White Cabinet theme, accordion menu is used as top menu.
Hamburger menu at header is automatically changed with accordion menu.

To add new accordion menu, add new parameter block `menu.main`.

```config.toml
[[menu.main]]
    identifier = "ID" #Identifier for each menu
    name = "DISPLAYED NAME"
    url = "/URL" #Permanent Link of content
    weight = 1 #Order of each menu 
    pre = "open"/"closed" #Default status of accordion menu
```

In this case, the page created by `/foo/bar/content/URL/_index.md` is corresponded.
<br>You can store contents in three ways for each accordion menu:
  - list  
  - tile
  - post card
<br>To use the postcard style, add parameter `post = "postcard"` in the block `menu.header`.

See **[HOW TO MENU]()** for more information.

### Sidebar (list of banners)

There are List of banners and "Links" at the sidebar.

Banners are automatically created for latest posts in the directory specified by parameter `sidebar_url`.
<br>Parameter `sidebar_maxnum` define the maximum number of banners at sidebar.

Ex. banners are automatically created for latest 10 posts in the directory `/post`:
```config.toml
[Params]
...
  sidebar_maxnum = 10
  sidebar_url = "/post"
...
```

You can also create fixed banner.
See **[FRONT MATTER](#front-matter)**.

Below the banners list, "Links" is prepared.

This is determined by parameters `link` and `linkPath`.
In the following case, the page created by `/foo/bar/content/link/index.md` is corresponded.

```config.toml
[Params]
  link = "DISPLAYED NAME"
  linkPath = "en/link" #Permenent link of "Links".
```

### Footer
Footer is consisted by "sitemap" and "location".

```config.toml
[Params]
  sitemap = "DISPLAYED NAME OF SITEMAP"
  location = "DISPLAYED NAME OF LOCATION"
```

1. Sitemap is created by `/foo/bar/content/sitemap.md`.

2. Location is created with the parameter block `[[Params.address]]`. 
<br>You can set several locations.

``` config.toml
[[Params.address]]
  description = "BUILDING"
  postcode = "POSTCODE"
  address = "ADDRESS"
  room = "ROOM NUMBER"
  tel = "XXX-XXXX-XXXX"
  fax = "XXX-XXXX-XXXX"
  googlemap_url = "https://www.google.com/maps/****" #Shared link from google map.
```
Embedded google maps are shown at the page `/access`

### taxsonomies
To be updated.

### Multilingual mode
Multilingual mode is available.
See also **Multilingual Mode | HUGO(https://gohugo.io/content-management/multilingual/)**

These are the example in the case of English.

```config.toml
[Languages]
[Languages.en]
  title = "THE TITLE OF YOUR SITE"
[Languages.en.params]
  Language_name = "English" #For header menu
  subtitle = "THE SUBTITLE OF YOUR SITE"
  ...
[[Languages.en.menu.main]]
  ...
```

## Front matter

```front-matter
+++
title =  "Post2"
date = 2019-12-11T15:32:38+09:00
publishDate = 2019-12-11T15:32:38+09:00

categories = ""
##ex:  categories = "event"##
## for categ. event : remove "#" following 2 columns. ##
#eventStartDate = 2019-12-11
#eventEndDate = 2019-12-11

tags = [""]
##ex: tags = ["Seminar","Conference"]##

image = ""

###banner####
mkbanner = true
bannerEndDate = 2025-01-11
bannerimg = "img/rabbit2.png"
weight = 3 

#For main menu contents
#mktile false

#For Local
draft = false
+++
```
`mkbanner` is the parameter to fix banner at sidebar by `bannerEndDate`.
<br>You can set banner image with `bannerimg`. Aspect ratio 4:3 is the best.
<br>Or background image is using from `img`. 

