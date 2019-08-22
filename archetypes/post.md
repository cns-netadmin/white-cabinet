+++
draft = false
title =  "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
publishDate = {{ .Date }}

#For events: delete first "#" of next column
#categories = "event"
eventStartDate = {{ dateFormat "2006-01-02" .Date }}
eventEndDate = {{ dateFormat "2006-01-02" .Date }}
tags = ["Seminar","Conference"]

image = ""

#banner
mkbanner = false
bannerEndDate = {{ dateFormat "2006-01-02" (now.AddDate 0 +1 0) }}
bannerimg = ""
bannerWeight = ""
+++

# タイトル

## 項目

### New cool posts

{{ range first 10 ( where .Site.RegularPages "Type" "cool" ) }}
* {{ .Title }}
{{ end }}
