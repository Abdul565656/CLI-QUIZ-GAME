#! /usr/bin/env node  

import inquirer from 'inquirer';
import chalk from 'chalk';

const questions = 
[
    {
        question: 'What keyword is used to declare a variable in TypeScript?',
        choices: ['var', 'let', 'const', 'type'],
        correctAnswer: 'let'
    },
    {
        question: 'What symbol is used to denote the type "any" in TypeScript?',
        choices: ['?', '!', '#', '*'],
        correctAnswer: '*'
    },
    {
        question: 'Which type in TypeScript represents a non-null or undefined value?',
        choices: ['null', 'undefined', 'void', 'never'],
        correctAnswer: 'void'
    },
    {
        question: 'What keyword is used to define a function in TypeScript?',
        choices: ['function', 'def', 'fn', 'func'],
        correctAnswer: 'function'
    },
    {
        question: 'Which TypeScript feature allows you to combine multiple types into one?',
        choices: ['Union', 'Intersection', 'Merge', 'Composition'],
        correctAnswer: 'Union'
    }
];

async function startQuiz(){
    console.log(chalk.bold.yellow("Welcome to the quiz game!\n"));
    let score = 0;

    for (let question of questions) {

        const answer = await inquirer.prompt([
            {
                type: 'list',
                name: 'answer',
                message: question.question,
                choices: question.choices
            }
        ]);

        if (answer.answer === question.correctAnswer){
            console.log(chalk.green(`correct!\n`));
            score++;
        } else {
            console.log(chalk.red('incorrect!\n'));
        }
    }

    console.log(chalk.bold.yellow(`Quize ended: Here are your results:`));
    console.log(chalk.blue(`You scored ${score} out of ${questions.length}`));
}

startQuiz();