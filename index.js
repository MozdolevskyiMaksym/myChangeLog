const { prompt } = require('enquirer');
const randomWord = require('random-word');
const fs = require('fs');

(async function generateSiteMap() {
    const cwd = process.cwd();

    const askQuestionAboutChangeType = async () => {
        const message = 'What kind of changes do you have?';
        return prompt({
            type: 'select',
            name: 'question',
            message,
            choices: ["patch", "minor", "major"]
        })
            .then((answer) => answer.question);
    };

    const askQuestionAboutSummary = async () => {
        return prompt({
            type: 'input',
            name: 'summary',
            message: "",
        })
            .then((message) => message.summary);
    };

    const createFile = async (answers) => {
        const { changeType, changeContent } = answers;
        const fileName = randomWord();
        const content = `---
"@kaamos/mychange-log": ${changeType}
---

${changeContent}`;

        fs.writeFile(`${cwd}/.changeset/${fileName}.md`, content, () => {});
    };

    const answerAboutChangeType = await askQuestionAboutChangeType();
    const answerAboutSummary = await askQuestionAboutSummary();

    const answers = {
        changeType: answerAboutChangeType,
        changeContent: answerAboutSummary
    }

    await createFile(answers);
})();