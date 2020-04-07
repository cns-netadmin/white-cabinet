+++
title =  "Adding tags to your posts"
date = 2020-03-09T14:06:22+09:00
tags = [""]
image = ""
draft = false
weight = "3"
layout = "single"
mktile = false
+++


![fmtags_fig](/img/screenshots/fmtags_fig.png)


In the [front matter]({{< ref "features/contents/front_matter" >}}) of each post, you can set tags which can be used to categorize your pages. In the [postcard listing style]({{< ref "features/list/list_techs" >}}), the tags attached to each post will be placed on each card as colored buttons. 

The color for each tag button can be specified by hex color code in the `config.toml` as, for example,

```toml
[[Params.category_colors]]
  Information = "#a22041"
  News = "#2a83a2"
  Event = "#316745"
```
.

