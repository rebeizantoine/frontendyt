import React, { useState,useEffect } from 'react';

function DashboardAbout() {
  const [aboutText, setAboutText] = useState('');
  const [doFetch,setDoFetch]=useState(false);
  const [showAdd,setShowAdd]=useState(false);
  const [isModified, setIsModified] = useState(false);
  const [id,setId]=useState('');
  const handleTextAreaChange = (e) => {
    setAboutText(e.target.value);
    if(!isModified)
    setIsModified(!isModified);
  };
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/about');
      const dataR = await response.json();
     // console.log(dataR)
      if (dataR.data.length > 0) {
        setAboutText(dataR.data[0].txt);
        setId(dataR.data[0]._id);
      }else setShowAdd(true);
    } catch (err) {
      console.error(err);
    }
  };
  const handelSave=async()=>{
    try{
      const d=await fetch(`http://localhost:5000/api/about/update/${id}`,{
          method: 'PUT',
          headers: {'Content-Type': 'application/json', },
          body:JSON.stringify({
              txt:aboutText
          })
      });
      if(!d.ok)throw new Error("An error occured");
      let res=await d.json();
      setDoFetch(!doFetch);
      setIsModified(false);
     console.log(res);
  }catch(error){
      console.log(error);
  }
  }
  const handelAdd=async()=>{
    try{
      const d=await fetch(`http://localhost:5000/api/about/add`,{
          method: 'POST',
          headers: {'Content-Type': 'application/json', },
          body:JSON.stringify({
              txt:aboutText
          })
      });
      if(!d.ok)throw new Error("An error occured");
      let res=await d.json();
      setShowAdd(false);
      setIsModified(false);
      setDoFetch(!doFetch);
     console.log(res);
  }catch(error){
      console.log(error);
  }
  }
  const handleDelete=async () => {
    try {
      const d = await fetch(`http://localhost:5000/api/about/remove/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!d.ok) throw new Error('An error occurred');
      let res = await d.json();
      setAboutText("");
      setShowAdd(true);
      setDoFetch(!doFetch);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
useEffect(()=>{
  fetchData();
},[doFetch]);

  return (
    <fieldset>
      <div className="about" id="about">
        <h1>About</h1>
        <div className="edit-about">
          <p>Edit your about text</p>
         <textarea
            name="about-zone"
            defaultValue={aboutText}
            cols="80"
            rows="10"
            onChange={handleTextAreaChange}
          ></textarea>
          {!showAdd?(<>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handelSave} disabled={!isModified}>Save</button>
          </>):(<button onClick={handelAdd}>Add</button>)}
        </div>
      </div>
    </fieldset>
  );
}

export default DashboardAbout;
