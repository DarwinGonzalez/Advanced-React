import SingleItem from "../components/SingleItem";

const Item = props => (
    <div>
        <SingleItem id={props.query.id}></SingleItem>
    </div>
)
export default Item;