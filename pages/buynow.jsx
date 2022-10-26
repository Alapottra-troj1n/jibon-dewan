import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

const BuyNow = () => {

    const router = useRouter();

    const handleSubmit = async(e) => {
        e.preventDefault();

      

        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: e.target.fullname.value,
                email: e.target.email.value,
                bkashNumber: e.target.bkash.value,
                transaction_id: e.target.transaction_id.value,
                verified: false
    
            })
        };


        const res = await fetch('http://localhost:3000/api/buyapi',settings);
        const result = await res.json();

        if(result.success) {
            await toast.success('Transaction successful. You will be notified via email shorty');
            await e.target.reset();
            await router.push('/')
        }


      

    }




    return (
        <div className="bg-neutral-800 flex justify-center flex-col items-center py-36 text-white " >
            <h2 className="font-display text-2xl lg:text-5xl font-light italic " > Track Name: <span className="not-italic font-normal border-b-2" >Mide Bhuyer</span> </h2>

            <h2 className="font-type text-xl mt-7">Price: ৳50.00 Only</h2>
            <small className="text-center text-red-400 mt-3">All the money earned from this track will be donated for Joya&apos;s cancer treatment</small>
            <div className='w-full lg:container lg:mx-auto lg:flex lg:justify-center' >
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
                        <small className='mt-2' >Send ৳50 to: </small>
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