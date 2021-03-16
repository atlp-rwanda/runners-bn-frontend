/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editRequestAction } from '../redux/actions/requests/requests';
import '../styles/register.scss';

export default function EditRequest({
  tripId, from, to, reason, travelDate, returnDate,
}) {
  const dispatch = useDispatch();
  const [inputFrom, setInputFrom] = useState(from);
  const [inputTo, setInputTo] = useState(to);
  const [inputReason, setInputReason] = useState(reason);
  const [inputTravelDate, setInputTravelDate] = useState(travelDate);
  const [inputReturnDate, setInputReturnDate] = useState(returnDate);
  const saveChanges = async () => {
    dispatch(
      editRequestAction(tripId, inputFrom, inputTo, inputReason, inputTravelDate, inputReturnDate),
    );
    toast.success('Request Updated');
    setModalIsOpen(false);
  };

  const [ModalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <button
        className="edit"
        data-testid="openModal"
        onClick={() => setModalIsOpen(true)}
      >
        operator.19,
      </button>
      <div>
        <Modal
          className="modaledit"
          isOpen={ModalIsOpen}
          style={{ overlay: { backgroundColor: 'rgba(0,0,0,0.25)' } }}
        >
          <div className="formContainer">
            <i
              data-testid="closeModal"
              className="far fa-times-circle"
              id="times"
              onClick={() => setModalIsOpen(false)}
            />
            <h2>
              <strong>drivers.15</strong>
            </h2>
            <div className="form">
              <form
                data-testid="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  saveChanges();
                }}
              >
                <p>operator.10</p>
                <input
                  data-testid="from"
                  type="text"
                  name="from"
                  placeholder="Names"
                  pattern="[A-Za-z, ]{3,}"
                  value={inputFrom}
                  onChange={(e) => setInputFrom(e.target.value)}
                  required
                />
                <p>operator.11</p>
                <input
                  data-testid="to"
                  type="text"
                  name="to"
                  placeholder="Names"
                  pattern="[A-Za-z, ]{3,}"
                  value={inputTo}
                  onChange={(e) => setInputTo(e.target.value)}
                  required
                />
                <p>operator.12</p>
                <input
                  data-testid="reason"
                  type="text"
                  name="reason"
                  placeholder="Names"
                  pattern="[A-Za-z, ]{3,}"
                  value={inputReason}
                  onChange={(e) => setInputReason(e.target.value)}
                  required
                />
                <p>operator.11</p>
                <input
                  data-testid="travelDate"
                  type="text"
                  name="travelDate"
                  placeholder="Names"
                  pattern="\d{1,2}/\d{1,2}/\d{4}"
                  value={inputTravelDate}
                  onChange={(e) => setInputTravelDate(e.target.value)}
                  required
                />
                <p>operator.12</p>
                <input
                  data-testid="returnDate"
                  type="text"
                  name="returnDate"
                  placeholder="Names"
                  pattern="\d{1,2}/\d{1,2}/\d{4}"
                  value={inputReturnDate}
                  onChange={(e) => setInputReturnDate(e.target.value)}
                  required
                />

                <div className="buttons">
                  <button className="deny" type="submit">
                    Save
                  </button>
                  <button
                    data-testid="closeModal2"
                    className="confirm"
                    onClick={() => setModalIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
