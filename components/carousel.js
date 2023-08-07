"use client"
import Image from "next/image"
const Carousel = () => {
  return (
    <>
    <div class="grid grid-cols-2 gap-8 mt-7 ml-8 mr-8">
  {/* <!-- Column 1: Text and Button --> */}
  <div class="flex flex-col justify-center">
    <h2 class="text-3xl font-bold mb-4">Dressing Shirt</h2>
    <p class="text-gray-600 mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit nec leo sit amet maximus.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit nec leo sit amet maximus.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit nec leo sit amet maximus.
    </p>
    {/* <!-- Reduced width button --> */}
    <button type="submit" class="text-white bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center w-48">
      Buy Now
    </button>
  </div>

  {/* <!-- Column 2: Image --> */}
  <div>
    <img class="w-full rounded" src="/img/7.jpg" alt="Image Description"/>
  </div>
</div>



    </>
  )
}

export default Carousel