export default function Button(props: buttonProps) {
    return (
        <button type={props.type || 'button'} disabled={props.disabled ?? false} className={props.className??'btn btn-primary'} onClick={props.onClick}>{props.children}</button>
    );
}

interface buttonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset'; 
    disabled?:boolean;
    className?:string;
}