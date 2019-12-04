import Signup from "../components/Signup";
import styled from 'styled-components';

// The best way to display components in columns
const Columns = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
`;

const SignupPage = props => (
    <Columns>
        <Signup />
        <Signup />
        <Signup />
    </Columns>
)
export default SignupPage;