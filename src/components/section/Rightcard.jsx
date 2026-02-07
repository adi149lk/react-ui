export const Rightcard = ({ user, id }) => {
  return (
    <div className="h-full w-80 overflow-hidden relative shrink-0 rounded-4xl">
      <img
        className="h-full w-full object-cover object-center"
        src={user.img}
      />
      <div className="h-full w-full absolute top-0 left-0  p-8 flex flex-col justify-between">
        <h2 className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
          {id + 1}
        </h2>
        <div>
          <p className="text-xl leading-relaxed mb-14 font-bold text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            unde quam, blanditiis recusandae alias illum?
          </p>
          <div className="flex justify-between">
            <button className="font-medium px-8 py-2 rounded-full bg-blue-600 text-white">
              {user.tag}{" "}
            </button>
            <button className="font-medium px-4 py-2 rounded-full bg-blue-600 text-white">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
