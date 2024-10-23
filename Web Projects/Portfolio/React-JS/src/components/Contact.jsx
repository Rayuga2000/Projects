export default function Contact(){
    return(
        <section>
            <div className="card">
                <h1 className="header">Contact Me</h1>
                <hr />
                <div className="mt-4 flex justify-around contact_form divide-x divide-red-500">
                    <div className="p-4">
                        <label className="form-control w-full max-w-xl">
                        <div className="label">
                            <span className="label-text">What is your name?</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xl" />
                        </label>
                        <label className="form-control">
                        <div className="label">
                            <span className="label-text">Enter your Email</span>
                        </div>
                        <div className="input input-bordered flex items-center gap-2 max-w-xl">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="you@example.com" />
                        </div>
                        </label>
                        <label className="form-control max-w-xl">
                        <div className="label">
                            <span className="label-text">Write a Message!</span>
                        </div>
                        <input  type="text" placeholder="Enter Message" className="input input-bordered input-lg w-full max-w-xl" />
                        <button type="submit" className="mt-4 max-w-40 place-self-center">Send</button>
                        </label>
                    </div>
                    <div className="p-4 flex flex-col items-end gap-16">
                        <img src="/icons/github.svg" alt="Github"/>
                        <img src="/icons/linkedin.svg" alt="LinkedIn"/>
                        <img src="/icons/instagram.svg" alt="Instagram"/>
                    </div>
                </div>
            </div>
        </section>
    )
}