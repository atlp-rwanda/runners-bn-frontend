/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Requests.scss';
import 'react-toastify/dist/ReactToastify.css';
import AddRequest from './createRequest';
import EditRequest from './editRequest';

import { getRequestsAction } from '../../redux/actions/requestAction';

export default function Requests() {
  const dispatch = useDispatch();
  const states = useSelector((state) => state.getRequestReducer);
  useEffect(async () => {
    dispatch(getRequestsAction());
    setInterval(() => {
      dispatch(getRequestsAction());
    }, 2000);
  }, []);

  return (
    <div data-testid="table" className="roleTable-container">
      <div>
        <h2 className="text-2xl font-semibold leading-tight uppercase">
          <div className="addBtn">
            <AddRequest />
          </div>
        </h2>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider">
                  No
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider">
                  from
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider">
                  to
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider">
                  departure
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider">
                  destination
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider">
                  reason
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider dates">
                  travelDate
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider dates">
                  returnDate
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider">
                  status
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-center text-xxs font-semibold uppercase tracking-wider">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {states.requests
                && states.requests.map((data) => (
                  <tr
                    key={data.id}
                    className="requests"
                    data-testid="requests-data"
                  >
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l text-center">
                      <p
                        data-testid="request"
                        className="text-gray-900 whitespace-no-wrap"
                      >
                        {data.id}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.from}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.to}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {/* {data.departure.name} */}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.destination.name}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.reason}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.travelDate}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {data.returnDate}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l dates text-center">
                      {data.status && (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                        Pending
                      </span>
                      )}
                      {!data.status && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-l text-center">
                      <p className="text-gray-900 whitespace-no-wrap">
                        <EditRequest tripId={data.id} request={data.request} />
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
