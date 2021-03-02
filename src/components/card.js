
import React, { useState } from 'react'
import '../App.css';

function FeedbackForm() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [price, setPrice] = useState()

    const submit = e => {
        e.preventDefault();
        const url = 'https://product-price-checker.herokuapp.com/product/saveProductDetails'

        var requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "name": name, "email": email, "url": url, "price": price })
        }

        fetch(url, requestOptions)
            .then(data => { console.log("Working") })
            .catch((e)=>console.log(e))
    }

    return (
        <form onSubmit={submit} className="bac_img">
            <div className="c_c">
                <div className="column1" id="main">
                    <h3 style={{ fontSize: '1.5rem' }}>Steps</h3>
                    <br></br>
                    <p>1) Copy URL of the product on amazon.</p>
                    <br></br>
                    <p>2) Paste it in the text box above the submit button.</p>
                    <br></br>
                    <p>3) Fill the rest of the Form.</p>
                    <br></br>
                    <p>4) Submit it.</p>
                    <br></br>
                </div>
                <div className="column2">
                    <h2 style={{ color: 'white', fontSize: '1.5rem' }}>Recieve Mail on price Drop</h2>
                    <br></br>
                    <input className="as" type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your Name" />
                    <input className="as" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your Email" />
                    <input className="as" type="url" name="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="Enter the Url" />
                    <input className="as" type="number" name="price" value={price} onChange={e => setPrice(e.target.value)} placeholder="Enter Expected Price" />
                    <div className="a_b">
                        <input className="button_s" type="submit" value="Submit" />
                    </div>
                </div>
            </div>
        </form>
    );
}
export default FeedbackForm;