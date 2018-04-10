const express = require('express')
const Path = require('path')
const fs = require('fs')

const app = express()
const port = 3005
const cwd = process.cwd()
const public_dir = 'build'
const static_dir = Path.resolve(cwd, public_dir)


const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}
app.use(express.static(static_dir, options))

app.get('/', (req, res) => {
    const indexFilePath = Path.resolve(static_dir, 'index.html')
    // const file = fs.readFileSync(indexFilePath)
    // res.send(file)
    res.sendFile(indexFilePath)
})


app.listen(port, () => console.log('Example app listening on port ' + port + '!'))