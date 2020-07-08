import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

type ApplicationProps = {
    authenticated: boolean
}

const Application = ({authenticated}: ApplicationProps) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState<Array<Task>>([]);

    useEffect(() => {
        axios.get("/tasks")
            .then(function (response) {
                setLoading(true);

                setTasks(response.data);
            })
            .catch(function (error) {
                setLoading(true);

                setError(error);
            });
    }, [])

    return (
        <div/>
    );
};

export default Application;
