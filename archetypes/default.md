+++
title =  "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
publishDate = {{ .Date }}

categories = ""
##ex:  categories = "event"##
## for categ. event : remove "#" following 2 columns. ##
#eventStartDate = {{ dateFormat "2006-01-02" .Date }}
#eventEndDate = {{ dateFormat "2006-01-02" .Date }}

tags = [""]
##ex: tags = ["Seminar","Conference"]##

image = ""

###banner####
mkbanner = false
bannerEndDate = {{ dateFormat "2006-01-02" (now.AddDate 0 +1 0) }}
bannerimg = ""
weight = 3

#For main menu contents
#mktile false

### When you use shortcodes [textlist, tilelist, postlist], enable next line ###
#layout = "single"

#For Local
draft = false
+++
{{ range first 10 ( where .Site.RegularPages "Type" "cool" ) }}
* {{ .Title }}
{{ end }}
