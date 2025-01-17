import React from 'react'


function Header() {
    return (
        <div>
            <header className="bg-blue-600 text-white">
                <div className="flex items-center justify-between py-4 px-16">
                    <h1 className="text-2xl font-bold">Flipmart</h1>

                    <div className="flex gap-x-4">
                        <input className="min-w-[50vw] px-4 py-2 rounded-md border-2 text-black" placeholder="Search now...." />
                        <button className="bg-yellow-300 px-4 py-2 rounded-md text-black hover:bg-white duration-300">
                            Search
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div>Cart: $600.00</div>
                        <button className="bg-yellow-400 text-black hover:bg-white px-3 py-1 rounded duration-300">
                            Today's Offer
                        </button>
                    </div>
                </div>


                <div className="bg-blue-800 flex items-center justify-center gap-x-4 space-x-4">
                    <a href="" className="hover:text-yellow-400 duration-300">Home</a>
                    <a href="" className="hover:text-yellow-400 duration-300">Clothing</a>
                    <a href="" className="hover:text-yellow-400 duration-300">Electronics</a>
                    <a href="" className="hover:text-yellow-400 duration-300">Health & Beauty</a>
                    <a href="" className="hover:text-yellow-400 duration-300">Watches</a>
                    <a href="" className="hover:text-yellow-400 duration-300">Jewellery</a>
                </div>
            </header>
        </div>
    )
}

export default Header