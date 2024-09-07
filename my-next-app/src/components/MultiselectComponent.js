// components/MultiselectComponent.js
import Multiselect from 'multiselect-react-dropdown';

const MultiselectComponent = ({ options, selectedValues, onSelect, onRemove }) => {
  return (
    <Multiselect
      options={options}
      selectedValues={selectedValues}
      onSelect={onSelect}
      onRemove={onRemove}
      displayValue="name"
      placeholder="Courses"
      style={{
        multiselectContainer: {
          borderBottom: "1px solid #94a3b8", // Match input's bottom border
          padding: "8px 0px", // Adjust padding to match the input
          width: "100%", // Match input width
        },
        searchBox: {
          border: "none",
          outline: "none",
          padding: "0 10px", // Match padding of input
          fontSize: "16px", // Match font size of input
          width: "100%",
        },
        chips: {
          borderRadius: "4px",
        },
        optionContainer: {
          border: "1px solid #94a3b8",
          borderRadius: "4px",
        },
      }}
    />
  );
};

export default MultiselectComponent;
