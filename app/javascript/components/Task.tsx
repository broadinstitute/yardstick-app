import * as React from "react";

type TaskProps = {
    children: any;
};

const Task = ({ children }: TaskProps): JSX.Element => (
    <div id="task">{children}</div>
);

export default Task;
