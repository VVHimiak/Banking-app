import React from 'react';
import { Accounts } from '../Accounts/index';

export const SendMoney: React.FC = () => {
  // const [activeLink, setCurrency] = useState<CurrencyObj | null>(null);

  // const handleClick = (obj: CurrencyObj) => {
  //   setCurrency(obj);
  // };

  return (
    <div className="page-wrapper">
      <h2 className="page-title">Send from</h2>
      <div className="SendMoney Page__links">
        <Accounts />
      </div>
    </div>
  );
};

// <Accounts />
