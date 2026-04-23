import React from "react";

const TopSection = () => {
  return (
    <div className="px-2 sticky md:h-[70px] h-[40px] top-0 z-[20]">
      <div className="flex flex-wrap">
        <div className="w-full gap-5">
          <div className="flex items-center justify-around">
            <h3
              className=" w-1/2 whitespace-nowrap opacity-70 text-start ps-2 sm:ps-[100px]    tracking-wider  text-[#feee5dfe] font-bold text-[18px]
                            md:text-[28px] capitalize md:opacity-70 md:py-1 "
            >
              crypto hunter
            </h3>
            <div className="w-1/2 text-start pe-[11.5rem] sm:text-center translate-x-[100px] py-1  sm:px-2">
              {/* 
            import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>
  );
} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
