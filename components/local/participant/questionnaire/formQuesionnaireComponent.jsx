export function SelectFormQuestionnaire({
    option,
    state,
    changeState,
    propertyType,
}) {
  return (
    <select className="select select-bordered select-sm" onChange={(e) => {
        const updatedStateValue = {
          ...state,
          [propertyType]: parseInt(e.target.value),
        };
        changeState(updatedStateValue);
      }}>
        {option}
    </select>
  );
}
