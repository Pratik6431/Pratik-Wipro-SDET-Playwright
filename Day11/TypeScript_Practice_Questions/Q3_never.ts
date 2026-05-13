type TaskStatus = 'Open' | 'InProgress' | 'Closed';

function handleTask(status: TaskStatus) {
  
    switch (status) {
        case 'Open' :
            console.log("Task not started.");
            break;
        case 'InProgress' :
            console.log("Working on task.");
            break;
        case 'Closed' :
            console.log("Task completed.");
            break;

        default:
            const _exhaustiveCheck: never = status;
            return _exhaustiveCheck;

    }
}

handleTask('Open');
handleTask('InProgress');
handleTask('Closed');