import fs from 'fs'

const main = () => {
    const files = fs.readdirSync('articles').reverse()
    const mapped = files.map(file => {
        const [publishedCount, publishedAt, title] = file.split('_')
        const onlyFileName = (title ?? '' ).replace('.html', '')
        return `<tr><td><a href="/articles/${file}">${onlyFileName}</a></td><td>${publishedAt.split('-').join(' ')}</td><td>${publishedCount}</td></tr>`
    })
    fs.writeFileSync('table.html', mapped.join(''))
}

main()