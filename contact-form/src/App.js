import submitForm from "./submitForm";
export default function App(){
    return (
        <form onSubmit={submitForm}
            action="https://www.greatfrontend.com/api/questions/contact-form"
            method="post">
            <div>
                <label htmlFor="name-input">Name</label>
                <input type="text" id="name-input" name="name" />
            </div>
            <div>
                <label htmlFor="email-input">Email</label>
                <input id="email-input" name="email" type="email" />
             </div>
             <div>
                <label htmlFor="message-input">Message</label>
                <textarea id="message-input" name="message"></textarea>
             </div>
             <div>
                 <button>Send</button>
             </div>
        </form>
    )
}