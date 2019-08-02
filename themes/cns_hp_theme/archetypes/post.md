+++
title =  "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
eventStartDate = {{ dateFormat "2006-01-02" .Date }}
eventEndDate = {{ dateFormat "2006-01-02" .Date }}
categories = "event"
tags = ["Seminar","Conference"]
image = ""
draft = false
mkbanner = ["true","false"]
+++

# タイトル

## 項目

### New cool posts

{{ range first 10 ( where .Site.RegularPages "Type" "cool" ) }}
* {{ .Title }}
{{ end }}
