+++
title =  "Create your own post"
date = 2020-03-09T14:06:22+09:00
tags = [""]
image = ""
draft = false
weight = "1"
layout = "single"
mktile = false
+++


A page in your website corresponds to a markdown file created under the `content` directory. They can be categorized into sections by creating corresponding subdirectories. For example, you want to create a section called "about". There are two types of pages you can create under the section "about".

#### 1. The `_index.md`

One is the `_index.md` which serves as the "section page", or the cushion page of the section. By default, the webpage specified by the subdirectory `/about` will direct you to the content of `content/about/_index.md`. See [Create a section]({{< ref "features/list/section_page" >}}) for instructions on how to create a section page.


#### 2. Regular pages

The other type is a regular page. You can name it in any way other than "_index.md", and you can create it by the Hugo command `hugo new`. (You may also create a section page using the `hugo new` command, but it will contain unnecessary front matter parameters by default).

For example, if you create your `about` section page and enter `hugo new about/description.md`, the directory structure will become like:


```
content
└ about
   ├ _index.md
   └ description.md
```

The regular pages can be customized by tweaking the [front matter variables]({{< ref "features/contents/front_matter" >}}).
