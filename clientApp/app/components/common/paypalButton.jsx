import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

export default class paypalButton extends React.Component {
    render() {
      const { amount, onSuccess, currency } = this.props;
        return (
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details, data) => onSuccess(details, data)}
              options={{
                clientId: "AZ3WXeoaWf7CtzjsraHhVwtszPu2XIL37LmI-w9OGZYWdLWTXK1Jh1DdlpZb2JH8l_n7Q3UKpYKf9-4K",
                currency: currency
              }}
          />
        );
    }
}