module.exports = {
    // parser: 'postcss-scss',
    map: 'inline',
    // syntax: 'postcss-scss',
    stringifier: 'midas',
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {},
        'cssnano': {}
    }

}