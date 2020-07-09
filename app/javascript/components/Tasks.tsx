import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

type TasksProps = {
    tasks: any
}

const Tasks = ({}: TasksProps) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState<Array<Task>>([]);

    return (
        useEffect(() => {
            axios.get("/tasks.json")
                .then(function (response) {
                    setLoading(true);

                    setTasks(response.data);
                })
                .catch(function (error) {
                    setLoading(true);

                    setError(error);
                });
        }, [])
    )
};

export default Tasks;
