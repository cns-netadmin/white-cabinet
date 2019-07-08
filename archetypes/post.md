+++
title =  "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
tags = ["Seminar","Conference"]
image = ""
draft = true
feature = ["true","false"]
+++

** Insert Lead pargraph here **


## New cool posts

{{ range first 10 ( where .Site.RegularPages "Type" "cool" ) }}
* {{ .Title }}
{{ end }}
