import { memo } from 'react';

export default memo(
    ({ register, name, error = false, helperText = '', ...rest }) => {
        return (
            <div>
                <input {...register(name)} {...rest} />
            </div>
        );
    },
);
