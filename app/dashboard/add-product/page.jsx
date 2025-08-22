"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import uploadImage from "@/utils/uploadImage";
import { addProduct } from "@/actions/products";
import { errorToast, successToast } from "@/utils/toast";
import { useSession } from "next-auth/react";

const AddProduct = () => {
  const [image, setImage] = useState(null);
  const { data: session } = useSession();

  console.log(session);

  const handleImage = async (e) => {
    const imageFile = e.target.files[0];
    const imageURL = await uploadImage(imageFile);
    setImage(imageURL);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const category = form.category.value;
    const description = form.description.value;

    const newProduct = { name: title, price, category, description, image };
    const res = await addProduct(newProduct);
    const data = JSON.parse(res);
    if (data.insertedId) {
      successToast("Product Successfully Added");
      form.reset();
    } else {
      errorToast("Something went wrong, try again");
    }
  };

  return (
    <Section>
      <div className="card w-full">
        <form onSubmit={handleAddProduct} className="card-body">
          <h2 className="card-title text-3xl font-bold">Add New Product</h2>
          <p className="text-sm text-gray-500">
            Fill in the details to add a new product to your store.
          </p>
          <div className="divider"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Product Title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="e.g., Organic Honey"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Product Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="e.g., 15.99"
                className="input input-bordered w-full"
                step="0.01"
                min="0"
                required
              />
            </div>

            {/* Product Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered w-full"
                required
              >
                <option disabled selected value="">
                  Select a category
                </option>
                <option value="electronics">Electronics</option>
                <option value="apparel">Apparel</option>
                <option value="home-goods">Home Goods</option>
                <option value="organic-food">Organic Food</option>
              </select>
            </div>

            {/* Product Image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                onChange={handleImage}
                type="file"
                name="photo"
                accept="image/*"
                className="file-input file-input-bordered file-input-primary w-full"
              />
            </div>
          </div>

          {/* Product Description */}
          <div className="form-control mt-4">
            <label className="label">
              <p className="label-text">Description</p>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered h-24 w-full"
              placeholder="Provide a detailed description of the product."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="card-actions justify-end mt-6">
            <button type="submit" className="btn btn-primary rounded-lg">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default AddProduct;
