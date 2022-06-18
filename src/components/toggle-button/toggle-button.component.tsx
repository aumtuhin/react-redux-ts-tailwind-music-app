import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'

const ToggleButton = () => {
    const [isDark, setIsdark] = useState<boolean>(false);
    return (
        <button onClick={() => setIsdark(!isDark)}>
            {isDark && <FontAwesomeIcon className="h-8 text-slate-500" icon={faToggleOff} />}
            {!isDark && <FontAwesomeIcon className="h-8 text-slate-500" icon={faToggleOn} />}
        </button>
    )
}

export default ToggleButton