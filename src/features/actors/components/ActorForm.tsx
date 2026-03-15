
import { useForm, type SubmitHandler } from "react-hook-form";
import  type ActorCreation from '../models/ActorCreation';
import { NavLink } from "react-router";
import Button from "../../../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import firstLetterUpperCase from "../../../validations/firstLetterUpperCase";
import dateNotToBeInFuture from "../../../validations/datenottobeInfuture";
import SelectImage from "../../../components/SelectImage/SelectImage";

export default function ActorForm(props:ActorFormProps)
{
    const imageUrl:string | undefined=props.model?.picture?props.model.picture as string :undefined;
    const {register,handleSubmit,setValue,formState:{isSubmitting,errors,isValid}}=
    useForm<ActorCreation>({
        resolver:yupResolver(validationRules),
        mode:'onChange',
        defaultValues:props.model??{name:''}
    })
    return(
        <>  
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className="form-group">
                <label htmlFor='name'>Name</label>
                <input id="name" autoComplete="off" {...register('name')} className="form-control" />
                {errors.name && <div className="text-danger">{errors.name.message}</div>}
            </div>
            <div className="form-group">
                <label htmlFor='dateOfBirth'>Date of Birth</label>
                <input id="dateOfBirth" type="date" {...register('dateOfBirth')} className="form-control" />
                {errors.dateOfBirth && <div className="text-danger">{errors.dateOfBirth.message}</div>}
            </div>
            <div className="form-group">
                <SelectImage imageUrl={imageUrl} displayName="Select Image" accept=".jpg,.jpeg,.png" selectedImage={file=>setValue('picture',file)} />
                </div>
            <div className="mt-2">
                <Button type="submit" disabled={!isValid||isSubmitting}>{isSubmitting?'Sending...':'Send'}</Button>
                <NavLink className="btn btn-secondary ms-2" to="/actors">Cancel</NavLink>
            </div>
        </form>
        </>);
}

interface ActorFormProps{
    model?:ActorCreation;
    onSubmit:SubmitHandler<ActorCreation>;
}

const validationRules=yup.object({
    name:yup.string().required('The name is required').test(firstLetterUpperCase()),
    dateOfBirth:yup.string().required('The date of birth field is required').test(dateNotToBeInFuture())
});