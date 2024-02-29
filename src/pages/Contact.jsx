import './Contact.css'
import EmailForm from '../components/EmailForm';

export default function Contact(){
    return(
        <div>
            <h1 style={{textAlign:'center'}}>Send me a message</h1>
            <p style={{textAlign:'center'}}>I will reply as soon as possible</p>
            <EmailForm/>
            <p></p>
        </div>
    );
}