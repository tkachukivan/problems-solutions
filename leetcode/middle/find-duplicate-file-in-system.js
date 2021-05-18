/**
 * https://leetcode.com/problems/find-duplicate-file-in-system/
 * @param {string[]} paths
 * @return {string[][]}
 */
 var findDuplicate = function(paths) {
    const filesPaths = new Map();
    
    paths.forEach((path) => {
        const files = path.split(' ');
        const directory = files[0];
        
        for (let i = 1; i < files.length; i++) {
            const [fileName, content] = files[i].split('(');
            const filePath = `${directory}/${fileName}`;
            if (filesPaths.has(content)) {
                filesPaths.get(content).push(filePath);
            } else {
                filesPaths.set(content, [filePath]);
            }
        }
    });
    
    const result = [];
    
    for (let files of filesPaths.values()) {
        if (files.length > 1) result.push(files);
    }
    
    return result;
};