+++
draft = true
title =  "{{ replace .Name "-" " " | title }}"
date = {{ .Date }}
eventStartDate = {{ dateFormat "2006-01-02" .Date }}
eventEndDate = {{ dateFormat "2006-01-02" .Date }}
categories = "event"
tags = ["Seminar","Conference"]
image = ""
mkbanner = false
bannerimg = ""
+++

# タイトル

## 項目

### New cool posts

<!--- static ディレクトリに置いた画像を表示させるには以下を使用してください --->
<!--- <img src="/<static以下画像へのパス>" alt="画像代替テキスト" title="画像タイトル" width=300px> --->

<!--- 画像URLをfront matterに記入する場合は以下を使用してください --->
<!--- <img src="{{ .Params.image }}" alt="画像代替テキスト" title="画像タイトル" width=300px> --->

{{ range first 10 ( where .Site.RegularPages "Type" "cool" ) }}
* {{ .Title }}
{{ end }}
