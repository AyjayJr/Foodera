export default function ModalMenu(props) {
    return (
        <div className='modal-bg' onClick={props.onClick}>
            <div className='modal-menu'>
                <ul>
                    <li onclick={props.onClick} ><a href='#hero'>Home</a></li>
                    <li onclick={props.onClick} ><a href='#about'>About Us</a></li>
                    <li onclick={props.onClick} ><a href='#meals'>Explore Foods</a></li>
                    <li onclick={props.onClick} ><a href='#reviews'>Reviews</a></li>
                    <li onclick={props.onClick} ><a href='#faq'>FAQ</a></li>
                </ul>
            </div>
        </div>
    );
}
