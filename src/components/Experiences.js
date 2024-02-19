import React from 'react'

function Experiences(props) {
    const { datas } = props;
  return (
    <div className='cursus'>
        <h2>EXPERIENCES PROFESSIONNELLES</h2>
        {datas.map(experience => (
        <div key={experience.id} className="experience">
          <h3>{experience.title}</h3>
          <p>{experience.Entreprise} | {experience.date}</p>
          <p>{experience.description}</p>
        </div>
      ))}
    </div>
  );
}
export default Experiences