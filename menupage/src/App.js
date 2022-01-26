import React, {useState} from 'react'
import {useEffect} from 'react' 
import Menu from './Menu' 
import Categories from './Categories' 
import items from './data' 

const title = 'Class list'
const allCategories = ['all', ...new Set(items.map((item) => item.category))] 

function App() {

  useEffect(() => {
    document.title = title   
  }, []) 

  const [menuItems, setMenuItems] = useState(items) 
  const [categories, setCategories] = useState(allCategories) 

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items) 
      return 
    }
    const newItems = items.filter((item) => item.category === category) 
    setMenuItems(newItems) 
  } 

  return (
    <main>
        <title>{title}</title>
      <section className="menu section">
        <div className="title">
          <h2>6th semester classes</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
        <footer className="footer">2021 scaramify</footer>
      </section>
      
    </main>
  )
}

export default App