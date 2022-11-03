import React from 'react';
import connectDb from '../lib/connectDb'

const Responses = ({responses}) => {
    console.log(responses)
    return (
        <div className="py-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 " >

        
            {responses.map((response,index) => {

                return(
                    <div className="bg-slate-200 py-10 " key={response._id} >
                            <h2 className='text-center' >{index + 1}</h2>
                            <h1>Name: {response.name}</h1>
                            <h1>Email: {response.email}</h1>
                            <h1>Transaction Id: {response.transaction_id}</h1>
                            <h1>Payment Method: {response.paymentMehod}</h1>
                    </div>
                )

            })}
          

        </div>
    );
};

export default Responses;

export async function getServerSideProps(context) {
    const db = await connectDb();
    const allRes = await db.collection("responses").find({}).toArray();
    return {
        props: { responses: JSON.parse(JSON.stringify(allRes)) }, // will be passed to the page component as props
    }
}