var title_select = document.querySelectorAll('div.bannersize > div.title');

title_select.forEach(content =>{
    content.textContent = shortenText(content)
});

function shortenText(content) {
    var string = content.textContent
    const max_length = 80;
    return ommitLongText(string, max_length);
}

function ommitLongText(str, n_max) {
    var n = 0;
    var length = 0;
    for(i=0; n < n_max && i < str.length; i++) {
        if (str[i].match(/[ -~]/) ) {
            n += 1;
        } else {
            n += 2;
        }
        length += 1;
    }
    if (length < str.length) {
        return str.substr(0, length) + '...';
    } else {
        return str
    }
}
