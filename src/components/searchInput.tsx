import { FileSearchOutlined } from "@ant-design/icons";

const SearchInput: React.FC<{ visible: boolean }> = ({ visible }) => {
  return (
    <div className={`${!visible ? "hidden" : "flex"}  hover:shadow-xl shadow animate-bounce-short`}>
      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300">
        <FileSearchOutlined />
      </span>
      <input
        type="text"
        id="pokemon-search"
        className="focus:bg-white border bg-gray-50 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 hover:border-pink-400 focus:ring focus:ring-pink-600 focus:outline-none focus:border-none"
        placeholder="Pokemon name"
      />
    </div>
  );
};

export default SearchInput;
