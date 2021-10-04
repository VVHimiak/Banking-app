import React, { useState, useEffect } from 'react';
import './Accounts.scss';
import classNames from 'classnames';

const URL = 'https://vhmfz744o2.execute-api.eu-west-2.amazonaws.com/dev/data';

type Props = {
  handleClick?: (obj: CurrencyObj) => void;
};

export const Accounts: React.FC<Props> = (props) => {
  const [error, setError] = useState<{message: string} | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [balance, setBalance] = useState(0);
  const [activeAccount, setActiveAccount] = useState('gbp');

  useEffect(() => {
    fetch(URL, {
      headers: {
        'x-api-key': 'ieLWvByj0Z7obl0aLmVzmiJgbjVXZf987aoRts59',
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAccounts(result.body.accounts);
          setBalance(result.body.balance);

          const gbpAccount = result.body.accounts.find((account: Account) => account.currency === 'gbp');

          if (gbpAccount && props.handleClick) {
            props.handleClick(
              {
                currency: gbpAccount.currency,
                balance: gbpAccount.balance,
              },
            );
          }
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        },
      );
  }, []);

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Accounts__wrapper">
      <ul className="Accounts__list">
        {accounts.map(account => (
          <li key={account.title} className="Accounts__item">
            <button
              type="button"
              className={
                classNames(
                  'Accounts__button',
                  {
                    active: activeAccount === account.currency,
                  },
                )
              }
              onClick={
                // eslint-disable-next-line consistent-return
                (): void | CurrencyObj => {
                  setActiveAccount(account.currency);
                  if (props.handleClick) {
                    setActiveAccount(account.currency);

                    return (
                      props.handleClick(
                        {
                          currency: account.currency,
                          balance: account.balance,
                        },
                      ));
                  }
                }
              }
            >
              <span
                className={
                  classNames(
                    'Accounts__button-currency-title',
                    {
                      euro: account.currency === 'eur',
                      dollar: account.currency === 'usd',
                      pound: account.currency === 'gbp',
                      'korea-won': account.currency === 'krw',
                      active: activeAccount === account.currency,
                    },
                  )
                }
              >
                {account.title}
              </span>
              <span
                className={
                  classNames(
                    'Accounts__button-currency-balance',
                    {
                      euro: account.currency === 'eur',
                      dollar: account.currency === 'usd',
                      pound: account.currency === 'gbp',
                      'korea-won': account.currency === 'krw',
                    },
                  )
                }
              >
                {account.balance.toFixed(2)}
              </span>
            </button>
          </li>
        ))}
      </ul>
      <strong>
        Balance:
        {balance}
      </strong>
    </div>
  );
};
