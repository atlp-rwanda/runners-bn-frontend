/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRequestsAction } from '../../redux/actions/requestAction';
import './Requests.scss';

const createRequest = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [newfrom, setNewFrom] = useState('');
  const [newTo, setNewTo] = useState('');
  const [newreason, setNewReason] = useState('');
  const [newtravelDate, setNewtravelDate] = useState('');
  const [newreturnDate, setNewreturnDate] = useState('');

  const modalContainerStyle = {
    display: open ? 'flex' : 'none',
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createRequests = () => {
    dispatch(createRequestsAction(
      {
        from: newfrom,
        to: newTo,
        reason: newreason,
        travelDate: newtravelDate,
        returnDate: newreturnDate,
      },
    ));
    handleClose();
  };
  return (
    <>
      <button data-testid="show-btn" type="button" onClick={handleOpen}>
        +
      </button>
      <div style={modalContainerStyle} className="modal-container">
        <div className="modal">
          <div className="modal-content">
            <h2>
              {' '}
              Create Trip Request
            </h2>
            <form
              data-testid="form"
              onSubmit={(e) => {
                e.preventDefault();
                createRequests();
              }}
            >
              <input
                type="number"
                data-testid="from"
                placeholder="From"
                autoFocus
                value={newfrom}
                onChange={(e) => setNewFrom(e.target.value)}
              />
              <input
                type="number"
                data-testid="to"
                placeholder="to"
                autoFocus
                value={newTo}
                onChange={(e) => setNewTo(e.target.value)}
                required
              />
              <input
                type="text"
                data-testid="reason"
                placeholder="reason"
                autoFocus
                value={newreason}
                onChange={(e) => setNewReason(e.target.value)}
                required
              />
              <input
                type="date"
                data-testid="travelDate"
                placeholder="travelDate"
                autoFocus
                value={newtravelDate}
                onChange={(e) => setNewtravelDate(e.target.value)}
                required
              />
              <input
                type="date"
                data-testid="returnDate"
                placeholder="returnDate"
                autoFocus
                value={newreturnDate}
                onChange={(e) => setNewreturnDate(e.target.value)}
                required
              />
              <div className="button-container">
                <button
                  type="submit"
                  data-testid="button"
                  style={{
                    fontSize: '70%',
                    width: '30%',
                    marginRight: '5%',
                  }}
                >
                  create
                </button>
                <button
                  type="button"
                  style={{
                    backgroundColor: '#fb5b5b',
                    fontSize: '70%',
                    width: '30%',
                  }}
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
};

export default createRequest;
