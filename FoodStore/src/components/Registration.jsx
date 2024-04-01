import React from 'react';

const Registration = () => {
    return (
        <>
            <div class="pen-title"></div>
            <div class="module form-module">
                <div class="toggle">
                    <i class="fa fa-times fa-pencil"></i>
                    <div class="tooltip">Click Me</div>
                </div>
                <div class="form">
                    <h2>Create an account</h2>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="email" placeholder="Email Address" />
                        <input type="tel" placeholder="Phone Number" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
            ;
        </>
    );
};

export { Registration };
