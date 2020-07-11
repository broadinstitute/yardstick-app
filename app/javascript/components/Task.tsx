import * as React from "react";

type TaskProps = {
    children: any;
}

const Task = ({children}: TaskProps) => {
    return (
        <div id="task">
            {children}
        </div>
    )
};

export default Task;
