import React from "react";
import Styles from "./SelectImage.module.css";

export  default function SelectImage(props:selectImageProps){

    const [imageBase64,setImageBase64]=React.useState<string>('');
    const [imageUrl,setImageUrl]=React.useState(props.imageUrl?props.imageUrl:'');
    function handleOnChange(e:React.ChangeEvent<HTMLInputElement>)
    {
        if(e.currentTarget.files)
            {
            const file=e.currentTarget.files[0];
            toBase64(file).then(value=>setImageBase64(value)).catch(err=>console.error(err))     
            props.selectedImage(file);
            setImageUrl('');
            
        }
    }
    function toBase64(file:File)
    {
        return new Promise<string>((resolve,reject)=>
            {
            const reader=new FileReader();
            reader.readAsDataURL(file);
            reader.onload=()=>{
                resolve(reader.result as string);
            }
            reader.onerror=(error)=>{
                reject(error);
            }
        });
    }

    return(
        <div className="form-group">
            <label>{props.displayName}</label>
            <div>   
            <input type="file" onChange={handleOnChange} accept={props.accept} />
            </div>
            {imageBase64?<div>
                <div className={Styles.div}>
                    <img src={imageBase64} alt="selected image" />
                </div>
            </div>:undefined}
            {imageUrl?<div>
                <div className={Styles.div}>
                    <img src={imageUrl} alt="selected image" />
                </div>
            </div>:undefined}
        </div>
    );
}

interface selectImageProps{
    displayName:string;
    accept?:string;
    selectedImage:(file:File)=>void;
    imageUrl?:string;
}