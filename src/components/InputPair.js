export default function InputPair(props)
{
    return (
        <div className="pair">
            <div>
                <label className="label">{props.first_label}</label>
                <input className="input" type="text" id={props.first_id} name={props.first_id}></input>
            </div>

            <div>
                <label className="label">{props.second_label}</label>
                <input className="input" type="text" id={props.second_id} name={props.second_id}></input>
            </div>
        </div>
    );
}