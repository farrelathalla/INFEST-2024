// components/CustomRadioButton.js
import React from 'react';
import { MdCheck } from 'react-icons/md';

export default function CustomRadioButton({ checked, onChange, value, name }) {
  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        type="radio"
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        className="absolute opacity-0 cursor-pointer"
      />
      <span
        className={`flex items-center justify-center w-6 h-6 rounded-full border-2 ${
          checked ? 'bg-[#3126B0] border-[#3126B0]' : 'bg-white border-gray-300'
        }`}
      >
        {checked && (
          <MdCheck className="w-4 h-4 text-white" />
        )}
      </span>
    </label>
  );
}
