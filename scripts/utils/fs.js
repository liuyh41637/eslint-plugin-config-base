export const excludeFiles = (files=[]) => {
    const excludes = ['node_modules', 'dist', 'lib']
    return files.filter((path) => !excludes.some((exclude) => path.includes(exclude)))
}
