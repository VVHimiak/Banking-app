import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './AccountInfo.scss';

type Props = {
  currencyObj: CurrencyObj;
};

export const AccountInfo: React.FC<Props> = (props) => {
  const { currency, balance } = props.currencyObj;

  return (
    <div className="AccountInfo">
      <div className="AccountInfo__balance">
        <h3 className="AccountInfo__title">Balance</h3>
        <div className="AccountInfo__balance-wrapper">
          <span
            className={
              classNames(
                'AccountInfo__balance-amount',
                {
                  euro: currency === 'eur',
                  dollar: currency === 'usd',
                  pound: currency === 'gbp',
                  'korea-won': currency === 'krw',
                },
              )
            }
          >
            {balance.toFixed(2)}
          </span>
          <button type="button" className="AccountInfo__balance-top-up-button">
            Top up
          </button>
        </div>
      </div>
      <div className="AccountInfo__transactions">
        <Link to="/send-money" className="Navigation__logo">
          send money
        </Link>
      </div>
      <div className="AccountInfo__description">

      </div>
    </div>
  );
};
