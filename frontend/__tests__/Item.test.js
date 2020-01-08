import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
    id: 'ABC123',
    title: 'A Cool Item',
    price: 5000,
    description: 'This item is really cool!',
    image: 'dog.jpg',
    largeImage: 'large-dog.jpg'
};

describe('<Item />', () => {
    it('renders and matches the snapshot', () => {
        const wrapper = shallow(<ItemComponent item={fakeItem} />);
        expect(toJSON(wrapper)).toMatchSnapshot();
    })
    // it('renders the image properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem}/>);
    //     const img = wrapper.find('img');
    //     expect(img.props().src).toBe(fakeItem.image);
    //     expect(img.props().alt).toBe(fakeItem.title);
    // });

    // it('renders and displays properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem}/>);
    //     const priceTag = wrapper.find('PriceTag');
    //     console.log(priceTag.children().text());
    //     expect(priceTag.dive().text()).toBe('$50');
    //     expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
    // });

    // it('renders out the buttons properly', () => {
    //     const wrapper = shallow(<ItemComponent item={fakeItem} />);
    //     const ButtonList = wrapper.find('.buttonList');
    //     expect(ButtonList.children()).toHaveLength(3);
    //     expect(ButtonList.find('Link')).toHaveLength(1);
    //     expect(ButtonList.find('Link').exists()).toBe(true);
    //     expect(ButtonList.find('AddToCart').exists()).toBe(true);
    //     expect(ButtonList.find('DeleteItem').exists()).toBe(true);
    //     // expect(ButtonList.find('Link')).toBeTruthy();
    // })
});