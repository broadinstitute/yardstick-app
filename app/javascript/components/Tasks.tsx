import * as React from "react";

type TasksProps = {
    children: any;
};

const Tasks = ({ children }: TasksProps): JSX.Element => (
    <div id="tasks">{children}</div>
);

export default Tasks;
