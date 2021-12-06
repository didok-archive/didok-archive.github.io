import fs from 'fs'
import fetch from 'node-fetch'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./data.json");

const fetchURL =  (url) => fetch(url).then(async (response) => await response.text())

const fillZero = (number) => {
    if (number.length === 1) return `00${number}`
    else if (number.length === 2) return `0${number}`
    else return `${number}`
}
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const main = async () => {
    for(const article of data) {
        const filename = `${fillZero(article.publish_count.toString())}_${article.published_at.split(' ').join('-')}_${article.title}.html`
        try {
            fs.writeFileSync(filename, await fetchURL(article.link))
        } catch (error) {
            console.log(`에러 - ${article.publish_count}`)
        }

        await sleep(200)
    }
}

main()