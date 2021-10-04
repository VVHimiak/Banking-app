/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul className="Navigation__list">
        <li
          id="home"
          className="Navigation__list-item"
        >
          <NavLink
            to="/"
            exact
            className="Navigation__list-link"
            activeClassName="is-active"
          >
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              className="Navigation__list-link-ico"
            >
              <path
                d="M9.73575 5.35524L3.94122 11.1967V17.5014C3.94122 17.6647 3.9942 17.8212 4.0885 17.9366C4.18281 18.0521 4.31071 18.1169 4.44408 18.1169L7.96599 18.1058C8.09892 18.1049 8.22618 18.0397 8.31994 17.9244C8.4137 17.8091 8.46634 17.653 8.46634 17.4903V13.8084C8.46634 13.6452 8.51932 13.4886 8.61362 13.3732C8.70793 13.2577 8.83583 13.1929 8.9692 13.1929H10.9806C11.114 13.1929 11.2419 13.2577 11.3362 13.3732C11.4305 13.4886 11.4835 13.6452 11.4835 13.8084V17.4876C11.4833 17.5686 11.4961 17.6488 11.5213 17.7237C11.5465 17.7986 11.5835 17.8667 11.6302 17.924C11.6769 17.9814 11.7324 18.0269 11.7936 18.058C11.8547 18.089 11.9202 18.105 11.9864 18.105L15.507 18.1169C15.6404 18.1169 15.7683 18.0521 15.8626 17.9366C15.9569 17.8212 16.0099 17.6647 16.0099 17.5014V11.1925L10.2166 5.35524C10.1485 5.28804 10.0637 5.2514 9.97618 5.2514C9.8887 5.2514 9.80385 5.28804 9.73575 5.35524ZM18.8888 9.32562L16.2613 6.67472V1.34639C16.2613 1.22396 16.2216 1.10655 16.1508 1.01997C16.0801 0.933401 15.9842 0.884766 15.8842 0.884766H14.1241C14.0241 0.884766 13.9282 0.933401 13.8575 1.01997C13.7867 1.10655 13.747 1.22396 13.747 1.34639V4.13962L10.9332 1.306C10.6632 1.03402 10.3243 0.885309 9.9746 0.885309C9.6249 0.885309 9.28606 1.03402 9.01603 1.306L1.06046 9.32562C1.02227 9.36425 0.99067 9.41172 0.967473 9.46531C0.944276 9.51889 0.929933 9.57755 0.925263 9.63793C0.920593 9.6983 0.925688 9.75921 0.940257 9.81717C0.954825 9.87514 0.978582 9.92902 1.01017 9.97574L1.8116 11.1683C1.84311 11.2152 1.88185 11.254 1.92563 11.2825C1.9694 11.311 2.01734 11.3287 2.06671 11.3346C2.11607 11.3404 2.16589 11.3342 2.21331 11.3165C2.26074 11.2987 2.30483 11.2696 2.34307 11.231L9.73575 3.77801C9.80385 3.71082 9.8887 3.67417 9.97618 3.67417C10.0637 3.67417 10.1485 3.71082 10.2166 3.77801L17.6096 11.231C17.6478 11.2696 17.6918 11.2987 17.7391 11.3166C17.7865 11.3344 17.8363 11.3406 17.8856 11.3349C17.9349 11.3292 17.9828 11.3116 18.0266 11.2832C18.0704 11.2549 18.1092 11.2162 18.1407 11.1694L18.9422 9.9769C18.9737 9.9299 18.9974 9.87574 19.0118 9.81753C19.0262 9.75931 19.031 9.69818 19.0261 9.63766C19.0211 9.57714 19.0064 9.51842 18.9829 9.46486C18.9593 9.41131 18.9273 9.36399 18.8888 9.32562Z"
              />
            </svg>
            <span>Home</span>
          </NavLink>
        </li>
        <li
          className="Navigation__list-item"
        >
          <NavLink
            to="/send-money"
            exact
            className="Navigation__list-link"
            activeClassName="is-active"
          >
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              className="Navigation__list-link-ico"
            >
              <path
                d="M14.3243 0.397982L0.950116 8.96841C0.427845 9.30174 0.494211 10.1094 1.0136 10.353L4.08086 11.7825L12.3708 3.66718C12.5295 3.51013 12.7546 3.75051 12.619 3.9332L5.66787 13.3402V15.9203C5.66787 16.6767 6.49023 16.9747 6.8942 16.4267L8.72648 13.9491L12.3218 15.6222C12.7315 15.8145 13.199 15.5292 13.274 15.0389L15.3515 1.19285C15.4496 0.545416 14.8235 0.0774719 14.3243 0.397982Z"
              />
            </svg>
            <span>Send Money</span>
          </NavLink>
        </li>
        <li className="Navigation__list-item">
          <NavLink
            to="/top-up"
            exact
            className="Navigation__list-link"
            activeClassName="is-active"
          >
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              className="Navigation__list-link-ico"
            >
              <path
                d="M18.5017 8.4027H17.577C17.3011 7.71633 16.8999 7.10889 16.4046 6.60097L16.9971 4.00992H15.994C15.0724 4.00992 14.2574 4.47322 13.7057 5.18705C13.4675 5.14929 13.2324 5.10811 12.9847 5.10811H8.97242C6.54622 5.10811 4.52439 6.99564 4.05733 9.50089H2.70317C2.23924 9.50089 1.87249 9.03759 1.96653 8.51252C2.03549 8.12128 2.3709 7.8536 2.73452 7.8536H2.76586C2.8693 7.8536 2.95394 7.76094 2.95394 7.64769V6.96132C2.95394 6.84807 2.8693 6.7554 2.76586 6.7554C1.87249 6.7554 1.0763 7.4555 0.963453 8.42329C0.825529 9.59698 1.65934 10.5991 2.70317 10.5991H3.95702C3.95702 12.3905 4.75321 13.9657 5.96318 14.9678V17.7374C5.96318 18.0394 6.18887 18.2865 6.46472 18.2865H8.47088C8.74673 18.2865 8.97242 18.0394 8.97242 17.7374V16.0901H12.9847V17.7374C12.9847 18.0394 13.2104 18.2865 13.4863 18.2865H15.4924C15.7683 18.2865 15.994 18.0394 15.994 17.7374V14.9678C16.3639 14.6624 16.693 14.3021 16.9751 13.8937H18.5017C18.7775 13.8937 19.0032 13.6466 19.0032 13.3446V8.9518C19.0032 8.64979 18.7775 8.4027 18.5017 8.4027ZM14.4894 10.5991C14.2135 10.5991 13.9878 10.352 13.9878 10.05C13.9878 9.74799 14.2135 9.50089 14.4894 9.50089C14.7652 9.50089 14.9909 9.74799 14.9909 10.05C14.9909 10.352 14.7652 10.5991 14.4894 10.5991ZM8.97242 4.00992H12.9847C13.154 4.00992 13.3201 4.02364 13.4831 4.03737C13.4831 4.02708 13.4863 4.02021 13.4863 4.00992C13.4863 2.19103 12.1384 0.715332 10.477 0.715332C8.81569 0.715332 7.4678 2.19103 7.4678 4.00992C7.4678 4.08199 7.48347 4.15062 7.48661 4.22269C7.96307 4.08885 8.45834 4.00992 8.97242 4.00992Z"
              />
            </svg>
            <span>Top up</span>
          </NavLink>
        </li>
        <li className="Navigation__list-item">
          <NavLink
            to="/accounts"
            exact
            className="Navigation__list-link"
            activeClassName="is-active"
          >
            <svg
              width="16"
              height="14"
              viewBox="0 0 16 14"
              className="Navigation__list-link-ico"
            >
              <path
                d="M14.4867 11.5964V12.3624C14.4867 13.205 13.7973 13.8943 12.9548 13.8943H2.23084C1.38059 13.8943 0.698853 13.205 0.698853 12.3624V1.63843C0.698853 0.79584 1.38059 0.106445 2.23084 0.106445H12.9548C13.7973 0.106445 14.4867 0.79584 14.4867 1.63843V2.40443H7.5928C6.74255 2.40443 6.06081 3.09382 6.06081 3.93642V10.0644C6.06081 10.907 6.74255 11.5964 7.5928 11.5964H14.4867ZM7.5928 10.0644H15.2527V3.93642H7.5928V10.0644ZM10.6568 8.14939C10.021 8.14939 9.50778 7.63617 9.50778 7.0004C9.50778 6.36462 10.021 5.8514 10.6568 5.8514C11.2926 5.8514 11.8058 6.36462 11.8058 7.0004C11.8058 7.63617 11.2926 8.14939 10.6568 8.14939Z"
              />
            </svg>
            <span>Accounts</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;