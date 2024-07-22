export default function Display(props)
{
    return(
        <div>
            <p>{props.id}</p>
            <h4>{props.title}</h4>
            <h5>{props.author}</h5>
        </div>
    );
}