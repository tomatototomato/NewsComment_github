$(window).on('load', function () {
    nesw_article();
});


    const nesw_article = async () => {
        const apiURL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=[Newsapi Key]`;
        const res = await fetch(apiURL);
        const information = await res.json();
        console.log(information, "中身をチェック");
        nesw_Title(information);
    }

    function nesw_Title(information) {
        const html = `
    ${information.articles[0].title}
    `;
        console.log(html);
        $("#articleTitle").html(html);
    }

