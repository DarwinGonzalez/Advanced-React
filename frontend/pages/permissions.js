import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';

const PermissionsPage = props => (
    <div>
        <PleaseSignIn>
            <Permissions></Permissions>
        </PleaseSignIn>
    </div>
)
export default PermissionsPage;