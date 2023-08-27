function changeFrameImg(id) {
    const iframe = document.getElementById('iframe')
    const nomeIcone = id.toString()
    switch (nomeIcone) {        
        case youtube_ico:
            iframe.src = 'pages/youtube.html'
        case 'github_ico':
            iframe.src = 'pages/github.html'
        case 'instagram_ico':
            iframe.src = 'pages/instagram.html'
        case 'twitter_ico':
            iframe.src = 'pages/twitter.html'
        case 'facebook_ico':
            iframe.src = 'pages/facebook.html'
        default:
            iframe.src = 'pages/home.html'
    }
    console.log(nomeIcone)
    console.log(iframe.src)
}