var title_select = document.querySelectorAll('div.bannersize > div.title');

title_select.forEach(content =>{
    content.textContent = shortenText(content)
});

function shortenText(content) {
    var string = content.textContent
    const max_length = 70;
    if (string.length > max_length) {
        return string.substr(0, max_length) + '...';
    }
    else {
        return string;
    }
}
