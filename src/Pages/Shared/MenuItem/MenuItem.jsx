const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex gap-5 ">
      <div className="flex items-center">
        <img
          src={image}
          className="w-[120px]  rounded-tr-full rounded-bl-full rounded-br-full"
          alt=""
        />
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <h3 className="uppercase font-semibold lg:text-xl">{name}----------</h3>
          <p className="text-yellow-600 ">${price}</p>
        </div>
        <p className="text-xs w-3/4">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
