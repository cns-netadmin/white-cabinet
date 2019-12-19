# White Cabinet theme for Hugo
<!--check "CHECK"-->
White Cabinet theme can make sites with

- slide images
- site title w/ black ribbon & hamburger menu
- accordion menu (expandable menu)
- post card
- side banner
- quicklinks (& address)

components. White Cabinet theme can create introduction site for indivisual, group and all of facilities with upcoming/past events, information, location, etc...
<!-- Introduction for  -->
<!--   - shops -->
<!--   - facilities for recreation -->
See our **[Demo page]()** <!-- CHECK -->

White Cabinet theme deal with not only PC but also Mobile without any extra codes.

## Installation

1. Install [Hugo](https://gohugo.io/) in your server/client.
1. Make web source directory (ex. `/foo/bar`) and clone our git repository

```
$ mkdir -p /foo/bar/themes
$ cd /foo/bar/themes
$ git clone ---NEED TO CHECK---
```

1. If you test by our demo page, please type such as:

```
$ cp white_cabinet_themes/demo-page/ /foo/bar/
$ hugo server
```

and access to `localhost:1313` in your web browser, you will check it.

Here in README is according to the demo pages.

## Edit `config.toml`
You can customize the site at the `config.toml`.

1. At first, edit your server name

```config.toml
baseurl = (*_YOUR_SERVER_NAME_*)
```

2. You can set the parameters in each lauguage code.
These are the example in the case of English.
各言語のページは自動的に作られます。baseurl/en/

```config.toml
[Languages]
[Languages.en]
  title = "THE TITLE OF YOUR SITE"
[Languages.en.params]
  subtitle = "THE SUBTITLE OF YOUR SITE"
  ...
[[Languages.en.menu.main]]
  ...
```

<!--
2. PATHはContent以下かStatic以下
publicdirの話とか。
-->

### Header
At the header, following contents are stored:
  - title and subtitle
  - logo
  - slide images (= top figures)
  - hamburger menu : automatically changed with accodion menu.
  - heder menu
 

#### 1. Change the title.

```config.toml
[Languages]
[Languages.en]
  title = "SITE TITLE"
[Languages.en.params]
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
To add new header menu, edit new `menu.header`.

```config.toml
[[menu.header]]
   name = "NAME OF MENU TITLE"
   url = "PATH TO MENU"
   weight = ORDER OF EACH MENU
```

To add banner link, add following `Params.exlink`.

```config.toml
[[Params.exlink]]
  url = "LINK"
  pass = "PATH TO banner images"
```

### Main contents
In white cabinet, accordion menu is used as top menu.
Hamburger menu at header is automatically changed with accordion menu.

<!-- How to add accodion menu-->

In each accordion menu, you can store contents in three ways:
  - simple  
  - tile
  - post card

You can also use header menu. 
See **[HOW TO MENU]()** for more information

### Banners at sidebar
<!-- How to add new banner-->

### Footer
- sitemap
- location

###taxsonomies
To be updated.

## How to edit each page (About front matter)


<!-- Finally, type like below and  -->
