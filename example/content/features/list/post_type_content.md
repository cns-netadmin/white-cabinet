+++
title =  "Posting date-dependent contents"
date = 2020-03-09T14:06:22+09:00
tags = [""]
image = ""
draft = false
weight = "3"
layout = "single"
mktile = false
+++

If you organize conferences, seminars, festivals, etc., you will most probably want to advertise them to the public. We have prepared a system to display such date-dependent contents.

For instance, you may want to inform people about a weekly meeting. Showing the post about it on the top page will be most effective, but at the same time, it has to disappear as soon as it has ended. Also, you may want to check the page of a particular meeting that had been held years ago. Our method of posting date-dependent contents is realized by 

1. selecting future posts and several newest posts to show on the top page, 

and 

2. preparing a paginated list of all the past posts.


## Creating a section devoted to date-dependent content

This method requires special treatment compared to the [regular listing methods]({{< ref "features/list/list_techs" >}}), since by default, the content displayed in the accordion menu is identical to the content of the section page. For date-dependent contents, the section page may be a list of all the pages, but it will be too long to post in the accordion menu. Thus, we override the default structure, and make them as different pages.

The first step is to create a section named `post`. 

**Currently, `post` is the only section name that could be used for this feature.**

You should not create an `_index.md` in the section. Instead, set in the `config.toml`:

```toml
[[Languages.en.menu.main]]
    name = "News"
    url = "/post"
    weight = 4
    pre = "open"
    post = "postcard"
```

You may customize the `name`, `weight`, `pre`, but note that the `url = "/post"` and `post = "postcard"` are requirements.


## Customizing what to show in the accordion menu


![post_fig](/img/screenshots/post_fig.png)


By setting the `eventEndDate` in the [front matter]({{< ref "/features/contents/front_matter" >}}) for each entry, the site will distinguish which event comes up in the future, and which has already ended. 

To make these show up in the accordion menu, create the page `/content/post/postcard.md` and write 


```markdown
{{</* upcoming_posts title="Upcoming Events" */>}}
{{</* newest_posts title="Newest Posts" number=3 */>}}
[List of all posts]({{</* ref "/post" */>}})
```

where you can customize

* the labels "Upcoming Events", "Newest Posts", and "List of all posts"
* the number of newest posts that will be displayed (3 in this example).

In this case, The upcoming events will be posted under the heading "Upcoming Events", and three of the latest entries will be posted under the heading "3 Newest Posts". The comparison of `endEventDate` and the current date will be done upon each build, so by rebuilding Hugo everyday, the posts will be updated on a daily basis.

If the arguments for the shortcodes are not given, the default setting of 

```markdown
upcoming posts: title = "Upcoming"
newest posts: title = "Newest Posts"
number of newest posts: 3
```

will be chosen.

You can also choose not to show the upcoming events, for example, by omitting the first line. For multilingual pages, create the same kind of page for each language.


An example can be seen from the top page in the "Demonstration of the postcard style" section. Note that you can also place tags on each entry, which can be set in the [front matter]({{<ref "features/contents/front_matter" >}}). The color settings of the tag buttons can be customized in the `config.toml`. See the ["Adding tags to your posts"]({{< ref "features/contents/tags_fm" >}}) page for details.

The "List of all posts" link will direct you to the default `section` template of the `post` section, which displays all the pages in [postlist]({{< ref "features/list/list_techs" >}}) within the section in chronological order. You can see here that creating an `_index.md` file in the `post` section will override this action, and you will have to create the corresponding page by yourself. 



