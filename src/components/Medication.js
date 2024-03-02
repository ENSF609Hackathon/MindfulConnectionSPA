export const Medication = (props) => {
    return(
        <button className='list-group-item list-group-item-action d-flex gap-5 py-3'
                aria-current='true'>
            <div className='d-flex flex-row '>
                <div className='mx-3'>
                    <p className='mb-0'>Drug: {props.drug}</p>
                    <p className='mb-0'>Dose: {props.dose}</p>
                    <p className='mb-0'>Freq: {props.frequency}</p>
                    <p className='mb-0'>Prescriber: {props.prescriber}</p>
                    <p className='mb-0'>Date: {props.date}</p>
                </div>
            </div>
        </button>
    )
}