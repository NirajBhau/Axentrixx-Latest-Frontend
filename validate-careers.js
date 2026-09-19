const fs = require('fs');
const validator = require('html-validator');

async function validate() {
  const html = fs.readFileSync('.next/server/app/careers.html', 'utf8');
  try {
    const result = await validator({
      data: html,
      format: 'text'
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
validate();
