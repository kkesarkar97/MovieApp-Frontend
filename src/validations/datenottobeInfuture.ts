export default function dateNotToBeInFuture(){
    return {
        name:'date not to be in future',
        message:'The date cannot be in the future',
        test:(value:string|undefined)=>{
            if(!value){
                return true;
            }
            const today=new Date();
            const inputDate=new Date(value);
            return inputDate<=today;

    }
}
}