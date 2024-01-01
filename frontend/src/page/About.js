import React from 'react'

const About = () => {
  return (
    <div class="md:flex items-center max-w-screen-2xl mt-20">
    <div class="md:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://images.hdqwalls.com/download/la-ferrari-rear-view-7c-1920x1080.jpg"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-red-500 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-red-500">Xehay.vn</span>
            </h2>
            <p class="text-gray-700">
                Chúng tôi là đơn vị phân phối xe hơi hàng đầu Việt Nam với đa dạng loại xe từ phân khúc giá rẻ đến những chiếc xe 
                sản xuất giới hạn từ những hãng xe nổi tiếng trên thế giới. Chúng tôi luôn đặt uy tín lên hàng đầu và đảm bảo cho khách hàng
                được sử dụng dịch vụ tốt nhất khi đã chọn chúng tôi.
            </p>
        </div>
    </div>
</div>
  )
}

export default About