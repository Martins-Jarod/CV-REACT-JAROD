import React from 'react'

function Formations(props) {
    const datas = props.datas
  return (
    <div className='cursus'>
        <h2>FORMATION</h2>

        {datas.map(item => (
        <div key={item.id} className="item">
          <h3>{item.title}</h3>
          <div>
            <p>{item.ecole} | {item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Formations