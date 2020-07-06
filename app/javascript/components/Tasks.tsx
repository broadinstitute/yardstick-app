import * as React from "react";

type Task = {
    created_at: string
    description: string
    id: string
    name: string
    updated_at: string
}

type TasksProps = {
    tasks: Array<Task>
}

const Tasks = ({tasks}: TasksProps) => {
    console.log(tasks);

    return <div/>
};

export default Tasks;
