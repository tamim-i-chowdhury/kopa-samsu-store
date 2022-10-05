import React from "react";

const Modal = ({ data, setModalData }) => {
  console.log(data);
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal w-full">
        <div className="modal-box relative">
          <label
            onClick={() => setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={data.img ? data.img : "Not found."}
                alt="Shoes"
                className="rounded-xl w-96 h-48"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                {data.name ? data.name : "Not found."}
              </h2>
              <p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">
                    {data.action ? data.action : "Not found."}
                  </div>
                  <div className="badge badge-outline">
                    {data.bullet ? data.bulet : "Not found."}
                  </div>
                  <div className="badge badge-outline">
                    Price: {data.price ? data.price : "Not found."}
                  </div>
                </div>
              </p>
              <div className="card-actions mt-2">
                <button className="btn btn-sm btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
