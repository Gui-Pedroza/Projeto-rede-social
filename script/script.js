function changeFrameImg(id) {
    const iframe = document.getElementById('iframe')    
    switch (id) {        
        case 'youtube_ico':
            iframe.src = 'pages/youtube.html'
            break;
        case 'github_ico':
            iframe.src = 'pages/github.html'
            break;
        case 'instagram_ico':
            iframe.src = 'pages/instagram.html'
            break;
        case 'twitter_ico':
            iframe.src = 'pages/twitter.html'
            break;
        case 'facebook_ico':
            iframe.src = 'pages/facebook.html'
            break;
        default:
            iframe.src = 'pages/home.html'
    }
    console.log(id)
    console.log(typeof id)
    console.log(iframe.src)
}