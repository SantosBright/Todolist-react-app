import { useState } from 'react';

export default (intiVal = "") => {
    const [value, setValue] = useState(intiVal);

    const handleChange = e => {
        setValue(e.target.value);
    }

    const reset = () => {
        setValue('');
    }
    return [value, handleChange, reset];
}