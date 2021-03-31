/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editRequestAction } from '../../redux/actions/requestAction';
import './Requests.scss';

export default function EditRequest({
  from, to, reason, tripId,
}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [inputFrom, setInputFrom] = useState(from);
  const [inputTo, setInputTo] = useState(to);
  const [inputReason, setInputReason] = useState(reason);
  const [inputTravelDate, setInputTravelDate] = useState('');
  const [inputReturnDate, setInputReturnDate] = useState('');
  const modalContainerStyle = {
    display: open ? 'flex' : 'none',
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const saveChanges = async () => {
    dispatch(editRequestAction(inputFrom,
      inputTo,
      inputReason,
      inputTravelDate,
      inputReturnDate,
      tripId));
    handleClose();
  };
  return (
    <>
      <button
        data-testid="show-btn"
        className="editIcon-btn"
        onClick={handleOpen}
      >
        Edit
      </button>
      <div style={modalContainerStyle} className="modal-container">
        <div className="modal">
          <div className="modal-content">
            <h2 data-testid="header" id="transition-modal-title">
              edit
            </h2>
            <form
              data-testid="form"
              onSubmit={(e) => {
                e.preventDefault();
                saveChanges();
              }}
            >
              <input
                data-testid="from"
                type="number"
                placeholder="from"
                autoFocus
                value={inputFrom}
                onChange={(e) => setInputFrom(e.target.value)}
                required
              />
              <input
                data-testid="to"
                type="number"
                placeholder="to"
                autoFocus
                value={inputTo}
                onChange={(e) => setInputTo(e.target.value)}
                required
              />
              <input
                data-testid="reason"
                type="text"
                placeholder="reason"
                autoFocus
                value={inputReason}
                onChange={(e) => setInputReason(e.target.value)}
                required
              />
              <input
                type="date"
                data-testid="travelDate"
                placeholder="travelDate"
                autoFocus
                value={inputTravelDate}
                onChange={(e) => setInputTravelDate(e.target.value)}
                required
              />
              <input
                type="date"
                data-testid="returnDate"
                placeholder="returnDate"
                autoFocus
                value={inputReturnDate}
                onChange={(e) => setInputReturnDate(e.target.value)}
                required
              />
              <div className="button-container">
                <button
                  style={{
                    fontSize: '90%',
                    width: '30%',
                    marginRight: '5%',
                  }}
                  type="submit"
                >
                  save
                </button>
                <button
                  style={{
                    fontSize: '90%',
                    width: '30%',
                    backgroundColor: '#fb5b5b',
                  }}
                  type="button"
                  onClick={handleClose}
                >
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
