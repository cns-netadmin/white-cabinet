+++
title =  "Create a section"
date = 2020-03-09T14:06:22+09:00
tags = [""]
image = ""
draft = false
weight = "1"
layout = "single"
mktile = false
+++

In order to create a section, you need to create a corresponding menu entry and a directory under the `content` directory. 

## Creating a section

Assuming that the home directory for the site is `/foo/bar`, a new menu entry can be created by adding

```toml
[[menu.main]]
  identifier = "section_one"
  name = "Section One"
  url = "/section_one"
  weight = 1
  pre = "open"
```

to the `/foo/bar/config.toml` and creating a directory `section_one` under `/foo/bar/content/`. The meaning of each variable is as follows:

* `identifier`: an ID that is used to identify each menu entry (corresponding to the section name)
* `name`: the name of the menu entry that is displayed in each menu
* `url`: the permanent link to the section page
* `weight`: the sequencing index for the menu entry
* `pre`: setting the corresponding accordion menu to be "open" or "closed" upon access (original variable for our theme)

Refer to the [Hugo official documentation](https://gohugo.io/templates/menu-templates/#site-config-menus) for details on the parameters other than `pre`.

The example above will create a section named `section_one`, displayed as `Section One`, and accessed via `<site URL>/section_one`. On the top page, the corresponding accordion menu will be placed on the top, and will be open upon access by default.




## Creating the section page

A section page serves as a "cushion page", or a table of contents for the entries that belong to that section. It will typically contain an introduction to that section and a list of links to the pages within the section.

The content of the section page can be written on the markdown file `/foo/bar/content/section_one/_index.md`. It is important that the file is named `_index.md`, so that it can be distinguished from the other regular pages. Upon build, Hugo will parse the markdown content to a static HTML file, which will be displayed as the section page. On the top page, the content of the section page will be displayed in the accordion menu.

See [Lists in the section page]({{< ref "features/list/list_techs" >}}) to learn how to show a list of contents within the section. A description of writing regular entries will be given in the [Edit contents]({{< ref "features/contents" >}}) section.



## Creating subsections

You may also create a subsection `section_two` within the `section_one` by creating a corresponding subdirectory. It is not necessary to create a submenu entry in the `config.toml` for subsections.


