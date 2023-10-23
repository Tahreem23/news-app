import React, { useEffect, useState, MouseEvent } from 'react';
import Chip from '@mui/material/Chip';

const chips = ['Apple', 'Meta', 'Netflix', 'Google', 'Twitter', 'Tesla'];

interface ChipSelectionProps {
  onChipSelection: (selectedChip: string) => void;
}

const ChipSelection: React.FC<ChipSelectionProps> = ({ onChipSelection }) => {
  const [selectedChip, setSelectedChip] = useState<string>('');
  const defaultChip = chips[0];

  const handleChipClick = (event: MouseEvent<HTMLDivElement>, chipValue: string) => {
    setSelectedChip(chipValue);
  };

  useEffect(() => {
    onChipSelection(selectedChip);
  }, [selectedChip]);

  return (
    <div className="w-full text-center mt-5">
      {chips.map((chipValue, index) => (
        <Chip
          sx={{ marginLeft: '10px', marginTop: '5px' }}
          key={index}
          label={chipValue}
          onClick={(event) => handleChipClick(event, chipValue)}
          classes={{
            root:
              selectedChip === chipValue || (selectedChip === '' && chipValue === defaultChip)
                ? 'selected-chip'
                : '',
          }}
        />
      ))}
    </div>
  );
};

export default ChipSelection;
