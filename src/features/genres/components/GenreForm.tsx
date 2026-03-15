import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../../../components/Button";
import { NavLink } from "react-router";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import firstLetterUpperCase from "../../../validations/firstLetterUpperCase";
import type CreateGenre from "../models/createGenre.module";

export default function GenreForm(props:GenreFormProps) {
   const {register,handleSubmit,
    formState:{errors,isValid,isSubmitting}}
   =useForm<CreateGenre>({
    resolver:yupResolver(validationRules),
    mode:'onChange',
    defaultValues:props.model??{name:''}
   });
   
    return (
        <div>
            
            <form onSubmit={handleSubmit(props.onSubmit)}>
                <div className="form-group">
                    <label>Name</label>
                    <input autoComplete="off" className="form-control" {...register('name')} />
                    {errors.name && <div className="text-danger">{errors.name.message}</div>}
                </div>
                <div className="mt-2">
                    <Button type="submit" disabled={!isValid||isSubmitting}>{isSubmitting?'Sending...':'Send'}</Button>
                    <NavLink className="btn btn-secondary" to="/genres">Cancel</NavLink>
                </div>
            </form>
            
        </div>
    );
}



const validationRules=yup.object({
    name:yup.string().required('This field is required').test(firstLetterUpperCase())   
});

interface GenreFormProps{
    onSubmit:SubmitHandler<CreateGenre>;
    model?:CreateGenre;
}