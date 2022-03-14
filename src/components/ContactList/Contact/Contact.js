import userImage from '../../../asset/images-removebg-preview.png'


const Contact = ({ contact, onDelete }) => {
    const { email, name, id } = contact;
   
    return (
        <div className='item' key={id}>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={userImage} alt="user" />
                <div >
                    <p>name : {name}</p>
                    <p>email : {email}</p>
                </div>
            </div>
            <button onClick={() => onDelete(id)}>delete</button>
        </div>
    );
}

export default Contact;