import React from 'react';
import category from './categories.json';

const main = () => {
  return (
    <>
    <div>   
      <h1>Animal Website</h1>
      {category.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {category.content.map(item => (
              <div key={item.id} style={{ margin: '10px', textAlign: 'center' }}>
                <img src={item.image} alt={item.title} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default main;
