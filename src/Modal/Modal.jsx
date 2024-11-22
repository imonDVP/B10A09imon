

const Modal = () => {
    return (
// {/* Open the modal using document.getElementById('ID').showModal() method */}
// {/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            <h3 className="font-bold text-lg text-green-500">For Consultation</h3>
            <p className="py-4">Contact on Google Meet between <span className="text-blue-700">10:00am - 8:00pm</span></p>
            <div className="modal-action">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn text-red-700">Close</button>
                </form>
            </div>
        </div>
    </dialog>
    );
};

export default Modal;