import { React, useState, useEffect } from 'react';

function DashboardExperience() {
  const [Data, setData] = useState([]);
  const [showAddNewExperience, setShowAddNewExperience] = useState(false);
  const [fetchData, setFetchData] = useState(false);

  const fetchDatas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/experiences');
      const dataR = await response.json();
      console.log(dataR);
      if (dataR.data.length > 0) {
        setData(dataR.data);
      } else {
        setShowAddNewExperience(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const [date, setDate] = useState(Data.length > 0 ? Data[0].date : '');
  const [experienceText, setExperienceText] = useState(Data.length > 0 ? Data[0].ex_txt : '');

  const handelDelete = async (e) => {
    try {
      let id = e.target.name;
      const d = await fetch(`http://localhost:5000/api/experiences/remove/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!d.ok) throw new Error('An error occurred');
      let res = await d.json();
      setFetchData(!fetchData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handelAdd = async (e) => {
    try {
      setShowAddNewExperience(false);
      const d = await fetch(`http://localhost:5000/api/experiences/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: date,
          ex_txt: experienceText,
        }),
      });
      if (!d.ok) throw new Error('An error occurred');
      let res = await d.json();
      setFetchData(!fetchData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSave = async (e) => {
    let id = e.target.name;
    try {
      const d = await fetch(`http://localhost:5000/api/experiences/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({
          date: date,
          ex_txt: experienceText
        })
      });
      if (!d.ok) throw new Error("An error occured");
      let res = await d.json();
      setFetchData(!fetchData)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  const changeDate = (e) => {
    setDate(e.target.value);
  };
  const changeText = (e) => {
    setExperienceText(e.target.value);
  };
  const showAddNew = () => {
    setShowAddNewExperience(true);
  }
  useEffect(() => {
    fetchDatas();
  }, [fetchData]);
  return (
    <fieldset>
      <div className="experience" id="experience">
        <h1>Experience</h1>
        {Data.map((experience, index) => (
          <div className="single-experience" key={experience._id}>
            <p>EXPERIENCE {index + 1}:</p>
            <div className='label-and-input-container'>
              <div className='label-and-input'>
                <label>Date</label>
                <input type="text" defaultValue={experience.date} onChange={changeDate} contentEditable />
              </div>
              <div className='label-and-input'>
                <label>Description</label>
                <input
                  type="text"
                  defaultValue={experience.ex_txt}
                  onChange={changeText}
                  contentEditable
                />
              </div>
            </div>
            <div className='button-container'>
              <button name={experience._id} onClick={handelDelete}>
                Delete
              </button>
              <button name={experience._id} onClick={handleSave}>Save</button>
            </div>
          </div>
        ))}
        {Data.length === 0 && <p>Experience section is still empty</p>}
        <br />
        <br />
        {!showAddNewExperience && <button onClick={showAddNew}>Add</button>}
        {showAddNewExperience && (
          <div className="single-experience">
            <p>NEW EXPERIENCE:</p>
            <div className='label-and-input-container'>
              <div className='label-and-input'>
                <label>Date</label>
                <input type="text" onChange={changeDate} />
              </div>
              <div className='label-and-input'>
                <label>Description</label>
                <input type="text" onChange={changeText} />
              </div>
            </div>
            <div className='button-container'>
              <button onClick={() => setShowAddNewExperience(false)}>Cancel</button>
              <button onClick={handelAdd}>Add</button>
            </div>
          </div>
        )}
      </div>
    </fieldset>
  );
}

export default DashboardExperience;