const SearchComponent = ({
  Child,
  setToRemove,
}: {
  Child: React.FC<{setToRemove: React.Dispatch<React.SetStateAction<boolean>>}>;
  setToRemove: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="grow w-full ml-4">
      <Child setToRemove={setToRemove} />
    </div>
  );
};

export default SearchComponent;
