import '../App.css'

function BlogPost({title, date, content}) {
    return (
        <div class="text-box">
            <article>
                <h3>{title}</h3>
                <p className="date">{date}</p>
                <p>{content}</p>
            </article>
        </div>
    )
}

export default BlogPost