import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        const isFormValid = Array.from(formRef.current.elements).every((element) => {
            return element.type !== 'text' || element.value.trim() !== '';
        });
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(formRef.current.user_email.value.trim());
    
        // Check if the message field is not empty
        const isMessageValid = formRef.current.message.value.trim() !== '';
    
        if (isFormValid && isEmailValid && isMessageValid) {
            emailjs.sendForm('service_st4dnhi', 'template_0o4r7xi', formRef.current, 'tF5dCAu1G2nWthYX5')
                .then((result) => {
                    console.log(result.text);
                    console.log("message sent");
                    formRef.current.reset();
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            if (!isMessageValid) {
                alert('Please type a message before sending.');
            } else {
                alert('Please fill in all fields with valid information.');
            }
        }
    };
    

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const form = e.target.form;
            const index = Array.prototype.indexOf.call(form, e.target);
            const nextElement = form.elements[index + 1];

            if (nextElement) {
                nextElement.focus();
            }
        }
    };
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };


    return (
        <>
            <div className=' bg-slate-900 '>
                <div className='flex flex-col'>
                    <div className="w-screen flex justify-center align-middle">
                        <div className="font-extrabold text-8xl w-1/2 h-1/4 text-white-300 flex items-center justify-center mt-28 -mb-20 ">Contact Us.</div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className=" w-2/3 bg mt-32 " src={process.env.PUBLIC_URL + '/ye.png'} alt="My" />
                    </div>
                    <div className='flex my-20'>
                        <div className='mt-20 w-3/5 ml-24  h-[543px]'>
                            <div className=' text-5xl font-bold'>May Be One Of These Top FAQ's Can Help:</div>
                            <div className=' mt-16 w-11/12'>
                                <ul>
                                    <li className="quest mt-5 mb-3 text-3xl font-bold" style={{ listStyleType: 'disc', marginBottom: '8px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</li>
                                    <li className='ans text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab expedita illum labore mollitia obcaecati incidunt voluptatem eveniet harum ea?</li>
                                    <li className="quest mt-5 mb-3 text-3xl font-bold" style={{ listStyleType: 'disc', marginBottom: '8px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</li>
                                    <li className='ans text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nostrum laborum ipsum. Dolorem quae quaerat debitis?</li>
                                    <li className="quest mt-5 mb-3 text-3xl font-bold" style={{ listStyleType: 'disc', marginBottom: '8px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit?</li>
                                    <li className='ans text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam nostrum laborum ipsum. Dolorem quae quaerat debitis?</li>
                                </ul>

                            </div>
                        </div>
                        <div className='mt-12 w-[572px] h-[543px]'>
                            <img className=" mr-14 mt-20 " src={process.env.PUBLIC_URL + '/nayahe.png'} alt="My" />
                        </div>
                    </div>

                    <div className="flex items-center justify-center text-6xl font-bold w-full mt-28">We'd Love To Hear From You!</div>
                    <div className="mt-10 flex">
                        <div className=" mt-20 w-[572px] h-[543px] text-center text-white text-[40px] items-center justify-center">
                            <img className=" mt-16 ml-32" src={process.env.PUBLIC_URL + '/newcontact2.png'} alt="My" />
                        </div>
                        <div className='box w-[682px] h-[700px] ml-auto mr-44 mb-44 mt-28 border-4 border-cyan-400 rounded-[40px] flex flex-col items-center'>
                            <div className='mt-5 text-4xl mb-3 font-bold underline underline-offset-8 decoration-cyan-400 tracking-wide'>Get In Touch</div>
                            <div className=' text-white'>
                                <form ref={formRef} onSubmit={sendEmail}>
                                    <div className='mb-3 flex flex-col'>
                                        <label className="text-white mt-4 mb-2 font-bold text-2xl" htmlFor="user_name">Name:</label>
                                        <input
                                            className='bg-sky-950 border-4 border-cyan-400 rounded-[40px] pl-5 pr-3'
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            placeholder="Your Name"
                                            onKeyDown={handleKeyDown}
                                        />
                                    </div>
                                    <div className='mb-3 flex flex-col'>
                                        <label className="text-white mt-4 mb-2 font-bold text-2xl" htmlFor="user_email">Email:</label>
                                        <input
                                            className='bg-sky-950 border-4 border-cyan-400 rounded-[40px] pl-5 pr-3'
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            placeholder="Your Email"
                                            onKeyDown={handleKeyDown}
                                        />
                                    </div>
                                    <div className='mb-4 flex flex-col'>
                                        <label className="text-white mt-4 mb-2 font-bold text-2xl" htmlFor="message">Message:</label>
                                        <textarea
                                            className='bg-sky-950 border-4 border-cyan-400 rounded-[20px] pl-5 pr-3 h-32'
                                            id="message"
                                            name="message"
                                            placeholder="Message"
                                        />
                                    </div>
                                    <input type="submit" value="Send" className='bg-sky-950 text-2xl font-bold mt-3 hover:bg-cyan-500 py-2 px-4 rounded-[10px] border-4 border-cyan-400 ml-96' />
                                </form>


                            </div>
                        </div>
                    </div>

                 
                </div>
                <div className="w-full flex-col mt-40 pb-40">
                    <div className="flex items-center justify-center text-6xl font-bold w-full mb-12 ">Also find us on </div>
                    <div className="flex items-center justify-center w-full">
                        <a href="https://github.com/Raya679/WakefulWorkforce/tree/fullBranch" className="w-60 h-auto rounded-[10px] border-1 border-cyan-400 mx-20 my-24 hover:bg-cyan-400 hover:text-slate-900 ">
                            <div className="flex items-center justify-center my-5">
                                <img className=" w-36" src="./github.png" alt="" />
                            </div>
                            <div className="text-center my-3 font-bold text-2xl">Github</div>
                        </a>
                        <a
                            href="#"
                            className="w-60 h-auto rounded-[10px] border-1 border-cyan-400 mx-20 my-24 hover:bg-cyan-400 hover:text-slate-900"
                            onClick={() => {
                                const email = 'richasawant205@gmail.com';
                                copyToClipboard(email);
                                alert('Email ID copied');
                            }}
                        >
                            <div className="flex items-center justify-center my-5">
                                <img className=" w-36" src="./email.png" alt="" />
                            </div>
                            <div className="text-center my-3 font-bold text-2xl">Email</div>
                        </a>
                        <a
                            href="#"
                            className="w-60 h-auto rounded-[10px] border-1 border-cyan-400 mx-20 my-24 hover:bg-cyan-400 hover:text-slate-900"
                            onClick={() => {
                                const phone = '1234567890';
                                copyToClipboard(phone);
                                alert('Phone number copied');
                            }}
                        >
                            <div className="flex items-center justify-center my-5">
                                <img className=" w-36" src="./phone.png" alt="" />
                            </div>
                            <div className="text-center my-3 font-bold text-2xl">Phone No.</div>

                        </a>

                    </div>

                </div>
            </div>
        </>
    );
}

export default ContactUs;
