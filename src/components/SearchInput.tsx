import useTasksQueryStore from '@/store/tasks-store';
import {
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
} from '@chakra-ui/react';
import { debounce } from 'lodash';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { MdClear } from 'react-icons/md';

interface SearchInputProps {
  wait?: number;
}

const SearchInput = ({ wait = 500 }: SearchInputProps) => {
  const setSearchText = useTasksQueryStore(s => s.setSearchText);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    wait
  );

  const clearSearch = () => {
    setSearchText('');
    if (searchInputRef.current) searchInputRef.current.value = '';
  };

  return (
    <InputGroup>
      <InputLeftAddon children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder='Search tasks...'
        variant='filled'
        onChange={handleSearch}
        ref={searchInputRef}
      />
      <InputRightElement width='4.5rem'>
        <IconButton
          aria-label='Clear search'
          h='1.75rem'
          icon={<MdClear />}
          onClick={() => clearSearch()}
          size='sm'
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
