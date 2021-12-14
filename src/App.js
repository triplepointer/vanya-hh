import React,{useState, useEffect} from 'react';

import Header from 'components/Header/Header.jsx';
import Search from 'components/UI/Search/Search';
import Categories from 'components/Categories/Categories';
import Info from 'components/Info/Info';

import Service from 'API/Service';


function App() {
  const [tops, setTops] = useState(null);
  const [currentTop, setCurrentTop] = useState("ВСЕ");
  const [value, setValue] = useState('');

  function handleChange(event, newValue) {
    console.log(event.target.outerText);
    changeCurrentTop(event.target.outerText);
    setValue(newValue);
  }

  useEffect(() => {
    setCurrentTop('ВСЕ');
    setValue('');
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
      {tops !== null && tops.AllTop.length !== 0  ? 
      <Categories changeCurrentTop={changeCurrentTop} value={value} handleChange={handleChange} categories={tops.CategoriesTop} />
      : <></>
    }
          {tops && (currentTop === "ВСЕ") && (tops.AllTop.length !== 0) ? 
      tops.AllTop.map(({Keyword, Rate}) =>
              <Info Keyword={Keyword} Rate={Rate}/>
      )
      : tops && (tops.AllTop.length !== 0) ?
      tops.CategoriesTop.find(o => o.Category === currentTop).Top.map(({Keyword, Rate}) =>
              <Info Keyword={Keyword} Rate={Rate}/>     
      )
      : (tops !== null) && (tops.AllTop.length === 0) ?
      <h6 style={{textAlign: "center"}}>По запросу {value} результаты не найдены</h6>
      : <></>
          }

    </div>
  );
}

export default App;