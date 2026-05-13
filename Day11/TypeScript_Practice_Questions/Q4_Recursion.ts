type FolderNode = {
    name: string,
    files?: string[],
    subFolders?: FolderNode[];
};

const myDocuments: FolderNode = {
    name: "Root",
    files: ["resume.pdf", "photo.jpg"],
    subFolders: [
        {
            name: "Work",
            files: ["project.ts", "notes.txt"],
            subFolders: [
                {
                    name: "Old Projects",
                    files: ["v1_backup.zip"]

                }
            ]
        },
        {
            name: "Music",
            files: ["song1.mp3"]
        }
    ]
};

console.log(`Root Folder Name: ${myDocuments.name}`);
console.log(`Work Folder has ${myDocuments.subFolders?.[0]?.files?.length ?? 0} files.`);