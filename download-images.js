import fs from 'fs'
import fetch from 'node-fetch'

async function download(url) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFile(`./image.jpg`, buffer, () =>
        console.log('finished downloading!'));
}

const main = () => {
    const files = fs.readdirSync('./articles')
    const sample = fs.readFileSync(`./articles/${files[0]}`).toString()

    // files.forEach(file => {
    //     const html = fs.readFileSync(`./articles/${file}`).toString()
    //     console.log(html)
    // })
}
main()