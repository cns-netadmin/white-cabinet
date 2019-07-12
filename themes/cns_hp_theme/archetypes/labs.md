+++
title =  "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
image = "$title.png"
draft = true
weight = ""
mktile = true
+++

[![tile image]($image "$title"){.pull-left}]({{ .Site.BaseURL }}labs/$title/)

# Name of the Lab

What is our research topic?

## New cool posts

What is our recent update?
</br>

This part is on the right of the image.

<div class="clearfix"></div>

## Newer cool posts

This part is centered.

</br>

What do we do?


{{/*
{{ range first 10 ( where .Site.RegularPages "Type" "cool" ) }}
* {{ .Title }}
{{ end }}
*/}}
