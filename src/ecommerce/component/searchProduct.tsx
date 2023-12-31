import {
    Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Slider,
  useTheme,
} from "@mui/material";
import {useEffect, useState } from "react";
import SearchContext from "../../context/searchContext";
import AllProduct from "./allProduct";
const minDistance = 10;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name: any, personName: any, theme: any) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const names = ["Name", "Price(Low to high)", "Price(High to low)"];
const categoryList = ["Laptop", "Camera"];
const SearchProduct = () => {
    const [value1, setValue1] =useState<number[]>([0, 5000]);
    const [freeTextSearch, setFreeTextSearch] =useState<string>('');
    const handleChange1 = (
      event: Event,
      newValue: number | number[],
      activeThumb: number,
    ) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      }
    };
  const theme = useTheme();
  const [sortSearch, setSortSearch] = useState('');
  const [categorySearch, setCategorySearch] = useState('');

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setSortSearch(
       value
    );
  };
  const handleChangeSearch = (event: any) => {
    const {
      target: { value },
    } = event;
    setCategorySearch(
     value
    );
  };
  const freeTextSearchHandler=(event: React.KeyboardEvent<HTMLInputElement>)=>{
    if(event.key.toLowerCase()==='enter'.toLowerCase()){
      setFreeTextSearch(event.currentTarget.value)
    }
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{ width: "400px", border: "2px solid red", padding: "20px" }}
        >
          <h1>Search</h1>
          <div>
            <h5>Sort seach{freeTextSearch}</h5>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Sort</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={sortSearch}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, sortSearch, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <h5>Sort by price</h5>
          <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        disableSwap
        max={5000}
      />
      </Box>


      <div>
            <h5>Category Search</h5>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Category</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                value={categorySearch}
                onChange={handleChangeSearch}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {categoryList.map((category) => (
                  <MenuItem
                    key={category}
                    value={category}
                    style={getStyles(category, categorySearch, theme)}
                  >
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div style={{ padding: "0 15px" }}>
          <h1>Products</h1>
          <input type="text" placeholder="search" onKeyDown={freeTextSearchHandler}/>
          <SearchContext.Provider value={{
            sort:sortSearch,
            category:categorySearch,
            range:value1,
            freeTextSearch:freeTextSearch
          }}>
          <AllProduct />
          </SearchContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
