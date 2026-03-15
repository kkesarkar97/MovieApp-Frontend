import loader from '../assets/loader.gif';


export default function Loading() {
    return (
        <div style={{ textAlign: 'center' }}>
            <img src={loader} alt="Loading..." />
        </div>
    );
}