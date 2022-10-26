import React from 'react';
import { toast } from 'react-toastify';

const BuyNow = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: e.target.fullname.value,
            email: e.target.email.value,
            bkashNumber: e.target.bkash.value,
            transaction_id: e.target.transaction_id.value

        }
        console.log(data);

        toast.success('🦄 Wow so easy!');

    }




    return (
        <div className="bg-neutral-800 h-[100vh] flex justify-center flex-col items-center py-36 text-white " >
            <h2 className="font-display text-4xl lg:text-5xl font-light italic " > Track Name: <span className="not-italic font-normal border-b-2" >Jinghani</span> </h2>

            <h2 className="font-type text-2xl mt-7">Price: ৳50.00 Only</h2>
            <div >
                <form onSubmit={handleSubmit} className='font-type mt-24 flex flex-col gap-7 w-full lg:w-auto px-10 lg:px-0' >

                    <div className='flex flex-col items-start xl:justify-between' >
                        <h2>Full Name</h2>
                        <input type="text" required name="fullname" className="border-b bg-neutral-800 border-white xl:w-96 py-1 px-2 w-full" />
                    </div>
                    <div className='flex flex-col items-start xl:justify-between' >
                        <h2>Email</h2>
                        <input type="email" required name="email" className="border-b bg-neutral-800 border-white xl:w-96 py-1 px-2 w-full" />
                    </div>
                    <div className='flex flex-col items-start xl:justify-between' >
                        <h2>Your Bkash Number</h2>
                        <small className='mt-2' >Send ৳500 to: 01687479135</small>
                        <input type="tel" required name="bkash" className="border-b bg-neutral-800 border-white xl:w-96 py-1 px-2 w-full" />
                    </div>

                    <div className='flex flex-col items-start xl:justify-between' >
                        <h2>Transaction ID</h2>
                        <input type="text" required name="transaction_id" className="border-b bg-neutral-800 border-white xl:w-96 py-1 px-2 w-full" />
                    </div>



                    <div className='flex justify-center mt-3'><button type='submit' className='bg-transparent px-7 py-2  font-display text-md flex items-center gap-2 rounded-md  border-[1px] border-white hover:bg-main hover:border-main  hover:text-neutral-800 hover:bg-white transition-all' >BUY NOW </button></div>


                </form>

            </div>
            <div className='mt-4 px-4 text-center'>
                <small>Song will be delivered  within 12 hours after a successful transaction via email.</small>

            </div>
        </div>
    );
};

export default BuyNow;