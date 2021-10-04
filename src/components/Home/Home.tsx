import React, { useState } from 'react';
import { Accounts } from '../Accounts/index';
import { AccountInfo } from '../AccountInfo';

import './Home.scss';

export const Home: React.FC = () => {
  const [currencyObj, setCurrency] = useState<CurrencyObj | null>(null);

  const handleClick = (obj: CurrencyObj) => {
    setCurrency(obj);
  };

  return (
    <div className="page-wrapper">
      <div className="Home">
        <div className="Home__links">
          <h2 className="page-title">Your accounts</h2>
          <Accounts handleClick={handleClick} />
        </div>
        {currencyObj
        && (
          <div className="Home__info">
            <AccountInfo currencyObj={currencyObj} />
          </div>
        )}
      </div>
    </div>
  );
};
