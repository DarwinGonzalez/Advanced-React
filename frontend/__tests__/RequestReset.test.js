import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils'
import RequestReset, { REQUEST_RESET_MUTATION } from '../components/RequestReset';

const mocks = [
    {
        request: {
            query: REQUEST_RESET_MUTATION,
            variables: { email: 'wesbos@gmail.com '},
        },
        result: {
            data: { requestRese: { message: 'success', __typename: 'Message' }}
        }
    }
];

describe('<requestReset />', () => {
    it('renders and matches snapshot', async () => {
        const wrapper = mount(
            <MockedProvider>
                <RequestReset></RequestReset>
            </MockedProvider>
        );
        const form = wrapper.find('form[data-test="form"]');
        expect(toJSON(form)).toMatchSnapshot();
    });

    // it('class the mutation', async () => {
    //     const wrapper = mount(
    //         <MockedProvider mocks={mocks}>
    //             <RequestReset></RequestReset>
    //         </MockedProvider>
    //     );
    //     // Simulate typing an email
    //     wrapper.find('input').simulate('change', { target: { name: 'email', value: 'wesbos@gmail.com'} });
    //     // submit the form
    //     wrapper.find('form').simulate('submit');
    //     await wait();
    //     wrapper.update();
    // });
});