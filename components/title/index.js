const Title = ({ children }) => {
  return (
    <div>
      <div className="font-base p-1 pl-4 title rounded text-white">{children}</div>
      <style jsx>{`
        .title{
            background: #018EB9;
        }
      `}</style>
    </div>
  );
};

export default Title;
