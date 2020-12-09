+++
title =  "Inserting mathematical expressions"
date = 2020-03-09T14:06:22+09:00
tags = [""]
image = ""
draft = false
weight = "6"
layout = "single"
mktile = false
+++




By enabling `math` in the `config.toml`, you can include mathematical expressions powered by [$$\KaTeX$$](https://katex.org/) in your pages:

```toml
[Params]
  ...
  math = true
  ...
```

This will be useful especially for pages with scientific contents.

For example, by writing 

```
$$
-\frac{\hbar^2}{2m}\left(\nabla^2 + V(\boldsymbol{r}) \right)\phi(t,\boldsymbol{r}) = i\hbar \frac{\partial}{\partial t} \phi(t,\boldsymbol{r}),
$$
```

it will be rendered as

$$
-\frac{\hbar^2}{2m}\left(\nabla^2 + V(\boldsymbol{r}) \right)\phi(t,\boldsymbol{r}) = i\hbar \frac{\partial}{\partial t} \phi(t,\boldsymbol{r}) .
$$

If you want to insert an equation inline, by writing `$E=mc^2$`, you get $E=mc^2$.


