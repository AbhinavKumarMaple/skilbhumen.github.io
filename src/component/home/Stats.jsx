export default function Stats() {
  const items = [
    { id: 1, name: "Clients", value: "100+" },
    { id: 2, name: "Projects", value: "100+" },
    { id: 3, name: "Companies", value: "100+" },
  ];
  return (
    <div className="p-4 mx-auto bg-gray26">
      <div className="flex flex-row justify-around  sm:h-amx">
        <div className="text-left flex flex-col justify-center">
          <h6 className="text-3xl font-bold ">{items[0].value}</h6>
          <p className="text-sm font-normal tracking-widest text-gray-800  ">
            {items[0].name}
          </p>
        </div>
        <div className="border-r-2 border-grayDark"></div>
        <div className="text-left flex flex-col justify-center">
          <h6 className="text-3xl font-bold">{items[1].value}</h6>
          <p className="text-sm font-normal tracking-widest text-gray-800  ">
            {items[1].name}
          </p>
        </div>
        <div className="border-r-2 border-grayDark "></div>
        <div className="text-left flex flex-col justify-center">
          <h6 className="text-3xl font-bold">{items[2].value}</h6>
          <p className="text-sm font-normal tracking-widest text-gray-800">
            {items[2].name}
          </p>
        </div>
      </div>
    </div>
  );
}
