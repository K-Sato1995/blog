import path from 'path'
import glob from 'glob'
import { Remarkable  } from 'remarkable';
import * as fs from 'fs'
import hljs from 'highlight.js'
import { linkify } from 'remarkable/dist/cjs/linkify.js';
import meta from 'remarkable-meta'

const __dirname = path.resolve();
const contentPath = path.join(__dirname, '/content')
const outputPath = path.join(__dirname, '/src/data/posts.json')

// Config
const remarkableOptions = {
    html: true,
    breaks: true,
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    typographer:  false,
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (err) {
              console.log(err)
          }
        }
    
        try {
          return hljs.highlightAuto(str).value;
        } catch (err) {
            console.log(err)
        }
    
        return ''; 
      }
}


// Utils
const getMDFiles = (path) => {
    return glob.sync(path + '/**/*.md')
}
const ppJSON = (obj) => JSON.stringify(obj, null, 2)


// MD Parser
const parser = new Remarkable(remarkableOptions).use(linkify).use(meta);

const constructJSONObj = (contentPath) => {
    const jsonObj = {
        "data": []
    }
    const mdFiles = getMDFiles(contentPath)

    for(let i = 0; i < mdFiles.length; i++) {
        const mdFile = mdFiles[i]
        const mdText = fs.readFileSync(mdFile).toString();
        const item = {
            body: parser.render(mdText),
            ...parser.meta,
        }
        jsonObj.data.push(item) 
    }
    return jsonObj
}


// Write
const writeJSON = (outputPath, jsonObj) => {
    fs.writeFile(outputPath, ppJSON(jsonObj), (err) => {
        if (err) throw err;
        console.log('Successfully Created the JSON FILE!');
    });    
}

const jsonObj = constructJSONObj(contentPath)
writeJSON(outputPath, jsonObj)