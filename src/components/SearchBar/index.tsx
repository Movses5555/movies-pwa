import { SearchWrapper, StyledInput, Input } from './styles'
import SearchIcon from '../../assets/images/searchIcon.svg'

type Props = {
  searchValue: string
  onSearch: (key: string) => void
}

const SearchBar = ({ onSearch, searchValue }: Props) => {
  return (
    <SearchWrapper >
      <StyledInput className={"inputWithIcon"}>
        <Input
          type="text"
          value={searchValue}
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => onSearch(e.target.value)}
          placeholder="Enter movie title"
        />
        <img src={SearchIcon} alt='' />
      </StyledInput>
    </SearchWrapper>
  )
}

export default SearchBar;
