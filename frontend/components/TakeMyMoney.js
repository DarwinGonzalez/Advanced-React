import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import Nprogress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import calcTotalPrice from '../lib/calcTotalPrice';
import Error from './ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';

function totalItems(cart) {
    return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}
class TakeMyMoney extends React.Component {
    onToken = (res) => {
        console.log('Print res!!!');
        console.log(res.id);
    };
    render() {
        return (
            <User>
                {({data: { me }}) => (
                    <StripeCheckout
                        amount={calcTotalPrice(me.cart)}
                        name="Sick Fits"
                        description={`Order of ${totalItems(me.cart)} item${totalItems(me.cart) === 1 ? '': 's'}!`}
                        image={me.cart[0] && me.cart[0].item.image}
                        stripeKey="pk_test_yHqrpIuxxlYQ3TFkzr5jH3be00Nt1J7Xi9"
                        currency="USD"
                        email={me.email}
                        token={res => this.onToken(res)}
                    >{this.props.children}</StripeCheckout>
                )}
            </User>
        )
    }
}

export default TakeMyMoney;