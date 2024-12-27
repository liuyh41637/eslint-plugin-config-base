#!/usr/bin/env node
const { exec } = require('child_process');
import { copyFile } from './util';
const operateType = process.argv[2] // 假设是config-base后的参数
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
    copyFile('.husky/pre-commit.sh', `${nodeArgvs[3] || '.husky'}/pre-commit.sh`);
    copyFile('.husky/commit-msg.sh', `${nodeArgvs[3] || '.husky'}/commit-msg.sh`);
  };break;
  case 'copy-pre-commit': {
    const sourcePath = `.husky/pre-commit.sh`
    const targetPath = nodeArgvs[4] || sourcePath
    copyFile(sourcePath, targetPath)
  };break;
  case 'copy-commit-msg': {
    const sourcePath = `.husky/commit-msg.sh`
    const targetPath = nodeArgvs[4] || sourcePath
    copyFile(sourcePath, targetPath)
  };break;
  default: break;
}

