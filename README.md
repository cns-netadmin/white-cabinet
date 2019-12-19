# White Cabinet theme for Hugo
<!--check "CHECK"-->
White Cabinet theme can make sites with

- slide pictures
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

## Edit "config.toml"
You can customize the site at the config.toml.

1. At first, edit your server name

```config.toml
baseurl = (*_YOUR_SERVER_NAME_*)
```

2. You can set the parameters in each lauguage code.
These are the example in the case of English.

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

### Header
At the header, following contents are stored:
  - title and subtitle
  - logo
  - slide pictures (= top figures)
  - hamburger menu : automatically changed with accodion menu.
  - heder menu
 

1. Change the title
2. Change the logo and top figures
3. Change the header menu


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

## How to edit each page (About front matter)


<!-- Finally, type like below and  -->
