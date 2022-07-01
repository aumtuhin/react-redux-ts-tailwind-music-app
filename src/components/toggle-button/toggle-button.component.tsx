import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/themeContext';
import { Theme } from '../../shared/const';

const ToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}>
            {theme === Theme.Dark && <FontAwesomeIcon className="h-8 text-slate-500" icon={faToggleOn} />}
            {theme === Theme.Light && <FontAwesomeIcon className="h-8 text-slate-500" icon={faToggleOff} />}
        </button>
    )
}

export default ToggleButton