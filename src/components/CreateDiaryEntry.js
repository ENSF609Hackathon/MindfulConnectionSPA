import React, { useState } from 'react';

const CreateDiaryEntry = ({ onSave }) => {
    const [entryText, setEntryText] = useState('');

    const handleSave = () => {
        if (entryText.trim() !== '') {
            onSave(entryText);
            setEntryText('');
        }
    };

    return (
        <div className="card w-100 shadow-xss rounded-xxl border-0 ps-4 pt-4 pe-4 pb-3 mb-3">
            <div className="card-body p-0">  
                <div className="card-body p-0">
                    <a className="font-xssss fw-600 card-body p-0 d-flex align-items-center" onClick={handleSave}><i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>Save Diary Entry</a>
                </div>
            </div>
            <div className="card-body p-0 mt-3 position-relative">
                <textarea
                    name="message"
                    value={entryText}
                    onChange={(e) => setEntryText(e.target.value)}
                    className="h100 bor-0 w-100 rounded-xxl p-2 ps-3 font-xsss fw-500 border-light-md theme-dark-bg"
                    cols="30"
                    rows="10"
                    placeholder="What's on your mind?"
                ></textarea>
            </div>
        </div>
    );
};

export default CreateDiaryEntry;