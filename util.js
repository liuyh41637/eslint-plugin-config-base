const path = require("path");
const fs = require('fs');
// 获取执行的项目路径
export function getProjectPath() {
  return process.cwd();
}
// 获取tsconfig.json配置路径
export function getConfigPath() {
  const projectPath = getProjectPath();
  const configPath = path.resolve(projectPath, "tsconfig.json");
  return configPath
}
// 从源路径复制文件到目标路径
export function copyFile(source, target) {
  const sourcePath = path.join(__dirname, source);
  const targetPath = path.join(getProjectPath(), target);
  fs.copyFileSync(sourcePath, targetPath);
}
// 读取项目中的tsconfig文件
export function readConfigFile() {
  try {
    const tsConfigPath = getConfigPath() 
    const config = JSON.parse(fs.readFileSync(tsConfigPath, "utf-8"));
    return config;
  } catch (error) {
    console.error("Failed to read tsconfig.json file:", error);
    return null;
  }
}