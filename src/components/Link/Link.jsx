import * as React from 'react';
import { Link } from 'gatsby';

export default props => {
  const internal = props.target !== '_blank' && /^\/(?!\/)/.test(props.href);
  if (internal) {
    return <Link activeClassName="active-link" to={props.href} {...props} />;
  }
  return <a {...props} />;
};
