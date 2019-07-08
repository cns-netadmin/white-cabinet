---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
---

** Insert Lead pargraph here **


## New cool posts

{{ range first 10 ( where .Site.RegularPages "Type" "cool" ) }}
* {{ .Title }}
{{ end }}
