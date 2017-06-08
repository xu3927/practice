/**
 * CORS 跨域资源共享 Cross-origin resource sharing
 * XMLHttpRequest 请求的跨域
 */

export default function CORS () {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        console.log('statechange:', xhr.readyState);
    }
    xhr.open('post', 'http://sub.localhost.com/cors');
    xhr.setRequestHeader('haha', 'I am haha');
    xhr.withCredentials = true;
    xhr.send({
        msg: '我是跨域请求'
    });
}