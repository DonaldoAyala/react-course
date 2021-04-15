const Title = (props) => {
    return (
        <>
        <div id={props.id} className='title' >
            <h2>
                {props.content}
            </h2>
        </div>
        </>
    )
}

export default Title;