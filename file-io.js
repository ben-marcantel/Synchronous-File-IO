#!/usr/bin/env node

const fs = require('fs')
let input = process.argv[2];
let output;

const pathInput =()=>{
   output = fs.readFileSync(input);
}

const write = ()=>{
    process.stdout.write(output + "\n");    
}

const toTerminal= ()=>{
    pathInput(input);
    write(output);
}

toTerminal(input);