const Task = ({text, completed, id}) => {
    if(text !== ""){
        return <section className="task-container" key={id}>
                <p className="task-text-content">{text}</p>
                <div className="buttons">
                    <div className="calendar-btn">
                        <i className="fa-solid fa-calendar-days"></i>
                    </div>
                    <div className="close-btn">
                        <i className="fa-solid fa-rectangle-xmark"></i>
                    </div>
                </div>
            </section>
    }else{
        return <></>
    }
}

export default Task