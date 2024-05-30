import { memo } from 'react';

export default memo(({ children, ...rest }) => (
    <button {...rest} className="btn">
        {children}
    </button>
));
