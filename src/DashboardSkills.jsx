import React, { useState } from 'react';
import replaceIcon from './replace-icon.png';

function DashboardSkills() {
  const [skillCount, setSkillCount] = useState(1); // Number of skills by default 

  const addSkill = () => {
    setSkillCount(prevCount => prevCount + 1); // ensures that we update the count based on the current count
  };

  const renderSkills = () => { // returns the skills array containing all the "single-skill" divs
    const skills = [];
    for (let i = 1; i <= skillCount; i++) {
      skills.push( 
        <div className="single-skill" key={i}> 
          <p>SKILL {i}:</p> 
          <div className="skill-name">
            <label>Name</label>
            <input type="text" />
            <button>Edit</button>
            <button>Delete</button>
            <button>Save</button>
          </div>
          <div className="skill-icon">
            <label>Icon</label>
            <img src={replaceIcon} alt="skill-icon" className='replace-icon' />
            <input type="file" accept="image/*" className='upload-image' />
            <button>Save</button>
          </div>
        </div>
      );
    }
    return skills; 
  };

  return (
    <fieldset>
      <div className="skills" id="skills">
        <h1>Skills</h1>
        {renderSkills()} 
        <button onClick={addSkill}>ADD SKILL</button>
      </div>
    </fieldset>
  );
}

export default DashboardSkills;
