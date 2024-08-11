import Dropdown from "../components/Dropdown";
import { useState } from 'react';

function DropdownPage() {
  const [selected, setSelected] = useState(null);
  const handleSelect = (option) => {
    setSelected(option);
  }
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Yellow', value: 'yellow'},
  ]
  return (
    <div className="flex">
      <Dropdown value={selected} onChange={handleSelect} options={options} />
    </div>
  );
}

export default DropdownPage;  
