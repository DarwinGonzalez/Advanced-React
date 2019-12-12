import PleaseSignIn from '../components/PleaseSignIn';
import Order from '../components/Order';

const OrderPage = props => (
    <div>
        <PleaseSignIn>
            <Order id={props.query.id}></Order>
        </PleaseSignIn>
    </div>
)
export default OrderPage;