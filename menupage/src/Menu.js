import React from 'react'
const Menu = ({items}) => {

  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, time, lecturer, link } = menuItem
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='lecturer'>{lecturer}</h4>
              </header>
              <p className='item-text'>{time}</p>
              {/* still working on link button */}
              <button type='button' className='link-btn' 
              onClick={() => {window.open({link}, "_blank");}}>
                Link
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Menu