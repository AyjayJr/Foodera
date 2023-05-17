export default function ModalMenu(props) {
    return (
        <div className='modal-bg' onClick={props.onClick}>
            <div className='modal-menu'>
                <ul>
                    <li onclick={props.onClick} ><a href='#'>Home</a></li>
                    <li onclick={props.onClick} ><a href='#'>About Us</a></li>
                    <li onclick={props.onClick} ><a href='#'>Explore Foods</a></li>
                    <li onclick={props.onClick} ><a href='#'>Reviews</a></li>
                    <li onclick={props.onClick} ><a href='#'>FAQ</a></li>
                </ul>
            </div>
        </div>
    );
}