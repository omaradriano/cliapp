#!/usr/bin/env node

import commander from 'commander'

import { exec } from 'child_process';
const program = new commander.Command();

program
    .name('string-util')
    .description('CLI to some JavaScript string utilities')
    .version('0.0.1');

program.command('count')
    .description("Counts total words given an string")
    .argument("<string>", "Text that we can count")
    .option("--count", "Muestra el total de palabras ingresadas")
    .action((str, options) => {
        console.log(str.split(" ").length);
    })

program.command('tasks')
    .description("Shows all the tasks in json-file")

program.command("add")
    .description("Add a task to generated json file if there's not file. Command creates one.")
    .argument("<string>", "Title of the task")
    .action((title: string)=>{

    })

program.parse()

// const menu: string = `
//     help - shows all options
//     tasks - shows all tasks
// `
// if(process.argv.length == 2) console.log("No se han ingresado comandos. Prueba con help para mas informacion.");

// switch(process.argv[2]){
//     case "menu":
//         console.log(menu);
//         break;
// }
