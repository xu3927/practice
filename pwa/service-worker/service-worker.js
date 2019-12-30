// 注册service worker

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function(register) {
        console.log(34543)
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function(registration) {
                console.log('注册service成功', registration)
            })
            .catch(err => console.log('注册失败'))
    })
}
