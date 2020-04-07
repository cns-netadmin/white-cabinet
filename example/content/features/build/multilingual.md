+++
title =  "Going global"
date = 2020-03-09T14:40:14+09:00
publishDate = 2020-03-09T14:40:14+09:00

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
weight = 4

#For main menu contents
#mktile false

#For Local
draft = false
+++


Hugo allows you to make your website multilingual. Check [Multilingual mode](https://gohugo.io/content-management/multilingual/) for the details.

If you want to set your default language as English, and add Japanese as a secondary language, it can be done by adding 

```toml
DefaultContentLanguage = "en"
defaultContentLanguageInSubdir = true
```

and

```config.toml
[Languages]
[Languages.en]
  weight = 1
  title = "THE TITLE OF YOUR SITE"
[Languages.en.params]
  Language_name = "English"
  subtitle = "THE SUBTITLE OF YOUR SITE"
  ...

[Languages.ja]
  weight = 2
  title = "ウェブサイトのタイトル"
[Languages.ja.params]
  Language_name = "日本語"
  subtitle = "ウェブサイトのサブタイトル"
  ...
```

to the `config.toml`. For the menus, you can add identical entries for the English version and the Japanese version as

```toml
[[Languages.en.menu.main]]
  ...

[[Languages.ja.menu.main]]
  ...
```

The method of setting menu contents will be presented in the [Create a section]({{< ref "features/list/section_page.md" >}}) page.


