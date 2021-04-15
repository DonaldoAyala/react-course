const Title = (props) => {
    return (
        <>
        <div className={props.background + ' ' + 'title'} >
            <h2>
                {props.content}
            </h2>
        </div>
        </>
    )
}

export default Title;