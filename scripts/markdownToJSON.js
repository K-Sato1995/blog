import mdToJSON from 'markdown-json'
import path from 'path'
import { Remarkable  } from 'remarkable';

const __dirname = path.resolve();
const contentPath = path.join(__dirname, '/content')
const outputPath = path.join(__dirname, '/src/data/posts.json')

const setting = {
    name: 'markdown-json',
    cwd: './',
    src: contentPath,
    filePattern: '**/*.md',
    ignore: "*(icon|input)*",
    dist: outputPath,
    metadata: true,
};


mdToJSON(setting).then(() => {
    console.log('Successfully Generated Posts Dat')
})["catch"](function (err) {
    console.log('error:', err);
});
        
