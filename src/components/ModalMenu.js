export default function ModalMenu(props) {
    return (
        <div className='modal-bg' onClick={props.onClick}>
            <div className='modal-menu'>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Explore Foods</a></li>
                    <li><a href='#'>Reviews</a></li>
                    <li><a href='#'>FAQ</a></li>
                </ul>
            </div>
        </div>
    );
}