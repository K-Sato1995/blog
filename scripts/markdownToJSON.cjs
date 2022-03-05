"use strict";
const mdToJSON = require("markdown-json");
const path = require('path');

const contentPath = path.resolve(__dirname, '../content')
const outputPath = path.resolve(__dirname, '../src/data/posts.json')

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
        
