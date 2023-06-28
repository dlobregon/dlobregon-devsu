import { useState } from 'react'

const DropdownPagination = ({ options, setResults }) => {
  const [selectedOption, setSelectedOption] = useState(0)

  const handleChange = (event) => {
    const selectedValue = event.target.value
    setSelectedOption(selectedValue)
    setResults(selectedValue)
  }



  return (
      <select value={selectedOption} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
  )
}

export default DropdownPagination
