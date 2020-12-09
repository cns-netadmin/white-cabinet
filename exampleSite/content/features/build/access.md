+++
title =  "Creating the contact information"
date = 2020-03-09T14:30:41+09:00
publishDate = 2020-03-09T14:30:41+09:00

categories = ""
##ex:  categories = "event"##
## for categ. event : remove "#" following 2 columns. ##
#eventStartDate = 2020-03-09
#eventEndDate = 2020-03-09

tags = [""]
##ex: tags = ["Seminar","Conference"]##

image = ""

###banner####
mkbanner = false
bannerEndDate = 2020-04-09
bannerimg = ""
weight = 8

#For main menu contents
#mktile false

#For Local
draft = false
+++

Your contact information, from the address of your institute to your social app profile, can be directly shown on the footer. In order to ensure flexibility in the type of information you give, we have set the site to show the selected markdown files directly in the "contact" region. Also, the same information can be shown on the `access` page. 


## Showing the contact information in the footer

As a set of examples, we provide two cases of the content that could appear as a contact information. They will be directly posted on the footer by adding their filenames as an array to the variable `address` in the `config.toml` (for the example below):

```toml
address = [
  "greenwich.md",
  "individual.md"
  ]
```



### Case 1: The address of the institute

If you host a website of your institute, and you want to display the address, phone number, etc. as the contact information, you can write on a file under the `content` directory (for example, `greenwich.md`):

1. the [front matter]({{< ref "features/contents/front_matter.md" >}}) with the `title` and `googlemap_url`:

```markdown
+++
title = "Royal Observatory Greenwich"
googlemap_url = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4691.037791089049!2d-0.002803868719612036!3d51.4766855086724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a82a8ca9dca7%3A0x31abb25f451c8402!2sRoyal%20Observatory%20Greenwich!5e0!3m2!1sen!2sjp!4v1584327192393!5m2!1sen!2sjp"
+++
```

and

2. the content with the necessary information in the preferred format:

```markdown
Bussiness hours: 10:00 AM - 5:00 PM  
Address: Blackheath Ave, Greenwich, London SE10 8XJ, United Kingdom  
tel: XX-XXXX-XXXX  
e-mail: foo@bar.com
```



### Case 2: Showing a link to your social app account

For the individuals, you can also post links to your social acconts. Assuming you have created a file `individual.md` within the `content` directory:

```markdown
+++
title = "Hugo"
+++

[Twitter](https://twitter.com/GoHugoIO)  
[GitHub](https://github.com/gohugoio/hugo)  
```




## Creating the access page

You can build the **Access information** page, by creating the file `access.md` within the `content` directory and write:

```markdown
+++
title = "Access"
+++

{{< access >}}
```

This page will display the contents of the markdown files designated to the `address` parameter in the `config.toml`. When the front matter variable `googlemap_url` is filled in the markdown files, you can embed a Google Map in the page.


### Embedding the Google Maps

You need the Google Map embedding URL to display it on the `Access` page.This can be obtained in the following way.

First, designate a point to display on Google Maps.

![embedmap1](/img/screenshots/embmap1.png)

Second, click the "Share" button and select the "Embed a map" tab. An HTML code will be generated, so copy only the URL section.

![embedmap2](/img/screenshots/embmap2.png)

Finally, paste the URL to the `googlemap_url` variable of the front matter of `access.md`.


