import * as React from "react";

type TasksProps = {
    children: any;
};

const Tasks = ({ children }: TasksProps) => <div id="tasks">{children}</div>;

export default Tasks;
