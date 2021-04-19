import SearchIcon from "@/components/icons/search";
const Search = () => {
  return (
    <div className="rounded-full overflow-hidden relative wrap">
      <input type="text" placeholder="Nhập nội dung tìm kiếm..." className="px-4 py-1 focus:outline-none w-full" />
      <div className="absolute icon">
        <SearchIcon />
      </div>
      <style jsx>{`
        .icon {
          top: 50%;
          right: 6px;
          transform: translateY(-50%);
        }
        svg:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Search;