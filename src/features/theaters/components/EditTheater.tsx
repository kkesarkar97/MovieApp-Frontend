import { useParams } from "react-router";
import { useState, useEffect } from "react";
import type { SubmitHandler } from "react-hook-form";
import TheatreForm from "./TheatreForm";
import type { TheatreCreation } from "../models/TheatreCreation"; // Adjust the import path based on your project structure
import Loading from "../../../components/Loading"; // Adjust the import path based on your project structure
 // Adjust the import path based on your project structure

export default function EditTheater() {
    const { id } = useParams();
    const [model, setModel] = useState<TheatreCreation | undefined>(undefined);

    useEffect(() => {
        const timerId = setTimeout(() => {
            // TODO: replace with real API call using `id`
            setModel({ name: 'Action ',latitude:18.5003109099764,longitude:73.8583374042719 });
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [id]);

    const onSubmit: SubmitHandler<TheatreCreation> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
    };

    return (
        <div>
            <h1>Edit Theatre :</h1>
            {model ? <TheatreForm onSubmit={onSubmit} model={model} /> : <Loading />}
        </div>
    );
}

