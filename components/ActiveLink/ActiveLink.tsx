import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React, { Children } from 'react';
import { NextPage } from 'next';


interface Props {
  children: JSX.Element | JSX.Element[];
  activeClassName: string;
  className?: string;
  href: string;
  as?: string;
}

export const ActiveLink: NextPage<Props> = (props: Props) => {

  const { children, activeClassName } = props;

  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string.isRequired,
};
