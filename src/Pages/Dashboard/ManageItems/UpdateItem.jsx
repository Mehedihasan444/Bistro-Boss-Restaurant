import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useLoaderData, useParams } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    
const item = useLoaderData()

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();


  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    
    if (res.data.success) {
        console.log('success');
      const menuItem = {
        name: data.name,
        category: data.category,
        price: data.price,
        recipe: data.details,
        image: res.data.data.display_url,
      };
console.log(item._id)
      const menuRes = await axiosSecure.patch(`/menu/${item._id}`, menuItem)
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        // reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"update an item"}
        subHeading={"What's New"}
      ></SectionTitle>

      <div className="w-3/4 mx-auto bg-gray-200 p-10 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
            defaultValue={item.name}
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
               defaultValue={item.category}
                {...register("category", { required: true })}
               
                className="select select-bordered w-full "
              >
                <option disabled >
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="pizza">Pizza</option>
              </select>
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
               defaultValue={item.price}
                {...register("price", { required: true })}
                type="number"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>

            <textarea
             defaultValue={item.recipe}
              {...register("details", { required: true })}
              placeholder="Recipe Details"
              className="textarea textarea-bordered textarea-lg w-full max-w-3xl"
            ></textarea>
          </label>
          <div className="form-control w-full mt-4">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <input
            type="submit"
            value="Add Item"
            className="btn mt-5 bg-[#bf8733] text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
