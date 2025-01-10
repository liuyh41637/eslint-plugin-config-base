#!/usr/bin/env node
const { exec } = require('child_process');
const { copyFile } = require('./lib/cjs/util');
const nodeArgvs = process.argv
const operateType = nodeArgvs[2] // 假设是config-base后的参数
switch(operateType){
  case 'husky': {
    exec('npx husky install', (error, stdout, stderr) => {
      if (error) {
        console.error(`执行的错误: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });
  };break;
  case 'copy': {
    copyFile('.husky/pre-commit', `${nodeArgvs[3] || '.husky'}/pre-commit`);
    copyFile('.husky/commit-msg', `${nodeArgvs[3] || '.husky'}/commit-msg`);
  };break;
  case 'copy-pre-commit': {
    const sourcePath = `.husky/pre-commit`
    const targetPath = nodeArgvs[4] || sourcePath
    copyFile(sourcePath, targetPath)
  };break;
  case 'copy-commit-msg': {
    const sourcePath = `.husky/commit-msg`
    const targetPath = nodeArgvs[4] || sourcePath
    copyFile(sourcePath, targetPath)
  };break;
  default: break;
}

