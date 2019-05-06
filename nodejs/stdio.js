const { spawn } = require('child_process')


function lsTest() {
    const ls = spawn('ls', ['-lh', '/haha'])

    // 输出的 data 为 buffer
    ls.stdout.on('data', data => {
        console.log('out:', data.toString('utf8'))
    })
    ls.stderr.on('data', data => console.log('err:', data.toString('utf8')))
    ls.on('close', code => console.log(`进程结束. Exit Code: ${code}`))
}



// 执行 ps ax | grep ssh 命令
function stdin() {
    const ps = spawn('ps', ['ax'])
    const grep = spawn('grep', ['ssh'])
    ps.stdout.on('data', data => {
        // console.log('ps stdout:', data.toString())
        console.log(888)
        grep.stdin.write(data)
    })
    ps.stderr.on('data', data => {
        console.log(`ps stderr: ${data.toString('utf8')}`)
    })
    ps.on('close', code => {
        if (code !== 0) {
            console.log(`ps进程结束. Exit Code: ${code}`)
        } else {
            // 结束 grep 的输入
            grep.stdin.end()
        }
    })
    ps.on('error', err => {
        console.log(`ps进程错误. ${err}`)
    })
    grep.stdout.on('data', data => {
        console.log('grep stdout:', data.toString())
    })
    grep.stderr.on('data', data => {
        console.log('grep stderr:', data.toString())
    })
    grep.on('close', code => {
        console.log(`grep进程结束. Exit Code: ${code}`)
    })
    grep.on('error', err => {
        console.log(`grep进程错误. ${err}`)
    })
}

// stdin()

// spawn 出错处理
function errHandler() {
    const subProcess = spawn('haha')
    subProcess.on('error', err => {
        console.log(`出错了：${err}`)
    })
}

// errHandler()

// 终结 spawn 进程
function killSpawn() {
    const subProcess = spawn('sh',
        ['-c', `node -e "setInterval(() => console.log(process.id, 'is alive'), 500)"`],
        {
            stdio: 'inherit'
        })
    setTimeout(() => {
        console.log('kill')
        subProcess.kill()
    }, 2500)
}
// killSpawn()

// scp

function scpTest() {
    // process.stdout.on('data', data => {
    //     console.log('process stdout:', data.toString())
    // })

    // process.stdin.on('readable', data => {
    //     let chunk;
    //     // Use a loop to make sure we read all available data.
    //     while ((chunk = process.stdin.read()) !== null) {
    //         process.stdout.write(`process-stdin-data: ${chunk}`);
    //         console.log('chunk:', chunk)
    //     }
    //     // console.log('process stdin:', data.toString())
    // })

    // process.stderr.on('data', data => {
    //     console.log('process stderr:', data.toString())
    // })

    // process.on('error', err => {
    //     console.log(`scp进程错误. ${err}`)
    // })

    const scp = spawn('scp', ['-r', '../nodejs', 'root:zcx!@#123@150.109.71.30:/root/data'], { stdio: 'pipe', encoding: 'utf8' })

    // console.log('isTTY:', scp.stdout.isTTY)
    scp.stdout.on('data', data => {
        console.log('scp stdout:', data.toString())
    })

    scp.stderr.on('data', data => {
        console.log('scp stderr:', data.toString())
    })
    scp.on('error', err => {
        console.log(`scp进程错误. ${err}`)
    })

}

scpTest()