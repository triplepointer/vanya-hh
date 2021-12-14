import React,{useState, useEffect} from 'react';

import Header from 'components/Header/Header.jsx';
import Search from 'components/UI/Search/Search';
import Categories from 'components/Categories/Categories';
import Info from 'components/Info/Info';

import Service from 'API/Service';


function App() {
  const [tops, setTops] = useState(null);
  const [currentTop, setCurrentTop] = useState("ВСЕ");
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    console.log(event.target.outerText);
    changeCurrentTop(event.target.outerText);
    setValue(newValue);
  }

  useEffect(() => {
    setCurrentTop('ВСЕ');
    setValue(0);
    return () => {
      // effect
    };
  }, [tops])

  function changeCurrentTop(label) {
    setCurrentTop(label);
  }


  async function search(value) {
    const newVal = await Service.getJobs(value);
    console.log(newVal);
    newVal.CategoriesTop.map(
      el => 
      {
        el.Category = el.Category.toUpperCase();
        return el;
      }
    );
    setTops(newVal);
  }

  return (
    <div>
      <Header />
      <Search search={search} />
      {tops ? 
      <Categories changeCurrentTop={changeCurrentTop} value={value} handleChange={handleChange} categories={tops.CategoriesTop} />
      : <></>
    }
          {tops && (currentTop === "ВСЕ") ? 
      tops.AllTop.map(({Keyword, Rate}) =>
              <Info Keyword={Keyword} Rate={Rate}/>
      )
      : tops ?
      tops.CategoriesTop.find(o => o.Category === currentTop).Top.map(({Keyword, Rate}) =>
              <Info Keyword={Keyword} Rate={Rate}/>     
      )
      :
      <></>
          }

    </div>
  );
}

export default App;