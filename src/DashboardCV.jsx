import React from 'react';

function DashboardCV() {
  return (
    <fieldset className='cv-fieldset'>
      <div className="cv" id="cv">
        <h1>CV</h1>
        <div className="upload-cv">
          <p>Upload your CV (pdf file)</p>
          <input type="file" accept=".pdf" />
          <button>Save</button>
        </div>
      </div>
    </fieldset>
  );
}

export default DashboardCV;