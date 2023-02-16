import React from 'react'

const Contact = () => {
  return (
    <div
    name='contact'
    className="w-full h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 text-black"
    >

     <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 font-stick">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/e064a309-f4a4-461d-a110-b42ea7c26636"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-black rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-black rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 border-black rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-tr from-gray-500 via-gray-400 to-black px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
      
      
    </div>
  )
}

export default Contact