var pty = require('node-pty');

var ptyProcess = pty.spawn('scp', ['-r', './src', 'root@150.109.71.30:/root/data'], { stdio: 'pipe', encoding: 'utf8' });

let logined = false, totalFiles = 0, currentFile = ''
ptyProcess.on('data', function (data) {
    if (data.indexOf('Permission denied') > -1) {
        process.stdout.write(`密码错误， 登录失败 ${data}`);
        ptyProcess.kill()
    } else if (!logined && data.indexOf('password:') > -1) {
        ptyProcess.write('zcx!@#123\r')
    } else {
        logined = true
        let [xxx, file, percent, ...rest] = data.split(/\s+/)
        console.log('xxx, file, percent, ...rest:', xxx, file, percent, rest)
        if (file.length > 0 && percent == '100%') {
            currentFile = file
            totalFiles++
            process.stdout.write(`Line(${totalFiles}):${currentFile}\n`);
        }
    }
})

ptyProcess.on('exit', function (code) {
    process.stdout.write(`onexit${code}\n\r`);
})

ptyProcess.on('close', function () {
    process.stdout.write(`onClose: 共输出${totalFiles}行\n\r`);
})

ptyProcess.on('error', function (data) {
    process.stdout.write(`onerror${data}\n\r`);
})
