import React, { useState } from "react";

// const Separator = () =>  {','};
export default function Entry(row) {
  const checked = row.Medicines[0].acknowledgement;
  function confirm() {
    if (!checked) {
      if (window.confirm("Are you sure you want to change it?")) {
        toggleChecked(!checked);
      }
    } else {
      alert("you can't change it.");
    }
  }
  function _renderObject_details() {
    return Object.keys(row.Medicines).map((obj, i) => {
      return (
        <table>
          <td>{row.Medicines[obj].name}</td>
          <td>{row.Medicines[obj].count}</td>
        </table>
      );
    });
  }
  function _renderObject_comments() {
    return Object.keys(row.Medicines).map((obj, i) => {
      return (
        <table>
          <td>{row.Medicines[obj].comment}</td>
        </table>
      );
    });
  }
  function _renderObject_Ack() {
    return Object.keys(row.Medicines).map((obj, i) => {
      return (
        <table>
          <td>{row.Medicines[obj].acknowledgement}</td>
        </table>
      );
    });
  }
  return (
    <tr>
      <td>{row.UniqueID}</td>
      <td>{row.Date}</td>
      <td>{row.DoctorName}</td>
      <td> {_renderObject_details()}</td>
      <td>{_renderObject_comments()}</td>
      <td>
        <input onClick={confirm} type="checkbox" checked={checked} />
        <button onClick={confirm}>Medicines given</button>
      </td>
    </tr>
  );
}
