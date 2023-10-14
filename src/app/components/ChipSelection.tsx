import React from 'react';
import Chip from '@mui/material/Chip';
import { useEffect, useState } from 'react';

const chips = ['Apple', 'Meta', 'Netflix', 'Google', 'Twitter', 'Tesla'];

const ChipSelection = ({onChipSelection,}) => {
  const [selectedChip, setSelectedChip] = useState('');
  const defaultChip = chips[0];

  const handleChipClick = (event: React.MouseEvent<HTMLDivElement>, chipValue: string) => {
    setSelectedChip(chipValue);
  };

  useEffect(() => {
   onChipSelection(selectedChip);
  }, [selectedChip]);

  return (
    <div className='w-full text-center mt-5'>
        {chips.map((chipValue, index) => {
            return (
                <Chip
                    sx={{marginLeft: "10px"}}
                    key={index}
                    label={chipValue}
                    onClick={(event) => handleChipClick(event, chipValue)}
                    classes={{root: selectedChip == chipValue ||  selectedChip == "" && chipValue ==  defaultChip? 'selected-chip': ''}}
                />
            );
        })}
    </div>
  );
};

export default ChipSelection;
