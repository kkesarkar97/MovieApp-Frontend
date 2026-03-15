import type MultipleSelector from "./Multiple.module";
import Styles from './Multiple.module.css';

export default function MultipleSelector(props: MultipleSelectorProps) {

    function Select(item: MultipleSelector) {
        const selected=[...props.selected,item];
        const nonSelected=props.nonSelected.filter(x=>x!==item);
        props.onChange(selected,nonSelected);
    }
    
    function deSelect(item: MultipleSelector) {
        const nonSelected=[...props.nonSelected,item];
        const selected=props.selected.filter(x=>x!==item);
        props.onChange(selected,nonSelected);
    }

    function SelectAll() {
        const selected=[...props.selected,...props.nonSelected];
        const nonSelected:MultipleSelector[]=[];
        props.onChange(selected,nonSelected);
    }
    function DeSelectAll() {
        const nonSelected=[...props.nonSelected,...props.selected];
        const selected:MultipleSelector[]=[];
        props.onChange(selected,nonSelected);
    }
    return (
        <div className={Styles.multipleSelectors}>
            <ul className={Styles.list}>
                {props.nonSelected.map(item => (
                    <li key={item.key} onClick={() => Select(item)}>
                        {item.description}
                    </li>
                ))}
            </ul>

            <div className={Styles.buttons}>
                <button type="button" onClick={SelectAll}>{'>>'}</button>
                <button type="button" onClick={DeSelectAll}>{'<<'}</button>
            </div>

            <ul className={Styles.list}>
                {props.selected.map(item => (
                    <li key={item.key} onClick={() => deSelect(item)}>{item.description}</li>
                ))}
            </ul>
        </div>
    );
}


interface MultipleSelectorProps
{
    selected:MultipleSelector[];
    nonSelected:MultipleSelector[];
    onChange:(selected:MultipleSelector[], nonSelected:MultipleSelector[])=>void;
}