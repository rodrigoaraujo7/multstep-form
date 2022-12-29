export const UserForm = () => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Place your name" 
                    required 
                />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Place your name" 
                    required 
                />
            </div>
        </div>
    )
}