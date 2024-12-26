const { exec } = require('child_process');
const p = process
const nodeArgvs = p.argv
nodeArgvs.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
// const a = nodeArgvs[2]
// if(a === 'husky') {
//   exec('npx husky install', (error, stdout, stderr) => {
//     if (error) {
//       console.error(`执行的错误: ${error}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//   });
// }
