export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto grid grid-cols-12 gap-x-6 py-6 px-16">
          <div className="col-span-3">
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-4">Categories</h2>
              <div className="space-y-2 flex flex-col">
                <a href="" className="text-gray-700 hover:text-blue-600">
                  Clothing
                </a>
                <a href="" className="text-gray-700 hover:text-blue-600">
                  Electronics
                </a>
                <a href="" className="text-gray-700 hover:text-blue-600">
                  Shoes
                </a>
                <a href="" className="text-gray-700 hover:text-blue-600">
                  Watches
                </a>
                <a href="" className="text-gray-700 hover:text-blue-600">
                  Jewellery
                </a>
                <a href="" className="text-gray-700 hover:text-blue-600">
                  Health & Beauty
                </a>
                <a href="" className="text-gray-700 hover:text-blue-600">
                  Kids & Babies
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-4 mt-4 rounded-lg shadow">
              <h2 className="text-lg font-bold mb-4">Hot Deals</h2>
              <div className="bg-gray-50 p-4 rounded-lg shadow">
                <img
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGdP5D7D_wVMzx4kGM_B0I6U_QGVSTQCFosvfZuJugnfWhCa4YQdw5t5uIIKSoRYNKEiCP_YjLcDpM7aeLwrJZnkpw62PIXTVpCS88CUjHFnKou8AuanxbLk21ZE1hBMnjptI6QVk&usqp=CAc"
                  alt="Product"
                  className="w-full h-28 rounded"
                />
                <h3 className="text-lg font-semibold mt-4">
                  Danial Wellington watches
                </h3>
                <p className="text-yellow-500 font-bold text-lg mt-2">
                  $450.99
                </p>
                <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300">
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-9">
            <div className="bg-gray-300 rounded ">
              <div className="px-10 pt-10 ">
                <h2 className="text-md font-bold text-gray-600">SPRING 2016</h2>
                <h2 className="text-4xl font-bold text-gray-900">
                  Men <span className="text-yellow-400">Fashion</span>
                </h2>
                <p className="text-lg text-gray-700 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas, culpa?
                </p>
                <button className="mt-4 bg-blue-600 text-white hover:bg-white hover:text-blue-400 px-6 py-2 rounded duration-300">
                  Shop Now
                </button>
              </div>

              <div className=" bottom-0 mt-8">
                <div className="bg-blue-800 flex items-center justify-around">
                  <div className="text-white text-center">
                    <div className="font-bold">MONEY BACK</div>
                    <div>30 days money back guarantee</div>
                  </div>

                  <div className="text-white text-center">
                    <div className="font-bold">FREE SHIPPING</div>
                    <div>shipping on orders above $99</div>
                  </div>

                  <div className="text-white text-center">
                    <div className="font-bold">SPECIAL SALE</div>
                    <div>extra $5 off on all items</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-200 rounded p-4">
              <h2 className="font-semibold">New Products</h2>
              <div className="flex overflow-x-scroll hide-scrollbar mt-4 gap-x-4">
                <div className="bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGdP5D7D_wVMzx4kGM_B0I6U_QGVSTQCFosvfZuJugnfWhCa4YQdw5t5uIIKSoRYNKEiCP_YjLcDpM7aeLwrJZnkpw62PIXTVpCS88CUjHFnKou8AuanxbLk21ZE1hBMnjptI6QVk&usqp=CAc"
                    alt="Product"
                    className="w-20 h-20 rounded place-self-center"
                  />
                  <h3 className="text-lg font-semibold mt-4 max-w-40">
                    Danial Wellington watches
                  </h3>
                  <p className="text-yellow-500 font-bold text-lg mt-2">
                    $450.99
                  </p>
                  <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300">
                    Add to cart
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGdP5D7D_wVMzx4kGM_B0I6U_QGVSTQCFosvfZuJugnfWhCa4YQdw5t5uIIKSoRYNKEiCP_YjLcDpM7aeLwrJZnkpw62PIXTVpCS88CUjHFnKou8AuanxbLk21ZE1hBMnjptI6QVk&usqp=CAc"
                    alt="Product"
                    className="w-20 h-20 rounded place-self-center"
                  />
                  <h3 className="text-lg font-semibold mt-4 max-w-40">
                    Danial Wellington watches
                  </h3>
                  <p className="text-yellow-500 font-bold text-lg mt-2">
                    $450.99
                  </p>
                  <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300">
                    Add to cart
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGdP5D7D_wVMzx4kGM_B0I6U_QGVSTQCFosvfZuJugnfWhCa4YQdw5t5uIIKSoRYNKEiCP_YjLcDpM7aeLwrJZnkpw62PIXTVpCS88CUjHFnKou8AuanxbLk21ZE1hBMnjptI6QVk&usqp=CAc"
                    alt="Product"
                    className="w-20 h-20 rounded place-self-center"
                  />
                  <h3 className="text-lg font-semibold mt-4 max-w-40">
                    Danial Wellington watches
                  </h3>
                  <p className="text-yellow-500 font-bold text-lg mt-2">
                    $450.99
                  </p>
                  <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300">
                    Add to cart
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGdP5D7D_wVMzx4kGM_B0I6U_QGVSTQCFosvfZuJugnfWhCa4YQdw5t5uIIKSoRYNKEiCP_YjLcDpM7aeLwrJZnkpw62PIXTVpCS88CUjHFnKou8AuanxbLk21ZE1hBMnjptI6QVk&usqp=CAc"
                    alt="Product"
                    className="w-20 h-20 rounded place-self-center"
                  />
                  <h3 className="text-lg font-semibold mt-4 max-w-40">
                    Danial Wellington watches
                  </h3>
                  <p className="text-yellow-500 font-bold text-lg mt-2">
                    $450.99
                  </p>
                  <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300">
                    Add to cart
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGdP5D7D_wVMzx4kGM_B0I6U_QGVSTQCFosvfZuJugnfWhCa4YQdw5t5uIIKSoRYNKEiCP_YjLcDpM7aeLwrJZnkpw62PIXTVpCS88CUjHFnKou8AuanxbLk21ZE1hBMnjptI6QVk&usqp=CAc"
                    alt="Product"
                    className="w-20 h-20 rounded place-self-center"
                  />
                  <h3 className="text-lg font-semibold mt-4 max-w-40">
                    Danial Wellington watches
                  </h3>
                  <p className="text-yellow-500 font-bold text-lg mt-2">
                    $450.99
                  </p>
                  <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300">
                    Add to cart
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGdP5D7D_wVMzx4kGM_B0I6U_QGVSTQCFosvfZuJugnfWhCa4YQdw5t5uIIKSoRYNKEiCP_YjLcDpM7aeLwrJZnkpw62PIXTVpCS88CUjHFnKou8AuanxbLk21ZE1hBMnjptI6QVk&usqp=CAc"
                    alt="Product"
                    className="w-20 h-20 rounded place-self-center"
                  />
                  <h3 className="text-lg font-semibold mt-4 max-w-40">
                    Danial Wellington watches
                  </h3>
                  <p className="text-yellow-500 font-bold text-lg mt-2">
                    $450.99
                  </p>
                  <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300">
                    Add to cart
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg shadow flex-shrink-0">
                  <img
                    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGdP5D7D_wVMzx4kGM_B0I6U_QGVSTQCFosvfZuJugnfWhCa4YQdw5t5uIIKSoRYNKEiCP_YjLcDpM7aeLwrJZnkpw62PIXTVpCS88CUjHFnKou8AuanxbLk21ZE1hBMnjptI6QVk&usqp=CAc"
                    alt="Product"
                    className="w-20 h-20 rounded place-self-center"
                  />
                  <h3 className="text-lg font-semibold mt-4 max-w-40">
                    Danial Wellington watches
                  </h3>
                  <p className="text-yellow-500 font-bold text-lg mt-2">
                    $450.99
                  </p>
                  <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-gray-400 duration-300">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-8 gap-4 px-16 py-8">
        <div className="col-span-3 bg-yellow-300 text-center p-4 h-40 rounded">
          Banner-1
        </div>
        <div className="col-span-5 bg-yellow-300 text-center p-4 h-40 rounded">
          Banner-2
        </div>
      </div>
    </div>
  );
}
