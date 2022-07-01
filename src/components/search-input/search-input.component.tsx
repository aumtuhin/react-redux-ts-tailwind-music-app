import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = () => {
  return (
    <div className="relative cursor-text">
        <span className="absolute inset-y-0 flex items-center left-0 pl-4">
          <FontAwesomeIcon className="text-slate-400 h-5" icon={faSearch} />
        </span>
        <input
          className="py-3 px-12 w-80 
          text-slate-500 
          focus:outline-none 
          outline-none 
          rounded-md 
          bg-slate-50
          dark:bg-slate-700 
          dark:text-slate-300"
          type="text" placeholder='Search for songs'
        />
      </div>
  )
}

export default SearchInput;