import * as yup from 'yup';
import firstLetterUpperCase from '../../../validations/firstLetterUpperCase';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { TheatreCreation } from '../models/TheatreCreation';
import { NavLink } from 'react-router';
import Map from '../../../components/Map/Map'
import type Coordinate from '../../../components/Map/coordinate';
export default function TheatreForm(props:TheatreFormProps)
{
    const {register,handleSubmit,setValue,formState:{isSubmitting,errors,isValid}}=
    useForm<TheatreCreation>({
        resolver:yupResolver(validationRules),
        mode:'onChange',
        defaultValues:props.model??{name:'',latitude:0,longitude:0}
    });

    function transformCoordinate():Coordinate[]|undefined
    {
        if(props.model)
        {
            return [{
                latitude:props.model.latitude,
                longitude:props.model.longitude
            }];
        }
        return undefined;
    }

    return(
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <div className="form-group">
                <label htmlFor='name'>Name</label>
                <input id="name" autoComplete="off" {...register('name')} className="form-control" />
                {errors.name && <div className="text-danger">{errors.name.message}</div>}
            </div>
            <div className='mt-4'>
                <Map coordinates={transformCoordinate()} setCoordinates={coordinate=>{
                    setValue('latitude',coordinate.latitude,{shouldValidate:true});
                    setValue('longitude',coordinate.longitude,{shouldValidate:true});
                }} />
            </div>
            <div className="mt-2">
                <button type="submit" disabled={!isValid||isSubmitting} className="btn btn-primary">{isSubmitting?'Sending...':'Send'}</button>
                <NavLink className="btn btn-secondary ms-2" to="/theaters">Cancel</NavLink>
            </div>
        </form>
    );
}

interface TheatreFormProps{
    model?:TheatreCreation;
    onSubmit:SubmitHandler<TheatreCreation>;
}

const validationRules=yup.object({
    name:yup.string().required('The name is required').test(firstLetterUpperCase()),
    longitude:yup.number().required(),
    latitude:yup.number().required()
});